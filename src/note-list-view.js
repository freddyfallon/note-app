(function(exports) {
  function NoteListView (noteList) {
    this.noteList = noteList;
  }

  NoteListView.prototype.returnHTMLString = function() {
    allElements = "";
    for (var i = 0; i < this.noteList.noteLog.length; i++) {
      allElements += "<li><div>" + (this.noteList.noteLog[i].text).slice(0, 20) + "</div></li>";
    }
    return "<ul>" + allElements + "</ul>";
  };

  exports.NoteListView = NoteListView;
})(this);
