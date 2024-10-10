//============================================================= STRING: LENGTH
function func1(){
    let x = document.getElementById(`sample1`).textContent;
    document.getElementById(`result1`).textContent = x.length;
}
function func1B(){
    let x = document.getElementById(`sample1B`).value;
    document.getElementById(`result1B`).textContent = x.length;
}
//==============================================================

//============================================================== STRING: TO UPPERCASE
function func2(){
    let x = document.getElementById(`sample2`).textContent;
    document.getElementById(`result2`).textContent = x.toUpperCase();
}
function func2B(){
    let x = document.getElementById(`sample2B`).value;
    document.getElementById(`result2B`).textContent = x.toUpperCase();
}
//==============================================================

//============================================================== STRING: TO LOWERCASE
function func3(){
    let x = document.getElementById(`sample3`).textContent;
    document.getElementById(`result3`).textContent = x.toLowerCase();
}

function func3B(){
    let x = document.getElementById(`sample3B`).value;
    document.getElementById(`result3B`).textContent = x.toLowerCase();
}
//==============================================================

//============================================================== STRING: INCLUDES
function func4(){
    let x = document.getElementById(`sample4`).textContent;
    document.getElementById(`result4`).textContent = x.includes(`World`);
}
func4B = () => {
    let x = document.getElementById(`sample4B`).value;
    const y = [`q`,`w`,`e`,`r`,`t`,`y`];
    const check = y.some(letters => x.includes(letters));
    document.getElementById(`result4B`).textContent = check;
}
//==============================================================

//============================================================== STRING: INDEX OF
const func5 = () => {
    const x = `Hello World`;
    let y = x.indexOf(`World`);
    document.getElementById(`result5`).textContent = y;
}
const func5B = () => {
    const x = `Hello World`;
    let y = document.getElementById(`sample5B`).value;
    const check = x.indexOf(y);
    document.getElementById(`result5B`).textContent = check;
}
//==============================================================

//============================================================== STRING: LAST INDEX OF
function func6(){
    const x = `Hello World`;
    let y = x.lastIndexOf(`o`);
    document.getElementById(`result6`).textContent = y;
}
function func6B(){
    const x = `Hello World`;
    let y = document.getElementById(`sample6B`).value;
    const check = x.lastIndexOf(y);
    document.getElementById(`result6B`).textContent = check;
}
//==============================================================

//============================================================== STRING: SLICE
const func7 = () => {
    const x = `Hello World`;
    const y = x.slice(0, 5);
    document.getElementById(`result7`).textContent = y;
}
const func7B = () => {
    const x = `Hello World`
    const num1 = document.getElementById(`sample7B1`).value;
    const num2 = document.getElementById(`sample7B2`).value;
    const y = x.slice(num1, num2);
    document.getElementById(`result7B`).textContent = y;
}
//==============================================================

//============================================================== STRING: SUBSTR
function func8(){
    const x = `Hello World`;
    const y = x.substr(0, 5);
    document.getElementById(`result8`).textContent = y;
}
function func8B(){
    const x = document.getElementById(`sample8`).textContent;
    const num1 = document.getElementById(`sample8B1`).value;
    const num2 = document.getElementById(`sample8B2`).value;
    const y = x.substr(num1, num2);
    document. getElementById(`result8B`).textContent = y;
}
//==============================================================

//============================================================== STRING: REPLACE
const func9 = () =>{
    x = document.getElementById(`sample9`).textContent;
    y = x.replace(`World`, `Everyone!`);
    document.getElementById(`result9`).textContent = y;
}
const func9B = () => {
    const x = document.querySelector(`#sample9`).textContent;
    const var1 = document.querySelector(`#sample9B1`).value;
    const var2 = document.querySelector(`#sample9B2`).value;
    const y = x.replace(var1, var2);
    document.querySelector(`#result9B`).textContent = y;
}
//==============================================================

//============================================================== STRING: REPLACE ALL
function func10(){
    const x = document.querySelector(`#sample10`).textContent;
    const y = x.replaceAll(`o`, `u`);
    document.querySelector(`#result10`).textContent = y;
}
function func10B(){
    const x = document.querySelector(`#sample10`).textContent;
    const var1 = document.querySelector(`#sample10B1`).value;
    const var2 = document.querySelector(`#sample10B2`).value;
    const y = x.replaceAll(var1, var2);
    document.querySelector(`#result10B`).textContent = y;
}
//==============================================================

//============================================================== STRING: SPLIT
const func11 = () => {
    x = document.querySelector(`#sample11`).textContent;
    y = x.split(`-`);
    document.querySelector(`#result11`).textContent = y;
}

