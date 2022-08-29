const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);

  fetch("https://url_to_make_request/", {
    method: "POST",
    headers: {
      Authorization: `JWT ${localStorage.getItem("token")}`,
    },
    body: data,
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
