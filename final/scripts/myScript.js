// Arrays for the table data
const courseTitles = [
    // General Education Courses
    "College Writing I", "College Writing II", "Individual and Society", 
    "Intro to Mass Media", "Quantitative Thought", "Science and Technology", "Humanities",
    // Concentration Courses
    "Oral Communication", "HTML5", "CSS", "Digital Imaging with Photoshop", 
    "JavaScript", "SQL Programming", "XML", "jQuery", "PHP/MySQL", 
    "Web Elective I", "Node JS", "JavaScript Object Notation (JSON)", 
    "Mobile Web", "Career Elective II",
    "Total Credits" // For the total row
];

const courseNumbers = [
    // General Education Courses
    "ENG-111", "ENG-112", "SOC-227", "VMA-111", 
    "From Area 4", "From Area 5", "From Area 6",
    // Concentration Courses
    "ENG-171", "CMT-111", "CMT-125", "VMA-105", "CMT-113", 
    "CIT-236", "CMT-117", "CMT-225", "CMT-241", "See Note *", 
    "CMT-235", "CMT-227", "CMT-250", "See Note **",
    "" // Leave course # total empty
];

const credits = [
    // General Education Courses
    3, 3, 3, 3, 3, 4, 3,
    // Concentration Courses
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    64 // Total credits
];

const prerequisites = [
    // General Education Courses
    "ENG-095 or placement and ESL-098 or RDG-095 or placement", "ENG-111", "", 
    "ENG-095 and MAT-093", "MAT-097 or placement", "", "",
    // Concentration Courses
    "", "prerequisite/corequisite CMT-125", "prerequisite/corequisite CMT-111", 
    "ENG-095 and MAT-093 or placement", "CMT-111 and CMT-125", 
    "CIT-110 or CIT-113 or CIT-120 or Chair approval", "CMT-111 and CMT-125", 
    "CMT-113", "CMT-113 and CIT-236", "As defined by chosen elective", 
    "CMT-117", "CMT-113", "CMT-241", "As defined by chosen elective",
    "" //Leave prerequisites total empty
];



// Subject Colour Code
const subjectColours = {
    'ENG': '#0000ff', // Electric Blue
    'SOC': '#a52a2a', // Brown
    'VMA': '#ff69b4', // Pink
    'CMT': '#00b1e1', // Pretty Blue
    'CIT': '#007a80', // Deep Teal
    'MAT': '#db3939', // Red
    'ESL': '#68a5dd', // Pale Cyan
    'RDG': '#008000'  // Forest Green
};

