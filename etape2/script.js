"use strict";
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
