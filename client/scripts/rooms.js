var Rooms = {
  rooms: [],
  push: function(messages) {
    for (var current = 0; current < messages.length; current++) {
      if (messages[current]['roomname'] && !Rooms.rooms.includes(messages[current]['roomname'])) {
        Rooms.rooms.push(messages[current]['roomname']);
      }
    }
  },
  createRoom: function(roomname) {
    var message = {
      username:'',
      text: '',
      roomname
    };
    Parse.create(message, () => {
      console.log('successfully created room');
      location.reload();
    });
  }
};