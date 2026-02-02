import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Vacancy from '@/models/vacancy';

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const vacancies = await Vacancy.find().sort({ createdAt: -1 });

    return NextResponse.json(
      {
        success: true,
        data: vacancies,
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to fetch vacancies',
      },
      { status: 500 }
    );
  } 
}