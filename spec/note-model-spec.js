describe('Note', function(){

  it('should be empty by default', function(){
    var note = new Note();
    expect(note.text()).toEqual("");
  });

  it('can set a text on initialization', function(){
    var text = "My Favourite language is JavaScript";
    var note = new Note(text);
    expect(note.text()).toEqual(text);
  });

})
