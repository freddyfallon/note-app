(function(exports) {
  function NoteController(noteList) {
    this.noteListView = new NoteListView(noteList);
  }

NoteController.prototype.sendToIndex = function() {
  document.getElementById('note-list').innerHTML = this.noteListView.returnHTMLString();
};

exports.NoteController = NoteController;

})(this);
