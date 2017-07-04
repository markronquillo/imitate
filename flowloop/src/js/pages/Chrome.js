import React, { Component } from 'react'
import { connect } from 'react-redux'

import TransitionGroup from 'react-addons-css-transition-group'
import HomeIndex from './HomeIndex'


export class Chrome extends Component {
    render() {
        const { page } = this.props
        return (
            <TransitionGroup
            transitionName='_page'
            transitionEnterTimeout={400}
            transitionLeaveTimeout={400}>
                {
                    page === 'HomeIndex'
                    ? <HomeIndex />
                    : <div > hello </div>
                }
            </TransitionGroup>
        )
    }
}

export default connect(
    (state, ownProps) => ({
        page: state.route.page
    })
)(Chrome)