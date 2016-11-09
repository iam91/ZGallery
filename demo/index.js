window.onload = function(e){

	function fromPlaceholdit(urls, cnt, titles){
		titles = titles || [];
		for(var i = 0; i < cnt; i++){
			var w = Math.floor(100 + Math.random() * 200);
			var h = Math.floor(100 + Math.random() * 200);
			var url = 'https://placehold.it/' + w + 'x' + h;
			var title = i;
			urls.push(url);
			titles.push(title);
		}
	}

	function fromOther(urls, cnt, titles){
		titles = titles || [];
		var init = 13789837;
		for(var i = 0; i < cnt; i++){
			var add = Math.floor(Math.random() * 40);
			var url = 'http://goss1.asiacn.vcg.com/creative/vcg/800-bigwater/13789000/gic' + (init + add) + '.jpg';
			var title = add;
			urls.push(url);
			titles.push(title);
		}
	}

	var container = document.querySelector('#container');
	var choose = document.querySelector('#choose');


	var gutter = 5;
	var gallery = zGallery(container);
	gallery.setGutter(gutter);


	choose.onclick = function(e){
		var layout = zGallery.LAYOUT[e.target.title.toUpperCase()];
		if(typeof layout === 'number'){
			
			var urls = [];

			gallery.setLayout(layout);
			var add = gallery.getLayout() == zGallery.LAYOUT.JIGSAW ? 2 : 20;

			//fromPlaceholdit(urls, add);
			fromOther(urls, add);
			gallery.setImage(urls);
		}
	};

	document.onscroll = function(e){
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		
		if(window.innerHeight + scrollTop >= document.body.clientHeight){
			var append = [];

			var add = gallery.getLayout() == zGallery.LAYOUT.JIGSAW ? 1 : 20;

			fromOther(append, add);
			gallery.addImage(append);
		}
	};

};