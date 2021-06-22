<template>
  <div class="tab-bar-item" @click="click">
    <div v-if="isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="ActiveColor"><slot name="item-text"></slot> </div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  props: {
    path:String,
    activeColor: {
      type:String,
      default:'red'
    }
  },
  data() {
    return{
      // isActive: true
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    ActiveColor() {
      return this.isActive ? {color:this.activeColor}:{}
    }
  },
  methods:{
    click() {
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 10px;
}
.tab-bar-item img{
  margin-top: 3px;
  width: 24px;
  height: 24px;
}
</style>