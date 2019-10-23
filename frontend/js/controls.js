const updateFormElement = document.querySelector("#update-form");

function updateForm() {
  updateFormElement.BPM.value = currentLoop.BPM;
  updateFormElement.name.value = currentLoop.name;
  updateFormElement.bars.value = currentLoop.bars;
}

updateFormElement.addEventListener("submit", e => {
  e.preventDefault();

  const contentBody = {
    name: updateFormElement.name.value,
    BPM: updateFormElement.BPM.value,
    bars: updateFormElement.bars.value
  };
  const content = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify(contentBody)
  };
  fetch(LOOP_URL(currentLoop.id), content)
    .then(e => e.json())
    .then(e => {
      currentLoop.BPM = e.BPM;
      currentLoop.bars = e.bars;
      currentLoop.updateNotesLength();
      beatIndex = 0;
      startLooper();
    });
});
