"use client";
import React, { createContext, useState } from "react";
import { IWorkout } from "@/types/workout.type";
import { toast } from "react-toastify";

type WorkoutContextType = {
    workoutPlan: IWorkout[];
    setWorkoutPlan: React.Dispatch<React.SetStateAction<IWorkout[]>>;
    savedWorkout: IWorkout[];
    setSavedWorkout: React.Dispatch<React.SetStateAction<IWorkout[]>>;
    removeWorkout: (id: number) => void;
    removeSavedWorkout: (id: number) => void;
    toggleWorkoutDone: (id: number) => void;
};

export const WorkoutContext = createContext<WorkoutContextType | null>(null);

const WorkoutProvider = ({ children }: { children: React.ReactNode }) => {
    const [workoutPlan, setWorkoutPlan] = useState<IWorkout[]>([]);
    const [savedWorkout, setSavedWorkout] = useState<IWorkout[]>([]);

    const removeWorkout = (id: number) => {
        setWorkoutPlan((prev) =>
            prev.filter((workout) => workout.id !== id)
        );
        toast.success("Workout removed");
    };

    const removeSavedWorkout = (id: number) => {
        setSavedWorkout((prev) =>
            prev.filter((workout) => workout.id !== id)
        );
    };

    const toggleWorkoutDone = (id: number) => {
        setWorkoutPlan((prev) =>
            prev.map((workout) =>
                workout.id === id
                    ? { ...workout, done: !workout.done }
                    : workout
            )
        );
        toast.success("Workout status updated");
    };

    return (
        <WorkoutContext.Provider
            value={{
                workoutPlan,
                setWorkoutPlan,
                savedWorkout,
                setSavedWorkout,
                removeWorkout,
                toggleWorkoutDone,
                removeSavedWorkout
            }}
        >
            {children}
        </WorkoutContext.Provider>
    );
};

export default WorkoutProvider;