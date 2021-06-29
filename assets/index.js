const query = (selector)=>{
    return document.querySelector(selector);
}
const queryAll = (selector)=>{
    return document.querySelectorAll(selector);
}

query("#startClicker").addEventListener("click", () => {
  
  let params = {
    active:true,
    currentWindow:true
  }
  chrome.tabs.query(params,gotTabs);

  function gotTabs(tabs){
    let selector = query("#selector").value;
    let count = query("#count").value;
    let message = {
      "selector":selector,
      "count":count
    }
    chrome.tabs.sendMessage(tabs[0].id,message);
  }

});
