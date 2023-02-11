"use strict";
const firstName = localStorage.getItem("first-name");
const surname = localStorage.getItem("surname");
document.getElementById("cv-full-name").textContent = `${firstName} ${surname}`;

const description = localStorage.getItem("description");
document.getElementById("cv-description").textContent = description;

const mail = localStorage.getItem("mail");
document.getElementById("mail").textContent = mail;

const mobNumber = localStorage.getItem("mob-number");
document.getElementById("mob-number").textContent = mobNumber;

const photo = localStorage.getItem("photo");
document.getElementById("cv-photo").src = photo;


const xpForm = document.getElementById("xp-form");
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
