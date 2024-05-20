let StartFunc = () => {
  var $table = $("#table");
  var JVarLocalArray = $.map(
    $table.bootstrapTable("getSelections"),
    function (row) {
      console.log(row);
      return {
        FK: row.FK,
        deliveryItemDescription: jFLocalDescription()
      };
    }
  );
  return JVarLocalArray[0];
};


let jFLocalDescription = () => {
  let jVarLocalDescription = "Description";
  let jVarLocalHtmlId = document.getElementById(jVarLocalDescription);

  if ((jVarLocalHtmlId === null) === false) {
    return jVarLocalHtmlId.value.trim();
  }
};


export { StartFunc };
