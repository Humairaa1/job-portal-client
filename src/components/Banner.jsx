import React from 'react';
import { motion } from "motion/react"
import team1 from '../assets/team1.jpg'
import team2 from '../assets/team2.jpg'

const Banner = () => {
    return (
        <div className="bg-base-200 min-h-[400px] flex justify-center items-center">
            <div className="hero-content flex flex-col lg:flex-row-reverse justify-center w-9/12">
                <div className='flex-1/2 '>
                    <motion.img
                    animate={{y:[50,100,50]}}
                    transition={{duration:8,repeat:Infinity}}
                    src={team1}
                    className="w-72 rounded-t-[40px] rounded-br-[60px] shadow-2xl"
                />
                    <motion.img
                    animate={{x:[100,150,100]}}
                    transition={{duration:8,delay:4,repeat:Infinity}}
                    src={team2}
                    className="w-72 rounded-t-[40px] rounded-br-[60px] shadow-2xl"
                />
                </div>

                <div className='flex-1/2'>
                    <motion.h1 
                    animate={{color:["#5e32a8","#8932a8","#fc05f4"]}}
                        transition={{duration:5,repeat:Infinity}}
                    className="text-5xl font-bold">Latest Job For You!</motion.h1>
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

export default Banner;