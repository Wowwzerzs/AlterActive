import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request) {
  const formData = await request.formData();
  const name = formData.get("name");
  const muscleGroup = formData.get("muscleGroup");

  try {
    const workout = await prisma.exercises.create({
      data: {
        name,
        muscleGroup,
      },
    });
    return NextResponse.json(workout, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to add workout." },
      { status: 500 }
    );
  }
}
