'use strict';

let curveText = (obj)=>{
  // destructured
  let {
        text="curveText",
        textColor="black",
        fontSize=2,
        circleSize="200",
        curvature=.3,
        under,
        backColor="transparent",
        lineSides,
        lineOnTop,
        lineOnBottom,
        lengthOfLines,
        lineColor="black"
      } = obj;
  let vendors = ['webkitTransform', 'mozTransform', 'oTransform', 'msTransform', 'transform'];
  let arrayWithSpaces = text.split('');
  let arrayOfLetters = arrayWithSpaces.map(letter=> letter === ' ' ? '\u00A0' : letter)
  let centreLetter = arrayOfLetters.length/2 - .5
  let textContainer = document.createElement("div");
  curvature=curvature*(360/arrayOfLetters.length)

  if(under){
    arrayOfLetters.reverse();
  }

  let characterElements = arrayOfLetters.map((char,index)=>{
    let span = document.createElement('span');
    let innerSpan = document.createElement('span');
    innerSpan.innerText = char;
    innerSpan.style.borderBottom = `${lineOnBottom}px solid ${lineColor||'black'}`;
    innerSpan.style.borderTop = `${lineOnTop}px solid ${lineColor||'black'}`;
    innerSpan.style.paddingLeft = innerSpan.style.paddingRight = `${lengthOfLines}px`;
    innerSpan.style.backgroundColor = backColor;
    span.appendChild(innerSpan)
    innerSpan.setAttribute('char-id',index);

    // This code swaps the side the border appears on first/last characters to adjust
    // for whether the text is over or under the circle
    if(lineSides){
      if(index === 0){
        if(under){
          innerSpan.style.borderRight = `${lineOnBottom}px solid ${lineColor}`;
        }else{
          innerSpan.style.borderLeft = `${lineOnBottom}px solid ${lineColor}`;   
        }
      }
      if (index === arrayOfLetters.length-1){
         if(under){
          innerSpan.style.borderLeft = `${lineOnBottom}px solid ${lineColor}`;   
        }else{
          innerSpan.style.borderRight = `${lineOnBottom}px solid ${lineColor}`;
        }
      }  
    }

    span.style.position= "absolute";
    under ? span.style.paddingTop = `${circleSize}px`: span.style.paddingBottom = `${circleSize}px`;
    span.style.transformOrigin = under ? "top center": "bottom center";
    span.style.fontFamily = "monospace";
    span.style.color = textColor;
    innerSpan.style.fontSize = `${fontSize}em`;
    vendors.forEach(vendor=> span.style[vendor] = `rotate(${(index*curvature-(centreLetter*curvature))}deg)`;
    return span;
  })
  
  characterElements.forEach((element)=> textContainer.appendChild(element))
  return textContainer;
}

// Use an object with the following properties in the function's argument

// curveText({
//   text:"B L A C K J A C K",
//   textColor:"blue",
//   fontSize:4,
//   circleSize:200,
//   curvature:.6,
//   under:true,
//   backColor: "lightgrey",
//   lineSides: true,
//   lineOnTop:1,
//   lineOnBottom:1,
//   lengthOfLines:14,
//   lineColor:"red",
// })

