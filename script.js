/*
// Fetch data from JSON file
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Get project data
    const projects = data.projects;

    // Display project data on dashboard
    projects.forEach(project => {
      const projectOverview = document.querySelector('.project-overview');
      const projectProgress = document.querySelector('.progress-tracking');
      const projectBudget = document.querySelector('.budget-management');
      const projectQuality = document.querySelector('.quality-control');
      const projectSafety = document.querySelector('.safety-monitoring');

      // Create project cards
      const projectCard = document.createElement('div');
      projectCard.classList.add('project-card');

      // Project Overview
      const projectName = document.createElement('h3');
      projectName.textContent = project.name;
      projectOverview.appendChild(projectName);

      const projectProgressText = document.createElement('p');
      projectProgressText.textContent = `Progress: ${project.progress}%`;
      projectOverview.appendChild(projectProgressText);

      const projectScheduleText = document.createElement('p');
      projectScheduleText.textContent = `Schedule: ${project.schedule}`;
      projectOverview.appendChild(projectScheduleText);

      const projectBudgetText = document.createElement('p');
      projectBudgetText.textContent = `Budget: $${project.budget}`;
      projectOverview.appendChild(projectBudgetText);

      const projectQualityText = document.createElement('p');
      projectQualityText.textContent = `Quality: ${project.quality}%`;
      projectOverview.appendChild(projectQualityText);

      const projectSafetyText = document.createElement('p');
      projectSafetyText.textContent = `Safety: ${project.safety}%`;
      projectOverview.appendChild(projectSafetyText);

      // Progress Tracking Chart
      const progressChart = document.getElementById('progress-chart').getContext('2d');
      new Chart(progressChart, {
        type: 'bar',
        data: {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          datasets: [{
            label: 'Progress',
            data: [25, 50, 75, 100],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      // Budget Management Chart
      const budgetChart = document.getElementById('budget-chart').getContext('2d');
      new Chart(budgetChart, {
        type: 'pie',
        data: {
          labels: ['Allocated', 'Spent', 'Remaining'],
          datasets: [{
            label: 'Budget',
            data: [project.budget * 0.7, project.budget * 0.2, project.budget * 0.1],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
      // Quality Control Chart
      const qualityChart = document.getElementById('quality-chart').getContext('2d');
      new Chart(qualityChart, {
        type: 'line',
        data: {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          datasets: [{
            label: 'Quality',
            data: [80, 85, 90, 95],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      // Safety Monitoring Chart
      const safetyChart = document.getElementById('safety-chart').getContext('2d');
      new Chart(safetyChart, {
        type: 'bar',
        data: {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          datasets: [{
            label: 'Safety',
            data: [90, 92, 95, 98],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    });
  })
  .catch(error => console.error(error));

*/





document.getElementById('project-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the values entered by the user
    const projectName = document.getElementById('project-name').value;
    const projectProgress = document.getElementById('project-progress').value;
    const projectSchedule = document.getElementById('project-schedule').value;
    const projectBudget = document.getElementById('project-budget').value;
    const projectQuality = document.getElementById('project-quality').value;
    const projectSafety = document.getElementById('project-safety').value;

    // Create a new list item to display the project details
    const projectList = document.getElementById('project-list');
    const projectItem = document.createElement('li');
    
    projectItem.innerHTML = `
        <strong>Project Name:</strong> ${projectName} <br>
        <strong>Progress:</strong> ${projectProgress}% <br>
        <strong>Schedule:</strong> ${projectSchedule} <br>
        <strong>Budget:</strong> $${projectBudget} <br>
        <strong>Quality:</strong> ${projectQuality}% <br>
        <strong>Safety:</strong> ${projectSafety}% <br>
    `;

    // Append the new project item to the project list
    projectList.appendChild(projectItem);

    // Optionally, clear the form after submission
    document.getElementById('project-form').reset();
});




/*
// Function to load projects from localStorage
function loadProjects() {
    const storedProjects = localStorage.getItem('projects');
    if (storedProjects) {
        return JSON.parse(storedProjects);
    }
    return [];
}

// Function to save projects to localStorage
function saveProjects(projects) {
    localStorage.setItem('projects', JSON.stringify(projects));
}

// Function to display projects on the page
function displayProjects() {
    const projects = loadProjects();
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = ''; // Clear existing projects

    projects.forEach((project, index) => {
        const projectItem = document.createElement('li');
        projectItem.innerHTML = `
            <strong>Project Name:</strong> ${project.name} <br>
            <strong>Progress:</strong> ${project.progress}% <br>
            <strong>Schedule:</strong> ${project.schedule} <br>
            <strong>Budget:</strong> $${project.budget} <br>
            <strong>Quality:</strong> ${project.quality}% <br>
            <strong>Safety:</strong> ${project.safety}% <br>
            <button class="edit-btn" data-index="${index}">Edit</button>
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;
        projectList.appendChild(projectItem);
    });

    // Add event listeners for Edit and Delete buttons
    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', editProject);
    });
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', deleteProject);
    });
}

// Function to handle form submission
document.getElementById('project-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const projectName = document.getElementById('project-name').value;
    const projectProgress = document.getElementById('project-progress').value;
    const projectSchedule = document.getElementById('project-schedule').value;
    const projectBudget = document.getElementById('project-budget').value;
    const projectQuality = document.getElementById('project-quality').value;
    const projectSafety = document.getElementById('project-safety').value;

    const newProject = {
        name: projectName,
        progress: projectProgress,
        schedule: projectSchedule,
        budget: projectBudget,
        quality: projectQuality,
        safety: projectSafety
    };

    const projects = loadProjects();
    projects.push(newProject);
    saveProjects(projects);
    displayProjects();

    document.getElementById('project-form').reset(); // Reset form after submission
});

// Function to edit a project
function editProject(event) {
    const index = event.target.getAttribute('data-index');
    const projects = loadProjects();
    const project = projects[index];

    // Populate form with project data for editing
    document.getElementById('project-name').value = project.name;
    document.getElementById('project-progress').value = project.progress;
    document.getElementById('project-schedule').value = project.schedule;
    document.getElementById('project-budget').value = project.budget;
    document.getElementById('project-quality').value = project.quality;
    document.getElementById('project-safety').value = project.safety;

    // Change the submit button text to "Update Project"
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.textContent = 'Update Project';

    // Remove the project and update the form when the user submits the changes
    submitButton.addEventListener('click', function updateProject(event) {
        event.preventDefault();

        project.name = document.getElementById('project-name').value;
        project.progress = document.getElementById('project-progress').value;
        project.schedule = document.getElementById('project-schedule').value;
        project.budget = document.getElementById('project-budget').value;
        project.quality = document.getElementById('project-quality').value;
        project.safety = document.getElementById('project-safety').value;

        projects[index] = project;
        saveProjects(projects);
        displayProjects();

        // Reset the form and change the button text back
        document.getElementById('project-form').reset();
        submitButton.textContent = 'Submit Project';
    });
}

// Function to delete a project
function deleteProject(event) {
    const index = event.target.getAttribute('data-index');
    const projects = loadProjects();
    projects.splice(index, 1); // Remove the project at the specified index
    saveProjects(projects);
    displayProjects();
}

// Initial call to load and display projects
displayProjects();
*/