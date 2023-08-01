const form = document.getElementById("form");
const input = document.getElementById("input");
const list = document.getElementById("list");

form.onsubmit = (e) => {
    e.preventDefault();
    const description = input.value;
    if (description.length === 0) return;
    addToList(description);
    input.value = "";
};

function addToList(description){
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(description));
    list.appendChild(li);
}