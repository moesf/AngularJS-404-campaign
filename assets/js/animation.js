(function($) { 
	/* animations */
	setTimeout(function(){

	// Big Banger

		//example 1, animate only once
		$('body')
		.transition({ opacity: .001}, 1)
		.transition({ opacity: 1}, 2000,'ease');

		$('#big-bang-whole')
		.transition({ opacity: .1}, 1)
		.transition({ opacity: 1}, 1000,'ease');

		$('#big-bang-spots')
		.transition({ scale: .1}, 1)
		.transition({ scale: 1.0}, 4000,'ease');

		$('#big-bang-rays')
		.transition({ opacity: .1, scale: .1}, 1)
		.transition({ opacity: 1, scale: 1.0}, 5000,'ease');

		$('#big-bang')
		.transition({ opacity: .1, scale: .1}, 1)
		.transition({ opacity: 1, scale: 1.0}, 5000,'ease');

		setTimeout(function(){
		$('#soot-sprites-01')
		.transition({ opacity: .1, scale: .01}, 1)
		.transition({ opacity: 1, scale: 1.0}, 750,'ease');
		}, 52500);

		setTimeout(function(){
		$('#soot-sprites-02')
		.transition({ opacity: .1, scale: .01}, 1)
		.transition({ opacity: 1, scale: 1.0}, 500,'ease');
		}, 52500);

		setTimeout(function(){
		$('#soot-sprites-03')
		.transition({ opacity: .1, scale: .01}, 1)
		.transition({ opacity: 1, scale: 1.0}, 1000,'ease');
		}, 52500);

		setTimeout(function(){
		$('#soot-sprites-04')
		.transition({ opacity: .1, scale: .01}, 1)
		.transition({ opacity: 1, scale: 1.0}, 1500,'ease');
		}, 52500);

		setTimeout(function(){
		$('#soot-sprites-05')
		.transition({ opacity: .1, scale: .01}, 1)
		.transition({ opacity: 1, scale: 1.0}, 1000,'ease');
		}, 52500);

		setTimeout(function(){
		$('#soot-sprites-06')
		.transition({ opacity: .1, scale: .01}, 1)
		.transition({ opacity: 1, scale: 1.0}, 750,'ease');
		}, 52500);

		setTimeout(function(){
		$('#soot-sprites-07')
		.transition({ opacity: .1, scale: .01}, 1)
		.transition({ opacity: 1, scale: 1.0}, 500,'ease');
		}, 52500);

		setTimeout(function(){
		$('#soot-sprites-08')
		.transition({ opacity: .1, scale: .01}, 1)
		.transition({ opacity: 1, scale: 1.0}, 1000,'ease');
		}, 52500);

		setTimeout(function(){
		$('#soot-sprites-09')
		.transition({ opacity: .1, scale: .01}, 1)
		.transition({ opacity: 1, scale: 1.0}, 1500,'ease');
		}, 52500);

		setTimeout(function(){
		$('#soot-sprites-010')
		.transition({ opacity: .1, scale: .01}, 1)
		.transition({ opacity: 1, scale: 1.0}, 1000,'ease');
		}, 52500);

		setTimeout(function(){
		$('#soot-sprites-011')
		.transition({ opacity: .1, scale: .01}, 1)
		.transition({ opacity: 1, scale: 1.0}, 1000,'ease');
		}, 52500);

		setTimeout(function(){
		$('#soot-sprites-012')
		.transition({ opacity: .1, scale: .01}, 1)
		.transition({ opacity: 1, scale: 1.0}, 1000,'ease');
		}, 52500);

		setTimeout(function(){
		$('#soot-sprites-013')
		.transition({ opacity: .1, scale: .01}, 1)
		.transition({ opacity: 1, scale: 1.0}, 1000,'ease');
		}, 52500);

		setTimeout(function(){
		$('#soot-sprites-014')
		.transition({ opacity: .1, scale: .01}, 1)
		.transition({ opacity: 1, scale: 1.0}, 1000,'ease');
		}, 52500);

		setTimeout(function(){
		$('#soot-sprites-015')
		.transition({ opacity: .1, scale: .01}, 1)
		.transition({ opacity: 1, scale: 1.0}, 1000,'ease');
		}, 52500);

		setTimeout(function(){
		$('#soot-sprites-016')
		.transition({ opacity: .1, scale: .01}, 1)
		.transition({ opacity: 1, scale: 1.0}, 300,'ease');
		}, 52500);

		setTimeout(function(){
		$('#soot-sprites-017')
		.transition({ opacity: .1, scale: .01}, 1)
		.transition({ opacity: 1, scale: 1.0}, 100,'ease');
		}, 52500);

		setTimeout(function(){
		$('#soot-sprites-018')
		.transition({ opacity: .1, scale: .01}, 1)
		.transition({ opacity: 1, scale: 1.0}, 200,'ease');
		}, 52500);

		//repeat infinitely
		var loop4 = setInterval(function(){
			$('#big-bang')
			.transition({
				rotate: '+=360deg',
				x: '+=1',
				duration: 35000
			});
			
		}, 50);

		//repeat infinitely
		var loop4 = setInterval(function(){
			$('#big-bang-rotate')
			.transition({
				rotate: '+=-360deg',
				x: '+=0',
				duration: 20000
			});
			
		}, 50);	

		//repeat infinitely
		var loop17 = setInterval(function(){
		$('#big-bang-spots')
		.transition({ opacity: .15, scale:.96}, 4000,'ease')
		.transition({ opacity: .9, scale:1.0}, 4000,'ease');

		}, 200);

		//repeat infinitely
		var loop4 = setInterval(function(){
		$('#big-bang-rays')
		.transition({ opacity: .2}, 6000,'ease')
		.transition({ opacity: .9}, 6000,'ease');
			
		}, 200);

	// HawkRock

		//repeat infinitely
		var loop1 = setInterval(function(){
		$('#hawk')
		.transition({ rotate: '+=30deg', y: -200, x: -500}, 30050,'ease');

		}, 5400);

		//repeat infinitely
		var loop17 = setInterval(function(){
		$('#hawking-smoke-1')
		.transition({ opacity: .7, y: -2}, 100,'ease')
		.transition({ opacity: .9, y: 2}, 100,'ease');

		}, 200);

		var loop17 = setInterval(function(){
		$('#hawking-smoke-2')
		.transition({ opacity: .5, y: -1}, 140,'ease')
		.transition({ opacity: .8, y: 1}, 140,'ease');

		}, 200);

	//Space Dust

		//repeat infinitely
		var loop3 = setInterval(function(){
		$('#foreground-cosmos')
		.transition({ rotate: '+=30deg', y: -200}, 60050,'ease');

		}, 500);

	//Beautiful Baby Blue Blanket Boy

		//repeat infinitely
		var loop4 = setInterval(function(){
			$('#baby-bjorn')
			.transition({ y: -200,
				rotate: '+=30deg',
				x: '+=1',
				duration: 10000
			});
			
		}, 50);

		//repeat infinitely
		var loop4 = setInterval(function(){
			$('#baby')
			.transition({ 
				rotate: '+=-360deg',
				x: '+=1',
				duration: 60000
			});
			
		}, 15000);

		var loop17 = setInterval(function(){
		$('#baby-fore')
		.transition({ opacity: .5, y: -1}, 1400,'ease')
		.transition({ opacity: .8, y: 1}, 1400,'ease');

		}, 400);



		//repeat infinitely
		var loop5 = setInterval(function(){
			$('#tardis')
			.transition({ x: 20, y: 10}, 3000,'ease')
			.transition({ x: 0, y: 15}, 3000,'ease')
			.transition({ x: 10, y: -15}, 3000,'ease')
			.transition({ x: -20, y: 30}, 3000,'ease');
			
		}, 50);

	//FlightONav

		//repeat infinitely
		var loop6 = setInterval(function(){
		$('#flight_of_the_navigator')
		.transition({ y: 2}, 1000,'ease')
		.transition({ y: -2}, 1000,'ease');

		}, 2);

		//repeat infinitely
		var loop8 = setInterval(function(){
		$('#flight_of_the_navigator-go-HAM')
		.transition({ y: -300, x: 1400}, 15000,'ease');

		}, 23000);

	//FireFox

		//repeat infinitely
		var loop7 = setInterval(function(){
		$('#laika')
		.transition({ rotate: '+=5deg', y: -700, x: -400}, 60050,'ease');

		}, 18000);

		//repeat infinitely
		var loop17 = setInterval(function(){
		$('#laika-smoke')
		.transition({ opacity: .7, y: -10, skewX: '6deg'}, 100,'ease')
		.transition({ opacity: .9, y: 10, skewX: '-6deg'}, 100,'ease');

		}, 200);


	//LeftCoast

		//repeat infinitely
		var loop8 = setInterval(function(){
		$('#spacecoaster')
		.transition({ y: -20, x: 1200}, 15000,'ease');

		}, 26000);



		//repeat infinitely
		var loop9 = setInterval(function(){
		$('#carl')
		.transition({ rotate: '+=-20deg', x: '+=1', y: -600,}, 40050,'ease');

		}, 24000);

		var loop17 = setInterval(function(){
		$('#mist-01')
		.transition({ y: -2, skewY: '1deg'}, 2000,'ease')
		.transition({ y: 2, skewY: '-1deg'}, 2000,'ease');

		}, 200);

		var loop17 = setInterval(function(){
		$('#mist-02')
		.transition({ y: -3, skewY: '2deg'}, 2000,'ease')
		.transition({ y: 3, skewY: '-2deg'}, 2000,'ease');

		}, 200);

		var loop17 = setInterval(function(){
		$('#mist-03')
		.transition({ y: -4, skewY: '2deg'}, 2000,'ease')
		.transition({ y: 4, skewY: '-2deg'}, 2000,'ease');

		}, 200);

		var loop17 = setInterval(function(){
		$('#mist-04')
		.transition({ y: -2, skewY: '2deg'}, 2000,'ease')
		.transition({ y: 2, skewY: '-2deg'}, 2000,'ease');

		}, 200);

		var loop17 = setInterval(function(){
		$('#mist-05')
		.transition({ y: -3, skewY: '2deg'}, 2000,'ease')
		.transition({ y: 3, skewY: '-2deg'}, 2000,'ease');

		}, 200);

		var loop17 = setInterval(function(){
		$('#mist-06')
		.transition({ y: -3, skewY: '2deg'}, 2000,'ease')
		.transition({ y: 3, skewY: '-2deg'}, 2000,'ease');

		}, 200);

		//repeat infinitely
		var loop10 = setInterval(function(){
		$('#deathstar')
		.transition({ y: 200}, 100050,'ease');

		}, 14000);


	//G-Zilla

		//repeat infinitely
		var loop11 = setInterval(function(){
		$('#godzilla')
		.transition({ x: -600, y: -1}, 120050,'ease');

		}, 28000);

		var loop11 = setInterval(function(){
		$('#godzilla-monster')
		.transition({ y: 2}, 1000,'ease')
		.transition({ y: -2}, 1000,'ease');

		}, 2);

		var loop17 = setInterval(function(){
		$('#godzilla-flame-01')
		.transition({ opacity: .3, y: -1, skewX: '1deg'}, 100,'ease')
		.transition({ opacity: .9, y: 1, skewX: '-1deg'}, 100,'ease');

		}, 200);

		var loop17 = setInterval(function(){
		$('#godzilla-rawr')
		.transition({ opacity: .001, y: -1, skewX: '-4deg'}, 3000,'ease')
		.transition({ opacity: .9, y: 1, skewX: '4deg'}, 3000,'ease');

		}, 200);


		var loop17 = setInterval(function(){
		$('#godzilla-flame-02')
		.transition({ opacity: .3, y: -1, skewX: '2deg'}, 600,'ease')
		.transition({ opacity: .5, y: 2, skewX: '-2deg'}, 600,'ease');

		}, 200);

		var loop17 = setInterval(function(){
		$('#godzilla-flame-03')
		.transition({ opacity: .2, y: -2, skewX: '3deg'}, 300,'ease')
		.transition({ opacity: .7, y: 1, skewX: '-3deg'}, 300,'ease');

		}, 200);

		//repeat infinitely
		var loop8 = setInterval(function(){
		$('#p-crew')
		.transition({ y: -100, x: 1400}, 30000,'ease');

		}, 36000);

		var loop17 = setInterval(function(){
		$('#neko-blink')
		.transition({ opacity: .001}, 100,'ease')
		.transition({ opacity: .9}, 100,'ease');

		}, 1000);

		var loop17 = setInterval(function(){
		$('#peter-pan-star-1')
		.transition({ opacity: .5}, 1000,'ease')
		.transition({ opacity: .9}, 1000,'ease');

		}, 2000);

		var loop17 = setInterval(function(){
		$('#peter-pan-star-2')
		.transition({ opacity: .4}, 2000,'ease')
		.transition({ opacity: .7}, 2000,'ease');

		}, 3000);

		var loop17 = setInterval(function(){
		$('#peter-pan-star-3')
		.transition({ opacity: .3}, 1500,'ease')
		.transition({ opacity: .6}, 1500,'ease');

		}, 2500);

	// Totoro

		var loop17 = setInterval(function(){
		$('#totoro-blink')
		.transition({ opacity: .001, delay: 4000}, 100,'ease')
		.transition({ opacity: .9}, 100,'ease')
		.transition({ opacity: .001}, 100,'ease')
		.transition({ opacity: .9}, 100,'ease');

		}, 1000);

		var loop11 = setInterval(function(){
		$('#umbrella-moves')
		.transition({ y: 4, delay: 2000}, 1000,'ease')
		.transition({ y: -4}, 1000,'ease');

		}, 2);

		var loop11 = setInterval(function(){
		$('#totoro-umbrella-back')
		.transition({ y: 4, delay: 2000}, 1000,'ease')
		.transition({ y: -4}, 1000,'ease');

		}, 2);


	// Sandoo-doo

		var loop17 = setInterval(function(){
		$('#beetlejuice-sando-1')
		.transition({ y: -8, skewY: '10deg'}, 6000,'ease')
		.transition({ y: 4, skewY: '-10deg'}, 6000,'ease');

		}, 200);

		var loop17 = setInterval(function(){
		$('#beetlejuice-sando-2')
		.transition({ x: -3, skewX: '3deg'}, 5000,'ease')
		.transition({ x: 3, skewX: '-3deg'}, 5000,'ease');

		}, 200);

		var loop17 = setInterval(function(){
		$('#beetlejuice-house')
		.transition({ x: 1}, 5000,'ease')
		.transition({ x: -1}, 5000,'ease');

		}, 200);


		//repeat infinitely
		var loop12 = setInterval(function(){
		$('#midget')
		.transition({ x: 5}, 1000,'ease')
		.transition({ x: -5}, 1000,'ease');

		}, 1000);

		//repeat infinitely
		var loop13 = setInterval(function(){
		$('#laser-bend')
		.transition({ skewY: '1.67deg'}, 50,'ease')
		.transition({ skewY: '-1.67deg'}, 50,'ease');

		}, 50);

		//repeat infinitely
		var loop13 = setInterval(function(){
		$('#laser')
		.transition({ y: 1}, 20,'ease')
		.transition({ y: -1}, 20,'ease');

		}, 40);

		//repeat infinitely
		var loop13 = setInterval(function(){
		$('#slimer')
		.transition({ x: 10, y: 10}, 100,'ease')
		.transition({ x: 0, y: 5}, 100,'ease')
		.transition({ x: 10, y: -5}, 100, 'ease')
		.transition({ x: -10, y: 10}, 100,'ease');

		}, 40);

		//repeat infinitely
		var loop15 = setInterval(function(){
		$('#slimer-hold')
		.transition({ opacity: .5}, 200,'ease')
		.transition({ opacity: 1}, 200,'ease');

		}, 200);

		//repeat infinitely
		var loop14 = setInterval(function(){
		$('#music-notes')
		.transition({ y: 3}, 500,'ease')
		.transition({ y: -3}, 500,'ease');

		}, 1000);

		//repeat infinitely
		var loop15 = setInterval(function(){
		$('#smoke-1')
		.transition({ opacity: .5}, 2000,'ease')
		.transition({ opacity: 1}, 2000,'ease');

		}, 4000);

		//repeat infinitely
		var loop16 = setInterval(function(){
		$('#smoke-2')
		.transition({ opacity: .25}, 1000,'ease')
		.transition({ opacity: .75}, 1000,'ease');

		}, 2000);

		//repeat infinitely
		var loop17 = setInterval(function(){
		$('#smoke-3')
		.transition({ opacity: .15}, 3000,'ease')
		.transition({ opacity: .9}, 3000,'ease');

		}, 6000);

		//repeat infinitely
		var loop18 = setInterval(function(){
		$('#royal-tenenbaums')
		.transition({ x: 1000}, 100050,'ease');

		}, 34000);

		//repeat infinitely
		var loop19 = setInterval(function(){
		$('#raphael-turtle')
		.transition({ x: 1000}, 600050,'ease');

		}, 14000);

		//repeat infinitely
		var loop20 = setInterval(function(){
		$('#kurt-russell')
		.transition({ y: 4}, 500,'ease')
		.transition({ y: -5}, 500,'ease');

		}, 1000);

		//repeat infinitely
		var loop20 = setInterval(function(){
		$('#wave-2')
		.transition({ x: 6}, 1000,'ease')
		.transition({ x: -6}, 1000,'ease');

		}, 2000);

		//repeat infinitely
		var loop20 = setInterval(function(){
		$('#goonies-skull-01')
		.transition({ y: 1}, 1000,'ease')
		.transition({ y: -3}, 1000,'ease');

		}, 2);

		//repeat infinitely
		var loop20 = setInterval(function(){
		$('#goonies-skull-02')
		.transition({ rotate: '+=20deg', x: '+=1', duration: 1000}, 1000,'ease')
		.transition({ rotate: '+=-20deg', x: '+=1', duration: 1000}, 1000,'ease');

		}, 2);

		//repeat infinitely
		var loop20 = setInterval(function(){
		$('#goonies-skull-03')
		.transition({ rotate: '+=-20deg', x: '+=1', duration: 1000}, 1000,'ease')
		.transition({ rotate: '+=20deg', x: '+=1', duration: 1000}, 1000,'ease');

		}, 2);

		//repeat infinitely
		var loop20 = setInterval(function(){
		$('#wave-1')
		.transition({ y: 3}, 1500,'ease')
		.transition({ y: -3}, 1500,'ease');

		}, 3000);

	//InDaClub	

		//repeat infinitely
		var loop17 = setInterval(function(){
		$('#club-spotlight')
		.transition({ opacity: .15}, 10,'ease')
		.transition({ opacity: .9}, 10,'ease');

		}, 200);

		//repeat infinitely
		var loop17 = setInterval(function(){
		$('#spotlight-01')
		.transition({ opacity: .15}, 100,'ease')
		.transition({ opacity: .9}, 100,'ease');

		}, 200);

		//repeat infinitely
		var loop17 = setInterval(function(){
		$('#spotlight-02')
		.transition({ opacity: .1}, 200,'ease')
		.transition({ opacity: .8}, 200,'ease');

		}, 200);

		//repeat infinitely
		var loop17 = setInterval(function(){
		$('#spotlight-03')
		.transition({ opacity: .2}, 150,'ease')
		.transition({ opacity: .7}, 150,'ease');

		}, 200);

		//repeat infinitely
		var loop17 = setInterval(function(){
		$('#spotlight-04')
		.transition({ opacity: .3}, 225,'ease')
		.transition({ opacity: .9}, 225,'ease');

		}, 200);

		var loop17 = setInterval(function(){
		$('#jimjar-smoke')
		.transition({ opacity: .001, y: -1, skewX: '-4deg'}, 1000,'ease')
		.transition({ opacity: .9, y: 1, skewX: '4deg'}, 1000,'ease');

		}, 200);

	//Bromantics

		//repeat infinitely
		var loop12 = setInterval(function(){
		$('#newrom-1')
		.transition({ x: 5}, 1000,'ease')
		.transition({ x: -5}, 1000,'ease');

		}, 1000);

		var loop12 = setInterval(function(){
		$('#newrom1-head')
		.transition({ y: 1}, 500,'ease')
		.transition({ y: -1}, 500,'ease');

		}, 1000);

		var loop12 = setInterval(function(){
		$('#newrom1-body')
		.transition({ perspective: '0px', rotateY: '-180deg', delay: 2000}, 225,'ease')
		.transition({ perspective: '0px', rotateY: '180deg', delay: 1500}, 550,'ease');

		}, 1000);

		//repeat infinitely
		var loop12 = setInterval(function(){
		$('#newrom-2')
		.transition({ x: 2}, 500,'ease')
		.transition({ x: -2}, 500,'ease');

		}, 1000);

		// var loop12 = setInterval(function(){
		// $('#newrom2-arms')
		// .transition({ perspective: '0px', rotateY: '-180deg', delay: 1000}, 200,'ease')
		// .transition({ perspective: '0px', rotateY: '180deg', delay: 500}, 120,'ease');

		// }, 1000);

		var loop12 = setInterval(function(){
		$('#newrom2-body')
		.transition({ perspective: '0px', rotateY: '-180deg', delay: 2245}, 405,'ease')
		.transition({ perspective: '0px', rotateY: '180deg', delay: 1259}, 628,'ease');

		}, 1000);

		//repeat infinitely
		var loop12 = setInterval(function(){
		$('#newrom-3')
		.transition({ x: 9}, 1300,'ease')
		.transition({ x: -9}, 1300,'ease');

		}, 2600);

		var loop12 = setInterval(function(){
		$('#newrom3-head')
		.transition({ y: 1}, 500,'ease')
		.transition({ y: -1}, 500,'ease');

		}, 1000);

		var loop12 = setInterval(function(){
		$('#newrom3-body')
		.transition({ perspective: '0px', rotateY: '-180deg', delay: 1200}, 225,'ease')
		.transition({ perspective: '0px', rotateY: '180deg', delay: 4000}, 550,'ease');

		}, 1000);

	//Nomadic Mancers

		//repeat infinitely
		var loop12 = setInterval(function(){
		$('#nomidancerman')
		.transition({ x: 3}, 1300,'ease')
		.transition({ x: -3}, 1300,'ease');

		}, 2600);

		//repeat infinitely
		var loop12 = setInterval(function(){
		$('#nomidancerman-arms')
		.transition({ y: 3}, 200,'ease')
		.transition({ y: -3}, 200,'ease');

		}, 3);

		var loop12 = setInterval(function(){
		$('#nomidancerman-head')
		.transition({ perspective: '0px', rotateY: '-180deg', delay: 2000}, 225,'ease')
		.transition({ perspective: '0px', rotateY: '180deg', delay: 3000}, 550,'ease');
		}, 1000);

		//repeat infinitely
		var loop12 = setInterval(function(){
		$('#nomidancerwoman')
		.transition({ x: 1}, 400,'ease')
		.transition({ x: -1}, 400,'ease');

		}, 800);

		//repeat infinitely
		var loop12 = setInterval(function(){
		$('#nomidancerwoman-arms')
		.transition({ y: 2}, 200,'ease')
		.transition({ y: -2}, 200,'ease');

		}, 3);

		var loop12 = setInterval(function(){
		$('#nomidancerwoman-head')
		.transition({ perspective: '0px', rotateY: '-180deg', delay: 2000}, 225,'ease')
		.transition({ perspective: '0px', rotateY: '180deg', delay: 3000}, 550,'ease');
		}, 1000);

		//repeat infinitely
		var loop7 = setInterval(function(){
		$('#ishtar')
		.transition({
				rotate: '+=360deg',
				x: '+=1',
				duration: 40000
			});

		}, 2000);

		//repeat infinitely
		var loop7 = setInterval(function(){
		$('#moleman-arm')
		.transition({ y: 6}, 200,'ease')
		.transition({ delay: 1000, y: -6}, 200,'ease');

		}, 3);

		//repeat infinitely
		var loop13 = setInterval(function(){
		$('#mosquito')
		.transition({ x: 5, y: 5}, 100,'ease')
		.transition({ x: 0, y: 5}, 100,'ease')
		.transition({ x: 10, y: -5}, 100, 'ease')
		.transition({ x: -5, y: 5}, 100,'ease');

		}, 40);

		//repeat infinitely
		var loop17 = setInterval(function(){
		$('#night-of-the-comet-blood')
		.transition({ opacity: .35}, 50,'ease')
		.transition({ opacity: .85}, 50,'ease');

		}, 500);

		//repeat infinitely
		var loop17 = setInterval(function(){
		$('#night-of-the-comet-bullet-time')
		.transition({ x: 40}, 50,'ease')
		.transition({ opacity: .001}, 50,'ease');

		}, 5);

		//repeat infinitely
		var loop17 = setInterval(function(){
		$('#night-of-the-comet-bullet-time')
		.transition({ x: -10}, 50,'ease')
		.transition({ opacity: 1}, 50,'ease');

		}, 5);

		//repeat infinitely
		var loop13 = setInterval(function(){
		$('#night-of-the-comet-girl')
		.transition({ x: 4, y: 1}, 100,'ease')
		.transition({ x: 0, y: 1}, 100,'ease')
		.transition({ x: 4, y: -1}, 100, 'ease')
		.transition({ x: -2, y: 1}, 100,'ease');

		}, 40);

		//repeat infinitely
		var loop20 = setInterval(function(){
		$('#evil-dead-chainsaw')
		.transition({ y: 6, x: 4}, 900,'ease')
		.transition({ y: -6, x: -4}, 900,'ease');

		}, 3000);

		//repeat infinitely
		var loop17 = setInterval(function(){
		$('#evil-dead-05')
		.transition({ opacity: .15}, 200,'ease')
		.transition({ opacity: .9}, 200,'ease');

		}, 500);

		//repeat infinitely
		var loop14 = setInterval(function(){
		$('#BFF')
		.transition({ y: 5}, 500,'ease')
		.transition({ y: -5}, 500,'ease');

		}, 1000);

		//repeat infinitely
		var loop17 = setInterval(function(){
		$('#bender-blink')
		.transition({ opacity: .15}, 1000,'ease')
		.transition({ opacity: .9}, 1000,'ease');

		}, 2000);

		//repeat infinitely
		var loop20 = setInterval(function(){
		$('#underwater-wave')
		.transition({ y: 8}, 1500,'ease')
		.transition({ y: -8}, 1500,'ease');

		}, 3000);

		//repeat infinitely
		var loop20 = setInterval(function(){
		$('#submarine')
		.transition({ y: 8}, 1500,'ease')
		.transition({ y: -8}, 1500,'ease');

		}, 3000);

		//repeat infinitely
		var loop20 = setInterval(function(){
		$('#belafonte-moove')
		.transition({ x: -1200}, 65000,'ease');

		}, 88000);

		var loop17 = setInterval(function(){
		$('#belafonte-light')
		.transition({ opacity: .001, delay: 4000}, 100,'ease')
		.transition({ opacity: .9}, 100,'ease')
		.transition({ opacity: .001}, 100,'ease')
		.transition({ opacity: .9}, 100,'ease');

		}, 90000);

		//repeat infinitely
		var loop20 = setInterval(function(){
		$('#sharkmaid-lochness')
		.transition({ y: 8}, 1500,'ease')
		.transition({ y: -8}, 1500,'ease');

		}, 3000);

		//repeat infinitely
		var loop20 = setInterval(function(){
		$('#sharmoove')
		.transition({ x: -2000}, 140000,'ease');

		}, 78000);

		//repeat infinitely
		var loop20 = setInterval(function(){
		$('#wave-moove')
		.transition({ x: -1000}, 240000,'ease');

		}, 88000);

		//repeat infinitely
		var loop14 = setInterval(function(){
		$('#rainbow-seahorse')
		.transition({ x: -500}, 65000,'ease')

		}, 88000);

		//repeat infinitely
		var loop17 = setInterval(function(){
		$('#nothing-to-see-here-02')
		.transition({ opacity: .01}, 1,'ease')
		.transition({ opacity: 1}, 5000,'ease');

		}, 97500);

		//repeat infinitely
		var loop10 = setInterval(function(){
		$('#little-mermaid')
		.transition({ y: 400, x:20}, 80050,'ease');

		}, 90000);

		//repeat infinitely
		var loop10 = setInterval(function(){
		$('#creatureFTBL')
		.transition({ x: 1500, y:300}, 50050,'ease');

		}, 95000);




	}, 100);//start all the animation after .1 seconds
})(jQuery);