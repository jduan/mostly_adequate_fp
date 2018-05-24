_ = require('../support.js');
assert = require('assert');

const match = _.curry((what, s) => s.match(what));
const replace = _.curry((what, replacement, s) => s.replace(what, replacement));
const filter = _.curry((f, xs) => xs.filter(f));
const map = _.curry((f, xs) => xs.map(f));

assert.deepEqual(match(/r/g, 'hello world'), ['r']);

const hasLetterR = match(/r/g);
assert.deepEqual(hasLetterR('hello world'), ['r']);
assert.equal(hasLetterR('just j and s and t etc'), null);

assert.deepEqual(filter(hasLetterR, ['rock and roll', 'smooth jazz']), ['rock and roll']);

const removeStringsWithoutRs = filter(hasLetterR);
assert.deepEqual(removeStringsWithoutRs(['rock and roll', 'smooth jazz', 'drum circle']),
    ['rock and roll', 'drum circle']);

const noVowels = replace(/[aeiou]/ig);
const censored = noVowels('*');
assert.equal(censored('Chocolate Rain'), 'Ch*c*l*t* R**n');
