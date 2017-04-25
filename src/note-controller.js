(function(exports) {
  function NoteController(noteList) {
    this.noteListView = new NoteListView(noteList);
  }

NoteController.prototype.addNote = function(text) {
  this.noteListView.noteList.createNote(text);
};

NoteController.prototype.sendToIndex = function() {
  document.getElementById('note-list').innerHTML = this.noteListView.returnHTMLString();
};

exports.NoteController = NoteController;

})(this);
