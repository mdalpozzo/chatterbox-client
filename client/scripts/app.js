// YOUR CODE HERE:
var app = {};

app.init = function () {};

app.send = function(message) {
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    //url: 'https://myAppID:javascript-key=myJavaScriptKey@parse.sfm8.hackreactor.com/chatterbox/classes/messages',

    url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
    type: 'POST',
    data: message,
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  });
};

app.fetch = function (url) {
  $.ajax({
    url: url,
    type: 'GET',
    //data: ,
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      console.log('chatterbox: Failed to send message', data);
    }
  });
};

app.clearMessages = function() {
  $('#chats').children().remove();
};

app.renderMessage = function(message) {
  
  $('#chats').append('<p>' + message.text + '</p>');
};

app.renderRoom = function(room) {
  $('#roomSelect').append('<p>' + room + '</p>');
};

//$('#main').on('click', '.username', app.handleUsernameClick());


app.handleUsernameClick = function() {
  return true;
};


var allMessages;

// var message = {
//   username: 'shawndrost',
//   text: 'trololo',
//   roomname: '4chan'
// };

// $.ajax({
//   // This is the url you should use to communicate with the parse API server.
//   //url: 'https://myAppID:javascript-key=myJavaScriptKey@parse.sfm8.hackreactor.com/chatterbox/classes/messages',

//   url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
//   type: 'POST',
//   data: JSON.stringify(message),
//   contentType: 'application/json',
//   success: function (data) {
//     console.log('chatterbox: Message sent');
//   },
//   error: function (data) {
//     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//     console.error('chatterbox: Failed to send message', data);
//   }
// });

// $.ajax({
//   // This is the url you should use to communicate with the parse API server.
//   //url: 'https://myAppID:javascript-key=myJavaScriptKey@parse.sfm8.hackreactor.com/chatterbox/classes/messages',

//   url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
//   type: 'POST',
//   data: JSON.stringify(message),
//   contentType: 'application/json',
//   success: function (data) {
//     console.log('chatterbox: Message recieved');
//   },
//   error: function (data) {
//     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//     console.error('chatterbox: Failed to send message', data);
//   }
// });


$.ajax({
  // This is the url you should use to communicate with the parse API server.
  //url: 'https://myAppID:javascript-key=myJavaScriptKey@parse.sfm8.hackreactor.com/chatterbox/classes/messages',

  url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
  type: 'GET',
  //data: data,
  contentType: 'application/json',
  success: function (data) {
    //allMessages.push(data);
    allMessages = data.results;
    console.log('chatterbox: Message recieved', data);
  },
  error: function (data) {
    // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
    console.error('chatterbox: Failed to send message', data);
  }
});

// $(document).ready(function() {


//   console.log("IM READY");


//   allMessages.results.forEach(function(message) {

//     $('body').append(message.text);
//   });
// });


// $("body").find("#chats ul").append("<li class='chat'><p class='username'> aaaaa </p></li>");



