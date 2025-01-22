function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
};
//form
(function() {
    emailjs.init('ba4l4eheXe6inDRPO'); // Replace with your actual public key
})();


// Add Event Listener on Form Submission
document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('contact-form');
    const responseDiv = document.getElementById('formResponse');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        responseDiv.style.color = "blue";
        responseDiv.textContent = "Submitting...";

        emailjs.sendForm('service_b21qk9s', 'template_zfutxds', form)
            .then(() => {
                responseDiv.style.color = "green";
                responseDiv.textContent = "Request sent successfully!";
                form.reset();
                setTimeout(() => {
                responseDiv.textContent = "";
            }   ,2000);
            })
            .catch(error => {
                responseDiv.style.color = "red";
                responseDiv.textContent = "An error occurred. Please try again later.";
                console.error("EmailJS Error:", error);
                setTimeout(() => {
                responseDiv.textContent = "";
        },         2000);
            });
    });
});