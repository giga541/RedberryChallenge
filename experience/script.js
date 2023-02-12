"use strict";
const firstName = localStorage.getItem("first-name");
const surname = localStorage.getItem("surname");
const description = localStorage.getItem("description");
const mail = localStorage.getItem("mail");
const mobNumber = localStorage.getItem("mob-number");
const xpForm = document.getElementById("xp-form");
const photo = localStorage.getItem("photo");

document.getElementById("cv-full-name").textContent = `${firstName} ${surname}`;
document.getElementById("cv-description").textContent = description;
document.getElementById("mail").textContent = mail;
document.getElementById("mob-number").textContent = mobNumber;
document.getElementById("cv-photo").src = photo;

xpForm.addEventListener("submit", function (i) {
  i.preventDefault();

  const xp = document.getElementById("xp").value;
  localStorage.setItem("xp", xp);

  const employer = document.getElementById("employer").value;
  localStorage.setItem("employer", employer);

  const startingDate = document.getElementById("starting-date").value;
  localStorage.setItem("starting-date", startingDate);

  const finishDate = document.getElementById("finish-date").value;
  localStorage.setItem("finish-date", finishDate);

    const description2 = document.getElementById("cv-description-2").value;
    localStorage.setItem("cv-description-2", description2);

  window.location.href = "/education/";
});
