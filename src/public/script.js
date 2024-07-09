document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const voteForm = document.getElementById('voteForm');
    const alertContainer = document.getElementById('alertContainer');

    const displayAlert = (message, type) => {
        alertContainer.innerHTML = `<div class="alert alert-${type}">${message}</div>`;
        setTimeout(() => alertContainer.innerHTML = '', 3000);
    };

    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = document.getElementById('regName').value;
        const email = document.getElementById('regEmail').value;
        const password = document.getElementById('regPassword').value;

        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });
            const data = await res.json();
            if (res.ok) {
                displayAlert('Registration successful', 'success');
            } else {
                displayAlert(data.message, 'error');
            }
        } catch (error) {
            displayAlert('An error occurred', 'error');
        }
    });

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();
            if (res.ok) {
                localStorage.setItem('token', data.token);
                displayAlert('Login successful', 'success');
            } else {
                displayAlert(data.message, 'error');
            }
        } catch (error) {
            displayAlert('An error occurred', 'error');
        }
    });

    voteForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const candidateId = document.getElementById('candidateId').value;
        const token = localStorage.getItem('token');

        try {
            const res = await fetch('/api/candidates/vote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token
                },
                body: JSON.stringify({ candidateId })
            });
            const data = await res.json();
            if (res.ok) {
                displayAlert('Vote cast successfully', 'success');
            } else {
                displayAlert(data.message, 'error');
            }
        } catch (error) {
            displayAlert('An error occurred', 'error');
        }
    });
});
