let emoticons = {
    ids: ['64-face-sunglasses', '63-face-glasses',
          '62-face-moustache', '61-face-moustache',
          '60-astonished-face', '58-smiling-face',
          '56-sad-face-closed-eyes', '54-sad-face',
          '53-grinning-face', '50-face-closed-eyes-open-mouth',
          '47-amused-face-closed-eyes', '43-kissing-face',
          '39-face-open-mouth-eyebrows', '35-angry-face-teeth',
          '32-face-stuck-out-tongue', '31-face-stuck-out-tongue',
          '20-sad-face-eyebrows', '11-laughing-face'],
}

let gameColors = ['green', 'green', 'green', 'green',
          'red', 'red', 'red', 'red',
          'blue', 'blue', 'blue', 'blue',
          'magenta', 'magenta', 'magenta', 'magenta',
          'grey-gold', 'grey-gold'];
let hexagons = document.getElementsByClassName('hexagon');
let hexagons__check = document.getElementsByClassName('hexagon__check');

let checkedHexagons = [];

for (var i = 0; i < hexagons__check.length; ++i) {
    hexagons__check[i].addEventListener('change', function(){
        if (this.checked) {
            if (checkedHexagons.length >= 5) {
                checkedHexagons.shift().checked = false;
            }
            checkedHexagons.push(this);
        } else {
            checkedHexagons.splice(checkedHexagons.indexOf(this), 1);
        }
    });
}
let correctEmoticon;

function init() {
    emoticons.ids.sort(function(a, b) { return 0.5 - Math.random();});
    gameColors.sort(function(a, b) { return 0.5 - Math.random();});

    if (correctEmoticon) correctEmoticon.classList.remove('hexagon__found');
    correctEmoticon = hexagons__check[Math.floor(Math.random() * hexagons__check.length)];
    correctEmoticon.classList.add('hexagon__found');
    for (var i = 0; i < 18; ++i) {
        checkedHexagons = [];
        hexagons__check[i].checked = false;
        hexagons[i].classList.remove('hexagon--green', 'hexagon--blue', 'hexagon--red', 'hexagon--magenta', 'hexagon--grey-gold');
        hexagons[i].classList.add('hexagon--' + gameColors[i]);
        hexagons[i].children[1].innerHTML = "<svg class='hexagon__icon--emoticon'><use xlink:href='img/sprite.svg#icon-icon-" + emoticons.ids[i] + "'></use></svg>"
    }
}

init();
document.querySelector('.hexagon__untouch').addEventListener('click', init);
