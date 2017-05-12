const Fuse = require('./dist/fuse.js')
const process = require('process')

var args = process.argv.slice(2);

var books = [{
  'title': "Old Man's War",
  'author': 'John Scalzi',
  'tags': ['fiction','comedy']
}, {
  'title': 'The Lock Artist',
  'author': 'Steve',
  'tags': ['thriller','action']
}]

var options = {
  shouldSort: true,
  findAllMatches: true,
  includeMatches: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
  'title',
  'author.lastName',
  'tags'
  ]
};

var fuse = new Fuse(books, options);
var result = fuse.search(args[0]);
console.log(JSON.stringify(result));