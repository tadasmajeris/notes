describe('NoteController', function() {

  it('changes the content depending on which note was clicked', function(){
    var noteList = new NoteList();
    noteList.addNote("hello World");
    noteList.addNote("hello Tadas how you doing?");
    var noteController = new NoteController(noteList);

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
