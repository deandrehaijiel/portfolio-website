import './App.scss'
import {Helmet} from "react-helmet";
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Project from './components/Project'

function App() {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>DeAndre Hai Jie L</title>
      <link rel="canonical" href="http://deandrehaijiel.github.io/portfolio-website" />
      <meta name="description" content="DeAndre Hai Jie Lim's Portfolio Website" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Helmet>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
