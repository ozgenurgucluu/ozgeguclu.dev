import React from 'react';
import Me from '../components/Me';
import Repositories from '../components/Repositories';
import Experience from '../components/Experience';
import Technologies from '../components/Technologies';

export const metadata = {
  title: 'Özgenur Güçlü',
};

const Home = async () => {
  return (
    <div className="container mt-4 flex flex-col gap-12 pb-48 md:mt-12">
      <Me />
       <Experience /> 
      <Technologies/>
      <Repositories />
    </div>
  );
};

export default Home;
