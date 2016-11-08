describe('NoteList', function(){

  it('should be empty by default', function(){
    var notelist = new NoteList();
    expect(notelist.notes()).toBeEmpty();
  });

})
