
function remove_right() {
    var content_right = document.getElementById("content_right");
    if(content_right) {
        content_right.parentNode.removeChild(content_right);
    }
}

function remove_ad() {
    
}

window.onload = remove_right;