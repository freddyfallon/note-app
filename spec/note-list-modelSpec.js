  function testNoteList(){
    var list = new NoteList();
    list.createNote("Favourite food: PIZZA");
    list.createNote("Favourite drink: BEER");
    assert.isTrue(list.getnoteLog().includes("Favourite food: PIZZA"));
    assert.isTrue(list.getnoteLog().includes("Favourite drink: BEER"));
  }

  testNoteList();
