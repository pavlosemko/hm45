const storage = {};
const inputs = document.querySelectorAll(".input"),
      textArea = document.getElementById("textarea";
                                           
const reWriteTextarea = function () {
    inputs.forEach((input) => {
        const id = input.id,
            value = input.value;
        if (value.length == 0 || storage[id] === value) return;
        textArea.value += `${value},`;
        storage[id] = value;
    });
};

reWriteTextarea();

setInterval(reWriteTextarea, 4000);
