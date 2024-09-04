import { useRef } from "react";

import { motion } from "framer-motion"

export const Home = () => {

    const motionRef = useRef(null);

    return(
        <main>
            <div ref={motionRef} className="flex justify-center items-center w-fulls mt-12 h-screen">
                <div className="w-1/2 flex flex-col justify-start items-center">
                    <motion.h1 whileInView={{y: [-500, 0]}} transition={{duration: 1.5}} className="text-9xl text-primLight font-bold">DevChat</motion.h1>
                    <motion.p whileInView={{y: [400, 0]}} transition={{duration: 1.5}} className="text-primLight text-xl">The one stop shop for Communication and Collaboration</motion.p>
                </div>
                <div className="w-1/2"></div>
            </div>
        </main>
    );
}