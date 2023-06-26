const fs = require('fs');
const svgtofont = require('svgtofont');
const path = require('path');
const grunt = require('grunt');

const pkg = grunt.file.readJSON('package.json')

// https://github.com/Kitchen-JS/svgtofont
// https://github.com/Kitchen-JS/svgtofont-test

svgtofont({
  src: path.resolve(process.cwd(), "svg"), // svg path
  dist: path.resolve(process.cwd(), "fonts"), // output path
  //styleTemplates: null, 
  styleTemplates: path.resolve(process.cwd(), "node_modules/svgtofont/lib/styles"), // file templates path (optional)
  fontName: "pfi", // font name
  css: true, // Create CSS files.
  startUnicode: 0xea01, // unicode start number
  svgicons2svgfont: {
    fontHeight: 1000,
    normalize: true
  },
  //website: null
  website: {
    title: "PEC Font Icons",
    // Must be a .svg format image.
    logo: path.resolve(process.cwd(), "svg", "git.svg"),
    version: pkg.version,
    meta: {
      description: "Converts SVG fonts to TTF/EOT/WOFF/WOFF2/SVG format.",
      keywords: "svgtofont,TTF,EOT,WOFF,WOFF2,SVG"
    },
    description: ``,
    corners: {
      url: 'https://github.com/PEC-Developement-Team/PEC-Icons',
      width: 60, // default: 60
      height: 60, // default: 60
      bgColor: '#dc3545' // default: '#151513'
    },
    links: [
      {
        title: "Font Class",
        url: "index.html"
      }
    ]
  }
}).then(() => 
{
  console.log('Done!');
});;