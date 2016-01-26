# curveCssText

### About
This program will help you to curve text using only CSS. It uses ```transform``` and so won't be suitable for older browsers.
### To generate the useable file
After you ```npm install``` run ```gulp```
Gulp will use Babel to convert from ES6
### To use
Include a link to ```/dist/curveText.js``` in the ```index.html``` file of your project.
Then you can call the ```curveText()``` function in your project. It takes an object as an argument with the following properties:

#####text -this is where you put the string of text you want to curve
#####textColor - The color of the text as a string
#####fontSize - This takes a number type. The font size as measured in em. 
#####circleSize - Takes a number type. The distance in pixels from the circle's centre to the text.
#####curvature - This takes a number from 0 to 1 and defines how far the text wraps around the circle. 1 is a full circle and 0.5 is 180deg.
#####lineOnTop - Takes a boolean to indicate if a line should be above the text.
#####lineOnBottom - Takes a boolean to indicate if a line should be below the text.
#####lineSides - Takes a boolean to decide if the text will be bordered both sides by a line.
#####lineColor - The color of the lines as a string.
#####lengthOfLines - This can be fiddled with to try and get the separate top and bottom lines of each character to merge smoothly. Takes a number type.
#####under - Takes a boolean. If true the top of the text is closer to the centre of the circle and so wraps upwards.
#####backColor - Decides the text background color.

### Tips
When you call the function a ```div``` will be returned with the attribute ```id="curvy"```
Also each separate character will have a ```char-id``` that corresponds to its position in the string.

Go to http://www.andrewtriggfsd.com/curveTextDemoApp/ where there is an app that will generate the argument for the curveText function call.




