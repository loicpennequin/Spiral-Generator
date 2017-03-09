var mySize= -1;
var baseAngle= 0;
var opacity = 0;
var originX = 0.5;
var originY = 0.5;
var colorVariance= 30;
var myBlendMode;

var angleSlider;
var colorFillSlider;
var colorStrokeSlider;
var speedSlider;
var opacitySlider;
var fadeOutSlider;
var resetButton;
var clearButton;
var fillCheckbox;
var strokeCheckbox;
var xSlider;
var ySlider;
var colorVarianceSlider;
var blndModeRadio;

var addedAngle = 20;
var colorFill = 0;
var colorStroke = 0;
var speed = 0.5;





var setup = function() {
    var myCanvas = createCanvas (window.innerWidth * 0.65, window.innerHeight * 0.81);
    myCanvas.parent('container');
    background(0);
    createMenu();
    fillCheckbox.changed(fillMode);
    strokeCheckbox.changed(strokeMode);
}

var draw = function() {
    addedAngle = angleSlider.value();
    colorFill = colorFillSlider.value();
    colorStroke = colorStrokeSlider.value();
    speed = speedSlider.value();
    originX = xSlider.value();
    originY = ySlider.value();
    colorVariance = colorVarianceSlider.value();
    myBlendMode = blendModeSelect.value();
    displayUpdate();
    colorMode(HSB, 255, 255, 255, 1);
    noStroke();
    fillMode();
    strokeMode();
    angleMode(DEGREES);
    translate(width*originX, height*originY);
    rotate(baseAngle);
    blendMode(myBlendMode);
    ellipse(0, mySize, -mySize/2.5  );
    mySize = mySize - speed;
    baseAngle+= addedAngle;
    opacity -= fadeOutSlider.value();
}

var newSpiral= function(){
    mySize = -1;
    opacity = opacitySlider.value();
}

var reset = function(){
    blendMode(BLEND)
    fill(0);
    rect(0,0,width, height);
    background(0)
    mySize= -1;
    opacity = opacitySlider.value();
    document.getElementById('container').style.transform = 'none';
}

var fillMode = function() {
  if (fillCheckbox.checked()) {
    fill(random(colorFill, colorFill+colorVariance),255,150, opacity)
  } else {
    noFill();
  }
}

var strokeMode = function() {
  if (strokeCheckbox.checked()) {
    stroke(random(colorStroke, colorStroke+30),255,150, opacity)
    strokeWeight(3);
  } else {
    noStroke();
  }
}
