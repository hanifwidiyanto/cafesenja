import Image from 'next/legacy/image'
import React from 'react'
import QuoteDisplay from './quote';
import { BsArrowRightShort } from "react-icons/bs";

export default function Landing() {
    const quotes = [
        "Sunset: Keindahan yang melambangkan akhir dan awal.",
        "Warna-warna senja, pesan diam tentang keindahan.",
        "Saat senja menyapa, dunia berpadu dalam keajaiban."
    ];

    return (
        <div className='w-full h-screen relative'>
            <div className='rounded-full p-4 w-fit h-fit bg-slate-500 bg-opacity-10 shadow-lg backdrop-filter backdrop-blur-lg absolute top-4 left-4 z-50'>
                <Image src="/assets/images/logo.png" width={64} height={64} alt="" />
            </div>
            <Image src="/assets/images/landing.png" layout="fill" objectFit='cover' alt="" className='saturate-50' />
            <div className='absolute bottom-6 w-full flex justify-center'>
                <div className='w-10/12 bg-slate-500 bg-opacity-10 rounded-lg shadow-lg px-10 py-6 backdrop-filter backdrop-blur-lg flex flex-col gap-6 items-center text-center'>
                    <QuoteDisplay />
                    <div className='bg-amber-900 px-8 py-3 rounded-md flex gap-2 h-fit items-center'>
                        <span className='font-2xl font-medium'>Pesan Kopi</span>
                        <BsArrowRightShort className="relative top-1" />
                    </div>
                </div>
            </div>
        </div>
    )
}
