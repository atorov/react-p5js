import {
    drawBezier,
    drawFloatingText,
} from './lib'

export default function (s) {
    s.props = {}
    s.onSetAppState = () => {}

    s.setup = function() {
        s.createCanvas(900, 300)
        console.log('::: displayDensity:', s.displayDensity())
        console.log('::: pixelDensity:', s.pixelDensity())
    }

    s.draw = function() {
        if (s.frameCount % 60 === 1) {
            s.onSetAppState({ frameRate: s.frameRate().toFixed(1) })
        }

        s.background(127, 0, 50)
        const weight = s.map(s.props.slider, 5, 290, 0, 10)
        s.strokeWeight(weight)
        s.stroke(127, 255, 205)
        const alpha = s.map(s.props.slider, 5, 290, 255, 0)
        s.fill(127, 255, 205, alpha)
        s.ellipse(s.width / 2, s.height / 2, s.props.slider)

        const noiseX = s.noise(s.frameCount / 150.0)
        const noiseY = s.noise((s.frameCount + 1010) / 150.0)

        const coordX1 = s.map(noiseX, 0, 1, 0, (s.width - s.props.slider) / 2)
        const coordY1 = s.map(noiseY, 0, 1, 0, s.height)
        drawFloatingText(s, coordX1, coordY1, 'Display Density', s.displayDensity())

        const coordX2 = s.map(noiseX, 0, 1, s.width, (s.width - s.props.slider) / 2 + s.props.slider)
        const coordY2 = s.map(noiseY, 0, 1, s.height, 0)
        drawFloatingText(s, coordX2, coordY2, 'Pixel Density', s.pixelDensity())

        drawBezier(s, coordX1, coordY1, coordX2, coordY2)
    }
}
