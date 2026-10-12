import { NextRequest, NextResponse } from 'next/server';
import { prisma, withLegacyId } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const galleryItems = await prisma.gallery.findMany({ orderBy: { createdAt: 'desc' } });
    return NextResponse.json(
      {
        success: true,
        data: galleryItems.map(withLegacyId),
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to fetch gallery items',
      },
      { status: 500 }
    );
  }
}
