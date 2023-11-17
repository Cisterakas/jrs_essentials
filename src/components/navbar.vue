<template>
    <nav>
    <div class="div">
      <div class="div-2">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/eccde559-7dff-4402-9920-10d57c1ca6d8?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/eccde559-7dff-4402-9920-10d57c1ca6d8?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eccde559-7dff-4402-9920-10d57c1ca6d8?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/eccde559-7dff-4402-9920-10d57c1ca6d8?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/eccde559-7dff-4402-9920-10d57c1ca6d8?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/eccde559-7dff-4402-9920-10d57c1ca6d8?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/eccde559-7dff-4402-9920-10d57c1ca6d8?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/eccde559-7dff-4402-9920-10d57c1ca6d8?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
          class="img"
        />
        <div class="div-3">
          <div class="div-4">Home</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b086f616-4d50-4ac3-9efc-593d461905a1?apiKey=3f6a7ddee9ae46558dc54af7e96aa0c9&"
            class="img-2"
          />
          <div class="div-5">Login</div>
        </div>
      </div>
    </div>
</nav>
  </template>
  
  
  
  <style scoped>
  .div {
    align-items: flex-start;
    background-color: #c4f0d6;
    display: flex;
    flex-direction: column;
    padding: 0 80px;
  }
  @media (max-width: 991px) {
    .div {
      padding: 0 20px;
    }
  }
  .div-2 {
    justify-content: space-between;
    align-items: flex-start;
    align-self: center;
    display: flex;
    width: 100%;
    max-width: 1439px;
    gap: 20px;
    margin: 38px 0;
  }
  @media (max-width: 991px) {
    .div-2 {
      max-width: 100%;
      flex-wrap: wrap;
    }
  }
  .img {
    aspect-ratio: 1.32;
    object-fit: contain;
    object-position: center;
    width: 242px;
    overflow: hidden;
    align-self: stretch;
    max-width: 100%;
  }
  .div-3 {
    justify-content: space-between;
    align-items: flex-start;
    align-self: center;
    display: flex;
    width: 446px;
    max-width: 100%;
    gap: 20px;
    margin: auto 0;
  }
  @media (max-width: 991px) {
    .div-3 {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  .div-4 {
    color: #224f34;
    text-transform: uppercase;
    align-self: center;
    margin: auto 0;
    font: 500 22px Poppins, sans-serif;
  }
  .img-2 {
    aspect-ratio: 1;
    object-fit: contain;
    object-position: center;
    width: 32px;
    filter: drop-shadow(1px 2px 9px rgba(0, 0, 0, 0.15));
    overflow: hidden;
    align-self: center;
    max-width: 100%;
    margin: auto 0;
  }
  .div-5 {
    color: #224f34;
    text-transform: uppercase;
    align-self: stretch;
    white-space: nowrap;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    border: 2px solid #224f34;
    width: 142px;
    max-width: 100%;
    padding: 11px 41px;
    font: 500 20px Poppins, sans-serif;
  }
  @media (max-width: 991px) {
    .div-5 {
      white-space: initial;
      padding: 0 20px;
    }
  }
  </style>