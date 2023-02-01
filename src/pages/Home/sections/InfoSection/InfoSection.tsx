import { data } from '@app/data/data';
import React from 'react';
import { InfoCard } from './InfoCard';

export interface InfoSectionProps {}

export const InfoSection: React.FC<InfoSectionProps> = () => {
  return (
    <section
      id="info"
      className="container-md flex flex-col items-center justify-center mt-40"
    >
      <div className="w-full">
        <h3 className="text-2xl font-medium">Info</h3>
        <div className="flex flex-col gap-8 mt-8">
          {data.infoItems.map(item => {
            return <InfoCard key={item.id} item={item} />;
          })}
        </div>
        <div className="flex justify-center">
          <a className="mt-6" href="/#">
            <span className="hover:underline">View more →</span>
          </a>
        </div>
      </div>
    </section>
  );
};