function func12(){
    x = document.querySelector(`#sample12`).textContent;
    y = x.trim();
    document.querySelector(`#result12`).textContent = y;
}
//==============================================================

//============================================================== STRING: TRIM
const func13 = () => {
    x = document.querySelector(`#sample13`).textContent;
    y = x.charAt(6);
    document.querySelector(`#result13`).textContent = y;
}
//==============================================================

//============================================================== STRING: CHAR AT
function func14(){
    x = document.querySelector(`#sample14`).textContent;
    y = x.startsWith(`K`);
    document.querySelector(`#result14`).textContent = y;
}
//==============================================================

//==================================================== STRING: ENDS WITH
const func15 = () => {
    x = document.querySelector(`#sample15`).textContent;
    y = x.endsWith(`d`);
    document.querySelector(`#result15`).textContent = y;
}
//====================================================

//==================================================== STRING: REPEAT
function func16(){
    x = `Hello`;
    y = x.repeat(3);
    document.querySelector(`#result16`).textContent = y;
}
function func16B(){
    x = document.querySelector(`#sample16B`).value;
    y = `Hello`
    z = y.repeat(x);
    document.querySelector(`#result16B`).textContent = z;
}
//====================================================

//==================================================== STRING: PAD START
const func17 = () => {
    x = document.querySelector(`#sample17`).textContent;
    y = x.padStart(20, `hi!`);
    document.querySelector(`#result17`).textContent = y;
}
const func17B = () => {
    n = document.querySelector(`#sample17`).textContent;
    x = document.querySelector(`#sample17B`).value;
    y = n.padStart(x, "hi!");
    document.querySelector(`#result17B`).textContent = y;
}
//====================================================

//==================================================== STRING: PAD END
const func18 = () => {
    x = document.querySelector(`#sample18`).textContent;
    y = x.padEnd(20, `hi!`);
    document.querySelector(`#result18`).textContent = y;
}
const func18B = () => {
    n = document.querySelector(`#sample18`).textContent;
    x = document.querySelector(`#sample18B`).value;
    y = n.padEnd(x, "hi!");
    document.querySelector(`#result18B`).textContent = y;
}
//====================================================

//==================================================== NUMBER: TO FIXED
function func19(){
    x = Number(document.querySelector(`#sample19`).textContent);
    y = x.toFixed(2);
    document.querySelector(`#result19`).textContent = y;
}
//====================================================

//==================================================== NUMBER: TO PRECISION
const func20 = () => {
    x = Number(document.querySelector(`#sample20`).textContent);
    y = x.toPrecision(4);
    document.querySelector(`#result20`).textContent = y;
}
//====================================================

//==================================================== NUMBER: RANDOM
function func21(){
    x = Math.random();
    document.querySelector(`#result21`).textContent = x;
}
//====================================================

//==================================================== NUMBER: CEIL
const func22 = () => {
    x = Number(document.querySelector(`#sample22`).textContent);
    y = Math.ceil(x);
    document.querySelector(`#result22`).textContent = y;
}
//====================================================

//==================================================== NUMBER: FLOOR
function func23(){
    x = Number(document.querySelector(`#sample23`).textContent);
    y = Math.floor(x);
    document.querySelector(`#result23`).textContent = y;
}
//====================================================

//==================================================== NUMBER: ABSOLUTE
const func24 = () => {
    x = Number(document.querySelector(`#sample24`).textContent);
    y = Math.abs(x);
    document.querySelector(`#result24`).textContent = y;
}
//=====================================================

//==================================================== NUMBER: MAX
function func25(){
    x = Math.max(1, 2, 3, 4, 5);
    document.querySelector(`#result25`).textContent = x;
}
//====================================================

//==================================================== NUMBER: MIN
const func26 = () => {
    x = Math.min(1, 2, 3, 4, 5);
    document.querySelector(`#result26`).textContent = x;
}
//===================================================

//=================================================== ARRAY: PUSH
function func27(){
    let x = document.querySelector(`#sample27`).textContent;
    y = x.split(`, `);
    z = y.push(5);
    document.querySelector(`#result27`).textContent = y;
}
//===================================================

//=================================================== ARRAY: UNSHIFT
const func28 = () => {
    let x = document.querySelector(`#sample28`).textContent;
    y = x.split(`, `);
    z = y.unshift(5);
    document.querySelector(`#result28`).textContent = y;
}
//===================================================

