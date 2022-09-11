let textTag = document.querySelector('header h1');
let text = textTag.textContent;

let splittedText = text.split("");

    textTag.innerHTML = "";

for(let i = 0; i < splittedText.length; i++){
    if(splittedText[i] === " "){
        splittedText[i] = "&nbsp"
    }
    textTag.innerHTML += `<span>${splittedText[i]}</span>`
}
let k = 0
let interval = setInterval(()=>{
    let spans = document.querySelectorAll('h1 span');
    let singleSpan = spans[k]
    singleSpan.className = "fadeMove"
    k++
    if(k === spans.length){
        clearInterval(interval)
    }
},200)


