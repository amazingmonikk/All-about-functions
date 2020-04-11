var run = function (miles) {
    console.log(miles)
    console.log(this.firstSpeed)
}

var speedUpgrade = { firstSpeed: "50 miles per hour", secondSpeed: "100 miles per hour" }


run.apply(speedUpgrade, ["3000 miles per hour"])

// run("100 miles per hour")