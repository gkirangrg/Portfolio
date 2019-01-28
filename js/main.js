var pages = 0;
var page = 1;
var marginLeft = 0;

function previousPage() {
	if (page>1) {
		oldMargin = marginLeft;
		marginLeft = marginLeft + 930;
		$('.thumbnails ul')
			.animate({left: marginLeft + 'px'}, 1500);
		page--;
	} else {
		page = pages;
		marginLeft = 0 - ((pages-1)*930);
		oldMargin = 0 - ((pages-2)*930);
		$('.thumbnails ul')
			.animate({left: marginLeft + 'px'}, 2000);
	}
}

function nextPage() {
	if (page<pages) {
		oldMargin = marginLeft;
		marginLeft = marginLeft - 930;
		$('.thumbnails ul')
			.animate({left: marginLeft + 'px'}, 1500);
		page++;
	} else {
		page = 1;
		marginLeft = 0;
		oldMargin = 0;
		$('.thumbnails ul')
			.animate({left: '0px'}, 2000);
	}
}

$(function() {
		
		$('.half ul li:nth-child(even)').css('background-color', '#E9E9E9');
		
		photoCount = $('.thumbnails ul li').size() - 1;
		pages = Math.ceil(photoCount/3);
		
		$('.prev').click(function() {
				previousPage();
				return false; 
			});
		$('.next').click(function() {
				nextPage();
				return false; 
			});
		
	});
