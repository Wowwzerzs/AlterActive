"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { MegaMenuDefault } from "../components/Navbar";
import AddWorkout from "../components/AddWorkout";
import WorkoutCardContainer from "../components/WorkoutCardContainer";

function Dashboard() {
  // Define workoutCards state
  const [workoutCards, setWorkoutCards] = useState([]);

  return (
    <div className="bg-black">
      <MegaMenuDefault />
      <AddWorkout setWorkoutCards={setWorkoutCards} />
      <WorkoutCardContainer workoutCards={workoutCards} />
    </div>
  );
}

export default Dashboard;
