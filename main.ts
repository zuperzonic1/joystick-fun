let yVal = 0
let xVal = 0
let item = game.createSprite(2, 2)
basic.forever(function () {
    xVal = pins.analogReadPin(AnalogPin.P0)
    yVal = pins.analogReadPin(AnalogPin.P1)
    if (xVal > 600) {
        item.change(LedSpriteProperty.X, -1)
    } else if (xVal < 400) {
        item.change(LedSpriteProperty.X, 1)
    } else if (yVal < 400) {
        item.change(LedSpriteProperty.Y, -1)
    } else if (yVal > 600) {
        item.change(LedSpriteProperty.Y, 1)
    }
})
