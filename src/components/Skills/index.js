import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import React from 'react'
import {Cloud, renderSimpleIcon, fetchSimpleIcons, SimpleIcon} from 'react-icon-cloud'
import './index.scss'

const useIcons = (slugs: string[]) => {
  const [icons, setIcons] = React.useState()
  React.useEffect(() => {fetchSimpleIcons(slugs).then(setIcons)}, [])

  if (icons) {
    return Object.values(icons.simpleIcons).map((icon) => renderSimpleIcon({
      icon,
      size: 42,
      aProps: {
        onClick: (e: any) => e.preventDefault()
      }
    }))
  }
  
  return <a>Loading</a>
}

const slugs = [
  'Autodesk',
  'CSS3',
  'C Sharp',
  'C++',
  'Dart',
  'Flutter',
  'HTML5',
  'JavaScript',
  'MATLAB',
  'Microsoft Office',
  'Microsoft Visual Basic',
  'MySQL',
  'npm',
  'Adobe Photoshop',
  'React',
  'SCSS',
  'Unity'
]

const DynamicIconCloud = () => {
  const icons = useIcons(slugs)

  return <Cloud>
    {icons}
  </Cloud>
}

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'l', 'l', 's']}
              idx={15}
            />
          </h1>
          <h2 class="quote">
          "Jack Of All Trades, Master Of None"
          </h2>
          <p align="LEFT">
          That would be how I would describe myself. Some experience in 
          <span class="tech-tag"> AutoCAD</span>
          , 
          <span class="tech-tag"> CSS</span>
          , 
          <span class="tech-tag"> C#</span>
          , 
          <span class="tech-tag"> C++</span>
          , 
          <span class="tech-tag"> Dart</span>
          , 
          <span class="tech-tag"> Flutter</span>
          , 
          <span class="tech-tag"> HTML</span>
          , 
          <span class="tech-tag"> JavaScript</span>
          , 
          <span class="tech-tag"> MATLAB</span>
          ,
          <span class="tech-tag"> Microsoft Office</span>
          , 
          <span class="tech-tag"> Microsoft Visual Basic</span>
          , 
          <span class="tech-tag"> MySQL</span>
          , 
          <span class="tech-tag"> npm</span>
          , 
          <span class="tech-tag"> Photoshop</span>
          , 
          <span class="tech-tag"> React</span>
          , 
          <span class="tech-tag"> SCSS</span>
          , and 
          <span class="tech-tag"> Unity 2D</span>.
          </p>
          <p>
          I have exposed myself to various software technologies and am always keen to learn new ones. I put special effort into optimizing my code and ensuring the project's objective is delivered.
          </p>
          <p>
          Visit my <a href="https://www.linkedin.com/in/deandrehaijielim/" target="_blank">LinkedIn</a> profile for more details. Also, you can check out my CV on this link. 
          </p>
        </div>
        <div className="tag-wrap">
          <Cloud/>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills