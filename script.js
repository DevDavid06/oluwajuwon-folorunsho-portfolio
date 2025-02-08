function showSideBar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
    document.body.style.overflow = 'hidden'; // Disable background scrolling

}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
    document.body.style.overflow = ''; // Re-enable background scrolling
};

document.addEventListener('DOMContentLoaded', function () {
    const sidebarLinks = document.querySelectorAll('.sidebar a'); // Select all sidebar links

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            hideSidebar(); // Close the sidebar
        });
    });
});



(function() {
    emailjs.init('ba4l4eheXe6inDRPO'); 
})();


document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('contact-form');
    const responseDiv = document.getElementById('formResponse');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        responseDiv.style.color = "white";
        responseDiv.textContent = "Submitting...";

        emailjs.sendForm('service_b21qk9s', 'template_zfutxds', form)
            .then(() => {
                responseDiv.style.color = "white";
                responseDiv.textContent = "Message sent successfully!";
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
