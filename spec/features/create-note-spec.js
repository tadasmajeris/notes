describe('Create Note feature', function() {

  it('can create a note, and display it', function(){
    var noteController = new NoteController(new NoteList());
    var textArea = document.getElementById('text');
    var button = document.getElementById('submit_button');
    var form = document.getElementById('new_note');
    form.addEventListener('submit', function(event){
      var appDiv = document.getElementById('app');
      expect(appDiv.innerHTML).toEqual(`<ul><li><a href="#notes/0">This is a new note. ...</a></li></ul>`);
      expect(textArea.value).toBeEmpty();
    });
    textArea.value = "This is a new note. And I am testing that it's being created.";
    button.click();
  });

})
