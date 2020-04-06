'use strict';
let testArray = [];

const subBtn = document.getElementById('subBtn')
const rstBtn = document.getElementById('rstBtn')
const cpyBtn = document.getElementById('cpyBtn')
const completeBtn = document.getElementById('completeBtn')



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