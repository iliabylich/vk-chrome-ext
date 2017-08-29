var durationElement = document.querySelector('.audio_page_player_duration');
var duration = '';

if (durationElement !== null) {
  duration = durationElement.textContent;
}

var songTitle = document
  .querySelector('.top_audio_player_title')
  .textContent
  .replace(/\s+/g, ' ')
  .trim();

var song = [duration, songTitle].join(' - ');

var response = { song: song };

response
