(function(exports) {
  function NoteList() {
    this.noteLog = [];

  }

  NoteList.prototype.getnoteLog = function () {
    allElements = "";
    for (var i = 0; i < this.noteLog.length; i++) {
        allElements += this.noteLog[i] + '\b';
    }
    return allElements;
  };

  NoteList.prototype.createNote = function (note) {
    this.noteLog.push(note);
  };

exports.NoteList = NoteList;
})(this);
