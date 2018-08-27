const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

new Vue({
  el: '.search-form',
  data() {
    return {
      cities: null,
      filter: ''
    }
  },
  computed: {
    regexp() {
      return new RegExp(this.filter, 'gi')
    },
    filterArray() {
      return this.cities.filter(city => city.city.match(this.regexp) || city.state.match(this.regexp))
    }
  },
  methods: {
    highlight(obj) {
      let cache = JSON.parse(JSON.stringify(obj));
      let field = ["city", "state"];
      field.forEach((f) => {
        let match = cache[f].match(this.regexp);
        // console.log(match);
        if (match)
          cache[f] = cache[f].replace(this.regexp, `<span class='hl'>${match[0]}</span>`);
      });
      // console.log(cache);
      return cache.city + ', ' + cache.state;
    }
  },
  mounted() {
    $.ajax({ url: endpoint }).done(res => this.cities = JSON.parse(res))
  }
})

