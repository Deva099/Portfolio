import React from "react";

const Background = () => {
    return (
        <div className="fixed inset-0 w-full h-full z-[-1] bg-black overflow-hidden pointer-events-none">
            {/* Standardized Subtle Gradient Overlay - Matching Projects Style */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-20" />
        </div>
    );
};

export default Background;
