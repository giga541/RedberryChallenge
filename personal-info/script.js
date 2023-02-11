"use strict";

let selectedImage = "";

const upload = document.getElementById("file-upload");
upload.addEventListener("change", () => {
  const fr = new FileReader();
  fr.readAsDataURL(upload.files[0]);
  fr.addEventListener("load", () => {
    const url = fr.result;
    selectedImage = url;
  });
});

const personalForm = document.getElementById("personal-form");
personalForm.addEventListener("submit", function (i) {
  i.preventDefault();

  const firstName = document.getElementById("first-name").value;
  localStorage.setItem("first-name", firstName);

  const surname = document.getElementById("surname").value;
  localStorage.setItem("surname", surname);

  const description = document.getElementById("description").value;
  console.log("description", description)
  localStorage.setItem("description", description);

  const mail = document.getElementById("mail").value;
  localStorage.setItem("mail", mail);

  const mobNumber = document.getElementById("mob-number").value;
  localStorage.setItem("mob-number", mobNumber);

  localStorage.setItem('photo', selectedImage)

  window.location.href = "/experience/";
});
