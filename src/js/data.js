function listData(root, data) {
  console.log("listing data:");
  console.log(data);
  let pre;
  data.forEach(function (item) {
    pre = document.createElement("pre");
    pre.innerHTML = JSON.stringify(item, undefined, 2);
    root.appendChild(pre)
  });
}

async function fetchFetishes() {
  console.log("Fetching fetishes")
  const fetishes = await fetch('./assets/fetishes.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      return data;
    })
    .catch(error => console.log(error));
  return fetishes;
}

const container = document.getElementById('data_container');

fetchFetishes()
  .then(fetishes => listData(container, fetishes));