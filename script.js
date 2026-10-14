//HOME
/* =========================================================
   TRINOVA CYBER AWARENESS 360°
   MAIN SCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll(".tn-nav-link");

    const sections = document.querySelectorAll(
        "#home, #about, #training, #demo, #quiz, #contact"
    );


    /* =====================================================
       NAVIGATION CLICK
    ===================================================== */

    navLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || !targetId.startsWith("#")) {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    function updateActiveNavigation() {

        let currentSection = "home";

        sections.forEach(function (section) {

            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop <= 180) {
                currentSection = section.id;
            }

        });


        navLinks.forEach(function (link) {

            const linkTarget = link.getAttribute("href");

            link.classList.remove("active");

            if (linkTarget === "#" + currentSection) {
                link.classList.add("active");
            }

        });

    }


    window.addEventListener("scroll", updateActiveNavigation);

    updateActiveNavigation();


    /* =====================================================
       START TRAINING BUTTONS
    ===================================================== */

    const trainingButtons = document.querySelectorAll(
        ".tn-nav-training, .tn-primary-button, .tn-cta-button"
    );

    trainingButtons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            const target = document.querySelector("#training");

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =====================================================
       DEMO BUTTON
    ===================================================== */

    const demoButton = document.querySelector(".tn-secondary-button");

    if (demoButton) {

        demoButton.addEventListener("click", function (event) {

            const target = document.querySelector("#demo");

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    }

});


//ABOUT


//CONTACT SECTION
//contact section


document.addEventListener("DOMContentLoaded", function () {
    const faqBoxes = document.querySelectorAll(".faq-box");

    faqBoxes.forEach(function (box) {
        const question = box.querySelector("h3");
        const answer = box.querySelector("p");

        if (!question || !answer) return;

        question.addEventListener("click", function () {
            box.classList.toggle("open");
        });
    });
});

//TRAINING SCRIPT


document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       MOBILE MENU
    ========================================= */

    const tnvMobileMenu =
        document.getElementById("tnvMobileMenu");

    const tnvNav =
        document.querySelector(".tnv-nav");


    if (tnvMobileMenu && tnvNav) {

        tnvMobileMenu.addEventListener(
            "click",
            function () {

                tnvNav.classList.toggle(
                    "tnv-mobile-open"
                );

            }
        );

    }


    /* =========================================
       CLOSE MOBILE MENU AFTER LINK CLICK
    ========================================= */

    const tnvNavLinks =
        document.querySelectorAll(
            ".tnv-nav-link"
        );


    tnvNavLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                if (tnvNav) {

                    tnvNav.classList.remove(
                        "tnv-mobile-open"
                    );

                }

            }
        );

    });


    /* =========================================
       TRAINING MODULE POPUP
    ========================================= */

    const tnvModal =
        document.getElementById("tnvModal");

    const tnvModalClose =
        document.getElementById("tnvModalClose");

    const tnvModalTitle =
        document.getElementById("tnvModalTitle");

    const tnvModalStart =
        document.getElementById("tnvModalStart");

    const tnvModuleButtons =
        document.querySelectorAll(
            ".tnv-module-button"
        );


    tnvModuleButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const moduleName =
                        button.getAttribute(
                            "data-module"
                        );

                    if (tnvModalTitle) {

                        tnvModalTitle.textContent =
                            moduleName;

                    }

                    if (tnvModal) {

                        tnvModal.classList.add(
                            "tnv-open"
                        );

                        document.body.style.overflow =
                            "hidden";

                    }

                }
            );

        }
    );


    /* =========================================
       CLOSE MODAL
    ========================================= */

    function closeTnvModal() {

        if (tnvModal) {

            tnvModal.classList.remove(
                "tnv-open"
            );

            document.body.style.overflow = "";

        }

    }


    if (tnvModalClose) {

        tnvModalClose.addEventListener(
            "click",
            closeTnvModal
        );

    }


    /* =========================================
       CLICK OUTSIDE MODAL
    ========================================= */

    if (tnvModal) {

        tnvModal.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === tnvModal
                ) {

                    closeTnvModal();

                }

            }
        );

    }


    /* =========================================
       ESCAPE KEY
    ========================================= */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                closeTnvModal();

            }

        }
    );


    /* =========================================
       BEGIN MODULE
    ========================================= */

    if (tnvModalStart) {

        tnvModalStart.addEventListener(
            "click",
            function () {

                closeTnvModal();

                alert(
                    "Training module started."
                );

            }
        );

    }

});


