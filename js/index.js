const change = $(".change");
const switchButton = $("button");
const theme = $("body");

const decreaseIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='8' height='4'><path fill='#DC414C' fill-rule='evenodd' d='M0 0l4 4 4-4z'/></svg>";
const increaseIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='8' height='4'><path fill='#1EB589' fill-rule='evenodd' d='M0 4l4-4 4 4z'/></svg>";

for (let i = 0; i < change.length; i++){
    if (change.eq(i).hasClass("increase")) {
        change.eq(i).html(increaseIcon + change.eq(i).text());
    }
    else {
        change.eq(i).html(decreaseIcon + change.eq(i).text());
    }
}

switchButton.click(function() {
    switchButton.toggleClass("active");
    if (theme.hasClass("light")) {
        theme.addClass("dark").removeClass("light");
    }
    else {
        theme.addClass("light").removeClass("dark");
    }
});