(function(exports) {
  function NoteListView (noteList) {
    this.noteList = noteList;
  }

  NoteListView.prototype.returnHTMLString = function() {
    allElements = "";
    for (var i = 0; i < this.noteList.noteLog.length; i++) {
      allElements += "<ul><li><div>" + this.noteList.noteLog[i] + "</div></li></ul>";
    }
    return allElements;
  };

  exports.NoteListView = NoteListView;
})(this);
