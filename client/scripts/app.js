// YOUR CODE HERE:
var app = {};

app.init = function () {
  $('#main').on('click', '.username', app.handleUsernameClick());
  $('#send .submit').on('submit', app.handleSubmit());

  // get all messages
  
  var allMessages;
  var homePageMessages = 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages';
  
  //allMessages = app.fetch(homePageMessages);

  app.fetch(homePageMessages);
  
  

  

  // var promise1 = new Promise();
  // promise1 = app.fetch(homePageMessages);
  // promise1.done(function() {
  //   allMessages.results.forEach(function(message) {
  //     app.renderMessage(message.text);
  //   });
  //}); 
   
  
 // allMessages.results.forEach(function(message) {
 //    app.renderMessage(message.text);
 //  });

};

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
      //save data 
      allMessages = data;
      
      //iterate through all the data
      allMessages.results.forEach(function(message) {
        // display the data
        app.renderMessage(message.text, message.username);
        
      });

      console.log('chatterbox: Message fetched');
    },
    error: function (data) {
      console.log('chatterbox: Failed to send message', data);
    }
  });
};

app.clearMessages = function() {
  $('#chats').children().remove();
};

app.renderMessage = function(message, username) {
  $('#chats').append('<div class="chat"> <p class="username">' + username + '</p> <p>' + message + '</p></div>');
  //$('#chats').append('<p class="chat">' + message + '</p>');
};

app.renderRoom = function(room) {
  $('#roomSelect').append('<p>' + room + '</p>');
};




app.handleUsernameClick = function() {
  
};

app.handleSubmit = function() {
  app.send(document.getElementById('send').value);
  document.getElementById('send').value = '';
};

app.init();



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


// $.ajax({
//   // This is the url you should use to communicate with the parse API server.
//   //url: 'https://myAppID:javascript-key=myJavaScriptKey@parse.sfm8.hackreactor.com/chatterbox/classes/messages',

//   url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
//   type: 'GET',
//   //data: data,
//   contentType: 'application/json',
//   success: function (data) {
//     //allMessages.push(data);
//     allMessages = data.results;
//     console.log('chatterbox: Message recieved', data);
//   },
//   error: function (data) {
//     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
//     console.error('chatterbox: Failed to send message', data);
//   }
// });

// $(document).ready(function() {


//   console.log("IM READY");


//   allMessages.results.forEach(function(message) {

//     $('body').append(message.text);
//   });
// });


// $("body").find("#chats ul").append("<li class='chat'><p class='username'> aaaaa </p></li>");



