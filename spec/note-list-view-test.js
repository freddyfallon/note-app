function ListViewTest() {
  var list = new NoteList();
  var view = new NoteListView(list);
  list.createNote("THIS IS THE FIRST NOTE!!");
  list.createNote("THIS IS THE SECOND NOTE!!!");
  assert.isTrue(view.returnHTMLString().includes("<ul><li><div>THIS IS THE FIRST NO</div></li></ul>"));
  assert.isTrue(view.returnHTMLString().includes("<ul><li><div>THIS IS THE SECOND N</div></li></ul>"));
}

ListViewTest();
