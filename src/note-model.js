(function(exports){

  function Note(text){
    this.string = text || ""
  }

  Note.prototype.text = function(){
    return this.string;
  }

  Note.prototype.id = function(){
    return this._id
  }

  Note.prototype.setId = function(id){
    this._id = id;
  }

  exports.Note = Note;

})(this)
