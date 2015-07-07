'use strict'
$(function () {

  var soundIndex = {
    'Q': 'ThankYou',
    'W': 'Hello',
    'E': 'VeryMuch',
    'R': 'HHH',
    'U': 'Mi',
    'I': 'Fans',
    'O': 'Band',
    'P': 'How',
    'A': 'AreYou',
    'S': 'OK',
    'D': 'And',
    'F': 'VeryHappy',
    'J': 'III',
    'K': 'VeryOK',
    'L': 'Indian',
    ';': 'Oh',
    'SPACE': 'Drummer'
  }

  ion.sound({
    sounds: $.map(soundIndex, function (value, key) {
      return {name: value, preload: true}
    }),
    volume: 0.5,
    path: 'http://7xir1p.com1.z0.glb.clouddn.com/audio/',
    multiplay: true,
    preload: true
  })

  $(document).keydown(function (e) {
    var code = e.keyCode || e.which
    var $key = $('[data-keycode=' + code + ']')
    var key = $key.data('key')
    var lyric = $key.data('lyric')
    $key.addClass('active')

    if (lyric) animateLyrics(lyric)
    if (soundIndex[key]) ion.sound.play(soundIndex[key])
  })

  $(document).keyup(function (e) {
    var code = e.keyCode || e.which
    var $key = $('[data-keycode=' + code + ']')
    $key.removeClass('active')
  })

  function animateLyrics (lyric) {
    $('.animated-lyrics').html('<span class="lyric animated">' + lyric + '</span>')
  }

})
