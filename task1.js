function calculateAge() {
    const dob = document.getElementById("dob").value;
    const dobDate = new Date(dob);
    const today = new Date();
  
    const diffInMs = today.getTime() - dobDate.getTime();
    const ageDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const ageYears = Math.floor(ageDays / 365);
  
    const result = document.getElementById("result");
    result.textContent = `Your age is approximately ${ageYears} years old.`;
}
