(function() {

    function runTimer(totalTime, keepRunning, callback) {
        var def = promiscuous.deferred();
        var start = Date.now();
        var updateInterval = 70;

        function update() {
            if (!keepRunning()) return def.reject();

            var timeLeft = totalTime - (Date.now() - start);

            if (timeLeft > 0) {
                callback(timeLeft);
                runFor(updateInterval).then(update);
            } else {
                callback(0);
                def.resolve();
            }
        }

        runFor(updateInterval).then(update);

        return def.promise;
    }

    function runFor(time) {
        var def = promiscuous.deferred();
        setTimeout(function() {
            def.resolve();
        }, time);
        return def.promise;
    }

    function windowHeight() {
        return document.documentElement.clientHeight;
    }

    function windowWidth() {
        return document.documentElement.clientWidth;
    }

    function throttle(fn, threshhold) {
        threshhold = threshhold || 250;
        var last, deferTimer;

        return function () {
            var context = this,
                args = arguments,
                now = Date.now();

            if (last && now < last + threshhold) {
                clearTimeout(deferTimer);
                deferTimer = setTimeout(function() {
                    last = now;
                    fn.apply(context, args);
                }, threshhold);
            } else {
                last = now;
                fn.apply(context, args);
            }
        };
    }

    function without(arr, item) {
        var index = arr.indexOf(item);
        if (index !== -1) {
            arr.splice(index, 1);
        }
    }

    function map(list, fn) {
        var res = [];
        for (var i = 0; i < list.length; i++) {
            res.push(fn(list[i], i));
        }
        return res;
    }

    window.utils = {
        runTimer: runTimer,
        runFor: runFor,
        windowHeight: windowHeight,
        windowWidth: windowWidth,
        throttle: throttle,
        without: without,
        map: map
    };

})();