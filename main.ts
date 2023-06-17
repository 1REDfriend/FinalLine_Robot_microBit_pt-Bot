function Twerk_Sero () {
    PTKidsBITRobotPRO.servoWrite(Servo_Write.S0, 150)
    PTKidsBITRobotPRO.setColor(LED_Color.Blue)
    for (let index = 0; index < 4; index++) {
        Grip()
        UnGrip()
    }
}
function AutoFinishFinal () {
    PTKidsBITRobotPRO.motorGo(speed, speed)
    basic.pause(200)
    smooth_foward_Center(2)
    PTKidsBITRobotPRO.spinDegree(-90)
    smooth_foward_center_to_font(3)
    Grip()
    smooth_backWard(5)
    PTKidsBITRobotPRO.spinDegree(90)
    smooth_foward_Center(1)
    PTKidsBITRobotPRO.spinDegree(90)
    smooth_foward_Center(1)
    UnGrip()
    smooth_backWard(4)
    PTKidsBITRobotPRO.spinDegree(-90)
    smooth_foward_center_to_font(2)
    Grip()
    smooth_backWard(1)
    PTKidsBITRobotPRO.spinDegree(90)
    smooth_foward_center_to_font(4)
    UnGrip()
    smooth_backWard(5)
    PTKidsBITRobotPRO.spinDegree(180)
    smooth_foward_center_to_font(1)
    Grip()
    smooth_backWard(4)
    PTKidsBITRobotPRO.spinDegree(90)
    smooth_foward_center_to_font(1)
    UnGrip()
    smooth_backWard(1)
    PTKidsBITRobotPRO.spinDegree(-90)
    smooth_foward_Center(3)
    PTKidsBITRobotPRO.spinDegree(90)
    smooth_foward_center_to_font(1)
    Grip()
    smooth_backWard(3)
    PTKidsBITRobotPRO.spinDegree(90)
    smooth_foward_center_to_font(5)
    UnGrip()
    smooth_backWard(1)
    Twerk_Sero()
}
function smooth_foward_center_to_font (Count: number) {
    PTKidsBITRobotPRO.ForwardLINECount(
    Intersection.Center,
    Forward_Direction.Forward,
    Stop_Position.Center,
    Count - 1,
    speed,
    KP,
    KD
    )
    SetSpeed(SlowSpeed)
    PTKidsBITRobotPRO.ForwardLINE(
    Intersection.Center,
    Forward_Direction.Forward,
    Stop_Position.Front,
    speed,
    KP,
    KD
    )
    PTKidsBITRobotPRO.motorStop()
    SetSpeed(255)
}
function smooth_backWard (Count: number) {
    SetSpeed(SlowSpeed)
    PTKidsBITRobotPRO.ForwardLINE(
    Intersection.Center,
    Forward_Direction.Backward,
    Stop_Position.Back,
    speed,
    KP,
    KD
    )
    SetSpeed(255)
    PTKidsBITRobotPRO.ForwardLINECount(
    Intersection.Center,
    Forward_Direction.Backward,
    Stop_Position.Center,
    Count - 1,
    speed,
    KP,
    KD
    )
    PTKidsBITRobotPRO.motorStop()
}
function Grip () {
    PTKidsBITRobotPRO.servoWrite(Servo_Write.S1, 60)
    basic.pause(200)
}
function smooth_foward_Center (Line_Count: number) {
    PTKidsBITRobotPRO.ForwardLINECount(
    Intersection.Center,
    Forward_Direction.Forward,
    Stop_Position.Center,
    Line_Count - 1,
    speed,
    KP,
    KD
    )
    SetSpeed(SlowSpeed)
    PTKidsBITRobotPRO.ForwardLINE(
    Intersection.Center,
    Forward_Direction.Forward,
    Stop_Position.Center,
    speed,
    KP,
    KD
    )
    PTKidsBITRobotPRO.motorStop()
    SetSpeed(255)
}
function UnGrip () {
    PTKidsBITRobotPRO.servoWrite(Servo_Write.S1, 170)
    basic.pause(500)
}
function SetSpeed (Speed: number) {
    speed = Speed
    KP = speed / 255 * 0.5
    KD = speed / 255 * 3
}
PTKidsBITRobotPRO.buttonEvent(Button_Name.BUTTONA, Button_Status.Pressed, function () {
    AutoFinishFinal()
})
let KD = 0
let KP = 0
let speed = 0
let SlowSpeed = 0
PTKidsBITRobotPRO.initialize()
PTKidsBITRobotPRO.setBrightness(50)
PTKidsBITRobotPRO.SensorCalibrate(Calibrate_Mode.MODE2)
PTKidsBITRobotPRO.setPowerBrake(40)
PTKidsBITRobotPRO.servoWrite(Servo_Write.S0, 70)
PTKidsBITRobotPRO.setColor(LED_Color.Green)
basic.pause(200)
PTKidsBITRobotPRO.servoWrite(Servo_Write.S1, 150)
basic.pause(200)
SetSpeed(200)
SlowSpeed = 50
