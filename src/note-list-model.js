(function(exports) {
  function NoteList() {
    this.noteLog = [];

  }

  NoteList.prototype.getnoteLog = function () {
    var allElements = "";
    for (var i = 0; i < this.noteLog.length; i++) {
        allElements += this.noteLog[i].text + '\b';
    }
    return allElements;
  };

  NoteList.prototype.createNote = function (string) {
    this.noteLog.push(note = new Note(string));
  };

exports.NoteList = NoteList;
})(this);
