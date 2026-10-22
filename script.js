const screens = {
  feelings: ['Emotion check-in with floating feeling bubbles', 'A little pause. An honest check-in.'],
  journal: ['Triggers entry screen for writing a quick event name', 'Your words. At your own pace.'],
  home: ['Triggers home screen with a reflection calendar and daily stats', 'A place to return to yourself.'],
  insights: ['Triggers insights comparing sleep, sunlight, heart rate variability, and sound levels', 'Make room for the bigger picture.']
};
document.querySelectorAll('[data-screen]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-screen]').forEach(item => {
      item.classList.toggle('active', item === button);
      item.setAttribute('aria-pressed', String(item === button));
    });
    const key = button.dataset.screen;
    const image = document.querySelector('#tour-screen');
    image.src = `assets/${key}.png`;
    image.alt = screens[key][0];
    document.querySelector('#screen-caption').textContent = screens[key][1];
  });
});
document.querySelectorAll('[data-theme]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-theme]').forEach(item => {
      item.classList.toggle('selected', item === button);
      item.setAttribute('aria-pressed', String(item === button));
    });
    const dark = button.dataset.theme === 'dark';
    const image = document.querySelector('#hero-screen');
    image.src = `assets/home${dark ? '-dark' : ''}.png`;
    image.alt = `Triggers ${dark ? 'dark' : 'light'} home screen with a reflection calendar, daily stats, and mascot`;
  });
});
// All three scenes loop automatically. Respect the device accessibility preference.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function syncMotion() {
  document.querySelector('#mascot').src = reducedMotion.matches ? 'assets/mascot-still.png' : 'assets/mascot.gif';
}
syncMotion();
reducedMotion.addEventListener('change', syncMotion);
