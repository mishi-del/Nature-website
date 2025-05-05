const api = "https://mishi-del.github.io/random-images-API/index.json";

async function getApi(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data); 

    let img = "";
    data.forEach(element => {
      img += `
        <div class="col">
          <div class="card h-100 shadow-sm">
            <img src="${element.image_url}" class="card-img-top" alt="Nature Image">
            <div class="card-body">
              <h5 class="card-title">ID: ${element.image_id}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Category: ${element.image_category}</h6>
              <p class="card-text">${element.image_description}</p>
              <a href="${element.image_url}" target="_blank" class="btn btn-warning">Download</a>
            </div>
          </div>
        </div>
      `;
    });

    document.getElementById("card-container").innerHTML = img;

  } catch (error) {
    console.error("Error fetching API:", error);
    document.getElementById("card-container").innerHTML = `<p class="text-danger">Failed to load images.</p>`;
  }
}

getApi(api);
