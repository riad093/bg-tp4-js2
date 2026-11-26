"use strict";
let lignes = 0;
let total_points = 0;

// declarer la fonction qui ajouter une ligne dans le tableau
function doInsertRowTable(num, nom, prenom, points) {
  let table = document.querySelector("#table-body");
  let row = document.createElement("tr");
  let cellNum = document.createElement("td");
  cellNum.innerText = num;
  let cellNom = document.createElement("td");
  cellNom.innerText = nom;
  let cellPrenom = document.createElement("td");
  cellPrenom.innerText = prenom;
  let cellPoints = document.createElement("td");
  cellPoints.innerText = points;
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  let cellCheckbox = document.createElement("td");

  cellNum.className = "col_number";
  cellNom.className = "col_text";
  cellPrenom.className = "col_text";
  cellPoints.className = "col_number";
  cellCheckbox.className = "col_checkbox";

  row.appendChild(cellNum);
  row.appendChild(cellNom);
  row.appendChild(cellPrenom);
  row.appendChild(cellPoints);
  cellCheckbox.appendChild(checkbox);
  row.appendChild(cellCheckbox);
  table.appendChild(row);
}

// creé le tableau persons
let persons = [
  { nom: "nom-1", prenom: "prenom-1", points: 5 },
  { nom: "nom-2", prenom: "prenom-2", points: 10 },
  { nom: "nom-3", prenom: "prenom-3", points: 15 },
];

function update_summary() {
  let p1 = document.getElementById("p1");
  let p3 = document.getElementById("p3");

  p1.innerText = lignes + " ligne(s)";
  p3.innerText = "Totale Point(s) = " + total_points;
}

function init() {
  for (let person of persons) {
    doInsert(person.nom, person.prenom, person.points);
  }
}

function doInsert(nom, prenom, points) {
  total_points = total_points + points;
  lignes = lignes + 1;
  update_summary();
  doInsertRowTable(lignes, nom, prenom, points);
}

function doNewData() {
  const elt_nom = document.getElementById("form_nom");
  const elt_prenom = document.getElementById("form_prenom");
  const elt_points = document.getElementById("form_points");

  if (elt_nom.value == "" || elt_prenom.value == "" || Number.isNaN(elt_points.value)) {
    alert("Formulaire incomplet");
    return;
  } else {
    let nom = elt_nom.value;
    let prenom = elt_prenom.value;
    let points = parseInt(elt_points.value);

    doInsert(nom, prenom, points);
    persons.push({ nom: nom, prenom: prenom, points: points });

    elt_nom.value = "";
    elt_prenom.value = "";
    elt_points.value = "";
  }
}

function consoleTable() {
  console.table(persons);
}

// Lancer l'initialisation.
init();
