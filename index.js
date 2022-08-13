const apiUrl = 'https://raw.githubusercontent.com/epsilon-ux/code-challenge-resources/main/cookies.json';

async function fetchData() {
  let response = await fetch(apiUrl);
  if (response.status == 200) {
    let data = await response.json();

    let item = '';
    data.cookies.forEach((element) => {
      item += `<tr>`;
      item += `<td> ${element.name} </td>`;
      item += `<td> ${element.price} </td>`;
      item += `<td> ${element.category} </td></tr>`;
    });

    document.getElementById('data').innerHTML = item;
  }
  
}

fetchData();