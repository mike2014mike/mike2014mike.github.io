
<template>
  <div class="component">
    <h1>{{ title }}</h1>
    <p>{{ subtitle }}</p>
    <p>{{ content }}</p> 
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {
      title: "這是標題",
      subtitle: "這是副標題",
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