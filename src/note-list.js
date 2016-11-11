(function(exports) {

  function NoteList() {
    this.notesArray = [];
  }

  NoteList.prototype.notes = function() {
    return this.notesArray
  };

  NoteList.prototype.isNotEmpty = function() {
    return this.notes().length > 0
  }

  NoteList.prototype.addNote = function(string) {
    var note = new Note(string);
    note.setId(this.notesArray.length);
    this.notesArray.push(note);
  }

  exports.NoteList = NoteList;

})(this)
