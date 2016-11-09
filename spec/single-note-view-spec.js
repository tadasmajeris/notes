describe('SingleNoteView', function() {

    it('can be instantiated', function() {
        var note = new Note("I'm very Hungary");
        var singleNoteView = new SingleNoteView(note);
        var html = singleNoteView.renderHTML();
        expect(html).toEqual("<div>I'm very Hungary</div>")
    })

})