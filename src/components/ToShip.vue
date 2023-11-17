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
              <a href="/accntInfo" type="button" class="div-7">Account Information</a>
              <a href="/changePass" type="button" class="div-8">Change Password</a>
              <div type="button" class="div-9">Orders</div>
              </div>
            </div>
            <div class="column-2">
              <div class="div-10">
                <div class="div-11">Orders</div>
                <div class="div-12">
                    <a href="/toPay" type="button" class="div-13">To Pay (1)</a>
                   
                <a href="/toShip" type="button" class="div-14">To Ship</a>
                <a href="/toReceive" type="button" class="div-13">To Receive (1)</a>
                <a href="/toRate" type="button" class="div-13">To Rate (1)</a>

                  
                </div>
                <div class="div-17">No orders yet</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterBar/>
  </template>
  
  
  
  <style scoped>
  .div-13:hover{
  background-color: #328b56;
  color: #fff;
}
  .div-7:hover{
    color:  #328b56;
  }
  .div-8:hover{
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
    padding: 50px 20px;
  }
  @media (max-width: 991px) {
    .div-2 {
      max-width: 100%;
    }
  }
  .div-3 {
    width: 1172px;
    max-width: 100%;
    margin: 51px 0 576px;
  }
  @media (max-width: 991px) {
    .div-3 {
      margin: 40px 0;
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
    flex-grow: 1;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    padding: 20px 34px 20px 35px;
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
    font: 600 28px/42px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-6 {
      white-space: initial;
    }
  }
  .div-7 {
    color: #383838;
    margin-top: 20px;
    font: 500 20px/30px Poppins, sans-serif;
  }
  .div-8 {
    color: #383838;
    margin-top: 20px;
    font: 500 20px/30px Poppins, sans-serif;
  }
  .div-9 {
    color: #328b56;
    margin-top: 20px;
    font: 500 20px/30px Poppins, sans-serif;
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
    display: flex;
    margin-top: 9px;
    flex-direction: column;
  }
  @media (max-width: 991px) {
    .div-10 {
      max-width: 100%;
      margin-top: 40px;
    }
  }
  .div-11 {
    color: #224f34;
    white-space: nowrap;
    font: 500 30px/40px Roboto Slab, sans-serif;
  }
  @media (max-width: 991px) {
    .div-11 {
      max-width: 100%;
      white-space: initial;
    }
  }
  .div-12 {
    display: flex;
    margin-top: 50px;
    justify-content: space-between;
    gap: 20px;
  }
  @media (max-width: 991px) {
    .div-12 {
      max-width: 100%;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 40px;
    }
  }
  .div-13 {
    color: #383838;
    text-transform: capitalize;
    white-space: nowrap;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    background-color: #fff;
    flex-grow: 1;
    padding: 10px 20px;
    font: 500 20px/30px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-13 {
      white-space: initial;
    }
  }
  .div-14 {
    color: #fff;
    text-transform: capitalize;
    white-space: nowrap;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    background-color: #328b56;
    flex-grow: 1;
    padding: 10px 20px;
    font: 500 20px/30px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-14 {
      white-space: initial;
    }
  }
  .div-15 {
    color: #383838;
    text-transform: capitalize;
    white-space: nowrap;
    justify-content: space-between;
    border-radius: 4px;
    background-color: #fff;
    flex-grow: 1;
    padding: 10px 20px;
    font: 500 20px/30px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-15 {
      white-space: initial;
    }
  }
  .div-16 {
    color: var(--black, #383838);
    text-transform: capitalize;
    white-space: nowrap;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    background-color: #fff;
    flex-grow: 1;
    padding: 10px 20px;
    font: 500 20px/30px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-16 {
      white-space: initial;
    }
  }
  .div-17 {
    color: var(--bfb-9-cf, #b0a6bd);
    text-transform: capitalize;
    border-radius: 4px;
    border: 1px solid var(--8498-af, #dfe1e3);
    background-color: #fff;
    margin-top: 31px;
    padding: 10px;
    font: 400 16px/24px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-17 {
      max-width: 100%;
    }
  }
  </style>