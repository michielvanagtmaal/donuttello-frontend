<script>
    var btnSignup = document.querySelector(".login button").addEventListener
     let username = document.querySelector("#email").value;
     let password = document.querySelector("#password").value;
     
     
    fetch ("https://backend-donuttello-api.onrender.com/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "username": username,
            "password": password
        })
    }) .then(response => {
        return response.json();
    }) .then(json => {
        if (json.success) {
            let feedback = document.querySelector(".alert");
            feedback.innerHTML = "U bent ingelogd";
            feedback.classList.remove('hidden');
            console.log("worked");
    }
})
</script>


<template>
     
</template>