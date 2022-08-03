//* Data is an array of objects which contains information about the candidates
const data = [
  {
    name: "Ram",
    age: 18,
    city: "Ayodhya",
    language: "Python",
    framework: "Django",
    image: "https://randomuser.me/api/portraits/men/73.jpg",
  },

  {
    name: "Bharat",
    age: 18,
    city: "Ayodhya",
    language: "JavaScript",
    framework: "BootStrap",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },

  {
    name: "Laxman",
    age: 18,
    city: "Ayodhya",
    language: "C++",
    framework: ".Net Framework",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },

  {
    name: "Hanuman",
    age: 18,
    city: "Indraprastha",
    language: "Java",
    framework: "Apache",
    image: "https://randomuser.me/api/portraits/men/99.jpg",
  },
];

//* CV itreator
function cvItreator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}

const candidate = cvItreator(data);

nextCV();

//* Button listener
const next = document.getElementById("next");
next.addEventListener("click", nextCV);

function nextCV() {
  const currentCandidate = candidate.next().value;

  let image = document.getElementById("image");
  let profile = document.getElementById("profile");

  if (currentCandidate != undefined) {
    image.innerHTML = `<img src='${currentCandidate.image}'>`;

    profile.innerHTML = `<ul class="list-group">
  <li class="list-group-item">Name: ${currentCandidate.name}</li>
  <li class="list-group-item">${currentCandidate.age} years old</li>
  <li class="list-group-item">Lives in ${currentCandidate.city}</li>
  <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
  <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
  </ul>`;
  } else {
    alert("End of candidate applicatons");
    window.location.reload();
  }
}
