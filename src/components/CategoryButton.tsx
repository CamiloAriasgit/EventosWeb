// src/components/.tsx
import React from 'react';

interface CategorybProps {
    text: string;
    linkHref: string;
}

const CategoryButton: React.FC<CategorybProps> = ({ text, linkHref }) => {
    return (
        <div>
            <a href={linkHref} className="inline-block bg-emerald-950 text-emerald-400 border-1 border-emerald-500 px-3 py-1 rounded text-sm font-normal hover:bg-emerald-900 transition-colors duration-300">
                {text}
            </a>
        </div>
    );
};

export default CategoryButton;