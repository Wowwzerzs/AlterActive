const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const chestExercises = await prisma.exercises.createMany({
    data: [
      {
        name: "Barbell Bench Press",
        muscleGroup: "Chest",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Barbell Incline Bench Press",
        muscleGroup: "Chest",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Barbell Decline Bench Press",
        muscleGroup: "Chest",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Incline Dumbbell Bench Press",
        muscleGroup: "Chest",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Dumbbell Bench Press",
        muscleGroup: "Chest",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Decline Dumbbell Bench Press",
        muscleGroup: "Chest",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Dumbbell Incline Chest Fly",
        muscleGroup: "Chest",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Dumbbell Decline Chest Fly",
        muscleGroup: "Chest",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Cable Pec Fly",
        muscleGroup: "Chest",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Cable Chest Press",
        muscleGroup: "Chest",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Cable Incline Chest Fly",
        muscleGroup: "Chest",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Cable Decline Chest Fly",
        muscleGroup: "Chest",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
    ],
  });

  const backExercises = await prisma.exercises.createMany({
    data: [
      {
        name: "Pull-ups",
        muscleGroup: "Back",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Chin-ups",
        muscleGroup: "Back",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Wide-Grip Lat Pulldown",
        muscleGroup: "Back",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Barbell Bent Over Row",
        muscleGroup: "Back",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "T-Bar Row",
        muscleGroup: "Back",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Machine Seated Cable Row",
        muscleGroup: "Back",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Barbell Deadlift",
        muscleGroup: "Back",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Hyperextensions",
        muscleGroup: "Back",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Back Extension",
        muscleGroup: "Back",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Reverse Fly",
        muscleGroup: "Back",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Dumbbell Row",
        muscleGroup: "Back",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Neutral-Grip Lat Pulldown",
        muscleGroup: "Back",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Dumbbell Deadlift",
        muscleGroup: "Back",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Single-Arm Dumbbell Row",
        muscleGroup: "Back",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Seated Cable Row",
        muscleGroup: "Back",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Barbell Shrugs",
        muscleGroup: "Back",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Dumbbell Shrugs",
        muscleGroup: "Back",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Machine Shrugs",
        muscleGroup: "Back",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
    ],
  });

  const legExercises = await prisma.exercises.createMany({
    data: [
      {
        name: "Barbell Back Squat",
        muscleGroup: "Legs",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Barbell Romaninan Deadlift",
        muscleGroup: "Legs",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Barbell Front Squat",
        muscleGroup: "Legs",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Barbell Hip Thrust",
        muscleGroup: "Legs",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Dumbbell Hip Thrust",
        muscleGroup: "Legs",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Barbell Split Squat",
        muscleGroup: "Legs",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Dumbbell Split Squat",
        muscleGroup: "Legs",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Dumbbell Goblet Squat",
        muscleGroup: "Legs",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Leg Press",
        muscleGroup: "Legs",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Leg Extension",
        muscleGroup: "Legs",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Machine Hamstring Curl",
        muscleGroup: "Legs",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Machine Seated Leg Curl",
        muscleGroup: "Legs",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Dumbbell Step-Up",
        muscleGroup: "Legs",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Dumbbell Romanian Deadlift",
        muscleGroup: "Legs",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Lunges",
        muscleGroup: "Legs",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Seated Calf Raise",
        muscleGroup: "Legs",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Standing Calf Raise",
        muscleGroup: "Legs",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Hack Squat",
        muscleGroup: "Legs",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Smith Machine Squat",
        muscleGroup: "Legs",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Smith Machine Lunge",
        muscleGroup: "Legs",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Smith Machine Calf Raise",
        muscleGroup: "Legs",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Walking Lunges",
        muscleGroup: "Legs",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
    ],
  });

  const shoulderExercises = await prisma.exercises.createMany({
    data: [
      {
        name: "Barbell Overhead Press",
        muscleGroup: "Shoulders",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Barbell Seated Overhead Press",
        muscleGroup: "Shoulders",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Dumbbell Overhead Press",
        muscleGroup: "Shoulders",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Dumbbell Seated Overhead Press",
        muscleGroup: "Shoulders",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Dumbbell Lateral Raise",
        muscleGroup: "Shoulders",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Dumbbell Front Raise",
        muscleGroup: "Shoulders",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Dumbbell Rear Delt Fly",
        muscleGroup: "Shoulders",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Dumbbell Arnold Press",
        muscleGroup: "Shoulders",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Machine Reverse Fly",
        muscleGroup: "Shoulders",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Dumbbell Seated Rear Delt Row",
        muscleGroup: "Shoulders",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Dumbbell Seated Arnold Press",
        muscleGroup: "Shoulders",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Barbell Push Press",
        muscleGroup: "Shoulders",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Dumbbell Push Press",
        muscleGroup: "Shoulders",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Machine Shoulder Press",
        muscleGroup: "Shoulders",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
    ],
  });

  const bicepExercises = await prisma.exercises.createMany({
    data: [
      {
        name: "Barbell Curl",
        muscleGroup: "Biceps",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Dumbbell Curl",
        muscleGroup: "Biceps",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Preacher Curl",
        muscleGroup: "Biceps",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Hammer Curl",
        muscleGroup: "Biceps",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Zottman Curl",
        muscleGroup: "Biceps",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Cable Curl",
        muscleGroup: "Biceps",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Ez-Bar Curl",
        muscleGroup: "Biceps",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Machine Curl",
        muscleGroup: "Biceps",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Reverse Curl",
        muscleGroup: "Biceps",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Concentration Curl",
        muscleGroup: "Biceps",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Spider Curl",
        muscleGroup: "Biceps",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Ez-bar Reverse Curl",
        muscleGroup: "Biceps",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Single-Arm Cable Curl",
        muscleGroup: "Biceps",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Single-Arm Dumbbell Curl",
        muscleGroup: "Biceps",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Single-Arm Preacher Curl",
        muscleGroup: "Biceps",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Single-Arm Hammer Curl",
        muscleGroup: "Biceps",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
    ],
  });

  const tricepExercises = await prisma.exercises.createMany({
    data: [
      {
        name: "Tricep Dips",
        muscleGroup: "Triceps",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Close-Grip Bench Press",
        muscleGroup: "Triceps",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Skull Crushers",
        muscleGroup: "Triceps",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Tricep Pushdown",
        muscleGroup: "Triceps",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Overhead Tricep Extension",
        muscleGroup: "Triceps",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Tricep Kickback",
        muscleGroup: "Triceps",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Close-Grip Push-Up",
        muscleGroup: "Triceps",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Tricep Rope Pushdown",
        muscleGroup: "Triceps",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Tricep Rope Overhead Extension",
        muscleGroup: "Triceps",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Tricep Rope Kickback",
        muscleGroup: "Triceps",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Single-Arm Tricep Pushdown",
        muscleGroup: "Triceps",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Single-Arm Overhead Tricep Extension",
        muscleGroup: "Triceps",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Single-Arm Tricep Kickback",
        muscleGroup: "Triceps",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Cable Ez-Bar Tricep Pushdown",
        muscleGroup: "Triceps",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Cable Ez-Bar Overhead Tricep Extension",
        muscleGroup: "Triceps",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Cable V-Bar Tricep Pushdown",
        muscleGroup: "Triceps",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
    ],
  });

  const coreExercises = await prisma.exercises.createMany({
    data: [
      {
        name: "Plank",
        muscleGroup: "Core",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Side Plank",
        muscleGroup: "Core",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Russian Twist",
        muscleGroup: "Core",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Leg Raise",
        muscleGroup: "Core",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Hanging Leg Raise",
        muscleGroup: "Core",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Bicycle Crunch",
        muscleGroup: "Core",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Mountain Climber",
        muscleGroup: "Core",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Flutter Kick",
        muscleGroup: "Core",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "V-Up",
        muscleGroup: "Core",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Sit-Up",
        muscleGroup: "Core",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Crunch",
        muscleGroup: "Core",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Reverse Crunch",
        muscleGroup: "Core",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Hollow Body Hold",
        muscleGroup: "Core",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Barbell Rollout",
        muscleGroup: "Core",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Ab Wheel Rollout",
        muscleGroup: "Core",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Bird Dog",
        muscleGroup: "Core",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Dead Bug",
        muscleGroup: "Core",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Medicine Ball Russian Twist",
        muscleGroup: "Core",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Medicine Ball Slam",
        muscleGroup: "Core",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Medicine Ball V-Up",
        muscleGroup: "Core",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Medicine Ball Sit-Up",
        muscleGroup: "Core",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Medicine Ball Crunch",
        muscleGroup: "Core",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
    ],
  });

  const cardioExercises = await prisma.exercises.createMany({
    data: [
      {
        name: "Running",
        muscleGroup: "Cardio",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Cycling",
        muscleGroup: "Cardio",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Swimming",
        muscleGroup: "Cardio",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Jump Rope",
        muscleGroup: "Cardio",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Rowing",
        muscleGroup: "Cardio",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Stair Climber",
        muscleGroup: "Cardio",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Elliptical",
        muscleGroup: "Cardio",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Assualt Bike",
        muscleGroup: "Cardio",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Treadmill",
        muscleGroup: "Cardio",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Sprints",
        muscleGroup: "Cardio",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Wind Sprints",
        muscleGroup: "Cardio",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
      {
        name: "Burpees",
        muscleGroup: "Cardio",
        createdAt: new Date("2024-05-15 12:00:00"),
      },
    ],
  });

  // console.log({
  //   chestExercises,
  //   backExercises,
  //   legExercises,
  //   shoulderExercises,
  //   bicepExercises,
  //   tricepExercises,
  //   coreExercises,
  //   cardioExercises,
  // });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
