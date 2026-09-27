"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import { WorkoutContext } from "@/context/workoutContext";
import Image from "next/image";
import { LuClock } from "react-icons/lu";
import { PiFireSimpleFill } from "react-icons/pi";
import { FaRegStar, FaCheck } from "react-icons/fa6";
import { IWorkout } from "@/types/workout.type";
import { LiaTimesSolid } from "react-icons/lia";

const MyPlansPage = () => {
    const { workoutPlan, savedWorkout, removeWorkout, toggleWorkoutDone, removeSavedWorkout } = useContext(WorkoutContext)!;

    const [activeTab, setActiveTab] = useState("today plan");

    return (
        <div className="px-[5vw] py-10">
            <div className="max-w-7xl mx-auto">
                <div className="mb-6">
                    <h2 className="sm:text-3xl text-2xl uppercase font-bold tracking-[-0.75px]">
                        MY PLAN
                    </h2>
                    <p className="sm:text-sm text-xs mt-1">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>
                <div className="bg-surface border border-border rounded-2xl overflow-hidden grid grid-cols-3 mb-6 p-6">

                    <div className="pr-6">
                        <p className="text-xs mb-1">Exercises</p>
                        <h2 className="sm:text-4xl text-2xl font-bold">
                            2
                        </h2>
                    </div>
                    <div className="px-6 border-l border-r border-border">
                        <p className="text-xs mb-1">Minutes</p>
                        <h2 className="sm:text-4xl text-2xl font-bold">
                            23
                        </h2>
                    </div>
                    <div className="pl-6">
                        <p className="text-xs mb-1">Calories</p>
                        <h2 className="sm:text-4xl text-2xl font-bold">
                            190
                        </h2>
                    </div>
                </div>
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-1 bg-[#151921] border border-border rounded-lg p-1">
                        <button
                            onClick={() => setActiveTab("today plan")}
                            className={`
                                px-5 py-2 rounded-md text-xs uppercase font-bold tracking-wide transition
                                ${
                                    activeTab === "today plan"
                                    ? "bg-[#1F242D] text-white border border-[#2B303D]"
                                    : "text-text-secondary hover:text-white"
                                }
                            `}
                        >
                            Today Plan
                        </button>
                        <button
                            onClick={() => setActiveTab("saved plan")}
                            className={`
                                px-5 py-2 rounded-md text-xs uppercase font-bold tracking-wide transition
                                ${
                                    activeTab === "saved plan"
                                    ? "bg-[#1F242D] text-white border border-[#2B303D]"
                                    : "text-text-secondary hover:text-white"
                                }
                            `}
                        >
                            Saved Plan
                        </button>
                    </div>
                    <button className="btn-global">
                        Filter
                    </button>
                </div> 
                <div className="mt-8">
                    {activeTab === "today plan" && (
                        workoutPlan.length === 0 ? (
                            <div className="bg-[#1113177d] h-80 border border-dashed border-[rgba(255,255,255,0.1)] rounded-xl flex flex-col items-center justify-center">
                                <h3 className="text-xl font-bold tracking-[0.7px] uppercase mb-2">
                                    NOTHING HERE YET
                                </h3>
                                <p className="text-xs mb-6">
                                    Browse the library and add a lift to get today moving.
                                </p>
                                <Link
                                    href="/"
                                    className="btn-global rounded-full normal-case"
                                >
                                    Go to workouts
                                </Link>
                            </div>
                        ) : (
                            workoutPlan.map((workout: IWorkout) => (
                                <div
                                    className="bg-surface border border-border rounded-2xl overflow-hidden flex justify-between mb-6 p-6"
                                    key={workout.id}
                                >

                                    <div className="flex gap-4 items-center">

                                        <Image
                                            src={workout.image}
                                            className="w-36 h-20 object-cover border border-border rounded-xl"
                                            width={144}
                                            height={80}
                                            alt={workout.name}
                                        />


                                        <div>

                                            <h2 className="text-base font-bold tracking-[0.4px] uppercase mb-0.5">
                                                {workout.name}
                                            </h2>


                                            <p className="text-xs mb-0.5">
                                                {workout.equipment}
                                            </p>


                                            <ul className="flex gap-4 mt-3">

                                                <li className="flex gap-2 items-center text-xs">
                                                    <LuClock className="text-primary" />
                                                    {workout.duration} min
                                                </li>


                                                <li className="flex gap-2 items-center text-xs">
                                                    <PiFireSimpleFill className="text-primary" />
                                                    {workout.caloriesBurned} kcal
                                                </li>


                                                <li className="flex gap-2 items-center text-xs">
                                                    <FaRegStar className="text-primary" />
                                                    {workout.rating}
                                                </li>

                                            </ul>

                                        </div>

                                    </div>


                                    <div className="flex gap-3 items-center">

                                        <Link
                                            href={`/workouts/${workout.id}`}
                                            className="btn-second text-xs rounded-full flex items-center gap-2 leading-5 hover:text-black normal-case py-2 px-3"
                                        >
                                            View Details
                                        </Link>


                                        <button
                                            onClick={() => toggleWorkoutDone(workout.id)}
                                            className="btn-global text-xs rounded-full flex items-center gap-2 leading-5 normal-case cursor-pointer py-2 px-3"
                                        >
                                            <FaCheck />
                                            {workout.done ? "Done" : "Mark as Done"}
                                        </button>


                                        <button onClick={() => removeWorkout(workout.id)} className="cursor-pointer">
                                            <LiaTimesSolid />
                                        </button>

                                    </div>

                                </div>
                            ))
                        )
                    )}
                    {activeTab === "saved plan" && (
                        savedWorkout.length === 0 ? (
                            <div className="bg-[#1113177d] h-80 border border-dashed border-[rgba(255,255,255,0.1)] rounded-xl flex flex-col items-center justify-center">
                                <h3 className="text-xl font-bold tracking-[0.7px] uppercase mb-2">
                                    NOTHING SAVED YET
                                </h3>
                                <p className="text-xs mb-6">
                                    Save workouts from the library to see them here.
                                </p>
                            </div>
                        ) : (
                            savedWorkout.map((workout: IWorkout) => (
                                <div
                                    className="bg-surface border border-border rounded-2xl overflow-hidden flex justify-between mb-6 p-6"
                                    key={workout.id}
                                >
                                    <div className="flex gap-4 items-center">
                                        <Image
                                            src={workout.image}
                                            className="w-36 h-20 object-cover border border-border rounded-xl"
                                            width={144}
                                            height={80}
                                            alt={workout.name}
                                        />
                                        <div>
                                            <h2 className="text-base font-bold tracking-[0.4px] uppercase mb-0.5">
                                                {workout.name}
                                            </h2>
                                            <p className="text-xs mb-0.5">
                                                {workout.equipment}
                                            </p>
                                            <ul className="flex gap-4 mt-3">
                                                <li className="flex gap-2 items-center text-xs">
                                                    <LuClock className="text-primary" />
                                                    {workout.duration} min
                                                </li>
                                                <li className="flex gap-2 items-center text-xs">
                                                    <PiFireSimpleFill className="text-primary" />
                                                    {workout.caloriesBurned} kcal
                                                </li>
                                                <li className="flex gap-2 items-center text-xs">
                                                    <FaRegStar className="text-primary" />
                                                    {workout.rating}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <Link
                                            href={`/workouts/${workout.id}`}
                                            className="btn-second text-xs rounded-full flex items-center gap-2 leading-5 hover:text-black normal-case py-2 px-3"
                                        >
                                            View Details
                                        </Link>
                                        <button onClick={() => removeSavedWorkout(workout.id)} className="cursor-pointer">
                                            <LiaTimesSolid />
                                        </button>
                                    </div>
                                </div>
                            ))
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default MyPlansPage;