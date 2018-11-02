export default function (s) {
    s.props = {}
    s.onSetAppState = () => {}

    s.setup = function() {
        s.createCanvas(900, 300)
        console.log('::: displayDensity:', s.displayDensity())
        console.log('::: pixelDensity:', s.pixelDensity())
    }

    s.draw = function() {
        s.background(127, 0, 50)
        s.noStroke()
        s.fill(127, 255, 205)
        s.ellipse(s.width / 2, s.height / 2, s.props.slider)

        if ((s.frameCount / s.round(s.frameRate())) % 3 === 0) {
            s.onSetAppState({ frameRate: s.frameRate().toFixed(1) })
        }
    }
}
