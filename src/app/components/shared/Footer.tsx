import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className="bg-[#090A0D] text-neutral-content border-t border-[#1A1D24] px-[5vw] py-8">
            <div className="max-w-7xl mx-auto flex justify-between items-center max-sm:flex-col">
                <Link href="/">
                    <Image src="/assets/logo.png" width={100} height={29} alt="logo" />
                </Link>
                <p className="text-xs">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </div>
    );
};

export default Footer;