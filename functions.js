let userName = document.getElementById("name");
let userBio = document.getElementById("bio");
let userLocation = document.getElementById("location");
let profilePic = document.getElementById("profilePic");

async function buscaDados() {
  try {
    const response = await fetch("https://api.github.com/users/VictorJacques");
    const profileData = await response.json();
    userName.innerText = profileData.name;
    userBio.innerText = profileData.bio;
    userLocation.innerText = profileData.location;
    profilePic.src = profileData.avatar_url;
    console.log(profileData);
  } catch (e) {}
}

buscaDados();
