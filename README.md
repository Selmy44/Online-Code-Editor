<!DOCTYPE html>
<html>
<head>
  <title>Online Code Editor</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    #editor {
      width: 80%;
      height: 400px;
      border: 1px solid #ccc;
      margin: 20px auto;
      padding: 10px;
    }
    #output {
      width: 80%;
      height: 200px;
      border: 1px solid #ccc;
      margin: 20px auto;
      padding: 10px;
      overflow-y: auto;
    }
  </style>
</head>
<body>

<div id="editor" contenteditable="true">
  <!-- This is where the user can type their code -->
</div>

<button onclick="runCode()">Run</button>
<div id="output"></div>

<script>
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
</script>

</body>
</html>
