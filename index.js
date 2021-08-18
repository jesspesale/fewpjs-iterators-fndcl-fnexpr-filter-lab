// Code your solution here

function findMatching(arr, string) {
    return arr.filter(drivers =>
        drivers.toLowerCase() === string.toLowerCase()
    )
}

function fuzzyMatch(arr, string) {
   return arr.filter(driver =>
    driver[0] === string[0]
    )
}

function matchName(arr, string) {
    return arr.filter(driver =>
        driver.name === string
        )
}
