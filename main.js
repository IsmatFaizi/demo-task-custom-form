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

});
