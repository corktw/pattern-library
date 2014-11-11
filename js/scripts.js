$( function () {
    /*================================================*
     * Main menu.
     *================================================*/

    var mainMenu = $( ".sf-menu" );

    /*================================================*
     * Create the responsive menu by cloning  the existing one.
        clone
        remove all classes
        add new classes
     *================================================*/
    
    mainMenu.clone().removeClass().addClass( "rwd-menu" ).prependTo ( ".navbar-container nav" );

    /*================================================*
     * Initailize the superfish menu.
     *================================================*/

     mainMenu.superfish();

     /*================================================*
      * Toggle the responsive menu.
      *================================================*/
     
     $( "#rwd-trigger" ).on( "click", function( e ) {
        e.preventDefault();//prevent any unexpected behaviour

        $( ".rwd-menu" ).slideToggle();
     } );
    
} );