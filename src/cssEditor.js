

var cssEditor = {
  init: function(id){
    var element = document.getElementById(id);
    var val = element.value;
    var newElement = document.createElement("div");
    newElement.id = "cssEditor-" + id;
    newElement.innerHTML = "<button onclick='cssEditor.addRow(event)'> Add new CSS Rule</button>"
    element.parentNode.insertBefore(newElement, element);
    element.style.display = "none";

    var rows = val.split(/\;|\n/);
    console.log(rows);
    for(var i = 0; i < rows.length; i++){
      var x = document.createElement("div");
      x.className = "row";
      x.innerHTML = cssEditor.__getRowMarkup(rows[i]);
      newElement.append(x);
    }
  },
  addRow:function(event){
    var parentNode = event.target.parentNode;
      var x = document.createElement("div");
      x.className = "row";
      x.innerHTML = cssEditor.__getRowMarkup(":");
      parentNode.append(x);
  },
  deleteRow: function(event){
    event.target.parentNode.remove();
    cssEditor.__syncTextArea();
  },
  __syncTextArea: function(id){
    
  },
  __sync: function(event){
    var x = event.target.value;
    event.target.val = x;
    cssEditor.__syncTextArea();
  },
  __getRowMarkup: function(row){
    var vals = row.split(":");
    if(vals.length != 2) return "";

    var markup =// "<div class='row'>"+
        "<input onkeypress='cssEditor.__sync(event)' type='text' class='col1' value='" + vals[0] + "'>"+
        " : " +
        "<input onkeypress='cssEditor.__sync(event)' type='text' class='col2' value='" + vals[1] + "'>"+
        "<button onclick='cssEditor.deleteRow(event)'> &times; </button>"//+
     // "</div>";

    return markup;
  }
}