//=================================================== ARRAY: POP
function func29(){
    let x = document.querySelector(`#sample29`).textContent;
    y = x.split(`, `);
    z = y.pop();
    document.querySelector(`#result29`).textContent = y;
}
//===================================================

//=================================================== ARRAY: SHIFT
const func30 = () => {
    let x = document.querySelector(`#sample30`).textContent;
    y = x.split(`, `);
    z = y.shift();
    document.querySelector(`#result30`).textContent = y;
}
//===================================================

//================================================== ARRAY: SPLICE
function func31(){
    let x = document.querySelector(`#sample31`).textContent;
    y = x.split(`, `);
    z = y.splice(2, 4);
    document.querySelector(`#result31`).textContent = y;
}
function func31B(){
    let x = document.querySelector(`#sample31B`).textContent;
    y = x.split(`, `);
    z = y.splice(2, 0, `a`, `b`, `c`);
    document.querySelector(`#result31B`).textContent = y;
}
//===================================================

//=================================================== ARRAY: CONCAT
const func32 = () => {
    let x = document.querySelector(`#sample32`).textContent;
    let y = x.split(`, `);
    let x2 = document.querySelector(`#sample32B`).textContent;
    let y2 = x2.split(`, `);
    let x3 = document.querySelector(`#sample32C`).textContent;
    let y3 = x3.split(`, `);
    let z = y.concat(y2, y3);
    document.querySelector(`#result32`).textContent = z;
}
//====================================================

//==================================================== ARRAY: INDEXOF
function func33(){
    const x = document.querySelector(`#sample33`).textContent;
    const y = x.split(`, `);
    const z = y.indexOf(`4`);
    document.querySelector(`#result33`).textContent = z;
}
//====================================================

//==================================================== ARRAY: FOR EACH
const func34 = () => {
    let x = document.querySelector(`#sample34`).textContent;
    let y = x.split(`, `);
    const z = y.forEach(num => {
        const li = document.createElement(`li`);
        li.textContent = num;
        document.querySelector('#result34').appendChild(li);
    });
}
//====================================================

//==================================================== ARRAY: MAP
function func35(){
    let x = document.querySelector(`#sample35`).textContent;
    let y = x.split(`, `);
    const z = y.map(num => {
        return Number(num) * 2;
    });
    document.querySelector(`#result35`).textContent = z;
}
//==================================================== ARRAY: FILTER
const func36 = () => {
    let x = document.querySelector(`#sample36`).textContent;
    let y = x.split(`, `);
    const z = y.filter(num => {
      return Number(num) % 2 == 0;
    });
    document.querySelector(`#result36`).textContent = z;
}
//======================================================

//===================================================== ARRAY: FIND
const func37 = () => {
    let x = document.querySelector(`#sample37`).textContent;
    let y = x.split(`, `);
    const z = y.find(num => {
      return Number(num) % 2 == 0;
    });
    document.querySelector(`#result37`).textContent = z;
}
//======================================================

//====================================================== ARRAY: FIND INDEX
const func38 = () => {
    let x = document.querySelector(`#sample38`).textContent;
    let y = x.split(`, `);
    const z = y.findIndex(num => {
      return Number(num) % 2 == 0;
    });
    document.querySelector(`#result38`).textContent = z;
}
//====================================================== ARRAY: REVERSE
function func39(){
    const x = document.querySelector(`#sample39`).textContent;
    const y = x.split(`, `);
    const z = y.reverse();
    document.querySelector(`#result39`).textContent = y;
}
//======================================================

//====================================================== ARRAY: SORT
function func40(){
    const x = document.querySelector(`#sample40`).textContent;
    const y = x.split(`, `);
    const z = y.sort();
    document.querySelector(`#result40`).textContent = y;
}
//======================================================

//===================================================== ARRAY: JOIN
function func41(){
    const x = document.querySelector(`#sample41`).textContent;
    const y = x.split(`, `);
    const z = y.join(`-`);
    document.querySelector(`#result41`).textContent = z;
}
//=======================================================

//===================================================== ARRAY: EVERY
function func42(){
    const x = document.querySelector(`#sample42`).textContent;
    const y = x.split(`, `).map(num => Number(num));
    const z = y.every(num => num < 10);
    document.querySelector(`#result42`).textContent = z;
}
//===================================================== LOOP: FOR LOOP
const func43 = (num) => {
    x = 1;
    for (let i=2; i<=num; i++){
        x *= i;
    }
    document.querySelector(`#result43`).textContent = x;
}
//======================================================

