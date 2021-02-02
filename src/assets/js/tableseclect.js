function selectAllCheckboxes(source, checkboxesName) {
    var checkboxes = document.getElementsByName(checkboxesName);
    for (var i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = source.checked;
    }
  }