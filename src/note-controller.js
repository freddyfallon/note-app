(function(exports) {
  function NoteController(noteList) {
    this.noteListView = new NoteListView(noteList);
    this.el = document.getElementById('note-list');
  }

NoteController.prototype.sendToIndex = function() {
  document.getElementById('note-list').innerHTML = this.noteListView.returnHTMLString();
};

exports.NoteController = NoteController;

})(this);
