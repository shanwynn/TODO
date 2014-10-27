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
    $(this).val('');

// check button - working, strike-through working //
    $('#todo-list').on('click','li input.toggle', function (event){
      $(this).closest('li').toggleClass("completed");
      $('#todo-list').prop('checked', false);
      console.log("Check mark is pressed.");
    });
    console.log("Enter has been pressed.");
  }
});

// toggle all button - partially working //
$('#main').on('click', '#toggle-all', function (event) {
  $('#todo-list li').toggleClass("completed");
  console.log("Toggle is pressed.");
});

// delete button - working //
$('#todo-list').on('click', 'li button.destroy', function (event) {
  $(this).parent().remove();
  $('#todo-list').prop('checked', false);
  console.log("X mark is pressed.");
});

//Number of items left - partially working//
//Clear completed items button appearing - partially working//
setInterval(function() {
  var itemsActive = $('#todo-list li').not('.completed').length;
  var itemsCompleted = $('#todo-list li.completed').length;
  var ifCompleted = '';
  if(itemsCompleted === 0) {
    ifCompleted = 'hide';
}

//Clear completed items button - not working//
$('#clear-completed').on('click', 'li button.completedTodos', function (event) {
  $(this).parent().remove();
});

$('#todoapp footer').html(footerTemplate({
    activeTodoCount: itemsActive,
    completedTodos: itemsCompleted,
    completedClass: ifCompleted
  }));
}, 1000);

//All items - working//
$('#todoapp footer').on('click', 'li a.all', function (event) {
  var allItems = $('#todo-list li');
  $(allItems).show();
  console.log('all items');
});

//Active items - working//


$('#todoapp footer').on('click', 'li a.active', function (event) {
  var completedTodos = $('#todo-list li.completed');
  var activeTodos = $('#todo-list li');
  $(activeTodos).not('.completed').show();
  $(completedTodos).hide();
  console.log('items active');
});

//Completed items - working//
$('#todoapp footer').on('click', 'li a.completed', function (event) {
  var activeTodos = $('#todo-list li');
  var completedTodos = $('#todo-list li.completed');
  $(activeTodos).not('.completed').hide();
  $(completedTodos).show();
  console.log('items completed');
});


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
