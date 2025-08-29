let convertedBlob = null;

function convertPDF() {
  const fileInput = document.getElementById("pdfFile");
  const status = document.getElementById("status");
  const downloadBtn = document.getElementById("downloadBtn");

  if (!fileInput.files.length) {
    alert("Please select a PDF file first.");
    return;
  }

  const file = fileInput.files[0];
  status.textContent = "Converting... (mock conversion)";

  // 🔹 In a real app you’d call a backend API here
  // For demo: just create fake Word file
  setTimeout(() => {
    convertedBlob = new Blob(
      ["This is a mock DOCX file converted from: " + file.name],
      { type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" }
    );
    status.textContent = "Conversion complete! You can now download.";
    downloadBtn.disabled = false;
  }, 2000);
}

function downloadDocx() {
  if (!convertedBlob) return;
  const link = document.createElement("a");
  link.href = URL.createObjectURL(convertedBlob);
  link.download = "converted.docx";
  link.click();
}
