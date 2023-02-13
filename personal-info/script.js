"use strict";

let selectedImage = "";
const personalForm = document.getElementById("personal-form")
const inputFields = personalForm.querySelectorAll("input, textarea");

const clearValidation = (field) => {
  field.classList.remove('input-success')
  field.classList.remove('input-error')
}

inputFields.forEach(field => {
  field.addEventListener("keyup", e => {
    if (e.target.name == "mobile-number") {
      const number = formatPhoneNumber(e.target.value);
      e.target.value = number
    }
    clearValidation(e.target)
  })
})

inputFields.forEach(field => {
  field.addEventListener("blur", e => {
    validateField(e.target)

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

const validateMinimumLetters = (value, minLetters) => {
  const success = value.length >= minLetters
  const message = 'უნდა შეიცავდეს 2-ზე მეტ სიმბოლოს'
  return {
    success,
    message
  }
}

const validateRedberryMail = (value) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const success =  re.test(value.toLowerCase()) && value.endsWith('@redberry.ge');
  const message = 'უნდა იყოს რედბერის მეილი'
  return {
    success,
    message
  }
}

const validateMobile = (value) => {
  const success = value.startsWith("+995") && value.length == 16
  const message = 'უნდა იყოს მობილური ტელეფონის ნომერი'
  return {
    success,
    message
  }
}

const validate = (fieldName, value) => {
  if (fieldName == 'first-name') {
    return validateMinimumLetters(value, 2)
  } else if (fieldName == 'surname') {
    return validateMinimumLetters(value, 2)
  } else if (fieldName == 'mail') {
    return validateRedberryMail(value)
  } else if (fieldName == 'mobile-number') {
    return validateMobile(value)
  } else {
    return {
      success: true
    }
  }
}

const validateField = (field) => {
  clearValidation(field)
  const validation = validate(field.name, field.value)

  if (validation.success) {
    field.classList.add('input-success')
  } else {
    field.classList.add('input-error')
  }
  return validation
}


function formatPhoneNumber(value) {
  if (!value) return value;

  const prefix = '+995'

  let number = value.split(" ").join("").replace(prefix, '');
  number = number.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1')

  if (number.length <  4) return `${prefix} ${number}`;

  if (number.length < 7) {
    return `${prefix} ${number.slice(0, 3)} ${number.slice(3)}`;
  }

  return `${prefix} ${number.slice(0, 3)} ${number.slice(
    3,
    6
  )} ${number.slice(6, 9)}`;
}

const updateFields = () => {
  const firstName = localStorage.getItem("first-name")
  const surname = localStorage.getItem("surname")
  const aboutInfo = localStorage.getItem("about-info")
  const mail = localStorage.getItem("mail")
  const mobileNumber = localStorage.getItem("mobile-number")

  document.getElementById("first-name").value = firstName
  document.getElementById("surname").value = surname
  document.getElementById("description").value = aboutInfo
  document.getElementById("mail").value = mail
  document.getElementById("mob-number").value = mobileNumber
}


const updateResume = () => {
  const firstName = localStorage.getItem("first-name") || ''
  const surname = localStorage.getItem("surname") || ''
  const aboutInfo = localStorage.getItem("about-info") || ''
  const mail = localStorage.getItem("mail") || ''
  const mobileNumber = localStorage.getItem("mobile-number") || ''
  const photo = localStorage.getItem("photo") || ''

  const xp = localStorage.getItem("xp") || ''
  const employer = localStorage.getItem("employer") || ''
  const startDate = localStorage.getItem("starting-date") || ''
  const finishDate = localStorage.getItem("finish-date") || ''
  const aboutInfoV2 = localStorage.getItem("cv-description-2") || ''

  const eduCentre = localStorage.getItem("edu-centre") || ''
  const eduEndDate = localStorage.getItem("edu-end-date") || ''
  const eduDescription = localStorage.getItem("edu-description") || ''
  const degree = localStorage.getItem("degree") || ''

  const fullNameElement = document.getElementById("cv-full-name")

  fullNameElement.textContent = `${firstName || ''} ${surname || ''}`
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

  if (photo) {
    document.getElementById("cv-photo").classList.remove('not-visible')
  }

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

  if (xp) {
    document.getElementById("cv-job").classList.remove('not-visible')
    document.getElementById("exp-container").classList.remove('not-visible')
  } else {
    document.getElementById("cv-job").classList.add('not-visible')
  }

  if (startDate || finishDate) {
    document.getElementById("cv-date").classList.remove('not-visible')
    document.getElementById("exp-container").classList.remove('not-visible')
  } else {
    document.getElementById("cv-date").classList.add('not-visible')
  }

  if (aboutInfoV2) {
    document.getElementById("cv-desc").classList.remove('not-visible')
    document.getElementById("exp-container").classList.remove('not-visible')
  } else {
    document.getElementById("cv-desc").classList.add('not-visible')
  }


  if (eduCentre) {
    document.getElementById("cv-edu").classList.remove('not-visible')
    document.getElementById("edu-container").classList.remove('not-visible')
  } else {
    document.getElementById("cv-edu").classList.add('not-visible')
  }

  if (eduCentre || degree) {
    document.getElementById("cv-edu-date").classList.remove('not-visible')
    document.getElementById("edu-container").classList.remove('not-visible')
  } else {
    document.getElementById("cv-edu-date").classList.add('not-visible')
  }

  if (eduDescription) {
    document.getElementById("cv-edu-desc").classList.remove('not-visible')
    document.getElementById("edu-container").classList.remove('not-visible')
  } else {
    document.getElementById("cv-edu-desc").classList.add('not-visible')
  }
}

personalForm.addEventListener("submit", function (i) {
  i.preventDefault();
  let isValid = true

  for (const field of inputFields) {
    const validation = validateField(field)
    isValid = isValid && validation.success
  }
  
  if (isValid) {
    window.location.href = "../experience/index.html";
  }
});

updateResume()
updateFields()

const startOverBtn = document.getElementById("start-over-btn")
startOverBtn.addEventListener("click", function (){
  localStorage.clear()
})