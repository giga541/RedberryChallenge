"use strict";
const firstName = localStorage.getItem("first-name");
const surname = localStorage.getItem("surname");
document.getElementById("cv-full-name").textContent = `${firstName} ${surname}`;

const description = localStorage.getItem("description");
document.getElementById("description").textContent = description;

const mail = localStorage.getItem("mail");
document.getElementById("mail").textContent = mail;

const mobNumber = localStorage.getItem("mob-number");
document.getElementById("mob-number").textContent = mobNumber;

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

  //   const description = document.getElementById("description").value;
  //   localStorage.setItem("description", description);

  window.location.href = "/education/";
});
