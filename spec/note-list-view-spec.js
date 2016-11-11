describe('NoteListView', function() {

  it('can render an html with one note with a link', function() {
    var noteList = new NoteList();
    noteList.addNote("Lyst aa bli med meg hjem og spille ukulele");
    var noteListView = new NoteListView(noteList);
    var html = noteListView.renderHTML();
    var url = window.location.href;
    expect(html).toEqual(`<ul><li><a href="#notes/0">Lyst aa bli med meg ...</a></li></ul>`)
  });

  it('can render an html with two notes with links', function() {
    var noteList = new NoteList();
    noteList.addNote("Er du Thai ambassadoer i Norge");
    noteList.addNote("Vil du sitte paa fanget mitt ikveld");
    var noteListView = new NoteListView(noteList);
    var html = noteListView.renderHTML();
    expect(html).toEqual(`<ul><li><a href="#notes/0">Er du Thai ambassado...</a></li><li><a href="#notes/1">Vil du sitte paa fan...</a></li></ul>`)
  });

  it('renders an empty html with empty NoteList', function() {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    expect(noteListView.renderHTML()).toBeEmpty()
  });

})
