const forms = document.querySelector(".forms"),
  pwShowHide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".link");

// Add click event listener to each eye icon for toggling password visibility
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll(".password");
    pwFields.forEach((password) => {
      if (password.type === "password") {
        // If password is hidden
        password.type = "text"; // Show password
        eyeIcon.classList.replace("bx-hide", "bx-show"); // Change icon to show state
        return;
      }
      password.type = "password"; // Hide password
      eyeIcon.classList.replace("bx-show", "bx-hide"); // Change icon to hide state
    });
  });
});
// Add click event listener to each link to toggle between forms
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default link behavior
    forms.classList.toggle("show-signup");
  });
});

const getEmail = document.querySelector("input[name='Email']");
const getUsername = document.querySelector("input[name='Username']");
const getPassword = document.querySelector("input[name='Password']");
const getPhoneNumber = document.querySelector("input[name='PhoneNumber']");

document.getElementById("form-login").addEventListener("submit", (e) => {
  e.preventDefault();

  const datajson = {
    Email: getEmail.value,
    Username: getUsername.value,
    Password: getPassword.value,
    PhoneNumber: getPhoneNumber.value,
  };

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify(datajson);

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  fetch(
    "https://asia-southeast2-awangga.cloudfunctions.net/jualin/auth/regis",
    requestOptions
  )
    .then(async (response) => {
      const status = response.status;
      const result_1 = await response.text();
      const parsedResult = JSON.parse(result_1);

      console.log(status + parsedResult);

      alert("Login Tai berhasil");
    })
    .catch((error) => console.error(error));
});
