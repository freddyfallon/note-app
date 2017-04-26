function noteListTest() {
  function NoteListMock() {};
  function NoteListViewMock() {};
  NoteListViewMock.prototype = {
    list: '<ul><li><div>This is a note!</div></li></ul>'
  };
  var noteList = new NoteListMock();
  var noteListView = new NoteListViewMock();
  var noteController = new NoteController(noteList);
  assert.isTrue(noteController.el.innerHTML, '<ul><li><div>This is a note!</div></li></ul>')
}

noteListTest();