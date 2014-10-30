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
    $('#todo-list').on('click', 'li input.toggle', function (event){
      $(this).closest('li').toggleClass("completed");
    });
  }
});

// toggle all button - working //
$('#toggle-all').click(function() {
  if ($('li').hasClass( "completed" ) === true) {
  $('li').removeClass( "completed" );
  $('.toggle').prop('checked', false);
}else{
  $('li').addClass("completed");
  $('.toggle').prop('checked', true);
  }
});

// delete button - working //
$('#todo-list').on('click', 'li button.destroy', function (event) {
  $(this).parent().remove();
});

//Number of items left - working//
//Clear completed items button appearing - working//
setInterval(function() {
  var itemsActive = $('#todo-list li').not('.completed').length;
  var itemsCompleted = $('#todo-list li.completed').length;
  var ifCompleted = '';
  if(itemsCompleted === 0) {
    ifCompleted = 'hide';
}

//Clear completed items button - not working//
$('#todoapp footer').on('click', 'li a.completed', function (event) {
  var completedTodos=$('#todo-list li.completed');
  $(completedTodos).removeClass('.completed');
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
});

//Active items - working//


$('#todoapp footer').on('click', 'li a.active', function (event) {
  var completedTodos = $('#todo-list li.completed');
  var activeTodos = $('#todo-list li');
  $(activeTodos).not('.completed').show();
  $(completedTodos).hide();
});

//Completed items - working//
$('#todoapp footer').on('click', 'li a.completed', function (event) {
  var activeTodos = $('#todo-list li');
  var completedTodos = $('#todo-list li.completed');
  $(activeTodos).not('.completed').hide();
  $(completedTodos).show();
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
