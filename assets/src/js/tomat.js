"use strict";

const app = {
    init() {
        app.initTabsNavigation();
        app.setNumbers();
        app.imgLightbox();
    },
    imgLightbox() {
        var modal = document.getElementById('lightbox')
        if (modal.length) {
            modal.addEventListener('show.bs.modal', function (event) {
                var button = event.relatedTarget
                var src = button.getAttribute('data-bs-src')
                var img = modal.querySelector('img')
                img.src = src
            })
        }

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
