$("#arc-slider").roundSlider({
    sliderType: "min-range",
    circleShape: "custom-quarter",
    value: 75,
    startAngle: 45,
    editableTooltip: true,
    radius: 350,
    width: 6,
    handleSize: "+32",
    tooltipFormat: function (args) {
        return args.value + " %";
    }
});