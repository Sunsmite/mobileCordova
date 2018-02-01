document.getElementById("showGallery").onclick = showGallery;
var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
		document.getElementById("btnTakePhoto").onclick = function() 
		{
			navigator.camera.getPicture(function(imageUri) {
				var lastPhotoContainer = document.getElementById("lastPhoto");
				
				alert("Looking good!");
				
				lastPhotoContainer.innerHTML ="<img src='" + imageUri +"' style='width:75%;' />";
			}, null, null);
		};
function showGallery() {
  srcType = Camera.PictureSourceType.SAVEDPHOTOALBUM;
  options = setOptions(srcType);
  getImage();
}
function getImage(selection) {
  navigator.camera.getPicture(function cameraSuccess(imageUri) {
    displayImage(imageUri);
  }, function cameraError(error) {
    console.debug("Unable to obtain picture: " + error, "app");
  }, options);
}
function setOptions(srcType) {
    var options = {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI,
        // In this app, dynamically set the picture source, Camera or photo gallery
        sourceType: srcType,
        encodingType: Camera.EncodingType.JPEG,
        mediaType: Camera.MediaType.PICTURE,
        correctOrientation: true  //Corrects Android orientation quirks
    }
    return options;
}
app.initialize();