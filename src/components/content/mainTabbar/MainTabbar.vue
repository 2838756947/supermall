<template>
  <tab-bar>
    <tab-bar-item path="/home" active-color="red">
      <img slot="item-icon" src="~assert/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assert/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" active-color="red">
      <img slot="item-icon" src="~assert/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="~assert/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" active-color="red">
      <img slot="item-icon" src="~assert/img/tabbar/cart.svg" alt="">
      <img slot="item-icon-active" src="~assert/img/tabbar/cart_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" active-color="red">
      <img slot="item-icon" src="~assert/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="~assert/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";

export default {

  name: "MainTabbar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>