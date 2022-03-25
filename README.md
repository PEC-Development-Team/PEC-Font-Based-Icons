# PEC-Icons
Icons for PEC Applications

uses https://github.com/MrRedBeard/svgtofont

Node Project instructions
	npm init
	npm install -g pkg
	npm install https://github.com/MrRedBeard/svgtofont
	npm install grunt
	Place SVGs in src folder
	Changed style location in index.js
	Copy styles folder from svgtofont node package to root of project
	Modified styles and removed support for uneeded browsers
	npm install --save @uiw/react-github-corners
	JavaScript, CSS & Fonts will be in fonts folder
	See index.html example in fonts folder usage
	node index.js

Artwork
	33.87mm x 33.87mm Artboard
	SVG resized and rotated to fit in that artboard
	Horizontal align center
	Vertical align middle
	Square items mostly rounded
	Line width 4-6pts for most 
		These do not show up in SVG fonts 
			Illustrator - Object, Path, Outline Stroke
	Merge layers & objects
		Illustrator - Pathfinder (Unite, Merge, Minus Front, Minus Back) based on need
