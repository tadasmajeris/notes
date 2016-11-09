(function(exports) {

    function NoteListView(noteList) {
        this._noteList = noteList;
    }

    NoteListView.prototype.renderHTML = function() {
        var html = "";
        if (this._noteList.isNotEmpty()) {
            html += "<ul>";
            for (var i = 0; i < this._noteList.notes().length; i++) {
                var note = this._noteList.notes()[i];
                html += `<li><div>${note.text()}</div></li>`
            }

            html += "</ul>";
        }

        return html
    }

    exports.NoteListView = NoteListView;

})(this)