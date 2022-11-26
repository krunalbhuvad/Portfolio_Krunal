import React from 'react'
import './Portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'


const Portfolio = () => {
  const imgs ={
  
    id:"1",
    src:`${IMG1}`
  
  }
  return (
    <section id='portfolio'>
      <h5>MY Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">



       
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={imgs.src} alt="image" />
          </div>
          <h3>This is Item title</h3>
          <div className="portfolio_item-cta">
          <a href="http://github.com" className='btn ' target="_blank" rel="noopener noreferrer">Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target="_blank" rel="noopener noreferrer">Live Damo</a>
          </div>
        </article>

    

      </div>
      
    
    </section>
  )
}

export default Portfolio
