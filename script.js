document.addEventListener('DOMContentLoaded', function() {
    // Simulated data for job recommendations
    const jobRecommendations = [
        { title: 'Software Engineer', company: 'Tech Co.', location: 'UJJAIN', salary: '80,000 - 100,000' },
        { title: 'Marketing Manager', company: 'Marketing Agency', location: 'BHOPAL', salary: '70,000 - 90,000' },
        { title: 'Data Analyst', company: 'Analytics Inc.', location: 'MUMBAI', salary: '75,000 - 95,000' },
        // More job recommendations can be added
    ];

    const jobListingsContainer = document.querySelector('.job-listings');

    // Populate job listings on the homepage
    jobRecommendations.forEach(job => {
        const jobListing = document.createElement('div');
        jobListing.classList.add('job-listing');
        jobListing.innerHTML = `
            <h3>${job.title}</h3>
            <p><strong>Company:</strong> ${job.company}</p>
            <p><strong>Location:</strong> ${job.location}</p>
            <p><strong>Salary:</strong> ${job.salary}</p>
            <button class="apply-btn">Apply Now</button>
        `;
        jobListingsContainer.appendChild(jobListing);
    });

    // Handle Apply Now button clicks
    jobListingsContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('apply-btn')) {
            const jobTitle = e.target.parentNode.querySelector('h3').textContent;
            alert(`You have applied for the job: ${jobTitle}`);
            // Here you would typically handle the job application process
            // For demonstration, we'll display an alert message.
        }
    });
});