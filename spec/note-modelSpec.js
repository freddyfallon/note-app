function testNote() {
    var note = new Note("I love quotes");
    assert.isTrue(note.getText() === "I love quotes");
 }

  testNote();
