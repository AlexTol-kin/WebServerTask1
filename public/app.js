document.addEventListener("click", (event) => {
  if (event.target.dataset.type === "remove") {
    const id = event.target.dataset.id;

    remove(id).then(() => {
      event.target.closest("li").remove();
    });
  }
});

async function remove(id) {
  await fetch(`/${id}`, {
    method: "DELETE",
  });
}

document.addEventListener("click", (event) => {
  if (event.target.dataset.type === "edit") {
    const newTitle = prompt("Введите новое название", " ").trim();
    const id = event.target.dataset.id;

    if (newTitle.length > 1) {
      update(id, newTitle).then(() => {
        let elem = document.getElementById(id);
        elem.textContent = newTitle;
      });
    }
  }
});

async function update(id, newTitle) {
  await fetch(`/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json;charset=utf-8" },
    body: JSON.stringify({ title: newTitle }),
  });
}
