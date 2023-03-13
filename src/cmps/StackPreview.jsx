import React from 'react'

export const StackPreview = ({ stockItem: stackItem }) => {
    const imgStyle = {
        width: '60px',
        height: '60px',
    }
    return (
        <div className='flex column align-center justify-center'
            style={{ backgroundColor: '#444', borderRadius: '3px',padding:'3px'}}>
            <span style={{ backgroundColor: '#444', color: 'black' }}>{stackItem.name}</span>
            <img src={stackItem.logo} alt={stackItem.name} style={imgStyle} />
        </div>
    )
}