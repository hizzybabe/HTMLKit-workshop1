// Function to update profile name
document.getElementById("update-btn").addEventListener("click", function() {
    const nameInput = document.getElementById("nameInput").value;
    const profileName = document.getElementById("profile-name");
    if (nameInput) {
        profileName.textContent = nameInput;
        document.getElementById("nameInput").value = ""; // Clear the input field
    } else {
        alert("Please enter a name!");
    }
});

// Function to add an image to the gallery
document.getElementById("add-img-btn").addEventListener("click", function() {
    const gallery = document.getElementById("gallery");
    const newImage = document.createElement("img");
    newImage.src = "https://via.placeholder.com/150";
    newImage.alt = "Gallery Image";
    newImage.classList.add("gallery-img");
    newImage.style.margin = "5px";
    newImage.style.width = "150px";
    gallery.appendChild(newImage);
});

// Hover effect for images
document.getElementById("gallery").addEventListener("mouseover", function(event) {
    if (event.target.tagName === "IMG") {
        event.target.style.opacity = "0.7";
    }
});

document.getElementById("gallery").addEventListener("mouseout", function(event) {
    if (event.target.tagName === "IMG") {
        event.target.style.opacity = "1";
    }
});