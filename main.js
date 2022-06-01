//Elements
const themeSwitcherElem = document.getElementsByClassName('calc__theme-switcher')[0]
const mainElem = document.getElementsByTagName('main')[0]
const headerElem = document.getElementsByClassName('calc__header')[0]
const screenElem = document.getElementsByClassName('calc__screen')[0]
const keypadElem = document.getElementsByClassName('calc__keypad')[0]
const allKeysElems = document.getElementsByTagName('button')
const delKeyElem = document.getElementsByClassName('btn-del')[0]
const resetKeyElem = document.getElementsByClassName('btn-reset')[0]
const equalsKeyElem = document.getElementsByClassName('btn-equals')[0]
const previousNumberElem = document.getElementsByClassName('calc__screen-previous')[0]
const opeartorElem = document.getElementsByClassName('calc__screen-operator')[0]
const actualNumberElem = document.getElementsByClassName('calc__screen-actual')[0]

//Variables
let theme = 1
let operationName = ''

//Functions
//Theme
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
function themePreferency() {
    if (userPrefersDark) {
        theme3()
    } else {
        theme2()
    }
}
themePreferency()
function changeTheme() {
    if (theme == 1) {
        theme2()
    } else if (theme == 2) {
        theme3()
    } else if (theme == 3) {
        theme1()
    }
}
function theme1() {
    themeSwitcherElem.style.justifyContent = 'flex-start'
    themeSwitcherElem.style.backgroundColor = 'var(--t1-keypad-bg)'
    mainElem.style.backgroundColor = 'var(--t1-calc-bg)'
    headerElem.style.color = 'var(--white)'
    screenElem.style.backgroundColor = 'var(--t1-screen-bg)'
    screenElem.style.color = 'var(--white)'
    themeSwitcherElem.children[0].style.backgroundColor = 'var(--t1-equals)'
    keypadElem.style.backgroundColor = 'var(--t1-keypad-bg)'
    for (let i = 0; i < allKeysElems.length; i++) {
        allKeysElems[i].style.backgroundColor = 'var(--t1-keys-bg)'
        allKeysElems[i].style.color = 'var(--t1-keys-color)'
        allKeysElems[i].style.boxShadow = '0 0.5rem 0 0 var(--t1-keys-shadow)'
    }
    delKeyElem.style.backgroundColor = 'var(--t1-del-reset-bg)'
    delKeyElem.style.boxShadow = '0 0.5rem 0 0 var(--t1-del-reset-shadow)'
    delKeyElem.style.color = 'var(--white)'
    resetKeyElem.style.backgroundColor = 'var(--t1-del-reset-bg)'
    resetKeyElem.style.boxShadow = '0 0.5rem 0 0 var(--t1-del-reset-shadow)'
    resetKeyElem.style.color = 'var(--white)'
    equalsKeyElem.style.backgroundColor = 'var(--t1-equals)'
    equalsKeyElem.style.boxShadow = '0 0.5rem 0 0 var(--t1-equals-shadow)'
    equalsKeyElem.style.color = 'var(--white)'
    theme = 1
}
function theme2() {
    themeSwitcherElem.style.justifyContent = 'center'
    themeSwitcherElem.style.backgroundColor = 'var(--t2-keypad-bg)'
    mainElem.style.backgroundColor = 'var(--t2-calc-bg)'
    headerElem.style.color = 'var(--t2-keys-color)'
    screenElem.style.backgroundColor = 'var(--t2-screen-bg)'
    screenElem.style.color = 'var(--t2-keys-color)'
    keypadElem.style.backgroundColor = 'var(--t2-keypad-bg)'
    for (let i = 0; i < allKeysElems.length; i++) {
        allKeysElems[i].style.backgroundColor = 'var(--t2-keys-bg)'
        allKeysElems[i].style.color = 'var(--t2-keys-color)'
        allKeysElems[i].style.boxShadow = '0 0.5rem 0 0 var(--t2-keys-shadow)'
    }
    delKeyElem.style.backgroundColor = 'var(--t2-del-reset-bg)'
    delKeyElem.style.boxShadow = '0 0.5rem 0 0 var(--t2-del-reset-shadow)'
    delKeyElem.style.color = 'var(--white)'
    resetKeyElem.style.backgroundColor = 'var(--t2-del-reset-bg)'
    resetKeyElem.style.boxShadow = '0 0.5rem 0 0 var(--t2-del-reset-shadow)'
    resetKeyElem.style.color = 'var(--white)'
    equalsKeyElem.style.backgroundColor = 'var(--t2-equals)'
    equalsKeyElem.style.boxShadow = '0 0.5rem 0 0 var(--t2-equals-shadow)'
    equalsKeyElem.style.color = 'var(--white)'
    theme = 2
}
function theme3() {
    themeSwitcherElem.style.justifyContent = 'flex-end'
    themeSwitcherElem.children[0].style.backgroundColor = 'var(--t3-equals)'
    themeSwitcherElem.style.backgroundColor = 'var(--t3-secondary-bg)'
    mainElem.style.backgroundColor = 'var(--t3-calc-bg)'
    headerElem.style.color = 'var(--t3-keys-color)'
    screenElem.style.backgroundColor = 'var(--t3-secondary-bg)'
    screenElem.style.color = 'var(--t3-keys-color)'
    keypadElem.style.backgroundColor = 'var(--t3-secondary-bg)'
    for (let i = 0; i < allKeysElems.length; i++) {
        allKeysElems[i].style.backgroundColor = 'var(--t3-keys-bg)'
        allKeysElems[i].style.color = 'var(--t3-keys-color)'
        allKeysElems[i].style.boxShadow = '0 0.5rem 0 0 var(--t3-keys-shadow)'
    }
    delKeyElem.style.backgroundColor = 'var(--t3-del-reset-bg)'
    delKeyElem.style.boxShadow = '0 0.5rem 0 0 var(--t3-del-reset-shadow)'
    delKeyElem.style.color = 'var(--white)'
    resetKeyElem.style.backgroundColor = 'var(--t3-del-reset-bg)'
    resetKeyElem.style.boxShadow = '0 0.5rem 0 0 var(--t3-del-reset-shadow)'
    resetKeyElem.style.color = 'var(--white)'
    equalsKeyElem.style.backgroundColor = 'var(--t3-equals)'
    equalsKeyElem.style.boxShadow = '0 0.5rem 0 0 var(--t3-equals-shadow)'
    equalsKeyElem.style.color = 'var(--t3-equals-color)'
    theme = 3
}

