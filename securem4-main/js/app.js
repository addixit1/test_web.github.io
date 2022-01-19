$(function() {
    $('#nav-search-select').change(function() {
        var selectedText = $(this).find('option:selected').text();
        $('#nav-search').find('.nav-search-label').html(selectedText);
    });
});





function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}