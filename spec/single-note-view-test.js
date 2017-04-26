function SingleNoteViewTest() {
  var note = new Note('hi guys');
  var singleNoteView = new SingleNoteView(note);
  assert.isTrue(singleNoteView.returnHTMLString().includes('<div>hi guys</div>'));
}

SingleNoteViewTest();