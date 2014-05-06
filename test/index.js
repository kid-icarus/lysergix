var should = require('chai').should();
var lysergix = require('../index');

describe('Lysergix', function() {
  it('Should have some like, faces', function() {
    lysergix.faces.should.not.be.empty;
  });
  it('Should have not have any tags to being with', function(){
    lysergix.tags.should.be.empty;
  });
  describe('getTags', function(){
    it('should set the tags for the faces', function(){
      lysergix.getTags().should.not.be.empty;
    });
  });
  describe('tagFilter', function() {
    it('Should throw an error if the tag does not exist', function(){
      try {
        lysergix.tagFilter('datboiryan');
      }
      catch (e) {
        e.should.equal('Error: tag not found')
      }
    })
    it('Should return an empty array if the called without a tag', function(){
      var faces = lysergix.tagFilter();
      faces.should.be.an.array;
      faces.should.have.length(0);
    })
    it('Should not return an empty array if a tag exists', function(){
      var faces = lysergix.tagFilter('angry');
      faces.should.not.be.empty;
    });
    it('Should filter out faces that are not the given tag', function(){
      var faces = lysergix.tagFilter('angry');
      faces.forEach(function(face){
        face.tag.should.equal('angry');
      })
    });
  });
  describe('getFace', function() {
    it('Should return a face', function(){
      var face = lysergix.getFace(2);
      face.should.not.be.empty;
      face.content.should.not.be.empty;
    });
    it('Should error out if index is out of range', function() {
      try {
        var face = lysergix.getFace(12312312312);
      }
      catch(e) {
        e.should.equal('Error: id out of range');
      }
    });
    it('Should error out if id is not a number', function() {
      try {
        var face = lysergix.getFace('test');
      }
      catch(e) {
        e.should.equal('Error: id out of range');
      }
    });
  })
  describe('getRandomFace', function() {
    it('Should return a random face', function(){
      var face = lysergix.getRandomFace();
      face.should.not.be.empty;
      face.content.should.not.be.empty;
    });
    it('Should return a random tagged face', function(){
      var face = lysergix.getRandomFace('angry');
      face.should.not.be.empty;
      face.content.should.not.be.empty;
      face.tag.should.equal('angry')
    });
    it('Should error out if given a tag that does not exist', function(){
      try {
        var face = lysergix.getRandomFace('datboiryboi');
      }
      catch(e) {
        e.should.equal('Error: tag not found')
      }
    });
  })
})
