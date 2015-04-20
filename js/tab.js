(function( $ ){
$.fn.tab = function( options ) {
  var settings = $.extend( {
    'ulTabName' : 'tab',
    'tabContentName'  : 'tab-content',
    'tabPosition' : 1
  }, options);

  var root = $(this);

  root.find('.'+settings.ulTabName+' li').eq(+settings.tabPosition+-1).addClass('active');
  root.find('.'+settings.tabContentName).hide();
  root.find('.'+settings.tabContentName).eq(+settings.tabPosition+-1).show().addClass('active');

  root.find('.'+settings.ulTabName+' li').click(function(){
    root.find('.'+settings.ulTabName+' li').removeClass('active');
    $(this).addClass('active');
    root.find('.'+settings.tabContentName).hide();
    root.find('.'+settings.tabContentName).eq($(this).index()).show();
  });

};
})( jQuery );