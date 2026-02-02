import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Item from '@/models/Items';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const items = await Item.find({});

    return NextResponse.json(
      { success: true, data: items },
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