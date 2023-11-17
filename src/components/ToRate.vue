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
                <router-link to="/toReceive" type="button" class="div-14">To Receive</router-link>
                <router-link to="/toRate" type="button" class="div-16">To Rate</router-link>
                </div>
                <div class="div-17">
                  <div class="div-18">
                    <div class="div-19">Order No. 167749-0500</div>
                    <div type="button" class="div-20">cancel</div>
                  </div>
                  <div class="div-21">
                    <div class="div-22"></div>
                    <div class="div-23">
                      <div class="div-24">
                        <div class="div-25">Espresso Coffee Body Scrub</div>
                        <div class="div-26">
                          All Around Safe Block Sun Milk SPF50+/PA+++
                        </div>
                        <div class="div-27">Product code: 10896</div>
                      </div>
                      <div class="div-28">
                        <div class="div-29">2 pcs</div>
                        <div class="div-30">Total:</div>
                      </div>
                      <div class="div-31">
                        <div class="div-32">₱ 210.00</div>
                        <div class="div-33">₱ 420.00</div>
                      </div>
                    </div>
                  </div>
                  <div class="div-34"></div>
                  <div class="div-35">
                    <div class="div-36"></div>
                    <div class="div-37">
                      <div class="div-38">
                        <div class="div-39">Matcha Green Tea Body Scrub</div>
                        <div class="div-40">
                          All Around Safe Block Sun Milk SPF50+/PA+++
                        </div>
                        <div class="div-41">Product code: 10896</div>
                      </div>
                      <div class="div-42">
                        <div class="div-43">1 pc</div>
                        <div class="div-44">Total:</div>
                      </div>
                      <div class="div-45">
                        <div class="div-46">₱ 210.00</div>
                        <div class="div-47">₱ 210.00</div>
                      </div>
                    </div>
                  </div>
                  <div class="div-48"></div>
                  <div class="div-49">
                    <div class="div-50">Received On: Octobeber 27, 2023</div>
                    <div class="div-51">
                      <div class="div-52">
                        <div class="div-53">subtotal</div>
                        <div class="div-54">Shipping</div>
                        <div class="div-55">total</div>
                      </div>
                      <div class="div-56">
                        <div class="div-57">₱ 630.00</div>
                        <div class="div-58">₱60.00</div>
                        <div class="div-59">₱740.00</div>
                      </div>
                    </div>
                  </div>
                  <div class="container">
  <div class="interior">
    <a class="div-60" href="#open-modal">Rate Order</a>
  </div>

<div id="open-modal" class="modal-window">
  <div>
    <a href="#" title="Close" class="modal-close">Close</a>
    <!-- Your Modal Content Goes Here -->
    <div class="div-25">Write a review</div>
    <div class="div1">Espresso Coffee Body Scrub</div>
    <div class="rate">
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
  </div>
    <input type="text" class="div-81" placeholder="Comment" />
    <div class="div1">Matcha Green Tea Body Scrub</div>
    <div class="rate">
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
  </div>
    <input type="text" class="div-81" placeholder="Comment" />
    <a class="div-60" href="#" title="Close">Submit</a>
  </div>
</div>
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


