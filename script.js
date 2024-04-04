var result = fetch("https://restcountries.com/v3.1/all")
result.then((data) => data.json())
    .then((data1) => sample(data1))

// CARD CREATION
var container = document.createElement("div")
container.className = "container"

var row = document.createElement("div")
row.className = "row"

function sample(data1) {
    for (i = 0; i < data1.length; i++) {
        var col = document.createElement("div")
        col.className = "col-md-4"
        col.innerHTML = `<div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title" style="text-align:center">Country Name: ${data1[i].name.common}</h5>
          <img src="${data1[i].flags.png}" class="card-img-top" alt="..." style="height:100px">
          <p class="card-text" style="text-align:center">Capital: ${data1[i].capital}</p>
          <p class="card-text" style="text-align:center">Region: ${data1[i].region}</p>
          <a href="#" class="btn btn-primary">View Weather</a>
        </div>
      </div>`;

        row.append(col)
    }
    container.append(row)
    document.body.append(container)
}
