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
            <div class="div-5">Shopping Cart</div>
            <div class="div-6">
              <div class="div-7">In processing</div>
              <div class="div-8">cancel</div>
            </div>
          </div>
          <div class="div-9">
            <div class="div-10">
              <div class="div-11">
                <div class="div-12">
                  <div class="column"><div class="div-13"></div></div>
                  <div class="column-2">
                    <div class="div-14">
                      <div class="div-15">Bleachpeel Soap</div>
                      <div class="div-16">
                        <div class="div-17">
                          <div class="div-18">-</div>
                          <div class="div-19">2</div>
                          <div class="div-20">+</div>
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/453c7b02-cab0-44bc-87b6-17f047db798b?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                          class="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="div-21">
                <div class="div-22">2 pcs</div>
                <div class="div-23">Total:</div>
              </div>
              <div class="div-24">
                <div class="div-25">₱ 150.00</div>
                <div class="div-26">₱ 300.00</div>
              </div>
            </div>
            <div class="div-27"></div>
            <div class="div-28">
              <div class="div-29">
                <div class="div-30">
                  <div class="column"><div class="div-31"></div></div>
                  <div class="column-3">
                    <div class="div-32">
                      <div class="div-33">15 in 1 Soap | 135g</div>
                      <div class="div-34">
                        <div class="div-35">
                          <div class="div-36">-</div>
                          <div class="div-37">2</div>
                          <div class="div-38">+</div>
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2d08b6f-cc0d-409f-9d03-c32aad893a36?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                          class="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="div-39">
                <div class="div-40">2 pcs</div>
                <div class="div-41">Total:</div>
              </div>
              <div class="div-42">
                <div class="div-43">₱ 110.00</div>
                <div class="div-44">₱ 220.0</div>
              </div>
            </div>
            <div class="div-45"></div>
            <div class="div-46">
              <div class="div-47">
                <div class="div-48">
                  <div class="column"><div class="div-49"></div></div>
                  <div class="column-4">
                    <div class="div-50">
                      <div class="div-51">Glutamato with Grapeseed</div>
                      <div class="div-52">
                        <div class="div-53">
                          <div class="div-54">-</div>
                          <div class="div-55">2</div>
                          <div class="div-56">+</div>
                        </div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0bb92a2a-7d27-4507-ac1c-3034943e52aa?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                          class="img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="div-57">
                <div class="div-58">2 pcs</div>
                <div class="div-59">Total:</div>
              </div>
              <div class="div-60">
                <div class="div-61">₱ 80.00</div>
                <div class="div-62">₱ 160.00</div>
              </div>
            </div>
            <div class="div-63"></div>
            <div class="div-64">
              <div class="div-65">Total</div>
              <div class="div-66">₱ 680.00</div>
            </div>
            <div class="div-67">
              <div class="div-68">Delivery</div>
              <div class="div-69">0</div>
            </div>
            <div class="div-70">
              <div class="div-71">Subotal</div>
              <div class="div-72">₱ 680.00</div>
            </div>
          </div>
        </div>
      </div>
      <div class="div-73">
        <input type="text" class="div-74" placeholder="Add a Note to Your Order">
        <a href="/checkout" type="button" class="div-75">Check Out</a>
       
      </div>
    </div>
    <FooterBar/>
  </template>
  
  
  
  <style scoped>
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
    padding: 100px 20px 55px;
  }
  @media (max-width: 991px) {
    .div-2 {
      max-width: 100%;
    }
  }
  .div-3 {
    border-radius: 6px;
    box-shadow: 0px 2px 10px 0px rgba(185, 166, 189, 0.1);
    background-color: #fff;
    display: flex;
    width: 1053px;
    max-width: 100%;
    flex-direction: column;
    padding: 22px 0 14px;
  }
  .div-4 {
    display: flex;
    flex-direction: column;
    padding: 0 34px;
  }
  @media (max-width: 991px) {
    .div-4 {
      max-width: 100%;
      padding: 0 20px;
    }
  }
  .div-5 {
    color: var(--black, #383838);
    text-transform: capitalize;
    white-space: nowrap;
    font: 500 29px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-5 {
      max-width: 100%;
      white-space: initial;
    }
  }
  .div-6 {
    align-self: end;
    display: flex;
    margin-top: 16px;
    width: 291px;
    max-width: 100%;
    align-items: start;
    justify-content: space-between;
    gap: 20px;
  }
  .div-7 {
    color: var(--bfb-9-cf, #b0a6bd);
    text-align: right;
    text-transform: capitalize;
    margin-top: 9px;
    font: 400 25px Poppins, sans-serif;
  }
  .div-8 {
    color: var(--697586, #697586);
    text-transform: capitalize;
    align-self: stretch;
    white-space: nowrap;
    font: 500 25px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-8 {
      white-space: initial;
    }
  }
  .div-9 {
    display: flex;
    margin-top: 16px;
    flex-direction: column;
    padding: 0 34px;
  }
  @media (max-width: 991px) {
    .div-9 {
      max-width: 100%;
      padding: 0 20px;
    }
  }
  .div-10 {
    align-items: start;
    align-self: stretch;
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 20px;
  }
  @media (max-width: 991px) {
    .div-10 {
      max-width: 100%;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  
  @media (max-width: 991px) {
    .div-11 {
      max-width: 100%;
    }
  }
  .div-12 {
    gap: 20px;
    display: flex;
  }
  @media (max-width: 991px) {
    .div-12 {
      flex-direction: column;
      align-items: stretch;
      gap: 0px;
    }
  }
  .column {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 19%;
    margin-left: 0px;
  }
  @media (max-width: 991px) {
    .column {
      width: 100%;
    }
  }
  .div-13 {
    background-color: #f7f6f8;
    display: flex;
    width: 100px;
    height: 100px;
    flex-direction: column;
    margin: 0 auto;
  }
  @media (max-width: 991px) {
    .div-13 {
      margin-top: 10px;
    }
  }
  .column-2 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 81%;
    margin-left: 20px;
  }
  @media (max-width: 991px) {
    .column-2 {
      width: 100%;
    }
  }
  .div-14 {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 991px) {
    .div-14 {
      margin-top: 10px;
    }
  }
  .div-15 {
    overflow: hidden;
    color: var(--black, #383838);
    text-overflow: ellipsis;
    white-space: nowrap;
    text-transform: capitalize;
    font: 500 25px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-15 {
      white-space: initial;
    }
  }
  .div-16 {
    align-self: start;
    display: flex;
    margin-top: 38px;
    width: 113px;
    max-width: 100%;
    gap: 9px;
  }
  .div-17 {
    border-radius: 4px;
    border: 1px solid var(--8498-af, #dfe1e3);
    display: flex;
    gap: 8px;
    padding: 0 8px;
  }
  @media (max-width: 991px) {
    .div-17 {
      justify-content: center;
    }
  }
  .div-18 {
    color: var(--black, #383838);
    text-transform: capitalize;
    font: 400 23px Poppins, sans-serif;
  }
  .div-19 {
    color: var(--black, #383838);
    text-align: center;
    text-transform: capitalize;
    font: 400 23px Poppins, sans-serif;
  }
  .div-20 {
    color: var(--black, #383838);
    text-transform: capitalize;
    white-space: nowrap;
    font: 400 23px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-20 {
      white-space: initial;
    }
  }
  .img {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 8px;
    overflow: hidden;
    align-self: center;
    max-width: 100%;
    margin: auto 0;
  }
  .div-21 {
    align-self: stretch;
    display: flex;
    flex-basis: 0%;
    flex-direction: column;
  }
  .div-22 {
    color: var(--bfb-9-cf, #b0a6bd);
    text-align: right;
    text-transform: capitalize;
    font: 400 23px Poppins, sans-serif;
  }
  .div-23 {
    color: var(--bfb-9-cf, #b0a6bd);
    text-align: right;
    text-transform: capitalize;
    margin-top: 35px;
    font: 400 23px Poppins, sans-serif;
  }
  .div-24 {
    justify-content: center;
    align-self: stretch;
    display: flex;
    flex-direction: column;
  }
  .div-25 {
    color: var(--black, #383838);
    text-align: right;
    text-transform: capitalize;
    font: 400 23px Poppins, sans-serif;
  }
  .div-26 {
    color: var(--black, #383838);
    text-align: right;
    text-transform: capitalize;
    margin-top: 35px;
    font: 400 23px Poppins, sans-serif;
  }
  .div-27 {
    background-color: #dfe1e3;
    align-self: stretch;
    margin-top: 24px;
    height: 1px;
  }
  @media (max-width: 991px) {
    .div-27 {
      max-width: 100%;
    }
  }
  .div-28 {
    align-items: start;
    align-self: stretch;
    display: flex;
    margin-top: 30px;
    width: 100%;
    justify-content: space-between;
    gap: 20px;
  }
  @media (max-width: 991px) {
    .div-28 {
      max-width: 100%;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
 
  @media (max-width: 991px) {
    .div-29 {
      max-width: 100%;
    }
  }
  .div-30 {
    gap: 20px;
    display: flex;
  }
  @media (max-width: 991px) {
    .div-30 {
      flex-direction: column;
      align-items: stretch;
      gap: 0px;
    }
  }
  .div-31 {
    background-color: #f7f6f8;
    display: flex;
    width: 100px;
    height: 100px;
    flex-direction: column;
    margin: 0 auto;
  }
  @media (max-width: 991px) {
    .div-31 {
      margin-top: 10px;
    }
  }
  .column-3 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 81%;
    margin-left: 20px;
  }
  @media (max-width: 991px) {
    .column-3 {
      width: 100%;
    }
  }
  .div-32 {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 991px) {
    .div-32 {
      margin-top: 10px;
    }
  }
  .div-33 {
    overflow: hidden;
    color: var(--black, #383838);
    text-overflow: ellipsis;
    white-space: nowrap;
    text-transform: capitalize;
    font: 500 25px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-33 {
      white-space: initial;
    }
  }
  .div-34 {
    align-self: start;
    display: flex;
    margin-top: 38px;
    width: 113px;
    max-width: 100%;
    gap: 9px;
  }
  .div-35 {
    border-radius: 4px;
    border: 1px solid var(--8498-af, #dfe1e3);
    display: flex;
    gap: 8px;
    padding: 0 8px;
  }
  @media (max-width: 991px) {
    .div-35 {
      justify-content: center;
    }
  }
  .div-36 {
    color: var(--black, #383838);
    text-transform: capitalize;
    font: 400 23px Poppins, sans-serif;
  }
  .div-37 {
    color: var(--black, #383838);
    text-align: center;
    text-transform: capitalize;
    font: 400 23px Poppins, sans-serif;
  }
  .div-38 {
    color: var(--black, #383838);
    text-transform: capitalize;
    white-space: nowrap;
    font: 400 23px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-38 {
      white-space: initial;
    }
  }
  .div-39 {
    align-self: stretch;
    display: flex;
    flex-basis: 0%;
    flex-direction: column;
  }
  .div-40 {
    color: var(--bfb-9-cf, #b0a6bd);
    text-align: right;
    text-transform: capitalize;
    font: 400 23px Poppins, sans-serif;
  }
  .div-41 {
    color: var(--bfb-9-cf, #b0a6bd);
    text-align: right;
    text-transform: capitalize;
    margin-top: 35px;
    font: 400 23px Poppins, sans-serif;
  }
  .div-42 {
    justify-content: center;
    align-self: stretch;
    display: flex;
    flex-direction: column;
  }
  .div-43 {
    color: var(--black, #383838);
    text-align: right;
    text-transform: capitalize;
    font: 400 23px Poppins, sans-serif;
  }
  .div-44 {
    color: var(--black, #383838);
    text-align: right;
    text-transform: capitalize;
    margin-top: 35px;
    font: 400 23px Poppins, sans-serif;
  }
  .div-45 {
    background-color: #dfe1e3;
    align-self: stretch;
    margin-top: 24px;
    height: 1px;
  }
  @media (max-width: 991px) {
    .div-45 {
      max-width: 100%;
    }
  }
  .div-46 {
    align-items: start;
    align-self: stretch;
    display: flex;
    margin-top: 30px;
    width: 100%;
    justify-content: space-between;
    gap: 20px;
  }
  @media (max-width: 991px) {
    .div-46 {
      max-width: 100%;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  @media (max-width: 991px) {
    .div-47 {
      max-width: 100%;
    }
  }
  .div-48 {
    gap: 20px;
    display: flex;
  }
  @media (max-width: 991px) {
    .div-48 {
      flex-direction: column;
      align-items: stretch;
      gap: 0px;
    }
  }
  .div-49 {
    background-color: #f7f6f8;
    display: flex;
    width: 100px;
    height: 100px;
    flex-direction: column;
    margin: 0 auto;
  }
  @media (max-width: 991px) {
    .div-49 {
      margin-top: 10px;
    }
  }
  .column-4 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 81%;
    margin-left: 20px;
  }
  @media (max-width: 991px) {
    .column-4 {
      width: 100%;
    }
  }
  .div-50 {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 991px) {
    .div-50 {
      margin-top: 10px;
    }
  }
  .div-51 {
    overflow: hidden;
    color: var(--black, #383838);
    text-overflow: ellipsis;
    white-space: nowrap;
    text-transform: capitalize;
    font: 500 25px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-51 {
      white-space: initial;
    }
  }
  .div-52 {
    align-self: start;
    display: flex;
    margin-top: 38px;
    width: 113px;
    max-width: 100%;
    gap: 9px;
  }
  .div-53 {
    border-radius: 4px;
    border: 1px solid var(--8498-af, #dfe1e3);
    display: flex;
    gap: 8px;
    padding: 0 8px;
  }
  @media (max-width: 991px) {
    .div-53 {
      justify-content: center;
    }
  }
  .div-54 {
    color: var(--black, #383838);
    text-transform: capitalize;
    font: 400 23px Poppins, sans-serif;
  }
  .div-55 {
    color: var(--black, #383838);
    text-align: center;
    text-transform: capitalize;
    font: 400 23px Poppins, sans-serif;
  }
  .div-56 {
    color: var(--black, #383838);
    text-transform: capitalize;
    white-space: nowrap;
    font: 400 23px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-56 {
      white-space: initial;
    }
  }
  .div-57 {
    align-self: stretch;
    display: flex;
    flex-basis: 0%;
    flex-direction: column;
  }
  .div-58 {
    color: var(--bfb-9-cf, #b0a6bd);
    text-align: right;
    text-transform: capitalize;
    font: 400 23px Poppins, sans-serif;
  }
  .div-59 {
    color: var(--bfb-9-cf, #b0a6bd);
    text-align: right;
    text-transform: capitalize;
    margin-top: 35px;
    font: 400 23px Poppins, sans-serif;
  }
  .div-60 {
    justify-content: center;
    align-self: stretch;
    display: flex;
    flex-direction: column;
  }
  .div-61 {
    color: var(--black, #383838);
    text-align: right;
    text-transform: capitalize;
    font: 400 23px Poppins, sans-serif;
  }
  .div-62 {
    color: var(--black, #383838);
    text-align: right;
    text-transform: capitalize;
    margin-top: 35px;
    font: 400 23px Poppins, sans-serif;
  }
  .div-63 {
    background-color: #dfe1e3;
    align-self: stretch;
    margin-top: 24px;
    height: 1px;
  }
  @media (max-width: 991px) {
    .div-63 {
      max-width: 100%;
    }
  }
  .div-64 {
    align-items: center;
    align-self: end;
    display: flex;
    margin-top: 27px;
    width: 231px;
    max-width: 100%;
    gap: 10px;
  }
  .div-65 {
    color: var(--black, #383838);
    text-align: right;
    text-transform: capitalize;
    margin: auto 0;
    font: 400 23px Montserrat, sans-serif;
  }
  .div-66 {
    color: var(--black, #383838);
    text-align: right;
    text-transform: capitalize;
    font: 400 23px Poppins, sans-serif;
  }
  .div-67 {
    align-self: end;
    display: flex;
    margin-top: 12px;
    width: 231px;
    max-width: 100%;
    gap: 10px;
  }
  .div-68 {
    color: var(--black, #383838);
    text-align: right;
    text-transform: capitalize;
    flex: 1;
    font: 400 23px Montserrat, sans-serif;
  }
  .div-69 {
    color: var(--black, #383838);
    text-align: right;
    text-transform: capitalize;
    flex: 1;
    font: 400 23px Montserrat, sans-serif;
  }
  .div-70 {
    align-items: center;
    align-self: end;
    display: flex;
    margin-top: 12px;
    width: 231px;
    max-width: 100%;
    gap: 10px;
  }
  .div-71 {
    color: var(--black, #383838);
    text-align: right;
    text-transform: capitalize;
    margin: auto 0;
    font: 500 23px Montserrat, sans-serif;
  }
  .div-72 {
    color: var(--black, #383838);
    text-align: right;
    text-transform: capitalize;
    font: 400 23px Poppins, sans-serif;
  }
  .div-73 {
    align-self: center;
    z-index: 1;
    display: flex;
    width: 980px;
    max-width: 100%;
    flex-direction: column;
    margin: -28px 0 227px;
  }
  @media (max-width: 991px) {
    .div-73 {
      margin-bottom: 40px;
    }
  }
  .div-74 {
    color: var(--bfb-9-cf, #2b2830);
    border-radius: 4px;
    border: 1px solid var(--8498-af, #dfe1e3);
    background-color: #fff;
    padding: 10px 10px 82px;
    font: 400 25px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-74 {
      max-width: 100%;
    }
  }
  .div-75 {
    color: var(--white, #fff);
    text-transform: capitalize;
    white-space: nowrap;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    background-color: #328b56;
    align-self: start;
    margin-top: 87px;
    width: 362px;
    max-width: 100%;
    padding: 10px 20px;
    font: 600 25px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-75 {
      white-space: initial;
      margin-top: 40px;
    }
  }
  .div-75:hover{
    background-color: #257545;
  }
  </style>