// Function to create the table dynamically
function createTable() {
    const table = document.getElementById("courseTable");

    // Create the header row
    const headerRow = document.createElement("tr");
    const headers = ["Course Title", "Course Number", "Credits", "Prerequisites"];
    headers.forEach(headerText => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Create rows for each course
    for (let i = 0; i < courseTitles.length; i++) {
        const row = document.createElement("tr");

        // Course Title
        const titleCell = document.createElement("td");
        titleCell.textContent = courseTitles[i];
        row.appendChild(titleCell);

        // Course Number
        const numberCell = document.createElement("td");
        if (courseNumbers[i].match(/^[A-Z]{3}-\d{3}$/)) {
            const [subject, number] = courseNumbers[i].split('-');
            const subjectSpan = document.createElement('span');
            subjectSpan.className = 'subject';
            subjectSpan.dataset.subject = subject;
            subjectSpan.textContent = subject;
            subjectSpan.style.color = subjectColours[subject] || '#000000'; // Default to black if subject not in map

            const numberSpan = document.createElement('span');
            numberSpan.className = 'number';
            numberSpan.dataset.course = courseNumbers[i];
            numberSpan.textContent = number;

            const courseCodeSpan = document.createElement('span');
            courseCodeSpan.className = 'course-code';
            courseCodeSpan.dataset.course = courseNumbers[i];
            courseCodeSpan.appendChild(subjectSpan);
            courseCodeSpan.appendChild(document.createTextNode('-'));
            courseCodeSpan.appendChild(numberSpan);

            numberCell.appendChild(courseCodeSpan);
        } else {
            numberCell.textContent = courseNumbers[i];
        }
        row.appendChild(numberCell);

        // Credits
        const creditsCell = document.createElement("td");
        creditsCell.textContent = credits[i];
        row.appendChild(creditsCell);

        // Prerequisites
        const prereqCell = document.createElement("td");
        let prereqText = prerequisites[i];
        prereqText = prereqText.replace(/([A-Z]{3}-\d{3})/g, (match) => {
            const [subject, number] = match.split('-');
            const subjectSpan = `<span class="subject" data-subject="${subject}" style="color: ${subjectColours[subject] || '#000000'}">${subject}</span>`;
            const numberSpan = `<span class="number" data-course="${match}">${number}</span>`;
            return `<span class="course-code" data-course="${match}">${subjectSpan}-${numberSpan}</span>`;
        });
        prereqCell.innerHTML = prereqText;
        row.appendChild(prereqCell);

        table.appendChild(row);
    }
}

// Function to add interactivity for hover effects
function addInteractivity() {
    const courseCodes = document.querySelectorAll('.course-code');
    courseCodes.forEach(courseCode => {
        const course = courseCode.dataset.course;
        courseCode.addEventListener('mouseover', () => {
            document.querySelectorAll(`.course-code[data-course="${course}"]`).forEach(el => {
                el.classList.add('hover-highlight');
            });
        });
        courseCode.addEventListener('mouseout', () => {
            document.querySelectorAll(`.course-code[data-course="${course}"]`).forEach(el => {
                el.classList.remove('hover-highlight');
            });
        });
        courseCode.addEventListener('click', () => {
            const isSelected = courseCode.classList.contains('selected');
            document.querySelectorAll(`.course-code[data-course="${course}"]`).forEach(el => {
                if (isSelected) {
                    el.classList.remove('selected');
                } else {
                    el.classList.add('selected');
                }
            });
        });
    });

    const subjects = document.querySelectorAll('.subject');
    subjects.forEach(subject => {
        subject.addEventListener('mouseover', () => {
            const subjectName = subject.dataset.subject;
            document.querySelectorAll(`.subject[data-subject="${subjectName}"]`).forEach(el => {
                el.classList.add('subject-highlight');
            });
        });
        subject.addEventListener('mouseout', () => {
            document.querySelectorAll('.subject').forEach(el => {
                el.classList.remove('subject-highlight');
            });
        });
    });
}


// Gradient Array (to cycle through)
const gradients = [
    "linear-gradient(to bottom, #ffbfbf, #aabbcc)", // jenny to bluey
    "linear-gradient(to bottom, #f0e6fa, #6c4b69)", // lavender to abyss
    "linear-gradient(to bottom, #ffbfbf, #f0e6fa)", // jenny to lavender
    "linear-gradient(to bottom, #aabbcc, #6c4b69)"  // bluey to abyss
];

// Function to cycle
function cycleBackgrounds() {
    let currentIndex = 0;
    const body = document.body;
    const interval = 15000; // 15 seconds of delay
    const transitionDuration = 5500; // 5.5 seconds between shifts

    setInterval(() => {
        // Next gradient
        currentIndex = (currentIndex + 1) % gradients.length;

        // Set new gradient on ::before
        body.style.setProperty('--next-gradient', gradients[currentIndex]);
        body.classList.add('fade'); // Trigger opacity transition to show ::before

        // After transition, update body background and reset ::before
        setTimeout(() => {
            body.style.background = gradients[currentIndex]; // Update body background
            body.classList.remove('fade'); // Hide ::before again
            body.style.setProperty('--next-gradient', gradients[currentIndex]); // Reset ::before for next cycle
        }, transitionDuration);
    }, interval);
}

// Create initial ::before background as custom CSS custom property here:
document.body.style.setProperty('--next-gradient', gradients[0]);

// & Call functions on page load.
window.onload = function() {
    createTable();
    cycleBackgrounds();
    addInteractivity();
};


