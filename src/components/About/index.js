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
          <p>
          Currently in my final year of study at Nanyang Technological University (NTU), School of EEE (Electrical and Electronic Engineering), pursuing a Bachelor’s Degree in Electrical and Electronic Engineering. 
          </p>
          <p align="LEFT">
          Trained to analyse and solve the most complex of problems. Outgoing and detail-oriented, proficient at building and maintaining professional relationships. Self-motivated student, capable of working independently or as part of a team. Seek to always learn and challenge myself.
          </p>
          <p>
          Looking for opportunities to start a career in the technology field and would love to have a chat if I am who you are looking for!
          </p>
          <p>
          <a href="https://deandrehaijiel.surge.sh/" target="_blank" rel="noreferrer">Curriculum Vitae Website</a>
          </p>
          </div>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              
            </div>
            <div className="face2">
              
            </div>
            <div className="face3">
              
            </div>
            <div className="face4">
              
            </div>
            <div className="face5">
              
            </div>
            <div className="face6">
              
            </div>
          </div>
        </div>
      </div>
      <Loader type="square-spin" />
    </>
  )
}

export default About