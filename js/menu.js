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
