const btn = document.getElementById('genpass')
const display = document.getElementById('heading')

const rangeSlider = document.getElementById("range")
const rangeval = document.getElementById("rangeval")
rangeSlider.addEventListener('input', (e) => {
    rangeval.innerText = e.target.value
})
btn.addEventListener('click', () => {
    const caplet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const samlet = 'abcdefghijklmnopqrstuvyxyz';
    const symbol = '?&$@#+/';
    const number = '0123456789';
    let finalstr="";
    let num = document.getElementById('number');
    let cap = document.getElementById('caplet');
    let sam = document.getElementById('samlet');
    let symb = document.getElementById('symbol');
    if (num.checked) {
        finalstr += number;
    }
    if (cap.checked) {
        finalstr += caplet;
    }
    if (sam.checked) {
        finalstr += samlet;
    }
    if (symb.checked) {
        finalstr += symbol;
    }
    if(finalstr===""){
        alert("please select at least on field");
    }


    let passward = "";
    for (let i = 0; i < rangeSlider.value; i++) {
        let randnum = Math.floor(Math.random() * finalstr.length);
        passward += finalstr.charAt(randnum);
    }
    display.innerText = `${passward}`;
})
//window.isSecureContext
//search on chrome 
//chrome://flags
const copybtn=document.getElementById("copy");
copybtn.addEventListener('click',()=>{
    window.navigator.clipboard.writeText(display.innerText);
})
