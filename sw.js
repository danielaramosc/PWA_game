const CACHE_NAME = 'shooter-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/Game.js',
  '/Entity.js',
  '/Character.js',
  '/Player.js',
  '/Opponent.js',
  '/Boss.js',
  '/Shot.js',
  '/main.js',
  '/game.css',
  '/assets/boss.png',
  '/assets/boss_dead.png',
  '/assets/game_over.png',
  '/assets/opponent.png',
  '/assets/opponent_dead.png',
  '/assets/player.png',
  '/assets/player_dead.png',
  '/assets/shot1.png',
  '/assets/shot2.png',
  '/assets/you_win.png',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});