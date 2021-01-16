var MessagesView = {

  $chats: $('#chats'),
  nodes: [],

  initialize: function(messages) {
    //converts list to dom nodesF
    var list = messages.map( (value) => {
      const { text, username } = value;
      return MessageView.render({ text, username });
    });
    MessagesView.render(list.join(''));
  },

  render: function(list) {
    MessagesView.$chats.empty();
    this.$chats.html(list);

  },

  filter: function(roomname) {

    var filtered = roomname === 'general' ? Messages.messages : Messages.messages.filter( (message) => {
      if (message.roomname) {
        if (message.roomname === roomname) {
          return message;
        }
      }
    });

    this.initialize(filtered);
  }
};