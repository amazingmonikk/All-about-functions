var run = (function () {
    var speed = "50 mil per hour"

    var DEFAULTS = {
        topSpeed: "80 mil per hour",
        topHorsePower: "407 horse power",
        topCatPower: "2223 cat power"
    }

    return {
        speed: function () {
            var allArguments = arguments[0] || ""
            var myStatments = allArguments.topSpeed || DEFAULTS.topSpeed
            console.log(myStatments)
            return this
        },
        horsePower: function () {
            var myAllArguments = arguments[0] || ""
            var topHorsePowerChecking = myAllArguments.topHorsePower || DEFAULTS.topHorsePower
            console.log(topHorsePowerChecking)
            return this
        },
        catPower: function () {
            var myAllArguments = arguments[0] || ""
            var topCatPowerChecking = myAllArguments || DEFAULTS.topCatPower
            console.log(topCatPowerChecking)
            return this
        }
    }
})()


