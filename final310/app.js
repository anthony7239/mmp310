var tag = document.createElement('script');
tag.src = "http://www.youtube.com/iframe_api";
var firstTagScript = document.getElementsByTagName('script')[0];
firstTagScript.parentNode.insertBefore(tag, firstTagScript);


var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '390',
      width: '640',
        playerVars: {
            listType: 'playlist',
            list: ''
        },
      events: {
        'onReady': onPlayerReady
      }
    });
}

function onPlayerReady(event) {
	document.getElementById('play').addEventListener('click', function() {
		player.playVideo();
	});
    document.getElementById('pause').addEventListener('click', function() {
		player.pauseVideo();
	});
	document.getElementById('stop').addEventListener('click', function() {
		player.stopVideo();
	});
}

var buttons = document.getElementsByClassName('genre');
for (let i = 0; i < buttons.length; i++) {
    let btn = buttons[i];
    btn.onclick = function() {
        player.loadPlaylist({
            list: btn.dataset.list,
            listType: 'playlist'
        });    
    };
}
