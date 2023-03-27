const about = document.querySelector("#about")
const contact = document.querySelector("#contact")
const education = document.querySelector("#education")
const experience = document.querySelector("#experience")


const aboutContent = document.querySelector("#about-content")
const contactContent = document.querySelector("#contact-content")
const educationContent = document.querySelector("#education-content")
const experienceContent = document.querySelector("#experience-content")

const f = (d, t, c)=>{
    d.addEventListener('click', ()=>{
        const wBox = new WinBox({
            title: t,
            background: "#00aa00",
            x: "center",
            y: "center",
            width: "50%",
            height: "50%",
            mount: c
        })
    })
};

f(about, "About Me", aboutContent)
f(contact, "Contact Me", contactContent)
f(education, "My Education", educationContent)
f(experience, "My Experience", experienceContent)

// contact.addEventListener('click', ()=>{
//     const contactBox = new WinBox({
//         title: "Contact Me",
//         background: "#00aa00",
//         width: "50%",
//         height: "400px",
        
//         mount: contactContent
//     })
// })
