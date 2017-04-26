function ListViewTest() {
  var list = new NoteList();
  var view = new NoteListView(list);
  list.createNote("Hello there guys. My name is Freddy Fallon, and I am v. vibey.");
  list.createNote("Hello there guys. My name is Jessica Rodzz, and I am v. vibey.");
  assert.isTrue(view.returnHTMLString().includes("<li><a href='#notes/0'><div>Hello there guys. My</div></a></li>"));
  assert.isTrue(view.returnHTMLString().includes("<li><a href='#notes/1'><div>Hello there guys. My</div></a></li>"));
}

ListViewTest();
