<template>
  <div class="container">
    <y-row class="row">
      <y-col :span="24">
        <div class="grid-content bg-youhuang"></div>
      </y-col>
    </y-row>
    <y-row class="row">
      <y-col
          span="12">
        <div class="grid-content bg-deep"></div>
      </y-col>
      <y-col span="12">
        <div class="grid-content bg-light"></div>
      </y-col>
    </y-row>
    <y-row class="row">
      <y-col
          span="8">
        <div class="grid-content bg-deep"></div>
      </y-col>
      <y-col span="8">
        <div class="grid-content bg-light"></div>
      </y-col>
      <y-col span="8">
        <div class="grid-content bg-deep"></div>
      </y-col>
    </y-row>
    <y-row class="row">
      <y-col span="6">
        <div class="grid-content bg-deep"></div>
      </y-col>
      <y-col span="6">
        <div class="grid-content bg-light"></div>
      </y-col>
      <y-col span="6">
        <div class="grid-content bg-deep"></div>
      </y-col>
      <y-col span="6">
        <div class="grid-content bg-light"></div>
      </y-col>
    </y-row>
    <y-row class="row">
      <y-col span="4">
        <div class="grid-content bg-deep"></div>
      </y-col>
      <y-col span="4">
        <div class="grid-content bg-light"></div>
      </y-col>
      <y-col span="4">
        <div class="grid-content bg-deep"></div>
      </y-col>
      <y-col span="4">
        <div class="grid-content bg-light"></div>
      </y-col>
      <y-col span="4">
        <div class="grid-content bg-deep"></div>
      </y-col>
      <y-col span="4">
        <div class="grid-content bg-light"></div>
      </y-col>
    </y-row>
  </div>
</template>

<script>
import Row from "../../../src/y-row"
import Col from "../../../src/y-col"

export default {
  name: "ybutton-demo",
  components: {
    "y-row": Row,
    "y-col": Col,
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.container {
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 24px;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6);
  display: flex;
  flex-direction: column;
}

.bg-youhuang {
  background: #f1ca17;
  min-height: 36px;
  border-radius: 4px;
  width: 100%;
}

.bg-deep {
  background: #f9d27d;
  min-height: 36px;
  border-radius: 4px;
  width: 100%;
}

.bg-light {
  background: #f7da94;
  min-height: 36px;
  border-radius: 4px;
  width: 100%;
}

.row {
  margin-bottom: 20px;
}

.row:last-child {
  margin-bottom: 0;
}
</style>