//====================================================== LOOP: FOR OF LOOP
function func44(){
    x = document.querySelector(`#sample44`).textContent;
    y = Number(x.lastIndexOf(`s`));
    y = x.substr(y + 1, x.length);
    y = y.split(`,`);
    const z = y.forEach(num => {
        const list = document.createElement(`li`);
        list.textContent = num;
        document.querySelector('#result44').appendChild(list);})
}
//=======================================================

//======================================================= LOOP: FOR IN LOOP
const func45 = () => {
    const Object1 = {key1: `value1`,
                     key2: `value2`,
                     key3: `value3`
    }
    let z = '';

    for (let x in Object1){
     z += `${x}, `;
    }
    document.querySelector(`#result45`).textContent = z;
}

function func45B(){
    const Object1 = {key1: `value1`,
                     key2: `value2`,
                     key3: `value3`
                    }
    let z =``;

    for (let x in Object1){
        z += `${Object1[x]}, `;
    }

    document.querySelector(`#result45B`).textContent = z;
}
//=========================================================

//======================================================== LOOP: WHILE LOOP
const func46 = () => {
    let i = 0;
    let result = ``;
    while(i < 5){
        i++;
        result += i + ` `;
    }
    document.querySelector(`#result46`).textContent = result;
}
//=======================================================

//====================================================== LOOP: DO WHILE LOOP
const func47 = () => {
    let i = 0;
    let result = ``;
    do{
        i++
        result += i + ` `;
    }while(i < 5)
    document.querySelector(`#result47`).textContent = result;
}
//======================================================

//====================================================== EVENT: CLICK
const sample48 = document.querySelector(`#sample48`);
sample48.addEventListener(`click`, () =>{
    sample48.style.backgroundColor = `red`;
});
//=======================================================

//===================================================== EVENT: DOUBLE CLICK
const sample49 = document.querySelector(`#sample49`);
sample49.addEventListener(`dblclick`, () => {
    sample49.style.backgroundColor = `red`;
});
//=====================================================

//==================================================== EVENT: MOUSEOVER
const sample50 = document.querySelector(`#sample50`);
sample50.addEventListener(`mouseover`, () => {
    sample50.style.backgroundColor = `red`;
});
//====================================================

//==================================================== EVENT: MOUSEOUT
const sample51 = document.querySelector(`#sample51`);
sample51.addEventListener(`mouseover`, () => {
    sample51.style.backgroundColor = `red`;
});
sample51.addEventListener(`mouseout`, () => {
    sample51.style.backgroundColor = ``;
});
//====================================================

//==================================================== EVENT: MOUSEMOVE
const sample52 = document.querySelector(`#sample52`);
sample52.addEventListener(`mousemove`, (event)=>{
    x = `Mouse position: x=${event.clientX}, y=${event.clientY}`;
    document.querySelector(`#result52`).textContent = x;
});
//====================================================

//============================================= EVENT: MOUSEDOWN, MOUSEUP
const sample53 = document.querySelector(`#sample53`);
sample53.addEventListener(`mousedown`, ()=>{
   sample53.style.backgroundColor = `red`;
});
sample53.addEventListener(`mouseup`, ()=>{
    sample53.style.backgroundColor = ``;
 });


//--------------------------------------------- EVENT: KEYDOWN, KEYUP
 const sample54 = document.querySelector(`#sample54`);
 const func54 = document.querySelector(`#func54`);
 const func54B = document.querySelector(`#func54B`);

 const keydown = () => {
     sample54.style.backgroundColor = `red`;
 };

 const keyup = () =>{
    sample54.style.backgroundColor = ``;
 }

 const function54 = () => {
     sample54.setAttribute("tabindex", "0");
     sample54.addEventListener(`keydown`, keydown);
     sample54.addEventListener(`keyup`, keyup);
     sample54.focus();
 };

 func54.addEventListener(`click`, function54);

 const deactivateListeners = () => {
     sample54.removeEventListener(`keydown`, keydown);
 };
 func54B.addEventListener(`click`, deactivateListeners);
 //---------------------------------------------------

 //-------------------------------------------------- EVENT: EVENT.KEY
 const func55 = document.querySelector(`#func55`);
 const func55B = document.querySelector(`#func55B`);

 const pressEnter = () =>{
    alert(`You pressed Enter`);
 }

 const keydownHandler = (event)=>{
    if(event.key === `Enter`){
        pressEnter();
    }
 }

 const addfunc55 = () => {
    document.addEventListener('keydown', keydownHandler);
  }

const removefunc55 = () =>{
    document.removeEventListener(`keydown`, keydownHandler);
}

