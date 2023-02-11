"use strict";
const xp = localStorage.getItem("xp");
const employer = localStorage.getItem("employer");
document.getElementById("job").textContent = `${xp} ${employer}`;

const startingDate = localStorage.getItem("starting-date");
const finishDate = location.getItem("finish-date");
document.getElementById("date").textContent = `${startingDate} ${finishDate}`;

// const description = localStorage.getItem("description");
// document.getElementById("desc").textContent = description;
