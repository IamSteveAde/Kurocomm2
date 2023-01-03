const Togglemenu = (e) =>{
    let nav_links = document.getElementById("nav_links");
    e.name === 'menu' ? (e.name = 'close', nav_links.style.width = "65%", document.body.classList.toggle('lock-scroll'))
    : (e.name = 'menu', nav_links.style.width = "0%", document.body.classList.toggle('lock-scroll'))
};

const firstName = document.getElementById('firstname_inputfield');
const lastname = document.getElementById('lastname_inputfield');
const email = document.getElementById('email_inputfield');
const tel = document.getElementById('tel_inputfield');
const subject = document.getElementById('subject_inputfield');
const message = document.getElementById('message_textarea');
const contact_us_form = document.getElementById('homeContactForm');


const SubmitContactForm = (e) =>{
    e.preventDefault();
    Email.send({
        SecureToken : "34d95640-3dfc-42ce-a5fe-a80499b4f574",
        To : 'feyisayoamujoyegbe@gmail.com',
        From : "feyisayoamujoyegbe@gmail.com",
        Subject : "Testing",
        Body : "Testing One Two, Hopefully it works cus why not?"
    }).then(
      message => alert(message)
    );
    // console.log("f260c124-e1b0-4938-ac57-83841fee1c9b");
}