func55B.addEventListener(`click`, removefunc55);
func55.addEventListener(`click`, addfunc55);
//-----------------------------------------------------

//----------------------------------------- EVENT: EVENT.KEY COMBINATION
const func56 = document.querySelector(`#func56`);
const func56B = document.querySelector(`#func56B`);

const sample56Display = () =>{
    alert(`You pressed ctrl and Enter`);
}

const function56 = (event) =>{
    if(event.ctrlKey && event.key === `Enter`){
        sample56Display();
    }
}

const addfunc56 = () =>{
    document.addEventListener(`keydown`, function56);
}

const removefunc56 = () =>{
    document.removeEventListener(`keydown`, function56);
}

func56.addEventListener(`click`, addfunc56);
func56B.addEventListener(`click`, removefunc56);
//--------------------------------------------------


//-------------------------------------------- EVENT: EVENT KEY WITH ARROWS
const sample57 = document.querySelector(`#sample57`);
const func57 = document.querySelector(`#func57`);
const func57B = document.querySelector(`#func57B`);
let positionSide = 0;
let positionVertical = 0;

const moveDown = () =>{
    positionVertical +=20;
    sample57.style.marginTop = `${positionVertical}px`;
}

const keyDown = (event) =>{
    if(event.key === `ArrowDown`){
        moveDown();
    }
}

const moveUp = () =>{
    positionVertical -= 20;
    sample57.style.marginTop = `${positionVertical}px`;
}

const keyUp = (event) =>{
    if(event.key === `ArrowUp`){
        moveUp();
    }
}

const moveRight = () =>{
    positionSide += 20;
    sample57.style.marginLeft= `${positionSide}px`;
};

const keyRight = (event) =>{
    if(event.key === `ArrowRight`){
        moveRight();
    }
};

const moveLeft = () =>{
    positionSide -= 20;
    sample57.style.marginLeft = `${positionSide}px`;
}

const keyLeft = (event) =>{
    if(event.key === `ArrowLeft`){
        moveLeft();
    }
}

const addfunc57 = () =>{
    document.addEventListener(`keydown`, keyRight);
    document.addEventListener(`keydown`, keyLeft);
    document.addEventListener(`keydown`, keyDown);
    document.addEventListener(`keydown`, keyUp);
};

const removefunc57 = () =>{
    document.removeEventListener(`keydown`, keyRight);
    document.removeEventListener(`keydown`, keyLeft);
    document.removeEventListener(`keydown`, keyDown);
    document.removeEventListener(`keydown`, keyUp);
}

func57.addEventListener(`click`, addfunc57);
func57B.addEventListener(`click`, removefunc57);
//-----------------------------------------------------

//---------------------------------- DOM: QUERYSELECTOR, QUERYSELECTORALL
const selectBox = document.querySelector(`#sample58`);
let activated = false;

selectBox.addEventListener(`click`, ()=>{
    if(activated == false){
        activated = true;
        selectBox.style.backgroundColor = `red`;
    }
    else{
        activated = false;
        selectBox.style.backgroundColor = ``;
    }
});

const selectAllbox = document.querySelectorAll(`.selectBox`);

selectAllbox.forEach(eventBox => {
    eventBox.addEventListener(`mouseover`, ()=>{
        selectAllbox.forEach(box => {
            box.style.backgroundColor = `red`;
        });
    });
    eventBox.addEventListener(`mouseout`, ()=>{
        selectAllbox.forEach(box => {
            box.style.backgroundColor = ``;
        });
    });
    
});
//-----------------------------------------------------

//---------------------------------------- DOM: INNERHTML
const sample59 = document.querySelector(`#sample59`);
const func59 = document.querySelector(`#func59`);
const func59B = document.querySelector(`#func59B`);

const function59 = () =>{
sample59.innerHTML = `<div id="innerBox59"><h2>Hello</h2>
<p>World</p></div>`;
}

const removeContent59 = () =>{
    sample59.innerHTML = ``;    
}

func59.addEventListener(`click`, ()=>{
    function59();
});
func59B.addEventListener(`click`, ()=>{
    removeContent59();
});    
//-------------------------------------- DOM: TEXT CONTENT

const sample60 = document.querySelector(`#sample60`);
const func60 = document.querySelector(`#func60`);
const func60B = document.querySelector(`#func60B`);

const function60 = () =>{
    sample60.textContent = `HELLO WORLD`;
}

const removeContent60 = () =>{
    sample60.textContent = `CLICK BUTTON TO CHANGE`;
}

