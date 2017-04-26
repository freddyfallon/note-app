(function(exports) {
  function Note(text) {
    this.text = text;
    this.id = undefined;
}

Note.prototype.getText = function () {
  return this.text;
};

Note.prototype.setId = function(number) {
  this.id = number;
};

exports.Note = Note;
})(this);
