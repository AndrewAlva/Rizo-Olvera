jQuery(document).ready(function($) {
	// REMOVE LOADER
	$('#loaderRO').addClass('crystalModal');
	setTimeout(function(){
		$('#loaderRO').remove();
	},800);
	// OPEN PROJECTS CAROUSEL INTERACTION

		// VARS OF PROJECTS COUNT
		var leftArrowCount = 0;
		var rightArrowCount = 0;
		var projectsAreOpened;

		// DIFFERENT PROJECTS OPENING
		$('.proName').click(function() {
			projectsAreOpened = true;
			cleanDivs();
			openCarousel();
			
			$('.proPic').addClass( $(this).attr('imgSize') + 'Pic' );
			$('#projectImg').attr('src', ('img/projects/full/' + $(this).attr('imgSrc') + '.jpg' ) );
			$('#projectImg').attr('alt', $(this).attr('proName') );
			$('#projectImg').attr('title', $(this).attr('proName') );
			$('#currentProject').append($(this).attr('proName'));

			leftArrowCount = $(this).attr('backCount');
			rightArrowCount = $(this).attr('nextCount');

			if (leftArrowCount == 6 && rightArrowCount == 8) {
				$('.projectHolder').addClass('vertProject');
			};
		});

		// GO NEXT PROJECT
		$('.backArrow').click(function() {
			goBackProject();
		});
		$(document).keyup(function(e) {
			if (e.keyCode === 37 && projectsAreOpened) {
				goBackProject();
			};
		});


		// GO BACK PROJECT
		$('.nextArrow').click(function() {
			goNextProject();
		});
		$(document).keyup(function(e) {
			if (e.keyCode === 39 && projectsAreOpened) {
				goNextProject();
			};
		});


		// CLOSE CAROUSEL
		$('#closeProjectModal').click(function() {
			closeCarousel();
			projectsAreOpened = false;
		});

		$(document).keyup(function(e) {
			if (e.keyCode === 27 && projectsAreOpened) {
				closeCarousel();
				projectsAreOpened = false;
			};
		});



		// FUNCTIONS OPEN / CLOSE
			function cleanDivs(){
				$('.proPic').removeClass('smPic');
				$('.proPic').removeClass('mdPic');
				$('.proPic').removeClass('lgPic');
				$('#currentProject').empty();
			}
			function openCarousel(){
				$('#innerWrap').addClass('crystalModal');

				setTimeout(function(){
					$('#openedProjects').removeClass('hiddenModal');

					setTimeout(function(){
						$('#openedProjects').removeClass('crystalModal');
					},100);
				},400);


				$.each($('.pmeIntro'), function(index, val) {
					setTimeout(function(){
						$(val).removeClass('crystalModal');
					},(index * 200));
				});
			}
			function closeCarousel(){
				$('.projectHolder').removeClass('vertProject');
				$('#openedProjects').addClass('crystalModal');

				setTimeout(function(){
					$('#innerWrap').removeClass('crystalModal');

					setTimeout(function(){
						$('#openedProjects').addClass('hiddenModal');
					},100);
				},400);


				$.each($('.pmeIntro'), function(index, val) {
					setTimeout(function(){
						$(val).addClass('crystalModal');
					},(index * 100));
				});
			}

			function showThisProject(whichProject){
				$('.nowProject').addClass('fadeChange');

				setTimeout(function(){
					cleanDivs();
					$('.nowProject').removeClass('fadeChange');
					$('.proPic').addClass( whichProject.attr('imgSize') + 'Pic' );
					$('#projectImg').attr('src', ('img/projects/full/' + whichProject.attr('imgSrc') + '.jpg' ) );
					$('#projectImg').attr('alt', whichProject.attr('proName') );
					$('#projectImg').attr('title', whichProject.attr('proName') );
					$('#currentProject').append(whichProject.attr('proName'));

					leftArrowCount = whichProject.attr('backCount');
					rightArrowCount = whichProject.attr('nextCount');
				},450);
			}

			function goBackProject(){
				if (leftArrowCount == 1) {
					showThisProject($('#openPro_1'));
				} else if (leftArrowCount == 2) {
					showThisProject($('#openPro_2'));
				}
				else if (leftArrowCount == 3) {
					showThisProject($('#openPro_3'));
				}
				else if (leftArrowCount == 4) {
					showThisProject($('#openPro_4'));
				}
				else if (leftArrowCount == 5) {
					showThisProject($('#openPro_5'));
				}
				else if (leftArrowCount == 6) {
					showThisProject($('#openPro_6'));
					$('.projectHolder').removeClass('vertProject');
				}
				else if (leftArrowCount == 7) {
					showThisProject($('#openPro_7'));
					$('.projectHolder').addClass('vertProject');
				}
				else if (leftArrowCount == 8) {
					showThisProject($('#openPro_8'));
				}
				else if (leftArrowCount == 9) {
					showThisProject($('#openPro_9'));
				}
				else if (leftArrowCount == 10) {
					showThisProject($('#openPro_10'));
				}
				else if (leftArrowCount == 11) {
					showThisProject($('#openPro_11'));
				}
				else if (leftArrowCount == 12) {
					showThisProject($('#openPro_12'));
				};
			}
			function goNextProject(){
				if (rightArrowCount == 1) {
					showThisProject($('#openPro_1'));
				} else if (rightArrowCount == 2) {
					showThisProject($('#openPro_2'));
				}
				else if (rightArrowCount == 3) {
					showThisProject($('#openPro_3'));
				}
				else if (rightArrowCount == 4) {
					showThisProject($('#openPro_4'));
				}
				else if (rightArrowCount == 5) {
					showThisProject($('#openPro_5'));
				}
				else if (rightArrowCount == 6) {
					showThisProject($('#openPro_6'));
				}
				else if (rightArrowCount == 7) {
					showThisProject($('#openPro_7'));
					$('.projectHolder').addClass('vertProject');
				}
				else if (rightArrowCount == 8) {
					showThisProject($('#openPro_8'));
					$('.projectHolder').removeClass('vertProject');
				}
				else if (rightArrowCount == 9) {
					showThisProject($('#openPro_9'));
				}
				else if (rightArrowCount == 10) {
					showThisProject($('#openPro_10'));
				}
				else if (rightArrowCount == 11) {
					showThisProject($('#openPro_11'));
				}
				else if (rightArrowCount == 12) {
					showThisProject($('#openPro_12'));
				};
			}
		// END FUNCTIONS


	// END CAROUSEL INTERACTION
});