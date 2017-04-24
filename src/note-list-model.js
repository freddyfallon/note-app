(function(exports) {
  function NoteList() {
    this.noteLog = [];

  }

  NoteList.prototype.getnoteLog = function () {
    this.noteLog;
  };

  NoteList.prototype.createNote = function () {
    var newNote = new Note();
    newNote.getText(text);
    this.noteLog.push(text);
  };

exports.NoteList = NoteList;
})(this);
