var tabs = $('.tabs > li')
var contents = $('.contents > li')

tabs.on('click', function() {
    var activeTab = $(this)
    tabs.removeClass('active')
    activeTab.addClass('active')
    contents.removeClass('active')
    contents.eq(activeTab.index()).addClass('active')
})