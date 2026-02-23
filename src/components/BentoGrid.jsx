import React from 'react';

const BentoGrid = ({ children }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-fr">
            {children}
        </div>
    );
};

export default BentoGrid;
