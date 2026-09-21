// JavaScript Class Definition
class Student {
  constructor(name, rollNo, department, cgpa) {
    this.name = name;
    this.rollNo = rollNo;
    this.department = department;
    this.cgpa = cgpa;
  }

  // Method to generate HTML representation of student details
  getProfileHTML() {
    return `
      <h2>Student Profile</h2>
      <div class="profile-details">
        <p><strong>Name</strong> : ${this.name}</p>
        <p><strong>Roll No</strong> : ${this.rollNo}</p>
        <p><strong>Department</strong> : ${this.department}</p>
        <p><strong>CGPA</strong> : ${this.cgpa}</p>
      </div>
    `;
  }
}

// DOM Selection
const generateBtn = document.getElementById('generateBtn');
const profileContainer = document.getElementById('profileContainer');

// Event Listener & Dynamic Profile Generation
generateBtn.addEventListener('click', function () {
  // Extract user inputs
  const nameVal = document.getElementById('name').value.trim();
  const rollNoVal = document.getElementById('rollNo').value.trim();
  const deptVal = document.getElementById('department').value.trim();
  const cgpaVal = document.getElementById('cgpa').value.trim();

  // Validate inputs
  if (!nameVal || !rollNoVal || !deptVal || !cgpaVal) {
    alert('Please fill in all fields before generating the profile.');
    return;
  }

  // Instantiate Student Class Object
  const student = new Student(nameVal, rollNoVal, deptVal, parseFloat(cgpaVal).toFixed(2));

  // Clear existing container content
  profileContainer.innerHTML = '';

  // Dynamic HTML Element Creation & Manipulation
  const cardDiv = document.createElement('div');
  cardDiv.className = 'profile-card';
  cardDiv.innerHTML = student.getProfileHTML();

  // Append generated card to webpage
  profileContainer.appendChild(cardDiv);
});