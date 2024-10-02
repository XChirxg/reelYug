// Scroll to services
function scrollToServices() {
    document.getElementById('combined-form').scrollIntoView({ behavior: 'smooth' });
}




// Add class to body on load for animations
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});



// Reviews Slider Functionality
let currentReview = 0;
const reviews = document.querySelectorAll('.review');

function showReview(index) {
    reviews.forEach((review, i) => {
        review.classList.toggle('active', i === index);
    });
}

// Automatically cycle through reviews every 5 seconds
setInterval(() => {
    currentReview = (currentReview + 1) % reviews.length;
    showReview(currentReview);
}, 3000);

// Initialize the first review
showReview(currentReview);



let currentStep = 1;
const totalSteps = 9; // Total number of steps in the form
const formData = {};

// Update the selectOption function to manage progress
function selectOption(field, value) {
    formData[field] = value;

    document.querySelector(`.form-step[data-step="${currentStep}"]`).classList.remove('active');
    currentStep++;
    
    // Update progress bar
    updateProgressBar();

    if (currentStep <= totalSteps) {
        document.querySelector(`.form-step[data-step="${currentStep}"]`).classList.add('active');
    }
}
// Function to handle "Other" industry input
function selectOtherIndustry() {
    const otherIndustryInput = document.getElementById('other-industry');
    if (otherIndustryInput.value.trim() !== '') {
        formData['industry'] = otherIndustryInput.value;
    }
}
// Update progress bar function
function updateProgressBar() {
    const progressWidth = ((currentStep - 1) / (totalSteps - 1)) * 100; // Calculate percentage
    document.querySelector('.progress').style.width = `${progressWidth}%`;
}

function submitForm() {
    const name = document.getElementById('name').value;
    formData['name'] = name;

    // Prepare the email body with a professional format
    const emailContent = `
        Dear ReelYug Team,

        I hope this message finds you well. I am writing to inquire about your short video advertisement services. Below are my details:

        - Name: ${formData['name']}
        - Type: ${formData['userType']}
        - Industry: ${formData['industry']}
        - Budget: ${formData['budget']}
        - Ad Timeline: ${formData['timeline']}
        - Video Duration: ${formData['duration']}
        - Preferred Style: ${formData['visuals']}
        - Voiceover Preference: ${formData['voiceover']}
        
        I am looking forward to your response and hope to discuss further.

        Best regards,
        ${formData['name']}
    `;

    // Use mailto link to send the email
    const mailToLink = `mailto:xchirxg@gmail.com?subject=ReelYug Project Inquiry&body=${encodeURIComponent(emailContent)}`;

    window.location.href = mailToLink;
}


function continueToSubmit() {
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        alert("Please enter your name.");
        return;
    }
    formData['name'] = name;

    // Move to the submission step
    document.querySelector(`.form-step[data-step="${currentStep}"]`).classList.remove('active');
    currentStep++;
    updateProgressBar();
    document.querySelector(`.form-step[data-step="${currentStep}"]`).classList.add('active');
}

function selectOtherIndustryContinue() {
    const otherIndustryInput = document.getElementById('other-industry');
    if (otherIndustryInput.value.trim() !== '') {
        formData['industry'] = otherIndustryInput.value;
    }
    
    // Move to the next step
    document.querySelector(`.form-step[data-step="${currentStep}"]`).classList.remove('active');
    currentStep++;
    updateProgressBar();
    document.querySelector(`.form-step[data-step="${currentStep}"]`).classList.add('active');
}
function showOtherIndustryInput() {
    document.getElementById('other-industry-input').style.display = 'block';
}

function submitOtherIndustry() {
    const otherIndustryInput = document.getElementById('other-industry');
    if (otherIndustryInput.value.trim() === '') {
        alert("Please enter your industry.");
        return;
    }
    
    // Save the other industry value
    formData['industry'] = otherIndustryInput.value;

    // Move to the next step
    document.querySelector(`.form-step[data-step="${currentStep}"]`).classList.remove('active');
    currentStep++;
    updateProgressBar();
    document.querySelector(`.form-step[data-step="${currentStep}"]`).classList.add('active');
}
