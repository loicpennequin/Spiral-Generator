var mySize= -1;
var baseAngle= 0;
var opacity = 0.3;

var angleSlider;
var colorSlider;
var speedSlider;
var resetButton;
var clearButton;

var addedAngle = 20;
var color = 0;
var speed = 0.5;

var setup = function() {
    var myCanvas = createCanvas (window.innerWidth * 0.80, window.innerHeight * 0.80);
    myCanvas.parent('container');
    background(0);
    createMenu();
}

var draw = function() {
    addedAngle = angleSlider.value();
    color = colorSlider.value();
    speed = speedSlider.value();
    colorMode(HSB, 255, 255, 255, 1);
    noStroke();
    fill(random(color, color+30),180,120, opacity)
    angleMode(DEGREES);
    translate(width/2, height/2);
    rotate(baseAngle);
    ellipse(0, mySize, -mySize/2  );
    mySize = mySize - speed;
    baseAngle+= addedAngle;
    //opacity -= 0.005;
}

var newSpiral= function(){
    mySize= -1;
}

var reset = function(){
    background(0);
    mySize= -1;
}

var createMenu = function() {
    resetButton = createButton('Reset');
    resetButton.parent('menu')
    resetButton.id("reset-button");
    resetButton.mousePressed(reset);

    clearButton = createButton('Add Spiral');
    clearButton.parent('menu');
    clearButton.mousePressed(newSpiral);


    var angleLabel = createSpan('Angle')
    angleLabel.parent('menu');
    angleSlider = createSlider(0, 360, 20, 1)
    angleSlider.parent('menu');
    angleSlider.id("angle-slider");

    var colorLabel = createSpan('color');
    colorLabel.parent('menu');
    colorSlider = createSlider(0, 225, 0, 1)
    colorSlider.parent('menu');
    colorSlider.id("color-slider");

    var speedLabel = createSpan('speed')
    speedLabel.parent('menu');
    speedSlider = createSlider(0.1, 3, 0.5, 0.1)
    speedSlider.parent('menu');
    speedSlider.id("speed-slider");
}
