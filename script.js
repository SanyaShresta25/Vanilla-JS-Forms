function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const age = parseInt(document.getElementById("age").value);
  const isStudent = document.getElementById("student").checked;

  console.log("Name entered:", name);
  console.log("Age entered:", age);
  console.log("Is Student checkbox checked:", isStudent);

  let output = formatGreeting(name, age);

  alert(`Thanks, ${name}! Let's check your eligibility.`);

  switch (true) {
    case (age < 13):
      output += "You're a child.<br>";
      console.log("Age group: Child");
      break;
    case (age >= 13 && age < 18):
      output += "You're a teenager.<br>";
      console.log("Age group: Teenager");
      break;
    case (age >= 18 && age < 60):
      output += "You're an adult.<br>";
      console.log("Age group: Adult");
      break;
    default:
      output += "You're a senior citizen.<br>";
      console.log("Age group: Senior");
      break;
  }

  if (isStudent) {
    output += "You are a student.<br>";
    console.log("Student status: Student");
  } else {
    output += "You are not a student.<br>";
    console.log("Student status: Not a student");
  }

  if (isStudent && age < 25) {
    output += "☑️ You're eligible for a student discount!<br>";
    console.log("Eligibility: Eligible for student discount");
  } else if (isStudent) {
    output += "⚠️ You're a student, but not eligible for student discount based on age.<br>";
    console.log("Eligibility: Not eligible (age > 25)");
  }

  document.getElementById("output").innerHTML = output;
}
