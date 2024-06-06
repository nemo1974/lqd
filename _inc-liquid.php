<div id="LLQID_liquidContainer" v-if="LLQID_liquidGooeyShow || LLQID_liquidMovingShow || LLQID_liquidBrandShow">
  <div class="LLQID_liquidContainerInner">
    <div class="LLQID_liquidGooey" v-if="LLQID_liquidGooeyShow">
      <img src="./img/liquidGooey.svg">
      <div class="LLQID_liquidGooeyMsgContainer">
        <div class="LLQID_liquidGooeyMsg" v-if="LLQID_liquidGooeyMsgShow">Loading</div>
      </div>
    </div>
    <div class="LLQID_liquidMovingItems" v-if="LLQID_liquidMovingShow">
      <div class="LLQID_liquidMovingItem" id="LLQID_liquidMovingFromLeftTop">
        <svg class="LLQID_liquidMovingShapeBegin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.31 72.92">
          <path d="M55.38,9.41C68.13,22,71.86,45.07,59.23,57.83S22.39,68.24,9.64,55.6A32.5,32.5,0,1,1,55.38,9.41Z" fill="#ff1654"/>
        </svg>
        <svg class="LLQID_liquidMovingShape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.31 72.92">
          <path d="M55.38,9.41C68.13,22,83.17,54.71,70.54,67.47s-48.15.77-60.9-11.87A32.5,32.5,0,1,1,55.38,9.41Z" fill="#ff1654"/>
        </svg>
      </div>
      <div class="LLQID_liquidMovingItem" id="LLQID_liquidMovingFromRightTop">
        <svg class="LLQID_liquidMovingShapeBegin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69.54 78.58">
          <path d="M63.53,51.33C53.14,66,27.07,73.29,12.43,62.9S.13,28.33,10.53,13.69a32.5,32.5,0,1,1,53,37.64Z" fill="#ff1654"/>
        </svg>
        <svg class="LLQID_liquidMovingShape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 69.54 78.58">
          <path d="M63.53,51.33C53.14,66,23.34,86.1,8.7,75.71s-8.57-47.38,1.83-62a32.5,32.5,0,1,1,53,37.64Z" fill="#ff1654"/>
        </svg>
      </div>
      <div class="LLQID_liquidMovingItem" id="LLQID_liquidMovingFromRightBottom">
        <svg class="LLQID_liquidMovingShapeBegin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.31 72.92">
          <path d="M19.93,63.51C7.18,50.88,4.14,30.21,16.77,17.45s36.15-12.76,48.9-.13A32.5,32.5,0,1,1,19.93,63.51Z" fill="#ff1654"/>
        </svg>
        <svg class="LLQID_liquidMovingShape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.31 72.92">
          <path d="M19.93,63.51C7.18,50.88-7.86,18.21,4.77,5.45s48.15-.76,60.9,11.87A32.5,32.5,0,1,1,19.93,63.51Z" fill="#ff1654"/>
        </svg>
      </div>
      <div class="LLQID_liquidMovingItem" id="LLQID_liquidMovingFromLeftBottom">
        <svg class="LLQID_liquidMovingShapeBegin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72.92 75.31">
          <path d="M9.41,19.93C22,7.18,45.64,1.21,58.4,13.84s9.84,39.08-2.8,51.83A32.5,32.5,0,1,1,9.41,19.93Z" fill="#ff1654"/>
        </svg>
        <svg class="LLQID_liquidMovingShape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.31 72.92">
          <path d="M9.41,19.93C22,7.18,54.71-7.86,67.47,4.77s.77,48.15-11.87,60.9A32.5,32.5,0,1,1,9.41,19.93Z" fill="#ff1654"/>
        </svg>
      </div>
    </div>
    <transition name="LLQID_liquidScale" v-on:after-enter="afterEnter('LLQID_liquidBrand')">
      <div class="LLQID_liquidBrand" ref="LLQID_liquidBrand" v-if="LLQID_liquidBrandShow">
        <img src="./img/LQID-shape.svg">
        <img src="./img/LQID-shape-text.svg">
      </div>
    </transition>
  </div>
</div>
<!-- end #LLQID_liquidContainer -->