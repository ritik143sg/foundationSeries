const ul = document.querySelectorAll("ul");
const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");

let id = 0;

btn1.addEventListener("click", () => {
  ul[`${btn1.id - 1}`].innerHTML = "";

  S1.map((list) => {
    const li = document.createElement("li");
    li.innerText = `${list.url}`;

    li.addEventListener("click", () => {
      navigator.clipboard
        .writeText(list.magnetLink)
        .then(() => alert(`Copied: ${li.innerText}`))
        .catch((err) => console.error("Failed to copy", err));
    });

    ul[`${btn1.id - 1}`].appendChild(li);
  });

  ul[`${btn2.id - 1}`].innerHTML = "";
  ul[`${btn3.id - 1}`].innerHTML = "";
});

btn2.addEventListener("click", () => {
  ul[`${btn2.id - 1}`].innerHTML = "";

  S2.map((list) => {
    const li = document.createElement("li");
    li.innerText = `${list.url}`;

    li.addEventListener("click", () => {
      navigator.clipboard
        .writeText(list.magnetLink)
        .then(() => alert(`Copied: ${li.innerText}`))
        .catch((err) => console.error("Failed to copy", err));
    });

    ul[`${btn2.id - 1}`].appendChild(li);
  });

  ul[`${btn1.id - 1}`].innerHTML = "";
  ul[`${btn3.id - 1}`].innerHTML = "";
});
btn3.addEventListener("click", () => {
  ul[`${btn3.id - 1}`].innerHTML = "";

  S3.map((list) => {
    const li = document.createElement("li");
    li.innerText = `${list.url}`;

    li.addEventListener("click", () => {
      navigator.clipboard
        .writeText(list.magnetLink)
        .then(() => alert(`Copied: ${li.innerText}`))
        .catch((err) => console.error("Failed to copy", err));
    });

    ul[`${btn3.id - 1}`].appendChild(li);
  });

  ul[`${btn1.id - 1}`].innerHTML = "";
  ul[`${btn2.id - 1}`].innerHTML = "";
});
