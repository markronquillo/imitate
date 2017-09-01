import React, { PureComponent } from 'react'
import TimerLayout from '../components/TimerLayout'


class HomeIndex extends PureComponent {
  render() {
    const { showSettings } = this.props
    return (
      <TimerLayout showSettings={showSettings} className='_page-fade'>
        <div className="time-chooser">
          <button 
            className="button timer-button -large -work">
            Work
          </button>
          <span className="logo app-logo">Logo</span>
          <button 
            className="button timer-button -large -break">
            Break 
          </button>
        </div>
      </TimerLayout>   
    )
  }
}

export default HomeIndex