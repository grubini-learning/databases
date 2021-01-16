var MessageView = {
  render: _.template(`<div class="chat">
  <div class="<isFriend ? 'buddy username' : 'username'%><%- username%>" onClick="Friends.testFunction(event.target)"><%- username%></div>
  <div><%- text%></div>
  </div>`)
};
// class="<%= friend ? 'friend username' : 'username'%>"