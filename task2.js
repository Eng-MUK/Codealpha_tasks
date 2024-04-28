function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var li = document.createElement("li");
        li.textContent = taskInput.value;
        taskList.appendChild(li);
        taskInput.value = "";

        // Add event listener to remove task on click
        li.addEventListener("click", function() {
            this.remove();
        });
    } else {
        alert("Please enter a task!");
    }
}
