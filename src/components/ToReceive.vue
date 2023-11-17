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
              <router-link to="/changePass" type="button" class="div-8">Change Password</router-link>
              <div type="button" class="div-9">Orders</div>
              </div>
            </div>
            <div class="column-2">
              <div class="div-10">
                <div class="div-11">Orders</div>
                <div class="div-12">
                  <router-link to="/toPay" type="button" class="div-14">To Pay</router-link>
                    <router-link to="/toShip" type="button" class="div-14">To Ship</router-link>
                <router-link to="/toReceive" type="button" class="div-15">To Receive</router-link>
                <router-link to="/toRate" type="button" class="div-14">To Rate</router-link>    
                </div>
                <div class="div-17">
                  <div class="div-18">
                    <div class="div-19">Order No. 167749-0500</div>
                    <div class="div-20">
                      <div class="div-21">In process</div>
                      <div class="div-22">cancel</div>
                    </div>
                  </div>
                  <div class="div-23">
                    <div class="div-24"></div>
                    <div class="div-25">
                      <div class="div-26">
                        <div class="div-27">Bleachpeel Soap</div>
                        <div class="div-28">
                          All Around Safe Block Sun Milk SPF50+/PA+++
                        </div>
                        <div class="div-29">Product code: 10896</div>
                      </div>
                      <div class="div-30">
                        <div class="div-31">2 pcs</div>
                        <div class="div-32">Total:</div>
                      </div>
                      <div class="div-33">
                        <div class="div-34">₱ 150.00</div>
                        <div class="div-35">₱ 300.00</div>
                      </div>
                    </div>
                  </div>
                  <div class="div-36"></div>
                  <div class="div-37">
                    <div class="div-38"></div>
                    <div class="div-39">
                      <div class="div-40">
                        <div class="div-41">15 in 1 Soap | 135g</div>
                        <div class="div-42">
                          All Around Safe Block Sun Milk SPF50+/PA+++
                        </div>
                        <div class="div-43">Product code: 10896</div>
                      </div>
                      <div class="div-44">
                        <div class="div-45">2 pcs</div>
                        <div class="div-46">Total:</div>
                      </div>
                      <div class="div-47">
                        <div class="div-48">₱ 110.00</div>
                        <div class="div-49">₱ 220.00</div>
                      </div>
                    </div>
                  </div>
                  <div class="div-50"></div>
                  <div class="div-51">
                    <div class="div-52"></div>
                    <div class="div-53">
                      <div class="div-54">
                        <div class="div-55">Soft Finish</div>
                        <div class="div-56">
                          All Around Safe Block Sun Milk SPF50+/PA+++
                        </div>
                        <div class="div-57">Product code: 10896</div>
                      </div>
                      <div class="div-58">
                        <div class="div-59">2 pcs</div>
                        <div class="div-60">Total:</div>
                      </div>
                      <div class="div-61">
                        <div class="div-62">₱ 80.00</div>
                        <div class="div-63">₱ 160.00</div>
                      </div>
                    </div>
                  </div>
                  <div class="div-64"></div>
                  <div class="div-65">
                    <div class="div-66">
                      Delivery date: November 7, 2023 1:00 pm
                    </div>
                    <div class="div-67">
                      <div class="div-68">
                        <div class="div-69">Subtotal</div>
                        <div class="div-70">Delivery</div>
                        <div class="div-71">total</div>
                      </div>
                      <div class="div-72">
                        <div class="div-73">₱680.00</div>
                        <div class="div-74">₱60.00</div>
                        <div class="div-75">₱740.00</div>
                      </div>
                    </div>
                  </div>
                  <router-link to="/toRate" type="button" class="div-76">Order Received</router-link>    
                
                  <div class="div-77">
                    Please confirm receipt after you've checked the received items
                    and made payment.<br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterBar/>
  </template>
  
  
  
  <style scoped>
  .div-76:hover{
    background-color: #224f34;
  }
  .div-14:hover{
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
    padding: 48px 20px;
  }
  @media (max-width: 991px) {
    .div-2 {
      max-width: 100%;
    }
  }
  .div-3 {
    margin-top: 53px;
    width: 1172px;
    max-width: 100%;
  }
  @media (max-width: 991px) {
    .div-3 {
      margin-top: 40px;
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
    flex-grow: 1;
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
    .div-13 {
      white-space: initial;
    }
  }
  .div-14 {
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
    .div-14 {
      white-space: initial;
    }
  }
  .div-15 {
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
    border-radius: 6px;
    box-shadow: 0px 2px 10px 0px rgba(185, 166, 189, 0.1);
    background-color: #fff;
    display: flex;
    margin-top: 31px;
    flex-direction: column;
    padding: 20px 30px 13px;
  }
  @media (max-width: 991px) {
    .div-17 {
      max-width: 100%;
      padding: 0 20px;
    }
  }
  .div-18 {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  @media (max-width: 991px) {
    .div-18 {
      max-width: 100%;
      flex-wrap: wrap;
    }
  }
  .div-19 {
    color: var(--black, #383838);
    text-transform: capitalize;
    flex-grow: 1;
    flex-basis: auto;
    margin: auto 0;
    font: 500 20px/30px Poppins, sans-serif;
  }
  .div-20 {
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  .div-21 {
    color: var(--bfb-9-cf, #b0a6bd);
    text-align: right;
    text-transform: capitalize;
    margin: auto 0;
    font: 400 20px/30px Poppins, sans-serif;
  }
  .div-22 {
    color: var(--697586, #697586);
    text-transform: capitalize;
    align-self: stretch;
    white-space: nowrap;
    font: 500 20px/30px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-22 {
      white-space: initial;
    }
  }
  .div-23 {
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
    gap: 10px;
  }
  @media (max-width: 991px) {
    .div-23 {
      max-width: 100%;
      flex-wrap: wrap;
    }
  }
  .div-24 {
    background-color: #f7f6f8;
    display: flex;
    width: 100px;
    height: 100px;
    flex-direction: column;
  }
  .div-25 {
    align-items: start;
    align-self: start;
    display: flex;
    gap: 45px;
  }
  @media (max-width: 991px) {
    .div-25 {
      max-width: 100%;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  .div-26 {
    display: flex;
    flex-grow: 1;
    flex-basis: 0%;
    flex-direction: column;
  }
  .div-27 {
    overflow: hidden;
    color: var(--black, #383838);
    text-overflow: ellipsis;
    white-space: nowrap;
    text-transform: capitalize;
    font: 500 20px/30px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-27 {
      white-space: initial;
    }
  }
  .div-28 {
    overflow: hidden;
    color: var(--697586, #697586);
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 10px;
    font: 400 18px/20px Montserrat, sans-serif;
  }
  @media (max-width: 991px) {
    .div-28 {
      white-space: initial;
    }
  }
  .div-29 {
    color: var(--bfb-9-cf, #b0a6bd);
    text-transform: lowercase;
    margin-top: 10px;
    white-space: nowrap;
    font: 400 18px/22px Montserrat, sans-serif;
  }
  @media (max-width: 991px) {
    .div-29 {
      white-space: initial;
    }
  }
  .div-30 {
    align-self: stretch;
    display: flex;
    flex-basis: 0%;
    flex-direction: column;
  }
  .div-31 {
    color: var(--bfb-9-cf, #b0a6bd);
    text-align: right;
    text-transform: capitalize;
    font: 400 18px/27px Poppins, sans-serif;
  }
  .div-32 {
    color: var(--bfb-9-cf, #b0a6bd);
    text-align: right;
    text-transform: capitalize;
    margin-top: 35px;
    font: 400 18px/27px Poppins, sans-serif;
  }
  .div-33 {
    justify-content: center;
    align-self: stretch;
    display: flex;
    flex-direction: column;
  }
  .div-34 {
    color: var(--bfb-9-cf, #b0a6bd);
    text-align: right;
    text-transform: capitalize;
    font: 400 18px/27px Poppins, sans-serif;
  }
  .div-35 {
    color: var(--black, #383838);
    text-align: right;
    text-transform: capitalize;
    margin-top: 35px;
    font: 400 18px/27px Poppins, sans-serif;
  }
  .div-36 {
    background-color: #dfe1e3;
    margin-top: 29px;
    height: 1px;
  }
  @media (max-width: 991px) {
    .div-36 {
      max-width: 100%;
    }
  }
  .div-37 {
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
    gap: 10px;
  }
  @media (max-width: 991px) {
    .div-37 {
      max-width: 100%;
      flex-wrap: wrap;
    }
  }
  .div-38 {
    background-color: #f7f6f8;
    display: flex;
    width: 100px;
    height: 100px;
    flex-direction: column;
  }
  .div-39 {
    align-items: start;
    align-self: start;
    display: flex;
    gap: 45px;
  }
  @media (max-width: 991px) {
    .div-39 {
      max-width: 100%;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  .div-40 {
    display: flex;
    flex-grow: 1;
    flex-basis: 0%;
    flex-direction: column;
  }
  .div-41 {
    overflow: hidden;
    color: var(--black, #383838);
    text-overflow: ellipsis;
    white-space: nowrap;
    text-transform: capitalize;
    font: 500 20px/30px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-41 {
      white-space: initial;
    }
  }
  .div-42 {
    overflow: hidden;
    color: var(--697586, #697586);
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 10px;
    font: 400 18px/20px Montserrat, sans-serif;
  }
  @media (max-width: 991px) {
    .div-42 {
      white-space: initial;
    }
  }
  .div-43 {
    color: var(--bfb-9-cf, #b0a6bd);
    text-transform: lowercase;
    margin-top: 10px;
    white-space: nowrap;
    font: 400 18px/22px Montserrat, sans-serif;
  }
  @media (max-width: 991px) {
    .div-43 {
      white-space: initial;
    }
  }
  .div-44 {
    align-self: stretch;
    display: flex;
    flex-basis: 0%;
    flex-direction: column;
  }
  .div-45 {
    color: var(--bfb-9-cf, #b0a6bd);
    text-align: right;
    text-transform: capitalize;
    font: 400 18px/27px Poppins, sans-serif;
  }
  .div-46 {
    color: var(--bfb-9-cf, #b0a6bd);
    text-align: right;
    text-transform: capitalize;
    margin-top: 35px;
    font: 400 18px/27px Poppins, sans-serif;
  }
  .div-47 {
    justify-content: center;
    align-self: stretch;
    display: flex;
    flex-direction: column;
  }
  .div-48 {
    color: var(--bfb-9-cf, #b0a6bd);
    text-align: right;
    text-transform: capitalize;
    font: 400 18px/27px Poppins, sans-serif;
  }
  .div-49 {
    color: var(--black, #383838);
    text-align: right;
    text-transform: capitalize;
    margin-top: 35px;
    font: 400 18px/27px Poppins, sans-serif;
  }
  .div-50 {
    background-color: #dfe1e3;
    margin-top: 29px;
    height: 1px;
  }
  @media (max-width: 991px) {
    .div-50 {
      max-width: 100%;
    }
  }
  .div-51 {
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
    gap: 10px;
  }
  @media (max-width: 991px) {
    .div-51 {
      max-width: 100%;
      flex-wrap: wrap;
    }
  }
  .div-52 {
    background-color: #f7f6f8;
    display: flex;
    width: 100px;
    height: 100px;
    flex-direction: column;
  }
  .div-53 {
    align-items: start;
    align-self: start;
    display: flex;
    gap: 45px;
  }
  @media (max-width: 991px) {
    .div-53 {
      max-width: 100%;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  .div-54 {
    display: flex;
    flex-grow: 1;
    flex-basis: 0%;
    flex-direction: column;
  }
  .div-55 {
    overflow: hidden;
    color: var(--black, #383838);
    text-overflow: ellipsis;
    white-space: nowrap;
    text-transform: capitalize;
    font: 500 20px/30px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-55 {
      white-space: initial;
    }
  }
  .div-56 {
    overflow: hidden;
    color: var(--697586, #697586);
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 10px;
    font: 400 18px/20px Montserrat, sans-serif;
  }
  @media (max-width: 991px) {
    .div-56 {
      white-space: initial;
    }
  }
  .div-57 {
    color: var(--bfb-9-cf, #b0a6bd);
    text-transform: lowercase;
    margin-top: 10px;
    white-space: nowrap;
    font: 400 18px/22px Montserrat, sans-serif;
  }
  @media (max-width: 991px) {
    .div-57 {
      white-space: initial;
    }
  }
  .div-58 {
    align-self: stretch;
    display: flex;
    flex-basis: 0%;
    flex-direction: column;
  }
  .div-59 {
    color: var(--bfb-9-cf, #b0a6bd);
    text-align: right;
    text-transform: capitalize;
    font: 400 18px/27px Poppins, sans-serif;
  }
  .div-60 {
    color: var(--bfb-9-cf, #b0a6bd);
    text-align: right;
    text-transform: capitalize;
    margin-top: 35px;
    font: 400 18px/27px Poppins, sans-serif;
  }
  .div-61 {
    justify-content: center;
    align-self: stretch;
    display: flex;
    flex-direction: column;
  }
  .div-62 {
    color: var(--bfb-9-cf, #b0a6bd);
    text-align: right;
    text-transform: capitalize;
    font: 400 18px/27px Poppins, sans-serif;
  }
  .div-63 {
    color: var(--black, #383838);
    text-align: right;
    text-transform: capitalize;
    margin-top: 35px;
    font: 400 18px/27px Poppins, sans-serif;
  }
  .div-64 {
    background-color: #dfe1e3;
    margin-top: 29px;
    height: 1px;
  }
  @media (max-width: 991px) {
    .div-64 {
      max-width: 100%;
    }
  }
  .div-65 {
    display: flex;
    margin-top: 30px;
    width: 100%;
    align-items: start;
    justify-content: space-between;
    gap: 20px;
  }
  @media (max-width: 991px) {
    .div-65 {
      max-width: 100%;
      flex-wrap: wrap;
    }
  }
  .div-66 {
    color: var(--black, #383838);
    text-transform: capitalize;
    margin-top: 4px;
    flex-grow: 1;
    flex-basis: auto;
    font: 500 18px/27px Poppins, sans-serif;
  }
  .div-67 {
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
  .div-68 {
    display: flex;
    flex-grow: 1;
    flex-basis: 0%;
    flex-direction: column;
  }
  .div-69 {
    color: var(--black, #383838);
    text-align: right;
    text-transform: capitalize;
    white-space: nowrap;
    font: 400 18px/22px Montserrat, sans-serif;
  }
  @media (max-width: 991px) {
    .div-69 {
      white-space: initial;
    }
  }
  .div-70 {
    color: var(--black, #383838);
    text-align: right;
    text-transform: capitalize;
    margin-top: 10px;
    white-space: nowrap;
    font: 400 18px/22px Montserrat, sans-serif;
  }
  @media (max-width: 991px) {
    .div-70 {
      white-space: initial;
    }
  }
  .div-71 {
    color: var(--black, #383838);
    text-align: right;
    text-transform: capitalize;
    margin-top: 10px;
    font: 500 18px/22px Montserrat, sans-serif;
  }
  .div-72 {
    display: flex;
    flex-grow: 1;
    flex-basis: 0%;
    flex-direction: column;
  }
  .div-73 {
    color: var(--black, #383838);
    text-align: right;
    text-transform: capitalize;
    font: 400 18px/22px Montserrat, sans-serif;
  }
  .div-74 {
    color: var(--black, #383838);
    text-align: right;
    text-transform: capitalize;
    margin-top: 10px;
    font: 400 18px/22px Montserrat, sans-serif;
  }
  .div-75 {
    color: var(--black, #383838);
    text-align: right;
    text-transform: capitalize;
    margin-top: 10px;
    font: 500 18px/22px Montserrat, sans-serif;
  }
  .div-76 {
    color: #fff;
    text-transform: capitalize;
    white-space: nowrap;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    background-color: #328b56;
    margin-top: 29px;
    padding: 10px 20px;
    font: 500 20px/30px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-76 {
      white-space: initial;
      max-width: 100%;
    }
  }
  .div-77 {
    color: var(--bfb-9-cf, #b0a6bd);
    margin-top: 29px;
    font: 400 16px/20px Montserrat, sans-serif;
  }
  @media (max-width: 991px) {
    .div-77 {
      max-width: 100%;
    }
  }
  </style>