##Lysergix

A database of emoticons. An api for pulling utf8 emoticons from the database.

For use on client or server :heart:

###Installation
`npm install lysergix`

###Usage
```javascript
var lysergix = require('lysergix')
lysergix.getTags() // returns an array of 'tags' for faces
lysergix.getRandomFace() // returns a random smiley face.
lysergix.getRandomFace('sadboi') // returns a random 'sadboi' smiley face.
lysergix.getRandomFace(['sadboi', 'angry']) // returns a random 'sadboi' or 'angry' smiley face.
lysergix.getFace(1234) // returns the 1234th face in the array of faces.
lysergix.asciiFilter() // returns an array of faces that are ascii only.
```

###Face structure:
The in-memory database of faces is have a simple structure:
```javascript
{
  content: 'the actual face',
  tag: 'a single category of face'
}
```
