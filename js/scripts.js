$(function () {
  var Memory = [];

  function remove(idName) {
    console.log(this.idName);
    Memory.push(idName);
    $(`#${idName}`).hide();
    console.log(Memory);
  }

  function add(){
    // idName = Memory[Memory.length-1];
    $(`#${Memory[Memory.length - 1]}`).show();
    Memory.pop();
    console.log(Memory);
  }

  $('.one_third').click(function () {
    remove(this.id);
  });

  $('.undo').click(function () {
    add();
  });

});