
<template>
  <div class="component">
    <h1>標題</h1>
    <p>副標題</p>
    <p>{{content}}</p>    
    <img src={{imgurl}} alt="">
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      imgurl: "http://lorempixel.com/400/200/sports/",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis cumque eius illo officia consequuntur similique illum sint assumenda harum placeat doloremque blanditiis earum, quaerat minus, fugiat voluptate, nesciunt sit enim!"
    };
  }
};
</script>

<style scoped>
.component {
  border: 1px solid #000;
  padding: 10px;
  margin: 10px;
  color: blue;
}
.component > img {
  width: 100%;
}
</style>