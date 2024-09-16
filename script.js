var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById('resumedisplay');
// handle form submission
form.addEventListerner('submit', function (event) {
    event.preventDefault();
    //type assertion
    var name = document.getElementById('name').value;
    var dob = document.getElementById('dob').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    //create resume output
    var resumeHTML = "\n <h2>Editable Resume</h2>\n \n <h3>Personal Infomation</h3>\n <p<b>Name:</b><span contenteditable = \"true\">".concat(name, "</span> </p>\n <p><b>Date Of Birth:</b><span contenteditable=\"true\">").concat(dob, "</span> </p>\n <p><b>Number:</b> <span contenteditable = \"true\">").concat(phone, " </span></p>\n <p><b>Email:</b><span contenteditable = \"true\"> ").concat(email, " </span></p>\n\n <h3>education</h3>\n <p contenteditable = \"true\">").concat(education, "</p>\n \n <h3>skills</h3>\n <p contenteditable = \"true\">").concat(skills, "</p>\n\n <h3>work experience</h3>\n <p contenteditable = \"true\">").concat(experience, "</p>\n ");
    // display
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('the resume outpUt element are missing');
    }
});
