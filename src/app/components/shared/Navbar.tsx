"use client";
import { usePathname } from "next/navigation";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {

    const links = <>
        <li className={`${usePathname() === "/workouts" ? "bg-[#1A2312] text-primary!" : ""} hover:bg-[#1A2312]  hover:text-primary! rounded-full`}><Link className="px-4 py-1.5" href="/workouts">Workouts</Link></li>
        <li className={`${usePathname() === "/plans" ? "bg-[#1A2312] text-primary!" : ""} hover:bg-[#1A2312]  hover:text-primary! rounded-full`}><Link className="px-4 py-1.5" href="/plans">My Plans</Link></li>
    </>

    return (
        <div className="navbar bg-[#0c0d10ef] text-neutral-content border-b border-[#1C1F26] px-[5vw] sticky top-0">
            <div className="navbar max-w-7xl mx-auto px-0">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                    </div>
                    <Link href="/">
                    <Image src="/assets/logo.png" width={100} height={29} alt="logo" /> 
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xs">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-6 text-xs">
                    <a className="">Plan <span className="text-xs text-black leading-[0.8em] px-1.5 py-0.5 bg-primary rounded-full">0</span></a>
                    <a className="">Saved <span className="text-xs text-black leading-[0.8em] px-1.5 py-0.5 bg-primary rounded-full">0</span></a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;