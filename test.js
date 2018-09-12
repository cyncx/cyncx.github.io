$('#menubtn').sidr({ 
    name: 'sidr', 
    side: 'right',
    displace: true,
    onOpen: function (name){
        openSidr()
    },
    onClose: function (name) {
        closeSidr()
    }
});
function openSidr() {
    if (getWindowWidth() <= 480) {
        var offset = $('div#sidr').width() - ($('a#menubtn').width() * 1.5)
        $('a#menubtn').css('margin-right', offset);
    } else {
        var offset = $('div#sidr').width()
        $('a#menubtn').css('margin-right', offset);
    }
    $('.lnz-logo').fadeOut(300);
};
function closeSidr() {
    $('a#menubtn').removeAttr('style');
    $('.lnz-logo').fadeIn(300);
}