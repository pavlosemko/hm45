class InputStorage{

}
const storage = new InputStorage();


// це не подобалось бо була кома вкінці
const _reWriteTextarea = function () {
    const inputs = document.querySelectorAll(".input"),
        textArea = document.getElementById("textarea");
    let updatedValue = "";
    inputs.forEach((input) => {
        const id = input.id,
            value = input.value;
        if (value.length == 0 || storage[id] === value) return;
        updatedValue += `${value},`;
        storage[id] = value;
    });
    textArea.value += updatedValue;
};

const reWriteTextarea = function () {
    const inputs = document.querySelectorAll(".input"),
        textArea = document.getElementById("textarea"),
        textAreaList = textArea.value.split(","),
        updatedValue = textAreaList.filter((e) => e !== "");
    inputs.forEach((input) => {
        const id = input.id,
            value = input.value;
        if (value.length == 0 || storage[id] === value) return;
        updatedValue.push(value);
        storage[id] = value;
    });
    textArea.value = updatedValue.join(",");
};
reWriteTextarea();

setInterval(reWriteTextarea, 4000);
