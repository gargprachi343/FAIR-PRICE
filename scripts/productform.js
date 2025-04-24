document.querySelector('input[type="file"]').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = function(e) {
      document.getElementById('previewImage').src = e.target.result;
      document.getElementById('previewImage').classList.remove('opacity-50');
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  });
  
  document.getElementById("productForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Form submitted!");
  });