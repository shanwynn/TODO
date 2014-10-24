_.templateSettings = {
  evaluate: /\{\{(.+?)\}\}/g,
  interpolate: /\{\{=(.+?)\}\}/g
};

var todoTemplate   = _.template( $('#todo-template').html() );
var footerTemplate = _.template( $('#footer-template').html() );
// Don't remove anything above this line ----------------------- //

$('#new-todo').keydown(function(event) {
  if (event.keyCode === 13) {
    $('#new-todo').submit();
    console.log("Enter has been pressed.");
  }
});

$('#todo-list').append(todoTemplate({
    id: 1,
    title: 'Test Item',
    completed: ' ',
    checked: ''
}));

$('[type = checkbox]')
  .on('click', function(event){
  $(this).closest("li").toggleClass("completed");
  $('#todo-list').prop('checked', false);
  console.log("Check mark is pressed.");
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
