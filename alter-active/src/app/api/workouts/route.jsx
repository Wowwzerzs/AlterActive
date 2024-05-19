import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
  const workouts = await prisma.exercises.findMany();
  
};