"use client";
import React, { useState } from 'react';
import { useSession } from "next-auth/react";
import AddWorkout from "../components/AddWorkout"
import WorkoutCardContainer from '../components/WorkoutCardContainer';


  // if (status === "authenticated") {
  //   return <p>Signed in as {session.user.email}</p>;
  // }

  // return <a href="/api/auth/signin">Sign in</a>;

function Dashboard() {
  const { data: session, status } = useSession();
  // Define workoutCards state
  const [workoutCards, setWorkoutCards] = useState([]);

  return (
    <div className='bg-black'>
      <AddWorkout setWorkoutCards={setWorkoutCards} />
      <WorkoutCardContainer workoutCards={workoutCards} />
    </div>
  )
}

export default Dashboard;

