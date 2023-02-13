"use strict";

const experienceForm = document.getElementById("xp-form")
const inputFields = experienceForm.querySelectorAll("input, textarea");

const clearValidation = (field) => {
  field.classList.remove('input-success')
  field.classList.remove('input-error')
}

inputFields.forEach(field => {
  field.addEventListener("blur", e => {
    validateField(e.target)
    localStorage.setItem(e.target.name, e.target.value)
    updateResume()
  })
})


const updateFields = () => {
  const xp = localStorage.getItem("xp")
  const employer = localStorage.getItem("employer")
  const startDate = localStorage.getItem("starting-date")
  const finishDate = localStorage.getItem("finish-date")
  const aboutInfoV2 = localStorage.getItem("cv-description-2")

  document.getElementById("xp").value = xp
  document.getElementById("employer").value = employer
  document.getElementById("starting-date").value = startDate
  document.getElementById("finish-date").value = finishDate
  document.getElementById("cv-description-2").value = aboutInfoV2
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

updateResume()
updateFields()

const validateMinimumLetters = (value, minLetters) => {
  const success = value.length >= minLetters
  const message = 'უნდა შეიცავდეს 2-ზე მეტ სიმბოლოს'
  return {
    success,
    message
  }
}

const validateNotEmpty = (value) => {
  return {
    success: !!value,
    message: 'არ უნდა იყოს ცარიელი'
  }
}

const validate = (fieldName, value) => {
  if (fieldName == 'xp') {
    return validateMinimumLetters(value, 2)
  } else if (fieldName == 'employer') {
    return validateMinimumLetters(value, 2)
  } else if (fieldName == 'starting-date') {
    return validateNotEmpty(value)
  } else if (fieldName == 'finish-date') {
    return validateNotEmpty(value)
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


experienceForm.addEventListener("submit", function (i) {
  i.preventDefault();
  let isValid = true

  for (const field of inputFields) {
    const validation = validateField(field)
    isValid = isValid && validation.success
  }
  
  if (isValid) {
    window.location.href = "../education/index.html";
  }
});

const startOverBtn = document.getElementById("start-over-btn")
startOverBtn.addEventListener("click", function (){
  localStorage.clear()
})