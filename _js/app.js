(function ($, window, document, undefined) {

'use strict';

$(function () {

  // -----------------------------------------------------------------------------
  // START DOCUMENTATION JS
  // -----------------------------------------------------------------------------
  // -----------------------------------------------------------------------------
  // Documenation Maker Magic
  // -----------------------------------------------------------------------------
  function slugify(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }

  function makeDocSource() {
    // find all .doc-wrap items
    var documentationWrappers = $('.doc-wrap');

    documentationWrappers.each(function(index, el) {
      // get contents & str replace < and > so it don't render
      var documentContent = el.innerHTML.replace(/[<>]/g, function(m) { return {'<':'&lt;','>':'&gt;'}[m]})
      
      // append .doc-source after .doc-wrap with cloned contents
      $(el).append('<div class="container"><button class="btn btn-xs btn-hollow-default doc-toggle" data-toggle="' + index + '">Toggle Source</button><pre class="doc-source hidden" data-toggle="' + index + '"><code>' + documentContent + '</code></pre></div>');
    });

    //get all the fresh new doc-toggles
    var documentationToggleButtons = $('.doc-toggle');

    documentationToggleButtons.each(function(index, el) {
      $(el).on('click', function(event) {
        event.preventDefault();
        var toggleItemIndex = $(this).attr('data-toggle'); // get index of item
        $('.doc-source[data-toggle=' + toggleItemIndex + ']').toggleClass('hidden'); // toggle its matching pre
      }); 
    });
  }

  function makeDocTOC() {
    var dropDown = $("#doc-subnav");
    var componentDropdown = $("#doc-subnav-list");
    var documentationLabels = $('.doc-label'); // find all doc-labels

    if(documentationLabels.length > 0) {
      dropDown.removeClass('hidden');
    }

    documentationLabels.each(function(index, el) {
      var labelContent = el.innerHTML;
      var labelSlug = slugify(labelContent) + "-" + index; // create a unique id for each
      $(el).attr('id', labelSlug); // append href to el

      var listElement = '<li><a href="#' + labelSlug + '">' + labelContent + '</a></li>';
      componentDropdown.append(listElement); // add a nav item to the drop down
    });
  }
  
  makeDocTOC();
  makeDocSource();
  // -----------------------------------------------------------------------------
  // END DOCUMENTATION JS
  // -----------------------------------------------------------------------------

  var isPhonelike = $(window).width() < 768 ? true : false;
  $( window ).resize(function() {
    isPhonelike = $(this).width() < 768 ? true : false;
  });

  // -----------------------------------------------------------------------------
  // Prevent Widows in Paragraphs
  // -----------------------------------------------------------------------------
  $('.no-widow').each(function(){
    var replace_str = '&nbsp;'
    
    // use this to help troublshoot
    //var replace_str = '<mark>&nbsp;</mark>'
    
    var string = $(this).html();
    // drop trailing whitespace
    string = string.trim(); 

    // add a non-breaking space between last 2 words 
    string = string.replace(/\s([\w]+[.,!\:;\\"-?]{0,1})$/,replace_str + '$1');
    $(this).html(string);
  });

  
  // -----------------------------------------------------------------------------
  // Scrolly stuff
  // -----------------------------------------------------------------------------
  var stickyNav = document.querySelector(".navbar-sticky");
  var stickyNavExists = stickyNav != null ? true : false;

  if(stickyNavExists) {
    cloneStickyEl();
    offsetScroll();
  }

  function offsetScroll() {
    // check for mobile width (menu is non-sticky under 768px)
    var screenWidth = document.body.clientWidth;
    var subnavHeight = 0;
    if(screenWidth > 768) {
      subnavHeight = $('.navbar-sticky').height() * 1.2;
    }

    // local scroll
    $.localScroll({
      duration: 300,
      easing: 'swing',
      offset: {top: -subnavHeight, left:0 }
    });
  }

  function cloneStickyEl() {
    // trick to get responsive menu with a fixed position without having to calculate page offsets
    // simply clone the sticky element and place it overtop the source element
    // page will respond to changes in layout of source element while
    // visible element gets to be fixed
    var stickyNavData = $(stickyNav).clone()[0];
    var stickyNavClone = document.createElement("div");
    stickyNavClone.setAttribute("class", "subMenuClone hidden-xs");
    stickyNavClone.appendChild(stickyNavData); 
    $(stickyNavClone).appendTo( "body" );
    
    // yank duplicate ids after the clone
    var stickyNavCloneToggle = stickyNavData.querySelectorAll('.subMenuClone #nav-toggle')[0];
    stickyNavCloneToggle.setAttribute("id", "");

    // add id to make scrollspy work
    var stickyNavCloneSubnav = stickyNavData.querySelectorAll('.subMenuClone .subnav-scrollspy')[0];
    stickyNavCloneSubnav.setAttribute("id", "subNav");

    stickyNav.style.opacity = 0;
  }

  // -----------------------------------------------------------------------------
  // play gifs with ScrollMagic
  // -----------------------------------------------------------------------------
  // gif image needs .gify class to work 

  function gifPlay(elem) {
    // console.log(elem);
    var imgSrc = elem.getAttribute("src");
    elem.setAttribute("src", imgSrc);
  }

  // init controller
  var controller = new ScrollMagic.Controller();
  // build scene
  var scene;
  $(".gify").each(function(){
    scene = new ScrollMagic.Scene({triggerElement: this, triggerHook: .5})
                  .addTo(controller);
    var elem = this;
    scene.on("enter", function (event) {
        // console.log("Scene entered.");
        gifPlay(elem);
    });
  });

  // -----------------------------------------------------------------------------
  // play gifs on hover
  // -----------------------------------------------------------------------------
  // hover container activator needs .gify-hover class
  // gif img needs .gify-hover-img class

  $(".gify-hover").each(function(){
    var img = $(this).find('.gify-hover-img:first')[0];
    // console.log(img);
    this.addEventListener("mouseenter", function(){
      gifPlay(img);
    });
  });

  // -----------------------------------------------------------------------------
  // Tooltips
  // uses Bootstraps tooltips. They don't initialize automatically so we have to do it here
  // -----------------------------------------------------------------------------
  $('[data-toggle="tooltip"]').tooltip();


  // -----------------------------------------------------------------------------
  // copy & paste
  // -----------------------------------------------------------------------------
  var swatches = document.querySelectorAll('.color-swatches li'), i;

  for (i = 0; i < swatches.length; ++i) {
    swatches[i].addEventListener('click', copyToClipboard, true); 
  }

  function copyToClipboard(e) {
    // Select the swatch p text   
    var text = e.target.querySelector('p');

    var range = document.createRange();  
    range.selectNode(text);  
    window.getSelection().addRange(range);  

    try {  
      // Now that we've selected the anchor text, execute the copy command  
      var successful = document.execCommand('copy');  
      var msg = successful ? 'successful' : 'unsuccessful';  
      console.log('Copy text command was ' + msg);  
    } catch(err) {  
      console.log('Oops, unable to copy');  
    }  

    // Remove the selections - NOTE: Should use
    // removeRange(range) when it is supported  
    window.getSelection().removeAllRanges();  
  }



});

})(jQuery, window, document);