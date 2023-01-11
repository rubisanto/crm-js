let form = document.querySelector("#modalForm form");

let addBtn = document.querySelector("#add");
addBtn.addEventListener("click", () => {
  form.querySelector("input[name='nom']").value = "";
  form.querySelector("input[name='prenom']").value = "";
  form.querySelector("input[name='email']").value = "";
  form.querySelector("input[name='id']").value = "";
  openModal("modalForm");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let nom = form.querySelector("input[name='nom']").value;
  let prenom = form.querySelector("input[name='prenom']").value;
  let email = form.querySelector("input[name='email']").value;
  let id = form.querySelector("input[name='id']").value;

  if (id) {
    //update
    let tr = document.querySelector(`#tr-${id}`);
    console.log(tr.children);
    tr.children[0].innerHTML = `${nom} / ${prenom}` // nom / prénom
    tr.children[1].innerHTML = email;
    closeModal("modalForm");
  } else {
    //create
    let id = Math.floor(Math.random() * 1000000);
    let tr = document.createElement("tr");
    tr.classList.add("border");
    tr.classList.add("text-center");
    tr.id = `tr-${id}`;
    tr.innerHTML = 
    `
      <td>${nom} / ${prenom}</td>
      <td>${email}</td>
      <td>
        <button id="btn-update-${id}" class="">Modifier</button>
        <button id="btn-suppr-${id}" class="">Supprimer</button>
      </td>
    `
    document.querySelector("table tbody").appendChild(tr);
    closeModal("modalForm");

    //register event listener
    let btnSuppr = document.querySelector(`#btn-suppr-${id}`);
    let btnUpdate = document.querySelector(`#btn-update-${id}`);

    btnSuppr.addEventListener("click", () => {
      tr.remove();
    });

    btnUpdate.addEventListener("click", () => {
      openModal("modalForm");
      form.querySelector("input[name='nom']").value = nom;
      form.querySelector("input[name='prenom']").value = prenom;
      form.querySelector("input[name='email']").value = email;
      form.querySelector("input[name='id']").value = id;
    });
  }
});