function Note(text){
  this.string = text || ""

}
Note.prototype.text = function(){
  return this.string;
}
