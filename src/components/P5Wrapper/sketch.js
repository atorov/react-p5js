export default function sketch(p) {
  let props = {};

  p.pushProps = function (_props) {
    props = _props;
  }

  p.setup = function() {
    p.createCanvas(800, 300);
  }

  p.draw = function() {
    p.background(127, 0, 50);
    p.noStroke();
    p.fill(127, 255, 205);
    p.ellipse(p.width / 2, p.height / 2, props.slider);

    if ((p.frameCount / p.round(p.frameRate())) % 2 === 0) {
      props.getValue(p.frameRate());
    }
  }
}