func60.addEventListener(`click`, ()=>{
    function60();
});
func60B.addEventListener(`click`, ()=>{
    removeContent60();
})
//--------------------------------------------------------------

//-------------------------------------- DOM: SET, REMOVE ATTRIBUTE
const sample61 = document.querySelector(`#sample61`);
const func61 = document.querySelector(`#func61`);
const func61B = document.querySelector(`#func61B`);

const function61 = () =>{
    sample61.setAttribute(`src`, `https://cdn.prod.website-files.com/61605770a2776f05aa1e318c/66038cbd59912e971580fb95_Cat%20Care%20Routine_%20Tips%20for%20a%20Healthy%2C%20Happy%2C%20%26%20Fabulous%20Cat-p-500.webp`);
}

const removeContent61 = () =>{
    sample61.removeAttribute(`src`);
}

func61.addEventListener(`click`, ()=>{
    function61();
});
func61B.addEventListener(`click`, ()=>{
    removeContent61();
});
//--------------------------------------------------------------

//-------------------------------------- DOM: CSS TEXT
const sample62 = document.querySelector(`#sample62`);
const func62 = document.querySelector(`#func62`);
const func62B = document.querySelector(`#func62B`);

const function62 = () =>{
    sample62.style.cssText = `background-color: red; padding: 10px 100px;`;
}

const removeFunc62 = () =>{
    sample62.style.cssText = `background-color: ;`;
}

func62.addEventListener(`click`, ()=>{
    function62();
});
func62B.addEventListener(`click`, ()=>{
    removeFunc62();
});
//==================================================================

//------------------------------- DOM: ADD/REMOVE CLASSLIST
const sample63 = document.querySelector(`#sample63`);
const func63 = document.querySelector(`#func63`);
const func63B = document.querySelector(`#func63B`);

const function63 = () =>{
    sample63.classList.add(`getBig`);
}
const removefunc63 = () =>{
    sample63.classList.remove(`getBig`);
}

func63.addEventListener(`click`, function63);
func63B.addEventListener(`click`, removefunc63);
//---------------------------------------------------------------

//----------------------------- DOM: CREATE/REMOVE ELEMENT, INSERT ELEMENT
const sample64 = document.querySelector(`#sample64`);
const func64 = document.querySelector(`#func64`);
const func64B = document.querySelector(`#func64B`);

const newP64 = document.createElement(`p`);
const newP64B = document.createElement(`p`);
const newP64C = document.createElement(`p`);
const newP64D = document.createElement(`p`);

const beforeB = () =>{
    newP64.textContent = `THIS IS BEFORE BEGIN`;
    sample64.insertAdjacentElement(`beforebegin`, newP64);
    newP64.style.cssText = `padding: 3px; background-color: red; width: 200px; color: white;`;
}

const afterB = () =>{
    newP64B.textContent = `THIS IS AFTERBEGIN`;
    sample64.insertAdjacentElement(`afterbegin`, newP64B);
}

const beforeE = () =>{
    newP64C.textContent = `THIS IS BEFOREEND`;
    sample64.insertAdjacentElement(`beforeend`, newP64C);
}

const afterE = () =>{
    newP64D.textContent = `THIS IS AFTEREND`;
    sample64.insertAdjacentElement(`afterend`, newP64D);
    newP64D.style.cssText = `padding: 3px; background-color: red; width: 200px; color: white`;
}

const function64 = () =>{
    beforeB();
    afterB();
    beforeE();
    afterE();
}

const removefunc64 = () =>{
    newP64.remove();
    newP64B.remove();
    newP64C.remove();
    newP64D.remove();
}

func64.addEventListener(`click`, function64);
func64B.addEventListener(`click`, removefunc64);
//------------------------------------------------------

//----------------------------------- DOM: REPLACE ELEMENT
let sample65 = document.querySelector(`#sample65`);
const func65 = document.querySelector(`#func65`);
const func65B = document.querySelector(`#func65B`);

let replace;

const function65 = () =>{
    replace65 = document.createElement(`p`);
    replace65.textContent = `THIS IS THE REPLACEMENT`;
    sample65.replaceWith(replace65);
}

const removefunc65 = () =>{
    sample65 = document.createElement(`p`);
    sample65.textContent = `THIS WILL BE REPLACED`;
    replace65.replaceWith(sample65);
}

func65.addEventListener(`click`, function65);
func65B.addEventListener(`click`, removefunc65);
//------------------------------------------------------

//-------------------------------- IF: IF, ELSE IF, ELSE STATEMENT
const func66 = document.querySelector(`#func66`);
let result66 = document.querySelector(`#result66`);

