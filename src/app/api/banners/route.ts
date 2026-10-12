import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

// GET banner images keyed by page, e.g. { home: [...], "contact-us": [...] }
export async function GET() {
  try {
    const banners = await prisma.siteBanner.findMany();
    const data: Record<string, string[]> = {};
    for (const banner of banners) {
      data[banner.page] = banner.images as string[];
    }
    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch banners' },
      { status: 500 }
    );
  }
}
