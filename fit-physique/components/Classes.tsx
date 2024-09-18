'use client'
import Image from "next/image"
import { motion } from "framer-motion"

import CustomButton from "./CustomButton"
import { describe } from "node:test"
import fadeIn from "../lib/variants"

const classes = [
  {
    name: 'Body Building',
    img: '/assets/img/classes/bodybuilding.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic magni nostrum ea et! Quod, accusantium reiciendis ipsam hic commodi architecto?'
  },

  {
    name: 'Cardio',
    img: '/assets/img/classes/cardio.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic magni nostrum ea et! Quod, accusantium reiciendis ipsam hic commodi architecto?'
  },

  {
    name: 'Fitness',
    img: '/assets/img/classes/fitness.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic magni nostrum ea et! Quod, accusantium reiciendis ipsam hic commodi architecto?'
  },
  
  {
    name: 'Cross Fit',
    img: '/assets/img/classes/crossfit.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic magni nostrum ea et! Quod, accusantium reiciendis ipsam hic commodi architecto?'
  },

  
]

export default function Classes() {

  
  return (
    <section  id='class'>
      <motion.div 
      variants={fadeIn('up', 0.6)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.2 }}

      className="grid grid-cols-1 lg:grid-cols-2">
        {classes.map((item, index) => {
          return <div className="relative w-full h-[300px] lg:h-[485px] flex flex-col justify-center items-center" key={index}>
            
            
            {/* overlay  */}

          <div className="bg-black/50 absolute w-full h-full top-0 z-10">
            <Image src={item.img} fill className="object-cover" alt=""/>      
            </div>
            </div>
        
        })}
      </motion.div>
    </section>
  )
}
