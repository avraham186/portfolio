import React, { useEffect } from 'react'

export const About = ({ setPosition }) => {
    useEffect(() => {
        setPosition(2)
    },)

    return (
        <div className='about-page main-layout'>
            <article className='about-article flex justify-center'>
                <p style={{ width: '90%' }}>
                    I'm Avraham Kuperwasser, a software developer with 4+ years of experience building
                    internal systems, portals and components, mainly with React and JavaScript.
                    <br /><br />
                    Today I work at Abra Web &amp; Mobile, developing internal applications:
                    turning business requirements into components and features, maintaining legacy code and
                    working with REST APIs, SharePoint and Nintex. Before that I built portals and internal
                    systems at Bynet Software.
                    <br /><br />
                    On the server side I have worked with Node.js, Express and MongoDB, and I use GitHub
                    Copilot agents with custom instruction files as part of my daily workflow.
                </p>
            </article>
        </div>
    )
}
