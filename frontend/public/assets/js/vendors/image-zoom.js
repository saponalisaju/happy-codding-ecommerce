
(function (window, document) {
    'use strict';

    /**
     * ImageZoom - A lightweight vanilla JS image zoom plugin
     * @param {HTMLElement} el - The container element
     * @param {Object} options - Configuration options
     */
    var ImageZoom = function (el, options) {
        if (!el) return;
        this.el = el;
        this.options = Object.assign({
            zoom: 2,
            speed: 0.1
        }, options);
        this.img = el.querySelector('img');
        if (!this.img) return;
        this.init();
    };

    ImageZoom.prototype.init = function () {
        var _this = this;
        this.el.style.position = 'relative';
        this.el.style.overflow = 'hidden';
        this.el.style.cursor = 'zoom-in';

        this.img.style.transition = 'transform ' + this.options.speed + 's ease-out';
        this.img.style.pointerEvents = 'none';

        this.el.addEventListener('mousemove', function (e) {
            _this.zoomIn(e);
        });

        this.el.addEventListener('mouseleave', function () {
            _this.zoomOut();
        });

        this.el.addEventListener('mouseenter', function () {
            _this.img.style.transition = 'transform ' + _this.options.speed + 's ease-out';
        });
    };

    ImageZoom.prototype.zoomIn = function (e) {
        var rect = this.el.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;

        var xPercent = (x / rect.width) * 100;
        var yPercent = (y / rect.height) * 100;

        this.img.style.transformOrigin = xPercent + '% ' + yPercent + '%';
        this.img.style.transform = 'scale(' + this.options.zoom + ')';
    };

    ImageZoom.prototype.zoomOut = function () {
        this.img.style.transform = 'scale(1)';
    };

    window.ImageZoom = ImageZoom;
    document.addEventListener('DOMContentLoaded', function () {
        var zoomElements = document.querySelectorAll('[data-zoom-container]');
        zoomElements.forEach(function (el) {
            var zoomLevel = el.getAttribute('data-zoom-level') || 2;
            new ImageZoom(el, { zoom: parseFloat(zoomLevel) });
        });
    });

})(window, document);
