import React from 'react'
import iconBrand from "/icon-brand-recognition.svg";
import iconRecords from "/icon-detailed-records.svg";
import iconCustomizable from "/icon-fully-customizable.svg";

export default function Stats() {
  return (
    <section className='stats-section'>
      <h2>Advanced Statistics</h2>
      <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>

      <div className='stats-blocks'>
        <div className='stats-block'>
          <div className='stats-block-image'>
            <img src={iconBrand} alt={'icon brand recognition'} />
          </div>

          <h3>Brand Recognition</h3>
          <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
        </div>

        <div className='stats-block'>
          <div className='stats-block-image'>
            <img src={iconRecords} alt={'icon detailed records'} />
          </div>

          <h3>Detailed Records</h3>
          <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
        </div>

        <div className='stats-block'>
          <div className='stats-block-image'>
            <img src={iconCustomizable} alt={'icon fully customizable'} />
          </div>

          <h3>Fully Customizable</h3>
          <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
        </div>
      </div>
    </section>
  )
}
