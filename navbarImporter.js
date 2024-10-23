fetch('./navbar.html')
            .then(response => response.text())
            .then(data => {
                console.log("teste");
                document.getElementById('navbar-placeholder').innerHTML = data;
            });