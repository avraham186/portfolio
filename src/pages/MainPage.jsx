import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { StackPreview } from '../cmps/StackPreview'
import Hero from '../assets/images/me.jpg'
import { stockLogos } from '../assets/projectsList'

export const MainPage = ({ setPosition }) => {
  
    useEffect(() => {
        setPosition(0)
    })

    return (
        <div className="main-page-wrapper main-layout">
            <div className='main-page flex justify-center column'>
                <div className='stack-and-img flex justify-center space-between'>
                    <div className="hero-and-info flex column align-center">
                        <img className='img-hero' src={Hero} alt='portarait' />
                        <p className='info'>
                            Fullstack developer with development experience in React framework with management
                            capabilities, a people's person, can work independently and within teams.
                            High personal capabilities, initiative-taking,
                            and adaptive learner.
                        </p>
                    </div>
                    <div className='stack-logos flex column align-center'>
                        <div className='flex column align-center justify-center'>
                            <h1>My stack:</h1>
                            <div className="stock flex wrap">
                                {stockLogos.map(stackItem => <StackPreview key={stackItem.name} stockItem={stackItem} />)}
                            </div>
                        </div>
                        <div className="connections flex space-around">
                            <Link to='https://github.com/avraham186'
                                target="_blank"
                                className='connections-link'>
                                Github
                            </Link>
                            <Link to='https://www.linkedin.com/in/avraham-kuperwasser-a8383a203/'
                                target="_blank"
                                className='connections-link'>
                                LinkedIn
                            </Link>
                        </div>
                        <div className='flex column align-center justify-center'>
                            <Link to='/projects'
                                className='link-to-projects flex column align-center justify-center'>
                                my projects
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}