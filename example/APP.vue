<template>
  <div style="position:relative;padding: 20px;">
    <ve-ip v-model="ipv4" maxWidth="220"></ve-ip>
    <ve-subnet v-model="ipv4" maxWidth="180"></ve-subnet>
    <ve-plain-input v-model="ipv4" maxWidth="180" placeholder="普通输入框"></ve-plain-input>
    <ve-button :plain="true" icon="snowflake-o" @click="handleClick" v-tip="'click me tip and send message'">info</ve-button>
    <div class="title">
      <span v-loading-preload="visible.title1" data-loading-type="circle" data-loading-diameter="24" class="fa" :class="fa" style="margin: 0 10px"></span>
      <h1 v-loading-preload="visible.title1" data-loading-text="3">{{ titlea }}</h1>
    </div>
    <div v-loading-preload="visible.content1" data-loading-text="30" class="main">
      <p v-for="(item, index) in data1" :key="index">{{ item }}</p>
    </div>
    <hr class="hr" />
    <div class="flex">
      <h1 v-loading-preload="visible.title2" data-loading-text="2" class="title">{{ titleb }}</h1>
      <span v-loading-preload="visible.title2" data-loading-type="rect" class="fa" :class="faItem" style="margin: 0 10px;display: inline-block;vertical-align: middle"></span>
    </div>
    <div v-loading-preload="visible.content2" data-loading-text="120" class="main">
      <p v-for="(item, index) in data2" :key="index">{{ item }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ipv4: '',
        veSwitch: '',
        data1: [],
        data2: [],
        titlea: '',
        titleb: '',
        fa: '',
        faItem: '',
        visible: {
          title1: false,
          title2: false,
          content1: false,
          content2: false,
        }
      }
    },
    methods: {
      handleClick() {
        this.$msg({
          type: 'success',
          message: 'ok'
        })
      },
      promise(ms, data) {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(data)
          }, ms)
        })
      },
      async task() {
        [this.fa, this.titlea] = await Promise.all([this.promise(600, 'fa-address-book'), this.promise(600, '诗歌 - 李白')]);
        this.visible.title1 = true;
        this.data1 = await this.promise(2100, ['床前明月光，疑是地上霜。举头望明月，低头思故乡。', '日照香炉生紫烟，遥看瀑布挂前川。飞流直下三千尺，疑是银河落九天。'
          ,'李白乘舟将欲行，忽闻岸上踏歌声。桃花潭水深千尺，不及汪伦送我情。'])
        this.visible.content1 = true;

        [this.titleb, this.faItem] = await Promise.all([this.promise(1200, '诗歌 - 杜甫'), this.promise(1200, 'fa-address-card-o')]);
        this.visible.title2 = true;
        this.data2 = await this.promise(6400, ['两个黄鹂鸣翠柳，一行白鹭上青天。 窗含西岭千秋雪，门泊东吴万里船。', '江边踏青罢，回首见旌旗。风起春城暮，高楼鼓角悲。'
          ,'国破山河在，城春草木深。感时花溅泪，恨别鸟惊心。烽火连三月，家书抵万金。白头搔更短，浑欲不胜簪。', '好雨知时节，当春乃发生。随风潜入夜，润物细无声。野径云俱黑，江船火独明。晓看红湿处，花重锦官城。',
          '昔闻洞庭水，今上岳阳楼。吴楚东南坼，乾坤日夜浮。亲朋无一字，老病有孤舟。戎马关山北，凭轩涕泗流。',
          '照日深红暖见鱼，连村绿暗晚藏乌，黄童白叟聚雎盱。麋鹿逢人虽未惯，猿猱闻鼓不须呼，归来说与采桑姑。',
          '麻叶层层叶光，谁家煮茧一村香？隔篱娇语络丝娘。垂白杖藜抬醉眼，捋青捣软饥肠，问言豆叶几时黄。']);
        this.visible.content2 = true;
      }
    },
    mounted() {
      this.task()
    }
  }
</script>

<style>
  .ve-loading-parent--relative {
    position: relative;
  }
  .title {

  }
  .title > * {
    vertical-align: middle;
  }
  .title span {
    font-size: 1.4em;
  }
  h1 {
    display: inline-block;
  }
  .hr {
    height: 2px;
    outline: none;
    border: none;
    background-color: rgb(230, 236, 241);
  }
  .main {
    margin: 0.67em 0;
  }
</style>
