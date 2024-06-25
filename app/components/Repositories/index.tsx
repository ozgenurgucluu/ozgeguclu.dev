// @ts-nocheck
"use client"
import React, { Fragment } from 'react';
import Section from '../Section';
import ECommerce from '@/app/icons/ECommerce';
import Placeholder from '@/app/icons/PlaceHolder';
import Blog from '@/app/icons/Blog';
import Link from 'next/link';
import { TECH_IMAGES } from '@/constants';
import Image from 'next/image';

const Repositories = async () => {
  const REPOS=[
    {

      title:"E-Commerce React",
      summary:"This project was created with React and Tailwind, it is an e-commerce site. It was made more dynamic by using packages such as Axios, Router, and Classnames. Add to cart, product rating and seller reviews added.",
      icon:<ECommerce/>,
      techs:["js","react","tailwind"] ,
      to:"https://github.com/ozgenurgucluu/e-commerce-react"
    },
     {
      title:"Blog Website",
      summary:"Developed within a 3-day timeframe using Bootstrap and React, this project is a mobile-responsive blog website. It aims to deliver a user-friendly and immersive blogging experience while adhering to modern web standards.",
      icon:<Blog/>,
      techs:["js","react","bootstrap"] ,
      to:"https://github.com/ozgenurgucluu/futurecode-case"
    },
     {
      title:"Placeholder Api Ui",
      summary:"I used Tailwind and React in this project. I retrieved and listed users and their information with the Axios package.",
      icon:<Placeholder/>,
      techs:["js","react","tailwind"] ,
      to:"https://github.com/ozgenurgucluu/placeholder-api-ui"
    }
  ]

  return (
    <Section
      title="Projects"
      link="https://github.com/ozgenurgucluu?tab=repositories"
    >
     
   
           {REPOS.map((item,index)=>(
              <div key={index} className='flex flex-col gap-1 sm:gap-3 '>
            <Link  href={item.to}  target='_Blank' className=" justify-start w-full items-center rounded-lg border hover:border-slate-400 p-4 sm:p-5 box-border relative group cursor-pointer sm:flex  gap-9 sm:gap-7"> 
         {item.icon}
             <div key={index} className='flex flex-col gap-1 sm:gap-2'>
            <strong className="text-lg font-bold text-slate-700">
          {item.title}
            </strong>
            <p>{item.summary}</p>
           <p  className='flex gap-3 font-semibold text-sm items-center'>
            Kullanılan Teknolojiler:
            {item.techs.map((i,iIndex)=>(<Fragment key={iIndex}><Image
                    key={iIndex}
                    loader={() => TECH_IMAGES[i]?.image}
                    src={TECH_IMAGES[i]?.image}
                    alt={i}
                    width={20}
                    height={20}
                  /></Fragment>))}</p>
             </div>
   
        </Link>
           </div>)

           )}
      
    </Section>
  );
};

export default Repositories;
