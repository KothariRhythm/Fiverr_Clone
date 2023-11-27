import React from 'react'
import './Home.scss'
import Featured from '../../components/featured/Featured'
import Slide from '../../components/slide/Slide'
import CatCard from '../../components/catCard/CatCard'
import { cards, projects } from '../../data'
import TrustedBy from '../../components/trustedBy/TrustedBy'
import ProjectCard from '../../components/projectCard/ProjectCard'

const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={3} arrowsScroll={3}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>The best part? Everything.</h1>
            <div className="title">
              <img src="./check.png" alt="" />
              Stick to your budget
            </div>
            <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
            <div className="title">
              <img src="./check.png" alt="" />
              Get quality work done quickly
            </div>
            <p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
            <div className="title">
              <img src="./check.png" alt="" />
              Pay when you're happy
            </div>
            <p>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
            <div className="title">
              <img src="./check.png" alt="" />
              Count on 24/7 support
            </div>
            <p>Our round-the-clock support team is available to help anytime, anywhere.</p>
          </div>
          <div className="item">
            <video src="./video.mp4" controls ></video>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <span className='text'>
              fiverr
            <span className='dot'>.</span>
            <h1>Business Solutions</h1>
            </span>
            <h1>Advanced solutions and professional talent for businesses</h1>
            <div className="title">
              <img src="./check.png" alt="" />
              <div className="content">
                <b>Fiverr Pro</b>
                <p>Access top freelancers and professional business tools for any project</p>
              </div>
            </div>
            <div className="title">
              <img src="./check.png" alt="" />
              <div className="content">
                <b>Fiverr Certified</b>
                <p>Build your own branded marketplace of certified experts</p>
              </div>
            </div>
            <div className="title">
              <img src="./check.png" alt="" />
              <div className="content">
                <b>Fiverr Enterprise</b>
                <p>Manage your freelance workforce and onboard additional talent with an end-to-end SaaS solution</p>
              </div>
            </div>
            <button>Learn more</button>
          </div>
          <div className="item">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_800,dpr_1.0/v1/attachments/generic_asset/asset/51c35c7cecf75e6a5a0110d27909a2f5-1690202609364/EN.png" alt="" />
          </div>
        </div>
      </div>
      <Slide slidesToShow={3} arrowsScroll={3}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Slide>
    </div>
  )
}

export default Home
