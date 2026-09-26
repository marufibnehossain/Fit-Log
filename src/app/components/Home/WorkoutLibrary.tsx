import React from 'react';
import getWorkouts from '@/app/services/data';
import WorkoutCard from './WorkoutCard';
import { IWorkout } from '@/app/types/workout.type';


const workoutData = await getWorkouts();

const WorkoutLibrary = () => {
    return (
        <div className='lg:py-25 sm:py-20 py-15'>
            <div>
                <h2 className='sm:text-3xl text-2xl uppercase font-bold tracking-[-0.75px]'>The Library</h2>
                <p className='sm:text-sm text-xs mt-1'>Twelve lifts covering every major muscle group.</p>
            </div>
            <div className='grid grid-cols-3 gap-6 mt-8'>
                {
                    workoutData.map((workout: IWorkout, index: number) => <WorkoutCard key={index} workout={workout} />)
                }
            </div>
        </div>
    );
};

export default WorkoutLibrary;