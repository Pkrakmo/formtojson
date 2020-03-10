'use strict';
let testArray = [];

const subBtn = document.getElementById('subBtn')
const rstBtn = document.getElementById('rstBtn')
const cpyBtn = document.getElementById('cpyBtn')
const completeBtn = document.getElementById('completeBtn')
const testBtn2 = document.getElementById('testBtn2')


subBtn.addEventListener('click', function () {
    formToJson()
})

rstBtn.addEventListener('click', function () {
    resetForm()
})

cpyBtn.addEventListener('click', function () {
    copyToClipboard()
})

completeBtn.addEventListener('click', function () {
    completeJson()
})

testBtn2.addEventListener('click', function () {
console.log("rip")
})