var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var roomname = RoomsView.$select.val();
    var text = event.target.message.value;
    let username = App.username;
    var message = {
      username,
      text,
      roomname
    };
    Parse.create(message, () => {
      location.reload();
    });

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};