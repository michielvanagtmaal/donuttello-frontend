var btnLogin = document.querySelector(".login__btn").addEventListener("click", (e) => {
    let username = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    fetch('https://backend-donuttello-api.onrender.com/users/login', {
        method: "post",
        headers: {
            "Content-Type": "application/json"
    },
    body: JSON.stringify({
        "username": username,
        "password": password 
    })
}).then (response => {
    return response.json();
}).then(json => {
    if (json.status === "success") {
        let token = json.data.token;
        localStorage.setItem("token", token);
        window.location.href = "./../backend/backend.html";
    } else {
        let feedback = document.querySelector(".alert");
        feedback.textContent = "Login failed buddy.";
        feedback.classList.remove('hidden');
    }
})
});
 