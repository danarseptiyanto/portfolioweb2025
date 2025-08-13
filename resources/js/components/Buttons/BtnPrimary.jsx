import React from "react";

const BtnPrimary = ({ children }) => {
    return (
        <button
            type="button"
            className="inline-flex h-fit items-center gap-0.5 rounded-full border border-l-accent bg-l-accent px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700 dark:border-d-accent dark:bg-d-accent hover:dark:bg-d-accent/85 md:px-8 md:py-4 md:text-lg"
        >
            {children}
        </button>
    );
};

export default BtnPrimary;
