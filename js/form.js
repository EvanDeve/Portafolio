document.getElementById("forma").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevents traditional submission
    
    const formData = new FormData(this);
    
    // Sends data to Netlify
    fetch("/", {
      method: "POST",
      body: new URLSearchParams(formData).toString(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then(() => {
      // Shows the modal
      const modal = document.getElementById("modal-exito");
      modal.style.display = "block";
      
      // Hides the modal after 3 seconds
      setTimeout(() => {
        modal.style.display = "none";
      }, 3000);
      
      // Optional: Reset the form
      this.reset();
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("There was an error submitting the form. Please try again.");
    });
  });