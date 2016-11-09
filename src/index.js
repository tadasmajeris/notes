function init(){
  var noteList = new NoteList();
  noteList.addNote("Er du Thai ambassadoer");
  noteList.addNote("Vil du sitte paa fanget mitt");
  var noteController = new NoteController(noteList);
  noteController.addHtmlFromNoteList();
}
init();
