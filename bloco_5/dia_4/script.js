addListener()
recoveLocalStorage()

function recoveLocalStorage() {
    document.querySelector("body").style.backgroundColor = localStorage.backgroundColorSave;
    document.querySelectorAll("p").forEach(e => e.style.color = localStorage.colorText);
    document.querySelectorAll("p").forEach(e => e.style.fontSize = localStorage.fontSize);
    document.querySelectorAll("p").forEach(e => e.style.lineHeight = localStorage.lineHeight);
    document.querySelectorAll("p").forEach(e => e.style.fontFamily = localStorage.fontFamily);
}

function addListener() {
    document.getElementById('backgroundPage').addEventListener("keydown", apllyBackground);
    document.getElementById('textColor').addEventListener("keydown", apllytextColor);
    document.getElementById('fontSize').addEventListener("keydown", apllyfontSize);
    document.getElementById('spaceLines').addEventListener("keydown", apllyspaceLines);
    document.getElementById('fontType').addEventListener("keydown", apllyfontType);
    document.getElementById('aplly').addEventListener("click", apllyaplly);
}

function apllyBackground(e) {
    let color = null;
    if (e.keyCode === 13) {
        color = e.target.value;
        document.querySelector("body").style.backgroundColor = color;
    }
    localStorage.backgroundColorSave = color;
}

function apllytextColor(e) {
    let color = null
    if (e.keyCode === 13) {
        color = e.target.value;
        document.querySelectorAll("p").forEach(e => e.style.color = color);
    }
    localStorage.colorText = color;
}

function apllyfontSize(e) {
    let fontSize = null
    if (e.keyCode === 13) {
        fontSize = e.target.value+"px";
        document.querySelectorAll("p").forEach(e => e.style.fontSize = fontSize);
    }
    localStorage.fontSize = fontSize;
}

function apllyspaceLines(e) {
    let lineHeight = null
    if (e.keyCode === 13) {
        lineHeight = e.target.value+"px";
        document.querySelectorAll("p").forEach(e => e.style.lineHeight = lineHeight);
    }
    localStorage.lineHeight = lineHeight;
}

function apllyfontType(e) {
    let fontFamily = null
    if (e.keyCode === 13) {
        fontFamily = e.target.value;
        document.querySelectorAll("p").forEach(e => e.style.fontFamily = fontFamily);
    }
    localStorage.fontFamily = fontFamily;
}

function apllyaplly(e) {
    let valueColorBackground = document.getElementById("backgroundPage").value;
    document.querySelector("body").style.backgroundColor = valueColorBackground;
    localStorage.backgroundColorSave = valueColorBackground;

    let textColor = document.getElementById("textColor").value
    document.querySelectorAll("p").forEach(e => e.style.color = textColor);
    localStorage.colorText = textColor;

    let fontSize = document.getElementById("fontSize").value;
    document.querySelectorAll("p").forEach(e => e.style.fontSize = fontSize);
    localStorage.fontSize = fontSize;


    let lineHeight = document.getElementById("spaceLines").value;
    document.querySelectorAll("p").forEach(e => e.style.lineHeight = lineHeight);
    localStorage.lineHeight = lineHeight;

    let fontFamily = document.getElementById("fontType").value;
    document.querySelectorAll("p").forEach(e => e.style.fontFamily = fontFamily);
    localStorage.fontFamily = fontFamily;
}
