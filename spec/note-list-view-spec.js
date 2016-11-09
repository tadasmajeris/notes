describe('NoteListView', function() {

    it('renders an html with one note from NoteList', function() {
        var noteList = new NoteList();
        noteList.addNote("Lyst aa bli med meg hjem og spille ukulele");
        var noteListView = new NoteListView(noteList);
        var html = noteListView.renderHTML();
        expect(html).toEqual("<ul><li><div>Lyst aa bli med meg hjem og spille ukulele</div></li></ul>")

    })

    it('renders an html with two notes from NoteList', function() {
        var noteList = new NoteList();
        noteList.addNote("Er du Thai ambassadoer");
        noteList.addNote("Vil du sitte paa fanget mitt");
        var noteListView = new NoteListView(noteList);
        var html = noteListView.renderHTML();
        expect(html).toEqual("<ul><li><div>Er du Thai ambassadoer</div></li><li><div>Vil du sitte paa fanget mitt</div></li></ul>")

    })

    it('renders an empty html with empty NoteList', function() {
        var noteList = new NoteList();
        var noteListView = new NoteListView(noteList);
        expect(noteListView.renderHTML()).toBeEmpty()
    })

})