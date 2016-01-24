'use strict';

let curveText = (obj)=>{
  // let {text,textColor,fontSize,curvature,degreeIncrements,overOrUnder,lineOnTop,lineOnBottom,lengthOfLines,lineColor} = obj;
  
  var text = obj.text;
  var textColor = obj.textColor;
  var fontSize = obj.fontSize;
  var curvature = obj.curvature;
  var degreeIncrements = obj.degreeIncrements||4;
  var overOrUnder = obj.overOrUnder;
  var lineOnTop = obj.lineOnTop;
  var lineOnBottom = obj.lineOnBottom;
  var lengthOfLines = obj.lengthOfLines;
  var lineColor = obj.lineColor;

  let arrayWithSpaces = text.split('');
  let arrayOfLetters = arrayWithSpaces.map(letter=> letter === ' ' ? '\u00A0' : letter)
  let centreLetter = arrayOfLetters.length/2 - .5
  let textContainer = document.createElement("div");
  if(overOrUnder === "under"){
    arrayOfLetters.reverse();
  }

  let characterElements = arrayOfLetters.map((char,index)=>{
    let span = document.createElement('span');
    let innerSpan = document.createElement('span');
    innerSpan.innerText = char;
    innerSpan.style.borderBottom = `${lineOnBottom}px solid ${lineColor||'black'}`;
    innerSpan.style.borderTop = `${lineOnTop}px solid ${lineColor||'black'}`;
    innerSpan.style.paddingLeft = innerSpan.style.paddingRight = `${lengthOfLines}px`;
    span.appendChild(innerSpan)
    span.setAttribute('char-id',index);
    span.style.position= "absolute";
    overOrUnder === "under" ? span.style.paddingTop = `${curvature||200}px`: span.style.paddingBottom = `${curvature||200}px`;
    span.style.transformOrigin = (overOrUnder || "over")  + " center";
    span.style.fontFamily = "monospace";
    span.style.color = textColor || "black";
    innerSpan.style.fontSize = `${fontSize}em` || "1em";

    span.style.transform = `rotate(${(index*degreeIncrements-(centreLetter*degreeIncrements))}deg)`;
    span.style.backgroundColor = "transparent";
    return span;
  })
  characterElements.forEach((element)=> textContainer.appendChild(element))
  return textContainer;
}

let cont = document.getElementById('container')
cont.style.marginTop = "200px"
cont.style.marginLeft = "350px"
cont.appendChild(curveText({
  text:"This works great",
  textColor:"blue",
  fontSize:2.7,
  curvature:800,
  degreeIncrements:4,
  overOrUnder:"over",
  lineOnTop:1,
  lineOnBottom:1,
  lengthOfLines:4,
  lineColor:"green",
}))

