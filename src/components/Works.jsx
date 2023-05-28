import React from 'react';
import code from '../assets/code2.png';

function Works() {
    return(
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8 w-full flex justify-center items-center flex-col'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>
                        Work
                    </p>
                    <p className='py-6 text-2xl'>
                        Check out some of my most recent work
                    </p>
                </div>
                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/* Grid Item */}
                    <div
                        style={{ backgroundImage: `url(${code})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                            <span className=' text-lg font-bold text-white tracking-wider'>
                                Dog Adoption Website
                            </span>
                            <p className='text-center'>The first website I built using basic Javascript & HTML</p>
                        <div className='pt-8 text-center'>
                            <a href='https://jobs-adoption.netlify.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                            <a href='https://github.com/JobLedford/m1-assignment'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    style={{ backgroundImage: `url(${code})` }}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                        <span className=' text-lg font-bold text-white tracking-wider'>
                            Great Cliffs Website
                        </span>
                        <p className='text-center'>A more complex website I built after learning more Javascript & HTML</p>
                        <div className='pt-8 text-center'>
                            <a href='https://jobs-greatcliffs.netlify.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Demo
                                </button>
                            </a>
                            <a href='https://github.com/JobLedford/Great-Cliffs'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    style={{ backgroundImage: `url(${code})` }}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                >
                {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                    <span className=' text-lg font-bold text-white tracking-wider'>
                        Date-Giver Application
                    </span>
                    <p className='text-center'>A simple web application built with HTML & Javascript</p>
                    <div className='pt-8 text-center'>
                        <a href='https://job-pwa-app.netlify.app/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Demo
                            </button>
                        </a>
                        <a href='https://github.com/JobLedford/pwa-demo'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div
                style={{ backgroundImage: `url(${code})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
            {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                    <span className=' text-lg font-bold text-white tracking-wider'>
                        Plant Social Media Mock-up
                    </span>
                    <p className='text-center'>A complex web application built with Express and Mongodb</p>
                    <div className='pt-8 text-center'>
                        {/*<a href='#'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Demo
                            </button>
                        </a>*/}
                        <a href='https://github.com/JobLedford/Project-2'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div
                style={{ backgroundImage: `url(${code})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
            {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                    <span className=' text-lg font-bold text-white tracking-wider'>
                        Weather App
                    </span>
                    <p className='text-center'>A simple web application built with React, uses API.</p>
                    <div className='pt-8 text-center'>
                        {/*<a href='#'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Demo
                            </button>
                        </a>*/}
                        <a href='https://github.com/JobLedford/Weather-App'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div
                style={{ backgroundImage: `url(${code})` }}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
            >
            {/* Hover Effects */}
                <div className='opacity-0 group-hover:opacity-100 flex justify-center items-center flex-col'>
                    <span className=' text-lg font-bold text-white tracking-wider'>
                        Shopping App
                    </span>
                    <p className='text-center'>A complex web application built with React & Bootstrap</p>
                    <div className='pt-8 text-center'>
                        {/*<a href='/'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Demo
                            </button>
                        </a>*/}
                        <a href='https://github.com/JobLedford/Shopping-App'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Code
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </div>
    );
};

export default Works;