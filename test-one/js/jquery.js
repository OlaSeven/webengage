$(window).scroll(function () {
    if ($(document).scrollTop() >= $(document).height() / 5)
        $("#spopup").show("slow"); else $("#spopup").hide("slow");
});
function closeSPopup() {
    $('#spopup').hide('slow');
}

// copy
// debugger;
function copyToClipboard(elementId) {

    // Create a "hidden" input
    var aux = document.createElement("input");
  
    // Assign it the value of the specified element
    aux.setAttribute("value", document.getElementById(elementId).innerHTML);
  
    // Append it to the body
    document.body.appendChild(aux);
  
    // Highlight its content
    aux.select();
  
    // Copy the highlighted text
    document.execCommand("copy");
  
    // Remove it from the body
    document.body.removeChild(aux);
  
  }