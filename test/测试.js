var assert = require('assert');
var 演示 = require("../入口")

describe('字拼音', function() {
  describe('', function() {
    it('有', function() {
      assert.equal(演示.带音调拼音["乐"], "lè,yuè,yào,lào");
    });
    it('无', function() {
      assert.equal(演示.带音调拼音["2"], null);
    });
  });
});

describe('多音字词表', function() {
  describe('', function() {
    it('有', function() {
      assert.equal(演示.多音字词表["音乐"], "yīn,yuè");
    });
    it('无', function() {
      assert.equal(演示.多音字词表["2"], null);
    });
  });
});
