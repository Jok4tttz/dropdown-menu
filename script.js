// Main Code
var dataArr = ["a", "b", "c"];

var dropdown = document.querySelector(".dropdown");
var menu = document.querySelector(".menu");
var tags = document.querySelector("#tags");
var options = document.querySelector("#options");

putOptions(dataArr);
document.addEventListener("click", hideMenu)

// Functions
function showMenu() {
    menu.classList.remove("hidden");
}

function hideMenu(click) {
    var ddArea = dropdown.contains(click.target);
    var mnArea = menu.contains(click.target);
    if (!ddArea && !mnArea) {
        menu.classList.add("hidden");
    }
}

function putOptions(dataArr) {
    for (var idx = 0; idx < dataArr.length; idx++) {
        var list = document.createElement("li");
        var content = document.createTextNode(dataArr[idx]);
        list.setAttribute("id", "mi-" + idx.toString());
        list.setAttribute("onclick", "putTag(this)");
        list.appendChild(content);
        options.appendChild(list);
    }
}

function putTag(option) {
    var tag = "tag-" + option.id;
    var text = option.innerText;
    if (!document.getElementById(tag)) {
        var list = document.createElement("li");
        var content = `
                <span>${text}</span>
                <figure>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                    </svg>
                </figure>
                    `;
        list.setAttribute("id", tag)
        list.setAttribute("onclick", "removeTag(this, event)")
        list.innerHTML = content;
        tags.appendChild(list);
    }
}

function removeTag(tag, event) {
    tag.remove();
    event.stopPropagation();
}

function filterMenu(input) {
    var searched = input.value;
    var filtered = dataArr.filter(
        data => data.toLowerCase().includes(searched)
    );
    console.log(filtered);
    options.innerHTML = "";
    putOptions(filtered);
}