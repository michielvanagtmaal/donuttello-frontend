<script setup>
import { ref, reactive, onMounted } from 'vue';

    let customer_name = ref('');
    let aantal = ref('');
    let logo = ref('');
    let topping = ref('');
    let status = ref('');
    let email = ref('');
    let glazuur = ref('');


    //onmounted
    onMounted (() => {
        //let api_url = 'http://127.0.0.1:5173/toktik.json';
        const api = '/testapi.json';
        fetch(api)
        .then(response => response.json())
        .then (data => {
            console.log(data);
            customer_name.value =  data.order[0].customer;
            aantal.value = data.order[0].aantal;
            logo.value = data.order[0].logo;
            topping.value = data.order[0].topping;
            status.value = data.order[0].status;
            email.value = data.order[0].email;
            glazuur.value = data.order[0].glazuur;
        })
    });
</script>



<template>
   <div class="container">
        <p class="customer_name">{{customer_name}}</p>
        <img class="donut" src="../../../public/assets/images/donut_img.png" alt="">
        <div class="aantal">
          <p class="aantal-title">Aantal</p>
          <p class="aantal-thing">{{aantal}}</p>
        </div>
        <div class="glazuur">
          <p class="glazuur glazuur-title">Glazuur</p>
          <p class="glazuur glazuur-thing">{{glazuur}}</p>
        </div>
        <div class="logo">
          <p class="logo-title">Logo</p>
          <img class="logo" src={{logo}} alt="">
        </div>
        <div class="topping">
          <p class="topping-title">Topping</p>
          <p class="topping-thing">{{topping}}</p>
        </div>
        <div class="email">
          <p class="email-title">E-Mail</p>
          <p class="email-thing">{{email}}</p>
        </div>
        <div class="status">
          <p class="status-title">Status</p>
          <div>
            <p class="status-thing">{{status}}</p>
          </div>
        </div>  
      </div>
</template>