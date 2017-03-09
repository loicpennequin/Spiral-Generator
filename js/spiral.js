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
    background(0);
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

var createMenu = function() {
    resetButton = createButton('Start/Reset');
    resetButton.parent('menu');
    resetButton.id('start');
    resetButton.mousePressed(reset);


    clearButton = createButton('Add Spiral');
    clearButton.parent('menu');
    clearButton.mousePressed(newSpiral);

    var angleLabel = createDiv('Angle')
    angleLabel.parent('menu');
    angleSlider = createSlider(0, 360, 20, 1)
    angleSlider.parent('menu');

    var speedLabel = createDiv('Speed');
    speedLabel.parent('menu');
    speedSlider = createSlider(0.1, 3, 0.5, 0.1)
    speedSlider.parent('menu');

    var opacityLabel = createDiv('Opacity');
    opacityLabel.parent('menu');
    opacitySlider = createSlider(0, 1, 0.3, 0.05);
    opacitySlider.parent('menu');

    var fadeOutLabel = createDiv('Fade out');
    fadeOutLabel.parent('menu');
    fadeOutSlider = createSlider(0, 0.01, 0, 0.0002)
    fadeOutSlider.parent('menu');

    var xSliderLabel = createDiv('X-Origin');
    xSliderLabel.parent('menu');
    xSlider = createSlider(0,1,0.5,0.05);
    xSlider.parent('menu');

    var ySliderLabel = createDiv('Y-Origin');
    ySliderLabel.parent('menu');
    ySlider = createSlider(0,1,0.5,0.05);
    ySlider.parent('menu');

    colorVarianceLabel = createDiv('Color variance');
    colorVarianceLabel.parent('menu');
    colorVarianceSlider = createSlider('0,200,30,2');
    colorVarianceSlider.parent('menu')


    fillCheckbox = createCheckbox('Fill', true);
    fillCheckbox.parent('checkbox-fill');
    var fillColorLabel = createDiv('Fill hue');
    fillColorLabel.parent('checkbox-fill');
    colorFillSlider = createSlider(0, 225, 0, 1)
    colorFillSlider.parent('checkbox-fill');

    strokeCheckbox = createCheckbox('Stroke', false);
    strokeCheckbox.parent('checkbox-stroke');
    var strokeColorLabel = createDiv('Stroke hue');
    strokeColorLabel.parent('checkbox-stroke');
    colorStrokeSlider = createSlider(0, 225, 0, 1)
    colorStrokeSlider.parent('checkbox-stroke');

    blendModeSelect = createSelect();
    blendModeSelect.parent('menu');
    blendModeSelect.option('Blend Mode(Default)', BLEND);
    blendModeSelect.option('Add', ADD);
    blendModeSelect.option('Darkest', DARKEST);
    blendModeSelect.option('Lightest', LIGHTEST);
    blendModeSelect.option('Difference', DIFFERENCE);
    blendModeSelect.option('Exclusion', EXCLUSION);
    blendModeSelect.option('Multiply', MULTIPLY);
    blendModeSelect.option('Screen', SCREEN);
    blendModeSelect.option('Replace', REPLACE);
    blendModeSelect.option('Overlay', OVERLAY);
    blendModeSelect.option('Hard Light', HARD_LIGHT);
    blendModeSelect.option('Soft Light', SOFT_LIGHT);
    blendModeSelect.option('Dodge', DODGE);
    blendModeSelect.option('Burn', BURN);

}
