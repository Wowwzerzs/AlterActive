const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// export default async function handler(req, res) {
//   const { name } = req.body;

//   try {
//     const exercise = await prisma.exercise.create({
//       data: {
//         name,
//       },
//     });

//     res.status(200).json(exercise);
//   } catch (error) {
//     res.status(400).json({ message: "An error occurred" });
//   }
// }

export default async function handler(req, res) {
  // const requestMethod = req.method;
  // const body = JSON.parse(req.body);
  const exercises = await prisma.exercises.findMany();
  console.log(exercises);
  return res.status(200).json({ exercises });
  /* switch (requestMethod) {
    case "POST":
      res.status(200).json({ exercises });
      break;
    default:
      res.status(405).end();
      break;
  } */
}

// export async function getExercisesForUser() {
//   const exercises = await prisma.exercises.findMany({
//     where: {
//       userId: 1,
//     },
//   });
// }

// Bench Press -> exercise for chest -> 2024-05-15 12:00:00
// Squats -> exercise for legs -> 2024-05-15 12:00:00
