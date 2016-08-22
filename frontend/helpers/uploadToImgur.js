var uploadToIMGUR = function(clientId, imgData, callback) {
  console.log(clientId);
  $.ajax({
    url: 'https://api.imgur.com/3/upload',
    headers: {
      'Authorization': 'Client-ID ' + clientId,
      'Accept': 'application/json'
    },
    type: 'POST',
    data: {
      'image': imgData,
      'type': 'base64'
    },
    success: function success(res) {
      if (callback) {
        console.log(res);
        callback(res.data);
      }
    }
  });
};
window.uploadToIMGUR = uploadToIMGUR;