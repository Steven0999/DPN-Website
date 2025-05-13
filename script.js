const enquireBtn = document.getElementById("enquireBtn");
const modal = document.getElementById("popupForm");
const closeBtn = document.querySelector(".close-btn");
const addJobBtn = document.getElementById("addJobBtn");
const jobsContainer = document.getElementById("jobsContainer");
const enquiryForm = document.getElementById("enquiryForm");

// Show popup
enquireBtn.onclick = () => {
  modal.style.display = "flex";
};

// Hide popup
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// Close on outside click
window.onclick = (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

// Add another job section
addJobBtn.onclick = () => {
  const jobBlock = document.createElement("div");
  jobBlock.classList.add("job-block");
  jobBlock.innerHTML = `
    <input type="text" name="from" placeholder="Journey From" required />
    <input type="text" name="to" placeholder="Journey To" required />
    <select name="vehicle">
      <option value="<7.5 tonnes vehicle">&lt;7.5 tonnes vehicle</option>
      <option value="C licenced truck">C licenced truck</option>
      <option value="C+E truck">C+E truck</option>
      <option value="D truck">D truck</option>
    </select>
  `;
  jobsContainer.appendChild(jobBlock);
};

// Handle form submission
enquiryForm.onsubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(enquiryForm);
  const data = {};
  for (let [key, value] of formData.entries()) {
    if (!data[key]) data[key] = [];
    data[key].push(value);
  }

  // Here you'd typically send the data via email using an API or backend
  console.log("Sending data:", data);

  alert("Your enquiry has been sent!");
  enquiryForm.reset();
  jobsContainer.innerHTML = "";
  modal.style.display = "none";
};
