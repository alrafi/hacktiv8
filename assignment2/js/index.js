const submit = document.getElementById("submit");

const handleEdit = () => {
  const valueEl = document.getElementsByClassName("value");

  let currValue = [];
  Array.from(valueEl).forEach((item) => {
    currValue.push(item.textContent);
  });

  const formEl = document.getElementsByClassName("form-value");
  Array.from(formEl).forEach((item, idx) => {
    item.value = currValue[idx];
  });
  submit.disabled = false;
};

const handleSubmit = () => {
  const formEl = document.getElementsByClassName("form-value");

  let currValue = [];
  Array.from(formEl).forEach((item) => {
    currValue.push(item.value);
  });

  // update field
  const valueEl = document.getElementsByClassName("value");
  Array.from(valueEl).forEach((item, idx) => {
    console.log(item, currValue[idx]);
    item.innerHTML = currValue[idx];
  });

  // reset form input
  Array.from(formEl).forEach((item, idx) => {
    item.value = "";
  });
  submit.disabled = true;
};
