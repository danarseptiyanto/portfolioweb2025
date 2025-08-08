import React from "react";

const BtnSecondary = ({ children }) => {
    return (
        <button
            type="button"
            className="inline-flex h-fit items-center gap-0.5 rounded-full border border-l-primary px-4 py-2.5 text-sm font-medium text-l-primary hover:bg-l-primary/10 dark:border-d-primary dark:text-d-primary md:px-6 md:py-3 md:text-lg"
        >
            {children}
        </button>
    );
};

export default BtnSecondary;
