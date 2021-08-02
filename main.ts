brick.buttonEnter.onEvent(ButtonEvent.Pressed, function () {
    while (true) {
        if (sensors.color1.light(LightIntensityMode.Reflected) > 10 || sensors.ultrasonic3.distance() > 10) {
            motors.largeBC.tank(50, 50)
        } else {
            motors.stopAll()
            motors.largeBC.tank(-50, -50, 0.5, MoveUnit.Rotations)
            motors.largeBC.tank(50, -50, Math.randomRange(0.5, 1), MoveUnit.Rotations)
        }
    }
})
forever(function () {
    brick.showValue("RLI", sensors.color1.light(LightIntensityMode.Reflected), 1)
})
