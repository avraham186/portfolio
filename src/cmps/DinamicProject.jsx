import React, { useEffect, Suspense } from 'react'

export const DinamicProject = ({ link, closeModal }) => {
    useEffect(() => {
        document.body.style.backgroundColor = '#1c1a1ac7'

        return () => {
            document.body.style.backgroundColor = 'rgba(51,51,51,1)'
        }
    }, [])

    const iframeLoaded = (ev) => {
        const iframe = ev.target
        if (iframe) {
            const height = iframe.contentWindow.document.body.scrollHeight
            console.log('iframe', iframe);
            console.log('height', height);
            iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px'
        }
    }
    return (
        <div className='dinamic-project-cmp flex column align-center justify-center'>
            <div className='close-dinamic' onClick={closeModal} title="close mdoal">❌</div>
            <Suspense fallback={<h1>Loading...</h1>}>
                <iframe className="iframe"
                    src={link} onLoad={iframeLoaded}
                    // frameBorder="0"
                    title='iframe'>
                </iframe>
            </Suspense>
        </div>
    )
}
