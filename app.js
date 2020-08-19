const elemBtn=document.querySelectorAll(".elem");
const countElem=document.querySelectorAll(".count");
let element;
let resultElem;
let maxElem;
var countA=0;
var countB=0;
var countC=0;
var countD=0;
elemBtn.forEach(elem=>elem.addEventListener("click",(e)=>{
       element=e.target.id;
       if(element=="A"){
              countA++;
              document.getElementById("countA").innerHTML=countA;
       }else if(element=="B"){
              countB++;
              document.getElementById("countB").innerHTML=countB;
       }else if(element=="C"){
              countC++;
              document.getElementById("countC").innerHTML=countC;
       }
       else if(element=="D"){
              countD++;
              document.getElementById("countD").innerHTML=countD;
       }
       var allElements=[countA,countB,countC,countD];

       maxElem=allElements.indexOf(Math.max.apply(null,allElements));
       
       if(maxElem ==0){resultElem="箱根-芦ノ湖"}
       else if(maxElem==1){resultElem="東京-澁谷"}
       else if(maxElem==2){resultElem="静岡-忠霊塔"}
       else if(maxElem==3){resultElem="京都-嵐山"}
       document.getElementById("result").innerHTML=resultElem;
}))

