<template>
  <div class="container">
    <y-container class="y-container">
      <y-header class="y-header">header</y-header>
      <y-content class="y-content">content</y-content>
      <y-footer class="y-footer">footer</y-footer>
    </y-container>

    <y-container class="y-container-aside">
      <y-header class="y-header-aside">header</y-header>
      <y-container class="y-container-aside2">
        <y-aside class="y-aside">aside</y-aside>
        <y-content class="y-content-aside">content</y-content>
      </y-container>
      <y-footer class="y-footer-aside">footer</y-footer>
    </y-container>

    <y-container class="y-container-left">
      <y-aside class="y-aside-left">aside</y-aside>
      <y-container class="y-container-left2">
        <y-header class="y-header-left">header</y-header>
        <y-content class="y-content-left">content</y-content>
        <y-footer class="y-footer-left">footer</y-footer>
      </y-container>
    </y-container>
  </div>
</template>

<script>
import Container from "../../../src/y-container";
import Header from "../../../src/y-header"
import Aside from "../../../src/y-aside"
import Content from "../../../src/y-content"
import Footer from "../../../src/y-footer"

export default {
  name: "yLayout-demo",
  components: {
    "y-container": Container,
    "y-aside": Aside,
    "y-header": Header,
    "y-content": Content,
    "y-footer": Footer,
  }
}
</script>

<style scoped lang="scss">
.container {
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 24px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6);
}

.y-container {
  height: 300px;
  margin-bottom: 20px;
}

.y-header {
  height: 50px;
  background: #fecc11;
  text-align: center;
  line-height: 50px;
}

.y-content {
  background: #f9d770;
  text-align: center;
  line-height: 200px;
}

.y-footer {
  height: 50px;
  background: #fecc11;
  text-align: center;
  line-height: 50px;
}

.y-container-aside {
  height: 300px;
  overflow: hidden;
  margin-bottom: 20px;

  > .y-header-aside {
    height: 50px;
    background: #fecc11;
    text-align: center;
    line-height: 50px;
  }

  > .y-footer-aside {
    height: 50px;
    background: #fecc11;
    text-align: center;
    line-height: 50px;
  }

  > .y-container-aside2 {
    > .y-aside {
      background: #f4ce69;
      width: 60px;
      text-align: center;
      line-height: 200px;
    }

    > .y-content-aside {
      background: #f9d770;
      text-align: center;
      line-height: 200px;
    }
  }
}

.y-container-left {
  height: 300px;

  > .y-aside-left {
    width: 60px;
    line-height: 300px;
    text-align: center;
    background: #f4ce69;
  }

  > .y-container-left2 {

    > .y-header-left {
      background: #fecc11;
      height: 50px;
      line-height: 50px;
      text-align: center;
    }

    > .y-content-left {
      background: #f9d770;
      line-height: 200px;
      text-align: center;
    }

    > .y-footer-left {
      background: #fecc11;
      height: 50px;
      line-height: 50px;
      text-align: center;
    }
  }
}
</style>