(function(exports) {

  function NoteController(noteList) {
    this._noteList = noteList
  }

  NoteController.prototype.noteList = function() {
    return this._noteList
  };

  NoteController.prototype.addHtmlFromNoteList = function() {
    var noteListView = new NoteListView(this.noteList());
    var html = noteListView.renderHTML();
    var appDiv = document.getElementById('app');
    appDiv.innerHTML = html;
    this.addHashListener('hashchange', this.updateContent, this.noteList());
  };

  NoteController.prototype.addHashListener = function(eventType, callback, noteList) {
    window.addEventListener('hashchange', function(event){
      var noteID = window.location.hash.replace('#notes/', '');
      callback(noteID, noteList);
    })
  };

  NoteController.prototype.updateContent = function(noteID, noteList) {
    var note = noteList.notes()[noteID];
    var noteView = new SingleNoteView(note);
    var appDiv = document.getElementById('app');
    appDiv.innerHTML = noteView.renderHTML();
  };

  exports.NoteController = NoteController;

})(this);