.div1 {
  color: var(--black, #383838);
  white-space: nowrap;
  font: 500 18px/20px Poppins, sans-serif;
  margin-top: 20px;
}
@media (max-width: 991px) {
  .div1 {
    max-width: 100%;
    white-space: initial;
  }
}
.rate {
    float: left;
    height: 46px;
    padding: 0 10px;
}
.rate:not(:checked) > input {
    position:absolute;
    top:-9999px;
}
.rate:not(:checked) > label {
    float:right;
    width:1em;
    overflow:hidden;
    white-space:nowrap;
    cursor:pointer;
    font-size:30px;
    color:#ccc;
}
.rate:not(:checked) > label:before {
    content: '★ ';
}
.rate > input:checked ~ label {
    color: #ffc700;    
}
.rate:not(:checked) > label:hover,
.rate:not(:checked) > label:hover ~ label {
    color: #deb217;  
}
.rate > input:checked + label:hover,
.rate > input:checked + label:hover ~ label,
.rate > input:checked ~ label:hover,
.rate > input:checked ~ label:hover ~ label,
.rate > label:hover ~ input:checked ~ label {
    color: #c59b08;
}



  .div-81 {
    width: auto;
    color: var(--bfb-9-cf, #b0a6bd);
    text-transform: capitalize;
    border-radius: 4px;
    border: 1px solid var(--8498-af, #dfe1e3);
    background-color: #fff;
    padding: 10px;
    font: 400 20px Poppins, sans-serif;

}
@media (max-width: 991px) {
  .div-81 {
    max-width: 100%;
    padding-bottom: 40px;
  }
}
  .modal-window {
  position: fixed;
  background-color: rgba(47, 44, 44, 0.447);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s;
}
.modal-window:target {
    
  visibility: visible;
  opacity: 1;
  pointer-events: auto;
}
.modal-window > div {
    
  width: 500px;
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2em;
  background: white;
}
.modal-window header {
  font-weight: bold;
}
.modal-window h1 {
  font-size: 150%;
  margin: 0 0 15px;
}

.modal-close {
  color: #aaa;
  line-height: 50px;
  font-size: 100%;
  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 100px;
  text-decoration: none;
}
.modal-close:hover {
  color: black;
}
  .div-60:hover{
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
    margin-bottom: 169px;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 50px 20px 18px;
  }
  @media (max-width: 991px) {
    .div-2 {
      max-width: 100%;
      margin-bottom: 40px;
    }
  }
  .div-3 {
    margin-top: 51px;
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
    .div-14 {
      white-space: initial;
    }
  }
  .div-15 {
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
    .div-15 {
      white-space: initial;
    }
  }
  .div-16 {
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
    .div-16 {
      white-space: initial;
    }
  }
  .div-17 {
    border-radius: 6px;
    box-shadow: 0px 2px 10px 0px rgba(185, 166, 189, 0.1);
    background-color: #fff;
    display: flex;
    margin-top: 51px;
    flex-direction: column;
    padding: 20px 30px 40px;
  }
  @media (max-width: 991px) {
    .div-17 {
      max-width: 100%;
      margin-top: 40px;
      padding: 0 20px;
    }
  }
  .div-18 {
    display: flex;
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
    font: 500 18px/27px Poppins, sans-serif;
  }
  .div-20 {
    color: var(--697586, #697586);
    text-transform: capitalize;
    align-self: stretch;
    white-space: nowrap;
    font: 500 18px/27px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-20 {
      white-space: initial;
    }
  }
  .div-21 {
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
    gap: 10px;
  }
  @media (max-width: 991px) {
    .div-21 {
      max-width: 100%;
      flex-wrap: wrap;
    }
  }
  .div-22 {
    background-color: #f7f6f8;
    display: flex;
    width: 100px;
    height: 100px;
    flex-direction: column;
  }
  .div-23 {
    align-items: start;
    align-self: start;
    display: flex;
    gap: 45px;
  }
  @media (max-width: 991px) {
    .div-23 {
      max-width: 100%;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  .div-24 {
    display: flex;
    flex-grow: 1;
    flex-basis: 0%;
    flex-direction: column;
  }
  .div-25 {
    overflow: hidden;
    color: var(--black, #383838);
    text-overflow: ellipsis;
    white-space: nowrap;
    text-transform: capitalize;
    font: 500 18px/27px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-25 {
      white-space: initial;
    }
  }
  .div-26 {
    overflow: hidden;
    color: var(--697586, #697586);
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 10px;
    font: 400 16px/20px Montserrat, sans-serif;
  }
  @media (max-width: 991px) {
    .div-26 {
      white-space: initial;
    }
  }
  .div-27 {
    color: var(--bfb-9-cf, #b0a6bd);
    text-transform: lowercase;
    margin-top: 10px;
    white-space: nowrap;
    font: 400 16px/20px Montserrat, sans-serif;
  }
  @media (max-width: 991px) {
    .div-27 {
      white-space: initial;
    }
  }
  .div-28 {
    align-self: stretch;
    display: flex;
    flex-basis: 0%;
    flex-direction: column;
  }
  .div-29 {
    color: var(--bfb-9-cf, #b0a6bd);
    text-align: right;
    text-transform: capitalize;
    font: 400 16px/24px Poppins, sans-serif;
  }
  .div-30 {
    color: var(--bfb-9-cf, #b0a6bd);
    text-align: right;
    text-transform: capitalize;
    margin-top: 35px;
    font: 400 16px/24px Poppins, sans-serif;
  }
  .div-31 {
    justify-content: center;
    align-self: stretch;
    display: flex;
    flex-direction: column;
  }
  .div-32 {
    color: var(--bfb-9-cf, #b0a6bd);
    text-align: right;
    text-transform: capitalize;
    font: 400 16px/24px Poppins, sans-serif;
  }
  .div-33 {
    color: var(--black, #383838);
    text-align: right;
    text-transform: capitalize;
    margin-top: 35px;
    font: 400 16px/24px Poppins, sans-serif;
  }
  .div-34 {
    background-color: #dfe1e3;
    margin-top: 29px;
    height: 1px;
  }
  @media (max-width: 991px) {
    .div-34 {
      max-width: 100%;
    }
  }
  .div-35 {
    display: flex;
    margin-top: 30px;
    justify-content: space-between;
    gap: 10px;
  }
  @media (max-width: 991px) {
    .div-35 {
      max-width: 100%;
      flex-wrap: wrap;
    }
  }
  .div-36 {
    background-color: #f7f6f8;
    display: flex;
    width: 100px;
    height: 100px;
    flex-direction: column;
  }
  .div-37 {
    align-items: start;
    align-self: start;
    display: flex;
    gap: 45px;
  }
  @media (max-width: 991px) {
    .div-37 {
      max-width: 100%;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  .div-38 {
    display: flex;
    flex-grow: 1;
    flex-basis: 0%;
    flex-direction: column;
  }
  .div-39 {
    overflow: hidden;
    color: var(--black, #383838);
    text-overflow: ellipsis;
    white-space: nowrap;
    text-transform: capitalize;
    font: 500 18px/27px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-39 {
      white-space: initial;
    }
  }
  .div-40 {
    overflow: hidden;
    color: var(--697586, #697586);
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 10px;
    font: 400 16px/20px Montserrat, sans-serif;
  }
  @media (max-width: 991px) {
    .div-40 {
      white-space: initial;
    }
  }
  .div-41 {
    color: var(--bfb-9-cf, #b0a6bd);
    text-transform: lowercase;
    margin-top: 10px;
    white-space: nowrap;
    font: 400 16px/20px Montserrat, sans-serif;
  }
  @media (max-width: 991px) {
    .div-41 {
      white-space: initial;
    }
  }
  .div-42 {
    align-self: stretch;
    display: flex;
    flex-basis: 0%;
    flex-direction: column;
  }
  .div-43 {
    color: var(--bfb-9-cf, #b0a6bd);
    text-align: right;
    text-transform: capitalize;
    font: 400 16px/24px Poppins, sans-serif;
  }
  .div-44 {
    color: var(--bfb-9-cf, #b0a6bd);
    text-align: right;
    text-transform: capitalize;
    margin-top: 35px;
    font: 400 16px/24px Poppins, sans-serif;
  }
  .div-45 {
    justify-content: center;
    align-self: stretch;
    display: flex;
    flex-direction: column;
  }
  .div-46 {
    color: var(--bfb-9-cf, #b0a6bd);
    text-align: right;
    text-transform: capitalize;
    font: 400 16px/24px Poppins, sans-serif;
  }
  .div-47 {
    color: var(--black, #383838);
    text-align: right;
    text-transform: capitalize;
    margin-top: 35px;
    font: 400 16px/24px Poppins, sans-serif;
  }
  .div-48 {
    background-color: #dfe1e3;
    margin-top: 29px;
    height: 1px;
  }
  @media (max-width: 991px) {
    .div-48 {
      max-width: 100%;
    }
  }
  .div-49 {
    display: flex;
    margin-top: 30px;
    width: 100%;
    align-items: start;
    justify-content: space-between;
    gap: 20px;
  }
  @media (max-width: 991px) {
    .div-49 {
      max-width: 100%;
      flex-wrap: wrap;
    }
  }
  .div-50 {
    color: var(--black, #383838);
    text-transform: capitalize;
    margin-top: 4px;
    flex-grow: 1;
    flex-basis: auto;
    font: 500 16px/24px Poppins, sans-serif;
  }
  .div-51 {
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
  .div-52 {
    display: flex;
    flex-grow: 1;
    flex-basis: 0%;
    flex-direction: column;
  }
  .div-53 {
    color: var(--black, #383838);
    text-align: right;
    text-transform: capitalize;
    font: 400 18px/22px Montserrat, sans-serif;
  }
  .div-54 {
    color: var(--black, #383838);
    text-align: right;
    text-transform: capitalize;
    margin-top: 10px;
    font: 400 18px/22px Montserrat, sans-serif;
  }
  .div-55 {
    color: var(--black, #383838);
    text-align: right;
    text-transform: capitalize;
    margin-top: 10px;
    font: 500 18px/22px Montserrat, sans-serif;
  }
  .div-56 {
    align-self: start;
    display: flex;
    flex-grow: 1;
    flex-basis: 0%;
    flex-direction: column;
  }
  .div-57 {
    color: var(--black, #383838);
    text-align: right;
    text-transform: capitalize;
    font: 400 16px/20px Montserrat, sans-serif;
  }
  .div-58 {
    color: var(--black, #383838);
    text-align: right;
    text-transform: capitalize;
    margin-top: 10px;
    font: 400 16px/20px Montserrat, sans-serif;
  }
  .div-59 {
    color: var(--black, #383838);
    text-align: right;
    text-transform: capitalize;
    margin-top: 10px;
    font: 500 16px/20px Montserrat, sans-serif;
  }
  .div-60 {
    color: #fff;
    text-transform: capitalize;
    white-space: nowrap;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    background-color: #328b56;
    margin-top: 30px;
    padding: 10px 20px;
    font: 500 20px/30px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-60 {
      white-space: initial;
      max-width: 100%;
    }
  }
  </style>