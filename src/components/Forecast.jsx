import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, CloudRain, Sun, CloudSun, CloudLightning, Snowflake, Wind } from 'lucide-react';

const iconMap = {
    Cloud,
    CloudRain,
    Sun,
    CloudSun,
    CloudLightning,
    Snow: Snowflake,
    Wind,
};

const Forecast = ({ data }) => {
    return (
        <div className="w-full mt-12">
            <h3 className="text-xl font-medium mb-6 px-2">5-Day Forecast</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {data.map((item, index) => {
                    const Icon = iconMap[item.icon] || CloudSun;
                    return (
                        <motion.div
                            key={item.day}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index }}
                            className="glass-card p-4 flex flex-col items-center gap-3 hover:bg-white/15 transition-all text-center"
                        >
                            <span className="text-white/50 font-medium">{item.day}</span>
                            <Icon className="w-8 h-8 text-blue-300" />
                            <div className="flex flex-col">
                                <span className="text-xl font-semibold">{item.temp}°</span>
                                <span className="text-xs text-white/40">{item.low}°</span>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default Forecast;
