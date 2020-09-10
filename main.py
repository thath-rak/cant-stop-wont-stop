"""

Title: CAN'T STOP WON'T STOP (PROOF OF CONCEPT)

Creator: Eric J. Lindburg

Description: Flappy bird clone that is basic proof of concept

"""
# setup
info.set_life(3)
info.set_score(0)
# To do: Add Background
# To do: Add fire effects

# create the Dragon / Player
dragon = sprites.create(img("""
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
"""),
    0)
dragon.x=50
dragon.ay=15
def on_flap():
    dragon.vy=-20
controller.A.on_event(ControllerButtonEvent.PRESSED, on_flap)

#Check Location
def on_update():
    y=dragon.y
    if y > scene.screen_height():
        die()
    elif y < 0:
        dragon.y=0
game.on_update(on_update)

def die():
    info.change_life_by(-1)
    dragon.y=scene.screen_height()/2
    dragon.vy=0