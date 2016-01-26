'use strict';

var curveText = function curveText(obj) {
  // destructured
  var _obj$text = obj.text;
  var text = _obj$text === undefined ? "curveText" : _obj$text;
  var _obj$textColor = obj.textColor;
  var textColor = _obj$textColor === undefined ? "black" : _obj$textColor;
  var _obj$fontSize = obj.fontSize;
  var fontSize = _obj$fontSize === undefined ? 2 : _obj$fontSize;
  var _obj$circleSize = obj.circleSize;
  var circleSize = _obj$circleSize === undefined ? "200" : _obj$circleSize;
  var _obj$curvature = obj.curvature;
  var curvature = _obj$curvature === undefined ? .3 : _obj$curvature;
  var under = obj.under;
  var _obj$backColor = obj.backColor;
  var backColor = _obj$backColor === undefined ? "transparent" : _obj$backColor;
  var lineSides = obj.lineSides;
  var lineOnTop = obj.lineOnTop;
  var lineOnBottom = obj.lineOnBottom;
  var lengthOfLines = obj.lengthOfLines;
  var _obj$lineColor = obj.lineColor;
  var lineColor = _obj$lineColor === undefined ? "black" : _obj$lineColor;

  var vendors = ['webkitTransform', 'mozTransform', 'oTransform', 'msTransform', 'transform'];
  var arrayWithSpaces = text.split('');
  var arrayOfLetters = arrayWithSpaces.map(function (letter) {
    return letter === ' ' ? " " : letter;
  });
  var centreLetter = arrayOfLetters.length / 2 - .5;
  var textContainer = document.createElement("div");
  var roundness = curvature * (360 / arrayOfLetters.length);

  if (under) {
    arrayOfLetters.reverse();
  }

  var characterElements = arrayOfLetters.map(function (char, index) {
    var span = document.createElement('span');
    var innerSpan = document.createElement('span');
    innerSpan.innerText = char;
    if (lineOnBottom) {
      innerSpan.style.borderBottom = "1px solid " + (lineColor || 'black');
    }
    if (lineOnTop) {
      innerSpan.style.borderTop = "1px solid " + (lineColor || 'black');
    }

    innerSpan.style.paddingLeft = innerSpan.style.paddingRight = lengthOfLines + "px";
    innerSpan.style.backgroundColor = backColor;
    span.appendChild(innerSpan);
    innerSpan.setAttribute('char-id', index);

    // This code swaps the side the border appears on first/last characters to adjust
    // for whether the text is over or under the circle
    if (lineSides) {
      if (index === 0) {
        if (under) {
          innerSpan.style.borderRight = "1px solid " + lineColor;
        } else {
          innerSpan.style.borderLeft = "1px solid " + lineColor;
        }
      }
      if (index === arrayOfLetters.length - 1) {
        if (under) {
          innerSpan.style.borderLeft = "1px solid " + lineColor;
        } else {
          innerSpan.style.borderRight = "1px solid " + lineColor;
        }
      }
    }

    span.style.position = "absolute";
    under ? span.style.paddingTop = circleSize + "px" : span.style.paddingBottom = circleSize + "px";
    span.style.transformOrigin = under ? "top center" : "bottom center";
    span.style.fontFamily = "monospace";
    span.style.color = textColor;
    innerSpan.style.fontSize = fontSize + "em";
    vendors.forEach(function (vendor) {
      return span.style[vendor] = "rotate(" + (index * roundness - centreLetter * roundness) + "deg)";
    });
    return span;
  });

  characterElements.forEach(function (element) {
    return textContainer.appendChild(element);
  });
  textContainer.setAttribute("id", "curvy");
  textContainer.style.marginTop = '100px';
  var angle = roundness * arrayOfLetters.length;
  var radians = angle * Math.PI / 180;
  var widthOfText = Math.sqrt(Math.pow(circleSize, 2) + Math.pow(circleSize, 2) - 2 * Math.pow(circleSize, 2) * Math.cos(radians));
  // if(!under){
  textContainer.style.marginLeft = curvature > 0.5 ? 100 + circleSize + 'px' : circleSize - (circleSize - widthOfText / 2) + 100 + 'px';

  // }
  return textContainer;
};

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