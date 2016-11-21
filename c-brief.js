define('components/brief/brief.js', function(require, exports, module){ var briefArray = [{
  img: '/qianjunsteve/c-2015opera-brief.png',
  title: 'School Opera Show',
  time: '2015-06-11',
  tag: '2015opera'
}, {
  img: '/qianjunsteve/c-2016opera-brief.png',
  title: 'School Opera Show',
  time: '2016-01-07',
  tag: '2016opera'
}, {
  img: '/qianjunsteve/c-2015football-brief.png',
  title: 'School Football Match',
  time: '2015-05-1',
  tag: '2015football'
}, {
  img: '/qianjunsteve/c-2016football-brief.png',
  title: 'School Football Match',
  time: '2016-05-08',
  tag: '2016football'
}, {
  img: '/qianjunsteve/c-2016paint-brief.png',
  title: 'School Painting Works',
  time: '2016-11-07',
  tag: '2016paint'
}];

Vue.component('c-brief', {
  template: "<ul class=\"brief-wrap\">\n\t<li v-for=\"item in list\" class=\"brief-item\" v-on:click=\"onLinkClick\">\n\t\t<img class=\"brief-img\" v-bind:src=\"item.img\" alt=\"\" width=\"\">\n\t\t<div class=\"brief-desc\">\n\t\t<p class=\"brief-title\">{{item.title}}</p>\n\t\t<p class=\"brief-time\">{{item.time}}</p>\n\t\t</div>\n\t</li>\n</ul>",
  data: function() {
    return {
      list: briefArray
    }
  },
  methods: {
    onLinkClick: function(e){
      var index = $(e.currentTarget).index();
      location.href = '/qianjunsteve/hobby.html' + '#' + briefArray[index].tag;
    }
  }
});
 
});