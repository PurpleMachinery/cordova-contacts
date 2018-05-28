var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        this.pickContact();
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        /*var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);*/
    },
    pickContact: function(){
        document.getElementById("PickContact").addEventListener("click", function(){
            alert("funfo");
            navigator.contacts.pickContact(function(contact){
                alert('The following contact has been selected:' + JSON.stringify(contact));
            },function(err){
                alert('Error: ' + err);
            });
            alert("funfo2");
        });
    }
};

app.initialize();