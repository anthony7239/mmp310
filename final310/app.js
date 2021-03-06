var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstTagScript = document.getElementsByTagName('script')[0];
firstTagScript.parentNode.insertBefore(tag, firstTagScript);


var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: /*'390'*/ '650',
      width: /*'640'*/ '1300',
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

director.onclick = function() {
        const answer = document.getElementsByClassName('option').value;
        if ("director") {
            document.getElementById('directors').style.display = "block";
            document.getElementById('genres').style.display = "none";
        }
};

genre.onclick = function() {
        const answer = document.getElementsByClassName('option').value;
        if ("genre") {
            document.getElementById('genres').style.display = "block";
            document.getElementById('directors').style.display = "none";
        }
};

var buttons = document.getElementsByClassName('director');
for (let i = 0; i < buttons.length; i++) {
    let btn = buttons[i];
    btn.onclick = function() {
        player.loadPlaylist({
            list: btn.dataset.list,
            listType: 'playlist'
        });    
    };
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
