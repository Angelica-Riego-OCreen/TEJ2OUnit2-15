/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Angelica
 * Created on: Apr 2026
 * This program is a nested loops.
*/

// variables
let sprite: game.LedSprite = null
let loopCounter1 = 0
let loopCounter2 = 0

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// Press Button A, sprite moves clockwise
input.onButtonPressed(Button.A, function () {
    // setup
    basic.clearScreen()
    loopCounter1 = 0
    loopCounter2 = 0
    while (loopCounter1 < 4) {
        loopCounter1++
        sprite = game.createSprite(0, 0)
        while (loopCounter2 < 4) {
            sprite.move(1)
            basic.pause(500)
            loopCounter2++
        }
        sprite.turn(Direction.Right, 90)
    }
    sprite.delete()
    basic.showIcon(IconNames.Happy)
})