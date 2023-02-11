"use strict";
const xp = localStorage.getItem("xp");
const employer = localStorage.getItem("employer");
document.getElementById("job").textContent = `${xp} ${employer}`;

const startingDate = localStorage.getItem("starting-date");
const finishDate = localStorage.getItem("finish-date");

document.getElementById("date").textContent = `${startingDate} ${finishDate}`;

const description2 = localStorage.getItem("cv-description-2");
document.getElementById("desc").textContent = description2;

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