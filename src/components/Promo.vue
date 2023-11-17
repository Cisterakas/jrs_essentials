<script setup>
import NavigationBar from './NavigationBar.vue'
import FooterBar from './Footer.vue'

import { ref } from 'vue';

const counter = ref(1);
const initialPrice = ref(150);
const price = 150;

const increment = () => {
  counter.value++;
  initialPrice.value += price; 
};

const decrement = () => {
  if (counter.value) {
    counter.value--;
    initialPrice.value -= price;
  } else {
    counter.value = 0;
    initialPrice.value = 0;
  }
};

const deleteAll = () => {
  counter.value = 1;
  initialPrice.value = 150;
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
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2753ad40-3b82-4874-a2fb-67dc52b71655?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2753ad40-3b82-4874-a2fb-67dc52b71655?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2753ad40-3b82-4874-a2fb-67dc52b71655?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2753ad40-3b82-4874-a2fb-67dc52b71655?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2753ad40-3b82-4874-a2fb-67dc52b71655?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2753ad40-3b82-4874-a2fb-67dc52b71655?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2753ad40-3b82-4874-a2fb-67dc52b71655?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2753ad40-3b82-4874-a2fb-67dc52b71655?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                  class="img"
                />
                <div class="div-6">
                  <div class="div-7">
                    <div class="column-2">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/85ed6cb0-6235-4f01-aa26-4b83b1d2e6b5?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/85ed6cb0-6235-4f01-aa26-4b83b1d2e6b5?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/85ed6cb0-6235-4f01-aa26-4b83b1d2e6b5?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/85ed6cb0-6235-4f01-aa26-4b83b1d2e6b5?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/85ed6cb0-6235-4f01-aa26-4b83b1d2e6b5?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/85ed6cb0-6235-4f01-aa26-4b83b1d2e6b5?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/85ed6cb0-6235-4f01-aa26-4b83b1d2e6b5?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/85ed6cb0-6235-4f01-aa26-4b83b1d2e6b5?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                        class="img-2"
                      />
                    </div>
                    <div class="column-3">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/de6ba6db-69e4-4ba0-8197-751d8769b854?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/de6ba6db-69e4-4ba0-8197-751d8769b854?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/de6ba6db-69e4-4ba0-8197-751d8769b854?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/de6ba6db-69e4-4ba0-8197-751d8769b854?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/de6ba6db-69e4-4ba0-8197-751d8769b854?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/de6ba6db-69e4-4ba0-8197-751d8769b854?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/de6ba6db-69e4-4ba0-8197-751d8769b854?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/de6ba6db-69e4-4ba0-8197-751d8769b854?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                        class="img-3"
                      />
                    </div>
                    <div class="column-4">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5dea5240-7322-490e-abfa-cb2b6c7ea0ac?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5dea5240-7322-490e-abfa-cb2b6c7ea0ac?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5dea5240-7322-490e-abfa-cb2b6c7ea0ac?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5dea5240-7322-490e-abfa-cb2b6c7ea0ac?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5dea5240-7322-490e-abfa-cb2b6c7ea0ac?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5dea5240-7322-490e-abfa-cb2b6c7ea0ac?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5dea5240-7322-490e-abfa-cb2b6c7ea0ac?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5dea5240-7322-490e-abfa-cb2b6c7ea0ac?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                        class="img-4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column-5">
              <div class="div-8">
                <div class="div-9">
                  <div class="div-10">Bleachpeel Soap</div>
                  <div class="div-11">
                    <span
                      style="
                        font-family: Poppins, -apple-system, Roboto, Helvetica,
                          sans-serif;
                        font-weight: 400;
                      "
                      >| </span
                    ><span
                      style="
                        font-family: Poppins, -apple-system, Roboto, Helvetica,
                          sans-serif;
                        font-weight: 600;
                      "
                    >
                    </span>
                  </div>
                  <div class="div-12">135g</div>
                </div>
                <div class="div-13">
                  <div class="div-14">₱ {{ initialPrice }}</div>
                  <div class="div-15">
                    <div class="div-16">5.0</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5930cab-e8e7-4475-b853-d27c5146e41b?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-5"
                    /><img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cc0c412-2a4c-4197-b749-e531b9b914fc?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-6"
                    /><img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9360cd3-882f-42d0-b292-5c051fe0d839?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-7"
                    /><img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6ef621cf-9e9e-40da-b18c-6749795a03fe?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-8"
                    /><img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d21688ad-185c-4548-a0f2-bddb74fafcca?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-9"
                    />
                  </div>
                </div>
                
                <div class="div-19">
                    <div class="div-21">
                        <div class="div-23">
                            <button class="item__remove" @click="decrement">-</button>
                    </div>
                    </div>
                    <div class="div-25">
                        <div class="div-26">Quantity: {{ counter }}</div>
                    </div>
                    <div class="div-28">

                        <div class="div-29">
                            <button class="item__add" @click="increment">+</button>
                       
                        
                        </div>
                    </div>
                    <div class="div-28">

<div class="div-29">
    <button class="item__delete" @click="deleteAll">x</button>

</div>
</div>
             
                        
                   
                  </div>
                  <div class="div-14">Price: {{ initialPrice }}</div>
                <!-- <div class="div-17">
                  <div class="div-18">Quantity</div>
                  <div class="div-19">
                    <div class="div-20">
                      <div class="div-21">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/14d5f694-b2f3-435f-a5b4-7316857102e2?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                          class="img-10"
                        />-
                      </div>
                    </div>
                    <div class="div-23">
                      <div class="div-24">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfbf3679-34d7-4143-b526-a23e4d050734?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                          class="img-11"
                        />1
                      </div>
                    </div>
                    <div class="div-26">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c6e357c1-d3d9-47cd-8124-99921cc62c2f?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6e357c1-d3d9-47cd-8124-99921cc62c2f?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6e357c1-d3d9-47cd-8124-99921cc62c2f?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6e357c1-d3d9-47cd-8124-99921cc62c2f?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6e357c1-d3d9-47cd-8124-99921cc62c2f?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6e357c1-d3d9-47cd-8124-99921cc62c2f?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6e357c1-d3d9-47cd-8124-99921cc62c2f?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c6e357c1-d3d9-47cd-8124-99921cc62c2f?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                        class="img-12"
                      />
                    </div>
                  </div>
                </div> -->
                <div class="div-27">
                  <div class="div-28">
                    <div class="column-6">
                      <div class="div-29">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2bf8917d-7e5c-4cd3-a320-548e3e5f78f5?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                          class="img-13"
                        />
                        <div class="div-30">Add To Cart</div>
                      </div>
                    </div>
                    <div class="column-7"><div class="div-31">Buy Now</div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="div-32">Direction to Use</div>
        <div class="div-33">
          <div class="div-34">
            <div class="column-8">
              <div class="div-35">
                <span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 700;
                  "
                  >FACE WASHING <br /></span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 500;
                  "
                  >☑ Wet the soap and run repeatedly   unto hand to gather a small
                    amount of lather.<br />☑ Using only the lather, apply  
                  lightly to face and neck in <br />
                  circular motion.<br />☑ DO NOT RUB.<br />☑ Natural exfoliating
                  factor <br />
                  takes place upon skin contact.<br />☑ Rinse well, pat face with
                  dry <br />
                  clean towel.</span
                >
              </div>
            </div>
            <div class="column-9">
              <div class="div-36">
                <span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 700;
                  "
                  >BODY WASHING <br /></span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 500;
                  "
                  >☑ Rinse the bar soap all over <br />
                  the body.<br />☑ Lather well for at least a minute.<br />☑ FOR
                  SENSITIVE SKIN, lather for <br />
                  less than a minute and don’t <br />
                  scrub your body.<br />☑ Just let the natural extracts <br />
                  of the soap do the exfoliation.</span
                >
              </div>
            </div>
            <div class="column-10">
              <div class="div-37">
                <span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 700;
                  "
                  >GIVE YOUR SKIN A BREAK! <br /></span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 500;
                  "
                  >☑ NEVER use different products <br />
                  on your skin all at once! <br />☑ Do a week rest if you are
                  <br />
                  planning to switch to another <br />
                  product. <br />☑ Do this for your own safety.<br
                /></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="div-38">
        <div class="div-39">YOU GLOW GIRL!!</div>
        <div class="div-40">Feedback Corner</div>
        <div class="div-41">
          <div class="div-42">
            <div class="column-11">
              <div class="div-43">
                <div class="div-44">“</div>
                <div class="div-45">Emily Wilson</div>
                <div class="div-46">
                  The customer experience was exceptional from start to finish.
                  The website is user-friendly, the checkout process was smooth,
                  and the clothes I ordered fit perfectly. I'm beyond satisfied!
                </div>
              </div>
            </div>
            <div class="column-12">
              <div class="div-47">
                <div class="div-48">“</div>
                <div class="div-49">Sarah Thompson</div>
                <div class="div-50">
                  I absolutely love the quality and style of the clothing I
                  purchased from this website. customer service was outstanding,
                  and I received my order quickly. Highly recommended!
                </div>
              </div>
            </div>
            <div class="column-13">
              <div class="div-51">
                <div class="div-52">“</div>
                <div class="div-53">Olivia Martinez</div>
                <div class="div-54">
                  I had a great experience shopping on this website. The clothes I
                  bought are fashionable and comfortable. Highly satisfied!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="div-55">BACK</div>
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
      #c4f0d6 3.14%,
      rgba(255, 255, 255, 0) 87.34%
    );
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 78px 60px 56px;
  }
  @media (max-width: 991px) {
    .div-2 {
      max-width: 100%;
      padding: 0 20px;
    }
  }
  .div-3 {
    align-self: center;
    width: 100%;
    max-width: 1425px;
  }
  @media (max-width: 991px) {
    .div-3 {
      max-width: 100%;
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
    width: 38%;
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
  .img {
    aspect-ratio: 0.95;
    object-fit: contain;
    object-position: center;
    width: 100%;
    overflow: hidden;
  }
  @media (max-width: 991px) {
    .img {
      max-width: 100%;
    }
  }
  .div-6 {
    margin-top: 18px;
  }
  @media (max-width: 991px) {
    .div-6 {
      max-width: 100%;
    }
  }
  .div-7 {
    gap: 20px;
    display: flex;
  }
  @media (max-width: 991px) {
    .div-7 {
      flex-direction: column;
      align-items: stretch;
      gap: 0px;
    }
  }
  .column-2 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 33%;
    margin-left: 0px;
  }
  @media (max-width: 991px) {
    .column-2 {
      width: 100%;
    }
  }
  .img-2 {
    aspect-ratio: 0.99;
    object-fit: contain;
    object-position: center;
    width: 141px;
    overflow: hidden;
    max-width: 100%;
  }
  @media (max-width: 991px) {
    .img-2 {
      margin-top: 24px;
    }
  }
  .column-3 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 33%;
    margin-left: 20px;
  }
  @media (max-width: 991px) {
    .column-3 {
      width: 100%;
    }
  }
  .img-3 {
    aspect-ratio: 0.99;
    object-fit: contain;
    object-position: center;
    width: 141px;
    overflow: hidden;
    max-width: 100%;
  }
  @media (max-width: 991px) {
    .img-3 {
      margin-top: 24px;
    }
  }
  .column-4 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 33%;
    margin-left: 20px;
  }
  @media (max-width: 991px) {
    .column-4 {
      width: 100%;
    }
  }
  .img-4 {
    aspect-ratio: 0.99;
    object-fit: contain;
    object-position: center;
    width: 141px;
    overflow: hidden;
    max-width: 100%;
  }
  @media (max-width: 991px) {
    .img-4 {
      margin-top: 24px;
    }
  }
  .column-5 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 62%;
    margin-left: 20px;
  }
  @media (max-width: 991px) {
    .column-5 {
      width: 100%;
    }
  }
  .div-8 {
    display: flex;
    margin-top: 5px;
    flex-direction: column;
  }
  @media (max-width: 991px) {
    .div-8 {
      max-width: 100%;
      margin-top: 40px;
    }
  }
  .div-9 {
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
  @media (max-width: 991px) {
    .div-9 {
      max-width: 100%;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  .div-10 {
    color: #373737;
    text-align: center;
    flex-grow: 1;
    flex-basis: auto;
    font: 600 65px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-10 {
      max-width: 100%;
      font-size: 40px;
    }
  }
  .div-11 {
    color: #373737;
    text-align: center;
    font: 400 65px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-11 {
      font-size: 40px;
    }
  }
  .div-12 {
    color: #373737;
    text-align: center;
    white-space: nowrap;
    font: 600 65px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-12 {
      font-size: 40px;
      white-space: initial;
    }
  }
  .div-13 {
    align-self: stretch;
    display: flex;
    margin-top: 12px;
    width: 100%;
    justify-content: space-between;
    gap: 20px;
  }
  @media (max-width: 991px) {
    .div-13 {
      max-width: 100%;
      flex-wrap: wrap;
    }
  }
  .div-14 {
    color: #454545;
    font: 500 45px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-14 {
      font-size: 40px;
    }
  }
  .div-15 {
    justify-content: center;
    align-items: flex-start;
    align-self: end;
    display: flex;
    margin-top: 26px;
    gap: 10px;
  }
  .div-16 {
    color: #454545;
    align-self: stretch;
    font: 500 30px Poppins, sans-serif;
  }
  .img-5 {
    aspect-ratio: 1.17;
    object-fit: contain;
    object-position: center;
    width: 35px;
    overflow: hidden;
    align-self: center;
    max-width: 100%;
    margin: auto 0;
  }
  .img-6 {
    aspect-ratio: 1.2;
    object-fit: contain;
    object-position: center;
    width: 36px;
    fill: #f5d426;
    overflow: hidden;
    align-self: center;
    max-width: 100%;
    margin: auto 0;
  }
  .img-7 {
    aspect-ratio: 1.17;
    object-fit: contain;
    object-position: center;
    width: 35px;
    fill: #f5d426;
    overflow: hidden;
    align-self: center;
    max-width: 100%;
    margin: auto 0;
  }
  .img-8 {
    aspect-ratio: 1.2;
    object-fit: contain;
    object-position: center;
    width: 36px;
    fill: #f5d426;
    overflow: hidden;
    align-self: center;
    max-width: 100%;
    margin: auto 0;
  }
  .img-9 {
    aspect-ratio: 1.2;
    object-fit: contain;
    object-position: center;
    width: 36px;
    fill: #f5d426;
    overflow: hidden;
    align-self: center;
    max-width: 100%;
    margin: auto 0;
  }
  .div-17 {
    align-items: center;
    align-self: start;
    display: flex;
    margin-top: 81px;
    width: 418px;
    max-width: 100%;
    gap: 16px;
  }
  @media (max-width: 991px) {
    .div-17 {
      margin-top: 40px;
    }
  }
  .div-18 {
    color: #454545;
    margin: auto 0;
    font: 500 30px Poppins, sans-serif;
  }
  .div-19 {
    align-self: stretch;
    display: flex;
    gap: 0px;
  }
  @media (max-width: 991px) {
    .div-19 {
      justify-content: center;
    }
  }
  .div-20 {
    justify-content: center;
    display: flex;
    aspect-ratio: 1;
    flex-direction: column;
  }
  .div-21 {
    disply: flex;
    flex-direction: column;
    color: #454545;
    text-align: center;
    position: relative;
    white-space: nowrap;
    fill: #fff;
    stroke-width: 1px;
    stroke: #a6a0a0;
    overflow: hidden;
    aspect-ratio: 1;
    width: 65px;
    align-items: center;
    padding: 10px 20px;
    font: 500 30px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-21 {
      white-space: initial;
    }
  }
  .img-10 {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  .div-22 {
    position: relative;
  }
  .div-23 {
    display: flex;
    flex-grow: 1;
    flex-basis: 0%;
    flex-direction: column;
  }
  .div-24 {
    disply: flex;
    flex-direction: column;
    color: #454545;
    position: relative;
    white-space: nowrap;
    fill: #fff;
    stroke-width: 1px;
    stroke: #a6a0a0;
    overflow: hidden;
    aspect-ratio: 2.169230769230769;
    width: 141px;
    align-items: center;
    padding: 10px 20px;
    font: 500 30px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-24 {
      white-space: initial;
    }
  }
  .img-11 {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  .div-25 {
    position: relative;
  }
  .div-26 {
    justify-content: center;
    display: flex;
    aspect-ratio: 1;
    flex-direction: column;
  }
  .img-12 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 65px;
    fill: #fff;
    stroke-width: 1px;
    stroke: #a6a0a0;
    overflow: hidden;
  }
  .div-27 {
    align-self: stretch;
    margin-top: 80px;
    padding-right: 50px;
  }
  @media (max-width: 991px) {
    .div-27 {
      max-width: 100%;
      padding-right: 20px;
      margin-top: 40px;
    }
  }
  .div-28 {
    gap: 20px;
    display: flex;
  }
  @media (max-width: 991px) {
    .div-28 {
      flex-direction: column;
      align-items: stretch;
      gap: 0px;
    }
  }
  .column-6 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 50%;
    margin-left: 0px;
  }
  @media (max-width: 991px) {
    .column-6 {
      width: 100%;
    }
  }
  .div-29 {
    border-radius: 3px;
    border: 1px solid #328b56;
    background-color: #fff;
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    gap: 20px;
    width: 100%;
    margin: 0 auto;
    padding: 30px 63px;
  }
  @media (max-width: 991px) {
    .div-29 {
      margin-top: 27px;
      padding: 0 20px;
    }
  }
  .img-13 {
    aspect-ratio: 1.02;
    object-fit: contain;
    object-position: center;
    width: 49px;
    fill: #328b56;
    overflow: hidden;
    max-width: 100%;
  }
  .div-30 {
    color: #328b56;
    align-self: start;
    white-space: nowrap;
    font: 500 30px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-30 {
      white-space: initial;
    }
  }
  .column-7 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 50%;
    margin-left: 20px;
  }
  @media (max-width: 991px) {
    .column-7 {
      width: 100%;
    }
  }
  .div-31 {
    color: #fff;
    white-space: nowrap;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    background-color: #328b56;
    flex-grow: 1;
    width: 100%;
    margin: 0 auto;
    padding: 30px 20px;
    font: 500 30px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-31 {
      white-space: initial;
      margin-top: 27px;
    }
  }
  .div-32 {
    color: #224f34;
    align-self: center;
    margin-top: 78px;
    white-space: nowrap;
    font: 500 50px Roboto Slab, sans-serif;
  }
  @media (max-width: 991px) {
    .div-32 {
      font-size: 40px;
      margin-top: 40px;
      white-space: initial;
    }
  }
  .div-33 {
    justify-content: center;
    margin-top: 31px;
  }
  @media (max-width: 991px) {
    .div-33 {
      max-width: 100%;
    }
  }
  .div-34 {
    gap: 20px;
    display: flex;
  }
  @media (max-width: 991px) {
    .div-34 {
      flex-direction: column;
      align-items: stretch;
      gap: 0px;
    }
  }
  .column-8 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 33%;
    margin-left: 0px;
  }
  @media (max-width: 991px) {
    .column-8 {
      width: 100%;
    }
  }
  .div-35 {
    color: #454545;
    max-width: 454px;
    align-items: center;
    background-color: rgba(223, 251, 234, 0.5);
    flex-grow: 1;
    width: 100%;
    margin: 0 auto;
    padding: 81px 20px;
    font: 500 25px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-35 {
      max-width: 100%;
      margin-top: 13px;
    }
  }
  .column-9 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 33%;
    margin-left: 20px;
  }
  @media (max-width: 991px) {
    .column-9 {
      width: 100%;
    }
  }
  .div-36 {
    color: #454545;
    max-width: 433px;
    align-items: center;
    background-color: rgba(223, 251, 234, 0.5);
    flex-grow: 1;
    width: 100%;
    margin: 0 auto;
    padding: 116px 20px 128px;
    font: 500 25px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-36 {
      max-width: 100%;
      margin-top: 13px;
      padding: 100px 0 110px;
    }
  }
  .column-10 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 33%;
    margin-left: 20px;
  }
  @media (max-width: 991px) {
    .column-10 {
      width: 100%;
    }
  }
  .div-37 {
    color: #454545;
    max-width: 409px;
    align-items: center;
    background-color: rgba(223, 251, 234, 0.5);
    flex-grow: 1;
    width: 100%;
    margin: 0 auto;
    padding: 135px 20px 143px;
    font: 500 25px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-37 {
      max-width: 100%;
      margin-top: 13px;
      padding: 100px 0 110px;
    }
  }
  .div-38 {
    background-color: #fff;
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 17px 80px 74px;
  }
  @media (max-width: 991px) {
    .div-38 {
      max-width: 100%;
      padding: 0 20px;
    }
  }
  .div-39 {
    color: #224f34;
    align-self: center;
    white-space: nowrap;
    font: 700 64px Roboto Slab, sans-serif;
  }
  @media (max-width: 991px) {
    .div-39 {
      max-width: 100%;
      font-size: 40px;
      white-space: initial;
    }
  }
  .div-40 {
    color: #224f34;
    align-self: center;
    margin-top: 79px;
    white-space: nowrap;
    font: 500 50px Roboto Slab, sans-serif;
  }
  @media (max-width: 991px) {
    .div-40 {
      font-size: 40px;
      margin-top: 40px;
      white-space: initial;
    }
  }
  .div-41 {
    justify-content: center;
    align-self: center;
    margin-top: 79px;
    width: 100%;
    max-width: 1372px;
  }
  @media (max-width: 991px) {
    .div-41 {
      max-width: 100%;
      margin-top: 40px;
    }
  }
  .div-42 {
    gap: 20px;
    display: flex;
  }
  @media (max-width: 991px) {
    .div-42 {
      flex-direction: column;
      align-items: stretch;
      gap: 0px;
    }
  }
  .column-11 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 33%;
    margin-left: 0px;
  }
  @media (max-width: 991px) {
    .column-11 {
      width: 100%;
    }
  }
  .div-43 {
    border-radius: 3px;
    box-shadow: 0px 7px 30px 0px rgba(0, 0, 0, 0.05);
    background-color: #fff;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    padding: 7px 19px 25px;
  }
  @media (max-width: 991px) {
    .div-43 {
      max-width: 100%;
      margin-top: 40px;
    }
  }
  .div-44 {
    color: #224f34;
    align-self: start;
    white-space: nowrap;
    font: 400 60px Arial Rounded MT Bold, -apple-system, Roboto, Helvetica,
      sans-serif;
  }
  @media (max-width: 991px) {
    .div-44 {
      font-size: 40px;
      white-space: initial;
    }
  }
  .div-45 {
    color: #224f34;
    align-self: start;
    white-space: nowrap;
    font: 600 22px Roboto Serif, sans-serif;
  }
  @media (max-width: 991px) {
    .div-45 {
      white-space: initial;
    }
  }
  .div-46 {
    color: #6f6f6f;
    margin-top: 26px;
    font: 500 16px Poppins, sans-serif;
  }
  .column-12 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 33%;
    margin-left: 20px;
  }
  @media (max-width: 991px) {
    .column-12 {
      width: 100%;
    }
  }
  .div-47 {
    border-radius: 3px;
    box-shadow: 0px 7px 30px 0px rgba(0, 0, 0, 0.05);
    background-color: var(--jrs, #c2efd4);
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    padding: 7px 16px 27px;
  }
  @media (max-width: 991px) {
    .div-47 {
      max-width: 100%;
      margin-top: 39px;
    }
  }
  .div-48 {
    color: #224f34;
    align-self: start;
    white-space: nowrap;
    font: 400 60px Arial Rounded MT Bold, -apple-system, Roboto, Helvetica,
      sans-serif;
  }
  @media (max-width: 991px) {
    .div-48 {
      font-size: 40px;
      white-space: initial;
    }
  }
  .div-49 {
    color: #224f34;
    align-self: start;
    white-space: nowrap;
    font: 600 22px Roboto Serif, sans-serif;
  }
  @media (max-width: 991px) {
    .div-49 {
      white-space: initial;
    }
  }
  .div-50 {
    color: #224f34;
    margin-top: 26px;
    font: 500 16px Poppins, sans-serif;
  }
  .column-13 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 33%;
    margin-left: 20px;
  }
  @media (max-width: 991px) {
    .column-13 {
      width: 100%;
    }
  }
  .div-51 {
    border-radius: 3px;
    box-shadow: 0px 7px 30px 0px rgba(0, 0, 0, 0.05);
    background-color: #fff;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    padding: 7px 19px 50px;
  }
  @media (max-width: 991px) {
    .div-51 {
      max-width: 100%;
      margin-top: 40px;
    }
  }
  .div-52 {
    color: #224f34;
    align-self: start;
    white-space: nowrap;
    font: 400 60px Arial Rounded MT Bold, -apple-system, Roboto, Helvetica,
      sans-serif;
  }
  @media (max-width: 991px) {
    .div-52 {
      font-size: 40px;
      white-space: initial;
    }
  }
  .div-53 {
    color: #224f34;
    align-self: start;
    white-space: nowrap;
    font: 600 22px Roboto Serif, sans-serif;
  }
  @media (max-width: 991px) {
    .div-53 {
      white-space: initial;
    }
  }
  .div-54 {
    color: #6f6f6f;
    margin-top: 26px;
    font: 500 16px Poppins, sans-serif;
  }
  .div-55 {
    color: var(--white, #fff);
    text-transform: capitalize;
    white-space: nowrap;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    background-color: #224f34;
    align-self: start;
    width: 243px;
    max-width: 100%;
    margin: 74px 0 0 10px;
    padding: 20px;
    font: 600 16px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-55 {
      white-space: initial;
      margin-top: 40px;
    }
  }
  </style>