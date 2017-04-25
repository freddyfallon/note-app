function singleNoteViewTest() {
  var note = new Note("Hello");
  var singleNote = new SingleNoteView(note);
  assert.isTrue(singleNote.viewNote().includes("<ul><li><div>Hello</div></li></ul>"));
}
singleNoteViewTest()
