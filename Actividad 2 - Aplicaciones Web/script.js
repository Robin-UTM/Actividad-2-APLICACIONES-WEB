function openCalculator() {
    document.getElementById("calculatorModal").style.display = "flex";
  }
  
  function closeCalculator() {
    document.getElementById("calculatorModal").style.display = "none";
  }
  
  function openPdfViewer() {
    document.getElementById("pdfViewerModal").style.display = "flex";
  }
  
  function closePdfViewer() {
    document.getElementById("pdfViewerModal").style.display = "none";
}

function appendToDisplay(value) {
document.calculator.ans.value += value;
}

function clearDisplay() {
document.calculator.ans.value = "";
}

function calculateResult() {
var result = eval(document.calculator.ans.value);
document.calculator.ans.value = result;
}
  