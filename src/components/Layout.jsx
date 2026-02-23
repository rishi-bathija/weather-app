import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-indigo-950 via-blue-900 to-slate-950 text-white p-4 md:p-8 selection:bg-blue-500/30">
            <div className="max-w-7xl mx-auto space-y-8">
                {children}
            </div>
        </div>
    );
};

export default Layout;
