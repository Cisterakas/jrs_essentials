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
                <router-link to="/accntInfo" type="button" class="div-7">Account Information</router-link>
                
                <div type="button" class="div-8">Change password</div>
                <router-link to="/toPay" type="button" class="div-7">Orders</router-link>
              
              </div>
            </div>
            <div class="column-2">
              <div class="div-10">
                <div class="div-11">Change password</div>
                <div class="div-12">
                  <input type="password" class="div-13" placeholder="Old Password">
                  
                </div>
                  <div class="div-14">
                    <input type="password" class="div-15" placeholder="New Password">
                    <input type="password" class="div-16" placeholder="Confirm Password">
                  </div>
                
                
                <router-link to="/toPay" type="button" class="div-17">Save</router-link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterBar/>
  </template>
  
  
  
  <style scoped>
  .div-7:hover{
    color:  #328b56;
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
    padding: 51px 20px 517px;
  }
  @media (max-width: 991px) {
    .div-2 {
      max-width: 100%;
      padding-bottom: 100px;
    }
  }
  .div-3 {
    margin-bottom: -103px;
    width: 100%;
    max-width: 1193px;
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
    width: 26%;
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
    padding: 20px 39px 20px 30px;
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
    color: #383838;
    margin-top: 20px;
    font: 500 20px Poppins, sans-serif;
  }
  .div-8 {
    color: #328b56;
    margin-top: 20px;
    font: 500 20px Poppins, sans-serif;
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
    width: 74%;
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
    padding: 28px 30px 40px;
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
    margin-top: 33px;
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
    border-radius: 4px;
    border: 1px solid var(--8498-af, #dfe1e3);
    background-color: #fff;
    padding: 10px;
    font: 400 20px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-13 {
      max-width: 100%;
    }
  }
  .div-14 {
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
    gap: 20px;
  }
  @media (max-width: 991px) {
    .div-14 {
      max-width: 100%;
      flex-wrap: wrap;
    }
  }
  .div-15 {
    color: var(--bfb-9-cf, #b0a6bd);
    text-transform: capitalize;
    border-radius: 4px;
    border: 1px solid var(--8498-af, #dfe1e3);
    background-color: #fff;
    flex-grow: 1;
    padding: 10px;
    font: 400 20px Poppins, sans-serif;
  }
  .div-16 {
    color: var(--bfb-9-cf, #b0a6bd);
    text-transform: capitalize;
    border-radius: 4px;
    border: 1px solid var(--8498-af, #dfe1e3);
    background-color: #fff;
    flex-grow: 1;
    padding: 10px;
    font: 400 20px Poppins, sans-serif;
  }
  .div-17 {
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
    .div-17 {
      white-space: initial;
    }
  }
  </style>