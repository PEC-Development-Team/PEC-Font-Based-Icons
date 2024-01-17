import svgtofont from "svgtofont"
import path from "node:path"
import grunt from "grunt"
const sax = await import("sax");

const pkg = grunt.file.readJSON('package.json')

// Sax will crash without this
sax.default.MAX_BUFFER_LENGTH = Infinity;

svgtofont({
  src: path.resolve(process.cwd(), "svg-optimized"), // svg path
  dist: path.resolve(process.cwd(), "fonts"), // output path
  //styleTemplates: null, 
  styleTemplates: path.resolve(process.cwd(), "node_modules/svgtofont/lib/styles"), // file templates path (optional)
  fontName: "pfi", // font name
  css: {
    fontSize: "6rem",
  },
  startUnicode: 0xea01, // unicode start number
  svgicons2svgfont: {
    fontHeight: 1000,
    normalize: true
  },
  generateInfoData: true,
  //website: null
  website: {
    title: "PEC Font Icons",
    // Must be a .svg format image.
    logo: path.resolve(process.cwd(), "svg", "git.svg"),
    favicon: "./svg/army-pec-logo.svg",
    version: pkg.version,
    meta: {
      description: "Converts SVG fonts to TTF/EOT/WOFF/WOFF2/SVG format.",
      keywords: "svgtofont,TTF,EOT,WOFF,WOFF2,SVG"
    },
    description: `SVG produced Font Based Icon Set`,
    links: [
      {
        title: "PEC-Font-Based-Icons on GitHub",
        url: "https://github.com/PEC-Development-Team/PEC-Font-Based-Icons"
      }
    ]
  }
}).then(() => 
{
  console.log('Finished writing PEC Font Icons v' + pkg.version);
});
