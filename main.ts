basic.forever(function () {
    if (input.lightLevel() > 30) {
        basic.showString("EGUN ON")
    }
})
basic.forever(function () {
    if (input.lightLevel() > 30) {
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        basic.pause(1000)
    }
})
