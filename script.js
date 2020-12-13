const hexColor = document.querySelector("input");
hexColor.addEventListener("keypress", (e) => {
  if (e.keyCode === 13) {
    e.preventDefault();
    const inputValue = hexColor.value;
    document.body.style.backgroundColor = inputValue;
  }
});
