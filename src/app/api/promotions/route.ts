import { NextRequest, NextResponse } from 'next/server';
import { prisma, withLegacyId } from '@/lib/prisma';

// GET all promotions
export async function GET(request: NextRequest) {
  try {
    const promotionItems = await prisma.promotion.findMany({ orderBy: { createdAt: 'desc' } });
    return NextResponse.json(
      {
        success: true,
        data: promotionItems.map(withLegacyId),
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to fetch promotions',
      },
      { status: 500 }
    );
  }
}
