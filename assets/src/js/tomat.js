"use strict";

const app = {
    init() {
        app.initTabsNavigation();
        app.setNumbers();
        app.imgLightbox();
        app.mobileMenu();
    },
    imgLightbox() {
        var modal = document.getElementById('lightbox')
        if (modal) {
            modal.addEventListener('show.bs.modal', function (event) {
                var button = event.relatedTarget
                var src = button.getAttribute('data-bs-src')
                var img = modal.querySelector('img')
                img.src = src
            })
        }

    },
    mobileMenu() {
        var close = $('#close-menu')
        var open = $('#open-menu')
        var nav = $('.header .nav')

        console.log(close, 'close')
        console.log(open, 'open')
        console.log(nav, 'nav')

        open.on('click', () => {
            nav.addClass('slide')
        })

        close.on('click', () => {
            nav.removeClass('slide')
        })
    },
    setNumbers() {
        var numberEl = $('.tabs-content .tab-pane:not(.fade) .number')
        var counter = 1;
        numberEl.each((n, el) => {
            var number = $(el);
            number.html(counter);
            counter++;
        })
    },
    initTabsNavigation() {
        var tabsNavEl = $('.nav-item')
        var tabsContentEl = $('.tab-pane')
        tabsNavEl.click((e) => {
            var el = $(e.currentTarget)
            var tab = el.data('tab-target')

            tabsNavEl.each((n, el) => {
                $(el).removeClass('active')
            })
                el.addClass('active')

                if (tab == 'all') {
                    tabsContentEl.each((n, el) => {
                        var t = $(el)
                        t.removeClass('fade')
                    })
                } else {
                    tabsContentEl.each((n, el) => {
                        var t = $(el)
                        if (t.attr('id') == tab) {
                            t.removeClass('fade')
                        } else {
                            t.addClass('fade')
                        }
                    })
                }
            this.setNumbers();
        })

    }
};

$("document").ready(() => {
    app.init();
});
