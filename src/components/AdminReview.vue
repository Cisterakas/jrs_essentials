<script setup>
import { ref } from 'vue';
const categories = ref([
    { id: 1, docNum: 4, docType: "Bleachpeel Soap", dateReq: "67 Sales", claim: "₱ 8,012.00", sched: "52%" },
    { id: 2, docNum: 4, docType: "15 in 1 Soap", dateReq: "50 Sales", claim: "₱ 7,342.00", sched: "49%" },
    { id: 3, docNum: 4, docType: "Gluta Oatmeal with Shea Butter & Avocado Oil", dateReq: "47 Sales", claim: "₱ 7,012.00", sched: "30%" },
    { id: 4, docNum: 4, docType: "Glutamato with Grapeseed", dateReq: "38 Sales", claim: "₱ 5,612.00", sched: "30%" },
    { id: 5, docNum: 4, docType: "Gluta Oatmeal with Milk & Honey", dateReq: "30 Sales", claim: "₱ 5,112.00", sched: "27%" },
    

  ]);
</script>

<template>
  <div class="div">
    <div class="div-2">
      <div class="column">
        <div class="div-3">
          <div class="div-4">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/fec6530d-08fe-483c-9c94-894d35ef8f78?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fec6530d-08fe-483c-9c94-894d35ef8f78?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fec6530d-08fe-483c-9c94-894d35ef8f78?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fec6530d-08fe-483c-9c94-894d35ef8f78?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fec6530d-08fe-483c-9c94-894d35ef8f78?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fec6530d-08fe-483c-9c94-894d35ef8f78?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fec6530d-08fe-483c-9c94-894d35ef8f78?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fec6530d-08fe-483c-9c94-894d35ef8f78?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
              class="img"
            />
            <router-link to="/adminDashboard" class="div-5" type="button">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/96d0d856-6e24-4a21-a516-443d71fd5871?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                class="img-2"
              />
              <div class="div-6">Dashboard</div>
          </router-link>
          <router-link to="/adminProducts" class="div-7" type="button">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/22eacf5e-a6c8-420c-99ef-d02f6db66588?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                class="img-3"
              />
              <div class="div-8">Products</div>
            </router-link>
            <router-link to="/adminOrder" class="div-9" type="button">
            
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/eacb446d-6ae8-4f54-952c-f4f0d501d270?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                class="img-4"
              />
              <div class="div-10">Orders</div>
            
          </router-link>
          <router-link to="/adminDashboard" class="div-11" type="button">
            
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/46480ab6-5a37-4cc4-ab80-20440a1b13d4?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                class="img-5"
              />
              <div class="div-12">Reviews</div>
           
          </router-link>
          <router-link to="/adminDashboard" class="div-13" type="button">
           
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6cd9d89f-50bd-4009-a2b2-6de29ae10647?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                class="img-6"
              />
              <div class="div-14">Transactions</div>
           
          </router-link>
            <router-link to="/login" class="div-15" type="button">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc1277f6-8330-4cc9-b3df-dde59a9ff395?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                class="img-7"
              />
              <div class="div-16">Logout</div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="column-2">
        <div class="div-17">
          <div class="div-18">
            <div class="div-19">
              <div class="div-20">
           
                <div class="div-22">Reviews</div>
              </div>
              <div class="div-23">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7134b6a6-d5af-4b29-b9d8-64f0a159f6ba?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                  class="img-8"
                />
                <div class="div-24">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/acfae3c5-94da-4664-ac42-227ca269f0c1?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                    class="img-9"
                  />
                  <div class="div-25">admin</div>
                </div>
              </div>
            </div>
            <div class="div-26">
              <div class="div-27">
                <div class="div-28">
                  <div class="div-29">Data Refresh</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5a3e6d8c-b978-4471-a06e-d0220fed30af?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                    class="img-10"
                  />
                </div>
                <div class="div-30">
                  <div class="div-31">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b034335a-0d5d-4726-ab9a-fbebd23e80bb?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-11"
                    />
                    <div class="div-32">November 10, 2023</div>
                  </div>
                </div>
              </div>
           
          
              <div class="div-">
    <div class="div-2-">
      <div class="div-3-">
        <div class="column-">
          <div class="div-4-">
            <div class="div-5-">
              <div class="div-6-">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/30c8d08c36d85712a49dd4b23ce0cd2c89fa5e383380d50e4078ad09aa75778b?"
                  class="img-"
                />
              </div>
              <div class="div-7-">
                <div class="div-8-">+2.40%</div>
                <img
                  loading="lazy"
                  srcSet="..."
                  class="img-2-"
                />
              </div>
            </div>
            <div class="div-9-">4.5</div>
            <div class="div-10-">Review score</div>
          </div>
        </div>
        <div class="column-2-">
          <div class="div-11-">
            <div class="div-12-">
              <div class="div-13-">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7aa5c3d2ac10fa46672a165de762a7c46db0369d01b0d03c335a6b5dd608e836?"
                  class="img-3-"
                />
              </div>
              <div class="div-14-">
                <div class="div-15-">+8.40%</div>
                <img
                  loading="lazy"
                  srcSet="..."
                  class="img-4-"
                />
              </div>
            </div>
            <div class="div-16-">1,234</div>
            <div class="div-17-">Total Customers</div>
          </div>
        </div>
        <div class="column-3-">
          <div class="div-18-">
            <div class="div-19-">
              <div class="div-20-"><div class="div-21-">+</div></div>
              <div class="div-22-">
                <div class="div-23-">+1.40%</div>
                <img
                  loading="lazy"
                  srcSet="..."
                  class="img-5-"
                />
              </div>
            </div>
            <div class="div-24-">73</div>
            <div class="div-25-">Total New Customers</div>
          </div>
        </div>
      </div>
    </div>
    <div class="div-26-">
      <div class="div-27-">All</div>
      <div class="div-28-" type="button">5 stars</div>
      <div class="div-29-" type="button">4 stars</div>
      <div class="div-30-" type="button">3 stars</div>
      <div class="div-31-" type="button">2 stars</div>
      <div class="div-32-" type="button">1 star</div>
    </div>
    <div class="div-33-">
      <div class="div-34-">
        <div class="div-35-">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/501190cabfae108feb3579ccd3c5d8e4095f1986a15c9df58865c041a57ec0fb?"
            class="img-6-"
          />
          <div class="div-36-">
            <div class="div-37-">
              <div class="div-38-">Cathy K.</div>
              <div class="div-39-">Verified Reviewer</div>
            </div>
            <div class="div-40-">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a31de74956ae9571b4739975ded1388cddead1d887ec3aa1e5dcfb40a27ad06?"
                class="img-7-"
              /><img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a31de74956ae9571b4739975ded1388cddead1d887ec3aa1e5dcfb40a27ad06?"
                class="img-8-"
              /><img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a31de74956ae9571b4739975ded1388cddead1d887ec3aa1e5dcfb40a27ad06?"
                class="img-9-"
              /><img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a31de74956ae9571b4739975ded1388cddead1d887ec3aa1e5dcfb40a27ad06?"
                class="img-10-"
              /><img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4770f8ac63fc8435ce9edae8c5811fbbb9b2993c3fffef68fe6e84a88c92f6c0?"
                class="img-11-"
              />
            </div>
          </div>
        </div>
        <div class="div-41-">26/02/23</div>
      </div>
      <div class="div-42-">VERY MOISTURIZING</div>
      <div class="div-43-">
        I didn’t know how effective the gel cream would be since I was skeptical
        of the texture, but my sensitive skin loved it and I didn’t even break
        out when I first started using it. Love it!
      </div>
      <div class="div-44-"></div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7498285741881b88e5c9d06aad7c510e1be876c61ae72094073b569d7092d8d2?"
        class="img-12-"
      />
      <div class="div-45-">
        <div class="div-46-">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e870b5875a05d4411faf5a9b714713312c232d232900adddbad044f9a9862fbc?"
            class="img-13-"
          />
          <div class="div-47-">
            <div class="div-48-">Aileen R.</div>
            <div class="div-49-">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e6ccfce767d409bbce8b91bb0eee793e984f171d6172cf54f539f3ca8d75d1d?"
                class="img-14-"
              /><img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e6ccfce767d409bbce8b91bb0eee793e984f171d6172cf54f539f3ca8d75d1d?"
                class="img-15-"
              /><img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e6ccfce767d409bbce8b91bb0eee793e984f171d6172cf54f539f3ca8d75d1d?"
                class="img-16-"
              /><img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e6ccfce767d409bbce8b91bb0eee793e984f171d6172cf54f539f3ca8d75d1d?"
                class="img-17-"
              /><img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e6ccfce767d409bbce8b91bb0eee793e984f171d6172cf54f539f3ca8d75d1d?"
                class="img-18-"
              />
            </div>
          </div>
        </div>
        <div class="div-50-">12/02/23</div>
      </div>
      <div class="div-51-">REALLY LIGHT AND NOT STICKY.</div>
      <div class="div-52-">
        Really light and not sticky. My skin soaked it right up! I mix it with
        the green tea products and it helps balance my combo skin.
      </div>
      <div class="div-53-">
        <div class="div-54-"></div>
        <div class="div-55-"></div>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7498285741881b88e5c9d06aad7c510e1be876c61ae72094073b569d7092d8d2?"
        class="img-19-"
      />
      <div class="div-56-">
        <div class="div-57-">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e870b5875a05d4411faf5a9b714713312c232d232900adddbad044f9a9862fbc?"
            class="img-20-"
          />
          <div class="div-58-">
            <div class="div-59-">
              <div class="div-60-">Inna C.</div>
              <div class="div-61-">Verified Reviewer</div>
            </div>
            <div class="div-62-">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/383224a9c1464a55579c329aa482461432cba72f974d14e8c9b07f0a13620458?"
                class="img-21-"
              /><img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/383224a9c1464a55579c329aa482461432cba72f974d14e8c9b07f0a13620458?"
                class="img-22-"
              /><img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/383224a9c1464a55579c329aa482461432cba72f974d14e8c9b07f0a13620458?"
                class="img-23-"
              /><img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/383224a9c1464a55579c329aa482461432cba72f974d14e8c9b07f0a13620458?"
                class="img-24-"
              /><img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/383224a9c1464a55579c329aa482461432cba72f974d14e8c9b07f0a13620458?"
                class="img-25-"
              />
            </div>
          </div>
        </div>
        <div class="div-63-">02/02/23</div>
      </div>
      <div class="div-64-">Scent-sational Beauty Bliss!</div>
      <div class="div-65-">
        JRS has won me over with its captivating fragrance. The soap not only
        cleanses and nourishes the skin but also provides a sensorial experience
        like no other. The scent is long-lasting, and I find myself catching
        whiffs of it throughout the day.
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7498285741881b88e5c9d06aad7c510e1be876c61ae72094073b569d7092d8d2?"
        class="img-26-"
      />
      <div class="div-66-">
        <div class="div-67-">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e870b5875a05d4411faf5a9b714713312c232d232900adddbad044f9a9862fbc?"
            class="img-27-"
          />
          <div class="div-68-">
            <div class="div-69-">
              <div class="div-70-">Rhea B.</div>
              <div class="div-71-">Verified Reviewer</div>
            </div>
            <div class="div-72-">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/383224a9c1464a55579c329aa482461432cba72f974d14e8c9b07f0a13620458?"
                class="img-28-"
              /><img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/383224a9c1464a55579c329aa482461432cba72f974d14e8c9b07f0a13620458?"
                class="img-29-"
              /><img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/383224a9c1464a55579c329aa482461432cba72f974d14e8c9b07f0a13620458?"
                class="img-30-"
              /><img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/383224a9c1464a55579c329aa482461432cba72f974d14e8c9b07f0a13620458?"
                class="img-31-"
              /><img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/383224a9c1464a55579c329aa482461432cba72f974d14e8c9b07f0a13620458?"
                class="img-32-"
              />
            </div>
          </div>
        </div>
        <div class="div-73-">02/02/23</div>
      </div>
      <div class="div-74-">Radiant Glow in Every Bar!</div>
      <div class="div-75-">
        Having sensitive skin, I've always been cautious about the products I
        use. JRS has been a game-changer for me. The hypoallergenic formula is
        incredibly gentle and soothing, leaving my skin feeling clean without
        any irritation.
      </div>
    </div>
  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>

