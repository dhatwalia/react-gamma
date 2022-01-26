const fs = require('fs');
const path = require('path');

var yamlFile = 'FilesListed.yaml';
var folderName = 'markdown';

module.exports = {
  node: {
    fs: 'empty'
  },
}

main();

//This behaves like the main function
function main() {
  // If Directory depth is changed, update the level and the length in absoluteToRelative
  fileWalker(folderName, function (err, data) {
    if (err)
      console.log("WebPackError 101");

    data.sort((obj1, obj2) => {
      return obj1.localeCompare(obj2);
    });

    //Deleting the file if it exists
    if (fs.existsSync(yamlFile))
      fs.unlinkSync(yamlFile, (err) => {
        if (err)
          console.log("WebPackError 102");
      });

    //Creating new file
    fs.openSync(yamlFile, 'w');

    //Building the YAML file
    buildTree(data, 0);
  });

  //console.log("Create YAML file for sidebar");
}

function saveTitle(file_title) {
  fs.appendFileSync(yamlFile, file_title);
}

function getNodeTitle(filename) {
  var title = null;

  var titleLength = filename.length;
  for (var i = 0; i < titleLength; i++) {
    if (filename[i] == '/') {
      titleBegin = i + 1;
    }
  }

  title = filename.substr(titleBegin, titleLength);
  title = title.replace(new RegExp('-', 'g'), ' ');
  title = title.toTitleCase();
  return title;
}

function getTitle(filename) {
  var content;
  var pattern = /title/i;
  var frontMatterTitle = null;
  var titleBegin = 0, titleEnd;

  content = fs.readFileSync(filename + ".md", 'utf-8').split('\n').filter(Boolean);

  if (content[0] != '---')
    saveTitle(getNodeTitle(filename));
  else {
    var i = 1;
    while (content[i] != '---') {
      if (content[i].match(pattern) != null) {
        titleBegin = content[i].indexOf(":") + 1;
        titleEnd = content[i].length;
        frontMatterTitle = content[i].substr(titleBegin, titleEnd).trim().replace('"', "").replace('"', "");
        break;
      }
      i++;
    }
    saveTitle(frontMatterTitle);
  }
}

// Change this when you move the code
function absoluteToRelative(filename) {
  return filename.substr(__dirname.length + folderName.length + 2, filename.length);
}

function isDirectory(path) {
  try {
    var stat = fs.lstatSync(path);
    return stat.isDirectory();
  } catch (e) {
    // lstatSync throws an error if path doesn't exist
    return false;
  }
}

function isFile(path) {
  try {
    var stat = fs.lstatSync(path);
    return stat.isFile();
  } catch (e) {
    // lstatSync throws an error if path doesn't exist
    return false;
  }
}

// David Gouch's implementation 
String.prototype.toTitleCase = function () {
  'use strict'
  var smallWords = /^(a|an|and|are|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|v.?|vs.?|via)$/i
  var alphanumericPattern = /([A-Za-z0-9\u00C0-\u00FF])/
  var wordSeparators = /([ :–—-])/

  return this.split(wordSeparators)
    .map(function (current, index, array) {
      if (
        /* Check for small words */
        current.search(smallWords) > -1 &&
        /* Skip first and last word */
        index !== 0 &&
        index !== array.length - 1 &&
        /* Ignore title end and subtitle start */
        array[index - 3] !== ':' &&
        array[index + 1] !== ':' &&
        /* Ignore small words that start a hyphenated phrase */
        (array[index + 1] !== '-' ||
          (array[index - 1] === '-' && array[index + 1] === '-'))
      ) {
        return current.toLowerCase()
      }

      /* Ignore intentional capitalization */
      if (current.substr(1).search(/[A-Z]|\../) > -1) {
        return current
      }

      /* Ignore URLs */
      if (array[index + 1] === ':' && array[index + 2] !== '') {
        return current
      }

      /* Capitalize the first letter */
      return current.replace(alphanumericPattern, function (match) {
        return match.toUpperCase()
      })
    })
    .join('')
}

function fileWalker(dir, done) {
  let results = [];

  fs.readdir(dir, function (err, list) {
    if (err)
      return done(err);

    var pending = list.length;

    if (!pending)
      return done(null, results);

    list.forEach(function (file) {
      file = path.resolve(dir, file);
      fs.stat(file, function (err, stat) {
        // If directory, execute a recursive call
        if (stat && stat.isDirectory()) {
          // Add directory to array [comment if you need to remove the directories from the array]
          results.push(file);

          fileWalker(file, function (err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        }
        else {
          results.push(file);
          if (!--pending)
            done(null, results);
        }
      });
    });
  });
};

function yamlWriter(data) {
  try {
    fs.appendFileSync(yamlFile, data);
  } catch (err) {
    console.log("Error 102");
    console.log(err);
  }
}

function buildTree(arr, index) {
  var filename;
  var level = 0;
  var i = 0;
  // terminate condition 
  if (index == arr.length)
    return;

  for (i = 0; i < arr[index].length; i++)
    if (arr[index][i] == '/' && i > __dirname.length)
      level++;
  //Decrease by number of levels deep the sidebar-contents directory is placed
  level -= 1;

  filename = arr[index].substr(0, arr[index].length).replace(".md", "");

  // for files
  if (isFile(arr[index])) {
    // tabs for internal levels 
    for (var i = 0; i < level; i++)
      yamlWriter("    ");

    yamlWriter("- title: ");
    getTitle(filename);
    yamlWriter("\n");

    // tabs for internal levels 
    for (var i = 0; i < level; i++)
      yamlWriter("    ");

    // Converting absolute path to relative path
    filename = absoluteToRelative(filename);
    yamlWriter("  link: " + filename + "\n");
  }
  else
    if (isDirectory(arr[index])) {
      // tabs for internal levels
      for (var i = 0; i < level; i++)
        yamlWriter("    ");
      yamlWriter("- title: " + getNodeTitle(filename) + "\n");

      // tabs for internal levels 
      for (var i = 0; i < level; i++)
        yamlWriter("    ");
      yamlWriter("  items: \n");
    }

  // recursion for main directory 
  buildTree(arr, ++index);
}