//quiz
/* =========================================
   TRINOVA CYBERSECURITY QUIZ
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const page = document.querySelector(".quiz-page");

    // This script runs only on the quiz page.
    if (!page) return;


    /* =====================================
       MOBILE NAVIGATION
    ===================================== */

    const menuButton = document.getElementById("mobileMenuButton");
    const navLinks = document.getElementById("quizNavLinks");

    if (menuButton && navLinks) {

        menuButton.addEventListener("click", function () {
            const isOpen = navLinks.classList.toggle("menu-open");

            menuButton.setAttribute("aria-expanded", String(isOpen));
            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu"
            );

            menuButton.textContent = isOpen ? "×" : "☰";
        });

        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("menu-open");
                menuButton.setAttribute("aria-expanded", "false");
                menuButton.setAttribute("aria-label", "Open navigation menu");
                menuButton.textContent = "☰";
            });
        });
    }


    /* =====================================
       QUIZ QUESTIONS
    ===================================== */

    const questions = [

        {
            question: "Which of the following is the strongest indicator of a phishing email?",
            options: [
                "The email is from a known contact but has a minor signature variation",
                "Urgent language demanding immediate action or threat of account suspension",
                "The email contains correct company branding and logo graphics",
                "The email was received during standard regional business hours"
            ],
            answer: 1,
            explanation: "Phishing emails often use urgency, threats, or pressure to make people act without checking."
        },

        {
            question: "What is the strongest password security practice?",
            options: [
                "Use the same password for every account",
                "Use your name and date of birth",
                "Use a long, unique password for each account",
                "Write your password in a public document"
            ],
            answer: 2,
            explanation: "Long, unique passwords help prevent one compromised account from exposing your other accounts."
        },

        {
            question: "What should you do before clicking a link in an unexpected email?",
            options: [
                "Click it quickly before it expires",
                "Check the sender and carefully inspect the destination URL",
                "Forward it to everyone in your contacts",
                "Disable your browser security settings"
            ],
            answer: 1,
            explanation: "Verify the sender and inspect the link destination before opening unexpected links."
        },

        {
            question: "Which action provides the strongest additional protection for an account?",
            options: [
                "Using a shorter password",
                "Turning off login notifications",
                "Sharing credentials with a trusted colleague",
                "Enabling multifactor authentication"
            ],
            answer: 3,
            explanation: "Multifactor authentication adds a verification step beyond the password."
        },

        {
            question: "What should you do if you receive an unexpected email attachment?",
            options: [
                "Open it to see what it contains",
                "Verify the message with the sender through a trusted channel",
                "Disable antivirus protection first",
                "Upload it to a public website"
            ],
            answer: 1,
            explanation: "Verify unexpected attachments before opening them, even if the sender appears familiar."
        },

        {
            question: "What is the safest action when using public Wi-Fi?",
            options: [
                "Access sensitive accounts without checking security",
                "Turn off all device updates",
                "Use trusted secure connections and avoid sensitive activity on untrusted networks",
                "Share your hotspot password with strangers"
            ],
            answer: 2,
            explanation: "Use secure connections and avoid exposing sensitive information on untrusted networks."
        },

        {
            question: "What is a common warning sign of a fraudulent website?",
            options: [
                "A familiar layout",
                "A page that loads quickly",
                "A clearly written privacy policy",
                "A suspicious domain name that imitates a trusted brand"
            ],
            answer: 3,
            explanation: "Fraudulent websites often use misleading or misspelled domain names."
        },

        {
            question: "Why should software and operating systems be updated regularly?",
            options: [
                "Updates can fix security vulnerabilities",
                "Updates remove the need for passwords",
                "Updates make phishing impossible",
                "Updates replace all security policies"
            ],
            answer: 0,
            explanation: "Security updates often patch vulnerabilities that attackers could exploit."
        },

        {
            question: "What should you do if you think you entered your password on a phishing website?",
            options: [
                "Ignore it if the page looked professional",
                "Wait several weeks before taking action",
                "Change the password using the official website and report the incident",
                "Send your new password to the sender"
            ],
            answer: 2,
            explanation: "Change the exposed password immediately through the legitimate service and report the incident."
        },

        {
            question: "What is the safest way to handle a USB drive you found in a public place?",
            options: [
                "Plug it into your work computer",
                "Do not connect it; report it to the appropriate IT or security team",
                "Open every file on it",
                "Use it to transfer company documents"
            ],
            answer: 1,
            explanation: "Unknown USB devices can contain malicious software. Never connect them to your devices."
        },

        {
            question: "Which practice best protects confidential information?",
            options: [
                "Share files publicly for convenience",
                "Send passwords in group chats",
                "Leave confidential documents on a shared desk",
                "Give access only to people who need the information"
            ],
            answer: 3,
            explanation: "Limiting access to authorized people reduces the risk of accidental or unauthorized disclosure."
        },

        {
            question: "What should you do when your computer displays an unexpected security alert?",
            options: [
                "Verify the alert using trusted security software or your IT team",
                "Call the phone number shown in a suspicious pop-up",
                "Install whatever software the pop-up recommends",
                "Provide your password to remove the alert"
            ],
            answer: 0,
            explanation: "Fake security pop-ups can trick people into installing malware or revealing information."
        },

        {
            question: "How should you respond to a suspicious request for a payment or bank transfer?",
            options: [
                "Pay immediately if the message sounds urgent",
                "Reply with your bank details",
                "Verify the request independently using a trusted contact method",
                "Forward the request without checking it"
            ],
            answer: 2,
            explanation: "Verify financial requests using a known, trusted contact method before transferring money."
        },

        {
            question: "What is the safest practice when leaving your workstation unattended?",
            options: [
                "Leave confidential information on screen",
                "Lock your screen",
                "Share your login session",
                "Disable the device password"
            ],
            answer: 1,
            explanation: "Locking your screen helps prevent unauthorized access when you are away."
        },

        {
            question: "What should you do if you discover a possible cybersecurity incident at work?",
            options: [
                "Delete all evidence immediately",
                "Post the details publicly",
                "Ignore it unless data is visibly missing",
                "Report it promptly through the organization's approved security process"
            ],
            answer: 3,
            explanation: "Prompt reporting helps the security team investigate and reduce potential damage."
        }

    ];


    /* =====================================
       QUIZ ELEMENTS
    ===================================== */

    const questionCounter = document.getElementById("questionCounter");
    const questionCompletion = document.getElementById("questionCompletion");
    const progressTrack = document.getElementById("progressTrack");
    const progressBar = document.getElementById("progressBar");
    const questionHeading = document.getElementById("questionHeading");
    const answerOptions = document.getElementById("answerOptions");
    const quizFeedback = document.getElementById("quizFeedback");
    const previousButton = document.getElementById("previousQuestion");
    const nextButton = document.getElementById("nextQuestion");
    const questionContent = document.getElementById("questionContent");

    if (
        !questionCounter ||
        !questionCompletion ||
        !progressTrack ||
        !progressBar ||
        !questionHeading ||
        !answerOptions ||
        !quizFeedback ||
        !previousButton ||
        !nextButton ||
        !questionContent
    ) {
        return;
    }


    /* =====================================
       QUIZ STATE
    ===================================== */

    let currentQuestion = 0;
    let selectedAnswers = new Array(questions.length).fill(null);
    let quizFinished = false;


    /* =====================================
       DISPLAY QUESTION
    ===================================== */

    function showQuestion() {

        if (quizFinished) return;

        const question = questions[currentQuestion];
        const questionNumber = currentQuestion + 1;
        const percentage = Math.round(
            (questionNumber / questions.length) * 100
        );

        questionCounter.textContent =
            `Question ${questionNumber} of ${questions.length}`;

        questionCompletion.textContent =
            `${percentage}% Complete`;

        progressBar.style.width = `${percentage}%`;

        progressTrack.setAttribute("aria-valuemax", questions.length);
        progressTrack.setAttribute("aria-valuenow", questionNumber);

        questionHeading.textContent = question.question;

        answerOptions.replaceChildren();

        quizFeedback.textContent = "";
        quizFeedback.className = "quiz-feedback";

        question.options.forEach(function (option, index) {

            const button = document.createElement("button");
            button.type = "button";
            button.className = "quiz-answer-option";

            button.setAttribute("aria-pressed", "false");

            if (selectedAnswers[currentQuestion] === index) {
                button.classList.add("selected");
                button.setAttribute("aria-pressed", "true");
            }

            const radio = document.createElement("span");
            radio.className = "quiz-radio";
            radio.setAttribute("aria-hidden", "true");

            const letter = document.createElement("span");
            letter.className = "quiz-answer-letter";
            letter.textContent = String.fromCharCode(65 + index) + ".";

            const text = document.createElement("span");
            text.className = "quiz-answer-text";
            text.textContent = option;

            button.append(radio, letter, text);

            button.addEventListener("click", function () {

                selectedAnswers[currentQuestion] = index;

                answerOptions
                    .querySelectorAll(".quiz-answer-option")
                    .forEach(function (answerButton) {
                        answerButton.classList.remove("selected");
                        answerButton.setAttribute("aria-pressed", "false");
                    });

                button.classList.add("selected");
                button.setAttribute("aria-pressed", "true");

                quizFeedback.textContent = "";
                quizFeedback.className = "quiz-feedback";
            });

            answerOptions.appendChild(button);
        });

        previousButton.disabled = currentQuestion === 0;

        nextButton.textContent =
            currentQuestion === questions.length - 1
                ? "Submit Quiz"
                : "Next Question";
    }


    /* =====================================
       PREVIOUS QUESTION
    ===================================== */

    previousButton.addEventListener("click", function () {

        if (quizFinished || currentQuestion === 0) return;

        currentQuestion--;
        showQuestion();
    });


    /* =====================================
       NEXT QUESTION / SUBMIT
    ===================================== */

    nextButton.addEventListener("click", function () {

        if (quizFinished) return;

        if (selectedAnswers[currentQuestion] === null) {

            quizFeedback.textContent =
                "Please select an answer before continuing.";

            quizFeedback.className = "quiz-feedback error";

            return;
        }

        if (currentQuestion < questions.length - 1) {

            currentQuestion++;
            showQuestion();

        } else {

            showResults();
        }
    });


    /* =====================================
       QUIZ RESULTS
    ===================================== */

    function showResults() {

        quizFinished = true;

        let correctAnswers = 0;

        questions.forEach(function (question, index) {

            if (selectedAnswers[index] === question.answer) {
                correctAnswers++;
            }
        });

        const score = Math.round(
            (correctAnswers / questions.length) * 100
        );

        const passed = score >= 80;

        questionCounter.textContent = "Quiz Completed";
        questionCompletion.textContent = `${score}% Score`;

        progressBar.style.width = "100%";
        progressTrack.setAttribute("aria-valuenow", questions.length);

        questionContent.replaceChildren();

        const resultTitle = document.createElement("h2");
        resultTitle.className = "quiz-question";
        resultTitle.textContent = passed
            ? "Congratulations! You Passed."
            : "Quiz Completed";

        const resultText = document.createElement("p");
        resultText.style.fontSize = "18px";
        resultText.style.lineHeight = "1.7";
        resultText.style.color = "#3d4c66";
        resultText.textContent =
            `You answered ${correctAnswers} out of ${questions.length} questions correctly.`;

        const resultScore = document.createElement("p");
        resultScore.style.fontSize = "32px";
        resultScore.style.fontWeight = "700";
        resultScore.style.color = passed ? "#16803d" : "#2862f5";
        resultScore.textContent = `${score}%`;

        const resultMessage = document.createElement("p");
        resultMessage.style.fontSize = "16px";
        resultMessage.style.lineHeight = "1.7";
        resultMessage.style.color = "#3d4c66";
        resultMessage.textContent = passed
            ? "You achieved the required score of 80% or above."
            : "You need at least 80% to pass. Review the topics and try again.";

        questionContent.append(
            resultTitle,
            resultText,
            resultScore,
            resultMessage
        );

        quizFeedback.textContent = "";
        quizFeedback.className = "quiz-feedback";

        previousButton.style.display = "none";
        nextButton.textContent = "Retake Quiz";
        nextButton.type = "button";
        nextButton.onclick = restartQuiz;
    }


    /* =====================================
       RESTART QUIZ
    ===================================== */

    function restartQuiz() {

        currentQuestion = 0;
        selectedAnswers = new Array(questions.length).fill(null);
        quizFinished = false;

        previousButton.style.display = "";
        nextButton.onclick = null;

        showQuestion();
    }


    /* =====================================
       START QUIZ
    ===================================== */

    showQuestion();

});



