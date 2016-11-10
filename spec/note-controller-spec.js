describe('NoteController', function() {

  it('can be instantiated with a noteList', function() {
    var noteList = new NoteList();
    var noteController = new NoteController(noteList);
    expect(noteController.noteList()).toEqual(noteList);
  });

  it('should put html to an app div', function() {
    var noteList = new NoteList();
    noteList.addNote("Er du Thai ambassadoer");
    noteList.addNote("Vil du sitte paa fanget mitt");
    var noteController = new NoteController(noteList);
    noteController.addHtmlFromNoteList();
    var appDiv = document.getElementById('app');
    var url = window.location.href;
    expect(appDiv.innerHTML).toEqual(`<ul><li><a href="#notes/0">Er du Thai ambassado...</a></li><li><a href="#notes/1">Vil du sitte paa fan...</a></li></ul>`)
  });

  it('changes the content depending on which note was clicked', function(){
    var noteList = new NoteList();
    noteList.addNote("hello World");
    noteList.addNote("hello Tadas how you doing?");
    var noteController = new NoteController(noteList);
    noteController.addHtmlFromNoteList();

    var appDiv = document.getElementById('app');
    var link0 = appDiv.getElementsByTagName('a')[0];
    var link1 = appDiv.getElementsByTagName('a')[1];

    var checkTheContentHas = function(noteText) {
      var noteDiv = document.getElementById('note');
      expect(noteDiv.innerHTML).toEqual(`<div>${noteText}</div>`);
    }

    window.addEventListener('hashchange', function(event){
      var noteID = window.location.hash.replace('#notes/', '');
      var noteText = noteList.notes()[noteID].text();
      checkTheContentHas(noteText);
    });

    link0.click();
    link1.click();
  });

})
