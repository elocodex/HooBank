import React from 'react'
import {discount,robot} from '../assets'
import styles from '../style'
import GetStarted from './GetStarted'
import { AnimatePresence, motion } from 'framer-motion'

const Hero = () => (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>

        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 bg-red`}>
            <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
              <img src={discount} alt="discount" className='w-[32px] h-32[px]' />
              <p className={`'text-white' ${styles.paragraph} `}>
              <span className='text-white'>20% </span>
              <span className='text-white'>DISCOUNT FOR {""}</span>
              <span className='text-white'>ONE MONTH {""}</span> Account
              </p>
            </div>

            <div className="flex flex-row justify-between-items-center w-full">
              <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px
              ] leading-[75px]'>
                The NEXT <br className='sm:block hidden'/> {""}
                <span className='text-gradient'>GENERATION</span> {""}
              </h1>
              <div className='ss:flex hidden md:mr-4 mr-0'>
                  <GetStarted />
              </div>
            </div>

            <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px]
            leading-[75px] w-full'>Payment Method.
            </h1>

            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
            We examine annual percentage rates, annual fees.
            </p>
        </div>

        <AnimatePresence>
          < motion.div
          initial={{x:200}}
          whileInView={{x:0}}
          exit={{x:-200}}
          transition={{duration:1}}
          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
            <img src={robot} alt="Billing" className='w-[60%] h-[80%] relative z-[5]' />

            <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient ' />
          <div className='absolute z-[1] w-[80%] h-[80%] bottom-40 rounded-full white__gradient ' />
          <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 rounded-full blue__gradient ' />

          </ motion.div>
        </AnimatePresence>

        <div className={`ss:hidden ${styles.flexCenter}`}>
          <GetStarted />
        </div>
        
    </section>

    )

export default Hero
