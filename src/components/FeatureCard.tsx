// src/components/FeatureCard.tsx
import React, { ReactNode } from 'react';

interface FeatureCardProps {
  title: string;
  description: React.ReactNode; // Cambiado a ReactNode
  icon?: string;
  size?: 'small' | 'large';
  children?: ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, size = 'small', children }) => {
  const cardClasses = `
    relative rounded-xl overflow-hidden shadow-lg border border-neutral-900
    ${size === 'large' ? 'lg:col-span-2 lg:row-span-2' : ''}
    bg-neutral-950 text-white
  `;

  return (
    <div className={cardClasses}>
      <div className="p-8">
        {icon && (
          <div className="mb-4">
            <img src={icon} alt="" className="h-10 w-10 text-white" />
          </div>
        )}
        <h3 className="text-xl font-normal">{title}</h3>
        {/* Renderiza la descripción */}
        <p className="mt-2 text-neutral-400 text-sm">{description}</p>
        
        {children && (
          <div className="mt-4 flex flex-wrap gap-2">
            {children}
          </div>
        )}
      </div>
      {size === 'large' && (
        <div className="h-60 mt-4 overflow-hidden">
          <img src={icon} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
    </div>
  );
};

export default FeatureCard;