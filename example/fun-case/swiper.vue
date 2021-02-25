<template>
  <div>
    <div class="contanier">
      <div class="track" :style="style" ref="contanier">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      style: {}
    }
  },
  mounted() {
    console.log(this.$refs.contanier)
    const contanier = this.$refs.contanier
    let startTime, stratX, deltaX
    contanier.addEventListener('touchmove', e => {
      console.log('touchmove')
      const touch = e.touches[0];
      deltaX = Math.abs(touch.clientX - stratX)
      this.style.transform = `matrix(1, 0, 0, 1, -${deltaX}, 0)`
    })
    contanier.addEventListener('touchstart', e => {
      console.log('touchstart', e)
      startTime = Date.now()
      const touch = e.touches[0];
      stratX = touch.clientX
    })
    contanier.addEventListener('touchend', e => {
      console.log('touchend')
      const speed = deltaX / (Date.now() - startTime)
      console.log(speed)
    })
  }
}
</script>

<style lang="less">
.contanier {
  height: 300px;
  width: 300px;
  overflow: hidden;
  .track {
    display: flex;
    height: 100%;
    width: 1200px;
    transition-duration: 500ms;
    div {
    flex-shrink: 0;
    width: 300px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: aqua;
    &:nth-child(2n) {
      background-color: burlywood;
    }
  }
  }
  
}
</style>