const function66 = () =>{
    const sample66 = Number(document.querySelector(`#sample66`).value);

    if(sample66 > 17 && sample66 < 60){
        result66.textContent = `You are an adult`;
    }
    else if(sample66 > 59){
        result66.textContent = `You are a senior citizen`;
    }
    else{
        result66.textContent = `You are a minor`;
    }
}

func66.addEventListener(`click`, function66);
//--------------------------------------------------------

//----------------------------------- IF: TERNARY OPERATORS
let result67 = document.querySelector(`#result67`);
const func67 = document.querySelector(`#func67`);

const function67 = () =>{
    const sample67 = Number(document.querySelector(`#sample67`).value);
    result67.textContent = (sample67 > 17 && sample67 < 60) ? `You are an adult`: 
                           (sample67 > 59) ? `You are a senior citizen`:
                           `You are a minor`;
}

func67.addEventListener(`click`, function67);
//--------------------------------------------------------

//---------------------------------------- IF: SWITCH
let result68 = document.querySelector(`#result68`);
const func68 = document.querySelector(`#func68`);

const function68 = () =>{
    let sample68 = Number(document.querySelector(`#sample68`).value);

    const category68 = (sample68 > 59) ? `Senior`: (sample68 > 17) ? `Adult`: `Minor`;

    switch(category68){
        case `Senior`:
            result68.textContent = `You are a senior citizen`;
            break;
        case `Adult`:
            result68.textContent = `You are an adult`;
            break;
        default:
            result68.textContent = `You are a minor`;
    }
}

func68.addEventListener(`click`, function68);
//----------------------------------------------

//------------------------------ OBJECT: ACCESS VALUES
const obj = {
    name: `Hello World`,
    age: 2024,
    random: [`x`, 6, `hello`]
};

const result69 = document.querySelector(`#result69`);
const func69 = document.querySelector(`#func69`);

let keys69 = Object.keys(obj);

const function69 = () =>{
    result69.textContent = `${keys69[0]}, ${obj.age}, ${obj.random[2]}`
}

func69.addEventListener(`click`, function69);
//------------------------------------------------------

//-------------------------- OBJECT: MODIFY/ADD PROPERTY
const obj70 = {
    name: `Hello World`,
    age: 2024,
    random: [`x`, 6, `hello`]
};

let result70 = document.querySelector(`#result70`);

obj70.city = `New York`;
obj70.age = 24;

const function70 = () =>{

    result70.textContent = `${obj70.name}, ${obj70.age}, ${obj70.random}, ${obj70.city}`;
}

const removefunc70 = () =>{
    delete obj70.random;
    deleted70 = document.createElement(`p`);
    deleted70.textContent = `(random is now deleted)`
    deleted70.style.cssText = `color: red; font-weight: bold;`
    func70B.insertAdjacentElement(`afterend`, deleted70);
}

const func70 = document.querySelector(`#func70`);

func70.addEventListener(`click`, function70);

const func70B = document.querySelector(`#func70B`);
func70B.addEventListener(`click`, removefunc70);
//------------------------------------------------------------

//----------------------------------- OBJECT: THIS
const obj71 = {
    name: `Hello World`,
    age: 2024,
    greet: function(){
        return `${this.name}, ${this.age}`;
    }
};

let result71 = document.querySelector(`#result71`);

const function71 = () =>{
    result71.textContent = obj71.greet();
}

const func71 = document.querySelector(`#func71`);

func71.addEventListener(`click`, function71);
//-------------------------------------------------------------

//------------------------------------- OBJECT: OBJECT KEYS, OBJECT VALUES
const obj72 = {
    name: `Hello World`,
    age: 2024,
    city: `New York`
};

const keys72 = Object.keys(obj72);
const values72 = Object.values(obj72);
const func72 = document.querySelector(`#func72`);
const func72B = document.querySelector(`#func72B`);

let result72 = document.querySelector(`#result72`);

function showKeys72(){
    result72.textContent = keys72;
}

function showValues72(){
    result72.textContent = values72;
}

func72.addEventListener(`click`, showKeys72);
func72B.addEventListener(`click`, showValues72);

//======================================== JSON: parsse()

const JSON73 = `{
    "name": "dcode",
    "age": 35,
    "graduated": true,
    "favoriteColor": ["blue", "green"]
}`;

const info73 = JSON.parse(JSON73);
const func73 = document.querySelector(`#func73`);
const result73 = document.querySelector(`#result73`);

