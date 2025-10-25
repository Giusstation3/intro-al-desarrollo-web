function addAlbumResponse(container, data) {
  const card = document.createElement("div");
  card.className = "card border-0 shadow-lg text-white bg-dark text-center mb-3";
  card.style.maxWidth = "350px";
  card.style.borderRadius = "24px";
  card.style.overflow = "hidden";
  const followerCount = data.followers?.total ?? 0;

  const img = document.createElement("img");
  img.src = data.images?.[0]?.url || "";
  img.alt = `Artist portrait for ${data.name}`;
  img.className = "w-100";
  img.style.objectFit = "cover";
  img.style.height = "260px";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  const title = document.createElement("h5");
  title.className = "card-title";
  title.textContent = data.name;

  const artist = document.createElement("p");
  artist.className = "card-text";
  artist.innerHTML = `<small class="text-white-50 text-uppercase">Followers</small><br>${followerCount.toLocaleString()}`;

  const genres = document.createElement("p");
  genres.className = "card-text text-white-50";
  const genreList =
    data.genres && data.genres.length > 0
      ? data.genres.slice(0, 4).join(", ")
      : "No genres available";
  genres.textContent = genreList;

  const popularity = document.createElement("p");
  popularity.className = "card-text text-white";
  popularity.innerHTML = `<small class="text-white-50 text-uppercase">Popularity</small><br>${data.popularity ?? "N/A"}`;

  cardBody.append(title, artist, genres, popularity);
  card.append(img, cardBody);
  container.appendChild(card);
}

function addHTMLAlbumResponse(container, data) {
  const genres =
    data.genres && data.genres.length > 0
      ? data.genres.slice(0, 4).join(", ")
      : "No genres available";
  const followerCount = data.followers?.total ?? 0;

  const outputHTML = `<div class="card border-0 shadow-lg text-white bg-dark text-center mb-3" style="max-width: 350px; border-radius: 24px; overflow: hidden">
      <img
        src="${data.images?.[0]?.url || ""}"
        alt="Artist portrait for ${data.name}"
        class="w-100"
        style="object-fit: cover; height: 260px"
      />
      <div class="card-body">
        <h5 class="card-title fw-bold">${data.name}</h5>
        <p class="card-text mb-2">
          <small class="text-white-50 text-uppercase">Followers</small><br />
          ${followerCount.toLocaleString()}
        </p>
        <p class="card-text text-white-50 mb-2">${genres}</p>
        <p class="card-text mb-0">
          <small class="text-white-50 text-uppercase">Popularity</small><br />
          ${data.popularity ?? "N/A"}
        </p>
      </div>
    </div>`;
  container.innerHTML = outputHTML;
}

async function ejecutaFuncion() {
  const token = document.getElementById("token").value.trim(); // ABC
  const artistId = document.getElementById("artist-id").value.trim();

  const container = document.getElementById("artist-info");
  container.innerHTML = "<p>Hola</p><p>Mundo</p>";

  const parrafo = document.createElement("p");
  parrafo.textContent = "Loading...";
  container.appendChild(parrafo);

  try {
    const response = await fetch(
      "https://api.spotify.com/v1/artists/" + artistId,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    container.innerHTML = ""; // Clear loading
    // addAlbumResponse(container, data); -> modificando el DOM
    addHTMLAlbumResponse(container, data); // -> usando innerHTML
  } catch (err) {
    container.innerHTML = "";
    const error = document.createElement("p");
    error.textContent = err.message;
    error.style.color = "red";
    container.appendChild(error);
  }
}

//-------------------------------------------------------------------------------
// Purpose: Fetch and display Spotify artist information using Spotify Web API
document.getElementById("fetch-btn").addEventListener("click", ejecutaFuncion);
