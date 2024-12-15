import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <div className="fade">
            <p>Founder of One Date</p>
            <p>
              I'm passionate about revolutionizing the way people connect. At
              One Date, I lead the development of a unique dating app that goes
              beyond matching. Users match based on shared interests and connect
              them with exciting local experiences.
            </p>
            <p>
              This innovative approach creates a win-win for both daters and
              businesses. Users discover unforgettable adventures, while local
              establishments gain valuable exposure and new customers.
            </p>
            <p>Excited to connect and explore partnerships!</p>
          </div>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1"></div>
            <div className="face2"></div>
            <div className="face3"></div>
            <div className="face4"></div>
            <div className="face5"></div>
            <div className="face6"></div>
          </div>
        </div>
      </div>
      <Loader type="square-spin" />
    </>
  )
}

export default About
