import React from 'react'

export const BtnSwitch = ({ isFer }) => {
    const ferOrCell = () => isFer ? 'fer' : 'cel'
    return (
        <div className='switch flex column align-center justify-center'>
            <span className='c-f-span'>℃</span>
            <span className={`${ferOrCell()} flex align-center justify-center`}>{isFer ? '℉' : '℃'}</span>
            <span className='c-f-span'>℉</span>
        </div>
    )
}
