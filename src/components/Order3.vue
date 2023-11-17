<script setup>
import NavigationBar from './NavigationBar.vue'
import FooterBar from './Footer.vue'

import { ref } from 'vue';

const counter = ref(1);
const initialPrice = ref(100);
const price = 100;

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
  initialPrice.value = 100;
};

</script>


<template>
   
    <div class="div">
        <NavigationBar/>
     
        <div class="div-3">
          <div class="div-4">
            <div class="div-5">
              <div class="column">
                <div class="div-6">
                    <img
      loading="lazy"
      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9a28cf53-b3c7-4755-aabe-8353ebc4ce09?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a28cf53-b3c7-4755-aabe-8353ebc4ce09?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a28cf53-b3c7-4755-aabe-8353ebc4ce09?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a28cf53-b3c7-4755-aabe-8353ebc4ce09?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a28cf53-b3c7-4755-aabe-8353ebc4ce09?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a28cf53-b3c7-4755-aabe-8353ebc4ce09?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a28cf53-b3c7-4755-aabe-8353ebc4ce09?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a28cf53-b3c7-4755-aabe-8353ebc4ce09?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
      class="img"
    />
                  <div class="div-7">
                    <div class="div-8">
                        <div class="column">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/38df0950-13b5-4151-88cc-cb84fb3f3bf7?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/38df0950-13b5-4151-88cc-cb84fb3f3bf7?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/38df0950-13b5-4151-88cc-cb84fb3f3bf7?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/38df0950-13b5-4151-88cc-cb84fb3f3bf7?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/38df0950-13b5-4151-88cc-cb84fb3f3bf7?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/38df0950-13b5-4151-88cc-cb84fb3f3bf7?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/38df0950-13b5-4151-88cc-cb84fb3f3bf7?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/38df0950-13b5-4151-88cc-cb84fb3f3bf7?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
            class="img-2"
          />
        </div>
        <div class="column-2">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d7bdd4fe-8b12-41aa-9fa6-8f988bad0d11?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7bdd4fe-8b12-41aa-9fa6-8f988bad0d11?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7bdd4fe-8b12-41aa-9fa6-8f988bad0d11?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7bdd4fe-8b12-41aa-9fa6-8f988bad0d11?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7bdd4fe-8b12-41aa-9fa6-8f988bad0d11?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7bdd4fe-8b12-41aa-9fa6-8f988bad0d11?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7bdd4fe-8b12-41aa-9fa6-8f988bad0d11?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d7bdd4fe-8b12-41aa-9fa6-8f988bad0d11?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
            class="img-3"
          />
        </div>
        <div class="column-3">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/199c759b-92ef-4ea0-92a4-a759813527bd?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/199c759b-92ef-4ea0-92a4-a759813527bd?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/199c759b-92ef-4ea0-92a4-a759813527bd?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/199c759b-92ef-4ea0-92a4-a759813527bd?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/199c759b-92ef-4ea0-92a4-a759813527bd?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/199c759b-92ef-4ea0-92a4-a759813527bd?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/199c759b-92ef-4ea0-92a4-a759813527bd?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/199c759b-92ef-4ea0-92a4-a759813527bd?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
            class="img-4"
          />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="column-5">
                <div class="div-9">
                  <div class="div-10">
                    <div class="div-11">
                      <div class="div-12">Gluta Oatmeal with Shea<br>Butter &  Avocado Oil </div>
                      <div class="div-13">
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
                      <div class="div-14">135g</div>
                    </div>
                    <div class="div-15">
                      <div class="div-16">₱ {{ initialPrice }}</div>
                      <div class="div-17">
                        <div class="div-18">5.0</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/364a08da-7601-4a00-83f1-8cf44330f256?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                          class="img-5"
                        /><img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce823299-7c0f-4277-b21f-4759113def1a?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                          class="img-6"
                        /><img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/32afe62d-ece1-4ba9-90a5-4523e824b2be?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                          class="img-7"
                        /><img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8874dcff-06af-4665-8c41-706fad6e13f0?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                          class="img-8"
                        /><img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cd6a5c9b-1070-49ad-9d5f-fbc15d862d93?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                          class="img-9"
                        />
                      </div>
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
              
                  
                  <div class="div-31">
                    <div class="div-32">
                      
                      <div class="column-6">
                        <a href="/cart" type="button" class="div-33">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4932dfa6-4cd9-4213-9f5e-355636d2c18a?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                            class="img-13"
                          />
                          <div class="div-34">Add To Cart</div>
                        </a>
                      </div>
                      <div class="column-7">
                        <div class="div-35">
                          <a href="/checkout" type="button" class="div-36">Buy Now</a>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     
      <div class="div-37">
        <div class="div-38">Direction to Use</div>
        <div class="div-39">
          <div class="div-40">
            <div class="column-8">
              <div class="div-41">
                <span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 700;
                  "
                  >FACE WASHING<br /></span
                ><span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 500;
                  "
                  >☑ Wet the soap and run repeatedly  unto hand to gather a small
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
              <div class="div-42">
                <span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 700;
                  "
                  >BODY WASHING<br /></span
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
              <div class="div-43">
                <span
                  style="
                    font-family: Poppins, -apple-system, Roboto, Helvetica,
                      sans-serif;
                    font-weight: 700;
                  "
                  >GIVE YOUR SKIN A BREAK!<br /></span
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
      
        <div class="div-45">
          <div class="div-46">YOU GLOW GIRL!!</div>
          <div class="div-47">Feedback Corner</div>
        </div>
        <div class="div-48">
          <div class="div-49">
            <div class="column-11">
              <div class="div-50">
                <div class="div-51">
                  <div class="div-52">“</div>
                  <div class="div-53">Andie Aganie</div>
                </div>
                <div class="div-54">
                    I've never felt so connected to a soap before. It's like a conversation with my skin, understanding its needs and responding with the goodness of gluta, oatmeal, shea butter, and avocado oil.
                </div>
              </div>
            </div>
            <div class="column-12">
              <div class="div-55">
                <div class="div-56">
                  <div class="div-57">“</div>
                  <div class="div-58">Fivine Makani</div>
                </div>
                <div class="div-59">
                    This soap is like a gourmet treat for my skin. The combination of gluta, oatmeal, shea butter, and avocado oil feels like a feast, leaving my skin indulged and satisfied.
                </div>
              </div>
            </div>
            <div class="column-13">
              <div class="div-60">
                <div class="div-61">
                  <div class="div-62">“</div>
                  <div class="div-63">Erica Cayapos</div>
                </div>
                <div class="div-64">
                    After using this soap, my skin feels like it just had a spa day. The rich, creamy lather and the nourishing blend of shea butter and avocado oil are like a pampering session in every wash.
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="/products" type="button" class="back">BACK</a>
       
     
      <FooterBar/>
    </div>
  </template>
  
  
  
  <style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Arial+Rounded+MT+Bold:wght@400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Serif:wght@600&display=swap');
