//String Reverse

//Method 1
//Manual

let mainString = "master"
function reverse() {
    let reversedStr = ''
    for (let i = 0; i < mainString.length; i++) {
        reversedStr = mainString[i] + reversedStr
    }
    console.log(reversedStr)
}

reverse()

//method 2

function reverse2(str) {
    let reverseHelp = ''
    for (let eachChar of str) {
        reverseHelp = eachChar + reverseHelp
    }
    console.log(reverseHelp)
}
reverse2("Madam")

//method 3

console.log(`One line string reverse: ${mainString.split('').reverse().join('')}`)
