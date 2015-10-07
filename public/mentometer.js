;(function() {

    // var sock = new SockJS('/echo');
    var connections = [];

    for (var i = 0; i < 20; i++) {
      connections.push(new SockJS('/echo'));
    }

    connections.forEach(function(sock) {
      sock.onopen = createSend({type: "connect"}, sock);
      sock.onclose = function() { location.reload() };
    })


    function createSend(data, sock) {
        return function() {
            sock.send(JSON.stringify(data));
        }
    }

    function answer(alternative) {
      return function() {
        connections.forEach(function(sock) {
          createSend({ type: 'answer', alternative: alternative }, sock)();
        })
      }
    }


    document.querySelector('.alternative-a').addEventListener('click', answer('a'));
    document.querySelector('.alternative-b').addEventListener('click', answer('b'));
    document.querySelector('.alternative-c').addEventListener('click', answer('c'));
    document.querySelector('.alternative-d').addEventListener('click', answer('d'));

})();
