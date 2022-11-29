let getBtn = document.getElementById("getbtn")

getBtn.addEventListener("click",function(){

    getCurrentTab()
})

async function getCurrentTab(){
    let [tab] = await chrome.tabs.query({active:true,lastFocusedWindow:true});
    document.getElementById("text").innerHTML=tab.title
    return tab
}
