fetch('http://127.0.0.1:5500/navbar.html')
            .then(response => response.text())
            .then(data => {
                console.log("teste");
                document.getElementById('navbar-placeholder').innerHTML = data;
            });

fetch('http://127.0.0.1:5500/footer.html')
    .then(response => response.text())
    .then(data => {
        console.log("teste");
        document.getElementById('footer-placeholder').innerHTML = data;
});