//DEMO


/* =========================================
   TRINOVA 360° INTERACTIVE DEMO
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    const hotspots = document.querySelectorAll(".hotspot");
    const threatCount = document.getElementById("threatCount");

    const threatCards = document.querySelectorAll(".threat-card");

    let foundThreats = new Set();


    /* =========================================
       HOTSPOT CLICK
    ========================================== */

    hotspots.forEach(function (hotspot) {

        hotspot.addEventListener("click", function () {

            const id = hotspot.dataset.id;


            /* ---------------------------------
               IF NOT ALREADY FOUND
            --------------------------------- */

            if (!foundThreats.has(id)) {

                foundThreats.add(id);

                hotspot.classList.add("found");

                updateCounter();

                revealThreat(id);

            }

            /* ---------------------------------
               SCROLL TO GUIDE
            --------------------------------- */

            const selectedCard = document.querySelector(
                `.threat-card[data-threat="${id}"]`
            );

            if (selectedCard) {

                setTimeout(function () {

                    selectedCard.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                }, 150);

            }

        });

    });


    /* =========================================
       UPDATE COUNTER
    ========================================== */

    function updateCounter() {

        threatCount.textContent = foundThreats.size;

    }


    /* =========================================
       REVEAL THREAT CARD
    ========================================== */

    function revealThreat(id) {

        const card = document.querySelector(
            `.threat-card[data-threat="${id}"]`
        );

        if (!card) {
            return;
        }

        card.classList.remove("hidden-threat");

        card.classList.add("revealed");

    }


    /* =========================================
       NAVBAR ACTIVE LINKS
    ========================================== */

    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");

        });

    });


    /* =========================================
       START TRAINING BUTTON
    ========================================== */

    const trainingButton = document.querySelector(".training-btn");

    if (trainingButton) {

        trainingButton.addEventListener("click", function (event) {

            event.preventDefault();

            const demoSection = document.querySelector(".demo-section");

            if (demoSection) {

                demoSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    }

});