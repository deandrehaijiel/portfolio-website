import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoD from '../../assets/images/D.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard, faUser, faKeyboard, faFolder, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin, faGithub, faTwitter, faInstagram  } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoD} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="deandre" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faIdCard} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="skills-link" to="/skills">
                <FontAwesomeIcon icon={faKeyboard} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="project-link" to="/project">
                <FontAwesomeIcon icon={faFolder} color="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/deandrehaijielim/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/deandrehaijiel">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://twitter.com/deandrehaijiel">
                    <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/__leijiaherdnaed__/">
                    <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar