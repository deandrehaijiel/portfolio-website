import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Loader from 'react-loaders'
import D from '../../assets/images/D.png';
import Profile from '../../assets/images/Profile.PNG'
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {

    const[letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['e','A','n','d','r','e']
    const jobArray = ['U','n','d','e','r','g','r','a','d','u','a','t','e']

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span> 
                <span className={`${letterClass} _12`}>i</span> 
                <span className={`${letterClass} _13`}>,</span> 
                <br />
                <span className={`${letterClass} _14`}>I</span> 
                <span className={`${letterClass} _15`}>'</span>
                <span className={`${letterClass} _16`}>m</span>  
                <img src={D} alt="DeAndre" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={17} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={23} />
                <br />
                </h1>
                <br />
                <br />
                <br />
                <h2>Aspiring Impacter</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <div className="home-stage-cube-cont">
          <div className="home-cubespinner">
            <div className="face1">
              <img src={Profile} alt="profile" />
            </div>
            <div className="face2">
              <img src={Profile} alt="profile" />
            </div>
            <div className="face3">
              <img src={Profile} alt="profile" />
            </div>
            <div className="face4">
              <img src={Profile} alt="profile" />
            </div>
            <div className="face5">
              <img src={Profile} alt="profile" />
            </div>
            <div className="face6">
              <img src={Profile} alt="profile" />
            </div>
          </div>
        </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Home