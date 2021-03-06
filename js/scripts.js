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

     /*================================================*
      * Animation.
      *================================================*/
     $( "#demo-animations" ).find( ".demo-col" ).on( "click", function() {
        var $this = $( this );

        $this.addClass( "animated " +$this.text());
     } )

     /*================================================*
      * Tabs.
      *================================================*/

     $( ".tabs-links a" ).on( "click", function ( e ) {
        e.preventDefault();

        // Get the target tab
        var newTab = $( this ).attr( "href" );

        // Show the targeted tab content while hiding the rest
        $( newTab ).show().siblings().hide();

        // Add the active class to the parent list item while removing it from the rest.
        $( this ).parent( "li" ).addClass( "active" ).siblings().removeClass( "active" );
       } );

     /*================================================*
      * Accordions.
      *================================================*/
     
     $( ".accordion-element-title" ).on( "click", function(e) {
        e.preventDefault;
        
        // Get the target Accordion
        var targetAccordion = $( this ).attr( "href" );

        // Collapse all accordion elements.
        $( ".accordion-element-title" ).removeClass( "active" );
        $( ".accordion-element-content" ).hide();

        // Show the targeted element only.
        $( this ).addClass( "active" );
        $( targetAccordion ).show();

     }); 
} );