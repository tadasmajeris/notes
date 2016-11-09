describe('NoteController', function(){

  it('can be instantiated with a noteList', function(){
    var noteList = new NoteList();
    var noteController = new NoteController(noteList);
    expect(noteController.noteList()).toEqual(noteList);
  });

  it('should put html to an app div', function(){
    var noteList = new NoteList();
    noteList.addNote("Er du Thai ambassadoer");
    noteList.addNote("Vil du sitte paa fanget mitt");
    var noteController = new NoteController(noteList);
    noteController.addHtmlFromNoteList();
    var appDiv = document.getElementById('app');
    expect(appDiv.innerHTML).toEqual("<ul><li><div>Er du Thai ambassadoer</div></li><li><div>Vil du sitte paa fanget mitt</div></li></ul>")
  });
})
