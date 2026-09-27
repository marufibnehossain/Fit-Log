"use client";
import { WorkoutContext } from "@/context/workoutContext";
import { IWorkout } from "@/types/workout.type";
import React, { useContext } from "react";
import { LuCalendarPlus2 } from "react-icons/lu";
import { toast } from "react-toastify";

const AddPlanBtn = ({ workout }: { workout: IWorkout }) => {
    const { workoutPlan, setWorkoutPlan } = useContext(WorkoutContext)!;

    const handleAddWorkout = () => {
        const alreadyAdded = workoutPlan.some(
            (item: IWorkout) => item.id === workout.id
        );

        if (alreadyAdded) {
            toast.info("Workout already added to plan");
            return;
        }

        setWorkoutPlan([...workoutPlan, workout]);
        toast.success("Workout added to plan");
    };

    return (
        <button
            className="btn-global rounded-xl flex items-center gap-2 leading-5 normal-case cursor-pointer"
            onClick={handleAddWorkout}
        >
            <LuCalendarPlus2 className="text-base" />
            Add to todays plan
        </button>
    );
};

export default AddPlanBtn;