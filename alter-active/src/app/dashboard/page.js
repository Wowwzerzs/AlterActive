"use client"
import React, { useState } from 'react';
import { useSession } from "next-auth/react";
import { MegaMenuDefault } from "../components/Navbar";
import Footer from "../components/Footer";
import AddWorkout from "../components/AddWorkout";
import WorkoutCardContainer from '../components/WorkoutCardContainer';

function Dashboard() {
  // Define workoutCards state
  const [workoutCards, setWorkoutCards] = useState([]);
  const { data: session } = useSession();

  return (
    <div className="min-h-screen flex flex-col bg-cover bg-center bg-gradient-to-br from-green-400 to-blue-500">
      <MegaMenuDefault />
      <div className="flex-grow px-4 py-12 md:py-24 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-8">Welcome back, {session?.user?.name || "User"}!</h1>
          <AddWorkout setWorkoutCards={setWorkoutCards} />
          <WorkoutCardContainer workoutCards={workoutCards} />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Dashboard;
