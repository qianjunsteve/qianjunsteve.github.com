define('components/nav/nav.js', function(require, exports, module){ var navArray = [{
  dt: 'About',
  dd: ['age', 'sex', 'height', 'nation']
}, {
  dt: 'Hobby',
  dd: ['football', 'paint', 'dance']
}, {
  dt: 'Contact',
  dd: ['tel', 'email', 'fb']
}];

Vue.component('c-nav', {
  template: "<nav class=\"nav cf\">\n\t<div class=\"logo\"><img src=\"/qianjunsteve/c-Jack-Meng.png\" width=\"200\" height=\"40\">\n\t</div>\n\t<div class=\"nav-content fr\">\n\t\t<dl v-for=\"item in list\">\n\t\t\t<dt><a href=\"\">{{item.dt}}</a></dt>\n\t\t\t<dd v-for=\"elem in item.dd\"><a href=\"\">{{elem}}</a></dd>\n\t\t</dl>\n\t</div>\n</nav>",
  data: function() {
    return {
      list: navArray
    }
  },
  methods: {

  }
}); 
});