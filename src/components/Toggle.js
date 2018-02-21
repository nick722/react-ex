/**
 * React Component Event Handlers
 * https://codeburst.io/react-component-event-handling-660acb1cfd07
 */

import React, { Component } from 'react';

export default class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF' }
            </button>
        );
    }
}