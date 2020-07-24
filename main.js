import {getContact,getAbout,getHelp,getExperiences,getSkills,getSex} from './methods.js'

const COMMANDS = new Map()
COMMANDS.set("contact",getContact)
COMMANDS.set("about",getAbout)
COMMANDS.set("help",getHelp)
COMMANDS.set("experience",getExperiences)
COMMANDS.set("skills", getSkills)
COMMANDS.set("exp",getExperiences)
COMMANDS.set("sex",getSex)

function terminalInputHandler(e){
    if(e.keyCode == 13){
        let node = document.createElement("div")
        node.setAttribute('class','each-past-command')
        const value = document.querySelector("#terminalInput").value
        const para = document.createElement("p")
        para.appendChild(document.createTextNode(document.querySelector("#userPath").firstElementChild.innerText + " "))
        para.setAttribute('class','userpath')
        const paraSpan = document.createElement("span")
        paraSpan.appendChild(document.createTextNode(value))
        para.appendChild(paraSpan)
        node.appendChild(para)
        const commandResponse = resolveCommand(value)
        if(commandResponse){
            node.appendChild(commandResponse)
            document.getElementById("cli-history").appendChild(node)
        }
        document.querySelector("#terminalInput").value = ""
        document.querySelector(".cli-body").scrollTop = document.querySelector(".cli-body").scrollHeight - 520
    }
}

document.querySelector("#terminalInput").addEventListener('keydown',terminalInputHandler)

const resolveCommand = (command) =>{
    const arr = command.split(" ")
    if(command == "clear"){
        document.getElementById("cli-history").innerHTML = ""
        document.querySelector("#terminalInput").value = ""
        return null
    }

    let node = document.createElement("div")
    const para = document.createElement("p")
    para.appendChild((COMMANDS.has(arr[0])?COMMANDS.get(arr[0])(arr[1]):document.createTextNode("command not found: "+arr[0])))
    node.appendChild(para)
    return node
}