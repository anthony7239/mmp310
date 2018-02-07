const submitButton = document.getElementById("submit");
const nameInput = document.getElementById("name");
const bioInput = document.getElementById("bio");
const boroughSelect = document.getElementById("borough");

submitButton.onclick = function(event) {
    const message = document.createEvent("p");
    message.textContent = "hello, "
                            + nameInput.value
                            + " from "
                            + boroughSelect.nodeValue               
                            + " welcome to my website.";
    document.body.appendChild(message);
}; 