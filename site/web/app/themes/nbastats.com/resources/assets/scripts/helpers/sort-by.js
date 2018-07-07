// Players Filtering
const teamDropdown = $("#team-dropdown");

teamDropdown.on("change", function() {
  // Store selected value to match it with our id
  let selectedValue = $(this).val();

  const defaultOption = document.querySelector("#default-option");
  // Check if the dropdown's default option has text of all teams. If not set it to all teams
  defaultOption && defaultOption.text != "All Teams" ? (defaultOption.text = "All Teams") : false;
  // Get all players rows
  const playerRow = document.getElementsByClassName("playerRow");

  // Loop through all player rows
  for (var i = 0; i < playerRow.length; i++) {
    // Show all players if initial selection is on
    if (selectedValue == "all") {

      $(playerRow[i]).show(2000);

    } else {
      // find if the element's id matches selected value

      let matchFound = playerRow[i].id.match(selectedValue);
      // hide those that return null and show all matches
      matchFound === null ? $(playerRow[i]).hide(1100) : $(playerRow[i]).show(2000);
    }
  }
});