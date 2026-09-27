import React from 'react';
import getWorkouts from '@/services/data';
import { IWorkout } from '@/types/workout.type';
import Image from 'next/image';
import AddPlanBtn from '@/components/AddPlanBtn';
import SavePlanBtn from '@/components/SavePlanBtn';

interface IWorkoutDetailsProps {
    params: Promise<{ id: string }>;
}
const detailWorkoutPage = async ({params}: IWorkoutDetailsProps) => {

    const {id} = await params;
    const workoutData = await getWorkouts();
    const workout = workoutData.find((workout: IWorkout) => workout.id === Number(id));

    return (
        <div className='px-[5vw] py-12'>
            <div className='max-w-7xl mx-auto grid grid-cols-2 sm:gap-14 gap-9'>
                <Image className='w-full h-auto border border-border rounded-2xl' src={workout.image} width={300} height={300} alt="arms" />
                <div>
                    <h2 className='md:text-4xl text-3xl font-bold tracking-[0.45px] uppercase mb-3'>{workout.name}</h2>
                    <p className='max-sm:text-sm mb-5'>{workout.description}</p>
                    <div className='flex gap-2 mb-7'>
                    {
                        workout.muscleGroups.map((tag:string) => <span key={tag} className='text-[11px] text-black uppercase font-bold tracking-[0.55px] bg-primary rounded-full py-1.5 px-2.5 leading-none'>{tag}</span>)
                    }
                    </div>
                    <div className='bg-surface border border-border rounded-2xl overflow-hidden mb-8'>
                        <div className='px-6 py-4 flex justify-between border-b border-border'>
                            <p className='text-xs font-bold uppercase tracking-[0.6px]'>Equipment</p>
                            <p className='text-sm font-medium text-[#E5E7EB]!'>{workout.equipment}</p>
                        </div>
                        <div className='px-6 py-4 flex justify-between border-b border-border'>
                            <p className='text-xs font-bold uppercase tracking-[0.6px]'>Difficulty</p>
                            <p className='text-sm font-medium text-[#E5E7EB]!'>{workout.difficulty}</p>
                        </div>
                        <div className='px-6 py-4 flex justify-between border-b border-border'>
                            <p className='text-xs font-bold uppercase tracking-[0.6px]'>sets</p>
                            <p className='text-sm font-medium text-[#E5E7EB]!'>{workout.sets}</p>
                        </div>
                        <div className='px-6 py-4 flex justify-between border-b border-border'>
                            <p className='text-xs font-bold uppercase tracking-[0.6px]'>reps</p>
                            <p className='text-sm font-medium text-[#E5E7EB]!'>{workout.reps}</p>
                        </div>
                        <div className='px-6 py-4 flex justify-between border-b border-border'>
                            <p className='text-xs font-bold uppercase tracking-[0.6px]'>Duration</p>
                            <p className='text-sm font-medium text-[#E5E7EB]!'>{workout.duration} min</p>
                        </div>
                        <div className='px-6 py-4 flex justify-between border-b border-border'>
                            <p className='text-xs font-bold uppercase tracking-[0.6px]'>Calories</p>
                            <p className='text-sm font-medium text-[#E5E7EB]!'>{workout.caloriesBurned} kcal</p>
                        </div>
                        <div className='px-6 py-4 flex justify-between'>
                            <p className='text-xs font-bold uppercase tracking-[0.6px]'>Rating</p>
                            <p className='text-sm font-medium text-[#E5E7EB]!'>{workout.rating}</p>
                        </div>
                    </div>
                    <div className='mb-9'>
                        <h3 className='text-base font-bold tracking-[0.45px] uppercase mb-4'>Instructions</h3>
                        <ol className='flex flex-col gap-3'>
                            {
                                workout.instructions.map((instructions:string) => <li key={instructions} className='max-sm:text-sm'>{workout.instructions.indexOf(instructions) + 1}. {instructions}</li>)
                            }
                        </ol>
                    </div>
                    <div className='flex gap-4'>
                        <AddPlanBtn workout={workout} />
                        <SavePlanBtn workout={workout} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default detailWorkoutPage;