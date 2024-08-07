import React from 'react'
import { feedback } from '../constants'
import styles from '../style'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => (
    <section id='client' className={`${styles.paddingY} flex-col ${styles.flexCenter} relative`}>

      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient ' />

      <div className='w-full flex justify-between items-center mx-auto md:flex-row flec-col mb-16 m-6 z-[1]'>
        <h1 className={`${styles.heading2}`}>What People are <br className='md:block hidden' />saying about us</h1>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} max-w-[250px] text-left`}></p>
        </div>
      </div>

      <div className='flex flex-wrap w-full sm:justify-start justify-center feedback-container relative z-[1]'>
          {feedback.map((card)=>(
            <FeedbackCard key={card.id} {...card} />
          ))}
      </div>

    </section>
  )

export default Testimonials
