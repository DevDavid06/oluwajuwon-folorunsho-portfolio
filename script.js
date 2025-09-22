document.addEventListener("DOMContentLoaded", function () {
            // About typing effect
            const texts = [
                "a Web Designer.",
                "a Developer.",
                "a Graphic Designer.",
                "a Freelancer.",
                "into Tech."
            ];
            let count = 0, index = 0, currentText = "", letter = "";
            function type() {
                if (count === texts.length) count = 0;
                currentText = texts[count];
                letter = currentText.slice(0, ++index);
                document.getElementById("typing").textContent = letter;
                if (letter.length === currentText.length) {
                    count++; index = 0; setTimeout(type, 1000);
                } else {
                    setTimeout(type, 100);
                }
            }
            type();

            function showPDF(){
                window.open('Oluwajuwon-cv.pdf', '_blank');
            }

            // Hero typing effect
            const texts1 = [
                "Exploring Web Design",
                "Exploring Graphic Design",
                "Creating Tech Innovation.",
                "Building Tech Solutions"
            ];
            let count1 = 0, index1 = 0, currentText1 = "", letter1 = "";
            function type1() {
                if (count1 === texts1.length) count1 = 0;
                currentText1 = texts1[count1];
                letter1 = currentText1.slice(0, ++index1);
                document.getElementById("head-type").textContent = letter1;
                if (letter1.length === currentText1.length) {
                    count1++; index1 = 0; setTimeout(type1, 1000);
                } else {
                    setTimeout(type1, 100);
                }
            }
            type1();

            // About section slide-up animation
            const section = document.querySelector('.slide-up-section');
            if (section) {
                const observer = new IntersectionObserver(function(entries){
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            section.classList.add('visible');
                            observer.unobserve(section);
                        }
                    });
                }, { threshold: 0.2 });
                observer.observe(section);
            }
        });

        // ===========================
        // Projects Slideshow Logic
        // ===========================
        (function(){
            const wrapper = document.querySelector(".slideshow-wrapper");
            const slides = [...document.querySelectorAll(".proj-card")];
            const prevBtn = document.querySelector(".arrow.left");
            const nextBtn = document.querySelector(".arrow.right");
            const container = document.querySelector(".slideshow-container");
            let index = 0;

            function perView() {
                if (window.innerWidth <= 600) return 1;
                if (window.innerWidth <= 900) return 2;
                return 3;
            }
            function stepSize() {
                const style = getComputedStyle(wrapper);
                const gap = parseFloat(style.columnGap || style.gap || 0);
                const cardW = slides[0].getBoundingClientRect().width;
                return cardW + (gap || 0);
            }
            function maxIndex() {
                return Math.max(0, slides.length - perView());
            }
            function goTo(i, animate = true) {
                index = Math.min(Math.max(i, 0), maxIndex());
                wrapper.style.transition = animate ? "transform .5s ease-in-out" : "none";
                wrapper.style.transform = `translateX(${-index * stepSize()}px)`;
            }
            function nextSlide() {
                if (index >= maxIndex()) {
                    wrapper.style.transition = "none";
                    index = 0;
                    wrapper.style.transform = "translateX(0px)";
                    requestAnimationFrame(() => requestAnimationFrame(() => goTo(0, true)));
                } else {
                    goTo(index + 1, true);
                }
            }
            function prevSlide() {
                if (index <= 0) {
                    index = maxIndex();
                    wrapper.style.transition = "none";
                    wrapper.style.transform = `translateX(${-index * stepSize()}px)`;
                    requestAnimationFrame(() => requestAnimationFrame(() => goTo(index, true)));
                } else {
                    goTo(index - 1, true);
                }
            }
            nextBtn.addEventListener("click", nextSlide);
            prevBtn.addEventListener("click", prevSlide);

            let auto = setInterval(nextSlide, 3000);
            container.addEventListener("mouseenter", () => clearInterval(auto));
            container.addEventListener("mouseleave", () => auto = setInterval(nextSlide, 3000));
            window.addEventListener("resize", () => goTo(index, false));
            goTo(0, false);
        })();
        (function(){
                const btn = document.getElementById('work-together-btn');
                const msg = document.getElementById('work-together-message');
                btn.addEventListener('click',function(){
                    msg.style.display='block';
                    msg.style.color='#fff';
                    msg.textContent='Sending request...';
                    // You must have a template set up in EmailJS for this
                    if(window.emailjs){
                        emailjs.send('service_b21qk9s','template_zfutxds',{
                            from_name: 'Portfolio Visitor',
                            email_id: 'noreply@yourdomain.com',
                            message: 'Someone clicked "Request Project" on your portfolio. Please contact them!'
                        }).then(function(){
                            msg.style.color='#0f0';
                            msg.textContent='Request sent! He will be alerted on his email.';
                            setTimeout(()=>{msg.style.display='none';},3000);
                        },function(){
                            msg.style.color='#f00';
                            msg.textContent='Failed to send request. Please try again.';
                            setTimeout(()=>{msg.style.display='none';},3000);
                        });
                    }else{
                        msg.style.color='#f00';
                        msg.textContent='Email service not available.';
                        setTimeout(()=>{msg.style.display='none';},3000);
                    }
                });
            })();
            


            window.addEventListener("scroll", () => {
                document.querySelectorAll(".progress").forEach(bar => {
                const rect = bar.getBoundingClientRect();
                if (rect.top < window.innerHeight && bar.style.width === "") {
                    bar.style.width = bar.getAttribute("data-progress") + "%";
                }
                });
            });

            // Testimonials Auto Slider
            let currentTestimonial = 0;
            const testimonials = document.querySelectorAll(".testimonial-slide");

            function showTestimonial(index) {
            testimonials.forEach((slide, i) => {
                slide.classList.remove("active");
                if (i === index) {
                slide.classList.add("active");
                }
            });
            }

            function nextTestimonial() {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
}

setInterval(nextTestimonial, 4000); // Change every 4 seconds

        // ===========================
        // EmailJS Contact Form
        // ===========================
        (function(){
            if (window.emailjs) emailjs.init("ba4l4eheXe6inDRPO");
            const form = document.getElementById('emailForm');
            if (!form) return;
            form.addEventListener('submit', function(e){
                e.preventDefault();
                const msg = document.getElementById('form-message');
                msg.style.color = '#fff';
                msg.style.display = 'block';
                msg.textContent = 'submitting.....';
                emailjs.sendForm('service_b21qk9s', 'template_zfutxds', this)
                    .then(function(){
                        msg.style.color = '#0f0';
                        msg.textContent = 'Message sent successfully!';
                        setTimeout(()=>{ msg.textContent=''; msg.style.display='none'; }, 3000);
                        form.reset();
                    }, function(){
                        msg.style.color = '#f00';
                        msg.textContent = 'Failed to send message. Please try again.';
                        setTimeout(()=>{ msg.textContent=''; msg.style.display='none'; }, 3000);
                    });
            });
        })();
