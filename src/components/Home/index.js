import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Loader from 'react-loaders'
import LogoTitle from '../../assets/images/profile.png';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'
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
                <img src={LogoTitle} alt="developer" />
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
                <h2>Aspiring Software Engineer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Home