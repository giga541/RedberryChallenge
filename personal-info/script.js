"use strict";

let selectedImage = "";
const personalForm = document.getElementById("personal-form")
const inputFields = personalForm.querySelectorAll("input, textarea");

inputFields.forEach(field => {
  field.addEventListener("blur", e => {
    localStorage.setItem(e.target.name, e.target.value)
    updateResume()
  })
})

const upload = document.getElementById("file-upload");
upload.addEventListener("change", () => {
  const fr = new FileReader();
  fr.readAsDataURL(upload.files[0]);
  fr.addEventListener("load", () => {
    const url = fr.result;
    localStorage.setItem("photo", url)
    updateResume()
  });
});

const updateFields = () => {
  const firstName = localStorage.getItem("first-name")
  const surname = localStorage.getItem("surname")
  const aboutInfo = localStorage.getItem("about-info")
  const mail = localStorage.getItem("mail")
  const mobileNumber = localStorage.getItem("mobile-number")

  document.getElementById("first-name").value = firstName
  document.getElementById("surname").value = surname
  document.getElementById("description").value = aboutInfo
  document.getElementById("mail").value = mobileNumber
  document.getElementById("mob-number").value = mail
}


const updateResume = () => {
  const firstName = localStorage.getItem("first-name")
  const surname = localStorage.getItem("surname")
  const aboutInfo = localStorage.getItem("about-info")
  const mail = localStorage.getItem("mail")
  const mobileNumber = localStorage.getItem("mobile-number")
  const photo = localStorage.getItem("photo")


  document.getElementById("cv-full-name").textContent = `${firstName} ${surname}`
  document.getElementById("cv-mail").textContent = mail
  document.getElementById("cv-mob-number").textContent = mobileNumber
  document.getElementById("cv-description").textContent = aboutInfo
  document.getElementById("cv-photo").src = photo
}

personalForm.addEventListener("submit", function (i) {
  i.preventDefault();

  window.location.href = "/experience/";
});

updateResume()
updateFields()
