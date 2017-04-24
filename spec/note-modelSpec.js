(function(exports) {
  function testNoteQuoteToIncludeNoteLog() {
    var note = new Note();

    if (note.text !== "I love quotes!") {
       throw new Error("Error, note log does not exist");
   }

   if (note.getText == "I love quotes!") {
     throw new Error("Error, getText is not returning the right note!");
   }
 }


  testNoteQuoteToIncludeNoteLog();
  })(this);
