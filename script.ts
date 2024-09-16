
const form= document.getElementById("resume-form") as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resumedisplay') as HTMLDivElement;
 // handle form submission
  form.addEventListerner('submit', (event: Event) => {
 event.preventDefault();
 //type assertion
 const name = (document.getElementById('name') as HTMLInputElement).value;
 const dob =( document.getElementById('dob') as HTMLInputElement).value;
 const phone = (document.getElementById('phone') as HTMLInputElement).value;
 const email= (document.getElementById('email') as HTMLInputElement).value;
 const education =( document.getElementById('education') as HTMLTextAreaElement).value;
 const skills= (document.getElementById('skills') as HTMLTextAreaElement).value;
 const experience =( document.getElementById('experience') as HTMLTextAreaElement).value;


 
 //create resume output
 const resumeHTML= `
 <h2>Editable Resume</h2>
 
 <h3>Personal Infomation</h3>
 <p<b>Name:</b><span contenteditable = "true">${name}</span> </p>
 <p><b>Date Of Birth:</b><span contenteditable="true">${dob}</span> </p>
 <p><b>Number:</b> <span contenteditable = "true">${phone} </span></p>
 <p><b>Email:</b><span contenteditable = "true"> ${email} </span></p>

 <h3>education</h3>
 <p contenteditable = "true">${education}</p>
 
 <h3>skills</h3>
 <p contenteditable = "true">${skills}</p>

 <h3>work experience</h3>
 <p contenteditable = "true">${experience}</p>
 `;

 // display

 
 if(resumeDisplayElement){
     resumeDisplayElement.innerHTML = resumeHTML
 } else {
     console.error('the resume outpUt element are missing');
 } 

 });