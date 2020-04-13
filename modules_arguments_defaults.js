var run = (function () {
    var speed = "50 mil per hour"

    var DEFAULTS = {
        topSpeed: "80 mil per hour"
    }

    return {
        speed: function () {
            var allArguments = arguments[0] || ""
            var myStatments = allArguments || DEFAULTS.topSpeed
            console.log(myStatments)
        }
    }
})()


