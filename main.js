$(document).ready(function () {
  let fieldCounter = 0;

  // Function to add a new text field
  $("#add-text-field").on("click", function () {
    fieldCounter++;
    let fieldName = prompt("Enter a name for the text field:");
    let newField = `<div id="field-${fieldCounter}">
    <label for="text-${fieldCounter}">${fieldName}:</label>
    <input type="text" id="text-${fieldCounter}" name="${fieldName}"/>
    <button class="remove" data-field="field-${fieldCounter}">Remove</button>
    </div>`;
    $("#form-fields").append(newField);
  });

  // Function to add new select field
  $("#add-select-field").on("click", function () {
    fieldCounter++;
    let fieldName = prompt("Enter a name for the select field:");
    let optionString = prompt(
      "Enter the options for the select field, separated by commas:"
    );
    let options = optionString.split(",");
    let newField = `<div id="field-${fieldCounter}">
    <label for="select-${fieldCounter}">${fieldName}:</label>
    <select id="select-${fieldCounter}" name="${fieldName}">${options.map(
      (option) => `<option value="${option}">${option}</option>`
    )}</select>
    <button class="remove" data-field="field-${fieldCounter}">Remove</button>
    </div>`;

    $("#form-fields").append(newField);
  });
});
