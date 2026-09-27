import React from 'react';
import Image from 'next/image';
import { LuClock } from "react-icons/lu";
import { PiFireSimpleFill } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa6";
import { IWorkout } from '@/types/workout.type';
import Link from 'next/link';

interface IWorkoutProps {
    workout: IWorkout
}

const WorkoutCard = ({workout}:IWorkoutProps) => {
    return (
        <Link href={`/workouts/${workout.id}`} className='bg-surface border border-border rounded-2xl overflow-hidden'>
            <Image src={workout.image} className='w-full h-auto aspect-4/3 object-cover object-top' width={300} height={300} alt="arms"></Image>
            <div className='p-6'>
                <div className='flex gap-2 mb-3'>
                    {
                        workout.muscleGroups.map((tag:string) => <span key={tag} className='text-[11px] text-black uppercase font-bold tracking-[0.55px] bg-primary rounded-full py-1.5 px-2.5 leading-none'>{tag}</span>)
                    }
                </div>
                <h2 className='text-lg font-bold tracking-[0.45px] uppercase mb-1'>{workout.name}</h2>
                <p className='text-xs mb-4'>{workout.equipment}</p>
                <hr className='border border-border' />
                <ul className='flex gap-4 mt-3'>
                    <li className='flex gap-2 items-center text-xs'><LuClock /> {workout.duration} min</li>
                    <li className='flex gap-2 items-center text-xs'><PiFireSimpleFill /> {workout.caloriesBurned} kcal</li>
                    <li className='flex gap-2 items-center text-xs'><FaRegStar /> {workout.rating}</li>
                </ul>
            </div>
        </Link>
    );
};

export default WorkoutCard;