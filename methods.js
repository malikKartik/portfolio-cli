import {socialMediaLink,labelContent,note} from './util.js'

export const getContact = (attr) =>{
    if(attr == undefined){
        const allContacts = document.createElement("div")

        allContacts.appendChild(labelContent("Social media: ","linkedin, github, instagram"))
        allContacts.appendChild(labelContent("Email: ","kartikmalik019@gmail.com"))

        return allContacts
    }
    switch(attr){
        case "instagram":
            return socialMediaLink("https://www.instagram.com/kartik._malik/","kartik._malik")
        case "github":
            return socialMediaLink("https://github.com/malikkartik","malikkartik")
        case "linkedin":
            return socialMediaLink("https://www.linkedin.com/in/kartik-malik-375254155/","kartik-malik-375254155")
        default:
            return document.createTextNode("No attribute found with name: "+attr)
    }
}

export const getAbout = () =>{
    const el = document.createElement("div")
    const img = document.createElement("img")
    img.src = "./asset/img/wave.png"
    img.setAttribute('height','14px')
    el.appendChild(img)
    const about = document.createTextNode(" Hey there! Kartik is a final year UG student at VIT, Vellore. He has been working on web and related technologies for more than 2 years now and has also worked with several startups and have fundamental experience in technologies like IoT, electronics and AI. With the passion for sharing the knowledge, he is always available for some tech talks, learning, and teaching. Apart from my work desk you will probably find hitting the gym, binge watching some cirme thriller or reading a blog.")
    el.appendChild(about)
    return el
}

export const getHelp = () =>{
    const list  = document.createElement("ul")
    list.setAttribute("style","list-style-type:none")
    const arr = [
        "clear",
        "about",
        "contact",
        "contact <SOCIAL_MEDIA_NAME> Eg: contact linkedin",
        "experience [OR] exp",
        "experience <FIELD_NAME>",
        "skills"
    ]
    arr.map(el =>{
        const listItem = document.createElement("li")
        listItem.appendChild(document.createTextNode(el))
        list.appendChild(listItem)
    })
    return list
}

export const getExperiences = (attr) =>{
    if(attr == undefined){
        const experiences = document.createElement("div")

        experiences.appendChild(labelContent("Work: ","Elocals(Full stack developer) [W1], Smallpaw(React Native and backend developer) [W2], humourbaba(Full stack engineer) [W3]"))
        experiences.appendChild(labelContent("POR: ","Organizer at Parallax [P1], Organizer at Business Ideas [P2],Coordinator at SELECT Make-a-thon [P3]"))
        experiences.appendChild(labelContent("Teaching: ","Training assistant at IITK for a course on IOT [T1]"))
        experiences.appendChild(note("To get more information use corresponding code as attribute. Eg: experience T1"))
        return experiences
    }
}

export const getSkills = (attr) =>{
    if(attr == undefined){
        const skills = document.createElement("div")
        skills.appendChild(labelContent("Interpersonal skills: ","Teaching, Leadership, Managment, Problem solving, Analytical thinking, Empathy, Team player"))
        skills.appendChild(labelContent("Technical skills: ","ReactJS, NodeJS, IoT, Data structures, algorithms, Machine Learning, Deep Learning, Database design, Micro controllers"))
        skills.appendChild(labelContent("Fullstack skills: ","Git, ReactJS, Redux, VueJS, PWAs, GatsbyJS, NextJS,  NodeJS, GraphQL, Web sockets, SQL, NoSQL, SASS, MaterialUI, React Native, Electron, RestAPI"))
        skills.appendChild(labelContent("Languages: ", "Java, Java Script, Python"))
        return skills
    }
}

export const getSex = () =>{
    const node = document.createElement("div")
    node.appendChild(document.createTextNode("Male"))
    return node
}