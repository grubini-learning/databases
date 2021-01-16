var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#roomSelection'),

  initialize: function() {
    RoomsView.render();
    RoomsView.$select.change(RoomsView.onSelectRoom);
    RoomsView.$button.on('click', RoomsView.onNewRoom);
  },

  render: function() {
    var rooms = Rooms.rooms;
    rooms.forEach((room) => {
      const node = RoomView.render(room);
      RoomsView.$select.append(node);
    });
  },
  onSelectRoom: function(event) {
    let roomname = event.target.value;
    MessagesView.filter(roomname);
  },
  onNewRoom: function() {
    var newRoom = $('#newRoom')[0].value;
    Rooms.createRoom(newRoom);
  }

};





