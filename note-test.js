function textIsEmptyByDefault(){
  var note = new Note();
  assert.isEqual(note.text(),"");
}

textIsEmptyByDefault();
