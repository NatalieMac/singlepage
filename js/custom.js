jQuery(function() {
  singlePage.links();
  singlePage.hashchange();
});

singlePage = {
  siteURL: 'http://localhost/singlepage',
  navLinks: jQuery('#site-navigation a'),

  links: function() {
    singlePage.navLinks.each(function() {
      var link = jQuery(this);
      var href = link.attr('href');
      href = href.replace(singlePage.siteURL, '');
      link.attr('href',  '#' + href);
    });
  },

  hashchange: function() {
    jQuery(window).bind('hashchange', function(e) {
      jQuery('#site-navigation li').removeClass('current-menu-item current_page_item');
      var url = singlePage.siteURL + e.fragment;
      var primary = jQuery('#primary');
      singlePage.navLinks.find('.current-menu-item, .current_page_item').parents('li').removeClass('current-menu-item current_page_item');
      if (e.fragment) {
        singlePage.navLinks.filter('[href="#' + e.fragment + '"]').parents('li').addClass('current-menu-item current_page_item');
        primary.fadeTo(300, 0, function() {
          primary.load(url + ' #content', function(){
            primary.fadeTo(300, 1);
          });
        });
      } else {
        singlePage.navLinks.filter('[href="#/"]').parents('li').addClass('current-menu-item current_page_item');
      }
    });
    jQuery(window).trigger('hashchange');
  }
}