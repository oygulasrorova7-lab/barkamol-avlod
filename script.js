let completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];

const buttons = document.querySelectorAll(".task button");

function updateProgress() {
    buttons.forEach((button, index) => {
        if (completedTasks.includes(index)) {
            button.classList.add("done");
            button.textContent = "✓ Bajarildi";
        } else {
            button.classList.remove("done");
            button.textContent = "Bajarildi";
        }
    });

    const count = completedTasks.length;
    const percent = (count / buttons.length) * 100;

    document.getElementById("progressText").textContent =
        count + " / " + buttons.length;

    document.getElementById("progressFill").style.width =
        percent + "%";
}

function completeTask(button) {
    const index = Array.from(buttons).indexOf(button);

    if (completedTasks.includes(index)) {
        completedTasks = completedTasks.filter(item => item !== index);
    } else {
        completedTasks.push(index);
    }

    localStorage.setItem(
        "completedTasks",
        JSON.stringify(completedTasks)
    );

    updateProgress();
}

updateProgress();