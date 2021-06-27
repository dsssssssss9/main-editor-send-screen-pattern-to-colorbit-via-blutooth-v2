input.onButtonPressed(Button.A, function () {
    proportionalFont.showString("Testing...Testing...1...2...3", 150)
    proportionalFont.showSpace(5, 150)
})
radio.setGroup(42)
basic.forever(function () {
    for (let Loop1 = 0; Loop1 <= 4; Loop1++) {
        for (let Loop2 = 0; Loop2 <= 4; Loop2++) {
            if (led.point(0, 0)) {
                radio.sendValue("Loop1", Loop1)
                radio.sendValue("Loop2", Loop2)
                radio.sendValue("Led", 1)
            } else {
                radio.sendValue("Loop1", Loop1)
                radio.sendValue("Loop2", Loop2)
                radio.sendValue("Led", 0)
            }
        }
    }
})
