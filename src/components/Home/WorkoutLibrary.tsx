import React from 'react';
import getWorkouts from '@/services/data';
import WorkoutCard from './WorkoutCard';
import { IWorkout } from '@/types/workout.type';


const workoutData = await getWorkouts();

const WorkoutLibrary = () => {
    return (
        <div className='lg:pt-25 sm:pt-20 pt-15'>
            <div>
                <h2 className='sm:text-3xl text-2xl uppercase font-bold tracking-[-0.75px]'>The Library</h2>
                <p className='sm:text-sm text-xs mt-1'>Twelve lifts covering every major muscle group.</p>
            </div>
            <div className='grid grid-cols-3 max-sm:grid-cols-1 gap-6 mt-8'>
                {
                    workoutData.map((workout: IWorkout, index: number) => <WorkoutCard key={index} workout={workout} />)
                }
            </div>
        </div>
    );
};

export default WorkoutLibrary;