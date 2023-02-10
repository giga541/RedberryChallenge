"use strict";
const personalForm = document.getElementById("personal-form");
personalForm.addEventListener("submit", function (i) {
  i.preventDefault();
  const firstName = document.getElementById("first-name").value;
  localStorage.setItem("first-name", firstName);
  const surname = document.getElementById("surname").value;
  localStorage.setItem("surname", surname);
  const description = document.getElementById("description").value;
  localStorage.setItem("description", description);
  const mail = document.getElementById("mail").value;
  localStorage.setItem("mail", mail);
  const mobNumber = document.getElementById("mob-number").value;
  localStorage.setItem("mob-number", mobNumber);

  window.location.href = "/experience/";
});
