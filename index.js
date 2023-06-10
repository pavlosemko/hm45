const storage = {};
const inputs = document.querySelectorAll(".input"),
    textArea = document.getElementById("textarea");

const reWriteTextarea = function () {
    let update = "";
    inputs.forEach((input) => {
        const id = input.id,
            value = input.value;
        if (value.length == 0 || storage[id] === value) return;
        update += `${value},`;
        storage[id] = value;
    });
    if (update.length > 0) {
        textArea.value += update;
    }
};

reWriteTextarea();

setInterval(reWriteTextarea, 4000);
