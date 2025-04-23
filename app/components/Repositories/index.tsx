// @ts-nocheck
"use client";
import React from "react";
import Section from "../Section";
import ECommerce from "@/app/icons/ECommerce";
import Placeholder from "@/app/icons/PlaceHolder";
import Blog from "@/app/icons/Blog";
import Link from "next/link";
import { TECH_IMAGES } from "@/constants";
import Image from "next/image";

const Repositories = async () => {
  const REPOS = [
    {
      title: "LCW Clone",
      summary:
        "Bu projede, Next.js, Tailwind CSS, backend için JSON Server ve istek atmak için Axios paketlerini kullanarak lcw.com tarzı bir e-ticaret sitesi klonu geliştirdim.",
      icon: <ECommerce />,
      techs: ["js", "react", "tailwind"],
      to: "https://github.com/ozgenurgucluu/lcw.com-clone",
    },
    {
      title: "Blog",
      summary:
        "Next.js, Tailwind CSS kullanarak geliştirdiğim bir blog uygulamasını paylaşıyorum. Bu uygulama ile kullanıcılar, blog yazıları ekleyebilir, düzenleyebilir ve silebilirler. Bu projede tamamen CRUD (Create, Read, Update, Delete) işlemlerine odaklandım.",
      icon: <Blog />,
      techs: ["js", "react", "tailwind"],
      to: "https://github.com/ozgenurgucluu/blog",
    },
    {
      title: "E-Commerce React",
      summary:
        "Bu proje, React ve Tailwind kullanılarak oluşturulmuş bir e-ticaret sitesidir. Axios, Router ve Classnames gibi paketler kullanılarak daha dinamik hale getirilmiştir. Sepete ekleme, ürün puanlama ve satıcı yorumları gibi özellikler eklenmiştir.",
      icon: <ECommerce />,
      techs: ["js", "react", "tailwind"],
      to: "https://github.com/ozgenurgucluu/e-commerce-react",
    },
    {
      title: "Blog Website",
      summary:
        "3 günlük bir süre zarfında Bootstrap ve React kullanarak geliştirilen bu proje, mobil uyumlu bir blog websitesidir. Modern web standartlarına uygun olarak kullanıcı dostu ve sürükleyici bir blog deneyimi sunmayı amaçlamaktadır",
      icon: <Blog />,
      techs: ["js", "react", "bootstrap"],
      to: "https://github.com/ozgenurgucluu/futurecode-case",
    },
    {
      title: "Placeholder Api Ui",
      summary:
      "Bu projede Tailwind ve React kullandım. Axios paketi ile kullanıcıları ve onların bilgilerini çekip listeledim.",
      icon: <Placeholder />,
      techs: ["js", "react", "tailwind"],
      to: "https://github.com/ozgenurgucluu/placeholder-api-ui",
    },
  ];

  return (
    <Section
      title="Projects"
      link="https://github.com/ozgenurgucluu?tab=repositories"
    >
      {REPOS.map((item, index) => (
        <div key={index} className="flex flex-col gap-1 sm:gap-3">
        <Link
          href={item.to}
          target="_Blank"
          className="w-full items-center rounded-lg border hover:border-slate-400 p-4 sm:p-5 box-border relative group cursor-pointer sm:flex gap-9 sm:gap-7"
        >
          {item.icon}
          <div className="flex flex-col gap-1 sm:gap-2">
            <strong className="text-lg font-bold text-slate-700">
              {item.title}
            </strong>
            <p>{item.summary}</p>
            <div className="flex gap-3 font-semibold text-sm items-center">
              <span>Kullanılan Teknolojiler:</span>
              {item.techs.map((tech, iIndex) => (
                <Image
                  key={tech + iIndex} // unique key for each image
                  loader={() => TECH_IMAGES[tech]?.image}
                  src={TECH_IMAGES[tech]?.image}
                  alt={tech}
                  width={20}
                  height={20}
                  className="tech-icon"
                />
              ))}
            </div>
          </div>
        </Link>
      </div>
      ))}
    </Section>
  );
};

export default Repositories;
