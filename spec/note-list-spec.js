describe('NoteList', function(){

  it('should be empty by default', function(){
    var notelist = new NoteList();
    expect(notelist.notes()).toBeEmpty();
  });

  describe('addNote', function(){

    it('should add the note to the notelist', function(){
      var notelist = new NoteList();
      notelist.addNote('Hello world');
      expect(notelist.notes().length).toEqual(1);
      expect(notelist.notes()[0].text()).toEqual('Hello world');
    });
  });
})
