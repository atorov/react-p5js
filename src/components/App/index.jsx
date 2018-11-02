import React, { Component } from 'react'

import P5Wrapper from '../P5Wrapper/'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            status: '',
            slider: 100, value: null,
        }
    }

    getValue = (value) => this.setState({ value })

    onReady = () => this.setState({ status: 'ready' })

    onSliderChange = (event) => this.setState({ slider: +event.target.value })

    render() {
        return (
            <>
                <P5Wrapper
                    p5Props={{ slider: this.state.slider }}
                    getValue={this.getValue}
                    onReady={this.onReady}
                />

                <div style={{ textAlign: 'center' }}>
                    <strong>{this.state.slider}</strong>
                    <br />
                    <input
                        type="range"
                        min={5} max={290} step={1}
                        value={this.state.slider}
                        style={{ width: '90%', maxWidth: '900px' }}
                        onChange={this.onSliderChange}
                    />
                </div>

                <p style={{ textAlign: 'center' }}>
                    Sketch frame rate:&nbsp;
                    <big><strong>{this.state.value}</strong></big>
                    &nbsp;fps
                </p>

                <p style={{ textAlign: 'center' }}>
                    <a href="https://github.com/atorov/react-p5js">
                        <img
                            alt="github logo"
                            src="/img/github-logo.png"
                            border="0"
                            width="auto"
                            height="28px"
                            style={{ verticalAlign: 'middle' }}
                        />
                    </a>
                </p>
            </>
        )
    }
}
