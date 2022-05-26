# PEC-Icons
Icons built for the National Guard Professional Education Center

## Requests
These icons are made freely available. If you want an icon that we do not currently have please submit a request via an issue.

## Use
Go to the fonts folder here or the release version. Example html in index.html
```
   <link rel="stylesheet" href="pfi.css" />
   <link rel="stylesheet" href="pfi.js" />
   
   <i class="pfi-badge"></i>
```

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
   - Modified styles and removed support for uneeded browsers
   - npm install --save @uiw/react-github-corners
   - JavaScript, CSS & Fonts will be in fonts folder
   - See index.html example in fonts folder usage
   - node index.js

## Artwork
   - 100mm x 100mm Artboard
   - SVG resized and rotated to fit in that artboard
   - Horizontal align center
   - Vertical align middle
   - Square items mostly rounded
   - Line width 4-6pts for most 
   -    These do not show up in SVG fonts 
   -       Illustrator - Object, Path, Outline Stroke
   - Merge layers & objects
   -    Illustrator - Pathfinder (Unite, Merge, Minus Front, Minus Back) based on need
