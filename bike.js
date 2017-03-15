var https = require('https');

https.get('https://www.bicing.cat/availability_map/getJsonObject', function(res){
        var body = '';

	    res.on('data', function(chunk){
	        body += chunk;
	    });

	    res.on('end', function(){
	        var stations = JSON.parse(body);
	        console.log("Got a response: ", stations[261]);
	    });
        
    });