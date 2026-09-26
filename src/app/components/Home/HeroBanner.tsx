import React from 'react';
import Image from 'next/image';

const HeroBanner = () => {
    return (
        <div className="hero bg-[#15171D] min-h-112 border border-[#222630] rounded-2xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Image
                width={500}
                height={500}
                alt="Tailwind CSS hero component"
                src='/assets/banner.png'
                className="max-w-sm rounded-lg shadow-2xl"
                />
                <div className="text-center lg:text-left max-w-139.5">
                    <span className='text-xs font-bold tracking-[1.1px] text-primary'>WORKOUT LIBRARY</span>
                    <h1 className="text-6xl font-extrabold uppercase leading-none tracking-[-1.5px]">TRAIN WITH INTENT. LOG EVERY SET.</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;