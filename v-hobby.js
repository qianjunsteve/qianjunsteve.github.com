define('views/hobby/hobby.js', function(require, exports, module){ require('components/nav/nav.js');
var urlSearch = location.hash.slice(1);
var imgUrls;
switch(urlSearch) {
	case '2015opera': 
		imgUrls = ['/qianjunsteve/v-2015opera-1.png', '/qianjunsteve/v-2015opera-2.png', '/qianjunsteve/v-2015opera-3.png', '/qianjunsteve/v-2015opera-4.png', 
							 '/qianjunsteve/v-2015opera-5.png', '/qianjunsteve/v-2015opera-6.png', '/qianjunsteve/v-2015opera-7.png', '/qianjunsteve/v-2015opera-8.png', 
							 '/qianjunsteve/v-2015opera-9.png'];
	break;
	case '2016opera': 
		imgUrls = ['/qianjunsteve/v-2016opera-1.png', '/qianjunsteve/v-2016opera-2.png', '/qianjunsteve/v-2016opera-3.png', '/qianjunsteve/v-2016opera-4.png', 
							 '/qianjunsteve/v-2016opera-5.png', '/qianjunsteve/v-2016opera-6.png'];
	break;
};
var hobbyData = {
	banner: imgUrls.shift(),
	title: '2015 opera',
	time: '2015-06-11',
	label: [{
		color: 'blue',
		txt: 'opera'
	}, {
		color: 'purple',
		txt: '2015'
	}, {
		color: 'orange',
		txt: 'Beijing'
	}],
	context: 'Beijing urges Washington to "be cautious in words and actions in regard to the Diaoyu Islands issue", the Ministry of National Defense said on Friday, a stern warning over recent remarks by a top United States Navy official.Beijing urges Washington to "be cautious in words and actions in regard to the Diaoyu Islands issue", the Ministry of National Defense said on Friday, a stern warning over recent remarks by a top United States Navy official.Beijing urges Washington to "be cautious in words and actions in regard to the Diaoyu Islands issue", the Ministry of National Defense said on Friday, a stern warning over recent remarks by a top United States Navy official.',
	imgs: imgUrls
}

var vm = new Vue({
	el: "#J_body",
	data: {
		hobby: hobbyData
	}
}); 
 
});