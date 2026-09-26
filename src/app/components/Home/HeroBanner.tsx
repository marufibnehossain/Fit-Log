import React from 'react';
import Image from 'next/image';

const HeroBanner = () => {
    return (
        <div className="bg-[#15171D] min-h-112 border border-[#222630] rounded-2xl px-14 py-14 max-sm:px-8 max-sm:py-8">
            <div className="w-full flex flex-col lg:flex-row-reverse justify-between items-center gap-10">
                <Image
                width={334}
                height={334}
                alt="Tailwind CSS hero component"
                src='/assets/banner.png'
                className="max-w-83.5 rounded-lg shadow-2xl max-sm:w-full"
                />
                <div className="text-center lg:text-left w-full max-w-170 flex flex-col items-start max-sm:items-center gap-5">
                    <span className='text-xs font-bold tracking-[1.1px] text-primary'>WORKOUT LIBRARY</span>
                    <h1 className="text-6xl max-lg:text-4xl max-sm:text-3xl font-extrabold uppercase leading-none tracking-[-1.5px]">TRAIN WITH INTENT. LOG EVERY SET.</h1>
                    <p className="max-sm:text-xs">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into todays plan, and watch the weeks work add up.
                    </p>
                    <button className="btn-global mt-2">BROWSE WORKOUTS</button>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;