import app from "/scripts/index.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

const db = getFirestore(app);

//Element Form
const taskForm = document.getElementById("task-form");
const taskTitle = document.getElementById("task-title");
const taskDes = document.getElementById("task-description"); 

const saveTask = (title, description) =>
    addDoc(collection(db, "tasks"),{
        title, 
        description,
    });

taskForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const title = taskTitle.value;
    const description = taskDes.value;
    console.log(title, description);

    await saveTask(title, description);

    taskForm.reset();
    taskTitle.focus();
});
