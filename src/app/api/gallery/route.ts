import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import gallery from '@/models/gallery';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();
    const galleryItems = await gallery.find().sort({ createdAt: -1 });
    return NextResponse.json(
      {
        success: true,
        data: galleryItems,
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