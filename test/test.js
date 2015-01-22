var assert = require('assert');
var rework = require('rework');
var fs = require('fs');
var reworkExtend = require('..');

describe('rework-extend', function() {

  it('parses chained extends properly', function() {
    var output = rework(fixture('a.css')).use(reworkExtend()).toString().trim();
    var expected = fixture('a.css.expected');

    assert.equal(output, expected);
  });

  it('parses extends correctly', function() {
    var output = rework(fixture('b.css')).use(reworkExtend()).toString().trim();
    var expected = fixture('b.css.expected');

    assert.equal(output, expected);
  });
});

function fixture(name) {
  return fs.readFileSync('test/fixtures/' + name, 'utf8').trim();
}
