function NoteController(noteList){
  this._noteList = noteList
}

NoteController.prototype.noteList = function() {
  return this._noteList
};

NoteController.prototype.addHtmlFromNoteList = function() {
  var noteListView = new NoteListView(this._noteList);
  var html = noteListView.renderHTML();
  var appDiv = document.getElementById('app');

  appDiv.innerHTML = html;
};
