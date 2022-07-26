let carrierPrefixes = {
    "0701": "airtel",
    // "07020": "smile",
    "07025": "mtn",
    "07026": "mtn",
    // "07027": "multi-links",
    // "07028": "starcomms",
    // "07029": "starcomms",
    "0703": "mtn",
    "0704": "mtn",
    "0705": "glo",
    "0706": "mtn",
    // "0707": "zoom-mobile",
    "0708": "airtel",
    // "0709": "multi-links",
    "0802": "airtel",
    "0803": "mtn",
    "0804": "mtel",
    "0805": "glo",
    "0806": "mtn",
    "0807": "glo",
    "0808": "airtel",
    "0809": "9mobile",
    "0810": "mtn",
    "0811": "glo",
    "0812": "airtel",
    "0813": "mtn",
    "0814": "mtn",
    "0815": "glo",
    "0816": "mtn",
    "0817": "9mobile",
    "0818": "9mobile",
    // "0819": "starcomms",
    "0909": "9mobile",
    "0908": "9mobile",
    "0901": "airtel",
    "0902": "airtel",
    "0903": "mtn",
    "0904": "airtel",
    "0905": "glo",
    "0906": "mtn",
    "0907": "airtel",
    "0915": "glo",
    "0913": "mtn",
    "0912": "airtel",
    "0916": "mtn",
};
const suggestionList = [
    "0701",
    "07020",
    "07025",
    "07026",
    "07027",
    "07028",
    "07029",
    "0703",
    "0704",
    "0705",
    "0706",
    "0707",
    "0708",
    "0709",
    "0802",
    "0803",
    "0804",
    "0805",
    "0806",
    "0807",
    "0808",
    "0809",
    "0810",
    "0811",
    "0812",
    "0813",
    "0814",
    "0815",
    "0816",
    "0817",
    "0818",
    "0819",
    "0909",
    "0908",
    "0901",
    "0902",
    "0903",
    "0904",
    "0905",
    "0906",
    "0907",
    "0915",
    "0913",
    "0912",
    "0916",
];

let phoneInp = document.querySelector("input[type='tel']");
let telLogo = document.getElementById("tel-logo");

phoneInp.addEventListener("input", handleLogo)


function handleLogo(e) {
    let el = e.currentTarget
    telLogo.innerHTML = ""
    
    if (el.value.length === 11) {
        let logo = document.createElement("img")
        Object.entries(carrierPrefixes).forEach(([key, value]) => {
            if (el.value.startsWith(key)) {
                logo.setAttribute("src", `./images/logos/${value}.png`)
                return
            }
        })
        telLogo.innerHTML = ""  // clear previous image before adding new one
        telLogo.appendChild(logo)
    }

}

// Autocomplete feature
let suggestions = document.getElementById("suggestions");

phoneInp.addEventListener("input", changeAutoComplete);
suggestions.addEventListener("click", selectItem);

function changeAutoComplete(e) {
    // Clear previous suggestions
    suggestions.innerHTML = ''
    
    // Grab the value of input
    const el = e.currentTarget;
    const curVal = el.value.replaceAll(" ", "")

    // compare with list of values and filter
    const filteredList = suggestionList.filter((x) => { return x.startsWith(curVal)})

    // display list of values in alphabetical order
    filteredList.forEach((x) => {
        // Create a new 'li' element
        const li = document.createElement("li")
        li.innerText = x

        // Add new 'li' to suggestions
        suggestions.appendChild(li)

    })
}


function selectItem({ target }) {
    // Set the input value to the suggestion
    phoneInp.value = target.innerText
}
