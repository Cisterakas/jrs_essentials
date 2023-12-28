<script setup>
import { ref } from "vue";
import NavigationBar from "./NavigationBar.vue";
import FooterBar from "./Footer.vue";
const imageUrl = ref("");

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      imageUrl.value = reader.result;
    };
    reader.readAsDataURL(file);
  }
};
</script>

<template>
  <NavigationBar />
  <div class="div">
    <div class="div-2">
      <div class="div-3">
        <div class="div-4">
          <div class="column">
            <div class="div-5">
              <div class="div-6">
                <div class="div-7">Contact information</div>
                <input type="text" class="div-8" placeholder="Email" />

                <div class="div-9">
                  <input
                    type="checkbox"
                    class="div-10"
                    id="email"
                    value="email"
                  />
                  <div class="div-10">Email me with news and offers</div>
                </div>
                <div class="div-11">Shipping adress</div>
                <div class="div-12">
                  <input type="text" class="div-13" placeholder="First Name" />
                  <input type="text" class="div-14" placeholder="Last Name" />
                </div>
                <input type="text" class="div-15" placeholder="Address" />

                <div class="div-16">
                  <input type="text" class="div-17" placeholder="City" />
                  <input type="text" class="div-18" placeholder="Postal code" />
                </div>
                <input type="text" class="div-19" placeholder="Phone" />

                <input type="text" class="div-19" placeholder="Country" />
                <div class="div-22">
                  All transactions are secure and encrypted.<br />
                </div>
                <div class="div-23">
                  <div class="div-24">
                    <input
                      type="radio"
                      class="div-25"
                      id="gcash"
                      name="payment"
                      value="GCASH"
                    />
                    <div class="div-25">GCASH</div>
                  </div>
                  <div class="div-26">
                    Name: Kimberly Ley Estabas<br />
                    Phone Number: 09772700065<br />
                    Please screenshot this invoice and settle your payment
                    within 2 DAYS after placing your order. Kindly send your
                    proof of payment in our FACEBOOK account @jrsessential
                    together with your order number.<br />
                    (GCASH to GCASH transaction only)
                  </div>
                  <section class="hero is-light">
                    <div class="hero-body">
                      <div class="container has-text-centered">
                        <p class="control uploader">
                          <label
                            for="imageInput"
                            class="button is-dark is-fullwidth is-medium"
                          >
                          </label>
                          <input
                            ref="imageInput"
                            id="imageInput"
                            type="file"
                            accept="image/*"
                            @change="handleImageUpload"
                            class="form-control"
                          />
                        </p>
                      </div>
                      <!-- Image preview -->
                      <div class="field">
                        <img
                          id="thumbnail"
                          :src="imageUrl"
                          alt="image-preview-here"
                        />
                      </div>
                    </div>
                  </section>
                </div>
                <div class="div-27">
                  <div class="div-28">
                    <input
                      type="radio"
                      class="div-29"
                      id="unionbank"
                      name="payment"
                      value="UNIONBANK"
                    />
                    <div class="div-29">Unionbank</div>
                  </div>
                  <div class="div-30">
                    Name: Kimberly Ley Mejia Estabas<br />
                    Account number: 9839182918<br />
                    Please screenshot this invoice and settle your payment
                    within 2 DAYS after placing your order. Kindly send your
                    proof of payment in our INSTAGRAM account @jrsessential
                    together with your order number.
                  </div>
                </div>
                <div class="div-27">
                  <div class="div-28">
                    <input
                      type="radio"
                      class="div-29"
                      id="landbank"
                      name="payment"
                      value="LANDBANK"
                    />
                    <div class="div-29">Landbank</div>
                  </div>
                  <div class="div-30">
                    Name: Kimberly Ley Mejia Estabas<br />
                    Account number: 9932567623<br />
                    Please screenshot this invoice and settle your payment
                    within 2 DAYS after placing your order. Kindly send your
                    proof of payment in our INSTAGRAM account @jrsessential
                    together with your order number.
                  </div>
                </div>
                <div class="div-31">
                  <input
                    type="radio"
                    class="div-32"
                    id="cod"
                    name="payment"
                    value="cashonDelivery"
                  />
                  <div class="div-32">cash on delivery</div>
                </div>
              </div>
            </div>
          </div>
          <div class="column-2">
            <div class="div-33">
              <div class="div-34">
                <div class="div-35">You order</div>
                <div class="div-36">
                  <div class="div-37">
                    <div class="column-3"><div class="div-38"></div></div>
                    <div class="column-4">
                      <div class="div-39">
                        <div class="div-40">Bleachpeel Soap</div>
                        <div class="div-41">₱ 300.00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="div-42"></div>
                <div class="div-43">
                  <div class="div-44">
                    <div class="column-5"><div class="div-45"></div></div>
                    <div class="column-6">
                      <div class="div-46">
                        <div class="div-47">15 in 1 Soap | 135g</div>
                        <div class="div-48">₱ 220.00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="div-49"></div>
                <div class="div-50">
                  <div class="div-51">
                    <div class="column-7"><div class="div-52"></div></div>
                    <div class="column-8">
                      <div class="div-53">
                        <div class="div-54">Glutamato with Grapeseed</div>
                        <div class="div-55">₱ 160.00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="div-56">
                  <div class="div-57">
                    <div class="div-58">Subtotal</div>
                    <div class="div-59">₱680.00</div>
                  </div>
                </div>
              </div>
              <router-link to="/" type="button" class="div-60">Place Order</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterBar />
