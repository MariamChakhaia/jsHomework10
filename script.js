"use strict";

let input = document.getElementById("filter");
let ulUsers = document.getElementById("result");
let listArrays = [];

async function users() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Page not found");
    }
    let responseData = await response.json();
    responseData.forEach((el) => {
      let li = document.createElement("li");
      li.innerText = `${el.name} (${el.username})`;

      listArrays.push(li);
      ulUsers.appendChild(li);
    });
  } catch (error) {
    console.log(error);
  }
}

users();

function filterUsers(searchItem) {
  listArrays.forEach((el) => {
    if (el.innerText.toLowerCase().includes(searchItem.trim().toLowerCase())) {
      el.classList.remove("active");
    } else {
      el.classList.add("active");
    }
  });
}

input.addEventListener("keyup", function () {
  filterUsers(this.value);
});
