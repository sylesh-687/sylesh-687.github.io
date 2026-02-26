// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu on nav link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Handle avatar image load/error
document.addEventListener('DOMContentLoaded', () => {
    const avatarImg = document.querySelector('.avatar-img');
    if (avatarImg) {
        avatarImg.onerror = () => {
            // If image fails to load, add hidden class to show the fallback icon
            avatarImg.classList.add('hidden');
        };
        // If image loads successfully, ensure hidden class is removed
        avatarImg.onload = () => {
            avatarImg.classList.remove('hidden');
        };
    }
});

// Load data from JSON files
async function loadData() {
    try {
        const [projectsRes, experienceRes] = await Promise.all([
            fetch('data/projects.json'),
            fetch('data/experience.json')
        ]);

        const projects = await projectsRes.json();
        const experience = await experienceRes.json();

        renderProjects(projects);
        renderExperience(experience);
    } catch (err) {
        console.error('Error loading data:', err);
    }
}

// Render projects
function renderProjects(projects) {
    const projectsList = document.getElementById('projectsList');
    projectsList.innerHTML = projects.map(project => `
        <div class="project-card">
            <div class="project-header">
                <h3>${project.title}</h3>
            </div>
            <div class="project-body">
                <p class="project-description">${project.description}</p>
                <div class="tech-tags">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener">GitHub</a>` : ''}
                    ${project.link ? `<a href="${project.link}" target="_blank" rel="noopener">Live</a>` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// Render experience timeline
function renderExperience(experience) {
    const experienceList = document.getElementById('experienceList');
    experienceList.innerHTML = experience.map(exp => `
        <div class="timeline-item">
            <div class="timeline-content">
                <h3>${exp.title}</h3>
                <div class="timeline-date">${exp.company} • ${exp.period}</div>
                <p class="timeline-description">${exp.description}</p>
            </div>
        </div>
    `).join('');
}

// Render achievements
function renderAchievements() {
    const achievementsList = document.getElementById('achievementsList');
    const achievements = [
        {
            icon: '<i class="fas fa-certificate"></i>',
            title: 'Certificate of Appreciation',
            description: 'o9 Solutions Inc • 2021'
        },
        {
            icon: '<i class="fas fa-medal"></i>',
            title: 'Sports Award',
            description: 'o9 Solutions Inc • 2025'
        }
    ];
    
    achievementsList.innerHTML = achievements.map(achievement => `
        <div class="achievement-card">
            <div class="achievement-icon">${achievement.icon}</div>
            <h3>${achievement.title}</h3>
            <p>${achievement.description}</p>
        </div>
    `).join('');
}

// Render education
function renderEducation() {
    const educationList = document.getElementById('educationList');
    const education = [
        {
            degree: 'B.Tech (Computer Science & Engineering)',
            institution: 'ICFAI Dehradun',
            year: '2015',
            field: 'CGPA: 9.1'
        }
    ];
    
    educationList.innerHTML = education.map(edu => `
        <div class="education-item">
            <h3>${edu.degree}</h3>
            <div class="education-institution">${edu.institution}</div>
            <div class="education-year">${edu.year} • ${edu.field}</div>
        </div>
    `).join('');
}

// Render professional development
function renderDevelopment() {
    const developmentList = document.getElementById('developmentList');
    const development = [
        {
            title: 'o9 Involve 2022',
            type: 'Organizing Committee',
            date: '2022',
            description: 'Active member of organizing committee for o9 Involve conference'
        },
        {
            title: 'o9 Involve 2023',
            type: 'Organizing Committee',
            date: '2023',
            description: 'Active member of organizing committee for o9 Involve conference'
        },
        {
            title: 'o9 Involve 2025',
            type: 'Organizing Committee',
            date: '2025',
            description: 'Active member of organizing committee for o9 Involve conference'
        }
    ];
    
    developmentList.innerHTML = development.map(item => `
        <div class="development-card">
            <div class="development-type">${item.type}</div>
            <h3>${item.title}</h3>
            <div class="development-date">${item.date}</div>
            <p>${item.description}</p>
        </div>
    `).join('');
}

// Handle contact form
document.getElementById('contactForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // You can integrate with a service like Formspree or EmailJS here
    console.log('Form submitted:', formData);
    
    // Show success message (basic example)
    alert('Thank you! Your message has been sent.');
    document.getElementById('contactForm').reset();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Load data on page load
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    renderAchievements();
    renderEducation();
    renderDevelopment();
});
