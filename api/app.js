// document ready event
$(document).ready(function() {
	$('#query').on("keypress", function(event){
        if (event.which == 13) {
            var query = this.value;
            var key = "ZVGXIctzBIgb2kxNMyUy1i5CDff7CDHc";
            var url = "http://api.giphy.com/v1/gifs/search?q="
                        + query
                        + "&api_key="
                        + key 
                        + "&limit=20";
            $.getJSON(url, function(json) {
	           console.log(json);
                for (let i = 0; i < json.data.length; i++) {
	               const img = json.data[i];
	               const imgElem = $('<img>')
		              .attr('src', img.images.downsized.url);
                   const imgContainer = $()
	               $('body').append(imgElem);
                }
            });
        }
    });
});