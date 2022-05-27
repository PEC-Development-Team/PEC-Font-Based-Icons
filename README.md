# PEC-Icons
Icons built for the National Guard Professional Education Center but are made freely available to anyone who wants to use them.

## Use
Go to the fonts folder in the repo or in the root of the release version. Example html in index.html. pfi.js is not required but is a useful key value pair to get the hex values by icon name for use on things like an html5 canvas.
```
   <link rel="stylesheet" href="pfi.css" />
   <link rel="stylesheet" href="pfi.js" />
   
   <i class="pfi-badge"></i>
```

## License
PEC Icons use the MIT License and are completely free, open source, simple. You can use it for commercial projects, open source projects, etc.

Icons — CC BY 4.0 License
In the Font Awesome Free download, the CC BY 4.0 license applies to all icons packaged as .svg and .js files types.
Fonts — SIL OFL 1.1 License
In the Font Awesome Free download, the SIL OLF license applies to all icons packaged as web and desktop font files.
Code — MIT License
In the Font Awesome Free download, the MIT license applies to all non-font and non-icon files.
Attribution is required by MIT, SIL OLF, and CC BY licenses. Downloaded Font Awesome Free files already contain embedded comments with sufficient attribution, so you shouldn't need to do anything additional when using these files normally.

We've kept attribution comments terse, so we ask that you do not actively work to remove them from files, especially code. They're a great way for folks to learn about Font Awesome.

## Requests
   - These icons are made freely available. If you want an icon that we do not currently have please submit a request via an issue.
   - If you experience any issues using the font based icons please let us know by submitting an issue.

## Contributions
Create a pull request. Please only original or open source art work. Only submit design files via the "Design Files" folder or svgs in the svgs folder. We will review your submission. The artboards should be 100mmx100mm (additional details at the bottom of the ReadMe).

## Screenshots
![Sample 1](https://raw.githubusercontent.com/PEC-Developement-Team/PEC-Icons/main/screen-shots/sample1.png)
![Sample 2](https://raw.githubusercontent.com/PEC-Developement-Team/PEC-Icons/main/screen-shots/sample2.png)

## pfi.js
pfi.js is an optional js file with a key value pair of hex values for each icon for use on things like HTML5 canvas.


uses https://github.com/MrRedBeard/svgtofont

## Node Project instructions
   - npm init
   - npm install -g pkg
   - npm install https://github.com/MrRedBeard/svgtofont
   - npm install grunt
   - Place SVGs in svg folder
   - Changed style location in index.js
   - Copy styles folder from svgtofont node package to root of project
   - Modified styles and removed support for un-needed browsers
   - npm install --save @uiw/react-github-corners
   - JavaScript, CSS & Fonts will be in fonts folder
   - See index.html example in fonts folder usage
   - node index.js

## Artwork
   - In addition to the svgs in the "svgs" folder art work (illustrator files etc) can be found in the "Design Files" folder on the repo
   - 100mm x 100mm Artboard
   - SVG resized and rotated to fit in that artboard
   - Horizontal align center
   - Vertical align middle
   - Square items mostly rounded
   - Black & White only
   - Line width 6-8pts for most
   - Lines will have to be converted to shapes, layers will be flattened and white will be cutouts. 
