export default function sketch(s) {
  let onReady = () => {};
  let props = {};

  s.setOnReady = function(cb) {
    onReady = cb;
  };

  s.pushProps = function (_props) {
    props = _props;
  }

  s.setup = function() {
    s.createCanvas(800, 300);
    onReady();
  }

  s.draw = function() {
    s.background(127, 0, 50);
    s.noStroke();
    s.fill(127, 255, 205);
    s.ellipse(s.width / 2, s.height / 2, props.slider);

    if ((s.frameCount / s.round(s.frameRate())) % 3 === 0) {
      props.getValue(s.frameRate().toFixed(1));
    }
  }
}
