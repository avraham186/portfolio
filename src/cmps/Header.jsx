import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { HomeIconComp } from '../assets/images/header-svgs/HomeIconComp'
import { ProjectsIconComp } from '../assets/images/header-svgs/ProjectsIconComp'
import { AboutMeIconComp } from '../assets/images/header-svgs/AboutMeIconComp'
import { Tooltip } from './ToolTip'
export const Header = ({ position, setPosition }) => {
    const links = [
        { name: 'main', icon: <HomeIconComp />, path: '', position: 0 },
        { name: 'projects', icon: <ProjectsIconComp />, path: 'projects', position: 1 },
        { name: 'about', icon: <AboutMeIconComp />, path: 'about', position: 2 },
    ]
    const moveIndicator = (idx) => {
        setPosition(idx)
    }


    return (
        <div className="header-wrapper full">
            <div className="main-layout">
                <div className='header flex space-between'>
                    <Link to='' className='logo flex align-center' onClick={() => moveIndicator(0)}>
                        <img className='logo-img' src={logo} alt='logo' />
                    </Link>
                    <ul className='list flex'>
                        <div className="indicator" style={{ '--position': position }} data-indicator>
                            <div className="corners"></div>
                        </div>
                        {links.map((link) => {
                            return <Tooltip content={link.name} direction="bottom" key={link.position}>
                                <li onClick={() => moveIndicator(link.position)}>
                                    <NavLink className={(navData) => navData.isActive ?
                                        "link active flex column align-center" :
                                        "link flex column align-center"}
                                        key={link.name} to={`/${link.path}`}>
                                        <div className="icon">{link.icon}</div>
                                        <div className="text">{link.name}</div>
                                    </NavLink>
                                </li>
                            </Tooltip>
                        })}
                    </ul >
                </div>
            </div>
        </div>
    )
}