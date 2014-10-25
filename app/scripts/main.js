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
// check button - working, strike-through working //
$('#new-todo').keydown(function(event) {
  if (event.keyCode === 13) {
    $('#todo-list').append(todoTemplate(new Item({
      title: $(this).val()
    })));
    $(this).val('');
    $('[type = checkbox]')
      .on('click', function(event){
      $(this).closest("li").toggleClass("completed");
      $('#todo-list').prop('checked', false);
      console.log("Check mark is pressed.");
    });
    console.log("Enter has been pressed.");
  }
});

$('[type = checkbox]')
  .on('click', function(event){
    $(this).closest("li").remove('.view');
    $('#todo-list').prop('checked', false);
    });
    console.log("Delete button was entered.")

// manual addition of items to list - testing item //
/*$('#todo-list').append(todoTemplate({
    id: 1,
    title: 'Test Item',
    completed: '',
    checked: ''
}));

$('#todo-list').append(todoTemplate({
    id: 2,
    title: 'Needed to test the toggle',
    completed: '',
    checked: ''
}));
*/

// toggle all button - not working //
$('.toggle-all')
  .on('click', function(event){
  $(this).closest("li").toggleClass("completed");
  $('.toggle-all').prop('checked', false);
  console.log("Toggle is pressed.");
});

// check button - working, strike-through working //
/*$('[type = checkbox]')
  .on('click', function(event){
  $(this).closest("li").toggleClass("completed");
  $('#todo-list').prop('checked', false);
  console.log("Check mark is pressed.");
});
*/

/* delete button - not working */
$('[type = checkbox]')
  .on('click', 'li button.destroy', function(event){
  $(this).parent().remove("destroy");
  $('#todo-list').prop('checked', false);
  console.log("X mark is pressed.");
});



/*
//These are examples, please remove and replace with your own code
$('#todo-list').append(todoTemplate({
    id: 1,
    title: 'Finish Todo',
    completed: 'completed',
}));


//These are examples, please remove and replace with your own code
$('#todoapp footer').html(footerTemplate({
    activeTodoCount: 0,
    completedTodos: 0,
    completedClass: 'hide'
}));
*/
