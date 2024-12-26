// AuthLeft.jsx
import React from "react";
import { ArrowLongUpIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";

const AuthLeft = () => {
    return (
        <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.42, 0, 0.58, 1] }}
            className="hidden md:flex h-full w-1/2 bg-white border-r relative flex-col justify-center items-center"
        >
            <motion.img
                src="/png/logoFaded.png"
                alt="logo"
                className="absolute left-0 bottom-0 w-[300px] aspect-square"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            />
            <motion.div
                className="flex rounded-xl shadowCardAuth flex-col w-full max-w-[400px]"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                <div className="flex gap-2 items-center border-b p-4">
                    <img src="/svg/logo.svg" alt="logo" className="w-6 h-6" />
                    <span className="font-semibold">AI to Detect & Autofix Bad Code</span>
                </div>
                <div className="flex gap-4 justify-between items-center p-4">
                    {["30+ Language Support", "10K+ Developers", "100K+ Hours Saved"].map(
                        (text, index) => (
                            <motion.div
                                className="flex flex-col items-center"
                                key={index}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.2,
                                    ease: [0.42, 0, 0.58, 1],
                                }}
                            >
                                <span className="font-semibold">{text.split(" ")[0]}</span>
                                <span className="text-sm">{text.split(" ").slice(1).join(" ")}</span>
                            </motion.div>
                        )
                    )}
                </div>
            </motion.div>
            <motion.div
                className="flex rounded-xl shadowCardAuth flex-col gap-2 p-4 px-8 translate-x-[50%] -translate-y-[10px] bg-white"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.42, 0, 0.58, 1] }}
            >
                <div className="flex justify-between min-w-40">
                    <img src="/svg/GraphAuth.svg" alt="graph" />
                    <div className="flex flex-col">
                        <div className="flex items-center text-primary">
                            <ArrowLongUpIcon className="w-5" />
                            14%
                        </div>
                        <div className="font-light text-xs">This week</div>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col">
                        <span className="font-semibold">Issues Fixed</span>
                        <span className="font-semibold text-2xl">500K+</span>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default AuthLeft;
