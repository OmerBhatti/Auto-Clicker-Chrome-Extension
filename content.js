const query = (selector)=>{
    return document.querySelector(selector);
}
const queryAll = (selector)=>{
    return document.querySelectorAll(selector);
}

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message,sender,sendResponse)
{
    for (let i = 0; i < message.count; i++) 
    {
        let elem = query(message.selector);
        elem.click();
    }
}
