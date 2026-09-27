"use client";
import { FaRegBookmark } from "react-icons/fa6";
import { WorkoutContext } from "@/context/workoutContext";
import React, { useContext } from "react";
import { IWorkout } from "@/types/workout.type";
import { toast } from "react-toastify";

const SavePlanBtn = ({ workout }: { workout: IWorkout }) => {
    const { savedWorkout, setSavedWorkout } = useContext(WorkoutContext)!;

    const handleSaveWorkout = () => {
        const alreadySaved = savedWorkout.some(
            (item: IWorkout) => item.id === workout.id
        );

        if (alreadySaved) {
            toast.info("Workout already saved");
            return;
        }

        setSavedWorkout([...savedWorkout, workout]);
        toast.success("Workout saved for later");
    };

    return (
        <button
            className="btn-second rounded-xl flex items-center gap-2 leading-5 hover:text-black normal-case"
            onClick={handleSaveWorkout}
        >
            <FaRegBookmark className="text-base" />
            Save for later
        </button>
    );
};

export default SavePlanBtn;