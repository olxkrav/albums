(function() {
    'use strict';

    function initPlugin() {
        console.log('WVids Plugin: Инициализация...');

        // Добавляем пункт в левое меню
        Lampa.Listener.follow('app', function(e) {
            if (e.type === 'ready') {
                var menu_item = $('<li class="menu__item selector" data-action="wvids"><div class="menu__ico"><img src="https://wvids.com/favicon.ico" onerror="this.src=\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=\'"></div><div class="menu__text">WVids</div></li>');
                
                menu_item.on('hover:enter', function() {
                    openWVids();
                });

                $('.menu__list').append(menu_item);
            }
        });
    }

    function openWVids() {
        var html = $('<div class="full-screen-modal"><h1>WVids</h1><p>Интерфейс в разработке...</p></div>');
        Lampa.Modal.open({
            title: 'WVids',
            html: html,
            size: 'large',
            onBack: function() {
                Lampa.Modal.close();
            }
        });
    }

    // Запуск плагина
    if (window.appready) {
        initPlugin();
    } else {
        Lampa.Listener.follow('app', function(e) {
            if (e.type === 'ready') initPlugin();
        });
    }
})();
