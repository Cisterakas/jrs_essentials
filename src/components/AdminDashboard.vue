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
          <router-link to="/adminReview" class="div-11" type="button">
            
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/46480ab6-5a37-4cc4-ab80-20440a1b13d4?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                class="img-5"
              />
              <div class="div-12">Reviews</div>
           
          </router-link>
          <router-link to="/adminTransaction" class="div-13" type="button">
           
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
                <div class="div-21">Primary</div>
                <div class="div-22">Dashboard</div>
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
              <div class="div-33">
                <div class="div-34">
                  <div class="column-3">
                    <div class="div-35">
                      <div class="div-36">
                        <div class="div-37">
                          <div class="div-38">Income</div>
                          <div class="div-39">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef0448fd-e4f3-4535-b4ee-9f8b7eb9d352?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                              class="img-12"
                            />
                            <div class="div-40">10.0%</div>
                          </div>
                        </div>
                        <div class="div-41">₱6,680.00</div>
                      </div>
                    </div>
                  </div>
                  <div class="column-4">
                    <div class="div-42">
                      <div class="div-43">
                        <div class="div-44">
                          <div class="div-45">Expenses</div>
                          <div class="div-46">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/da83834b-f8e2-49da-988b-2ee5fa50aabd?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                              class="img-13"
                            />
                            <div class="div-47">3.0%</div>
                          </div>
                        </div>
                        <div class="div-48">₱3,680.00</div>
                      </div>
                    </div>
                  </div>
                  <div class="column-5">
                    <div class="div-49">
                      <div class="div-50">
                        <div class="div-51">New Orders</div>
                        <div class="div-52">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c744d136-0709-4c34-95ff-c4e41ce6d314?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                            class="img-14"
                          />
                          <div class="div-53">3.2%</div>
                        </div>
                      </div>
                      <div class="div-54">24</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="div-55">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e157c284-d07b-41b1-a8cd-72c544aa15ec?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                  class="img-15"
                />
                <div class="div-56">Sales Statistics 2023</div>
                <div class="div-57"></div>
                <div class="div-58">
                  <div class="div-59">
                    <div class="div-60">80</div>
                    <div class="div-61">60</div>
                    <div class="div-62">40</div>
                    <div class="div-63">20</div>
                    <div class="div-64">0</div>
                  </div>
                  <div class="div-65">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/db58f081-7baf-49c9-9334-c8c17ac24571?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-16"
                    />
                    <div class="div-66">
                      <div class="div-67">JAN</div>
                      <div class="div-68">FEB</div>
                      <div class="div-69">MAR</div>
                      <div class="div-70">APR</div>
                      <div class="div-71">MAY</div>
                      <div class="div-72">JUN</div>
                      <div class="div-73">JUL</div>
                      <div class="div-74">AUG</div>
                      <div class="div-75">SEP</div>
                      <div class="div-76">OCT</div>
                      <div class="div-77">NOV</div>
                      <div class="div-78">DEC</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="div-79">
                <div class="div-80">
                  <div class="div-81">Top Selling Products</div>
                  <div class="div-82">
                    <div class="div-83">Filter date by</div>
                    <div class="div-84" type="button">This week</div>
                    <div class="div-85" type="button">This month</div>
                    <div class="div-86" type="button">This year</div> 
                  </div>
                </div>

                <table class="table table-striped"  >
     
          <tbody class="div-87">
            <tr v-for="category in categories" :key="category.id">
              <td >  
                <img v-if="category.id === 1"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/38aa3e8c-e8cc-4488-b37c-643736d94028?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-17"
                    />
                    <img v-else-if="category.id === 2"
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d078db80-48a2-413f-a9a4-acbaf7d6906f?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d078db80-48a2-413f-a9a4-acbaf7d6906f?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d078db80-48a2-413f-a9a4-acbaf7d6906f?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d078db80-48a2-413f-a9a4-acbaf7d6906f?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d078db80-48a2-413f-a9a4-acbaf7d6906f?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d078db80-48a2-413f-a9a4-acbaf7d6906f?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d078db80-48a2-413f-a9a4-acbaf7d6906f?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d078db80-48a2-413f-a9a4-acbaf7d6906f?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-19"
                    />
                    <img v-else-if="category.id === 3"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/aebf0707-93d5-470b-bf57-f0233d1247cb?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-21"
                    />
                    <img v-else-if="category.id === 4"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a595844-2fc2-4e6a-8ace-c57a01fdef51?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-23"
                    />
                    <img v-else-if="category.id === 5"
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b07e6af3-5691-4a64-87b0-1ab200d6b97b?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-25"
                    />
                  
                  </td>
              <td >{{ category.docType }}</td>
              <td >{{ category.dateReq }}</td>
              <td >{{ category.claim }}</td>
              <td >
                <div class="div-95">{{ category.sched }}</div></td>
            
              <td >
                
                <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/114f2fa6-8e85-43ee-946b-b84ea5bd7655?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
                      class="img-18"
                    />
              
              
              </td>
         
            </tr>
          </tbody>
        </table> 
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
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