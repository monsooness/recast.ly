var searchYouTube = (options, callback) => {
  
  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data:{
      key: options.key,
      part: 'snippet',
      q: options.query,
      maxResults: options.max,
      type: 'video',
      videoEmeddable: 'true'
    },
    contentType: 'application/json',
    success: function (data) {
      console.log('videos sent');
      callback(data.items);
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('no video received');
    }
  });
};

window.searchYouTube = searchYouTube;


