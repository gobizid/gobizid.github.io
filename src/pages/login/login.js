const forms = document.querySelector(".forms"),
  pwShowHide = document.querySelectorAll(".eye-icon"),
  links = document.querySelectorAll(".link");

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll(".password");
    pwFields.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
        return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
    });
  });
});
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    forms.classList.toggle("show-signup");
  });
});

const getEmail = document.querySelector("input[name='Email']");
const getName = document.querySelector("input[name='Name']");
const getPassword = document.querySelector("input[name='Password']");
const getPhoneNumber = document.querySelector("input[name='PhoneNumber']");

document.getElementById("form-register").addEventListener("submit", (e) => {
  e.preventDefault();

  const datajson = {
    Email: getEmail.value,
    Name: getName.value,
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

  console.log(raw);
  
  fetch(
    "https://asia-southeast2-awangga.cloudfunctions.net/jualin/auth/regis",
    requestOptions
  )
    .then(async (response) => {
      const status = response.status;
      const result = await response.json();

      console.log(status);
      console.log(result);

      if (status === 200) {
        Swal.fire({
          title: "Pendaftaran Berhasil",
          text: "Anda berhasil mendaftar. Silakan login untuk melanjutkan.",
          icon: "success",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "login.html";
          }
        });
      } else {
        Swal.fire({
          icon: "info",
          title: "Gagal Mendaftar",
          text: "Nomor harus diawali dengan 62",
        });
      }
    })
    .catch((error) => {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    });
});
