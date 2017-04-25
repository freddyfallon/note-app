(function(exports) {
  function testNote() {
    var note = new Note();
    assert.isTrue(note.getText() === "I love quotes");
 }

  testNote();
  })(this);
