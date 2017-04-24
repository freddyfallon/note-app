(function(exports) {
  function testNoteListToInclueEmptyArray(){
    var list = new NoteList();

    if(list.noteLog.length !== 0) {
      throw new Error("Error, note log does not exist");
    }
  }

testNoteListToInclueEmptyArray();
})(this);
