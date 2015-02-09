$(document).ready(function () {

    var $$ = function (arg) {
        var arg2 = document.querySelectorAll(arg);
        return new Select(arg2, arg);

    };


    var Select = function (arg2, argument) {
        for (var i = 0; i < arg2.length; i++) {
            this.push(arg2[i]);
        }
        this.argument = argument;
    };

    Select.prototype = Object.create(new Array());

    Select.prototype.width = function (arg1) {
        if (arg1) {
            for (var i = 0; i < this.length; i++) {
                this[i].style.width = arg1 + 'px';
            }
            return this;
        }
        else {
            return this[0].style.width;
        }
    };
    $$('.main').width(900);
    Select.prototype.height = function (arg1) {
        if (arg1) {
            for (var i = 0; i < this.length; i++) {
                this[i].style.height = arg1 + 'px';
            }
            return this;
        }
        else {
            return this[0].style.height;
        }
    };
    $$('.main').height(60);
    Select.prototype.hasClass = function (arg) {
        var argum = arg.split(' ');
        for (var i = 0; i < this.length; i++) {
            for (var j = 0; j < argum.length; j++) {
                if (this[i].classList.contains(argum[j])) {
                    return true;
                }
            }
        }
        return false;
    };

    Select.prototype.addClass = function (arg) {
        var argum = arg.split(' ');
        for (var i = 0; i < this.length; i++) {
            for (var j = 0; j < argum.length; j++) {

                this[i].classList.add(argum[j]);
            }
        }
        return this;
    };
    $$('.first').addClass('sub');

    Select.prototype.toggleClass = function (arg) {
        var argum = arg.split(' ');
        for (var i = 0; i < this.length; i++) {
            for (var j = 0; j < argum.length; j++) {

                this[i].classList.toggle(argum[j]);
            }
        }
        return this;
    };

    $$('.first').toggleClass('sub_1');
    $$('.first').toggleClass('sub_2').toggleClass('sub_2');
    $$('.first').toggleClass('sub_3').toggleClass('sub_3').toggleClass('sub_3');

    Select.prototype.removeClass = function (arg) {
        var argum = arg.split(' ');
        for (var i = 0; i < this.length; i++) {
            for (var j = 0; j < argum.length; j++) {

                this[i].classList.remove(argum[j]);
            }
        }
        return this;
    };
    $$('.second').removeClass('will-deleted');



    Select.prototype.append = function (arg) {
        var html;
        var all;
        for (var i = 0; i < this.length; i++) {
            html = this[i].innerHTML;
            all = html + arg;
            this[i].innerHTML = all;
        }
        return this;
    };
$$(".second").append('<div class="second_child"></div>');

    Select.prototype.prepend = function (arg) {
        var html;
        var all;
        for (var i = 0; i < this.length; i++) {
            html = this[i].innerHTML;
            all = arg + html;
            this[i].innerHTML = all;
        }
        return this;
    };
    $$(".second").prepend('<div class="second_child_2"></div>');
    Select.prototype.app = function (arg) {
        var html;
        var all;
        for (var i = 0; i < this.length; i++) {
            html = this[i].outerHTML;
            all = html + arg;
            this[i].innerHtml = all;
        }
        return this;
    };


    Select.prototype.prep = function (arg) {
        var html;
        var all;
        for (var i = 0; i < this.length; i++) {
            html = this[i].outerHTML;
            all = arg + html;
            this[i].outerHTML = all;
        }
        return this;
    };
    Select.prototype.wrap = function (arg) {
        var first;
        var second;
        for (var i = 0; i < this.length; i++) {
            for (var j = 0; j < arg.length; j++) {
                if (arg[j] == '/') {
                    first = arg.substr(0, j - 1);
                    second = arg.substr(j - 1, arg.length);

                    $$(this.argument).prep(first).app(second);
                }
            }
        }
        return this;
    };

/*
    Select.prototype.wrap = function (arg) {
        for (var i = 0; i < this.length; i++) {
            var wr = this[i].outerHTML;
            for (var j = 0; j < arg.length; j++) {
                if(arg[j]=='/'){
                    first = arg.substr(0, j - 1);
                    second = arg.substr(j - 1, arg.length);
                }
            }
            this[i].outerHTML = first+wr+second;
        }
        return this;
    };
 */
    $$('.main').wrap('<div class="black"></div>');


});
