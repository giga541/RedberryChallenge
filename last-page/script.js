const updateResume = () => {
  const firstName = localStorage.getItem("first-name") || "";
  const surname = localStorage.getItem("surname") || "";
  const aboutInfo = localStorage.getItem("about-info") || "";
  const mail = localStorage.getItem("mail") || "";
  const mobileNumber = localStorage.getItem("mobile-number") || "";
  const photo = localStorage.getItem("photo") || "";

  const xp = localStorage.getItem("xp") || "";
  const employer = localStorage.getItem("employer") || "";
  const startDate = localStorage.getItem("starting-date") || "";
  const finishDate = localStorage.getItem("finish-date") || "";
  const aboutInfoV2 = localStorage.getItem("cv-description-2") || "";

  const eduCentre = localStorage.getItem("edu-centre") || "";
  const eduEndDate = localStorage.getItem("edu-end-date") || "";
  const eduDescription = localStorage.getItem("edu-description") || "";
  const degree = localStorage.getItem("degree") || "";

  const fullNameElement = document.getElementById("cv-full-name");

  fullNameElement.textContent = `${firstName || ""} ${surname || ""}`;
  document.getElementById("cv-mail").textContent = mail;
  document.getElementById("cv-mob-number").textContent = mobileNumber;
  document.getElementById("cv-description").textContent = aboutInfo;
  document.getElementById("cv-photo").src = photo;

  document.getElementById("cv-job").textContent = `${xp}, ${employer}`;
  document.getElementById("cv-date").textContent = `${startDate} ${finishDate}`;
  document.getElementById("cv-desc").textContent = aboutInfoV2;

  document.getElementById("cv-edu").textContent = `${eduCentre}, ${degree}`;
  document.getElementById("cv-edu-date").textContent = eduEndDate;
  document.getElementById("cv-edu-desc").textContent = eduDescription;

  if (photo) {
    document.getElementById("cv-photo").classList.remove("not-visible");
  }

  if (firstName || surname) {
    fullNameElement.classList.remove("not-visible");
  } else {
    fullNameElement.classList.add("not-visible");
  }

  if (mobileNumber) {
    document.getElementById("phone-container").classList.remove("not-visible");
  } else {
    document.getElementById("phone-container").classList.add("not-visible");
  }

  if (mail) {
    document.getElementById("email-container").classList.remove("not-visible");
  } else {
    document.getElementById("email-container").classList.add("not-visible");
  }

  if (aboutInfo) {
    document
      .getElementById("about-me-container")
      .classList.remove("not-visible");
  } else {
    document.getElementById("about-me-container").classList.add("not-visible");
  }

  if (xp) {
    document.getElementById("cv-job").classList.remove("not-visible");
    document.getElementById("exp-container").classList.remove("not-visible");
  } else {
    document.getElementById("cv-job").classList.add("not-visible");
  }

  if (startDate || finishDate) {
    document.getElementById("cv-date").classList.remove("not-visible");
    document.getElementById("exp-container").classList.remove("not-visible");
  } else {
    document.getElementById("cv-date").classList.add("not-visible");
  }

  if (aboutInfoV2) {
    document.getElementById("cv-desc").classList.remove("not-visible");
    document.getElementById("exp-container").classList.remove("not-visible");
  } else {
    document.getElementById("cv-desc").classList.add("not-visible");
  }

  if (eduCentre) {
    document.getElementById("cv-edu").classList.remove("not-visible");
    document.getElementById("edu-container").classList.remove("not-visible");
  } else {
    document.getElementById("cv-edu").classList.add("not-visible");
  }

  if (eduCentre || degree) {
    document.getElementById("cv-edu-date").classList.remove("not-visible");
    document.getElementById("edu-container").classList.remove("not-visible");
  } else {
    document.getElementById("cv-edu-date").classList.add("not-visible");
  }

  if (eduDescription) {
    document.getElementById("cv-edu-desc").classList.remove("not-visible");
    document.getElementById("edu-container").classList.remove("not-visible");
  } else {
    document.getElementById("cv-edu-desc").classList.add("not-visible");
  }
};

updateResume();

const startOverBtn = document.getElementById("start-over-btn")
startOverBtn.addEventListener("click", function (){
  localStorage.clear()
})

document.getElementById("cross-btn").addEventListener("click", () => {
  document.getElementById("success-msg").classList.add("hidden")
})

// Send request

const sendRequest = () => {
  const firstName = localStorage.getItem("first-name") || "";
  const surname = localStorage.getItem("surname") || "";
  const aboutInfo = localStorage.getItem("about-info") || "";
  const mail = localStorage.getItem("mail") || "";
  const mobileNumber = localStorage.getItem("mobile-number") || "";
  const photo = localStorage.getItem("photo") || "";

  const xp = localStorage.getItem("xp") || "";
  const employer = localStorage.getItem("employer") || "";
  const startDate = localStorage.getItem("starting-date") || "";
  const finishDate = localStorage.getItem("finish-date") || "";
  const aboutInfoV2 = localStorage.getItem("cv-description-2") || "";

  const eduCentre = localStorage.getItem("edu-centre") || "";
  const eduEndDate = localStorage.getItem("edu-end-date") || "";
  const eduDescription = localStorage.getItem("edu-description") || "";
  const degree = localStorage.getItem("degree") || "";

  const data = {
    name: firstName,
    surname: surname,
    email: mail,
    phone_number: mobileNumber,
    experiences: [
      {
        position: xp,
        employer: employer,
        start_date: startDate,
        due_date: finishDate,
        description: aboutInfoV2,
      },
    ],
    educations: [
      {
        institute: eduCentre,
        degree: degree,
        due_date: eduEndDate,
        description: eduDescription,
      },
    ],
    image: photo,
    about_me: aboutInfo,
  };
  
  fetch("https://resume.redberryinternship.ge/api/cvs", {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((response) => console.log('response', response))
    .catch(err => console.log(err))
}

sendRequest()


