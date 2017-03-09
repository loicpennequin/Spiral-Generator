var mySize= -1;
var baseAngle= 0;
var opacity = 0;

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

var addedAngle = 20;
var colorFill = 0;
var colorStroke = 0;
var speed = 0.5;

var setup = function() {
    var myCanvas = createCanvas (window.innerWidth * 0.80, window.innerHeight * 0.80);
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
    colorMode(HSB, 255, 255, 255, 1);
    noStroke();
    fillMode();
    strokeMode();
    angleMode(DEGREES);
    translate(width/2, height/2);
    rotate(baseAngle);
    ellipse(0, mySize, -mySize/2.5  );
    mySize = mySize - speed;
    baseAngle+= addedAngle;
    opacity -= fadeOutSlider.value();
}

var newSpiral= function(){
    mySize= -1;
}

var reset = function(){
    background(0);
    mySize= -1;
    opacity = opacitySlider.value();
}

var fillMode = function() {
  if (fillCheckbox.checked()) {
    fill(random(colorFill, colorFill+30),255,150, opacity)
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

var createMenu = function() {
    resetButton = createButton('Start/Reset');
    resetButton.parent('menu');
    resetButton.id('start');
    resetButton.mousePressed(reset);


    clearButton = createButton('Add Spiral');
    clearButton.parent('menu');
    clearButton.mousePressed(newSpiral);

    var angleLabel = createSpan('Angle')
    angleLabel.parent('menu');
    angleSlider = createSlider(0, 360, 20, 1)
    angleSlider.parent('menu');

    var speedLabel = createSpan('Speed');
    speedLabel.parent('menu');
    speedSlider = createSlider(0.1, 3, 0.5, 0.1)
    speedSlider.parent('menu');

    var opacityLabel = createSpan('Opacity');
    opacityLabel.parent('menu');
    opacitySlider = createSlider(0, 1, 0.3, 0.05);
    opacitySlider.parent('menu');

    var fadeOutLabel = createSpan('Fade out');
    fadeOutLabel.parent('menu');
    fadeOutSlider = createSlider(0, 0.01, 0, 0.0002)
    fadeOutSlider.parent('menu');

    fillCheckbox = createCheckbox('Fill', true);
    fillCheckbox.parent('checkbox-fill');
    var fillColorLabel = createSpan('Fill hue');
    fillColorLabel.parent('checkbox-fill');
    colorFillSlider = createSlider(0, 225, 0, 1)
    colorFillSlider.parent('checkbox-fill');

    strokeCheckbox = createCheckbox('Stroke', false);
    strokeCheckbox.parent('checkbox-stroke');
    var strokeColorLabel = createSpan('Stroke hue');
    strokeColorLabel.parent('checkbox-stroke');
    colorStrokeSlider = createSlider(0, 225, 0, 1)
    colorStrokeSlider.parent('checkbox-stroke');


}
