import React from "react";

const BtnPrimary = ({ children }) => {
    return (
        <button
            type="button"
            className="inline-flex items-center gap-0.5 rounded-full border bg-l-accent px-9 py-4 text-lg font-medium text-white hover:bg-l-accent/90"
        >
            {children}
        </button>
    );
};

export default BtnPrimary;
