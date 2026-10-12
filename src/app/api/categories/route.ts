import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

// GET menu categories in display order, each with its subcategories in order
export async function GET() {
  try {
    const rows = await prisma.menuCategory.findMany({
      orderBy: { order: 'asc' },
      include: { subcategories: { orderBy: { order: 'asc' } } },
    });
    const data = rows.map((c) => ({ name: c.name, subcategories: c.subcategories.map((s) => s.name) }));
    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}
