import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, CloudRain, Sun, CloudSun, Wind, Droplets, CloudLightning, Snowflake } from 'lucide-react';

const iconMap = {
    Cloud,
    CloudRain,
    Sun,
    CloudSun,
    CloudLightning,
    Snow: Snowflake,
    Wind,
};

const MainWeatherCard = ({ data }) => {
    if (!data) return null;
    const Icon = iconMap[data.icon] || CloudSun;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass-card col-span-1 md:col-span-2 lg:col-span-3 p-8 flex flex-col md:flex-row items-center justify-between gap-8"
        >
            <div className="flex flex-col items-center md:items-start gap-2">
                <h2 className="text-2xl md:text-3xl font-medium text-white/80">{data.city}, {data.country}</h2>
                <div className="flex items-baseline gap-2">
                    <span className="text-7xl md:text-8xl font-bold tracking-tighter">{data.temp}°</span>
                    <span className="text-2xl md:text-3xl font-light text-white/60">C</span>
                </div>
                <p className="text-lg md:text-xl text-white/70 mt-2">{data.condition}</p>
                <p className="text-sm text-white/40 italic">{data.description}</p>
            </div>

            <div className="relative group">
                <motion.div
                    animate={{
                        y: [0, -10, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <Icon className="w-32 h-32 md:w-48 md:h-48 text-white drop-shadow-2xl" strokeWidth={1.5} />
                </motion.div>
                <div className="absolute -inset-4 bg-white/20 blur-3xl rounded-full -z-10 opacity-50 group-hover:opacity-75 transition-opacity" />
            </div>
        </motion.div>
    );
};

export default MainWeatherCard;
