import React from 'react'
import HeroImage from "/illustration-working.svg";


export default function Hero() {
  return (
    <section className='hero'>
      <div className='hero-content'>
        <h1>More than just shorter links</h1>
        <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
        <a href='/#' className='button-hero'>Get Started</a>
      </div>

      <div className='hero-image'>
        <img  src={HeroImage}  width="733"  height="482"  placeholder="blur"  alt="working illustration" />
      </div>
    </section>
  )
}
