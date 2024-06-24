import Github from '@/app/icons/Github';
import Instagram from '@/app/icons/Instagram';
import Linkedin from '@/app/icons/Linkedin';
import X from '@/app/icons/X';
import Youtube from '@/app/icons/Youtube';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SOCIAL_MEDIAS = [
 
  {
    label: 'LinkedIn',
    icon: <Linkedin />,
    url: 'https://www.linkedin.com/in/ozgenurguclu/',
  },
  {
    label: 'Instagram',
    icon: <Instagram />,
    url: 'https://www.instagram.com/ozgeeguclu/',
  },
  {
    label: 'GitHub',
    icon: <Github />,
    url: 'https://github.com/ozgenurgucluu',
  },
];

const Me = () => {
  return (
    <>
      <div className="w-full min-h-[100px] flex flex-col py-3 sm:py-0">
        <div className="flex flex-col">
          <div className="flex  justify-between items-center">
            <div className="flex flex-col gap-1">
              <h1 className="text-black font-bold sm:text-4xl text-3xl ">
                Özgenur GÜÇLÜ
              </h1>
              <span>a frontend developer based in Turkey.</span>
            </div>

            <Image
              src={'/me.jpg'}
              alt="Özgenur GÜÇLÜ"
              width={115}
           height={115}
              className="rounded-full  "
            />
          </div>

          <p className="text-lg mt-4 text-justify">
         Merhaba! Ben Özgenur, bir yılı aşkın süredir JavaScript ve React kullanarak web geliştirme projeleri üzerinde çalışan  bir frontend geliştiricisiyim. Kullanıcı dostu ve performans odaklı web uygulamaları geliştirmek benim için sadece bir iş değil, aynı zamanda büyük bir tutku. Bana {''}
            <Link
              href="mailto:ozgenurguclu0@gmail.com"
              className="text-black font-medium hover:text-purple-600"
            >
              ozgenurguclu0@gmail.com
            </Link>{' '}
            adresinden veya sosyal medya hesaplarım üzerinden ulaşabilirsiniz.
          </p>

          <div className="mt-4 flex items-center gap-4">
            {SOCIAL_MEDIAS.map((social, index) => (
              <Link key={index} href={social.url} target="_blank">
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Me;
