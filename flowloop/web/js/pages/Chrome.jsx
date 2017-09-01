import React, { Component } from 'react'
import { connect } from 'react-redux'

import TransitionGroup from 'react-addons-css-transition-group'
import HomeIndex from './HomeIndex.jsx'
import SettingsIndex from './SettingsIndex.jsx'

export class Chrome extends Component {
  render() {
    const { page, showSettings, showIndex } = this.props
    console.log(page);
    return (
      <TransitionGroup
      transitionName='_page'
      transitionEnterTimeout={400}
      transitionLeaveTimeout={400}>
        {
          page === 'HomeIndex'
          ? <HomeIndex key="timer" showSettings={showSettings} />
          : page === 'SettingsIndex'
          ? <SettingsIndex key="settings" showIndex={showIndex} />
          : <div > hello </div>
        }
      </TransitionGroup>
    )
  }
}

export default connect(
    (state, ownProps) => ({
        page: state.route.page
    }),
    (dispatch) => ({
      showSettings: () => dispatch({ type: 'route:change', page: 'SettingsIndex' }),
      showIndex: () => dispatch({ type: 'route:change', page: 'HomeIndex' }) 
    })
)(Chrome)