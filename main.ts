// Reset the distance measured
input.onButtonPressed(Button.A, function () {
    counter = 0
})
// Each time Logo Up and Logo Down are triggered, the wheel has moved half a revolution so we will increase the counter accordingly.
input.onGesture(Gesture.LogoUp, function () {
    counter += 0.5
})
// Show the distance measured in metres
input.onButtonPressed(Button.B, function () {
    // The circumfrence of our particular wheel is 62cm, so the distance measured is the number of revolutions multiplied by 0.62
    basic.showNumber(counter * 0.62)
})
input.onGesture(Gesture.LogoDown, function () {
    counter += 0.5
})
let counter = 0
counter = 0
basic.forever(function () {
    // We will constantly display the number of revolutions counted
    basic.showNumber(counter)
})
