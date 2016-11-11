(function(exports) {

  function NoteController(noteList) {
    addHtmlFromNoteList(noteList);
    addFormListener(noteList, addHtmlFromNoteList);
    addHashListener(noteList, updateContent);
  }

  var addHtmlFromNoteList = function(noteList) {
    var noteListView = new NoteListView(noteList);
    var html = noteListView.renderHTML();
    var appDiv = document.getElementById('app');
    appDiv.innerHTML = html;
    var textArea = document.getElementById('text');
    textArea.value = '';
  };

  var addHashListener = function(noteList, callback) {
    window.addEventListener('hashchange', function(event){
      var noteID = window.location.hash.replace('#notes/', '');
      callback(noteID, noteList);
    })
  };

  var updateContent = function(noteID, noteList) {
    var note = noteList.notes()[noteID];
    var noteView = new SingleNoteView(note || new Note());
    var noteDiv = document.getElementById('note');
    noteDiv.innerHTML = noteView.renderHTML();
  };

  var addFormListener = function(noteList, callback) {
    var form = document.getElementById('new_note');
    form.addEventListener("submit", function(event){
      event.preventDefault();    //stop form from submitting
      var textArea = event.target[0];
      noteList.addNote(textArea.value);
      callback(noteList);
    });
  };

  exports.NoteController = NoteController;

})(this);