func73.addEventListener(`click`, () => {
    result73.innerHTML = '';
    Object.entries(info73).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            value = value.join(', ');
        }
        result73.innerHTML += `<p>${key}: ${value}</p>`;
    });
});

//============================= JSON: stringify()

const info74 = {
    "name": "dcode",
    "age": 35,
    "graduated": true,
    "favoriteColor": ["blue", "green"]
};

const convert74 = JSON.stringify(info74);

const func74 = document.querySelector(`#func74`);
const result74 = document.querySelector(`#result74`);

func74.addEventListener(`click`, ()=>{
    result74.textContent = convert74;
});
//=====================================================

//================== ASYNCHRONOUS: setTimeout()
const func75 = document.querySelector(`#func75`);
const result75 = document.querySelector(`#result75`);

const function75 = () =>{
setTimeout(()=>{
    result75.innerHTML = `<p class="red">hello</p>`;
}, 3000);
}

func75.addEventListener(`click`, ()=>{
    function75();
});
//====================================================

//=================== ASYNCHRONOUS: callback

const func76 = document.querySelector(`#func76`);
const result76 = document.querySelector(`#result76`);

const function76 = (callback) =>{
    setTimeout(()=>{
        result76.innerHTML = `<p class="red">hello</p>`;
    
        callback();
    }, 3000);
    
}

const function76B = (callback) =>{
    setTimeout(()=>{
        result76.innerHTML = `<p class="red">world</p>`;
        callback();
    }, 2000);
}

const function76C = (callback) =>{
    setTimeout(()=>{
        result76.innerHTML = `<p class="red">done</p>`;
        callback();
    }, 1000);
}

func76.addEventListener(`click`, ()=>{
    function76(()=>{
        function76B(()=>{
            function76C();
        })
    })
});

//==================================

//======================== ASYNCHRONOUS: PROMISE

const func77 = document.querySelector(`#func77`);
const result77 = document.querySelector(`#result77`);

const function77 = () =>{

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            result77.innerHTML = `<p class="red">hello</p>`;
            resolve();
        }, 3000);
    });   
}

const function77B = () =>{

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            result77.innerHTML = `<p class="red">world</p>`;
            resolve();
        }, 2000);
    });
}

const function77C = () =>{

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            result77.innerHTML = `<p class="red">done</p>`;
            resolve();
        }, 1000);
    }); 
}

func77.addEventListener(`click`, ()=>{
    function77()
        .then(()=>{
            return function77B();

        })
        .then(()=>{
            return function77C();
        });
});
//========================= ASYNCHRONOUS: ASYNC AND AWAIT
const func78 = document.querySelector(`#func78`);
const result78 = document.querySelector(`#result78`);

const function78 = () =>{

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            result78.innerHTML = `<p class="red">hello</p>`;
            resolve();
        }, 3000);
    });   
}

const function78B = () =>{

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            result78.innerHTML = `<p class="red">world</p>`;
            resolve();
        }, 2000);
    });
}

const function78C = () =>{

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            result78.innerHTML = `<p class="red">done</p>`;
            resolve();
        }, 1000);
    }); 
}

async function execute78(){
    await function78();
    await function78B();
    await function78C();
}

func78.addEventListener(`click`, execute78);

//===========================================

//================== ASYNCHRONOUS: FETCH
const func79 = document.querySelector(`#func79`);
const result79 = document.querySelector(`#result79`);

function function79(){

    const func79 = document.querySelector(`#func79`).value.toLowerCase();

    fetch(`https://pokeapi.co/api/v2/pokemon/${func79}`)
    .then(response => {
        if(!response.ok){
            window.alert("Error: could not fetch resource")
        }
        return response.json();
    })
    .then(data => {
        const pokemonImage = data.sprites.front_default;
        const pokemonImage1 = data.sprites.back_default;

        const pokemonImage4 = data.sprites.front_shiny;
        const pokemonImage5 = data.sprites.back_shiny;

        result79.innerHTML = `
                <figure>
                    <img src="${pokemonImage}" class="image79"/>
                    <figcaption>Front (Male)</figcaption>
                </figure>
                <figure>
                    <img src="${pokemonImage1}" class="image79"/>
                    <figcaption>Back (Male)</figcaption>
                </figure>
    
                <figure>
                    <img src="${pokemonImage4}" class="image79"/>
                    <figcaption>Front (Shiny)</figcaption>
                </figure>
                <figure>
                    <img src="${pokemonImage5}" class="image79"/>
                    <figcaption>Back (Shiny)</figcaption>
                </figure>
                `;
    })
    .catch(error => console.error(error));

    
}
