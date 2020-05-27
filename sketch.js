let data;
let charInput;
let charName;
let charPercent;

function preload() {
  data = loadJSON('characters.json');

  charInput = select('#charInput');
  charName = select('#charName');
  charPercent = select('#charPercent');
}

function setup() {
  noCanvas();
}

function draw() {
  charInput.changed(updateData);
}

function updateData() {

  for (let i = 0; i < data.fighters.length; i++) {
    if (charInput.value() == data.fighters[i].name) {
      charName.html(data.fighters[i].name);
      charPercent.html(data.fighters[i].percent);
    }
  }
}
