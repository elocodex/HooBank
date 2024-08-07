import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
          
          <h2 className={styles.heading2}>Find a Better Deal<br className='sm:block hidden' />
          in a few easy steps.</h2> 
          <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam aut magni quis, minima voluptate quas neque harum iste aspernatur minus?</p>

          <Button styles='mt-10' />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[100%] h-[100%] ' />
      </div>

    </section>
  )

export default CardDeal
