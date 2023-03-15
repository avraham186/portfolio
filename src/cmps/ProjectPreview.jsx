import React from 'react'

export const ProjectPreview = ({ project, setStartDinamicProject }) => {

    const openModal = (ev) => {
        ev.stopPropagation()
        setStartDinamicProject((prev) => {
            return {
                ...prev.startDinamicProject,
                isOpen: !prev.isOpen,
                link: project.btn
            }
        })
    }
    return (
        <div className='projects-preview flex column align-center evenly' onClick={openModal}>
            <h2>{project.name}</h2>
            <img className='project-img' src={project.img} alt="project.img" />
            <p className='flex justify-center'>{project.description}</p>
        </div>
    )
}
