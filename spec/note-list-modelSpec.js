  function testNoteList(){
    var list = new NoteList();
    list.createNote("Favourite food: PIZZA");
    list.createNote("Favourite drink: BEER");
    assert.isTrue(list.getnoteLog().includes("Favourite food: PIZZA"));
    assert.isTrue(list.getnoteLog().includes("Favourite drink: BEER"));
  }

  function testNoteIDUpdate() {
    var list = new NoteList();
    list.createNote('I\'m sleepy');
    list.createNote('Hey guys');
    assert.isTrue(list.noteLog[0].id === 0);
    assert.isTrue(list.noteLog[1].id === 1);
  }

  testNoteIDUpdate();
  testNoteList();
