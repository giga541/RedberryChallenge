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

  const xp = localStorage.getItem("xp")
  const employer = localStorage.getItem("employer")
  const startDate = localStorage.getItem("starting-date")
  const finishDate = localStorage.getItem("finish-date")
  const aboutInfoV2 = localStorage.getItem("cv-description-2")

  const eduCentre = localStorage.getItem("edu-centre")
  const eduEndDate = localStorage.getItem("edu-end-date")
  const eduDescription = localStorage.getItem("edu-description")
  const degree = localStorage.getItem("degree")

  const fullNameElement = document.getElementById("cv-full-name")

  fullNameElement.textContent = `${firstName} ${surname}`
  document.getElementById("cv-mail").textContent = mail
  document.getElementById("cv-mob-number").textContent = mobileNumber
  document.getElementById("cv-description").textContent = aboutInfo
  document.getElementById("cv-photo").src = photo

  document.getElementById("cv-job").textContent = `${xp}, ${employer}`
  document.getElementById("cv-date").textContent = `${startDate} ${finishDate}`
  document.getElementById("cv-desc").textContent = aboutInfoV2
  

  document.getElementById('cv-edu').textContent = `${eduCentre}, ${degree}`
  document.getElementById('cv-edu-date').textContent = eduEndDate
  document.getElementById('cv-edu-desc').textContent = eduDescription

  if (firstName || surname) {
    fullNameElement.classList.remove('not-visible')
  } else {
    fullNameElement.classList.add('not-visible')
  }

  if (mobileNumber) {
    document.getElementById("phone-container").classList.remove('not-visible')
  } else {
    document.getElementById("phone-container").classList.add('not-visible')
  }

  if (mail) {
    document.getElementById("email-container").classList.remove('not-visible')
  } else {
    document.getElementById("email-container").classList.add('not-visible')
  }

  if (aboutInfo) {
    document.getElementById("about-me-container").classList.remove('not-visible')
  } else {
    document.getElementById("about-me-container").classList.add('not-visible')
  }
}

personalForm.addEventListener("submit", function (i) {
  i.preventDefault();

  window.location.href = "/experience/";
});

updateResume()
updateFields()

const startOverBtn = document.getElementById("start-over-btn")
startOverBtn.addEventListener("click", function (){
  localStorage.clear()
})