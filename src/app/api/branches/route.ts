import { NextResponse } from 'next/server';
import { prisma, withLegacyId } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

// GET all branches in display order
export async function GET() {
  try {
    const rows = await prisma.branch.findMany({ orderBy: [{ order: 'asc' }, { createdAt: 'asc' }] });
    return NextResponse.json({ success: true, data: rows.map(withLegacyId) }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch branches' },
      { status: 500 }
    );
  }
}
