$(document).ready(function () {
    var url = window.location;
    // Will only work if string in href matches with location
    $('#my-header #nav li a[href="' + url + '"]').parent().addClass('active');

    // Will also work for relative and absolute hrefs
    $('#my-header #nav li a').filter(function () {
        return this.href == url;
    }).parent().addClass('active').parent().parent().addClass('active');
});