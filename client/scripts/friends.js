var Friends = {
  friends: {},
  testFunction: function(node) {
    var name = node.innerText;
    var nodes = document.getElementsByClassName(name);
    if (this.friends[name] !== undefined) {
      delete this.friends[name];
      for (let node of nodes) {
        $(node).removeClass('buddy');
      }
    } else {
      this.friends[name] = name;
      for (let node of nodes) {
        $(node).addClass('buddy');
      }
    }
  }
};

