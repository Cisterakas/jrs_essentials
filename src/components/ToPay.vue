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
                <div type="button" class="div-13">To Pay</div>
                <router-link to="/toShip" type="button" class="div-14">To Ship</router-link>
                <router-link to="/toReceive" type="button" class="div-14">To Receive</router-link>
                <router-link to="/toRate" type="button" class="div-14">To Rate</router-link>
               
              </div>
              <div class="div-17">
                <div class="div-18">Order No. 235643-4512</div>
                <div class="div-19">
                  <div type="button" class="div-20">In process</div>
                  <div type="button" class="div-21">cancel</div>
                </div>
              </div>
              <div class="div-22">
                <div class="div-23"></div>
                <div class="div-24">
                  <div class="div-25">
                    <div class="div-26">Bleachpeel Soap</div>
                    <div class="div-27">
                      All Around Safe Block Sun Milk SPF50+/PA+++
                    </div>
                    <div class="div-28">Product code: 10896</div>
                  </div>
                  <div class="div-29">
                    <div class="div-30">2 pcs</div>
                    <div class="div-31">Total:</div>
                  </div>
                  <div class="div-32">
                    <div class="div-33">₱ 150.00</div>
                    <div class="div-34">₱ 300.00</div>
                  </div>
                </div>
              </div>
              <div class="div-35"></div>
              <div class="div-36">
                <div class="div-37"></div>
                <div class="div-38">
                  <div class="div-39">
                    <div class="div-40">15 in 1 Soap | 135g</div>
                    <div class="div-41">
                      All Around Safe Block Sun Milk SPF50+/PA+++
                    </div>
                    <div class="div-42">Product code: 10896</div>
                  </div>
                  <div class="div-43">
                    <div class="div-44">2 pcs</div>
                    <div class="div-45">Total:</div>
                  </div>
                  <div class="div-46">
                    <div class="div-47">₱ 110.00</div>
                    <div class="div-48">₱ 220.00</div>
                  </div>
                </div>
              </div>
              <div class="div-49"></div>
              <div class="div-50">
                <div class="div-51"></div>
                <div class="div-52">
                  <div class="div-53">
                    <div class="div-54">Soft Finish</div>
                    <div class="div-55">
                      All Around Safe Block Sun Milk SPF50+/PA+++
                    </div>
                    <div class="div-56">Product code: 10896</div>
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
              </div>
              <div class="div-63"></div>
              <div class="div-64">
                <div class="div-65">
                  <div class="div-66">subtotal</div>
                  <div class="div-67">Shipping</div>
                  <div class="div-68">total</div>
                </div>
                <div class="div-69">
                  <div class="div-70">₱680.00</div>
                  <div class="div-71">₱60.00</div>
                  <div class="div-72">₱740.00</div>
                </div>
              </div>
              <div class="div-73">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b517c73-5599-47ac-ac2e-fb71d678fa18?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                  class="img"
                />
                <div class="div-74">Payment Confirmed</div>
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
  margin: 51px 0 58px;
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
  align-self: stretch;
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
  justify-content: space-between;
  align-self: stretch;
  display: flex;
  margin-top: 50px;
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
  .div-13 {
    white-space: initial;
  }
}
.div-14:hover{
  background-color: #328b56;
  color: #fff;
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
  align-self: center;
  display: flex;
  margin-top: 51px;
  width: 744px;
  max-width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-17 {
    flex-wrap: wrap;
    margin-top: 40px;
  }
}
.div-18 {
  color: var(--black, #383838);
  text-transform: capitalize;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
  font: 500 20px/30px Poppins, sans-serif;
}
.div-19 {
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.div-20 {
  color: var(--bfb-9-cf, #b0a6bd);
  text-align: right;
  text-transform: capitalize;
  margin: auto 0;
  font: 400 20px/30px Poppins, sans-serif;
}
.div-21 {
  color: var(--697586, #697586);
  text-transform: capitalize;
  align-self: stretch;
  white-space: nowrap;
  font: 500 20px/30px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-21 {
    white-space: initial;
  }
}
.div-22 {
  align-self: center;
  display: flex;
  margin-top: 30px;
  width: 744px;
  max-width: 100%;
  gap: 10px;
}
@media (max-width: 991px) {
  .div-22 {
    flex-wrap: wrap;
  }
}
.div-23 {
  background-color: #f7f6f8;
  display: flex;
  width: 100px;
  height: 100px;
  flex-direction: column;
}
.div-24 {
  align-items: start;
  align-self: start;
  display: flex;
  gap: 45px;
}
@media (max-width: 991px) {
  .div-24 {
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
}
.div-25 {
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
}
.div-26 {
  overflow: hidden;
  color: var(--black, #383838);
  text-overflow: ellipsis;
  white-space: nowrap;
  text-transform: capitalize;
  font: 500 20px/30px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-26 {
    white-space: initial;
  }
}
.div-27 {
  overflow: hidden;
  color: var(--697586, #697586);
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 10px;
  font: 400 18px/20px Montserrat, sans-serif;
}
@media (max-width: 991px) {
  .div-27 {
    white-space: initial;
  }
}
.div-28 {
  color: var(--bfb-9-cf, #b0a6bd);
  text-transform: lowercase;
  margin-top: 10px;
  white-space: nowrap;
  font: 400 18px/22px Montserrat, sans-serif;
}
@media (max-width: 991px) {
  .div-28 {
    white-space: initial;
  }
}
.div-29 {
  align-self: stretch;
  display: flex;
  flex-basis: 0%;
  flex-direction: column;
}
.div-30 {
  color: var(--bfb-9-cf, #b0a6bd);
  text-align: right;
  text-transform: capitalize;
  font: 400 18px/27px Poppins, sans-serif;
}
.div-31 {
  color: var(--bfb-9-cf, #b0a6bd);
  text-align: right;
  text-transform: capitalize;
  margin-top: 35px;
  font: 400 18px/27px Poppins, sans-serif;
}
.div-32 {
  justify-content: center;
  align-self: stretch;
  display: flex;
  flex-basis: auto;
  flex-direction: column;
}
.div-33 {
  color: var(--bfb-9-cf, #b0a6bd);
  text-align: right;
  text-transform: capitalize;
  font: 400 18px/27px Poppins, sans-serif;
}
.div-34 {
  color: var(--black, #383838);
  text-align: right;
  text-transform: capitalize;
  margin-top: 35px;
  font: 400 18px/27px Poppins, sans-serif;
}
.div-35 {
  background-color: #dfe1e3;
  align-self: center;
  margin-top: 29px;
  width: 744px;
  height: 1px;
}
@media (max-width: 991px) {
  .div-35 {
    max-width: 100%;
  }
}
.div-36 {
  align-self: center;
  display: flex;
  margin-top: 30px;
  width: 744px;
  max-width: 100%;
  gap: 10px;
}
@media (max-width: 991px) {
  .div-36 {
    flex-wrap: wrap;
  }
}
.div-37 {
  background-color: #f7f6f8;
  display: flex;
  width: 100px;
  height: 100px;
  flex-direction: column;
}
.div-38 {
  align-items: start;
  align-self: start;
  display: flex;
  gap: 45px;
}
@media (max-width: 991px) {
  .div-38 {
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
}
.div-39 {
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
}
.div-40 {
  overflow: hidden;
  color: var(--black, #383838);
  text-overflow: ellipsis;
  white-space: nowrap;
  text-transform: capitalize;
  font: 500 20px/30px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-40 {
    white-space: initial;
  }
}
.div-41 {
  overflow: hidden;
  color: var(--697586, #697586);
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 10px;
  font: 400 18px/20px Montserrat, sans-serif;
}
@media (max-width: 991px) {
  .div-41 {
    white-space: initial;
  }
}
.div-42 {
  color: var(--bfb-9-cf, #b0a6bd);
  text-transform: lowercase;
  margin-top: 10px;
  white-space: nowrap;
  font: 400 18px/22px Montserrat, sans-serif;
}
@media (max-width: 991px) {
  .div-42 {
    white-space: initial;
  }
}
.div-43 {
  align-self: stretch;
  display: flex;
  flex-basis: 0%;
  flex-direction: column;
}
.div-44 {
  color: var(--bfb-9-cf, #b0a6bd);
  text-align: right;
  text-transform: capitalize;
  font: 400 18px/27px Poppins, sans-serif;
}
.div-45 {
  color: var(--bfb-9-cf, #b0a6bd);
  text-align: right;
  text-transform: capitalize;
  margin-top: 35px;
  font: 400 18px/27px Poppins, sans-serif;
}
.div-46 {
  justify-content: center;
  align-self: stretch;
  display: flex;
  flex-direction: column;
}
.div-47 {
  color: var(--bfb-9-cf, #b0a6bd);
  text-align: right;
  text-transform: capitalize;
  font: 400 18px/27px Poppins, sans-serif;
}
.div-48 {
  color: var(--black, #383838);
  text-align: right;
  text-transform: capitalize;
  margin-top: 35px;
  font: 400 18px/27px Poppins, sans-serif;
}
.div-49 {
  background-color: #dfe1e3;
  align-self: center;
  margin-top: 29px;
  width: 744px;
  height: 1px;
}
@media (max-width: 991px) {
  .div-49 {
    max-width: 100%;
  }
}
.div-50 {
  align-self: center;
  display: flex;
  margin-top: 30px;
  width: 744px;
  max-width: 100%;
  gap: 10px;
}
@media (max-width: 991px) {
  .div-50 {
    flex-wrap: wrap;
  }
}
.div-51 {
  background-color: #f7f6f8;
  display: flex;
  width: 100px;
  height: 100px;
  flex-direction: column;
}
.div-52 {
  align-items: start;
  align-self: start;
  display: flex;
  gap: 45px;
}
@media (max-width: 991px) {
  .div-52 {
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
}
.div-53 {
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
}
.div-54 {
  overflow: hidden;
  color: var(--black, #383838);
  text-overflow: ellipsis;
  white-space: nowrap;
  text-transform: capitalize;
  font: 500 20px/30px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-54 {
    white-space: initial;
  }
}
.div-55 {
  overflow: hidden;
  color: var(--697586, #697586);
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 10px;
  font: 400 18px/20px Montserrat, sans-serif;
}
@media (max-width: 991px) {
  .div-55 {
    white-space: initial;
  }
}
.div-56 {
  color: var(--bfb-9-cf, #b0a6bd);
  text-transform: lowercase;
  margin-top: 10px;
  white-space: nowrap;
  font: 400 18px/22px Montserrat, sans-serif;
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
  font: 400 18px/27px Poppins, sans-serif;
}
.div-59 {
  color: var(--bfb-9-cf, #b0a6bd);
  text-align: right;
  text-transform: capitalize;
  margin-top: 35px;
  font: 400 18px/27px Poppins, sans-serif;
}
.div-60 {
  justify-content: center;
  align-self: stretch;
  display: flex;
  flex-direction: column;
}
.div-61 {
  color: var(--bfb-9-cf, #b0a6bd);
  text-align: right;
  text-transform: capitalize;
  font: 400 18px/27px Poppins, sans-serif;
}
.div-62 {
  color: var(--black, #383838);
  text-align: right;
  text-transform: capitalize;
  margin-top: 35px;
  font: 400 18px/27px Poppins, sans-serif;
}
.div-63 {
  background-color: #dfe1e3;
  align-self: center;
  margin-top: 29px;
  width: 744px;
  height: 1px;
}
@media (max-width: 991px) {
  .div-63 {
    max-width: 100%;
  }
}
.div-64 {
  align-self: end;
  display: flex;
  width: 224px;
  max-width: 100%;
  gap: 10px;
  margin: 30px 30px 0 0;
}
@media (max-width: 991px) {
  .div-64 {
    margin-right: 10px;
  }
}
.div-65 {
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
}
.div-66 {
  color: var(--black, #383838);
  text-align: right;
  text-transform: capitalize;
  font: 400 18px/22px Montserrat, sans-serif;
}
.div-67 {
  color: var(--black, #383838);
  text-align: right;
  text-transform: capitalize;
  margin-top: 10px;
  font: 400 18px/22px Montserrat, sans-serif;
}
.div-68 {
  color: var(--black, #383838);
  text-align: right;
  text-transform: capitalize;
  margin-top: 10px;
  font: 500 18px/22px Montserrat, sans-serif;
}
.div-69 {
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
}
.div-70 {
  color: var(--black, #383838);
  text-align: right;
  text-transform: capitalize;
  font: 400 18px/22px Montserrat, sans-serif;
}
.div-71 {
  color: var(--black, #383838);
  text-align: right;
  text-transform: capitalize;
  margin-top: 10px;
  font: 400 18px/22px Montserrat, sans-serif;
}
.div-72 {
  color: var(--black, #383838);
  text-align: right;
  text-transform: capitalize;
  margin-top: 10px;
  font: 500 18px/22px Montserrat, sans-serif;
}
.div-73 {
  border-radius: 4px;
  background-color: rgba(127, 204, 198, 0.1);
  align-self: center;
  display: flex;
  margin-top: 30px;
  width: 744px;
  max-width: 100%;
  gap: 10px;
  padding: 10px;
}
@media (max-width: 991px) {
  .div-73 {
    flex-wrap: wrap;
  }
}
.img {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
  overflow: hidden;
  max-width: 100%;
}
.div-74 {
  color: var(--teal2, #7fccc6);
  flex-grow: 1;
  flex-basis: auto;
  font: 400 14px/21px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-74 {
    max-width: 100%;
  }
}
</style>