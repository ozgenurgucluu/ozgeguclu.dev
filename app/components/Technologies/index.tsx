import React from 'react'
import Section from '../Section'
import Tailwind from '@/app/icons/Tailwind'
import Html from '@/app/icons/Html'
import Css from '@/app/icons/Css'
import Javascript from '@/app/icons/Javascript'
import Github from '@/app/icons/Github'
import Git from '@/app/icons/Git'
import ReactIcon from '@/app/icons/ReactIcon'
import BootstrapIcon from '@/app/icons/BootstrapIcon'

const Technologies = () => {
  return (
  
      <Section title="Technologies " > <div className='sm:flex sm:justify-center  gap-3  grid grid-cols-5 sm:gap-6 justify-center items-center '> <Html/><Css/><Javascript/> <Github width={46} height={36}/><Git/><ReactIcon/><Tailwind/><BootstrapIcon/></div></Section>
 
  )
}

export default Technologies
