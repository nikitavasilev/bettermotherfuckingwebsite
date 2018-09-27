function myFunction() {
    var txt;
    if (confirm("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please")) {
        txt = "You pressed OK!";
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    } else {
        txt = "You pressed Cancel!";
    }
}

setTimeout(function() {
	myFunction();
}, 10000);