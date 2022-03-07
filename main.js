const reindeerGenerator = function* () {
  const colors = [
    "Blue",
    "Red",
    "Orange",
    "Purple",
    "Goldenrod",
    "Aquamarine",
    "Olive",
    "Azure",
    "Fuchsia",
    "Chocolate",
    "Salmon",
    "Amaranth",
  ];
  let counter = 0;
  while (counter < colors.length) {
    yield (currentColor = colors[counter]);
    counter += 1;
  }
};

const finalVar = reindeerGenerator();
const reindeerFactory = (thisName) => {
  let thisReindeer = Object.create(null, {
    name: {
      enumerable: true,
      value: thisName,
    },
    color: {
      enumerable: true,
      value: finalVar.next().value,
    },
  });
  return thisReindeer;
};

const coloredReindeerBuilder = function () {
  const reindeer = [
    "Dasher",
    "Dancer",
    "Prancer",
    "Vixen",
    "Comet",
    "Cupid",
    "Donner",
    "Blitzen",
  ];
  let coloredReindeer = [];
  for (thisDeer of reindeer) {
    let thisReindeer = reindeerFactory(thisDeer);
    coloredReindeer.push(thisReindeer);
  }
  // Write a for loop that looks at each reindeer
  // Invoke factory function to create reindeer object

  // Put new reindeer object in coloredReindeer array

  return coloredReindeer;
};

const renderReindeer = (reindeerArray) => {
  let reindeerString = "";
  for (let i = 0; i < reindeerArray.length; i++) {
    reindeerString += `<section style="color: ${reindeerArray[i].color}">${reindeerArray[i].name}</section>`;
  }
  return reindeerString;
};

let coloredReindeerID = document.querySelector("#colored-reindeer");
coloredReindeerID.innerHTML = renderReindeer(coloredReindeerBuilder());
