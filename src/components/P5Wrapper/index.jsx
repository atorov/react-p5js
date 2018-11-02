import React, { Component } from 'react'
import PropTypes from 'prop-types'

import sketch from './sketch.js'

export default class P5Wrapper extends Component {
    static propTypes = {
        p5Props: PropTypes.object.isRequired,
        onSetAppState: PropTypes.func.isRequired,
    }

    componentDidMount() {
        this.canvas = new window.p5(sketch, 'p5-container')
        this.canvas.props = this.props.p5Props
        this.canvas.onSetAppState = this.props.onSetAppState
    }

    shouldComponentUpdate(nextProps) {
        this.canvas.props = nextProps.p5Props
        return false
    }

    componentWillUnmount() {
        this.canvas.remove()
    }

    render() {
        return (
            <div
                id="p5-container"
                style={{ width: "100%", textAlign: "center" }}
            />
        )
    }
}
