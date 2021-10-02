var div;
for(let x=0;x<20;x++){
    div=document.createElement("div");
    div.style.top=random((screen.height))+"px";
    div.style.left=random((screen.width))+"px";
    document.body.insertAdjacentElement("afterbegin",div)
}

setTimeout(
    ()=>{
            let algo=Array.from(document.querySelectorAll("div"));
            algo.forEach(elm=>{
               elm.style.top=random((screen.height))+"px";
               elm.style.left=random((screen.width))+"px";
        })
    },
    3000
)

function random(max){
    let min=-20;
    return parseInt(Math.random()*((max+1) - min) + min);
}