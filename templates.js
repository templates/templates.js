$(document)['ready'](function () {
        $('#cnmuprot')['html']('<a href="http://itqanwebs.blogspot.com/" rel="dofollow" target="_blank">إتقان ويب</a>');
        setInterval(function () {
                if (!$('#cnmuprot:visible')['length']) {
                  window['location']['href'] = 'http://itqanwebs.blogspot.com/';
                };
            }, 3000);
    });