.div- {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.div-2- {
  border-radius: 20px;
  width: 1033px;
  max-width: 100%;
}
@media (max-width: 991px) {
  .div-2- {
    padding-right: 20px;
  }
}
.div-3- {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-3- {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column- {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column- {
    width: 100%;
  }
}
.div-4- {
  align-items: start;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  width: 100%;
  flex-grow: 1;
  flex-direction: column;
  margin: 0 auto;
  padding: 16px 80px 27px 16px;
}
@media (max-width: 991px) {
  .div-4- {
    margin-top: 24px;
    padding-right: 20px;
  }
}
.div-5- {
  justify-content: center;
  display: flex;
  gap: 12px;
}
.div-6- {
  align-items: center;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  aspect-ratio: 0.8181818181818182;
  flex-direction: column;
  justify-content: center;
  padding: 7px 8px 7px 0;
}
.img- {
  aspect-ratio: 0.93;
  object-fit: contain;
  object-position: center;
  width: 28px;
  fill: #fedf3f;
  overflow: hidden;
}
.div-7- {
  justify-content: center;
  align-self: center;
  display: flex;
  gap: 6px;
  margin: auto 0;
}
.div-8- {
  color: #50d1aa;
  flex-grow: 1;
  white-space: nowrap;
  font: 500 21px/140% Barlow, sans-serif;
}
@media (max-width: 991px) {
  .div-8- {
    white-space: initial;
  }
}
.img-2- {
  aspect-ratio: 0.5;
  object-fit: contain;
  object-position: center;
  width: 9px;
  align-items: flex-start;
  overflow: hidden;
  align-self: center;
  max-width: 100%;
  margin: auto 0;
}
.div-9- {
  color: #1e293b;
  margin-top: 8px;
  font: 600 37px/140% Barlow, sans-serif;
}
.div-10- {
  color: var(--Text-Light, #abbbc2);
  margin-top: 8px;
  white-space: nowrap;
  font: 500 23px/130% Barlow, sans-serif;
}
@media (max-width: 991px) {
  .div-10- {
    white-space: initial;
  }
}
.column-2- {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-2- {
    width: 100%;
  }
}
.div-11- {
  align-items: start;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  width: 100%;
  flex-grow: 1;
  flex-direction: column;
  margin: 0 auto;
  padding: 16px 80px 27px 16px;
}
@media (max-width: 991px) {
  .div-11- {
    margin-top: 24px;
    padding-right: 20px;
  }
}
.div-12- {
  justify-content: center;
  display: flex;
  gap: 12px;
}
.div-13- {
  align-items: center;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  aspect-ratio: 1.0227272727272727;
  padding-right: 16px;
  flex-direction: column;
  justify-content: center;
  width: 45px;
  height: 45px;
}
.img-3- {
  aspect-ratio: 0.97;
  object-fit: contain;
  object-position: center;
  width: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.div-14- {
  justify-content: center;
  align-self: center;
  display: flex;
  gap: 6px;
  margin: auto 0;
  padding: 0 2px;
}
.div-15- {
  color: var(--Accents-Green, #50d1aa);
  flex-grow: 1;
  white-space: nowrap;
  font: 500 21px/140% Barlow, sans-serif;
}
@media (max-width: 991px) {
  .div-15- {
    white-space: initial;
  }
}
.img-4- {
  aspect-ratio: 0.56;
  object-fit: contain;
  object-position: center;
  width: 10px;
  align-items: flex-start;
  overflow: hidden;
  align-self: center;
  max-width: 100%;
  margin: auto 0;
}
.div-16- {
  color: #1e293b;
  margin-top: 8px;
  font: 600 37px/140% Barlow, sans-serif;
}
.div-17- {
  color: var(--Text-Light, #abbbc2);
  margin-top: 8px;
  white-space: nowrap;
  font: 500 23px/130% Barlow, sans-serif;
}
@media (max-width: 991px) {
  .div-17- {
    white-space: initial;
  }
}
.column-3- {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-3- {
    width: 100%;
  }
}
.div-18- {
  align-items: start;
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  width: 100%;
  flex-grow: 1;
  flex-direction: column;
  margin: 0 auto;
  padding: 16px 80px 33px 16px;
}
@media (max-width: 991px) {
  .div-18- {
    margin-top: 24px;
    padding-right: 20px;
  }
}
.div-19- {
  justify-content: center;
  display: flex;
  gap: 12px;
}
.div-20- {
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  aspect-ratio: 1.394736842105263;
  padding-top: 9px;
  flex-direction: column;
}
.div-21- {
  justify-content: center;
  color: #55ac78;
  text-transform: capitalize;
  white-space: nowrap;
  stroke-width: 1.8px;
  border-radius: 50%;
  aspect-ratio: 1.8275862068965518;
  padding: 8px;
  font: 400 29px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-21- {
    white-space: initial;
  }
}
.div-22- {
  justify-content: center;
  align-self: center;
  display: flex;
  padding-right: 7px;
  gap: 6px;
  margin: auto 0;
}
.div-23- {
  color: var(--Accents-Green, #50d1aa);
  font: 500 21px/140% Barlow, sans-serif;
}
.img-5- {
  aspect-ratio: 0.44;
  object-fit: contain;
  object-position: center;
  width: 8px;
  align-items: flex-start;
  overflow: hidden;
  align-self: center;
  max-width: 100%;
  margin: auto 0;
}
.div-24- {
  color: #1e293b;
  margin-top: 8px;
  font: 600 37px/140% Barlow, sans-serif;
}
.div-25- {
  color: var(--Text-Light, #abbbc2);
  margin-top: 8px;
  white-space: nowrap;
  font: 500 23px/130% Barlow, sans-serif;
}
@media (max-width: 991px) {
  .div-25- {
    white-space: initial;
  }
}
.div-26- {
  border-radius: 20px;
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: 89px 23px 0;
}
@media (max-width: 991px) {
  .div-26- {
    max-width: 100%;
    flex-wrap: wrap;
    margin: 40px 10px 0 0;
  }
}
.div-27- {
  color: #fff;
  text-transform: capitalize;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: #328b56;
  flex-grow: 1;
  padding: 9px 60px;
  font: 500 20px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-27- {
    white-space: initial;
    padding: 0 20px;
  }
}
.div-28- {
  color: #383838;
  text-transform: capitalize;
  white-space: nowrap;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid #a6a0a0;
  background-color: #fff;
  flex-grow: 1;
  padding: 9px 45px;
  font: 500 20px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-28- {
    white-space: initial;
    padding: 0 20px;
  }
}
.div-28-:hover{
  color: #fff;
  background-color: #328b56;
}


.div-29-:hover{
  color: #fff;
  background-color: #328b56;
}


.div-30-:hover{
  color: #fff;
  background-color: #328b56;
}


.div-31-:hover{
  color: #fff;
  background-color: #328b56;
}


.div-32-:hover{
  color: #fff;
  background-color: #328b56;
}
.div-29- {
  color: var(--black, #383838);
  text-transform: capitalize;
  white-space: nowrap;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid #a6a0a0;
  background-color: #fff;
  flex-grow: 1;
  padding: 9px 45px;
  font: 500 20px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-29- {
    white-space: initial;
    padding: 0 20px;
  }
}
.div-30- {
  color: var(--black, #383838);
  text-transform: capitalize;
  white-space: nowrap;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid #a6a0a0;
  background-color: #fff;
  flex-grow: 1;
  padding: 9px 46px;
  font: 500 20px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-30- {
    white-space: initial;
    padding: 0 20px;
  }
}
.div-31- {
  color: var(--black, #383838);
  text-transform: capitalize;
  white-space: nowrap;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid #a6a0a0;
  background-color: #fff;
  flex-grow: 1;
  padding: 9px 46px;
  font: 500 20px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-31- {
    white-space: initial;
    padding: 0 20px;
  }
}
.div-32- {
  color: var(--black, #383838);
  text-transform: capitalize;
  white-space: nowrap;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid #a6a0a0;
  background-color: #fff;
  flex-grow: 1;
  padding: 9px 54px;
  font: 500 20px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-32- {
    white-space: initial;
    padding: 0 20px;
  }
}
.div-33- {
  align-items: center;
  align-self: stretch;
  display: flex;
  margin-top: 75px;
  width: 100%;
  flex-direction: column;
  padding: 0 66px 34px 50px;
}
@media (max-width: 991px) {
  .div-33- {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 20px;
  }
}
.div-34- {
  align-self: stretch;
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-34- {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-35- {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 15px;
}
.img-6- {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 40px;
  overflow: hidden;
  max-width: 100%;
}
.div-36- {
  align-self: stretch;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
}
.div-37- {
  display: flex;
  justify-content: space-between;
  gap: 9px;
}
.div-38- {
  color: var(--black, #383838);
  flex-grow: 1;
  white-space: nowrap;
  font: 500 14px/143% Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-38- {
    white-space: initial;
  }
}
.div-39- {
  color: var(--bfb-9-cf, #b0a6bd);
  flex-grow: 1;
  white-space: nowrap;
  font: 400 14px/143% Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-39- {
    white-space: initial;
  }
}
.div-40- {
  display: flex;
  margin-top: 9px;
  padding-right: 48px;
  gap: 6px;
}
@media (max-width: 991px) {
  .div-40- {
    padding-right: 20px;
  }
}
.img-7- {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  overflow: hidden;
  max-width: 100%;
}
.img-8- {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  overflow: hidden;
  max-width: 100%;
}
.img-9- {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  overflow: hidden;
  max-width: 100%;
}
.img-10- {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  overflow: hidden;
  max-width: 100%;
}
.img-11- {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  overflow: hidden;
  max-width: 100%;
}
.div-41- {
  color: var(--bfb-9-cf, #b0a6bd);
  align-self: start;
  font: 400 14px/143% Poppins, sans-serif;
}
.div-42- {
  color: var(--black, #383838);
  align-self: start;
  margin: 21px 0 0 55px;
  font: 500 16px/125% Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-42- {
    max-width: 100%;
  }
}
.div-43- {
  align-self: start;
  color: var(--697586, #697586);
  width: 733px;
  max-width: 100%;
  margin: 12px 0 0 55px;
  font: 400 14px/22px Montserrat, sans-serif;
}
.div-44-{
  background-color: #dfe1e3;
  align-self: start;
  display: flex;
  width: 101px;
  height: 101px;
  flex-direction: column;
  margin: 12px 0 0 55px;
}
@media (max-width: 991px) {
  .div-44- {
    margin-left: 10px;
  }
}
.img-12- {
  aspect-ratio: 92.45;
  object-fit: contain;
  object-position: center;
  width: 1017px;
  fill: var(--8498-af, #dfe1e3);
  overflow: hidden;
  align-self: center;
  margin-top: 40px;
}
@media (max-width: 991px) {
  .img-12- {
    max-width: 100%;
  }
}
.div-45- {
  align-self: stretch;
  display: flex;
  margin-top: 40px;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-45- {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-46- {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 17px;
}
.img-13- {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 40px;
  overflow: hidden;
  max-width: 100%;
}
.div-47- {
  align-self: stretch;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
}
.div-48- {
  color: var(--black, #383838);
  font: 500 14px/143% Poppins, sans-serif;
}
.div-49- {
  display: flex;
  margin-top: 9px;
  padding-right: 8px;
  gap: 6px;
}
.img-14- {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  overflow: hidden;
  max-width: 100%;
}
.img-15- {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  overflow: hidden;
  max-width: 100%;
}
.img-16- {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  overflow: hidden;
  max-width: 100%;
}
.img-17- {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  overflow: hidden;
  max-width: 100%;
}
.img-18- {
  aspect-ratio: 0.11;
  object-fit: contain;
  object-position: center;
  width: 2px;
  overflow: hidden;
  max-width: 100%;
}
.div-50- {
  color: var(--bfb-9-cf, #b0a6bd);
  align-self: start;
  font: 400 14px/143% Poppins, sans-serif;
}
.div-51- {
  color: var(--black, #383838);
  align-self: start;
  margin: 21px 0 0 59px;
  font: 500 16px/125% Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-51- {
    max-width: 100%;
  }
}
.div-52- {
  align-self: start;
  color: var(--697586, #697586);
  width: 732px;
  max-width: 100%;
  margin: 12px 0 0 59px;
  font: 400 14px/22px Montserrat, sans-serif;
}
.div-53- {
  align-self: start;
  display: flex;
  width: 212px;
  max-width: 100%;
  gap: 10px;
  margin: 12px 0 0 59px;
}
@media (max-width: 991px) {
  .div-53- {
    margin-left: 10px;
  }
}
.div-54- {
  background-color: #dfe1e3;
  display: flex;
  height: 101px;
  flex-direction: column;
  flex: 1;
}
.div-55- {
  background-color: #dfe1e3;
  display: flex;
  height: 101px;
  flex-direction: column;
  flex: 1;
}
.img-19- {
  aspect-ratio: 92.45;
  object-fit: contain;
  object-position: center;
  width: 1017px;
  fill: var(--8498-af, #dfe1e3);
  overflow: hidden;
  align-self: center;
  margin-top: 40px;
}
@media (max-width: 991px) {
  .img-19- {
    max-width: 100%;
  }
}
.div-56- {
  align-self: stretch;
  display: flex;
  margin-top: 40px;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-56- {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-57- {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 16px;
}
.img-20- {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 40px;
  overflow: hidden;
  max-width: 100%;
}
.div-58- {
  align-self: stretch;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
}
.div-59- {
  display: flex;
  justify-content: space-between;
  gap: 9px;
}
.div-60- {
  color: var(--black, #383838);
  flex-grow: 1;
  white-space: nowrap;
  font: 500 14px/143% Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-60- {
    white-space: initial;
  }
}
.div-61- {
  color: var(--bfb-9-cf, #b0a6bd);
  flex-grow: 1;
  white-space: nowrap;
  font: 400 14px/143% Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-61- {
    white-space: initial;
  }
}
.div-62- {
  display: flex;
  margin-top: 9px;
  padding-right: 57px;
  gap: 6px;
}
@media (max-width: 991px) {
  .div-62- {
    padding-right: 20px;
  }
}
.img-21- {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  overflow: hidden;
  max-width: 100%;
}
.img-22- {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  overflow: hidden;
  max-width: 100%;
}
.img-23- {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  overflow: hidden;
  max-width: 100%;
}
.img-24- {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  overflow: hidden;
  max-width: 100%;
}
.img-25- {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  overflow: hidden;
  max-width: 100%;
}
.div-63- {
  color: var(--bfb-9-cf, #b0a6bd);
  align-self: start;
  font: 400 14px/143% Poppins, sans-serif;
}
.div-64- {
  color: var(--black, #383838);
  align-self: start;
  margin: 21px 0 0 68px;
  font: 500 16px/125% Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-64- {
    max-width: 100%;
  }
}
.div-65- {
  align-self: start;
  color: var(--697586, #697586);
  width: 715px;
  max-width: 100%;
  margin: 12px 0 0 68px;
  font: 400 14px/22px Montserrat, sans-serif;
}
.img-26- {
  aspect-ratio: 92.45;
  object-fit: contain;
  object-position: center;
  width: 1017px;
  fill: var(--8498-af, #dfe1e3);
  overflow: hidden;
  align-self: center;
  margin-top: 40px;
}
@media (max-width: 991px) {
  .img-26- {
    max-width: 100%;
  }
}
.div-66- {
  align-self: stretch;
  display: flex;
  margin-top: 40px;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-66- {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-67- {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 16px;
}
.img-27- {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 40px;
  overflow: hidden;
  max-width: 100%;
}
.div-68- {
  align-self: stretch;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
}
.div-69- {
  display: flex;
  justify-content: space-between;
  gap: 9px;
}
.div-70- {
  color: var(--black, #383838);
  flex-grow: 1;
  white-space: nowrap;
  font: 500 14px/143% Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-70- {
    white-space: initial;
  }
}
.div-71- {
  color: var(--bfb-9-cf, #b0a6bd);
  flex-grow: 1;
  white-space: nowrap;
  font: 400 14px/143% Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-71- {
    white-space: initial;
  }
}
.div-72- {
  display: flex;
  margin-top: 9px;
  padding-right: 57px;
  gap: 6px;
}
@media (max-width: 991px) {
  .div-72- {
    padding-right: 20px;
  }
}
.img-28- {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  overflow: hidden;
  max-width: 100%;
}
.img-29- {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  overflow: hidden;
  max-width: 100%;
}
.img-30- {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  overflow: hidden;
  max-width: 100%;
}
.img-31- {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  overflow: hidden;
  max-width: 100%;
}
.img-32- {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 18px;
  overflow: hidden;
  max-width: 100%;
}
.div-73- {
  color: var(--bfb-9-cf, #b0a6bd);
  align-self: start;
  font: 400 14px/143% Poppins, sans-serif;
}
.div-74- {
  color: var(--black, #383838);
  align-self: start;
  margin: 21px 0 0 68px;
  font: 500 16px/125% Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-74- {
    max-width: 100%;
  }
}
.div-75- {
  align-self: start;
  color: var(--697586, #697586);
  width: 715px;
  max-width: 100%;
  margin: 12px 0 0 68px;
  font: 400 14px/22px Montserrat, sans-serif;
}









/* ------------------------------------ */



.header-image {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 39px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-width: 100%;
}

.header-image-2 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 39px;
  overflow: hidden;
  max-width: 100%;
}

.div-84 {
  color: #1e293b;
  white-space: nowrap;
  justify-content: center;
  align-items: start;
  border-radius: 4px;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  background-color:  #fff;
  align-self: stretch;
  flex-grow: 1;
  padding: 6px 20px;
  font: 400 12px/18px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-84 {
    white-space: initial;
    padding-left: 2px;
  }
}
.div-84:hover{
  background-color: #328b56;
  color:  #fff;
}
.div-85 {
  color: #1e293b;
  white-space: nowrap;
  justify-content: center;
  border-radius: 4px;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  background-color:  #fff;
  align-self: stretch;
  flex-grow: 1;
  padding: 6px 17px;
  font: 400 12px/18px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-85 {
    white-space: initial;
  }
}
.div-85:hover{
 
  background-color: #328b56;
  color:  #fff;

}
.div-86 {
  color: #1e293b;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  background-color: var(--white, #fff);
  align-self: stretch;
  flex-grow: 1;
  padding: 6px 20px;
  font: 400 12px/18px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-86 {
    white-space: initial;
  }
}

.div-86:hover{
  background-color: #328b56;
  color:  #fff;
}
.div-5:hover{
  position: relative;
border-radius: 10px;
background-color: #fff;
}
.div-7:hover{
  position: relative;
border-radius: 10px;
background-color: #fff;
}
.div-9:hover{
  position: relative;
border-radius: 10px;
background-color: #fff;
}
.div-11:hover{
  position: relative;
border-radius: 10px;
background-color: #fff;
}
.div-13:hover{
  position: relative;
border-radius: 10px;
background-color: #fff;
}
.div {
  background-color: #f0f1f3;
}
.div-2 {
  gap: 20px;
  display: flex;
}
@media (max-width: 991px) {
  .div-2 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}
.column {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 22%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column {
    width: 100%;
  }
}
.div-3 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-3 {
    margin-top: 11px;
  }
}
.div-4 {
  background: linear-gradient(180deg, #c2efd4 0%, rgba(194, 239, 212, 0) 100%);
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 44px 24px 50px 45px;
}
@media (max-width: 991px) {
  .div-4 {
    padding: 0 20px;
  }
}
.img {
  aspect-ratio: 1.68;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  align-self: stretch;
}
.div-5 {
  align-items: center;
  align-self: start;
  display: flex;
  margin-top: 158px;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-5 {
    margin: 60px 0 0 9px;
  }
}
.img-2 {
  aspect-ratio: 1.02;
  object-fit: contain;
  object-position: center;
  width: 46px;
  overflow: hidden;
  max-width: 100%;
}
.div-6 {
  color: #3c652f;
  font: 500 27px/40.5px Poppins, sans-serif;
}
.div-7 {
  align-items: center;
  align-self: start;
  display: flex;
  margin-top: 100px;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-7 {
    margin: 40px 0 0 9px;
  }
}
.img-3 {
  aspect-ratio: 1.02;
  object-fit: contain;
  object-position: center;
  width: 42px;
  fill: #3c652f;
  overflow: hidden;
  max-width: 100%;
  margin: auto 0;
}
.div-8 {
  color: #3c652f;
  font: 500 27px/40.5px Poppins, sans-serif;
}
.div-9 {
  align-items: center;
  align-self: start;
  display: flex;
  margin-top: 100px;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-9 {
    margin: 40px 0 0 9px;
  }
}
.img-4 {
  aspect-ratio: 1.06;
  object-fit: contain;
  object-position: center;
  width: 38px;
  fill: #3c652f;
  overflow: hidden;
  max-width: 100%;
  margin: auto 0;
}
.div-10 {
  color: #3c652f;
  font: 500 27px/40.5px Poppins, sans-serif;
}
.div-11 {
  align-items: center;
  align-self: start;
  display: flex;
  margin-top: 100px;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-11 {
    margin: 40px 0 0 9px;
  }
}
.img-5 {
  aspect-ratio: 1.06;
  object-fit: contain;
  object-position: center;
  width: 38px;
  fill: #3c652f;
  overflow: hidden;
  max-width: 100%;
  margin: auto 0;
}
.div-12 {
  color: #3c652f;
  font: 500 27px/40.5px Poppins, sans-serif;
}
.div-13 {
  align-items: center;
  align-self: start;
  display: flex;
  margin-top: 100px;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-13 {
    margin: 40px 0 0 9px;
  }
}
.img-6 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 36px;
  overflow: hidden;
  max-width: 100%;
  margin: auto 0;
}
.div-14 {
  color: #3c652f;
  font: 500 27px/40.5px Poppins, sans-serif;
}
.div-15 {
  border-radius: 10px;
  background-color: #4b705c;
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin: 480px 0 6px;
  padding: 19px 26px;
}
@media (max-width: 991px) {
  .div-15 {
    margin-top: 40px;
    padding: 0 20px;
  }
}
.img-7 {
  aspect-ratio: 1.31;
  object-fit: contain;
  object-position: center;
  width: 47px;
  fill: #fff;
  overflow: hidden;
  max-width: 100%;
}
.div-16 {
  color: #fff;
  font: 500 27px/40.5px Poppins, sans-serif;
}
.column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 78%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-2 {
    width: 100%;
  }
}
.div-17 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-17 {
    max-width: 100%;
    margin-top: 11px;
  }
}
.div-18 {
  background-color: #f0f1f3;
  display: flex;
  flex-direction: column;
  padding: 35px 43px 50px 44px;
}
@media (max-width: 991px) {
  .div-18 {
    max-width: 100%;
    padding: 0 20px;
  }
}
.div-19 {
  border-radius: 20px;
  background-color: #fff;
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  padding: 30px 50px;
}
@media (max-width: 991px) {
  .div-19 {
    max-width: 100%;
    flex-wrap: wrap;
    padding: 0 20px;
  }
}
.div-20 {
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
}
.div-21 {
  justify-content: center;
  color: #4d4d4d;
  font-feature-settings: "clig" off, "liga" off;
  letter-spacing: -0.15399999916553497px;
  font: 400 20px/24px Inter, sans-serif;
}
.div-22 {
  color: #224f34;
  margin-top: 19px;
  font: 600 50px/75px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-22 {
    font-size: 40px;
    line-height: 67px;
  }
}
.div-23 {
  align-self: start;
  display: flex;
  margin-top: 13px;
  align-items: start;
  justify-content: space-between;
  gap: 20px;
}
.img-8 {
  aspect-ratio: 0.94;
  object-fit: contain;
  object-position: center;
  width: 29px;
  overflow: hidden;
  max-width: 100%;
}
.div-24 {
  align-items: center;
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  gap: 15px;
}
.img-9 {
  aspect-ratio: 0.76;
  object-fit: contain;
  object-position: center;
  width: 19px;
  overflow: hidden;
  max-width: 100%;
  margin: auto 0;
}
.div-25 {
  color: #224f34;
  text-transform: uppercase;
  align-self: stretch;
  flex-grow: 1;
  white-space: nowrap;
  font: 500 22px/33px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-25 {
    white-space: initial;
  }
}
.div-26 {
  border-radius: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin: 40px 0 6px;
  padding: 35px 54px 50px;
}
@media (max-width: 991px) {
  .div-26 {
    max-width: 100%;
    padding: 0 20px;
  }
}
.div-27 {
  align-items: center;
  border-radius: 20px;
  align-self: end;
  display: flex;
  width: 394px;
  max-width: 100%;
  padding-right: 1px;
  gap: 20px;
}
.div-28 {
  display: flex;
  gap: 2px;
  margin: auto 0;
}
.div-29 {
  color: #328b56;
  text-align: center;
  font: 700 16px/24px Inter, sans-serif;
}
.img-10 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 14px;
  overflow: hidden;
  align-self: center;
  max-width: 100%;
  margin: auto 0;
}
.div-30 {
  justify-content: center;
  align-items: start;
  border-radius: 15px;
  background-color: #328b56;
  align-self: stretch;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  padding: 13px 20px;
}
.div-31 {
  align-items: center;
  display: flex;
  margin-left: 14px;
  gap: 0px;
}
@media (max-width: 991px) {
  .div-31 {
    margin-left: 10px;
  }
}
.img-11 {
  aspect-ratio: 1.57;
  object-fit: contain;
  object-position: center;
  width: 11px;
  fill: #fff;
  overflow: hidden;
  max-width: 100%;
  margin: auto 0;
}
.div-32 {
  color: #fff;
  text-align: center;
  font: 700 16px/24px Inter, sans-serif;
}
.div-33 {
  border-radius: 20px;
  align-self: stretch;
  margin-top: 50px;
}
@media (max-width: 991px) {
  .div-33 {
    max-width: 100%;
    margin-top: 40px;
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
.column-3 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 0px;
}
@media (max-width: 991px) {
  .column-3 {
    width: 100%;
  }
}
.div-35 {
  border-radius: 20px;
  border: 1px solid #eff0f6;
  box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.05);
  background-color: rgba(239, 227, 194, 0.3);
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 37px 20px 45px;
}
@media (max-width: 991px) {
  .div-35 {
    margin-top: 40px;
  }
}
.div-36 {
  display: flex;
  width: 141px;
  max-width: 100%;
  flex-direction: column;
}
.div-37 {
  display: flex;
  padding-right: 6px;
  justify-content: space-between;
  gap: 13px;
}
.div-38 {
  color: #7d7d7d;
  letter-spacing: 0.16px;
  font: 400 16px/24px Poppins, sans-serif;
}
.div-39 {
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
  background-color: #fbd983;
  display: flex;
  gap: 3px;
  padding: 3px 4px;
}
.img-12 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 10px;
  overflow: hidden;
  max-width: 100%;
  margin: auto 0;
}
.div-40 {
  color: #000;
  letter-spacing: 0.12px;
  align-self: stretch;
  flex-grow: 1;
  white-space: nowrap;
  font: 400 12px/18px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-40 {
    white-space: initial;
  }
}
.div-41 {
  color: #224f34;
  letter-spacing: 0.28px;
  margin-top: 20px;
  white-space: nowrap;
  font: 700 28px/42px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-41 {
    white-space: initial;
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
.div-42 {
  border-radius: 20px;
  border: 1px solid rgba(239, 240, 246, 0.3);
  box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.05);
  background-color: #fbedee;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 37px 20px 43px;
}
@media (max-width: 991px) {
  .div-42 {
    margin-top: 40px;
  }
}
.div-43 {
  display: flex;
  width: 140px;
  max-width: 100%;
  flex-direction: column;
}
.div-44 {
  display: flex;
  padding-right: 2px;
  justify-content: space-between;
  gap: 13px;
}
.div-45 {
  color: #7d7d7d;
  letter-spacing: 0.16px;
  font: 400 16px/24px Poppins, sans-serif;
}
.div-46 {
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
  background-color: rgba(255, 0, 0, 0.1);
  display: flex;
  gap: 3px;
  padding: 3px 4px;
}
.img-13 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 10px;
  overflow: hidden;
  max-width: 100%;
  margin: auto 0;
}
.div-47 {
  color: #f00;
  letter-spacing: 0.12px;
  align-self: stretch;
  flex-grow: 1;
  white-space: nowrap;
  font: 400 12px/18px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-47 {
    white-space: initial;
  }
}
.div-48 {
  color: #224f34;
  letter-spacing: 0.28px;
  margin-top: 22px;
  white-space: nowrap;
  font: 700 28px/42px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-48 {
    white-space: initial;
  }
}
.column-5 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
}
@media (max-width: 991px) {
  .column-5 {
    width: 100%;
  }
}
.div-49 {
  border-radius: 20px;
  border: 1px solid #eff0f6;
  box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.05);
  background-color: #efedfb;
  display: flex;
  width: 100%;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 37px 80px 47px;
}
@media (max-width: 991px) {
  .div-49 {
    margin-top: 40px;
    padding: 0 20px;
  }
}
.div-50 {
  display: flex;
  width: 154px;
  max-width: 100%;
  gap: 13px;
}
.div-51 {
  color: #7d7d7d;
  letter-spacing: 0.16px;
  font: 400 16px/24px Poppins, sans-serif;
}
.div-52 {
  justify-content: space-between;
  align-items: center;
  border-radius: 50px;
  background-color: #dbd5ff;
  display: flex;
  gap: 3px;
  padding: 3px 4px;
}
.img-14 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 10px;
  overflow: hidden;
  max-width: 100%;
  margin: auto 0;
}
.div-53 {
  color: #000;
  letter-spacing: 0.12px;
  align-self: stretch;
  flex-grow: 1;
  white-space: nowrap;
  font: 400 12px/18px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-53 {
    white-space: initial;
  }
}
.div-54 {
  color: #224f34;
  letter-spacing: 0.28px;
  margin-top: 22px;
  white-space: nowrap;
  font: 700 28px/42px Poppins, sans-serif;
}
@media (max-width: 991px) {
  .div-54 {
    white-space: initial;
  }
}
.div-55 {
  flex-direction: column;
  fill: #fff;
  stroke-width: 1px;
  stroke: var(--Stroke-Color, #eff0f6);
  filter: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.05));
  overflow: hidden;
  align-self: stretch;
  position: relative;
  display: flex;
  min-height: 443px;
  margin-top: 35px;
  width: 100%;
  padding: 23px 26px 23px 20px;
}
@media (max-width: 991px) {
  .div-55 {
    max-width: 100%;
    padding-right: 20px;
  }
}
.img-15 {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
.div-56 {
  position: relative;
  justify-content: center;
  color: #4d4d4d;
  font-feature-settings: "clig" off, "liga" off;
  letter-spacing: -0.15399999916553497px;
  font: 600 20px/24px Inter, sans-serif;
}
@media (max-width: 991px) {
  .div-56 {
    max-width: 100%;
  }
}
.div-57 {
  position: relative;
  background-color: #e4e5e7;
  margin-top: 10px;
  height: 1px;
}
@media (max-width: 991px) {
  .div-57 {
    max-width: 100%;
  }
}
.div-58 {
  position: relative;
  display: flex;
  margin-top: 19px;
  align-items: start;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-58 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-59 {
  opacity: 0.5;
  display: flex;
  margin-top: 9px;
  flex-basis: 0%;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-59 {
    display: none;
  }
}
.div-60 {
  color: var(--base-shade-100, #000);
  text-align: right;
  font: 600 10px/13px Inter, sans-serif;
}
.div-61 {
  color: var(--base-shade-100, #000);
  text-align: right;
  margin-top: 55px;
  font: 600 10px/13px Inter, sans-serif;
}
@media (max-width: 991px) {
  .div-61 {
    margin-top: 40px;
  }
}
.div-62 {
  color: var(--base-shade-100, #000);
  text-align: right;
  margin-top: 55px;
  font: 600 10px/13px Inter, sans-serif;
}
@media (max-width: 991px) {
  .div-62 {
    margin-top: 40px;
  }
}
.div-63 {
  color: var(--base-shade-100, #000);
  text-align: right;
  margin-top: 55px;
  font: 600 10px/13px Inter, sans-serif;
}
@media (max-width: 991px) {
  .div-63 {
    margin-top: 40px;
  }
}
.div-64 {
  color: var(--base-shade-100, #000);
  text-align: right;
  margin-top: 55px;
  font: 600 10px/13px Inter, sans-serif;
}
@media (max-width: 991px) {
  .div-64 {
    margin-top: 40px;
  }
}
.div-65 {
  align-self: stretch;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
}
@media (max-width: 991px) {
  .div-65 {
    max-width: 100%;
  }
}
.img-16 {
  aspect-ratio: 3.64;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
}
@media (max-width: 991px) {
  .img-16 {
    max-width: 100%;
  }
}
.div-66 {
  align-items: flex-start;
  display: flex;
  margin-top: 27px;
  padding-right: 4px;
  justify-content: space-between;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-66 {
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
}
.div-67 {
  justify-content: center;
  color: #838383;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  align-self: stretch;
  font: 500 9px/11px Inter, sans-serif;
}
.div-68 {
  justify-content: center;
  color: #838383;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  align-self: stretch;
  font: 500 9px/11px Inter, sans-serif;
}
.div-69 {
  justify-content: center;
  color: #838383;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  align-self: start;
  font: 500 9px/11px Inter, sans-serif;
}
.div-70 {
  justify-content: center;
  color: #838383;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  align-self: stretch;
  font: 500 9px/11px Inter, sans-serif;
}
.div-71 {
  justify-content: center;
  color: #838383;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  align-self: stretch;
  font: 500 9px/11px Inter, sans-serif;
}
.div-72 {
  justify-content: center;
  color: #838383;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  align-self: stretch;
  font: 500 9px/11px Inter, sans-serif;
}
.div-73 {
  justify-content: center;
  color: #838383;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  align-self: stretch;
  font: 500 9px/11px Inter, sans-serif;
}
.div-74 {
  justify-content: center;
  color: #838383;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  align-self: stretch;
  font: 500 9px/11px Inter, sans-serif;
}
.div-75 {
  justify-content: center;
  color: #838383;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  align-self: stretch;
  font: 500 9px/11px Inter, sans-serif;
}
.div-76 {
  justify-content: center;
  color: #838383;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  align-self: stretch;
  font: 500 9px/11px Inter, sans-serif;
}
.div-77 {
  justify-content: center;
  color: #838383;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  align-self: stretch;
  font: 500 9px/11px Inter, sans-serif;
}
.div-78 {
  justify-content: center;
  color: #838383;
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  align-self: stretch;
  font: 500 9px/11px Inter, sans-serif;
}
.div-79 {
  border-radius: 20px;
  box-shadow: 0px 0px 1px 0px rgba(9, 30, 66, 0.31),
    0px 3px 8px 0px rgba(9, 30, 66, 0.16);
  background-color: var(--white-white, #fff);
  align-self: stretch;
  display: flex;
  padding-top: 20px;
  flex-direction: column;
  margin: 36px 0 11px;
}
@media (max-width: 991px) {
  .div-79 {
    max-width: 100%;
  }
}
.div-80 {
  justify-content: space-between;
  display: flex;
  width: 100%;
  gap: 20px;
}
@media (max-width: 991px) {
  .div-80 {
    max-width: 100%;
    flex-wrap: wrap;
  }
}
.div-81 {
  color: var(--light-version-neutral-blue-gray-600, #475569);
  font: 600 20px/28px Archivo, sans-serif;
}
.div-82 {
  align-items: flex-start;
  display: flex;
  gap: 10px;
}
@media (max-width: 991px) {
  .div-82 {
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
}
.div-83 {
  color: #a6a0a0;
  text-align: center;
  margin: auto 0;
  font: 400 16px/24px Inter, sans-serif;
}

.div-87 {
  font: 400 16px/24px Archivo, sans-serif;

}
@media (max-width: 991px) {
  .div-87 {
    max-width: 100%;

  }
}
.div-88 {
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.img-17 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 62px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-width: 100%;
}
.div-89 {
  color: var(--light-version-neutral-blue-gray-800, #1e293b);
  letter-spacing: 0.10000000149011612px;
  margin: auto 0;
  font: 400 16px/24px Archivo, sans-serif;
}
.div-90 {
  justify-content: center;
  align-self: center;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  margin: auto 0;
}
.div-91 {
  color: var(--light-version-neutral-blue-gray-800, #1e293b);
  letter-spacing: 0.10000000149011612px;
  font: 400 16px/24px Archivo, sans-serif;
}
.div-92 {
  color: var(--light-version-neutral-blue-gray-600, #475569);
  margin-top: 4px;
  font: 400 14px/20px Archivo, sans-serif;
}
.div-93 {
  align-self: center;
  color: var(--light-version-neutral-blue-gray-800, #1e293b);
  letter-spacing: 0.10000000149011612px;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
  font: 400 16px/24px Archivo, sans-serif;
}
.div-94 {
  align-self: center;
  display: flex;
  gap: 8px;
  margin: auto 0;
}
.div-95 {
  color: var(--light-version-neutral-blue-gray-800, #1e293b);
  text-align: right;
  letter-spacing: 0.10000000149011612px;
  font: 400 16px/24px Archivo, sans-serif;
}
.img-18 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
  overflow: hidden;
  align-self: start;
  max-width: 100%;
}
.div-96 {
  align-items: flex-start;
  border-top: 0.5px solid rgba(148, 163, 184, 0.5);
  background-color: #fff;
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  padding: 12px 20px;
}
@media (max-width: 991px) {
  .div-96 {
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
}
.div-97 {
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.img-19 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 62px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-width: 100%;
}
.div-98 {
  color: var(--light-version-neutral-blue-gray-800, #1e293b);
  letter-spacing: 0.10000000149011612px;
  margin-top: 7px;
  font: 400 16px/24px Archivo, sans-serif;
}
.div-99 {
  justify-content: center;
  align-self: center;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  margin: auto 0;
}
.div-100 {
  color: var(--light-version-neutral-blue-gray-800, #1e293b);
  letter-spacing: 0.10000000149011612px;
  font: 400 16px/24px Archivo, sans-serif;
}
.div-101 {
  color: var(--light-version-neutral-blue-gray-600, #475569);
  margin-top: 4px;
  font: 400 14px/20px Archivo, sans-serif;
}
.div-102 {
  align-self: center;
  color: var(--light-version-neutral-blue-gray-800, #1e293b);
  letter-spacing: 0.10000000149011612px;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
  font: 400 16px/24px Archivo, sans-serif;
}
.div-103 {
  align-self: center;
  display: flex;
  gap: 8px;
  margin: auto 0;
}
.div-104 {
  color: var(--light-version-neutral-blue-gray-800, #1e293b);
  text-align: right;
  letter-spacing: 0.10000000149011612px;
  font: 400 16px/24px Archivo, sans-serif;
}
.img-20 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
  overflow: hidden;
  align-self: start;
  max-width: 100%;
}
.div-105 {
  align-items: flex-start;
  border-top: 0.5px solid var(--light-version-neutral-blue-gray-400, #94a3b8);
  background-color: rgba(255, 255, 255, 0.35);
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  padding: 12px 20px;
}
@media (max-width: 991px) {
  .div-105 {
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
}
.div-106 {
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.img-21 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 62px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-width: 100%;
}
.div-107 {
  color: var(--light-version-neutral-blue-gray-800, #1e293b);
  letter-spacing: 0.10000000149011612px;
  margin: auto 0;
  font: 400 16px/24px Archivo, sans-serif;
}
.div-108 {
  justify-content: center;
  align-self: center;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  margin: auto 0;
}
.div-109 {
  color: var(--light-version-neutral-blue-gray-800, #1e293b);
  letter-spacing: 0.10000000149011612px;
  font: 400 16px/24px Archivo, sans-serif;
}
.div-110 {
  color: var(--light-version-neutral-blue-gray-600, #475569);
  margin-top: 4px;
  font: 400 14px/20px Archivo, sans-serif;
}
.div-111 {
  align-self: center;
  color: var(--light-version-neutral-blue-gray-800, #1e293b);
  letter-spacing: 0.10000000149011612px;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
  font: 400 16px/24px Archivo, sans-serif;
}
.div-112 {
  align-self: center;
  display: flex;
  gap: 8px;
  margin: auto 0;
}
.div-113 {
  color: var(--light-version-neutral-blue-gray-800, #1e293b);
  text-align: right;
  letter-spacing: 0.10000000149011612px;
  font: 400 16px/24px Archivo, sans-serif;
}
.img-22 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
  overflow: hidden;
  align-self: start;
  max-width: 100%;
}
.div-114 {
  align-items: flex-start;
  border-top: 0.5px solid var(--light-version-neutral-blue-gray-400, #94a3b8);
  background-color: var(--white-white, #fff);
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  padding: 12px 20px;
}
@media (max-width: 991px) {
  .div-114 {
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
}
.div-115 {
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.img-23 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 62px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-width: 100%;
}
.div-116 {
  color: var(--light-version-neutral-blue-gray-800, #1e293b);
  letter-spacing: 0.10000000149011612px;
  margin: auto 0;
  font: 400 16px/24px Archivo, sans-serif;
}
.div-117 {
  justify-content: center;
  align-self: center;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  margin: auto 0;
}
.div-118 {
  color: var(--light-version-neutral-blue-gray-800, #1e293b);
  letter-spacing: 0.10000000149011612px;
  font: 400 16px/24px Archivo, sans-serif;
}
.div-119 {
  color: var(--light-version-neutral-blue-gray-600, #475569);
  margin-top: 4px;
  font: 400 14px/20px Archivo, sans-serif;
}
.div-120 {
  align-self: center;
  color: var(--light-version-neutral-blue-gray-800, #1e293b);
  letter-spacing: 0.10000000149011612px;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
  font: 400 16px/24px Archivo, sans-serif;
}
.div-121 {
  align-self: center;
  display: flex;
  gap: 8px;
  margin: auto 0;
}
.div-122 {
  color: var(--light-version-neutral-blue-gray-800, #1e293b);
  text-align: right;
  letter-spacing: 0.10000000149011612px;
  font: 400 16px/24px Archivo, sans-serif;
}
.img-24 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
  overflow: hidden;
  align-self: start;
  max-width: 100%;
}
.div-123 {
  align-items: flex-start;
  border-top: 0.5px solid var(--light-version-neutral-blue-gray-400, #94a3b8);
  border-bottom: 0.5px solid var(--light-version-neutral-blue-gray-400, #94a3b8);
  background-color: var(--white-white, #fff);
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  padding: 12px 20px;
}
@media (max-width: 991px) {
  .div-123 {
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
}
.div-124 {
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.img-25 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 62px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  max-width: 100%;
}
.div-125 {
  color: var(--light-version-neutral-blue-gray-800, #1e293b);
  letter-spacing: 0.10000000149011612px;
  margin: auto 0;
  font: 400 16px/24px Archivo, sans-serif;
}
.div-126 {
  justify-content: center;
  align-self: center;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  margin: auto 0;
}
.div-127 {
  color: var(--light-version-neutral-blue-gray-800, #1e293b);
  letter-spacing: 0.10000000149011612px;
  font: 400 16px/24px Archivo, sans-serif;
}
.div-128 {
  color: var(--light-version-neutral-blue-gray-600, #475569);
  margin-top: 4px;
  font: 400 14px/20px Archivo, sans-serif;
}
.div-129 {
  align-self: center;
  color: var(--light-version-neutral-blue-gray-800, #1e293b);
  letter-spacing: 0.10000000149011612px;
  flex-grow: 1;
  flex-basis: auto;
  margin: auto 0;
  font: 400 16px/24px Archivo, sans-serif;
}
.div-130 {
  align-self: center;
  display: flex;
  gap: 8px;
  margin: auto 0;
}
.div-131 {
  color: var(--light-version-neutral-blue-gray-800, #1e293b);
  text-align: right;
  letter-spacing: 0.10000000149011612px;
  font: 400 16px/24px Archivo, sans-serif;
}
.img-26 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
  overflow: hidden;
  align-self: start;
  max-width: 100%;
}
</style>