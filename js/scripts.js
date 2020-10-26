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

  ////////// INLINER /////////////

  function inliner() {

    var rules;
    for (var i = document.styleSheets.length - 1; i >= 0; i--) {
      if (document.styleSheets[i].cssRules)
        rules = document.styleSheets[i].cssRules;
      else if (document.styleSheets[i].rules)
        rules = document.styleSheets[i].rules;
      for (var idx = 0, len = rules.length; idx < len; idx++) {
        if (rules[idx].selectorText.indexOf("hover") == -1) {
          $(rules[idx].selectorText).each(function (i, elem) {
            elem.style.cssText = rules[idx].style.cssText + elem.style.cssText;
          });
        }
      }
    }
      $('style').remove();
      $('script').remove();
      $('link').remove();
  }

  ////////// CONTROLS ///////////////
  
  $('.one_third').click(function () {
    remove(this.id);
  });

  $('.undo').click(function () {
    add();
  });

  $('.save').click(function () {
    inliner();
  });

});