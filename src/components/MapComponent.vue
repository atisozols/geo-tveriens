<template>
  <div>
    <button class="open-popup-btn" @click="togglePopup"><img src="../assets/images/pin.png" width="30px" height="30px"></button>
    <div v-if="showPopup" class="backdrop" @click="togglePopup"></div>
    <div v-if="showPopup" class="popup">
      <button class="close-popup-btn" @click="togglePopup">&times;</button>
      <iframe src="https://snazzymaps.com/embed/620303" width="100%" height="100%" style="border:none;"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPopup: false
    };
  },
  methods:{
    togglePopup(){
        this.showPopup = !this.showPopup;
    }
  }
};
</script>

<style scoped lang="scss">
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 999;
}

.open-popup-btn {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #84ac16;
  color: white;
  border: none;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  position: fixed;
  top: 5%;
  left: 5%;
  width: 90%;
  height: 90%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
  padding-top: 35px;
  box-sizing: border-box;

  .close-popup-btn {
    position: absolute;
    top: -3.5%;
    right: 0;
    background: none;
    border: none;
    font-size: 50px;
    cursor: pointer;
    }

    iframe {
    width: 100%;
    height: 100%;
    }
}


</style>
