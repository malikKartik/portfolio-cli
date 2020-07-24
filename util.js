export const socialMediaLink = (url,displayText) =>{
    const link = document.createElement("a")
    link.setAttribute("href",url)
    link.setAttribute("style","color:#b7c5d2;")
    link.setAttribute("target","_blank")
    link.appendChild(document.createTextNode(displayText))
    return link
}

export const labelContent = (label,content) =>{
    const para  = document.createElement("p")
    const paraLabel = document.createElement("span")
    paraLabel.setAttribute('style','color:#fa615c;')
    paraLabel.appendChild(document.createTextNode(label))
    para.appendChild(paraLabel)
    para.appendChild(document.createTextNode(content))
    return para
}

export const note = (noteText)=>{
    const para  = document.createElement("p")
    const nodeSpan = document.createElement("span")
    nodeSpan.setAttribute('style','color:#efff00;')
    nodeSpan.appendChild(document.createTextNode("Note: "+noteText))
    para.appendChild(nodeSpan)
    return para
}