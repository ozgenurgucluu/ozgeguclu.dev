// @ts-nocheck
'use client';
import React from 'react';
import Section from '../Section';
import { Experiences, TECH_IMAGES } from '@/constants';
import Image from 'next/image';

const Experience = () => {
  return (
    <Section title="Experience">
      <div className="w-full min-h-[365px] pl-16 pt-8 box-border relative flex flex-col gap-4">
        <div className="w-[1px] h-full absolute left-8 top-0 bg-slate-200"></div>

        {Experiences.map((item, index) => (
          <div
            key={index}
            className="w-full   rounded-lg border hover:border-slate-400 p-4 box-border relative group cursor-pointer flex flex-col"
          >
            <div className="w-[15px] h-[15px] rounded-full   bg-slate-200 group-hover:bg-slate-500 absolute top-1/2 -left-[39px] -translate-y-1/2"></div>
            <strong className="text-lg font-semibold text-slate-700">
              {item.company}
            </strong>
            <span className="text-sm mt-1">
              <span>{item.location}</span> |{' '}
              <span>
                {item.start} - {item.end}
              </span>{' '}
              | <span>{item.type}</span>
            </span>
            <p className="mt-2 w-full md:max-w-[100%]">{item.summary}</p>

            
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
