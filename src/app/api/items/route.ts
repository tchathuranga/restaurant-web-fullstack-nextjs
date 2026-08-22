import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Item from '@/models/Items';
import { getSubcategory } from '@/const/itemSubcategories';

export async function GET() {
  try {
    await dbConnect();

    const rawItems = await Item.collection.find({}).toArray();
    const missingSubcategory = rawItems.filter((item) => !item.subcategory);

    if (missingSubcategory.length > 0) {
      await Item.collection.bulkWrite(
        missingSubcategory.map((item) => ({
          updateOne: {
            filter: { _id: item._id },
            update: {
              $set: {
                subcategory: getSubcategory(item.title, item.category),
              },
            },
          },
        }))
      );
    }

    const data = await Item.find({});

    return NextResponse.json(
      { success: true, data },
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
