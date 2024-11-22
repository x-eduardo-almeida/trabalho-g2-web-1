fetch('http://127.0.0.1:5500/navbar.html')
            .then(response => response.text())
            .then(data => {
                let navbar = document.querySelector('div#navbar-placeholder');

                if(navbar) {
                    navbar.innerHTML = data;
                }
            });

fetch('http://127.0.0.1:5500/footer.html')
    .then(response => response.text())
    .then(data => {
        let footer = document.querySelector('div#footer-placeholder');

        if(footer) {
            footer.innerHTML = data;
        }
});