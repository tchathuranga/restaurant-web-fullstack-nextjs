import { NextResponse } from 'next/server';
import { prisma, withLegacyId } from '@/lib/prisma';
import { getSubcategory } from '@/const/itemSubcategories';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const rawItems = await prisma.item.findMany({ orderBy: { createdAt: 'asc' } });
    const missingSubcategory = rawItems.filter((item) => !item.subcategory);

    // Backfill the subcategory for older items so it is only derived once
    if (missingSubcategory.length > 0) {
      await prisma.$transaction(
        missingSubcategory.map((item) => {
          item.subcategory = getSubcategory(item.title, item.category);
          return prisma.item.update({
            where: { id: item.id },
            data: { subcategory: item.subcategory },
          });
        })
      );
    }

    return NextResponse.json(
      { success: true, data: rawItems.map(withLegacyId) },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching items:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch items' },
      { status: 500 }
    );
  }
}
