// send request to pets api
async function fetchPets() {
  const url = "https://pets-v2.dev-apis.com/pets";
  const response = await fetch(url);
  const data = await response.json();
  displayPetsInDom(data.pets);
}
// generate cards with response data
fetchPets();

function displayPetsInDom(pets) {
  let pets_cards = "";
  pets.forEach((pet) => (pets_cards += generatePetCard(pet)));
  document.querySelector(".pets-section").innerHTML = pets_cards;
}

function generatePetCard(pet) {
  return `
        <div class="col-3">
            <div class="card">
                <img
                src="${pet.images[0]}"
                alt=""
                class="card-img-top"
                />
                <div class="card-body">
                <div class="card-title">${pet.name}</div>
                <div class="card-text">${pet.description}</div>
                <div class="card-footer">
                    <button class="btn btn-primary">${pet.city}</button>
                </div>
                </div>
            </div>
        </div>

    `;
}
