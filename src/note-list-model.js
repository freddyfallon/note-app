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
    if (this.noteLog.length === 0) {
      var id = 0;
    } else {
      var id = this.noteLog[this.noteLog.length-1].id + 1;
    }
    this.noteLog.push(note = new Note(string));
    note.setId(id);
  };



exports.NoteList = NoteList;
})(this);
