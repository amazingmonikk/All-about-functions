function parentProcess() {
    var speed = "100 miles per hour"

    function childProcess() {
        // var speed = "200 miles per hour"
        console.log("this car is running " + speed)
    }
    childProcess()
}
parentProcess()