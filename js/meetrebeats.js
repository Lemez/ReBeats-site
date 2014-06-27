$(document).ready(function() {


//						*********** NAV ANIMATIONS ************		

	$('nav a').click(function () { 

		var sectionId = '#' + $(this).attr('title');

		$('html, body').animate({ 

			scrollTop: $('article').find(sectionId).offset().top 

								}, 750); 
	});



//						 *********** PARALLAX SCROLL HEADER  ************

		// Enable parallax scrollTop to fire
		$(document).trigger("scroll");

		$(document).on('scroll', function () {

//  scrollTop is a variable that shows us how far down the page we are in pixels
		var yAxis = $(document).scrollTop();
		var headerClass = $('header').attr('class');
		

		// the height of the #showcase image divided by 1.5 to make the fade quicker
		var image_height = 420/1.5;

		// value to control opacity
		var opacity = (image_height-yAxis)/image_height;

		// fade the header as you scroll down
		$('header').css("opacity", (image_height-yAxis)/image_height);

		// remove header bar if opacity less than zero
		if (opacity < 0) {
			$('header').addClass('make-header-disappear');
		} else {
			$('header').removeClass('make-header-disappear');
		}

	});
// End of Parallax


//						 *********** MANIFESTO ACCORDION ************

	$('ul li a').click(function () { 
		$(this).find('p')
				.slideToggle(500);
		$(this).parent().siblings('li').find('a p')
				.slideToggle(500);

		$(document).find('#manifesto-instructions')
				.fadeOut(500);

// move scroll to top of manifesto
		$('html, body').animate({ 

			scrollTop: $('#manifesto').offset().top 

								}, 500); 

		return false;
		
	});

	//						 *********** MOUSEOVER COMMUNITY ************

	$('#students, #teachers, #supporters, #freematerials').on('mouseover', function() {  

		var communityType = $(this).attr('id') + '_label';

		$('body')
				.find('#' + communityType)
				.css("visibility", "visible")
				.addClass('transform')
				.removeClass('hidden');

	});

	$('#students, #teachers, #supporters, #freematerials').on('mouseleave', function() {   
		
		$('#community_labels').find("div.col")
				.css("visibility", "hidden");
		
	});
// End of Mouseover Community


//						 *********** LIGHTBOX - COMMUNITY ************

	// when we click on any column in community
	$('#community div.col').on('click', function () {

		// move scroll to top of team
		$('html, body').animate({ 

			scrollTop: $('#community').offset().top 

								}, 500); 

		// show the lightbox and make it fade in over 500 ms
		$('.lightbox').fadeIn(500);

		var imagesList = {
			'teachers' : 'teacher2.svg',
			'students' : 'student.svg',
			'supporters' : 'community2.svg',
			'freematerials' : 'materials.svg'		
		};

			// save the value of the attributes within the <img> tag to a variable
			var type = $(this).attr('id');
			var image_src = imagesList[type];
			var typeText = $(document).find('#' + type + '_label').text();
			var credit = $(this).find('h6').text();


			// clean the html from previous clicks on team
			$('.lightbox #biography').html('<p></p>').css("display", "none");
			$('.lightbox #carousel').css("display", "none");
			$('.lightbox #about').html('<ul></ul>').css("display", "block");

			// loop through the <li> elements and add each one to the html
			var about = $(this).find('li');

			if (about.length > 0) {

				about.each(function() {
					$('.lightbox #about ul' ).append('<li>' + $(this).text() + '</li>');
				});
			}


		//  then replace the lightbox html with that of the specific image
				$('.lightbox #pic').html(' <img src="images/' + image_src + '"/>')
									.find("img").css("border-radius", "0");
				$('.lightbox #pic img').css("width", "300px");
				$('.lightbox #descriptor').html('<h3>' + typeText + '</h3>');
				$('.lightbox #credit').html('<h6> Icon credit: ' + credit + '</h6>');	

		});

		 // then fade it out as when you click anywhere on the lightbox
		$('#close a').on('click', function () {

			$('.lightbox').fadeOut(250);
	});
// End of Lightbox Community

//						 *********** MOUSEOVER TEAM ************

	$('#team img').on('mouseover', function() {  
		$(this).css("opacity", "1");

		$(this).siblings("div.details")
				.find("h3, h4, a")
				.addClass("team-image-hover")
				.css("opacity", "1");
	});

	$('#team img').on('mouseleave', function() {   

		$(this).css("opacity", "0.5");

		$(this).siblings("div.details")
				.find("h3, h4, a")
				.removeClass("team-image-hover")
				.css("opacity", "0.6");
	});
// End of Mouseover Team


//						 *********** LIGHTBOX - TEAM ************

		// when we click on any image
	$('#team img').on('click', function () {

		// move scroll to top of team
		$('html, body').animate({ 

			scrollTop: $('#team').offset().top 

								}, 500); 

		// show the lightbox and make it fade in over 500 ms
		$('.lightbox').fadeIn(500);

		// save the value of the attributes within the <img> tag to a variable
		var image_src = $(this).attr('src');
		var image_class = $(this).closest('div').attr('class');
		var name = $(this).siblings("div").find('h3').text();
		var job = $(this).siblings("div").find('h4').contents().eq(0).text();
		var biog = $(this).siblings("div").find('p').text();

		// clean the html from previous clicks on team
		$('.lightbox #biography').html('<p></p>').css("display", "block");
		$('.lightbox #about').html('<ul></ul>').css("display", "none");
		$('.lightbox #carousel').html('').css("display", "block");

		//  arrange pics on a carousel inside lightbox
		$('div#pics img').each (function () {
			$('.lightbox #carousel').append('<a href="#"><img src="' + $(this).attr('src') + '"/></a>');	
		});

		//  then replace the lightbox html with that of the specific image
		$('.lightbox #pic').html(' <img src="' + image_src + '" />');
		$('.lightbox #descriptor').html('<h3>' + name + '</h3><h4>' + job + '</h4>');
		$('.lightbox #biography').html("<p>" + biog + "</p>");	
		
	});

		 //  fade it out when you click to close
	$('#close a').on('click', function () {

			$('.lightbox').fadeOut(250);
			return false;
	});

//  end of LIGHTBOX - TEAM 

//						*********** MOUSEOVER TEAM IN THE LIGHTBOX ************

	$('#carousel a img').on('mouseover', function() {  
		$(this).css("opacity", "1");
		alert("entered!");
	});

	$('#carousel a img').on('mouseleave', function() {   
		$(this).css("opacity", "0.5");
		alert("bye!");
	});
// End of Mouseover Team in the Lightbox





//						 *********** ISOTOPE ************
// Isotope currently removed (and also script not loaded in html) as it fucks w the position and float

	var team = $('#team .content .col')
	// 									.isotope();

	$('div.buttons a').on('click', function () {
	
		$(this).toggleClass("team-filter-pressed")
				.siblings("a").removeClass("team-filter-pressed");
				// alert(team.eq(0).eq(0).getNodename);

		team.isotope({

			filter: "div." + $(this).attr("class")
		});	
		return false;
	});

	$('#team h1 a').on('click', function () {

		team.isotope({

				filter: "*"       // * means everything in CSS
		});

			//  stop the page from reloading
			return false;
	});
// END of Isotope


});