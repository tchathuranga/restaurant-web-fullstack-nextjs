import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import { Types } from "mongoose";
import Vacancy from "@/models/vacancy";

// GET single vacancy by ID
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  try {
    await dbConnect();

    const { id } = await context.params;

    // Validate MongoDB ObjectId
    if (!Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid vacancy ID",
        },
        { status: 400 },
      );
    }

    const vacancy = await Vacancy.findById(id);

    if (!vacancy) {
      return NextResponse.json(
        {
          success: false,
          error: "Vacancy not found",
        },
        { status: 404 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: vacancy,
      },
      { status: 200 },
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message || "Failed to fetch vacancy",
      },
      { status: 500 },
    );
  }
}