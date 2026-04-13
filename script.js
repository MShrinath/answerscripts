// Optional: dynamically change PDF if needed

function loadPDF(fileName) {
  const viewer = document.getElementById("pdfViewer");
  viewer.src = "assets/" + fileName;
}

// Example usage:
// loadPDF("another.pdf");