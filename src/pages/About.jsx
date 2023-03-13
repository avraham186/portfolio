import React, { useEffect } from 'react'

export const About = ({ setPosition }) => {
    useEffect(() => {
        setPosition(2)
    },)

    return (
        <div className='about-page main-layout'>
            <article className='about-article flex justify-center'>
                <p style={{ width: '90%' }}>
                    im Avraham and im a foolStack developper i have experience at frontEnd backEnd DB and more
                    React & Redux for the front
                    node for the back
                    mongo for the data base
                    rest API or GraphQL
                </p>
            </article>
        </div>
    )
}
