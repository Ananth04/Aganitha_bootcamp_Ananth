const addParagraphButton = document.getElementById("addParagraphButton");
const paragraphContainer = document.getElementById("paragraphContainer");

function addParagraph() {
  const newParagraph = document.createElement("p");
  const paragraphText = document.createTextNode("This is a new paragraph.\n");
  newParagraph.appendChild(paragraphText);
  paragraphContainer.appendChild(newParagraph);
}

addParagraphButton.addEventListener("click", addParagraph);
