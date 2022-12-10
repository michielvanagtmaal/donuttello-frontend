<script setup>
import { ref, reactive, onMounted } from 'vue';

    let users = ref([]);
    let texts = ref("");
    //onmounted
    onMounted (() => {
        //let api_url = 'http://127.0.0.1:5173/toktik.json';
        const api = 'http://127.0.0.1:5173/testapi.json';
        fetch(api)
        .then(response => response.json())
        .then (data => {
            console.log(data);
            customer.value = data;

        })
    });
</script>



<template>
   <div class="container">
        <p class="customer_name">Customer name</p>
        <img class="donut" src="assets/images/donut_img.png" alt="">
        <div class="aantal">
          <p class="aantal-title">Aantal</p>
          <p class="aantal-thing">placeholder aantal</p>
        </div>
        <div class="glazuur">
          <p class="glazuur glazuur-title">Glazuur</p>
          <p class="glazuur glazuur-thing">G</p>
        </div>
        <div class="logo">
          <p class="logo-title">Logo</p>
          <img class="logo" src="assets/images/donut_img.png" alt="">
        </div>
        <div class="topping">
          <p class="topping-title">Topping</p>
          <p class="topping-thing">placeholder topping</p>
        </div>
        <div class="email">
          <p class="email-title">E-Mail</p>
          <p class="email-thing">placeholder email</p>
        </div>
        <div class="status">
          <p class="status-title">Status</p>
          <div>
            <p class="status-thing">In behandeling</p>
            <p class="status-thing">Afgehandeld</p>
          </div>
        </div>  
      </div>
</template>