function runCode() {
  var editorContent = document.getElementById('editor').innerText;
  var output = document.getElementById('output');
  
  try {
    // Create an iframe to run the code separately
    var iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    
    // Write the code into the iframe
    iframeDoc.open();
    iframeDoc.write(editorContent);
    iframeDoc.close();
    
    // Display the output in the output div
    output.innerHTML = iframeDoc.body.innerHTML;
    
    // Remove the iframe after execution
    document.body.removeChild(iframe);
  } catch (error) {
    output.innerHTML = '<span style="color: red;">Error: ' + error.message + '</span>';
  }
}