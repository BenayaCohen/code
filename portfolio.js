  const GITHUB_URL = "https://api.github.com/users/BenayaCohen";

  fetch(GITHUB_URL)
    .then(function (response) {
      return response.json();
      a;
    })

    .then(function (data) {
      const profileImage = document.getElementById("profile-image");
      profileImage.src = data.avatar_url;
      const profileName = document.getElementById("profile-name");
      profileName.textContent = data.login;
    });

    const showBtn = document.querySelector(".show");
    const imgBtn =document.querySelector(".profile-image")
    let img = 1
    showBtn.addEventListener("click", () => {
      if(img === 1){
        imgBtn.style.display = "block"
        showBtn.style.display = "none"
      }
     
    })

    const codingLanguages = ["HTML", "CSS", "JavaScript"];
    let web = document.getElementById("website");
    for (let i = 0; i < codingLanguages.length; i++) {
      web.textContent += codingLanguages.slice(0, -1).join(', ') + ' and ' + codingLanguages.slice(-1)
      break
    
    }