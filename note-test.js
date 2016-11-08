function textIsEmptyByDefault(){
  var note = new Note();
  expect(note.text()).toEqual("");
}
function setTextOfTheNote(){
  var text = "My Favourite language is JavaScript";
  var note = new Note(text);
  expect(note.text()).toEqual(text)
}
textIsEmptyByDefault();

setTextOfTheNote();
