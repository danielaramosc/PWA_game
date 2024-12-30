const OPPONENT_HEIGHT = 5,
    OPPONENT_PICTURE = "assets/opponent.png",
    OPPONENT_PICTURE_DEAD = "assets/opponent_dead.png",
    OPPONENT_SPEED = 5,
    OPPONENT_WIDTH = 5,
    GAME_OVER_PICTURE = "assets/game_over.png",
    KEY_LEFT = "LEFT",
    KEY_RIGHT = "RIGHT",
    KEY_SHOOT = "SHOOT",
    MIN_TOUCHMOVE = 20,
    PLAYER_HEIGHT = 5,
    PLAYER_PICTURE = "assets/player.png",
    PLAYER_PICTURE_DEAD = "assets/player_dead.png",
    PLAYER_SPEED = 20,
    PLAYER_WIDTH = 5,
    PLAYER_LIVES = 3, 
    SHOT_HEIGHT = 1.5,
    SHOT_SPEED = 20,
    SHOT_PICTURE_PLAYER = "assets/shot1.png",
    SHOT_PICTURE_OPPONENT = "assets/shot2.png",
    SHOT_WIDTH = 1.5;

function getRandomNumber (range) {
    return Math.floor(Math.random() * range);
}

function collision (div1, div2) {
    const a = div1.getBoundingClientRect(),
        b = div2.getBoundingClientRect();
    return !(a.bottom < b.top || a.top > b.bottom || a.right < b.left || a.left > b.right);

}
var game;
document.addEventListener("DOMContentLoaded", () => {
        game = new Game();
        game.start();
    }
);


//STEP 2
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('Service Worker registered successfully:', registration);
      })
      .catch(error => {
        console.error('Error registering Service Worker:', error);
      });
  }



  //STEP 4
  document.addEventListener('DOMContentLoaded', () => {
    let deferredPrompt;
    const installButton = document.getElementById('installButton');
  
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      deferredPrompt = e;
      installButton.style.display = 'block'; 
  
      installButton.addEventListener('click', () => {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted installation');
          } else {
            console.log('User declined installation');
          }
          deferredPrompt = null;
        });
      });
    });
  });
  



