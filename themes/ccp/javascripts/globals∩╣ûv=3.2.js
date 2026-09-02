if (!Omeka) {
  var Omeka = {};
}

(function ($) {
 
  Omeka.dropDown = function(){
    var defaultNav = $('#default-nav');
    var menuToggle = $('button.menu-toggle');
    menuToggle.click(function () {
      defaultNav.slideToggle();
    });
  };
  
  Omeka.toggleSearchShortcode = function() {
    var searchForm = $('#search-filter-form-shortcode');
    var searchToggle = $('#toggle-search');
    searchToggle.click(function () {
      searchForm.slideToggle();
    });
  };
  
})(jQuery);

