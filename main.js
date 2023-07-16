$(document).ready(function () {
  // Function to add a new text field
  $("#add-text-field").on("click", function () {
    let fieldName = prompt("Enter a name for the text field:");
    let newField = `<div id="field-${fieldName}"><label for="text-${fieldName}">${fieldName}:</label><input type="text" id="text-${fieldName}" name="${fieldName}"/></div>`;
    $("#form-fields").append(newField);
  });
});
