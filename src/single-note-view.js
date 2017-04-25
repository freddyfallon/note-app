(function(exports) {
  function SingleNoteView(note) {
    this.note = note;
  }
  SingleNoteView.prototype.viewNote = function() {
    return "<ul><li><div>" + this.note.getText() + "</div></li></ul>";
  };
  exports.SingleNoteView = SingleNoteView;
})(this);
