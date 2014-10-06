(function() {

    var questions = window.questions || [];

    var mentometer = createMentometer(questions);

    dispatch.on("/", function() {
        mentometer.startPage();
    });

    dispatch.on("/question/:num", function(params) {
        var num = parseInt(params.num, 10);
        if (num > questions.length) return mentometer.done();
        mentometer.show(num);
    });

    dispatch.on("/done", function() {
        mentometer.done();
    });

    dispatch.start("/");

    var sock = new SockJS('/echo');

    sock.onopen = function() {
        sock.send(JSON.stringify({ type: "connect", isAdmin: true }));
    };

    sock.onmessage = function(e) {
        var data = JSON.parse(e.data);

        if (data.numberOfUsers) {
            document.querySelector('.connected span').innerHTML = data.numberOfUsers;
        }

        if (data.type === 'answer') {
            mentometer.answer(data.user, data.alternative);
        }
    };

    sock.onclose = function() {
        alert("WebSocket-tilkoblingen er brutt, refresh siden");
    };

})();
