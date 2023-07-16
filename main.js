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
    <select id="select-${fieldCounter}" name="${fieldName}">
        <option value="" disabled selected>Select an option</option>
        ${options.map(
          (option) => `<option value="${option}">${option}</option>`
        )}
    </select>
    <button class="remove" data-field="field-${fieldCounter}">Remove</button>
    </div>`;

    $("#form-fields").append(newField);
  });

  // Function to remove a field
  $("#dynamic-form").on("click", ".remove", function () {
    let fieldID = $(this).data("field");
    $("#" + fieldID).remove();
  });

  // Function to submit the form
  $("#dynamic-form").on("submit", function (e) {
    e.preventDefault();
    let formData = {};

    // collect form data
    $("#dynamic-form")
      .serializeArray()
      .forEach((field) => {
        formData[field.name] = field.value;
      });

    // create the table
    let table = `<table>
    <tr>
    ${formData.map((field) => `<th>${field}</th>`)}
    </tr>
    </table>`;

    $('#table-container').html(table);
  });
});