//Calculator logic
function put(key) {
    actualNumberElem.innerText += key
}
function del() {
    actualNumberElem.innerText = ''
}
function reset() {
    actualNumberElem.innerText = ''
    previousNumberElem.innerText = ''
    opeartorElem.innerText = ''
}
function equals() {
    if (previousNumberElem.textContent != '' && actualNumberElem.textContent != '') {
        switch (operationName) {
            case 'add':
                actualNumberElem.innerText = parseFloat(previousNumberElem.textContent) + parseFloat(actualNumberElem.textContent)
                break;
            case 'subtract':
                actualNumberElem.innerText = parseFloat(previousNumberElem.textContent) - parseFloat(actualNumberElem.textContent)
                break
            case 'divide':
                if (actualNumberElem.textContent == '0') {
                    console.log('hay 0')
                    actualNumberElem.innerText = previousNumberElem.textContent
                } else {
                    actualNumberElem.innerText = parseFloat(previousNumberElem.textContent) / parseFloat(actualNumberElem.textContent)
                }
                break
            case 'multiply':
                actualNumberElem.innerText = parseFloat(previousNumberElem.textContent) * parseFloat(actualNumberElem.textContent)
                break
            default:
                break;
        }
        previousNumberElem.innerText = ''
        opeartorElem.innerText = ''
    }
}
function operation(name) {
    if (opeartorElem.textContent == '' && actualNumberElem.textContent != '') {
        previousNumberElem.innerText = actualNumberElem.textContent
    } else if (previousNumberElem.textContent == '' && actualNumberElem.textContent == '') {
        return
    } else {
        switch (operationName) {
            case 'add':
                previousNumberElem.innerText = parseFloat(previousNumberElem.textContent) + parseFloat(actualNumberElem.textContent)
                break;
            case 'subtract':
                previousNumberElem.innerText = parseFloat(previousNumberElem.textContent) - parseFloat(actualNumberElem.textContent)
                break
            case 'divide':
                previousNumberElem.innerText = parseFloat(previousNumberElem.textContent) / parseFloat(actualNumberElem.textContent)
                break
            case 'multiply':
                previousNumberElem.innerText = parseFloat(previousNumberElem.textContent) * parseFloat(actualNumberElem.textContent)
                break
            default:
                break;
        }
    }
    operationName = name
    if (operationName == 'add') {
        opeartorElem.innerText = '+'
    } else if (operationName == 'subtract') {
        opeartorElem.innerText = '-'
    } else if (operationName == 'divide') {
        opeartorElem.innerText = '/'
    } else if (operationName == 'multiply') {
        opeartorElem.innerText = '*'
    }
    actualNumberElem.innerText = ''
}
//TODO hacer que el operador solo se ponga si hay un numero previo