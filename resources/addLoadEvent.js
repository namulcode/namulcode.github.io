function addLoadEvent( func ) {
    var oldonload = window.onload;

    if ( typeof window.onload !== 'function' ) {
        window.onload = func;

        return true; 
    }

    window.onload = function() {
        if (oldonload) {
            oldonload();
        }

        func();
    };

    return true;
}