import React from 'react'

const TimerLayout = ({ className, children, showSettings }) => (
  <div className={`timer-layout ${className || ''}`}>
    <div className='topleft'>
      <a className='settings-button' href='#settings' onClick={showSettings}>
        <span className='icon' />
      </a>
    </div>

    <div className='body'>{children}</div>

  </div>
)

export default TimerLayout