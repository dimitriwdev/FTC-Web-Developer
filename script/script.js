console.log('Script file loaded.');

$(document).ready(function(){

  console.log('HTML file loaded and parsed.');
  
  addMyEventListener()

});

function addMyEventListener(){

    // Navigation
    $('#menu-icon').click(function(){
        $('nav').css("display", "block");
            if ($('nav').css("display", "block")){
                $('#cross').click(function(){
                    $('nav').css("display", "none");   // if nav is shown, clicking the cross will hide the navigation
                });
                $('.navlink').click(function(){
                    $('nav').css("display", "none");   // if nav is shown, clicking a link will hide the navigation
                });
                $('nav').click(function(){
                    $('nav').css("display", "none");   // if nav is shown, clicking the nav container itself will hide the navigation
                });
            }
    });



    // extra content toggle
    $('.hidden').hide(); // hidden by default

    $('.extra-content').click(function(){
        $(this).next('p').toggle();      
     });



    // toggle map

    $('#map').hide(); // hidden by default
    $('#map-button').click(function(){
        $('#map').toggle();                   // toogle the map
        if($('#map-button').html() === 'Display the map'){   // change html content
            $('#map-button').html('Hide the map');    
        } else {
            $('#map-button').html('Display the map');
        }
     });




     // footer icons on focus state


    $('#font-icon-f').focusin(function(){ 
            $('.fab').css('color', 'black');            
    });

    $('#font-icon-f').focusout(function(){ 
        $('.fab').css('color', 'rgb(251,251,251)');
    });



    $('#font-icon-c').focusin(function(){ 
        $('.fas').css('color', 'black');            
    });

    $('#font-icon-c').focusout(function(){ 
        $('.fas').css('color', 'rgb(251,251,251)');
    });


};