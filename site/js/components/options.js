
export function getEl(id) {
  return document.getElementById(id)
}

export let cellSize = 10
export let numEnemies = 1

export let uiConfig = {
  pathHighlight: true,
  gridOverlay: true,
}

export let stage = {
  numVoids: 100,
  voidSize: 3,
  height: 320,
  width: 480
}

export let wall = {
  coords: null,
  x: 0,
  y: 0,
  color: '#000'
}

// Decrease moving entity cellSize for clearance

export let player = {
  coords: null,
  x: 0,
  y: 0,
  speed: 0.3,
  friction: 0.8,
  color: '#41f798',
  logType: 'player',
}

export let enemy = {
  coords: null,
  x: 0,
  y: 0,
  speed: 0.3,
  friction: 0.9,
  color: '#ff6347',
  logType: 'enemy',
}
