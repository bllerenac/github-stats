const rand = () => parseInt(Math.random() * 256);

function getColor(language) {
  let currentColors = JSON.parse(localStorage.getItem("languagecolors")) || {};

  if (currentColors[language]) return currentColors[language];

  let color = `rgb(${rand()}, ${rand()}, ${rand()})`;
  currentColors[language] = color;
  localStorage.setItem("languagecolors", JSON.stringify(currentColors));

  return color;
}

export { getColor };
