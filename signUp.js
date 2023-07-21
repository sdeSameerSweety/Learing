const form = document.querySelector('form');
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const fname = document.getElementById('fname').value;
            const lname = document.getElementById('lname').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            // TODO: Send data to server
            const data = {fname, lname, email, password};
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            };
            fetch('/api', options).then(response => {
                console.log(response);
                if (response.status === 200) {
                    window.location.href = '/login';
                }
            }
            );

        });