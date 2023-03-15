import React, { useEffect, useState } from 'react'
import { ProjectPreview } from '../cmps/ProjectPreview'
import { DinamicProject } from '../cmps/DinamicProject'
import { vanilaList, reactList } from '../assets/projectsList'

export const Projects = ({ setPosition }) => {
    const [startDinamicProject, setStartDinamicProject] = useState({
        isOpen: false,
        link: '',
    })
    useEffect(() => {
        setPosition(1)
        document.body.style.overflowY = (startDinamicProject.isOpen) ? "hidden" : "scroll"
    })

    const closeModal = (ev) => {
        setStartDinamicProject(false)
    }
    return (
        <div className='projects flex column'>
            <div className="vanila-projects">
                <h1 className='flex justify-center' onClick={closeModal}>javaScript</h1>
                <div className='projects-list flex justify-center wrap' onClick={closeModal}>
                    {vanilaList.map(project => {
                        return <ProjectPreview key={project.name} project={project}
                            setStartDinamicProject={setStartDinamicProject}
                        />
                    })}
                </div>
            </div>
            <div className="react-projects">
                <h1 className='flex justify-center' onClick={closeModal}>React</h1>
                <div className='projects-list flex justify-center wrap' onClick={closeModal}>
                    {reactList.map(project => {
                        return <ProjectPreview key={project.name} project={project}
                            setStartDinamicProject={setStartDinamicProject}
                        />
                    })}
                </div>
            </div>
            {startDinamicProject.isOpen && <DinamicProject link={startDinamicProject.link} closeModal={closeModal} />}
        </div>
    )
}