body {
  	margin: 0; 
    line-height: normal;
}
.div {
  background-color: #fff;
  display: flex;
  flex-direction: column;
}
.back {
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
    margin-bottom: 40px;
  }
  @media (max-width: 991px) {
    .back {
      white-space: initial;
      margin-top: 40px;
   
    }
  }

  .back:hover{
    background-color: #c2efd4;
    color: var(--white, #224f34);
  }













  .div-3 {
    background: linear-gradient(
      180deg,
      #c2efd4 0%,
      rgba(255, 255, 255, 0) 87.34%
    );
    align-self: stretch;
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 39px 80px 205px;
  }
  @media (max-width: 991px) {
    .div-3 {
      max-width: 100%;
      padding: 0 20px 100px;
    }
  }
  .div-4 {
    align-self: center;
    margin-bottom: -41px;
    width: 100%;
    max-width: 1425px;
  }
  @media (max-width: 991px) {
    .div-4 {
      max-width: 100%;
      margin-bottom: 10px;
    }
  }
  .div-5 {
    gap: 20px;
    display: flex;
  }
  @media (max-width: 991px) {
    .div-5 {
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
  .div-6 {
    align-items: flex-start;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
  }
  @media (max-width: 991px) {
    .div-6 {
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
    align-self: stretch;
  }
  @media (max-width: 991px) {
    .img {
      max-width: 100%;
    }
  }
  .div-7 {
    align-self: stretch;
    margin-top: 18px;
  }
  @media (max-width: 991px) {
    .div-7 {
      max-width: 100%;
    }
  }
  .div-8 {
    gap: 20px;
    display: flex;
  }
  @media (max-width: 991px) {
    .div-8 {
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
    width: 100%;
    overflow: hidden;
    flex-grow: 1;
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
    width: 100%;
    overflow: hidden;
    flex-grow: 1;
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
    width: 100%;
    overflow: hidden;
    flex-grow: 1;
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
  .div-9 {
    display: flex;
    margin-top: 41px;
    flex-direction: column;
  }
  @media (max-width: 991px) {
    .div-9 {
      max-width: 100%;
      margin-top: 40px;
    }
  }
  .div-10 {
    align-items: flex-end;
    align-content: flex-end;
    flex-wrap: wrap;
    align-self: start;
    display: flex;
    width: 828px;
    max-width: 100%;
    flex-direction: column;
  }
  .div-11 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 20px;
  }
  @media (max-width: 991px) {
    .div-11 {
      max-width: 100%;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  .div-12 {
    color: #373737;
    text-align: center;
    align-self: stretch;
    flex-grow: 1;
    flex-basis: auto;
    font: 600 65px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-12 {
      max-width: 100%;
      font-size: 40px;
    }
  }
  .div-13 {
    color: #373737;
    text-align: center;
    align-self: stretch;
    font: 400 65px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-13 {
      font-size: 40px;
    }
  }
  .div-14 {
    color: #373737;
    text-align: center;
    align-self: stretch;
    white-space: nowrap;
    font: 600 65px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-14 {
      font-size: 40px;
      white-space: initial;
    }
  }
  .div-15 {
    align-self: stretch;
    display: flex;
    margin-top: 12px;
    width: 100%;
    align-items: flex-start;
    justify-content: space-between;
    gap: 20px;
  }
  @media (max-width: 991px) {
    .div-15 {
      max-width: 100%;
      flex-wrap: wrap;
    }
  }
  .div-16 {
    color: #454545;
    font: 500 45px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-16 {
      font-size: 40px;
    }
  }
  .div-17 {
    justify-content: center;
    align-items: flex-start;
    align-self: end;
    display: flex;
    margin-top: 26px;
    gap: 10px;
  }
  .div-18 {
    color: #454545;
    align-self: stretch;
    font: 500 30px Poppins, sans-serif;
  }
  .img-5 {
    aspect-ratio: 1.2;
    object-fit: contain;
    object-position: center;
    width: 36px;
    overflow: hidden;
    align-self: center;
    max-width: 100%;
    margin: auto 0;
  }
  .img-6 {
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
  .img-7 {
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
  .div-19 {
    align-items: flex-start;
    align-self: start;
    display: flex;
    margin-top: 20px;
    width: 418px;
    max-width: 100%;
    margin-bottom: -40px;
  }
  @media (max-width: 991px) {
    .div-19 {
      margin-top: 40px;
    }
  }
  .div-20 {
    color: #454545;
    margin: auto 0;
    font: 500 30px Poppins, sans-serif;
 }



/*quantity */
   .div-21 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex-grow: 1;
    flex-basis: auto;
    gap: 0px;
  }
  @media (max-width: 991px) {
    .div-21 {
      justify-content: center;
    }
  }
  .div-22 {
    justify-content: center;
    align-items: center;
    align-self: stretch;
    display: flex;
    flex-direction: column;
  }
  .div-23 {
    display: flex;
    flex-direction: column;
    color: #454545;
    text-align: center;
    align-self: stretch;
    position: relative;
    white-space: nowrap;
    fill: #fff;
    stroke-width: 1px;
    stroke: #a6a0a0;
    overflow: hidden;
    width: 100px;
    flex-grow: 1;
    padding: 10px 23px 10px 24px;
    font: 500 30px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-23 {
      white-space: initial;
      padding: 0 20px;
    }
  }
  .img-10 {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  .div-24 {
    position: relative;
  }
  .div-25 {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex-direction: column;
  }
  .div-26 {
    display: flex;
    flex-direction: column;
    color: #454545;
    align-self: stretch;
    position: relative;
    white-space: nowrap;
    fill: #fff;
    stroke-width: 1px;
    stroke: #a6a0a0;
    overflow: hidden;
    aspect-ratio: 2.169230769230769;
    flex-grow: 1;
    padding: 10px 70px 10px 60px;
    font: 500 30px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-26 {
      white-space: initial;
      padding: 0 20px;
    }
  }
  .img-11 {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  .div-27 {
    position: relative;
  }
  .div-28 {
    justify-content: center;
    align-items: center;
    align-self: stretch;
    display: flex;
    flex-direction: column;
  }
  .div-29 {
    display: flex;
    flex-direction: column;
    color: #454545;
    text-align: center;
    align-self: stretch;
    position: relative;
    white-space: nowrap;
    fill: #fff;
    stroke-width: 1px;
    stroke: #a6a0a0;
    overflow: hidden;
    width: 100px;
    flex-grow: 1;
    padding: 10px 19px 10px 24px;
    font: 500 30px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-29 {
      white-space: initial;
      padding-left: 20px;
    }
  }
  .img-12 {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  .div-30 {
    position: relative;
  }
  




  .div-31 {
    align-self: start;
    margin-top: 80px;
    width: 828px;
    max-width: 100%;
    padding-right: 50px;
  }
  @media (max-width: 991px) {
    .div-31 {
      padding-right: 20px;
      margin-top: 40px;
    }
  }
  .div-32 {
    gap: 20px;
    display: flex;
  }
  @media (max-width: 991px) {
    .div-32 {
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
  .div-33 {
    align-items: flex-start;
    border-radius: 3px;
    border: 1px solid #328b56;
    background-color: #fff;
    display: flex;
    width: auto;
    max-width: 375px;
    flex-grow: 1;
    gap: 20px;
    margin: 0 auto;
    padding: 30px 63px;
  }
  @media (max-width: 991px) {
    .div-33 {
      margin-top: 27px;
      padding: 0 20px;
    }
  }
  .div-33:hover{
    background-color: #f3f3f3;
  }
  .img-13 {
    aspect-ratio: 1.02;
    object-fit: contain;
    object-position: center;
    width: 40px;
    fill: #0a8e0a;
    
    align-self: start;
    max-width: 100%;
  }
  .div-34 {
    color: #328b56;
    align-self: start;
    white-space: nowrap;
    font: 500 30px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-34 {
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
  .div-35 {
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    background-color: #328b56;
    display: flex;
    width: 100%;
    max-width: 376px;
    flex-grow: 1;
    flex-direction: column;
    margin: 0 auto;
    padding: 30px 80px;
  }
  @media (max-width: 991px) {
    .div-35 {
      margin-top: 27px;
      padding: 0 20px;
    }
  }
  .div-36 {
    color: #fff;
    align-self: center;
    white-space: nowrap;
    font: 500 30px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-36 {
      white-space: initial;
    }
  }
  .div-35:hover{
    background-color: #236c40;
  }
  .div-37 {
    align-items: center;
    align-self: center;
    display: flex;
    width: 100%;
    max-width: 1608px;
    flex-direction: column;
    padding: 0 20px;
  }
  @media (max-width: 991px) {
    .div-37 {
      max-width: 100%;
    }
  }
  .div-38 {
    color: #224f34;
    align-self: center;
    white-space: nowrap;
    font: 500 50px Roboto Slab, sans-serif;
  }
  @media (max-width: 991px) {
    .div-38 {
      max-width: 100%;
      font-size: 40px;
      white-space: initial;
    }
  }
  .div-39 {
    justify-content: center;
    align-self: stretch;
    margin: 31px -20px 0 0;
  }
  @media (max-width: 991px) {
    .div-39 {
      max-width: 100%;
    }
  }
  .div-40 {
    gap: 20px;
    display: flex;
  }
  @media (max-width: 991px) {
    .div-40 {
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
  .div-41 {
    color: #454545;
    align-self: stretch;
    align-items: center;
    background-color: rgba(223, 251, 234, 0.5);
    flex-grow: 1;
    width: 100%;
    margin: 0 auto;
    padding: 81px 37px;
    font: 500 25px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-41 {
      max-width: 100%;
      margin-top: 13px;
      padding: 0 20px;
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
  .div-42 {
    color: #454545;
    align-self: stretch;
    align-items: center;
    background-color: rgba(223, 251, 234, 0.5);
    flex-grow: 1;
    width: 100%;
    margin: 0 auto;
    padding: 116px 47px 128px;
    font: 500 25px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-42 {
      max-width: 100%;
      margin-top: 13px;
      padding: 100px 20px 110px;
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
  .div-43 {
    color: #454545;
    align-self: stretch;
    align-items: center;
    background-color: rgba(223, 251, 234, 0.5);
    flex-grow: 1;
    width: 100%;
    margin: 0 auto;
    padding: 135px 59px 143px;
    font: 500 25px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-43 {
      max-width: 100%;
      margin-top: 13px;
      padding: 100px 20px 110px;
    }
  }
  .div-44 {
    align-items: center;
    align-self: center;
    display: flex;
    width: 100%;
    max-width: 1370px;
    flex-direction: column;
    margin: 55px 0 522px;
  }
  @media (max-width: 991px) {
    .div-44 {
      max-width: 100%;
      margin: 40px 0;
    }
  }
  .div-45 {
    justify-content: center;
    align-items: center;
    align-self: center;
    display: flex;
    width: 544px;
    max-width: 100%;
    flex-direction: column;
    padding: 0 20px;
  }
  .div-46 {
    color: #224f34;
    align-self: stretch;
    margin-right: -20px;
    white-space: nowrap;
    font: 700 64px Roboto Slab, sans-serif;
  }
  @media (max-width: 991px) {
    .div-46 {
      max-width: 100%;
      font-size: 40px;
      white-space: initial;
    }
  }
  .div-47 {
    color: #224f34;
    align-self: center;
    margin-top: 67px;
    white-space: nowrap;
    font: 500 50px Roboto Slab, sans-serif;
  }
  @media (max-width: 991px) {
    .div-47 {
      font-size: 40px;
      margin-top: 40px;
      white-space: initial;
    }
  }
  .div-48 {
    justify-content: center;
    align-self: stretch;
    margin-top: 91px;
    padding: 0 20px;
    margin-bottom: 50px;
  }
  @media (max-width: 991px) {
    .div-48 {
      max-width: 100%;
      margin-top: 40px;
    }
  }
  .div-49 {
    gap: 20px;
    display: flex;
  }
  @media (max-width: 991px) {
    .div-49 {
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
  .div-50 {
    align-items: flex-start;
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
    .div-50 {
      max-width: 100%;
      margin-top: 39px;
    }
  }
  .div-51 {
    align-items: flex-start;
    align-self: start;
    display: flex;
    width: 145px;
    max-width: 100%;
    flex-direction: column;
  }
  .div-52 {
    color: #224f34;
    align-self: stretch;
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
    align-self: stretch;
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
    align-self: start;
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
  .div-55 {
    align-items: flex-start;
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
    .div-55 {
      max-width: 100%;
      margin-top: 38px;
    }
  }
  .div-56 {
    align-items: flex-start;
    align-self: start;
    display: flex;
    width: 188px;
    max-width: 100%;
    flex-direction: column;
  }
  .div-57 {
    color: #224f34;
    align-self: stretch;
    white-space: nowrap;
    font: 400 60px Arial Rounded MT Bold, -apple-system, Roboto, Helvetica,
      sans-serif;
  }
  @media (max-width: 991px) {
    .div-57 {
      font-size: 40px;
      white-space: initial;
    }
  }
  .div-58 {
    color: #224f34;
    align-self: stretch;
    white-space: nowrap;
    font: 600 22px Roboto Serif, sans-serif;
  }
  @media (max-width: 991px) {
    .div-58 {
      white-space: initial;
    }
  }
  .div-59 {
    color: #224f34;
    align-self: start;
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
  .div-60 {
    align-items: flex-start;
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
    .div-60 {
      max-width: 100%;
      margin-top: 39px;
    }
  }
  .div-61 {
    align-items: flex-start;
    align-self: start;
    display: flex;
    width: 168px;
    max-width: 100%;
    flex-direction: column;
  }
  .div-62 {
    color: #224f34;
    align-self: stretch;
    white-space: nowrap;
    font: 400 60px Arial Rounded MT Bold, -apple-system, Roboto, Helvetica,
      sans-serif;
  }
  @media (max-width: 991px) {
    .div-62 {
      font-size: 40px;
      white-space: initial;
    }
  }
  .div-63 {
    color: #224f34;
    align-self: stretch;
    white-space: nowrap;
    font: 600 22px Roboto Serif, sans-serif;
  }
  @media (max-width: 991px) {
    .div-63 {
      white-space: initial;
    }
  }
  .div-64 {
    color: #6f6f6f;
    align-self: start;
    margin-top: 26px;
    font: 500 16px Poppins, sans-serif;
  }
 
  </style>