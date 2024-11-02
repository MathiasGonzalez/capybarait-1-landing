import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title }) => (
  <div className="bg-white/50 dark:bg-gray-800/50 p-6 rounded-xl text-center hover:shadow-lg transition-all hover:scale-105 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
    <div className="inline-block p-3 bg-primary-100 dark:bg-primary-900/50 rounded-lg text-primary-600 dark:text-primary-400 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
  </div>
);