document.getElementById("saveBtn").addEventListener("click", saveData);

function saveData() {
    const name = document.getElementById("name").value.trim();
    const userId = document.getElementById("userId").value.trim();
    const interest = document.getElementById("interest").value.trim();

    if (name === "" || userId === "" || interest === "") {
        alert("Please fill all fields.");
        return;
    }

    document.getElementById("message").textContent =
        "Data Saved Successfully!";

    console.log("Name:", name);
    console.log("ID:", userId);
    console.log("Interest:", interest);

    // Optional: Clear fields after save
    document.getElementById("name").value = "";
    document.getElementById("userId").value = "";
    document.getElementById("interest").value = "";
}