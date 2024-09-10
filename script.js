document.getElementById("addRecordButton").addEventListener("click", addRecord);

function addRecord() {
    //TODO: make validation to input field
    //get value from inputs
    var teamName = document.getElementById("teamID").value;
    var description = document.getElementById("description").value;

    console.log(teamName);
    console.log(description);

    var recordDiv = document.createElement("div");

    // create new record container
    var teamIDDiv = document.createElement("div");
    var descriptionDiv = document.createElement("div");
    var statusDiv = document.createElement("div");

    recordDiv.className="row"
    teamIDDiv.textContent = teamName
    teamIDDiv.className="cell"
    descriptionDiv.textContent = description
    descriptionDiv.className="cell"
    statusDiv.textContent = "Created"
    statusDiv.className = "cell"

    setTimeout(() => {
        recordDiv.appendChild(teamIDDiv);
        recordDiv.appendChild(descriptionDiv);
        recordDiv.appendChild(statusDiv);
    }, 1000)

    document.getElementById("recordsContainer").appendChild(recordDiv);
}