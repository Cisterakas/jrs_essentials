<script setup>
import NavigationBar from './NavigationBar.vue'
import FooterBar from './Footer.vue'
</script> 

<template>
    <NavigationBar/>
    <div class="div">
      <div class="div-2">
        <div class="div-3">
          <div class="div-4">
            <div class="column">
              <div class="div-5">
                <div class="div-6">Account</div>
                
                <div type="button" class="div-7">Account Information</div>
                <router-link to="/changePass" type="button" class="div-8">Change password</router-link>
                <router-link to="/toPay" type="button" class="div-8">Orders</router-link>
          
              </div>
            </div>
            <div class="column-2">
              <div class="div-10">
                <div class="div-11">Account information</div>
                <div class="div-12">
                  <div class="div-13">Mail</div>
                  <input type="text" class="div-14">
              
                  <div class="div-15">
                    <div class="div-16">
                      <div class="div-17">First Name</div>
                      <input type="text" class="div-18" >
                    </div>
                    <div class="div-19">
                      <div class="div-20">Last name</div>
                      <input type="text" class="div-21" >
                    </div>
                  </div>
                </div>
                <router-link to="/changePass" type="button" class="div-22">Save</router-link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterBar/>
  </template>
  
  
  
  <style scoped>
  .div-22:hover{
    background-color: #18482b;
  }
  .div {
    background-color: #fff;
    display: flex;
    flex-direction: column;
  }
  .div-2 {
    background: linear-gradient(
      180deg,
      #c2efd4 0%,
      rgba(255, 255, 255, 0) 87.34%
    );
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 51px 20px 469px;
  }
  @media (max-width: 991px) {
    .div-2 {
      max-width: 100%;
      padding-bottom: 100px;
    }
  }
  .div-3 {
    margin-bottom: -94px;
    width: 100%;
    max-width: 1204px;
  }
  @media (max-width: 991px) {
    .div-3 {
      max-width: 100%;
      margin-bottom: 10px;
    }
  }
  .div-4 {
    gap: 20px;
    display: flex;
  }
  @media (max-width: 991px) {
    .div-4 {
      flex-direction: column;
      align-items: stretch;
      gap: 0px;
    }
  }
  .column {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 27%;
    margin-left: 0px;
  }
  @media (max-width: 991px) {
    .column {
      width: 100%;
    }
  }
  .div-5 {
    border-radius: 6px;
    box-shadow: 0px 2px 10px 0px rgba(185, 166, 189, 0.1);
    background-color: #fff;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    padding: 20px 50px 20px 30px;
  }
  @media (max-width: 991px) {
    .div-5 {
      margin-top: 40px;
      padding: 0 20px;
    }
  }
  .div-6 {
    color: var(--black, #383838);
    white-space: nowrap;
    font: 600 28px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-6 {
      white-space: initial;
    }
  }
  .div-7 {
    color: #328b56;
    margin-top: 20px;
    font: 500 20px Poppins, sans-serif;
  }
  .div-8 {
    color: var(--black, #383838);
    margin-top: 20px;
    font: 500 20px Poppins, sans-serif;
  }
  .div-8:hover{
    color:  #328b56;
  }
  .div-9 {
    color: var(--black, #383838);
    margin-top: 20px;
    font: 500 20px Poppins, sans-serif;
  }
  .column-2 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 73%;
    margin-left: 20px;
  }
  @media (max-width: 991px) {
    .column-2 {
      width: 100%;
    }
  }
  .div-10 {
    align-items: start;
    border-radius: 6px;
    box-shadow: 0px 2px 10px 0px rgba(185, 166, 189, 0.1);
    background-color: #fff;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    padding: 27px 30px 40px;
  }
  @media (max-width: 991px) {
    .div-10 {
      max-width: 100%;
      margin-top: 40px;
      padding: 0 20px;
    }
  }
  .div-11 {
    color: var(--black, #383838);
    text-transform: capitalize;
    align-self: stretch;
    white-space: nowrap;
    font: 500 24px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-11 {
      max-width: 100%;
      white-space: initial;
    }
  }
  .div-12 {
    align-self: stretch;
    display: flex;
    margin-top: 40px;
    flex-direction: column;
  }
  @media (max-width: 991px) {
    .div-12 {
      max-width: 100%;
    }
  }
  .div-13 {
    color: var(--bfb-9-cf, #b0a6bd);
    text-transform: capitalize;
    white-space: nowrap;
    font: 400 16px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-13 {
      max-width: 100%;
      white-space: initial;
    }
  }
  .div-14 {
    color: var(--black, #383838);
    border-radius: 4px;
    border: 1.2px solid var(--8498-af, #dfe1e3);
    background-color: #fff;
    padding: 10px;
    font: 400 20px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-14 {
      max-width: 100%;
    }
  }
  .div-15 {
    justify-content: space-between;
    display: flex;
    margin-top: 20px;
    gap: 20px;
    padding: 0 1px;
  }
  @media (max-width: 991px) {
    .div-15 {
      max-width: 100%;
      flex-wrap: wrap;
    }
  }
  .div-16 {
    display: flex;
    flex-grow: 1;
    flex-basis: 0%;
    flex-direction: column;
  }
  .div-17 {
    color: var(--bfb-9-cf, #b0a6bd);
    text-transform: capitalize;
    white-space: nowrap;
    font: 400 16px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-17 {
      white-space: initial;
    }
  }
  .div-18 {
    color: var(--black, #383838);
    text-transform: capitalize;
    border-radius: 4px;
    border: 1.2px solid var(--8498-af, #dfe1e3);
    background-color: #fff;
    padding: 10px;
    font: 400 20px Poppins, sans-serif;
  }
  .div-19 {
    display: flex;
    flex-grow: 1;
    flex-basis: 0%;
    flex-direction: column;
  }
  .div-20 {
    color: var(--bfb-9-cf, #b0a6bd);
    text-transform: capitalize;
    white-space: nowrap;
    font: 400 16px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-20 {
      white-space: initial;
    }
  }
  .div-21 {
    color: var(--black, #383838);
    text-transform: capitalize;
    border-radius: 4px;
    border: 1.2px solid var(--8498-af, #dfe1e3);
    background-color: #fff;
    padding: 10px;
    font: 400 20px Poppins, sans-serif;
  }
  .div-22 {
    color: var(--white, #fff);
    text-transform: capitalize;
    white-space: nowrap;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    background-color: #328b56;
    margin-top: 40px;
    width: 362px;
    max-width: 100%;
    padding: 10px 20px;
    font: 600 20px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-22 {
      white-space: initial;
    }
  }
  </style>