import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const workouts = await prisma.exercises.findMany({
      where: {
        muscleGroup: {
          value: "Chest",
        },
      },
    });
    return NextResponse.json(workouts, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to fetch workouts." },
      { status: 500 }
    );
  }
}
