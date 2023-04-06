function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.scr = profileData.photo
    photo.alt = profileData.name 
    
    const name = document.getElementById('profile.name')
    name.innerText = profileData.name
         
    const job = document.getElementById('profile.job')
    job.innerText = profileData.job
     
    const location = document.getElementById('profile.location')
    location.innerText = profileData.location
    
    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tel:${profileData.phone}`
    
    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softskills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardskills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" title="${skill.name}" alt="${skill.name}"></li>`).join('')
}

function updateIdiomas(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardskills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" title="${skill.name}" alt="${skill.name}"></li>`).join('')
}


(async () => {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateIdiomas(profileData)
})()