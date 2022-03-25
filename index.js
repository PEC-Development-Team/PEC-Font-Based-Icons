const svgtofont = require('svgtofont');
const path = require('path');
const grunt = require('grunt');

const pkg = grunt.file.readJSON('package.json')

svgtofont({
  src: path.resolve(process.cwd(), "src"), // svg path
  dist: path.resolve(process.cwd(), "fonts"), // output path
  styleTemplates: path.resolve(process.cwd(), "styles"), // file templates path (optional)
  fontName: "PECFontIcons", // font name
  css: true, // Create CSS files.
  startUnicode: 0xea01, // unicode start number
  svgicons2svgfont: {
    fontHeight: 1000,
    normalize: true
  },
  // website = null, no demo html files
  website: {
    title: "bluFontIcons",
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
      },
      {
        title: "Unicode",
        url: "unicode.html"
      },
      {
        title: "Symbol Class",
        url: "symbol.html"
      }
    ]
  }
}).then(() => {
  console.log('Done!');
});;