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
    it('Should return an empty array if there is no tag', function(){
      var faces = lysergix.tagFilter('datboiryan');
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
})
