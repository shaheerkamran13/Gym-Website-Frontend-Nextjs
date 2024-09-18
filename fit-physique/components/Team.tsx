'use client'
import {FaFacebook,FaTwitter, FaYoutube} from 'react-icons/fa'

import Image from 'next/image'
import Link from 'next/link'
import CustomButton from './CustomButton'
import fadeIn from '../lib/variants'
import {motion} from 'framer-motion'


const trainerData = [
  {
    image: '/assets/img/trainers/david.jpg',
    name: 'David Williams',
    role: 'Body Builder Coach',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam neque nobis mollitia, dolorem qui accusantium!',
    
    social: [
      {icon: FaFacebook, href: 'http://facebook.com'},
      {icon: FaTwitter, href: 'http://twitter.com'},
      {icon: FaYoutube, href: 'http://youtube.com'},
    ],
  },

  {
    image: '/assets/img/trainers/rosy.jpg',
    name: 'Rosy Rivera',
    role: 'Body Builder Coach',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam neque nobis mollitia, dolorem qui accusantium!',
    
    social: [
      {icon: FaFacebook, href: 'http://facebook.com'},
      {icon: FaTwitter, href: 'http://twitter.com'},
      {icon: FaYoutube, href: 'http://youtube.com'},
    ],
  },

  {
    image: '/assets/img/trainers/matt.jpg',
    name: 'Matt Stone',
    role: 'Body Builder Coach',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam neque nobis mollitia, dolorem qui accusantium!',
    
    social: [
      {icon: FaFacebook, href: 'http://facebook.com'},
      {icon: FaTwitter, href: 'http://twitter.com'},
      {icon: FaYoutube, href: 'http://youtube.com'},
    ],
  },

  {
    image: '/assets/img/trainers/sofia.jpg',
    name: 'Sofia Lauren',
    role: 'Body Builder Coach',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam neque nobis mollitia, dolorem qui accusantium!',
    
    social: [
      {icon: FaFacebook, href: 'http://facebook.com'},
      {icon: FaTwitter, href: 'http://twitter.com'},
      {icon: FaYoutube, href: 'http://youtube.com'},
    ],
  },
]


export default function Team() {
  return (
    <section className='py-12 xl:h-[110vh]' id='team'>
      <div className="container mx-auto h-full flex flex-col items-center justify-center">
        <motion.h2 
        variants = {fadeIn('up', 0.4)}
        initial = "hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2}}
        className = 'h2 text-center mb-6 '>Our Trainers</motion.h2>
        {/* Trainers Grid */}

        <motion.div
        variants = {fadeIn('up', 0.6)}
        initial = "hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2}}

        className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12'>
          {trainerData.map((trainer, index) => {
            return <div className='flex flex-col items-center text-center' key={index}>
              {/* Image */}

              <div className='relative w-[320px] h-[360px] mx-auto mb-4'>
                <Image src={trainer.image} fill alt='' />
              </div>

              {/* Name */}
              
              <h4 className='h4  mb-2 '>{trainer.name}</h4>

              <p className='uppercase text-xs tracking-[3px] mb-2'>{trainer.role}</p>
              {/*  Description */}

              <p className='mb-6 max-w-[320px] mx-auto'>{trainer.description}</p>

              {/* Socials */}

              <div className='flex gap-12 justify-center '>
                {trainer.social.map((social, index) => {
                  return <div key={index}>
                    <Link 
                    href={social.href} 
                    className='hover:text-accent transition-all'>

                      <social.icon className='text-lg'/>
                    </Link>
                  </div>
                })}
              </div>
            </div>
          })}
        </motion.div>

        {/* Btn */}
        <motion.div
        variants = {fadeIn('up', 0.8)}
        initial = "hidden"
        whileInView={'show'}
        viewport={{ once: false, amount: 0.2}}>

          <CustomButton 
          containerStyles ='w-[196px] h-[62px]'
          text = 'See all trainers'/>
        </motion.div>
      </div>
      </section>
  )
}
