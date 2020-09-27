console.log('Client side javascript is loaded!');

const request = require('request');
let status = document.querySelectorAll(".status");
let getStatus = document.getElementById("#getStatus");

function updateStatus() {
  request('https://www.githubstatus.com/', { json: true }, (err, req, body) => {
    const result = body.components;
    for (let i = 0; i < result.length; ++i) {
      if (i === 3) continue;
      let flag = i < 3 ? status[i].querySelector(".status_flag") : status[i - 1].querySelector(".status_flag");
      if (result[i].status !== "operational") {
        flag.classList.add("status_flag_error");
      } else {
        flag.classList.remove("status_flag_error");
      }
      flag.innerHTML = result[i].status;
    }
  })
}

updateStatus();

getStatus.addEventListener("click", () => {
  updateStatus();
})