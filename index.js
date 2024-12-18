document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll(".styled-checkbox");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      const checked = event.target.checked;
      const href = event.target.previousElementSibling.href;
      if (checked) {
        event.target.previousElementSibling.href = `${href}?env=staging`;
      } else {
        event.target.previousElementSibling.href = `${
          href.split("?env=staging")[0]
        }`;
      }
    });
  });
});
