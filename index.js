function displayTripIdeas(response) {
  new Typewriter("#generator-output", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateTripIdeas(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#search-input");
  let apiKey = "4f9f36e261a3705eo07b4a98ct5b3f15";
  let prompt = `Generate 5 trip ideas based on ${instructionsInput.value}`;
  let context =
    "You are a world traveller and have a huge amount of knowledge of travel and the best destinations to visit. Your mission is the provide the best recommendations based on what the client is looking for. Only give 5 recommendations maximum. Use emojis in the answer to make it more visual and space out the answer clearly in a list format please. Don't say Sure! at the start";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let tripIdeasElement = document.querySelector("#generator-output");
  tripIdeasElement.classList.remove("hidden");
  tripIdeasElement.innerHTML = `<div class ="loader"></div><span class ="loader-text">Generating your dream trip...</span>`;

  axios.get(apiUrl).then(displayTripIdeas);
}

let tripIdeasForm = document.querySelector("#trip-ideas-form");
tripIdeasForm.addEventListener("submit", generateTripIdeas);
