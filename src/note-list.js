(function(exports) {

    function NoteList() {
        this.notesArray = [];
    }

    NoteList.prototype.notes = function() {
        return this.notesArray
    };

    NoteList.prototype.addNote = function(string) {
        var note = new Note(string);
        this.notesArray.push(note)
    }

    exports.Notelist = Notelist;

})(this)