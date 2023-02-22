const el1 = document.getElementById("first_date")
const el2 = document.getElementById("second_date")
const el3 = document.getElementById("third_date")
const el4 = document.getElementById("forth_date")

const date = new Date()

date.setDate(3)

let month = date.getMonth() + 1 + ""

let month1 = month.length < 2 ? "0" + month : month
let day = String(date.getDate()).length < 2 ? "0" + date.getDate() : date.getDate()

el1.innerHTML = `${month1}/${day}/${date.getFullYear()}`
el2.innerHTML = `${month1}/${day}/${date.getFullYear()}`
el3.innerHTML = `${month1}/${day}/${date.getFullYear()}`
el4.innerHTML = `${month1}/${day}/${date.getFullYear()}`
