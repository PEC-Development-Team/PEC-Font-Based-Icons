# PFI - Font Based Icons
These icons were built for and by the National Guard Professional Education Center development team but are made freely available to anyone who wants to use them. We welcome contributions and feedback.

## Credits
- Uses Base Library https://github.com/Kitchen-JS/svgtofont a refactored version of https://github.com/jaywcjlove/svgtofont
- Based on work done by KitchenJS https://github.com/Kitchen-JS/svgtofont-test

## Update Icons
```
node index.js
```
Outputs to /fonts

## Use
Go to the fonts folder in the repo or in the root of the release version. Example html in index.html. pfi.js is not required but is a useful key value pair to get the hex values by icon name for use on things like an html5 canvas.
```
   <link rel="stylesheet" href="pfi.css" />
   <link rel="stylesheet" href="pfi.js" />
   
   <i class="pfi-badge"></i>
```



## License
PEC Icons use the MIT License and are completely free, open source, simple. You can use it for commercial projects, open source projects, whatever.

## Requests
   - These icons are made freely available. If you want an icon that we do not currently have please submit a request via an issue.
   - If you experience any issues using the font based icons please let us know by submitting an issue.

## Contributions
Create a pull request. Please only original or open source art work. Only submit design files via the "Design Files" folder or svgs in the svgs folder. We will review your submission. The artboards should be 100mmx100mm (additional details at the bottom of the ReadMe).

## Screenshots
![Sample 1](https://raw.githubusercontent.com/PEC-Development-Team/PEC-Font-Based-Icons/main/screen-shots/sample1.png)
![Sample 2](https://raw.githubusercontent.com/PEC-Development-Team/PEC-Font-Based-Icons/main/screen-shots/sample2.png)

## pfi.js
pfi.js is an optional js file with a key value pair of hex values for each icon for use on things like HTML5 canvas.

## From The Repo Instructions
   - npm install
   - node index.js

## Node Project instructions
```
npm i -g pkg
npm i -g grunt
npm init
npm i https://github.com/Kitchen-JS/svgtofont
npm i -g grunt
```
   - Place SVGs in svg folder
   - Changed style location in index.js
   - Copy styles folder from svgtofont node package to root of project
   - Modified styles and removed support for un-needed browsers
   - JavaScript, CSS & Fonts will be in fonts folder
   - See index.html example in fonts folder usage
``` node index.js ```

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