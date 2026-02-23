import React from 'react';
import { motion } from 'framer-motion';

const WeatherTile = ({ title, value, unit, icon: Icon, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            className="glass-card p-6 flex flex-col justify-between hover:bg-white/15 transition-all cursor-default group"
        >
            <div className="flex items-center justify-between mb-4">
                <span className="text-white/50 text-sm font-medium uppercase tracking-wider">{title}</span>
                <Icon className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" strokeWidth={2} />
            </div>
            <div className="flex items-baseline gap-1">
                <span className="text-3xl font-semibold">{value}</span>
                <span className="text-lg text-white/40">{unit}</span>
            </div>
        </motion.div>
    );
};

export default WeatherTile;
