_.templateSettings = {
  evaluate: /\{\{(.+?)\}\}/g,
  interpolate: /\{\{=(.+?)\}\}/g
};

var todoTemplate   = _.template( $('#todo-template').html() );
var footerTemplate = _.template( $('#footer-template').html() );
// Don't remove anything above this line ----------------------- //

// adding new item to list - working //
var Item = function (data) {
  var defaults = {
    id: '',
    title: '',
    completed: '',
    checked: ''
  };

  return _.extend(defaults, data);
};

// submit using enter button - working //
$('#new-todo').keydown(function(event) {
  if (event.keyCode === 13) {
    $('#todo-list').append(todoTemplate(new Item({
      title: $(this).val()
    })));

// check button - working, strike-through somewhat working //
    $(this).val('');
    $('#todo-list').on('click','li input.toggle', function(event){
      $(this).closest('li').toggleClass("completed");
      $('#todo-list').prop('checked', false);
      console.log("Check mark is pressed.");
    });
    console.log("Enter has been pressed.");
  }
});

// toggle all button - partially working //
$('#main').on('click', '#toggle-all', function(event) {
  $('#todo-list').children('li').toggleClass("completed");
  $('.toggle-all').prop('checked', false);
  console.log("Toggle is pressed.");
});

// delete button - working //
$('#todo-list').on('click', 'li button.destroy', function (event) {
  $(this).parent().remove();
  $('#todo-list').prop('checked', false);
  console.log("X mark is pressed.");
});

//counter - not working//
/*
setInterval(function() {
  $('#new-todo').done(function (data) {
    $('#todo-count').text(data.length);
  });
}, 1000);
*/

$('#todoapp footer').html(footerTemplate({
    activeTodoCount: '',
    completedTodos: '',
    completedClass: ''
}));

/*
//These are examples, please remove and replace with your own code
$('#todo-list').append(todoTemplate({
    id: 1,
    title: 'Finish Todo',
    completed: 'completed',
    checked: ''
}));


//These are examples, please remove and replace with your own code
$('#todoapp footer').html(footerTemplate({
    activeTodoCount: 0,
    completedTodos: 0,
    completedClass: 'hide'
}));
*/
