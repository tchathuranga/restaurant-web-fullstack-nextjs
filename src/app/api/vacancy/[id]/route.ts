import { NextRequest, NextResponse } from "next/server";
import { prisma, withLegacyId } from "@/lib/prisma";

// GET single vacancy by ID
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await context.params;

    const vacancy = await prisma.vacancy.findUnique({ where: { id } });

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
        data: withLegacyId(vacancy),
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
