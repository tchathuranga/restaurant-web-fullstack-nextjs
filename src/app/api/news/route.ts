import { NextRequest, NextResponse } from 'next/server';
import { prisma, withLegacyId } from '@/lib/prisma';

// GET all news
export async function GET(request: NextRequest) {
  try {
    const news = await prisma.news.findMany({ orderBy: { createdAt: 'desc' } });

    return NextResponse.json(
      {
        success: true,
        data: news.map(withLegacyId),
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to fetch news',
      },
      { status: 500 }
    );
  }
}
