export function drawBezier(s, x1, y1, x2, y2) {
    s.noStroke()
    s.fill(127, 255, 205, 63)
    s.bezier(
        x1, y1,
        s.width / 2 - s.props.slider * 2, s.height / 2 - s.props.slider,
        s.width / 2 + s.props.slider * 2, s.height / 2 + s.props.slider,
        x2, y2
    )
}

export function drawFloatingText(s, rx, ry, label, value) {
    s.textAlign(s.CENTER);
    s.noStroke()
    s.fill(127, 255, 205, 191)
    s.textSize(14)
    s.text(`${label}: ${value}`, rx, ry - 8)

    s.stroke(127, 255, 205)
    s.strokeWeight(1)
    s.fill(127, 255, 205, 191)
    s.ellipse(rx, ry, 8, 8)

    s.textAlign(s.CENTER);
    s.noStroke()
    s.fill(127, 255, 205, 191)
    s.textSize(12)
    s.text(`(${s.round(rx)}, ${s.round(ry)})`, rx, ry + 16)
}