</template>

<style scoped>
.div-60:hover {
  background-color: #194d2e;
}
.div {
  justify-content: center;
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
  padding: 39px 20px 144px;
}
@media (max-width: 991px) {
  .div-2 {
    max-width: 100%;
    padding-bottom: 100px;
  }
}
.div-3 {
  margin-bottom: -29px;
  width: 100%;
  max-width: 1345px;
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
  width: 65%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column {
    width: 100%;
  }
}
.div-5 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-5 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-6 {
  align-items: flex-start;
  border-radius: 6px;
  box-shadow: 0px 2px 10px 0px rgba(185, 166, 189, 0.1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 32px 36px 32px 30px;
}
@media (max-width: 991px) {
  .div-6 {
    max-width: 100%;
    padding: 0 20px;
  }
}
.div-7 {
  color: var(--black, #383838);
  text-transform: capitalize;
  align-self: stretch;
  white-space: nowrap;
  font: 500 25px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-7 {
    max-width: 100%;
    white-space: initial;
  }
}
.div-8 {
  color: var(--bfb-9-cf, #b0a6bd);
  text-transform: capitalize;
  border-radius: 4px;
  border: 1px solid var(--8498-af, #dfe1e3);
  background-color: #fff;
  align-self: stretch;
  margin-top: 32px;
  padding: 10px;
  font: 400 21px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-8 {
    max-width: 100%;
  }
}
.div-9 {
  align-items: start;
  align-self: start;
  display: flex;
  margin-top: 12px;
  width: 324px;
  max-width: 100%;
  gap: 10px;
}
.img {
  aspect-ratio: 1.2;
  object-fit: contain;
  object-position: center;
  width: 18px;
  overflow: hidden;
  margin-top: 6px;
  max-width: 100%;
}
.div-10 {
  color: var(--697586, #697586);
  align-self: stretch;
  white-space: nowrap;
  font: 400 19px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-10 {
    white-space: initial;
  }
}
.div-11 {
  color: var(--black, #383838);
  text-transform: capitalize;
  align-self: stretch;
  margin-top: 51px;
  white-space: nowrap;
  font: 500 25px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-11 {
    max-width: 100%;
    margin-top: 40px;
    white-space: initial;
  }
}
.div-12 {
  align-self: stretch;
  display: flex;
  margin-top: 25px;
  padding-right: 7px;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-12 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-13 {
  color: var(--bfb-9-cf, #b0a6bd);
  text-transform: capitalize;
  border-radius: 4px;
  border: 1px solid var(--8498-af, #dfe1e3);
  background-color: #fff;
  flex-grow: 1;
  padding: 10px;
  font: 400 21px Poppins, sans-serif;
}
.div-14 {
  color: var(--bfb-9-cf, #b0a6bd);
  text-transform: capitalize;
  border-radius: 4px;
  border: 1px solid var(--8498-af, #dfe1e3);
  background-color: #fff;
  flex-grow: 1;
  padding: 10px;
  font: 400 21px Poppins, sans-serif;
}
.div-15 {
  color: var(--bfb-9-cf, #b0a6bd);
  text-transform: capitalize;
  border-radius: 4px;
  border: 1px solid var(--8498-af, #dfe1e3);
  background-color: #fff;
  align-self: stretch;
  margin-top: 12px;
  padding: 10px;
  font: 400 21px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-15 {
    max-width: 100%;
  }
}
.div-16 {
  align-self: stretch;
  display: flex;
  margin-top: 12px;
  padding-right: 7px;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-16 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-17 {
  color: var(--bfb-9-cf, #b0a6bd);
  text-transform: capitalize;
  border-radius: 4px;
  border: 1px solid var(--8498-af, #dfe1e3);
  background-color: #fff;
  flex-grow: 1;
  padding: 10px;
  font: 400 21px Poppins, sans-serif;
}
.div-18 {
  color: var(--bfb-9-cf, #b0a6bd);
  text-transform: capitalize;
  border-radius: 4px;
  border: 1px solid var(--8498-af, #dfe1e3);
  background-color: #fff;
  flex-grow: 1;
  padding: 10px;
  font: 400 21px Poppins, sans-serif;
}
.div-19 {
  color: var(--bfb-9-cf, #b0a6bd);
  text-transform: capitalize;
  border-radius: 4px;
  border: 1px solid var(--8498-af, #dfe1e3);
  background-color: #fff;
  align-self: stretch;
  margin-top: 12px;
  padding: 10px;
  font: 400 21px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-19 {
    max-width: 100%;
  }
}
.div-20 {
  color: var(--bfb-9-cf, #b0a6bd);
  text-transform: capitalize;
  align-self: stretch;
  margin-top: 12px;
  white-space: nowrap;
  font: 400 17px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-20 {
    max-width: 100%;
    white-space: initial;
  }
}
.div-21 {
  align-items: flex-start;
  align-self: stretch;
  border-radius: 4px;
  border: 1.2px solid var(--8498-af, #dfe1e3);
  background-color: #fff;
  display: flex;
  height: 52px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-21 {
    max-width: 100%;
  }
}
.div-22 {
  color: var(--697586, #697586);
  align-self: stretch;
  margin-top: 57px;
  font: 400 19px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-22 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-23 {
  justify-content: center;
  align-self: stretch;
  display: flex;
  margin-top: 27px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-23 {
    max-width: 100%;
  }
}
.div-24 {
  align-items: center;
  background-color: rgba(176, 166, 189, 0.1);
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 12px 276px 12px 10px;
}
@media (max-width: 991px) {
  .div-24 {
    max-width: 100%;
    flex-wrap: wrap;
    padding-right: 20px;
  }
}
.img-2 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  overflow: hidden;
  max-width: 100%;
  margin: auto 0;
}
.div-25 {
  color: var(--black, #383838);
  text-transform: uppercase;
  align-self: stretch;
  flex-grow: 1;
  flex-basis: auto;
  font: 500 19px/142% Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-25 {
    max-width: 100%;
  }
}
.div-26 {
  color: var(--697586, #697586);
  margin-top: 10px;
  font: 400 19px/116% Montserrat, sans-serif;
}
@media (max-width: 991px) {
  .div-26 {
    max-width: 100%;
  }
}
.div-27 {
  justify-content: center;
  align-self: stretch;
  display: flex;
  margin-top: 27px;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-27 {
    max-width: 100%;
  }
}
.div-28 {
  align-items: center;
  background-color: rgba(176, 166, 189, 0.1);
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 12px 274px 12px 10px;
}
@media (max-width: 991px) {
  .div-28 {
    max-width: 100%;
    flex-wrap: wrap;
    padding-right: 20px;
  }
}
.img-3 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  overflow: hidden;
  max-width: 100%;
  margin: auto 0;
}
.div-29 {
  color: var(--black, #383838);
  text-transform: uppercase;
  align-self: stretch;
  flex-grow: 1;
  flex-basis: auto;
  font: 500 19px/142% Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-29 {
    max-width: 100%;
  }
}
.div-30 {
  color: var(--697586, #697586);
  margin-top: 10px;
  font: 400 19px/116% Montserrat, sans-serif;
}
@media (max-width: 991px) {
  .div-30 {
    max-width: 100%;
  }
}
.div-31 {
  align-items: center;
  background-color: rgba(176, 166, 189, 0.1);
  align-self: stretch;
  display: flex;
  margin-top: 27px;
  justify-content: space-between;
  gap: 20px;
  padding: 12px 276px 12px 10px;
}
@media (max-width: 991px) {
  .div-31 {
    max-width: 100%;
    flex-wrap: wrap;
    padding-right: 20px;
  }
}
.img-4 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  overflow: hidden;
  max-width: 100%;
  margin: auto 0;
}
.div-32 {
  color: var(--black, #383838);
  text-transform: uppercase;
  align-self: stretch;
  flex-grow: 1;
  flex-basis: auto;
  font: 500 19px/142% Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-32 {
    max-width: 100%;
  }
}
.column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 35%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-2 {
    width: 100%;
  }
}
.div-33 {
  display: flex;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-33 {
    max-width: 100%;
    margin-top: 40px;
  }
}
.div-34 {
  border-radius: 6px;
  box-shadow: 0px 2px 10px 0px rgba(185, 166, 189, 0.1);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
}
@media (max-width: 991px) {
  .div-34 {
    max-width: 100%;
  }
}
.div-35 {
  color: var(--black, #383838);
  white-space: nowrap;
  font: 500 25px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-35 {
    white-space: initial;
  }
}
.div-36 {
  margin-top: 30px;
}
.div-37 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-37 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column-3 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 26%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column-3 {
    width: 100%;
  }
}
.div-38 {
  background-color: #f7f6f8;
  display: flex;
  width: 100px;
  height: 100px;
  flex-direction: column;
  margin: 0 auto;
}
@media (max-width: 991px) {
  .div-38 {
    margin-top: 10px;
  }
}
.column-4 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 74%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-4 {
    width: 100%;
  }
}
.div-39 {
  display: flex;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-39 {
    margin-top: 10px;
  }
}
.div-40 {
  color: var(--black, #383838);
  text-transform: capitalize;
  white-space: nowrap;
  font: 500 21px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-40 {
    white-space: initial;
  }
}
.div-41 {
  color: var(--black, #383838);
  text-transform: capitalize;
  margin-top: 9px;
  white-space: nowrap;
  font: 400 19px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-41 {
    white-space: initial;
  }
}
.div-42 {
  background-color: #dfe1e3;
  margin-top: 19px;
  height: 1px;
}
.div-43 {
  margin-top: 20px;
}
.div-44 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-44 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column-5 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 26%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column-5 {
    width: 100%;
  }
}
.div-45 {
  background-color: #f7f6f8;
  display: flex;
  width: 100px;
  height: 100px;
  flex-direction: column;
  margin: 0 auto;
}
@media (max-width: 991px) {
  .div-45 {
    margin-top: 10px;
  }
}
.column-6 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 74%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-6 {
    width: 100%;
  }
}
.div-46 {
  display: flex;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-46 {
    margin-top: 10px;
  }
}
.div-47 {
  color: var(--black, #383838);
  text-transform: capitalize;
  white-space: nowrap;
  font: 500 21px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-47 {
    white-space: initial;
  }
}
.div-48 {
  color: var(--black, #383838);
  text-transform: capitalize;
  margin-top: 9px;
  white-space: nowrap;
  font: 400 19px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-48 {
    white-space: initial;
  }
}
.div-49 {
  background-color: #dfe1e3;
  margin-top: 19px;
  height: 1px;
}
.div-50 {
  margin-top: 20px;
}
.div-51 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-51 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column-7 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 26%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column-7 {
    width: 100%;
  }
}
.div-52 {
  background-color: #f7f6f8;
  display: flex;
  width: 100px;
  height: 100px;
  flex-direction: column;
  margin: 0 auto;
}
@media (max-width: 991px) {
  .div-52 {
    margin-top: 10px;
  }
}
.column-8 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 74%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-8 {
    width: 100%;
  }
}
.div-53 {
  display: flex;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-53 {
    margin-top: 10px;
  }
}
.div-54 {
  color: var(--black, #383838);
  text-transform: capitalize;
  white-space: nowrap;
  font: 500 21px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-54 {
    white-space: initial;
  }
}
.div-55 {
  color: var(--black, #383838);
  text-transform: capitalize;
  margin-top: 9px;
  white-space: nowrap;
  font: 400 19px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-55 {
    white-space: initial;
  }
}
.div-56 {
  display: flex;
  margin-top: 40px;
  flex-direction: column;
}
.div-57 {
  justify-content: space-between;
  display: flex;
  gap: 20px;
}
.div-58 {
  color: var(--bfb-9-cf, #b0a6bd);
  text-transform: uppercase;
  font: 400 21px/86% Poppins, sans-serif;
}
.div-59 {
  color: var(--bfb-9-cf, #b0a6bd);
  text-align: right;
  text-transform: uppercase;
  font: 400 21px/86% Poppins, sans-serif;
}
.div-60 {
  color: var(--white, #fff);
  text-transform: capitalize;
  white-space: nowrap;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  background-color: #328b56;
  align-self: start;
  width: 362px;
  max-width: 100%;
  margin: 60px 0 0 10px;
  padding: 10px 20px;
  font: 600 21px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-60 {
    white-space: initial;
    margin-top: 40px;
  }
}
</style>
