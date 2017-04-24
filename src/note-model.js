(function(exports) {
  function Note() {
    this.text = "I love quotes!";
}

Note.prototype.getText = function() {
  var text = this.text;
};

exports.Note = Note;
})(this);
