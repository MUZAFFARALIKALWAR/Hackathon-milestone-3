document.getElementById('generateButton')?.addEventListener('click', generateResume);

function generateResume() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const location = (document.getElementById('location') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;

    const resumeHTML = `
        <h2>${name}'s Resume</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Location:</strong> ${location}</p>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Skills</h3>
        <p>${skills}</p>

        <h3>Work Experience</h3>
        <p>${experience}</p>
    `;

    const resumeDisplay = document.getElementById('resumeDisplay');
    if (resumeDisplay) {
        resumeDisplay.innerHTML = resumeHTML;
        resumeDisplay.scrollIntoView({ behavior: 'smooth' });
    }
}
