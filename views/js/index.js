$(function() {
    $(".p").on("click", function() {
        $("#voice")[0].play()
        $(".pp").slideDown(2000, function() {
            var spA = new Span()
            var timer = setInterval(function() {
                spA.render(pp)
                $("#em").stop().show(1000)
            }, 100)
        })
    })
    var pp = document.querySelector('body')

    function Random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    function Span(options) {
        options = options || {};
    };
    Span.prototype.render = function(map) {
        var span = document.createElement('span');
        map.appendChild(span);
        this.x = Random(1, 1356)
        this.y = Random(1, 900)
        span.style.fontSize = Random(16, 50) + 'px';
        span.style.left = this.x + 'px';
        span.style.top = this.y + 'px';
        span.style.position = 'fixed';
        span.style.color = 'red';
        span.innerHTML = '还想着玩聊天啊！该敲代码了！！！';
    }

})