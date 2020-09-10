/** 

Title: CAN'T STOP WON'T STOP (PROOF OF CONCEPT)

Creator: Eric J. Lindburg

Description: Flappy bird clone that is basic proof of concept


 */
//  setup
info.setLife(3)
info.setScore(0)
//  To do: Add Background
//  To do: Add fire effects
//  create the Dragon / Player
let dragon = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . 7 7 7 7 7 7 7 . . . .
    . . . . 7 7 7 7 7 7 7 7 7 . . .
    . . . . 7 7 7 7 7 7 7 7 7 . . .
    . . . . 7 7 7 7 7 7 7 7 7 . . .
    . . . . 7 7 7 7 7 7 7 7 7 . . .
    . . . . 7 7 7 7 7 7 7 7 7 . . .
    . . . . 7 7 7 7 7 7 7 7 7 . . .
    . . . . 7 7 7 7 7 7 7 7 7 . . .
    . . . . . 7 7 7 7 7 7 7 . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, 0)
dragon.x = 50
dragon.ay = 15
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_flap() {
    dragon.vy = -20
})
// Check Location
game.onUpdate(function on_update() {
    let y = dragon.y
    if (y > scene.screenHeight()) {
        die()
    } else if (y < 0) {
        dragon.y = 0
    }
    
})
function die() {
    info.changeLifeBy(-1)
    dragon.y = scene.screenHeight() / 2
    dragon.vy = 0
}

