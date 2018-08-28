var vm = new Vue({
  el: '#app',
  data: {
    //網頁用到的資料都放在這
    col1: '第一欄內容',
    col2: '第二欄內容'
  },
  created: function () {
    // 網頁載入完成，先執行的 function 內容寫在這(像 jQ 的 .ready())
  },
  mounted() {
    // 接API通常放這兒
    $.ajax({
      url: endpoint
    }).done(res =>
      console.log(JSON.parse(res)))
  },
  methods: {
    //各種要用的 function 寫在這
    m1: function (event) {
      //方法一
    }
  },
  computed: {
    //計算屬性
    c1: function () {
      //計算一
      return this.col1 + ' ' + this.col2
    }
  }
})