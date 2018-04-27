// ==UserScript==
// @name        	Spaces+
// @namespace   	https://github.com/crashmax-off/spaces_plus
// @description 	The script is designed to extend the functionality of Spaces.ru
// @author      	Creator: Maximoff, Updated: crashmax & molimawka
// @include     	http://*.spaces.ru/*
// @include     	http://spaces.ru/*/*
// @include     	http://spaces.ru/*
// @include     	http://*.spaces.ru/*/*
// @include     	https://*.spaces.ru/*
// @include     	https://spaces.ru/*/*
// @include     	https://spaces.ru/*
// @include     	https://*.spaces.ru/*/*
// @match       	http://*.spaces.ru/*
// @match       	http://spaces.ru/*/*
// @match       	http://spaces.ru/*
// @match       	http://*.spaces.ru/*/*
// @match       	https://*.spaces.ru/*
// @match       	https://spaces.ru/*/*
// @match       	https://spaces.ru/*
// @match       	https://*.spaces.ru/*/*
// @version     	2.0
// @grant       	none
// ==/UserScript==

(function() {
    function spacesPlus() {
        var _PROTOCOL = document.location.protocol.toString();
        var VERSION = 20;
        var onlineLock = null;
        var favLock = null;
        var favRLock = null;
        var banLock = null;
        var inSettings = false;
        var eventsCounter = 0;
        var countFriends = 0;
        var commentsLength = 0;
        var consoleCount = 0;
        var friendsForce = 0;
        var playerId = -1;
        var _X77hgg = 1;
        var reCount = 0;
        var scroll = false;
        var INTERVAL = null;
        var ICON48 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAMEElEQVR42sVaCVRURxaNiWSfSXJOEo1RR4MZFzIqETegQQzRMZyZMRIVohgFFUWQHUGa7qYBUXFBFAwuQBABEUT2rbsBh01FHYk5xi1KHBfimjBGhK7cqfq90E3/bjSSpM+5h8/v+lX3vnrv1av6/cwzT/sB+s3NyXluQnKzGfvbW3O9tvTZZ/6wj0Ty7DRJdX++r+j9VwUxR96xi6odzsCu2T0jbfuzvv5Q4rZi2V/tI2uWTIus/lIQqaixF8svCMTyNnuJ4h4Dd83u0e9YG9aWPfO7C2FTr2tlSsTNTqKooCTbKfCEaOeepX3MiKt4hW+Mvvuo/VxzPU1avcJOLD+nS8hOrPhFIJaRxwFrq/+s/BzrUxMT3Gz0VXzoBqaDVDHZLlLRpB1YoiDUNbq4v084A3zPCiLlTWwMvrGfmjy1kJ99pEKpHVwiU/4KtzECmVIrhI4hkMj9nlqE7oP2YkWSdjBmtR4u0Bfg+qR9a/63FVV++etF6GQD2tl+jdWZ//Y18Z7gYkQ9GwJRZSal0O/JROgEDw2unT075cP02FpMi+Jmxyixj8UKzIttwKfRdZgm6j0+NMayDS9L1oh4rMDW5Hi7SJmvpjNe8pTs9PW1WFl1HSEnHiCg4Ue45Zzn7tnpCqHXn0UeQVrKbZRkdqFwXwd27LqGL2KPYpoJwapxa2jGksE6vChAl1uveZ4uPJM0AWvcbaqwvPIG1pwhegg59RBuuRfguLGOtpHDQViJxO3XULKP6KF0fxd27WqDe2wzHE24EycmolI5NeCgtel1QsfvqQWbNAHLS55abta2Bvj/5xGCviYGCKYIaP4ZbocuwyPuOPJTOlCcTnhRlN6FlD23sCT2GBzEPG6o5mATVnKMUnu2J1dD1xHJPLVTaCTbUIvArbgV/i3EJAJbuvDd1VycbaxDZfZPKEojRlG8T4mMvfexIvYkHHWEMA6cK4mqMDUo15vfldSKJkiKXqY+d06Tm41Z/6PNR+B9qhM+p4lJ7Pj2IpR314NQ/O9aIi42V6Ai80cUpipRmEL4kdaF1N334LOhBR+Ju9cJLqDXFp0fsUDyZ4NZ0CiyDS93616ojAQXtb7L4StYeYoYxYqTSiypvImshjzUn9jO4XorExKJn29sQktNPQ7vJaaRosSunTfhGFGlDmrVLEzyzfLQnwWd1CSIqKzozfenb6yBe+PPWHaSGIVr8U3MXFcNt6hCLKL4NLoMqeV78eiWCOSOEJ0/SKDIbUX+bmIShyi8JEdV7qTmNDUkX6aNBcZds0BMDs59nzZqNzUDVCDm5F3GkhPEJJzzr2KZOB+nw6PxrVCKaNE+rN6Ti/YbYSC3gzmcrS9BXjLpFYFhx7lZ5zhFVkMQXtY+btkWC+3ipklLNmHFHtol3Yj17dcpsLCpA27HiUm4Hr6AleI8XBGK0RYejv0RiVi9Owft1wNBbvlyOCWX4+BOYhLZOzqwYHUJJ0BVJ1X/wtxoovdXXtqUqpkBm7Ulu03lfTtRJZyyL8DlGDHA/KYuzKvv4OBS/xCiknIeAdlou+yPe9+vxs2LYcjedZcSVOLADmIUCdLLsPfP1WYkVSkuxyT/rDS2OuuWF/3okv1vkwsXtf6c2gf4rInowbmhiwq7AsctTZhJMWtrA9y2FWIVFdAaLuIEZFEBzhtK4Lkjl4N7fDHmRx9H9KYbyE4gvNi39SGWepfTzFNqsLBNDcproJy7U6mFV+KrdqKKC8YEsGlzTDuDfzUQAziV3cXH62ohpX5eEJGghVy4CTeEQk4AiwXd7xhWiA/Bc91ZZMYTXmwWXYaDby4dW2YgwCa04NJQp5VvaAWMW7HzXbuIqpvGBAgiZZgl/wmf1BMDzCy9g9lRVTgTHsWRfVxEiTLgGXMWGVuIAdI3dWKZTxUEYSW8pYVNaFHbKJfQYd010PJkczuJ/C6fAM4Ce7/GjDrCC8fiO/gkSo70iCQURWzTQqEzAy3CaL3vGMJEWVgefRbpccQAWyJa4eCTw808nwDb8JJ7f3OVjNIKGL942/vGBAikVAB1E4cjhB+VD2Cf1AKnzQosTcjCsoRMLI4/AG9xrl4MzNlQiIUbS+EsbeQwJ7IRvtGXkLaB6CElthMrvCnJsGKjxR0TMMZ5jUV3DCxaP5TugNp6CmDWt911GoIaJQUxDkUnko6n4t6ljznkVwUYZCGvpAxkJH2DnTEdWuyiZFNiiR7iI9ow0ztPz/cNXCis6IcRs33MtQKG2n7+hiCi3CCIbUUVmFp6H1OqiUk41LTj2nf/ALk6kUOBbJWBgEUbZUhe9xB7oolR7I5WwtuL7ifWFJksr61D8i8NGDvjbd1y7gU6ZXV6Ami+tYlvhJVCSUFMIuZYDsj3Y7UokHkaCJgnPY4kaSd2S4lRxIffwQyvg90LlxEBU/yzmyjnl3ULuf7WwXmpPTYRGJd4AuNlBOPlppF+MgakdZQWBVUe+EJcwAVynXADgkXZmC85iURJJ5IlhBdfirvgt7IBtmsKjW5NNQvZxFWpGZSzGcddXUr0s/JK8dbW3wxUgIW0FBZlHfigipiEsDEb5MpwLY42OGHB5ix8vj4XrrF5+GekHH7iViSJldgpIryIC7mFWSvyjFqfK3FoKcHqsXFumwIZZ71SYoxzqKVAVPmjzqETJgbl4i9xCrx/6A5GVigxspLwYlzVA5z+9u+U/LsclFcG4+rXlmhtmYBTtS7YLG1DvPARkoSEF4lCJXxXHoVdSIFR61PLc8UcDeCfRjgunaLyHkl/3XL6VeuQQwrdclogrMCEgCy8F7QfQ+LrMTz3NszLlRhRQQzgqDiHmjPO6PxuIMjlt9V4C5WpB7BjLTGJuOD7cPLMNWp9XU4TV++rpVxf09sKaOLA0n2bD/MxjRtpygib0EJ86Lcf7/l9hXe31mFIdhuGlXRiWBnRw4jyDnxa3YDS0wvQfvEd/LdxNBLC7mJ7KMH2MH4khCrh59kM2+DDpqyvdp8KfOAaxdynv/62Ur09e2mQ+RDr0KLzBltKJooTUgRL3wyY+6ZhYFwNBh34AYNLujCEktfFcBo3TqUVWLQ2EAtc8yH0PIctQR1IWEMMEBfYjtmehaatr+YyJSDnwosDhw3j3dirFb041n3LWnYWw9XePHsDJoStkhP8s2C+OhUDoqswIOM6BhV1YlAJUaG4C4Pij2FS0EHYBOZhmkca5rscROiyb7Ap4AHig5WID6ElQ9AjrHanO66AfBPWV3Rb3yVGzDjynw91K3pnSlBes8mtpY4Qq4Bsbkbekpbjzb0X8Vb6Vby58QjGBGZxMcSICYTlsA7Kgz0VMm/+AfgubEDIktPwcCmDw/JM7vvefT/9JOU2WHVYOvc5U6dyL5jPWDnbJrz0kcnTCd1yg9bskwNzMNo7FSO99uBD/0xVHd/jhI4Jsgk5DNtV+yFYng5r/4Mq8kZP6OjYNPNYhxY8Gjp98VzGjRaeZo9ztPj62EXrY1jOVbmSvPdDXRYntD0jyVfH6MeTTFVpmjpaVKXNX5hAC1fpBsap16PF7p0+N0WDLJcm7ecGimRnlPLf/GRan3wN4RatxfHZjAvH6bHf2qjigU3VcCvP5EL1TKBvX2ooTLoNG/NDj8RiyuE9josxv+/lBccLFOaW7gmZnK8yEdwLDvlv8IJDrnrBwcjTscYt3sosP4JxUK24v+KjfpCJGGbhKtlgG1rYoTne6CshOsS5vmzWFHSMmS/ayMZ8KvJ67mRh8TzzwyG2C10n+aQ1a9NetxDyJK+dVCu9nOgSZ32yvgfbfL6A83k25pO6janAtpgrYSLYScDo0fOE0sl+2ed1hHAQUFK9v2ZVFWWqmFIRZ32NnhcexWpKNgY31m/xMwR1DmYuNdDs5dctx8wJXmvltbvWes3h+4wIt4JrLK0hqUNWZX0Z2KpKc/t9K689tawP1hfr87HyfF/MhnqQlygGUIwcON7ByeKz0AhLj4RsK++vmljNMjXk0A1K8jYDu54SmHPByju9ibVhbdkz9NlR6j5e4vr8g34zwcT8WU2EBd5os9fenPD6MEv7tz+wm8HArtk99p26zQD1M2a//489eGaEZQoLSc7z6jjRzA77/cOf1HhFfc+MtWE7KS679IGf/x9lFv30I5KrAgAAAABJRU5ErkJggg==";
        var ONLINE = new Object();
        var _SETTINGS = {
            'comments': false,
            'comments_m2': false,
            'blogsd': false,
            'readersd': false,
            'favorite': true,
            'blocked': true,
            'rscroll': false,
            'hrightbar': false,
            'playerdn': true,
            'coins': true,
            'karma': true,
            'rurl': false,
            'fileTools': true,
            'darkMode': false,
            'gifts': false,
            'online': true,
            'ads': true,
            'myEvents': true,
            'friendsOn': true,
            'isOnline': false,
            'isOnlineInt': 1,
            'bodystyle': {
                "url": "https://crashmax-off.github.io/bg/default.jpg",
                "color": '#DAE1E8',
                "urlchecked": true,
                "colorchecked": false
            },
            'events': {
                'url': "https://crashmax-off.github.io/sn/default.ogg",
                'volume': 70,
                'mail': true,
                'journal': true,
                'feed': false,
                'notifications': false
            },
            'friendsOnMax': 10,
            'friendsListSH': true,
            'hideNotyf': {
                "cookieEditor": false,
                "isOnline": false
            }
        };
        var _SETSTRINGS = {
            'comments': "Пакетное удаление комментариев",
            'blogsd': "Пакетное удаление блогов",
            'readersd': "Пакетное удаление читателей",
            'fileTools': "Дополнительные кнопки в блогах",
            'darkMode': "Темная тема",
            'friendsOn': "Панель друзей онлайн",
            'myEvents': "Свой звук уведомлений <a href='#' onclick='if(confirm(\"В настройках сайта должен быть выключен звук уведомлений. Файл должен быть в форматах *.ogg или *.mp3.\\nУказывайте прямую ссылку!\\n\\nХотите открыть каталог рингтонов?\")) {window.open(\"https://crashmax-off.github.io/spaces_plus/\", \"_blank\");} return false;' style='cursor: help;'><span class=\"ico ico_question_light\"></span></a>",
            'online': "Точное время онлайн в анкетах",
            'ads': "Скрывать рекламу",
            'favorite': "Возможность добавить пользователя в закладки",
            'playerdn': "Кнопка загрузки трека из плеера",
            'rscroll': "Скроллер страницы справа",
            'hrightbar': "Скрытое правое меню",
            'blocked': "Открытые разделы удаленных пользователей",
            'coins': "Собирать бонусные монеты",
            'karma': "Собирать карму",
            'rurl': "Автоматический редирект внешних ссылок",
            'bodystyle': "Задать фон сайта",
            'gifts': "Предпросмотр подарков"
        };
        var main = {
            ajax: function(url, method, data, callback, rstate) {
                rstate = (typeof rstate != "undefined" ? rstate : 4);
                var xhr = new XMLHttpRequest();
                xhr.open(method, url, true);
                if (method == "POST") {
                    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                    xhr.send(data);
                } else {
                    xhr.send(null);
                }
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == rstate) {
                        if (xhr.status == 200) {
                            if (callback) {
                                callback(xhr.responseText);
                            }
                        } else {
                            return false;
                        }
                    }
                };
            },
            jajax: function(url, callback) {
                url = url.replace(/\#.*$/i, '') + (url.indexOf("?") >= 1 ? "&json=1" : "?json=1");
                var xhr = new XMLHttpRequest();
                xhr.open("GET", url, true);
                xhr.setRequestHeader("X-Proxy", "spaces");
                xhr.send(null);
                xhr.onreadystatechange = function() {
                    if (xhr.readyState == 4) {
                        if (xhr.status == 200) {
                            if (callback) {
                                callback(xhr.responseText);
                            }
                        } else {
                            return null;
                        }
                    } else {
                        return null;
                    }
                };
            },
            getQuery: function(name) {
                var query = document.location.search;
                var resp = null;
                try {
                    name = name.toLowerCase();
                    if (query.toLowerCase().indexOf(name) >= 1) {
                        query.substring(1).split("&").forEach(function(param) {
                            var params = param.split("=");
                            if (params[0].toLowerCase() == name) {
                                resp = params[1];
                            }
                        });
                    }
                    return resp;
                } catch (e) {
                    main.console.error('Ошибка (GETQUERY): ' + e.name + ":" + e.message + "\n" + e.stack);
                    return null;
                }
            },
            css: function(elem, css) {
                var tList = css.split(";");
                for (var i in tList) {
                    if (main.trim(tList[i]) != "") {
                        var valList = main.trim(tList[i]).split(":");
                        if (valList[0].indexOf("-") >= 0) {
                            valList[0] = valList[0].replace(/\-([a-z]{1})/g, function(a, b) {
                                return b.toUpperCase();
                            });
                        }
                        if (typeof valList[1] != "undefined") {
                            elem.style[main.trim(valList[0])] = main.trim(valList[1]);
                        }
                    }
                }
            },
            htmlspecialchars: function(str) {
                if (typeof(str) == "string") {
                    str = str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#039;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace("\n", "br/>");
                }
                return str;
            },
            ce: function(name, param) {
                var newEl = document.createElement(name);
                if (param) {
                    for (var i in param) {
                        if (i == "style") {
                            main.css(newEl, param[i]);
                        } else if (i == "attr") {
                            for (var j in param[i]) {
                                newEl.setAttribute(j, param[i][j]);
                            }
                        } else if (i == "html") {
                            newEl.innerHTML = param[i];
                        } else if (i == "class") {
                            newEl.className = param[i];
                        } else {
                            newEl[i] = param[i];
                        }
                    }
                }
                return newEl;
            },
            readSettings: function() {
                var cookieSet = main.getCookie("SP_PLUS_SET");
                try {
                    if (cookieSet) {
                        cookieSet = JSON.parse(cookieSet);
                        _SETTINGS = main.extend(_SETTINGS, cookieSet);
                    }
                } catch (e) {
                    main.console.error('Ошибка (READSETTINGS): ' + e.name + ":" + e.message + "\n" + e.stack);
                }
            },
            newbequest: function() {
                var nbqLink = main.qs("#sp_newbequest_togl");
                if (nbqLink) {
                    main.jajax(_PROTOCOL + "//spaces.ru/mysite/", function(r) {
                        try {
                            if (r) {
                                var _json = {
                                    'owner_widget': {
                                        'newbee_quest_widget': null
                                    }
                                };
                                var json = main.extend(_json, JSON.parse(r));
                                if (json.owner_widget.newbee_quest_widget) {
                                    nbqLink.style.display = "";
                                } else {
                                    nbqLink.style.display = "none";
                                }
                            }
                        } catch (e) {
                            main.console.error('Ошибка (NEWBEE_JSON): ' + e.name + ":" + e.message + "\n" + e.stack);
                        }
                    });
                }
            },
            settings: function() {
                var path = document.location.pathname.toString();
                var lct = document.location.href.toString();
                if (path == '/settings/' && !main.qs("#SP_PLUS_SETLINK")) {
                    try {
                        var chLink = main.find(document.links, {
                            href: _PROTOCOL + "//spaces.ru/settings/password/?"
                        });
                        if (chLink) {
                            chLink = chLink[0];
                            var urlSett = main.getQuery("sp_plus_settings");
                            var urlSettEditor = main.getQuery("sp_cookie_editor");
                            var urlSettOnEditor = main.getQuery("sp_isonline_editor");
                            var settLink = main.ce("a", {
                                href: _PROTOCOL + "//spaces.ru/settings/?sp_plus_settings=1",
                                id: "SP_PLUS_SETLINK",
                                class: chLink.className,
                                html: '<span>Настройки Spaces+</span><span class="ico ico_arr ico_m"></span>',
                                onclick: function(e) {
                                    var prnt = main.qs("#SP_PLUS_SETLINK").parentNode.parentNode.parentNode.parentNode;
                                    var rVer = VERSION.toString().split("").join(".");
                                    var CK = main.getCK(0);
                                    if (prnt.id == "main") {
                                        var hp = main.qs("#header_path");
                                        if (hp) {
                                            hp.innerHTML = hp.innerHTML.replace("Настройки", '<a href="' + _PROTOCOL + '//spaces.ru/settings/" style="margin-bottom: 1px;">Настройки</a><span class="location-bar__sep ico"></span><span id="SP_PLUS_SETHEAD2">Spaces+</span>');
                                        }
                                        prnt.innerHTML = '<div class="widgets-group widgets-group_top js-container__block"><div class="b-title cl b-title_center b-title_first oh"><div class="b-title__item">Настройки Spaces+ <sup>' + rVer + '</sup><span class="js-cnt cnt cnt_title hide"></span></div></div><div class="content"><div class="list f-c_fll"> <div id="SP_PLUS_SETAREA" class="lh_160"></div></div></div></div> <a id="SP_PLUS_SETBACK" href="http://spaces.ru/settings/?" class="link-return full_link"><span class="ico ico_arrow-back" style="margin: 0px 6px -1px 0px;"></span><span class="m">Назад</span></a>';
                                    } else if (prnt.className == "main") {
                                        prnt.innerHTML = prnt.firstElementChild.outerHTML.replace("Настройки", 'Настройки <span style="color: #0000FF;">Spaces+</span>') + '<div class="start_page_padd light_blue_bg"><b id="SP_PLUS_SETHEAD">Настройки <span style="color: #0000FF;">Spaces+ ' + rVer + '</span></b></div><div id="SP_PLUS_SETAREA"></div><a id="SP_PLUS_SETBACK" href="http://spaces.ru/settings/?" class="link-return full_link"><span class="ico ico_arrow-back" style="margin: 0px 6px -1px 0px;"></span><span class="m">Назад</span></a>';
                                    } else {
                                        main.alertm('<h4>Настройки <span>Spaces+ <sup>' + rVer + '</sup></span></h4><div style="line-height:1.5;display:block;height:100%;color:#ec1212;">Меню настроек больше не поддерживается на Mobile и Lite версии сайта!<br> Используйте <a href="' + _PROTOCOL + '//spaces.ru/services/force_device_type/?Vck=' + CK + '&dtype=touch">Touch</a> или <a href="' + _PROTOCOL + '//spaces.ru/services/force_device_type/?Vck=' + CK + '&dtype=desktop">PC</a> версию!</div>', 1, 1);
                                    }
                                    var setArea = main.qs("#SP_PLUS_SETAREA");
                                    if (setArea) {
                                        for (var i in _SETTINGS) {
                                            if (i == 'bodystyle') {
                                                var bstlWrap = main.ce("div", {
                                                    class: "stnd-link",
                                                    style: "border-bottom: unset;"
                                                });
                                                var bstyle = main.ce("input", {
                                                    type: "text",
                                                    value: _SETTINGS.bodystyle.url,
                                                    class: "text-input",
                                                    style: "width: 50%;",
                                                    placeholder: "URL изображения"
                                                });
                                                bstyle.onchange = bstyle.oninput = function(e) {
                                                    if (main.isValidUrl(e.target.value) || e.target.value == '') {
                                                        e.target.style.backgroundColor = "";
                                                        _SETTINGS.bodystyle.url = main.trim(e.target.value);
                                                        var jsonSet = JSON.stringify(_SETTINGS);
                                                        main.setCookie("SP_PLUS_SET", jsonSet, null);
                                                        main.setStyle();
                                                    } else {
                                                        e.target.style.backgroundColor = "#FF7C7C";
                                                    }
                                                };
                                                var bstylec = main.ce("span", {
                                                    html: "<input placeholder='Цвет фона' type='color' value=" + _SETTINGS.bodystyle.color + ">",
                                                    style: "background-color:" + _SETTINGS.bodystyle.color,
                                                    class: "sp_input_color"
                                                });
                                                bstylec.onchange = bstylec.oninput = function(e) {
                                                    if (/^\#([A-Za-z0-9]{3}|[A-Za-z0-9]{6})$/i.test(e.target.value) || e.target.value == '') {
                                                        e.target.style.backgroundColor = "";
                                                        _SETTINGS.bodystyle.color = main.trim(e.target.value);
                                                        var jsonSet = JSON.stringify(_SETTINGS);
                                                        main.setCookie("SP_PLUS_SET", jsonSet, null);
                                                        main.setStyle();
                                                    } else {
                                                        e.target.style.backgroundColor = "#FF7C7C";
                                                    }
                                                };
                                                var inbstyle = main.ce("input", {
                                                    type: "checkbox",
                                                    id: "sp_set_" + i + "_URL",
                                                    checked: _SETTINGS.bodystyle.urlchecked,
                                                    class: "sp_plus_checkbox_el",
                                                    onclick: function(e) {
                                                        _SETTINGS.bodystyle.urlchecked = e.target.checked;
                                                        if (e.target.checked && inbstylec.checked) {
                                                            inbstylec.checked = false;
                                                            _SETTINGS.bodystyle.colorchecked = false;
                                                        }
                                                        var jsonSet = JSON.stringify(_SETTINGS);
                                                        main.setCookie("SP_PLUS_SET", jsonSet, null);
                                                        main.setStyle();
                                                    }
                                                });
                                                var inbstylec = main.ce("input", {
                                                    type: "checkbox",
                                                    id: "sp_set_" + i + "_color",
                                                    checked: _SETTINGS.bodystyle.colorchecked,
                                                    class: "sp_plus_checkbox_el",
                                                    onclick: function(e) {
                                                        _SETTINGS.bodystyle.colorchecked = e.target.checked;
                                                        if (e.target.checked && inbstyle.checked) {
                                                            inbstyle.checked = false;
                                                            _SETTINGS.bodystyle.urlchecked = false;
                                                        }
                                                        var jsonSet = JSON.stringify(_SETTINGS);
                                                        main.setCookie("SP_PLUS_SET", jsonSet, null);
                                                        main.setStyle();
                                                    }
                                                });
                                                var lbl = main.ce("div", {
                                                    class: "sp_plus_line",
                                                    html: "<span class='sp_plus_text'>Фон сайта</span>"
                                                });
                                                var lblstyle = main.ce("span", {
                                                    html: " - картинка <a href='#' onclick='if(confirm(\"Указывайте прямую ссылку на картинку!\\n\\nХотите открыть каталог фонов?\")) {window.open(\"https://crashmax-off.github.io/spaces_plus/\", \"_blank\");} return false;' style='cursor: help;'><span class=\"ico ico_question_light\"></span></a>"
                                                });
                                                var lblstylec = main.ce("span", {
                                                    html: " - цвет"
                                                });
                                                var lblstylelbl = main.ce("label", {
                                                    attr: {
                                                        "for": "sp_set_" + i + "_URL"
                                                    }
                                                });
                                                var lblstyleclbl = main.ce("label", {
                                                    attr: {
                                                        "for": "sp_set_" + i + "_color"
                                                    }
                                                });
                                            } else if (typeof _SETSTRINGS[i] != "undefined") {
                                                var tmpCkb = main.ce("input", {
                                                    id: "sp_set_" + i,
                                                    type: "checkbox",
                                                    class: "sp_plus_checkbox_el",
                                                    checked: _SETTINGS[i],
                                                    onclick: function(e) {
                                                        var id = e.target.id.split("_")[2];
                                                        _SETTINGS[id] = e.target.checked;
                                                        var jsonSet = JSON.stringify(_SETTINGS);
                                                        main.setCookie("SP_PLUS_SET", jsonSet, null);
                                                        if (e.target.id == "sp_set_rscroll") {
                                                            main.scrollMove(e.target.checked);
                                                        } else if (e.target.id == "sp_set_darkMode") {
                                                            main.darkMode(e.target.checked);
                                                            if (e.target.checked) {
                                                                main.darkModeNav(e.target);
                                                            } else {
                                                                var dmWrap = main.qs("#SP_DARKMODE_WRAP");
                                                                if (dmWrap) {
                                                                    main.remove(dmWrap);
                                                                }
                                                            }
                                                        } else if (e.target.id == "sp_set_hrightbar") {
                                                            main.hiddenRightbar(e.target.checked);
                                                        } else if (e.target.id == "sp_set_debug") {
                                                            if (e.target.checked) {
                                                                main.console.debug("[S+] Запустили консоль!");
                                                            } else {
                                                                main.console.remove();
                                                            }
                                                        } else if (e.target.id == "sp_set_myEvents") {
                                                            if (e.target.checked) {
                                                                main.evenstSupport(e.target);
                                                            } else {
                                                                eventsCounter = 0;
                                                                var eventDiv = main.qs("#SP_PLUS_EVENTS");
                                                                if (eventDiv) {
                                                                    main.remove(eventDiv);
                                                                }
                                                            }
                                                        } else if (e.target.id == "sp_set_friendsOn") {
                                                            main.friendsOnline(e.target.checked);
                                                            if (e.target.checked) {
                                                                main.setFriend(e.target);
                                                            } else {
                                                                var frMaxWrap = main.qs("#SP_PLUS_MAXFRIENDS");
                                                                if (frMaxWrap) {
                                                                    main.remove(frMaxWrap);
                                                                }
                                                            }
                                                        } else if (e.target.id == "sp_set_comments") {
                                                            if (e.target.checked) {
                                                                main.comments2m(e.target);
                                                            } else {
                                                                var c2mWrap = main.qs("#SP_C2M_WRAP");
                                                                if (c2mWrap) {
                                                                    main.remove(c2mWrap);
                                                                }
                                                            }
                                                        }
                                                    }
                                                });
                                                var tmpLbl = main.ce("label", {
                                                    html: _SETSTRINGS[i],
                                                    attr: {
                                                        "for": "sp_set_" + i
                                                    }
                                                });
                                                var bstlWrap2 = main.ce("label", {
                                                    class: "stnd-link bstrwrap"
                                                });
                                            }
                                            if (typeof _SETSTRINGS[i] != "undefined") {
                                                bstlWrap2.appendChild(tmpCkb);
                                                bstlWrap2.appendChild(tmpLbl);
                                                setArea.appendChild(bstlWrap2);
                                                setArea.appendChild(bstlWrap2);
                                            }
                                        }
                                        if (_SETTINGS.friendsOn) {
                                            main.setFriend(main.qs("#sp_set_friendsOn"));
                                        }
                                        if (_SETTINGS.comments) {
                                            main.comments2m(main.qs("#sp_set_comments"));
                                        }
                                        if (_SETTINGS.darkMode) {
                                            main.darkModeNav(main.qs("#sp_set_darkMode"));
                                        }
                                        if (_SETTINGS.myEvents) {
                                            main.evenstSupport(main.qs("#sp_set_myEvents"));
                                        }
                                        setArea.appendChild(lbl);
                                        bstlWrap.appendChild(inbstyle);
                                        bstlWrap.appendChild(lblstylelbl);
                                        lblstylelbl.appendChild(bstyle);
                                        lblstylelbl.appendChild(lblstyle);
                                        bstlWrap.appendChild(main.ce("br", null));
                                        bstlWrap.appendChild(inbstylec);
                                        bstlWrap.appendChild(lblstyleclbl);
                                        lblstyleclbl.appendChild(bstylec);
                                        lblstyleclbl.appendChild(lblstylec);
                                        setArea.appendChild(bstlWrap);
                                        var spActLbl = main.ce("div", {
                                            class: "sp_plus_line",
                                            html: "<span class='sp_plus_text'>Встроенные возможности сайта</span>"
                                        });
                                        var spActLbl2 = main.ce("div", {
                                            class: "sp_plus_line",
                                            html: "<span class='sp_plus_text'>Дополнительные функции</span>"
                                        });
                                        setArea.appendChild(spActLbl);
                                        main.spacesAction(setArea);
                                        main.newbequest();
                                        setArea.appendChild(spActLbl2);
                                        var tgLink = main.ce("a", {
                                            href: (_PROTOCOL == "http:" ? "https:" : "http:") + "//spaces.ru/settings/?sp_plus_settings=1",
                                            class: "stnd-link stnd-link_arr",
                                            id: "sp_protocol_togl",
                                            html: "<span class='b'><span class='" + (_PROTOCOL == "http:" ? "ico ico_locked" : "ico_chat ico_lock_open") + "'></span> Переключиться на " + (_PROTOCOL == "http:" ? "HTTPS" : "HTTP") + "-протокол<span class='ico ico_arr ico_m'></span></span>",
                                            style: "font-size: small;",
                                            onclick: function() {
                                                document.location.href = (_PROTOCOL == "http:" ? "https:" : "http:") + "//spaces.ru/settings/?sp_plus_settings=1";
                                                return false;
                                            }
                                        });
                                        setArea.appendChild(tgLink);
                                        var cookEdit = main.ce("a", {
                                            href: _PROTOCOL + "//spaces.ru/settings/?sp_plus_settings=1&sp_cookie_editor=1",
                                            class: "stnd-link stnd-link_arr",
                                            id: "sp_cookie_editor",
                                            html: "<span class='b'><span class='ico ico_edit_dim'></span> Редактор Cookies<span class='ico ico_arr ico_m'></span></span>",
                                            style: "font-size: small;",
                                            onclick: function() {
                                                var head = main.qs("#SP_PLUS_SETHEAD");
                                                var head2 = main.qs("#SP_PLUS_SETHEAD2");
                                                var back = main.qs("#SP_PLUS_SETBACK");
                                                if (head) {
                                                    head.innerHTML = '<a href="http://spaces.ru/settings/?sp_plus_settings=1" style="margin-bottom: 1px;">Spaces+</a><span class="location-bar__sep ico"></span> Редактор cookies';
                                                }
                                                if (head2) {
                                                    head2.innerHTML = '<a href="http://spaces.ru/settings/?sp_plus_settings=1" style="margin-bottom: 1px;">Spaces+</a><span class="location-bar__sep ico"></span> Редактор cookies';
                                                }
                                                if (back) {
                                                    back.href = _PROTOCOL + "//spaces.ru/settings/?sp_plus_settings=1";
                                                }
                                                if (!/(\?|&)sp_cookie_editor=1/i.test(lct)) {
                                                    main.historyPush({
                                                        'sp_plus_settings': urlSett,
                                                        'sp_cookie_editor': urlSettEditor
                                                    }, _PROTOCOL + "//spaces.ru/settings/?sp_plus_settings=1&sp_cookie_editor=1", "Spaces+: Редактор Cookies");
                                                }
                                                main.cookieEditor("#SP_PLUS_SETAREA");
                                                return false;
                                            }
                                        });
                                        setArea.appendChild(cookEdit);
                                        var isOnl = main.ce("a", {
                                            href: _PROTOCOL + "//spaces.ru/settings/?sp_plus_settings=1&sp_isonline_editor=1",
                                            class: "stnd-link stnd-link_arr",
                                            id: "sp_isonline_editor",
                                            html: "<span class='b'><span class='ico ico_speaker'></span>Проверка онлайна<span class='ico ico_arr ico_m'></span></span>",
                                            style: "font-size: small;",
                                            onclick: function() {
                                                if (!("Notification" in window)) {
                                                    main.alertm("Ваш браузер не поддерживает уведомления!", 1, null);
                                                } else if (Notification.permission.toLowerCase() === "granted") {
                                                    var head = main.qs("#SP_PLUS_SETHEAD");
                                                    var head2 = main.qs("#SP_PLUS_SETHEAD2");
                                                    var back = main.qs("#SP_PLUS_SETBACK");
                                                    if (head) {
                                                        head.innerHTML = '<span style="color: #0000FF;">Spaces+</span>: проверка онлайна';
                                                    }
                                                    if (head2) {
                                                        head2.innerHTML = '<a href="http://spaces.ru/settings/?sp_plus_settings=1" style="margin-bottom: 1px;">Spaces+</a><span class="location-bar__sep ico"></span> Проверка онлайна';
                                                    }
                                                    if (back) {
                                                        back.href = _PROTOCOL + "//spaces.ru/settings/?sp_plus_settings=1";
                                                    }
                                                    if (!/(\?|&)sp_isonline_editor=1/i.test(lct)) {
                                                        main.historyPush({
                                                            'sp_plus_settings': urlSett,
                                                            'sp_isonline_editor': urlSettOnEditor
                                                        }, _PROTOCOL + "//spaces.ru/settings/?sp_plus_settings=1&sp_isonline_editor=1", "Spaces+: проверка онлайна");
                                                    }
                                                    main.isOnlineSetting("#SP_PLUS_SETAREA");
                                                } else if (Notification.permission.toLowerCase() !== "denied") {
                                                    Notification.requestPermission(function(permission) {
                                                        if (permission.toLowerCase() === "granted") {
                                                            var head = main.qs("#SP_PLUS_SETHEAD");
                                                            var head2 = main.qs("#SP_PLUS_SETHEAD2");
                                                            var back = main.qs("#SP_PLUS_SETBACK");
                                                            if (head) {
                                                                head.innerHTML = '<a href="http://spaces.ru/settings/?sp_plus_settings=1" style="margin-bottom: 1px;">Spaces+</a><span class="location-bar__sep ico"></span> Проверка онлайна';
                                                            }
                                                            if (head2) {
                                                                head2.innerHTML = '<a href="http://spaces.ru/settings/?sp_plus_settings=1" style="margin-bottom: 1px;">Spaces+</a><span class="location-bar__sep ico"></span> Проверка онлайна';
                                                            }
                                                            if (back) {
                                                                back.href = _PROTOCOL + "//spaces.ru/settings/?sp_plus_settings=1";
                                                            }
                                                            if (!/(\?|&)sp_isonline_editor=1/i.test(lct)) {
                                                                main.historyPush({
                                                                    'sp_plus_settings': urlSett,
                                                                    'sp_isonline_editor': urlSettOnEditor
                                                                }, _PROTOCOL + "//spaces.ru/settings/?sp_plus_settings=1&sp_isonline_editor=1", "Spaces+: проверка онлайна");
                                                            }
                                                            main.isOnlineSetting("#SP_PLUS_SETAREA");
                                                        } else {
                                                            main.alertm("Разрешите браузеру показывать уведомления с сайта Spaces.ru, чтобы пользоваться функцией!", 1, null);
                                                        }
                                                    });
                                                } else {
                                                    main.alertm("Вы <b style='color: #800;'>запретили</b> показывать уведомления для сайта Spaces.ru!<br/>Зайдите в настройки браузера и настройте доступ (для Google Chrome включите HTTPS-протокол).", 1, null);
                                                }
                                                return false;
                                            }
                                        });
                                        setArea.appendChild(isOnl);
                                        var resetLink = main.ce("a", {
                                            href: "#",
                                            class: "stnd-link stnd-link_arr",
                                            id: "sp_plus_reset",
                                            html: "<span class='b' style='color: #f86934;'><span class='ico ico_alert'></span> Сброс настроек<span class='ico ico_arr ico_m'></span></span>",
                                            style: "font-size: small;",
                                            onclick: function() {
                                                main.confirmm("Сбросить <b style='color: #F00;'>ВСЕ</b> настройки скрипта?", function() {
                                                    main.delCookie("SP_PLUS_SET");
                                                    main.delCookie("SP_PLUS_ONLINE");
                                                    main.delCookie("gp_left_btn");
                                                    main.delCookie("force_ajax_transport");
                                                    main.delCookie("beta");
                                                    document.location.reload();
                                                });
                                                return false;
                                            }
                                        });
                                        setArea.appendChild(resetLink);
                                        if (!/(\?|&)sp_plus_settings=1/i.test(lct)) {
                                            main.historyPush({
                                                'sp_plus_settings': urlSett
                                            }, _PROTOCOL + "//spaces.ru/settings/?sp_plus_settings=1", "Настройки Spaces+");
                                        }
                                    }
                                    return false;
                                }
                            });
                            main.inBefore(settLink, chLink);
                            if (chLink.nextElementSibling.nodeName == "BR") {
                                main.insertAfter(main.ce("br", null), settLink);
                            }
                            if (urlSett) {
                                document.title = "Настройки Spaces+";
                                var clickEvent = document.createEvent("MouseEvent");
                                clickEvent.initEvent("click", true, true);
                                settLink.dispatchEvent(clickEvent);
                                if (/#([da-z0-9\_]+)$/i.test(lct)) {
                                    var seid = /#([da-z0-9\_]+)$/i.exec(lct)[0];
                                    var seidel = main.qs(seid);
                                    if (seidel) {
                                        if (seid == "#sp_protocol_togl" || seid == "#sp_plus_reset" || seid == "#sp_cookie_editor" || seid == "#wrap_spaces_option") {
                                            seidel.style.backgroundColor = "#FFC107";
                                        } else {
                                            seidel.nextElementSibling.style.backgroundColor = "#FFC107";
                                        }
                                        setTimeout(function() {
                                            window.scrollTo(0, seidel.offsetTop);
                                        }, 100);
                                    }
                                } else if (urlSettEditor) {
                                    document.title = "Spaces+: Редактор Cookies";
                                    var clickEvent2 = document.createEvent("MouseEvent");
                                    clickEvent2.initEvent("click", true, true);
                                    main.qs("#sp_cookie_editor").dispatchEvent(clickEvent2);
                                } else if (urlSettOnEditor) {
                                    document.title = "Spaces+: проверка онлайна";
                                    var clickEvent2 = document.createEvent("MouseEvent");
                                    clickEvent2.initEvent("click", true, true);
                                    main.qs("#sp_isonline_editor").dispatchEvent(clickEvent2);
                                }
                            }
                        }
                    } catch (e) {
                        main.console.error('Ошибка (SETTINGS): ' + e.name + ":" + e.message + "\n" + e.stack);
                    }
                }
            },
            notifications: function(title, option, url) {
                try {
                    if (!("Notification" in window)) {
                        main.alertm("Ваш браузер не поддерживает уведомления!", 1, null);
                    } else if (Notification.permission.toLowerCase() === "granted") {
                        main.notificationShow(title, option, url);
                    } else if (Notification.permission.toLowerCase() !== "denied") {
                        Notification.requestPermission(function(permission) {
                            if (permission.toLowerCase() === "granted") {
                                main.notificationShow(title, option, url);
                            } else {
                                main.alertm("Вы <b style='color: #800;'>запретили</b> показывать уведомления для сайта Spaces.ru!<br/>Зайдите в настройки браузера и настройте доступ.", 1, null);
                            }
                        });
                    } else {
                        main.alertm("Разрешите браузеру показывать уведомления с сайта Spaces.ru, чтобы пользоваться функцией!", 1, null);
                    }
                } catch (e) {
                    main.console.error('Ошибка (NOTIFICATIONS): ' + e.name + ":" + e.message + "\n" + e.stack);
                }
            },
            notificationShow: function(title, option, url) {
                try {
                    var notification = new Notification(title, option);
                    if (url != null) {
                        notification.onclick = function(e) {
                            e.preventDefault();
                            main.setLocation(url);
                            e.target.close();
                        };
                    }
                } catch (e) {
                    main.console.error('Ошибка (NOTIFICATION_SHOW): ' + e.name + ":" + e.message + "\n" + e.stack);
                }
            },
            isOnlineSupport: function(t) {
                try {
                    if (INTERVAL && t) {
                        clearInterval(INTERVAL);
                        INTERVAL = null;
                    }
                    if (!INTERVAL && _SETTINGS.isOnline) {
                        if (!t) main.isOnline(ONLINE);
                        INTERVAL = setInterval(function() {
                            main.isOnline(ONLINE);
                        }, _SETTINGS.isOnlineInt * 60000);
                    }
                } catch (e) {
                    main.console.error('Ошибка (ISONLINE_SUPPORT): ' + e.name + ":" + e.message + "\n" + e.stack);
                }
            },
            isOnline: function(obj) {
                try {
                    var array = new Array();
                    for (var i in obj) {
                        array.push(i);
                    }
                    var count = array.length;
                    if (count > 0) {
                        var intr = setInterval(function() {
                            count--;
                            main.jajax(_PROTOCOL + "//spaces.ru/anketa/?user=" + array[count], function(data) {
                                if (data) {
                                    try {
                                        var _json = {
                                            'user_widget': {
                                                'is_online': null,
                                                'name': null,
                                                'photo_widget': {
                                                    'previewURL': null
                                                }
                                            }
                                        };
                                        var json = main.extend(_json, JSON.parse(data));
                                        if (json.user_widget.name) {
                                            var name = json.user_widget.name;
                                            main.console.info("Проверка онлайна: " + name);
                                            if (json.user_widget.is_online == "1" && obj[name] && obj[name] == "off") {
                                                var icon;
                                                if (json.user_widget.photo_widget.previewURL && /\.p\.\d+\.\d+\.\d+.*?jpg\?\d+$/i.test(json.user_widget.photo_widget.previewURL)) {
                                                    icon = json.user_widget.photo_widget.previewURL.replace(/\.p\.\d+\.\d+\.(\d+)(.*?)jpg\?(\d+)$/i, ".p.40.40.$1$2jpg?$3");
                                                } else {
                                                    icon = ICON48;
                                                }
                                                main.notifications(json.user_widget.name + " онлайн!", {
                                                    body: "Пользователь " + json.user_widget.name + " появился в сети!",
                                                    icon: icon,
                                                    tag: json.user_widget.name
                                                }, _PROTOCOL + "//spaces.ru/mysite/?name=" + json.user_widget.name);
                                                ONLINE[json.user_widget.name] = "on";
                                                var jsonSet = JSON.stringify(ONLINE);
                                                main.setCookie("SP_PLUS_ONLINE", jsonSet, null);
                                            } else if (json.user_widget.is_online == 0 && obj[name] && obj[name] == "on") {
                                                ONLINE[json.user_widget.name] = "off";
                                                var jsonSet = JSON.stringify(ONLINE);
                                                main.setCookie("SP_PLUS_ONLINE", jsonSet, null);
                                            }
                                        }
                                    } catch (e) {
                                        main.console.error('Ошибка (JSON_ISONLINE): ' + e.name + ":" + e.message + "\n" + e.stack);
                                    }
                                }
                            });
                            if (count < 1) {
                                clearInterval(intr);
                            }
                        }, 1000);
                    }
                } catch (e) {
                    main.console.error('Ошибка (ISONLINE): ' + e.name + ":" + e.message + "\n" + e.stack);
                }
            },
            isOnlineSetting: function(id) {
                window.scrollTo(0, 0);
                var target = main.qs(id);
                if (target) {
                    try {
                        target.innerHTML = "";
                        if (!_SETTINGS.hideNotyf.isOnline) {
                            var hideNotyf = main.ce("img", {
                                class: "p16 m pointer right",
                                style: "padding: 10px;",
                                src: _PROTOCOL + "//spac.me/i/remove.png",
                                title: "Понятно, больше не показывать.",
                                onclick: function(e) {
                                    _SETTINGS.hideNotyf.isOnline = true;
                                    var jsonSet = JSON.stringify(_SETTINGS);
                                    main.setCookie("SP_PLUS_SET", jsonSet, null);
                                    main.isOnlineSetting("#SP_PLUS_SETAREA");
                                }
                            });
                            var smallInfo = main.ce("div", {
                                class: "stnd-block-yellow",
                                style: "padding: 15px;",
                                html: 'Вы можете добавить здесь аккаунты, о онлайне которых нужно оповещать, а также частоту проверки.<br /><span class="ico ico_alert"></span><b style="color: #F00;">Внимание!</b> <b>Функция потребляет трафик в фоновом режиме!</b>'
                            });
                            var infoDiv = main.ce("div", null);
                            infoDiv.appendChild(hideNotyf);
                            target.appendChild(infoDiv);
                            infoDiv.appendChild(smallInfo);
                            target.appendChild(main.ce("br", null));
                        }
                        var wraps = main.ce("div", {
                            class: "content-bl__sep",
                            style: "padding: 10px;",
                            html: '<label class="label" style="margin-top: -7px;margin-bottom: 2px; text-align: left;">Настройки:</label>'
                        });
                        var tmpCkb = main.ce("input", {
                            id: "sp_set_isOnline",
                            type: "checkbox",
                            class: "sp_plus_checkbox_el",
                            checked: _SETTINGS.isOnline,
                            onclick: function(e) {
                                _SETTINGS.isOnline = e.target.checked;
                                var jsonSet = JSON.stringify(_SETTINGS);
                                main.setCookie("SP_PLUS_SET", jsonSet, null);
                                main.isOnlineSupport(1);
                            }
                        });
                        var tmpLbl = main.ce("label", {
                            html: " - включить функцию",
                            attr: {
                                "for": "sp_set_isOnline"
                            }
                        });
                        var string = main.declOfNum((main.isInteger(_SETTINGS.isOnlineInt) ? _SETTINGS.isOnlineInt : 3), ["минута.", "минуты.", "минут."]);
                        var intr = main.ce("span", {
                            style: "color: #808080; margin-left: 7px; font-size: small",
                            html: "Интервал проверки: " + _SETTINGS.isOnlineInt + " " + string
                        });
                        var tmpRange = main.ce("input", {
                            type: "range",
                            min: 1,
                            max: 60,
                            step: 1,
                            value: _SETTINGS.isOnlineInt
                        });
                        tmpRange.onchange = tmpRange.oninput = function(e) {
                            if (!isNaN(e.target.value)) {
                                var setInt = parseInt(e.target.value, 10);
                                if (setInt < 1 || setInt > 60) {
                                    setInt = 1;
                                }
                                var string = main.declOfNum((main.isInteger(setInt / 2) ? (setInt / 2) : 3), ["минута.", "минуты.", "минут."]);
                                intr.innerHTML = "Интервал проверки: " + (setInt / 2).toFixed(1) + " " + string;
                                _SETTINGS.isOnlineInt = (setInt / 2);
                                var jsonSet = JSON.stringify(_SETTINGS);
                                main.setCookie("SP_PLUS_SET", jsonSet, null);
                                main.isOnlineSupport(1);
                            }
                        };
                        var cntt = 1;
                        var testlnk = main.ce("a", {
                            class: "sp_plus_a",
                            html: "Тест уведомления",
                            href: "#",
                            onclick: function(e) {
                                main.notifications("Тестовое уведомление #" + cntt + "!", {
                                    body: "Текст уведомления #" + cntt + ".",
                                    icon: ICON48,
                                    tag: "test"
                                }, null);
                                cntt++;
                                return false;
                            }
                        });
                        wraps.appendChild(tmpCkb);
                        wraps.appendChild(tmpLbl);
                        wraps.appendChild(main.ce("br", null));
                        wraps.appendChild(tmpRange);
                        wraps.appendChild(main.ce("br", null));
                        wraps.appendChild(intr);
                        wraps.appendChild(main.ce("br", null));
                        wraps.appendChild(testlnk);
                        target.appendChild(wraps);
                        var wrap1 = main.ce("div", {
                            class: "content-bl__sep",
                            style: "padding: 10px;",
                            html: '<label class="label" style="margin-top: 7px; margin-bottom: 2px; text-align: left;">Добавить пользователя:</label>',
                        });
                        var inp1 = main.ce("input", {
                            type: "text",
                            class: "text-input",
                            placeholder: "Ник пользователя",
                            style: "width: 60%; margin: 3px;"
                        });
                        inp1.onchange = inp1.oninput = function(e) {
                            if (/^[A-Za-z0-9\_]+$/i.test(e.target.value) || main.trim(e.target.value) == "") {
                                e.target.style.backgroundColor = "";
                            } else {
                                e.target.style.backgroundColor = "#FF7C7C";
                            }
                        };
                        var inp3 = main.ce("button", {
                            html: "<span class='sp_plus_ico_okb'></span> Добавить",
                            class: "black",
                            style: "max-width: 30%; margin: 3px; padding: 5px 3px 3px 7px; font-size: 14px;",
                            onclick: function(e) {
                                var prev = (e.target.nodeName == "SPAN" ? e.target.parentNode.previousElementSibling : e.target.previousElementSibling);
                                var name = main.htmlspecialchars(main.trim(prev.value));
                                if (/^[A-Za-z0-9\_]+$/i.test(name) && main.trim(name) != "") {
                                    if (ONLINE[name]) {
                                        main.alertm("Пользователь <span style='color: #0000FF;'>\"" + name + "\"</span> уже есть в списке!", 1, null);
                                    } else if (name != "") {
                                        main.confirmm("Хотите добавить пользователя <span style='color: #0000FF;'>\"" + name + "\"</span> в список?", function() {
                                            ONLINE[name] = "off";
                                            var jsonSet = JSON.stringify(ONLINE);
                                            main.setCookie("SP_PLUS_ONLINE", jsonSet, null);
                                            main.isOnlineSetting("#SP_PLUS_SETAREA");
                                        });
                                    } else {
                                        main.alertm("Задайте ник пользователя!", 1, null);
                                    }
                                } else {
                                    main.alertm("Ник пользователя должен состоять из латинских букв, цифр и символа подчёркивания!", 1, null);
                                }
                            }
                        });
                        wrap1.appendChild(inp1);
                        wrap1.appendChild(inp3);
                        target.appendChild(wrap1);
                        target.appendChild(main.ce("div", {
                            html: '<label class="label" style="margin-bottom: 2px; padding: 10px; text-align: left;">Список пользователей:</label>',
                        }));
                        for (var i in ONLINE) {
                            var wrap = main.ce("div", {
                                style: "padding-left: 10px; padding-bottom: 10px;"
                            });
                            var tmp = main.ce("a", {
                                href: _PROTOCOL + "//spaces.ru/mysite/?name=" + i,
                                class: "sp_plus_a",
                                html: i,
                                style: "margin-right: 12px;"
                            });
                            var tmp3 = main.ce("a", {
                                html: "<span class='sp_plus_ico_del'></span>",
                                title: "Удалить",
                                href: "#",
                                onclick: function(e) {
                                    var prev = (e.target.nodeName == "SPAN" ? e.target.parentNode.previousElementSibling : e.target.previousElementSibling);
                                    var name = main.htmlspecialchars(main.trim(prev.innerHTML));
                                    if (!ONLINE[name]) {
                                        main.alertm("Пользователя <span style='color: #0000FF;'>\"" + name + "\"</span> нет в списке!", 1, null);
                                    } else if (name != "") {
                                        main.confirmm("Хотите удалить пользователя <span style='color: #0000FF;'>\"" + name + "\"</span> из списка?", function() {
                                            delete ONLINE[name];
                                            var jsonSet = JSON.stringify(ONLINE);
                                            main.setCookie("SP_PLUS_ONLINE", jsonSet, null);
                                            main.isOnlineSetting("#SP_PLUS_SETAREA");
                                        });
                                    } else {
                                        main.alertm("Ошибка удаления!", 1, null);
                                    }
                                    return false;
                                }
                            });
                            wrap.appendChild(tmp);
                            wrap.appendChild(tmp3);
                            target.appendChild(wrap);
                        }
                    } catch (e) {
                        main.console.error('Ошибка (ISONLINE_SETTINGS): ' + e.name + ":" + e.message + "\n" + e.stack);
                    }
                }
            },
            comments2m: function(e) {
                try {
                    var c2mWrap = main.ce("div", {
                        id: "SP_C2M_WRAP",
                        style: "padding-left: 7px; margin-left: 7px; border-left: 5px solid #92BEE2;"
                    });
                    var c2m = main.ce("input", {
                        type: "checkbox",
                        id: "sp_comments_m2",
                        class: "sp_plus_checkbox_el",
                        checked: _SETTINGS.comments_m2,
                        onclick: function(e) {
                            _SETTINGS.comments_m2 = e.target.checked;
                            var jsonSet = JSON.stringify(_SETTINGS);
                            main.setCookie("SP_PLUS_SET", jsonSet, null);
                        }
                    });
                    var c2mLbl = main.ce("label", {
                        attr: {
                            "for": "sp_comments_m2"
                        },
                        html: " - альтернативный метод (если не работает основной)",
                        style: "font-size: small;"
                    });
                    c2mWrap.appendChild(c2m);
                    c2mWrap.appendChild(c2mLbl);
                    main.insertAfter(c2mWrap, e.nextElementSibling);
                } catch (e) {
                    main.console.error('Ошибка (C2M_SUPPORT): ' + e.name + ":" + e.message + "\n" + e.stack);
                }
            },
            setFriend: function(e) {
                try {
                    var frMaxWrap = main.ce("div", {
                        id: "SP_PLUS_MAXFRIENDS",
                        style: "padding-left: 7px; margin-left: 7px; border-left: 5px solid #92BEE2;"
                    });
                    var frMax = main.ce("input", {
                        type: "number",
                        class: "text-input",
                        style: "width: 8%;",
                        min: 1,
                        max: 15,
                        step: 1,
                        size: 3,
                        placeholder: "1 - 15",
                        value: _SETTINGS.friendsOnMax
                    });
                    frMax.onchange = frMax.oninput = function(e) {
                        if (!isNaN(e.target.value)) {
                            var frMaxVal = parseInt(e.target.value, 10);
                            if (frMaxVal > 15 || frMaxVal < 1) {
                                frMaxVal = 10;
                            }
                            countFriends = 0;
                            _SETTINGS.friendsOnMax = frMaxVal;
                            var jsonSet = JSON.stringify(_SETTINGS);
                            main.setCookie("SP_PLUS_SET", jsonSet, null);
                            main.friendsOnline(1);
                        }
                    };
                    var frMaxLbl = main.ce("span", {
                        html: " - максимум друзей (1 - 15).",
                        style: "font-size: small;"
                    });
                    var frListSH = main.ce("input", {
                        type: "checkbox",
                        id: "sp_friends_list_sh",
                        class: "sp_plus_checkbox_el",
                        checked: _SETTINGS.friendsListSH,
                        onclick: function(e) {
                            _SETTINGS.friendsListSH = e.target.checked;
                            var jsonSet = JSON.stringify(_SETTINGS);
                            main.setCookie("SP_PLUS_SET", jsonSet, null);
                        }
                    });
                    var frListSHLbl = main.ce("label", {
                        attr: {
                            "for": "sp_friends_list_sh"
                        },
                        html: " - скрывать/показывать по клику на счётчике.",
                        style: "font-size: small;"
                    });
                    frMaxWrap.appendChild(frMax);
                    frMaxWrap.appendChild(frMaxLbl);
                    frMaxWrap.appendChild(main.ce("br", null));
                    frMaxWrap.appendChild(frListSH);
                    frMaxWrap.appendChild(frListSHLbl);
                    main.insertAfter(frMaxWrap, e.nextElementSibling);
                } catch (e) {
                    main.console.error('Ошибка (FRIENDS_MAX_SUPPORT): ' + e.name + ":" + e.message + "\n" + e.stack);
                }
            },
            evenstSupport: function(e) {
                try {
                    var eventsWrap = main.ce("div", {
                        id: "SP_PLUS_EVENTS",
                        style: "padding-left: 7px; margin-left: 7px; border-left: 5px solid #92BEE2;"
                    });
                    var notifEvent = main.ce("input", {
                        type: "checkbox",
                        id: "sp_event_notif",
                        class: "sp_plus_checkbox_el",
                        checked: _SETTINGS.events.notifications,
                        onclick: function(e) {
                            if (!("Notification" in window)) {
                                main.alertm("Ваш браузер не поддерживает уведомления!", 1, null);
                                return false;
                            } else if (Notification.permission.toLowerCase() === "granted") {
                                _SETTINGS.events.notifications = e.target.checked;
                                var jsonSet = JSON.stringify(_SETTINGS);
                                main.setCookie("SP_PLUS_SET", jsonSet, null);
                            } else if (Notification.permission.toLowerCase() !== "denied") {
                                Notification.requestPermission(function(permission) {
                                    if (permission.toLowerCase() === "granted") {
                                        _SETTINGS.events.notifications = e.target.checked;
                                        var jsonSet = JSON.stringify(_SETTINGS);
                                        main.setCookie("SP_PLUS_SET", jsonSet, null);
                                    } else {
                                        main.alertm("Разрешите браузеру показывать уведомления с сайта Spaces.ru, чтобы пользоваться функцией!", 1, null);
                                        return false;
                                    }
                                });
                            } else {
                                main.alertm("Вы <b style='color: #800;'>запретили</b> показывать уведомления для сайта Spaces.ru!<br/>Зайдите в настройки браузера и настройте доступ (для Google Chrome включите HTTPS-протокол).", 1, null);
                                return false;
                            }
                        }
                    });
                    var notifEventLbl = main.ce("label", {
                        attr: {
                            "for": "sp_event_notif"
                        },
                        html: " - уведомления в браузере.",
                        style: "font-size: small;"
                    });
                    var eventsUrl = main.ce("input", {
                        type: "url",
                        value: _SETTINGS.events.url,
                        class: "text-input",
                        style: "width: 80%",
                        placeholder: "https://example.com/sound.ogg"
                    });
                    eventsUrl.onchange = eventsUrl.oninput = function(e) {
                        if ((main.isValidUrl(e.target.value) && /\.(ogg|mp3)$/i.test(e.target.value)) || main.trim(e.target.value) == "") {
                            _SETTINGS.events.url = main.trim(e.target.value);
                            var jsonSet = JSON.stringify(_SETTINGS);
                            main.setCookie("SP_PLUS_SET", jsonSet, null);
                        } else {
                            e.target.style.backgroundColor = "#FF7C7C";
                        }
                    };
                    var testPlay = main.ce("a", {
                        href: "#",
                        html: '<span class="ico ico_demo"></span>',
                        style: "margin-left: 7px; font-size: small",
                        title: "Прослушать",
                        onclick: function(e) {
                            main.sound(_SETTINGS.events.url + "?r=" + main.rand(1000, 9999), _SETTINGS.events.volume);
                            return false;
                        }
                    });
                    var volum = main.ce("span", {
                        style: "margin-left: 7px; font-size: small",
                        html: _SETTINGS.events.volume + "%"
                    });
                    var volRange = main.ce("input", {
                        type: "range",
                        min: 0,
                        max: 100,
                        step: 1,
                        value: _SETTINGS.events.volume
                    });
                    volRange.onchange = volRange.oninput = function(e) {
                        if (!isNaN(e.target.value)) {
                            var setVol = parseInt(e.target.value, 10);
                            if (setVol < 0 || setVol > 100) {
                                setVol = 70;
                            }
                            volum.innerHTML = setVol + "%";
                            _SETTINGS.events.volume = setVol;
                            var jsonSet = JSON.stringify(_SETTINGS);
                            main.setCookie("SP_PLUS_SET", jsonSet, null);
                        }
                    };
                    var mailEvent = main.ce("input", {
                        type: "checkbox",
                        id: "sp_event_mail",
                        class: "sp_plus_checkbox_el",
                        checked: _SETTINGS.events.mail,
                        onclick: function(e) {
                            _SETTINGS.events.mail = e.target.checked;
                            var jsonSet = JSON.stringify(_SETTINGS);
                            main.setCookie("SP_PLUS_SET", jsonSet, null);
                        }
                    });
                    var mailEventLbl = main.ce("label", {
                        attr: {
                            "for": "sp_event_mail"
                        },
                        html: " - уведомлять о почте.",
                        style: "font-size: small;"
                    });
                    var jourEvent = main.ce("input", {
                        type: "checkbox",
                        id: "sp_event_journal",
                        class: "sp_plus_checkbox_el",
                        checked: _SETTINGS.events.journal,
                        onclick: function(e) {
                            _SETTINGS.events.journal = e.target.checked;
                            var jsonSet = JSON.stringify(_SETTINGS);
                            main.setCookie("SP_PLUS_SET", jsonSet, null);
                        }
                    });
                    var jourEventLbl = main.ce("label", {
                        attr: {
                            "for": "sp_event_journal"
                        },
                        html: " - уведомлять о журнале.",
                        style: "font-size: small;"
                    });
                    var feedEvent = main.ce("input", {
                        type: "checkbox",
                        id: "sp_event_feed",
                        class: "sp_plus_checkbox_el",
                        checked: _SETTINGS.events.feed,
                        onclick: function(e) {
                            _SETTINGS.events.feed = e.target.checked;
                            var jsonSet = JSON.stringify(_SETTINGS);
                            main.setCookie("SP_PLUS_SET", jsonSet, null);
                        }
                    });
                    var feedEventLbl = main.ce("label", {
                        attr: {
                            "for": "sp_event_feed"
                        },
                        html: " - уведомлять о ленте.",
                        style: "font-size: small;"
                    });
                    eventsWrap.appendChild(notifEvent);
                    eventsWrap.appendChild(notifEventLbl);
                    eventsWrap.appendChild(main.ce("br", null));
                    eventsWrap.appendChild(eventsUrl);
                    eventsWrap.appendChild(testPlay);
                    eventsWrap.appendChild(main.ce("br", null));
                    eventsWrap.appendChild(volRange);
                    eventsWrap.appendChild(volum);
                    eventsWrap.appendChild(main.ce("br", null));
                    eventsWrap.appendChild(mailEvent);
                    eventsWrap.appendChild(mailEventLbl);
                    eventsWrap.appendChild(main.ce("br", null));
                    eventsWrap.appendChild(jourEvent);
                    eventsWrap.appendChild(jourEventLbl);
                    eventsWrap.appendChild(main.ce("br", null));
                    eventsWrap.appendChild(feedEvent);
                    eventsWrap.appendChild(feedEventLbl);
                    eventsWrap.appendChild(main.ce("br", null));
                    main.insertAfter(eventsWrap, e.nextElementSibling);
                } catch (e) {
                    main.console.error('Ошибка (EVENTS_SUP): ' + e.name + ":" + e.message + "\n" + e.stack);
                }
            },
            historyPush: function(state, url, title) {
                try {
                    document.title = title;
                    history.pushState(state, title, url);
                } catch (e) {
                    main.console.error('Ошибка (HISTORY): ' + e.name + ":" + e.message + "\n" + e.stack);
                }
            },
            remove: function(e) {
                return e.parentNode.removeChild(e);
            },
            isInteger: function(n) {
                return (n ^ 0) === n;
            },
            wrap: function(toWrap, wrapper) {
                wrapper = wrapper || main.ce("div", null);
                if (toWrap.nextSibling) {
                    main.inBefore(wrapper, toWrap.nextSibling);
                } else {
                    toWrap.parentNode.appendChild(wrapper);
                }
                return wrapper.appendChild(toWrap);
            },
            is_array: function(v) {
                return (v instanceof Array);
            },
            scrollMove: function(t) {
                try {
                    var scroller = main.qs("#scroll_page");
                    if (scroller && !scroller.hasAttribute("sp-replace") && t) {
                        scroller.style.left = "auto";
                        scroller.style.right = "0";
                        scroller.setAttribute("sp-replace", "1");
                    } else if (!_SETTINGS.rscroll && scroller && scroller.hasAttribute("sp-replace") && !t) {
                        scroller.style.left = "0";
                        scroller.style.right = "auto";
                        scroller.removeAttribute("sp-replace");
                    }
                } catch (e) {
                    main.console.error('Ошибка (SCROLLER): ' + e.name + ":" + e.message + "\n" + e.stack);
                }
            },
            hiddenRightbar: function(t) {
                try {
                    var rightbar = main.qs("#page_rightbar");
                    if (rightbar && !rightbar.hasAttribute("sp-hidden-rightbar") && t) {
                        rightbar.style.display = "none";
                        rightbar.setAttribute("sp-hidden-rightbar", "1");
                    } else if (!_SETTINGS.hrightbar && rightbar && rightbar.hasAttribute("sp-hidden-rightbar") && !t) {
                        rightbar.style.display = "block";
                        rightbar.removeAttribute("sp-hidden-rightbar");
                    }
                } catch (e) {
                    main.console.error('Ошибка (HRIGHTBAT): ' + e.name + ":" + e.message + "\n" + e.stack);
                }
            },
            cookieEditor: function(id) {
                window.scrollTo(0, 0);
                var cookie = main.allCookie();
                var target = main.qs(id);
                if (target) {
                    try {
                        target.innerHTML = "";
                        if (!_SETTINGS.hideNotyf.cookieEditor) {
                            var hideNotyf = main.ce("img", {
                                class: "p16 m pointer right",
                                style: "padding: 10px;",
                                src: _PROTOCOL + "//spac.me/i/remove.png",
                                title: "Понятно, больше не показывать.",
                                onclick: function(e) {
                                    _SETTINGS.hideNotyf.cookieEditor = true;
                                    var jsonSet = JSON.stringify(_SETTINGS);
                                    main.setCookie("SP_PLUS_SET", jsonSet, null);
                                    main.cookieEditor("#SP_PLUS_SETAREA");
                                }
                            });
                            var smallInfo = main.ce("div", {
                                class: "stnd-block-yellow",
                                style: "padding: 15px;",
                                html: '<span class="ico ico_alert"></span>Никому не сообщайте значения ваших cookies! Не делайте скриншот этой страницы, на котором будут видны эти значения! От этого зависит безопасность вашего аккаунта!'
                            });
                            var infoDiv = main.ce("div", {
                                style: "none"
                            });
                            infoDiv.appendChild(hideNotyf);
                            target.appendChild(infoDiv);
                            infoDiv.appendChild(smallInfo);
                        }
                        var wrap1 = main.ce("div", {
                            style: "text-align: center; padding-top: 10px;",
                        });
                        var inp1 = main.ce("input", {
                            type: "text",
                            class: "text-input",
                            placeholder: "Имя",
                            style: "width: 30%; margin: 3px;"
                        });
                        var inp2 = main.ce("input", {
                            type: "text",
                            class: "text-input",
                            placeholder: "Значение",
                            style: "width: 30%; margin: 3px;"
                        });
                        var inp3 = main.ce("button", {
                            html: '<span class="sp_plus_ico_okb"></span> Добавить',
                            class: "black",
                            style: "max-width: 30%; margin: 3px; padding: 5px 3px 3px 7px; font-size: 14px;",
                            onclick: function(e) {
                                var prev = (e.target.nodeName == "SPAN" ? e.target.parentNode.previousElementSibling : e.target.previousElementSibling);
                                var name = main.htmlspecialchars(main.trim(prev.previousElementSibling.value));
                                var val = main.htmlspecialchars(main.trim(prev.value));
                                if ((name == "SP_PLUS_ONLINE" || name == "SP_PLUS_SET") && _X77hgg) {
                                    main.alertm("Это служебное значение скрипта, не изменяйте его!", 1, null);
                                } else if (name != "") {
                                    main.confirmm((name == "SP_PLUS_ONLINE" || name == "SP_PLUS_SET" ? "<b style='color: #FF0000;'>Внимание, <span style='color: #0000FF;'>\"" + name + "\"</span> является служебным значение скрипта, не стоит его изменять!</b><br/>" : "") + "Хотите добавить куку <span style='color: #0000FF;'>\"" + name + "\"</span> со значением <span style='color: #0000FF;'>\"" + val + "\"</span>?", function() {
                                        main.setCookie(prev.previousElementSibling.value, prev.value, null);
                                        main.cookieEditor("#SP_PLUS_SETAREA");
                                    });
                                } else {
                                    main.alertm("Задайте имя cookie!", 1, null);
                                }
                            }
                        });
                        wrap1.appendChild(inp1);
                        wrap1.appendChild(inp2);
                        wrap1.appendChild(inp3);
                        target.appendChild(wrap1)
                        target.appendChild(main.ce("div", {
                            class: "sp_plus_line",
                            html: '<span class="sp_plus_text">Список существующий cookies</span>'
                        }));
                        for (var i in cookie) {
                            if ((i == "SP_PLUS_ONLINE" || i == "SP_PLUS_SET") && _X77hgg) {
                                continue;
                            }
                            var wrap = main.ce("div", {
                                class: "text-input__wrap",
                                style: "text-align: center;"
                            });
                            var tmp = main.ce("input", {
                                type: "text",
                                class: "text-input",
                                placeholder: "Имя",
                                attr: {
                                    readonly: "readonly"
                                },
                                value: i,
                                style: "width: 30%; margin: 3px;",
                                onclick: function(e) {
                                    e.target.select();
                                }
                            });
                            var tmp2 = main.ce("input", {
                                type: "text",
                                class: "text-input",
                                placeholder: "Значение",
                                value: cookie[i],
                                style: "width: 30%; margin: 3px;"
                            });
                            var tmp3 = main.ce("button", {
                                html: "<span class='sp_plus_ico_del'></span>",
                                title: "Удалить",
                                style: "max-width: 15%; margin: 3px; padding: 5px 3px 3px 7px; font-size: 14px;",
                                onclick: function(e) {
                                    var prev = (e.target.nodeName == "SPAN" ? e.target.parentNode.previousElementSibling.previousElementSibling : e.target.previousElementSibling.previousElementSibling);
                                    var name = main.htmlspecialchars(main.trim(prev.value));
                                    if ((name == "SP_PLUS_ONLINE" || name == "SP_PLUS_SET") && _X77hgg) {
                                        main.alertm("Это служебное значение скрипта, не удаляйте его!", 1, null);
                                    } else if (name != "") {
                                        main.confirmm((name == "SP_PLUS_ONLINE" || name == "SP_PLUS_SET" ? "<b style='color: #FF0000;'>Внимание, <span style='color: #0000FF;'>\"" + name + "\"</span> является служебным значение скрипта, не стоит его удалять!</b><br/>" : "") + "Хотите удалить куку <span style='color: #0000FF;'>\"" + name + "\"</span>?", function() {
                                            main.delCookie(prev.value);
                                            main.cookieEditor("#SP_PLUS_SETAREA");
                                        });
                                    } else {
                                        main.alertm("Пустую куку удалить?! Ты, блять, серьёзно???", 1, null);
                                    }
                                }
                            });
                            var tmp4 = main.ce("button", {
                                title: "Сохранить",
                                html: "<span class='sp_plus_ico_okb'></span>",
                                style: "max-width: 15%; margin: 3px; padding: 5px 3px 3px 7px; font-size: 14px;",
                                onclick: function(e) {
                                    var prev = (e.target.nodeName == "SPAN" ? e.target.parentNode.previousElementSibling.previousElementSibling : e.target.previousElementSibling.previousElementSibling);
                                    var name = main.htmlspecialchars(main.trim(prev.previousElementSibling.value));
                                    var val = main.htmlspecialchars(main.trim(prev.value));
                                    if ((name == "SP_PLUS_ONLINE" || name == "SP_PLUS_SET") && _X77hgg) {
                                        main.alertm("Это служебное значение скрипта, не изменяйте его!", 1, null);
                                    } else if (name != "") {
                                        main.confirmm((name == "SP_PLUS_ONLINE" || name == "SP_PLUS_SET" ? "<b style='color: #FF0000;'>Внимание, <span style='color: #0000FF;'>\"" + name + "\"</span> является служебным значение скрипта, не стоит его изменять!</b><br/>" : "") + "Хотите задать куке <span style='color: #0000FF;'>\"" + name + "\"</span> значение <span style='color: #0000FF;'>\"" + val + "\"</span>?", function() {
                                            main.setCookie(prev.previousElementSibling.value, prev.value, null);
                                            main.cookieEditor("#SP_PLUS_SETAREA");
                                        });
                                    } else {
                                        main.alertm("Имя не должно быть пустым!", 1, null);
                                    }
                                }
                            });
                            wrap.appendChild(tmp);
                            wrap.appendChild(tmp2);
                            wrap.appendChild(tmp3);
                            wrap.appendChild(tmp4);
                            target.appendChild(wrap);
                        }
                    } catch (e) {
                        main.console.error('Ошибка (COOKIE_EDITOR): ' + e.name + ":" + e.message + "\n" + e.stack);
                    }
                }
            },
            spacesAction: function(root) {
                var wrap = main.ce("div", {
                    id: "wrap_spaces_option"
                });
                var apidebug = main.ce("a", {
                    href: 'javascript:var Arr=[\'<div class="time-block" style="text-align: left;" id="wrap_spacesAction_AD"><a href="#" id="api_debug-button">API-Debugger</a><div id="api_debug-place"></div></div>\',"append","parent","#navi","debugger"];$(Arr[3])[Arr[2]]()[Arr[1]](Arr[0]),require(Arr[4]);void(0);',
                    class: "stnd-link stnd-link_arr",
                    id: "sp_spacesAction_AD",
                    html: "<span class='b'><span class='ico ico_settings'></span> API-Отладчик<span class='ico ico_arr ico_m'></span></span>",
                    style: "font-size: small;",
                    onclick: function(e) {
                        var check = main.qs("#wrap_spacesAction_AD");
                        if (check) {
                            main.remove(check);
                            main.setLocation(document.location.href);
                            return false;
                        }
                        return true;
                    }
                });
                var beta = main.getCookie("beta");
                var sndbeta = main.ce("a", {
                    href: '#',
                    class: "stnd-link stnd-link_arr",
                    id: "sp_spacesAction_beta",
                    html: (beta ? "<span class='b'><span class='ico ico_exit'></span> Выйти из песочницы<span class='ico ico_arr ico_m'></span></span>" : "<span class='b'><span class='ico ico_enter_grey'></span> Beta-песочница<span> - открытое тестирование нововведений сайта<span class='ico ico_arr ico_m'></span></span></span>"),
                    style: "font-size: small;",
                    onclick: function(e) {
                        if (beta) {
                            main.delCookie("beta");
                        } else {
                            main.setCookie("beta", "1", null);
                        }
                        document.location.reload();
                        return true;
                    }
                });
                var fat = main.getCookie("force_ajax_transport");
                var fatWrap = main.ce("a", {
                    href: '#',
                    class: "stnd-link stnd-link_arr",
                    id: "sp_spacesFAT",
                    html: (fat ? "<span class='b'><span class='ico' style='background-image: url(\"//spac.me/i/remove.png\");'></span> Убрать полосу загрузки<span class='ico ico_arr ico_m'></span></span>" : "<span class='b'><span class='ico ico_ok_grey'></span> Добавить полосу загрузки страницы<span class='ico ico_arr ico_m'></span><span>"),
                    style: "font-size: small;",
                    onclick: function(e) {
                        if (fat) {
                            main.delCookie("force_ajax_transport");
                        } else {
                            main.setCookie("force_ajax_transport", "1", null);
                        }
                        document.location.reload();
                        return true;
                    }
                });
                var glb = main.getCookie("gp_left_btn");
                var glbWrap = main.ce("a", {
                    href: '#',
                    class: "stnd-link stnd-link_arr",
                    id: "sp_spacesGLB",
                    html: (glb ? "<span class='b'><span class='ico' style='background-image: url(\"//spac.me/i/remove.png\");'></span> Убрать плеер из панели<span class='ico ico_arr ico_m'></span></span>" : "<span class='b'><span class='ico ico_ok_grey'></span> Переместить плеер - переносит кнопку открытия плеера в левую панель<span class='ico ico_arr ico_m'></span></span>"),
                    style: "border-bottom: unset; font-size: small;",
                    onclick: function(e) {
                        if (glb) {
                            main.delCookie("gp_left_btn");
                        } else {
                            main.setCookie("gp_left_btn", "1", null);
                        }
                        document.location.reload();
                        return true;
                    }
                });
                var nbqLink = main.ce("a", {
                    href: _PROTOCOL + "//spaces.ru/newbequest/?r=newbequest/delete",
                    style: "border-bottom: unset; display: none; font-size: small;",
                    id: "sp_newbequest_togl",
                    class: "stnd-link stnd-link_arr sp_plus_liness",
                    html: "<span class='b'><span class='ico' style='background-image: url(\"//spac.me/i/remove.png\");'></span> Скрыть квест новичка<span class='ico ico_arr ico_m'></span></span>",
                    onclick: function(e) {
                        var CK = main.getCK(0);
                        main.confirmm("Хотите удалить квест новичка?", function() {
                            main.ajax(_PROTOCOL + "//spaces.ru/newbequest/delete/?CK=" + CK + "&link_id=0", "GET", null, function() {
                                main.alertm("Квест новичка скрыт!", 1, null);
                            }, 2);
                            setTimeout(function() {
                                main.newbequest();
                            }, 1000);
                        });
                        return false;
                    }
                });
                wrap.appendChild(apidebug);
                wrap.appendChild(sndbeta);
                wrap.appendChild(fatWrap);
                wrap.appendChild(glbWrap);
                wrap.appendChild(nbqLink);
                root.appendChild(wrap);
            },
            setLocation: function(url) {
                url = url || document.location.href.toString();
                var setLink = main.qs("#SP_PLUS_SETLOCATIONLINK");
                var clickEvent = document.createEvent("MouseEvent");
                clickEvent.initEvent("click", true, true);
                if (setLink) {
                    setLink.href = url;
                    setLink.dispatchEvent(clickEvent);
                } else {
                    setLink = main.ce("a", {
                        href: url,
                        style: "display: none;",
                        id: "SP_PLUS_SETLOCATIONLINK"
                    });
                    document.body.appendChild(setLink);
                    setLink.dispatchEvent(clickEvent);
                }
            },
            isValidUrl: function(url) {
                var regURLrf = /^(?:(?:https?|ftp|telnet):\/\/(?:[а-я0-9_-]{1,32}(?::[а-я0-9_-]{1,32})?@)?)?(?:(?:[а-я0-9-]{1,128}\.)+(?:рф)|(?! 0)(?:(?! 0[^.]|255)[ 0-9]{1,3}\.){3}(?! 0|255)[ 0-9]{1,3})(?:\/[a-zа-я0-9.,_@%&?+=\~\/-]*)?(?:#[^ \'\"&<>]*)?$/i;
                var regURL = /^(?:(?:https?|ftp|telnet):\/\/(?:[a-z0-9_-]{1,32}(?::[a-z0-9_-]{1,32})?@)?)?(?:(?:[a-z0-9-]{1,128}\.)+(?:com|net|org|mil|edu|arpa|ru|gov|biz|info|aero|inc|name|[a-z]{2})|(?! 0)(?:(?! 0[^.]|255)[ 0-9]{1,3}\.){3}(?! 0|255)[ 0-9]{1,3})(?:\/[a-zа-я0-9.,_@%&?+=\~\/-]*)?(?:#[^ \'\"&<>]*)?$/i;
                return regURLrf.test(url) || regURL.test(url);
            },
            trim: function(str) {
                var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                return str.replace(rtrim, '');
            },
            rand: function(min, max) {
                return Math.round(Math.random() * (max - min)) + min;
            },
            inBefore: function(elem, refElem) {
                var parent = refElem.parentNode;
                return parent.insertBefore(elem, refElem);
            },
            insertAfter: function(elem, refElem) {
                var parent = refElem.parentNode,
                    next = refElem.nextSibling;
                if (parent) {
                    if (next) {
                        return parent.insertBefore(elem, next);
                    } else {
                        return parent.appendChild(elem);
                    }
                }
            },
            qs: function(e) {
                return document.querySelector(e);
            },
            getClassName: function(data, t) {
                var data = data.split(".");
                var list = new Array(),
                    nodes = document.getElementsByTagName(data[0]);
                for (var i = 0; i < nodes.length; i++) {
                    if (nodes[i].className.indexOf(data[1]) >= 0 && !t) {
                        list.push(nodes[i]);
                    } else if (nodes[i].className == data[1] && t) {
                        list.push(nodes[i]);
                    }
                }
                return list[0] ? list : null;
            },
            declOfNum: function(number, titles) {
                var cases = [2, 0, 1, 1, 1, 2];
                return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
            },
            console: {
                info: function(str) {
                    var date = new Date();
                    str = "(" + (date.getHours() < 10 ? '0' : '') + date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes() + ':' + (date.getSeconds() < 10 ? '0' : '') + date.getSeconds() + ") " + str;
                    if (_SETTINGS.debug && !_X77hgg) {
                        main.consoleAppend(str, "#00A5ED");
                    }
                    console.info(str);
                    date = null;
                },
                error: function(str) {
                    var date = new Date();
                    str = "(" + (date.getHours() < 10 ? '0' : '') + date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes() + ':' + (date.getSeconds() < 10 ? '0' : '') + date.getSeconds() + ") " + str;
                    if (_SETTINGS.debug && !_X77hgg) {
                        main.consoleAppend(str, "#BD1322");
                    }
                    console.error(str);
                    date = null;
                },
                log: function(str) {
                    var date = new Date();
                    str = "(" + (date.getHours() < 10 ? '0' : '') + date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes() + ':' + (date.getSeconds() < 10 ? '0' : '') + date.getSeconds() + ") " + str;
                    if (_SETTINGS.debug && !_X77hgg) {
                        main.consoleAppend(str, "#F5F5F5");
                    }
                    console.log(str);
                    date = null;
                },
                debug: function(str) {
                    var date = new Date();
                    str = "(" + (date.getHours() < 10 ? '0' : '') + date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes() + ':' + (date.getSeconds() < 10 ? '0' : '') + date.getSeconds() + ") " + str;
                    if (_SETTINGS.debug && !_X77hgg) {
                        main.consoleAppend(str, "#FF9800");
                    }
                    console.debug(str);
                    date = null;
                },
                remove: function() {
                    main.remove(main.qs("#SP_PLUS_CONSOLE"));
                    main.remove(main.qs("#SP_PLUS_CONSOLE_CLEAR"));
                }
            },
            consoleAppend: function(str, color) {
                try {
                    consoleCount++;
                    var console = main.qs("#SP_PLUS_CONSOLE");
                    var newMess = main.ce("span", {
                        style: "color: " + color + ";",
                        html: "&gt;&nbsp;" + str
                    });
                    if (console) {
                        console.appendChild(newMess);
                        console.appendChild(main.ce("br", null));
                    } else {
                        console = main.ce("div", {
                            id: "SP_PLUS_CONSOLE",
                            style: "position: fixed; bottom: 0px; width: 100%; margin: 0px; height: 100px; background: #000000; color: #808080; font-size: 12px; border-top: 2px solid #505050; overflow-x: auto; overflow-y: visible; z-index: 999998; line-height: 1.5; padding: 7px; display: none;"
                        });
                        var conHide = main.ce("div", {
                            html: "Консоль (" + consoleCount + ")",
                            title: "Показать консоль",
                            id: "SP_PLUS_CONSOLE_CLEAR",
                            style: "position: fixed; font-size: 12px; opacity: 0.7; border-radius: 3px 0px 0px 0px; border: 1px solid #505050; padding: 5px; z-index: 999999; cursor: pointer; background: #808080; right: 0px; bottom: 0px;",
                            onclick: function(e) {
                                if (console.style.display == "") {
                                    console.style.display = "none";
                                    e.target.title = "Показать консоль";
                                } else {
                                    console.style.display = "";
                                    e.target.title = "Скрыть консоль";
                                }
                            }
                        });
                        var conClear = main.ce("span", {
                            html: "x",
                            title: "Очистить консоль",
                            style: "color: #F5F5F5; position: fixed; right: 7px; padding: 5px; cursor: pointer; margin-right: 15px;",
                            onclick: function(e) {
                                console.innerHTML = "";
                                consoleCount = 0;
                                conHide.innerHTML = "Консоль (0)";
                            }
                        });
                        console.appendChild(conClear);
                        console.appendChild(newMess);
                        console.appendChild(main.ce("br", null));
                        document.body.appendChild(console);
                        document.body.appendChild(conHide);
                    }
                    console.scrollTop = 999999999999;
                    if (main.qs("#SP_PLUS_CONSOLE_CLEAR")) {
                        main.qs("#SP_PLUS_CONSOLE_CLEAR").innerHTML = "Консоль (" + consoleCount + ")";
                    }
                } catch (e) {
                    main.console.error('Ошибка (SP_CONSOLE): ' + e.name + ":" + e.message + "\n" + e.stack);
                }
            },
            time2str: function(t) {
                var time = parseInt(t, 10);
                if (!isNaN(time)) {
                    var str = parseFloat(time / 3600).toFixed(2).toString();
                    str = str.split(".");
                    return str[0] + " ч, " + parseInt(str[1] / (100 / 60), 10) + " мин";
                } else {
                    main.console.info(time);
                    return null;
                }
            },
            setSelection: function(target) {
                var rng, sel;
                if (document.createRange) {
                    rng = document.createRange();
                    rng.selectNode(target)
                    sel = window.getSelection();
                    sel.removeAllRanges();
                    sel.addRange(rng);
                } else {
                    var rng = document.body.createTextRange();
                    rng.moveToElementText(target);
                    rng.select();
                }
            },
            sound: function(f, v) {
                try {
                    var audio = new Audio(f);
                    audio.volume = v / 100;
                    audio.play();
                } catch (e) {
                    main.console.error('Ошибка (SOUND): ' + e.name + ":" + e.message + "\n" + e.stack);
                }
            },
            events: function() {
                try {
                    var ev = {
                        'mail': main.qs("#mail_notif_cnt"),
                        'journal': main.qs("#jour_notif_cnt"),
                        'feed': main.qs("#lent_notif_cnt")
                    };
                    var tabActive = main.getCookie("spacesactive");
                    var counter = 0;
                    for (var i in ev) {
                        if (ev[i] && _SETTINGS.events[i] && ev[i].innerHTML != "" && !isNaN(ev[i].innerHTML)) {
                            counter = counter + parseInt(ev[i].innerHTML, 10);
                        }
                    }
                    if (counter > eventsCounter) {
                        if (tabActive == "false") {
                            main.sound(_SETTINGS.events.url + "?r=" + main.rand(1000, 9999), _SETTINGS.events.volume);
                            if (_SETTINGS.events.notifications) {
                                var string = main.declOfNum(counter, ["новое событие", "новых события", "новых событий"]);
                                main.notifications("Новые события на Spaces!", {
                                    body: "У Вас " + counter + " " + string + "!",
                                    icon: ICON48,
                                    tag: "events"
                                }, null);
                            }
                        }
                        eventsCounter = counter;
                        main.console.info("Новые события: " + counter + ", вкладка активна: " + tabActive);
                    } else if (counter < eventsCounter) {
                        eventsCounter = counter;
                        main.console.info("Скидываем счётчик до: " + counter);
                    }
                } catch (e) {
                    main.console.error('Ошибка (EVENTS): ' + e.name + ":" + e.message + "\n" + e.stack);
                }
            },
            friendsOnline: function(t) {
                var frCount = main.qs("#friends_cnt");
                var frOnDiv = main.qs("#SP_PLUS_FRIENDSSB");
                var count = 0;
                if (frCount && !isNaN(frCount.innerHTML)) {
                    count = parseInt(frCount.innerHTML, 10);
                }
                if (frCount) {
                    try {
                        if (_SETTINGS.friendsListSH) {
                            if (frOnDiv) {
                                if (!frCount.parentNode.title) {
                                    frCount.parentNode.title = "Скрыть список";
                                }
                                if (!frCount.parentNode.hasAttribute("sp-click-el")) {
                                    frCount.parentNode.onclick = function(e) {
                                        if (frOnDiv.style.display != "none") {
                                            frOnDiv.style.display = "none";
                                            e.target.parentNode.title = "Показать список";
                                        } else {
                                            frOnDiv.style.display = "";
                                            e.target.parentNode.title = "Скрыть список";
                                        }
                                        return false;
                                    };
                                    frCount.parentNode.setAttribute("sp-click-el", "1");
                                }
                            }
                        } else {
                            frCount.parentNode.title = "";
                            frCount.parentNode.removeAttribute("sp-click-el");
                            frCount.parentNode.onclick = null;
                            if (frOnDiv && frOnDiv.style.display == "none") {
                                frOnDiv.style.display = "";
                            }
                        }
                        if (!t) {
                            if (frOnDiv) {
                                main.remove(frOnDiv);
                                countFriends = 0;
                                main.console.info("[S+] Убрали панель друзей!");
                            }
                            frCount.parentNode.onclick = null;
                            frCount.parentNode.removeAttribute("sp-click-el");
                            friendsForce = 0;
                        } else if (count > 0) {
                            friendsForce++;
                            if (count != countFriends || (count > 0 && !frOnDiv) || friendsForce >= 700) {
                                if (friendsForce >= 700) {
                                    friendsForce = 0;
                                    main.console.info("[S+] Принудительно обновляем друзей!");
                                }
                                countFriends = count;
                                var parent = frCount.parentNode.parentNode.parentNode;
                                frOnDiv = frOnDiv || main.ce("div", {
                                    id: "SP_PLUS_FRIENDSSB",
                                    class: "list-link__wrap"
                                });
                                main.jajax(_PROTOCOL + '//spaces.ru/friends/?S=3', function(res) {
                                    try {
                                        var _json = {
                                            'tabbed_panel': {
                                                'tabs': [null, {
                                                    'content': {
                                                        'list': null
                                                    }
                                                }]
                                            }
                                        };
                                        var json = main.extend(_json, JSON.parse(res));
                                        var tmPfriendsList = json.tabbed_panel.tabs[1].content.list;
                                        if (tmPfriendsList) {
                                            main.jajax(_PROTOCOL + '//spaces.ru/friends/?P=2&S=3', function(res2) {
                                                var _json2 = {
                                                    'tabbed_panel': {
                                                        'tabs': [null, {
                                                            'content': {
                                                                'list': {
                                                                    'avatar': [null, {
                                                                        'previewURL': null,
                                                                        'name': null
                                                                    }],
                                                                    'online_label': [null, {
                                                                        'online_status': null,
                                                                        'on_img': null
                                                                    }],
                                                                }
                                                            }
                                                        }]
                                                    }
                                                };
                                                var displayN = main.getClassName('span.s_i s_i_friends');
                                                var json2 = main.extend(_json2, JSON.parse(res2));
                                                var friendsList = json2.tabbed_panel.tabs[1].content.list;
                                                if (friendsList) {
                                                    friendsList = main.extend(tmPfriendsList, friendsList);
                                                } else {
                                                    friendsList = tmPfriendsList;
                                                }
                                                frOnDiv.innerHTML = "";
                                                var lenList = (_SETTINGS.friendsOnMax > friendsList.length ? friendsList.length : _SETTINGS.friendsOnMax);
                                                if (countFriends != friendsList.length && reCount < 3) {
                                                    reCount++;
                                                    setTimeout(function() {
                                                        countFriends = friendsList.length;
                                                        main.console.info("[S+] Количество друзей не точное, пробуем еще раз (" + reCount + " из 3)");
                                                    }, 1000);
                                                } else if (countFriends == friendsList.length) {
                                                    reCount = 0;
                                                }
                                                for (var i = 0; i < lenList; i++) {
                                                    frOnDiv.appendChild(main.ce("a", {
                                                        href: _PROTOCOL + "//spaces.ru/mysite/?name=" + friendsList[i].name,
                                                        class: "li",
                                                        html: '<span class="comm_ava m for_avatar ' + displayN + '"><img src="' + friendsList[i].avatar.previewURL + '" alt="" class="preview s21_20"></span><span class="online-status m"><img class="p14 online_status_ico" src="' + _PROTOCOL + '//spac.me/i/' + friendsList[i].online_status.on_img + '" alt="(ON)"></span><span class="block-item__title m break-word">' + friendsList[i].name + '</span>'
                                                    }));
                                                }
                                                frCount.parentNode.removeAttribute("sp-click-el");
                                                main.console.info("[S+] Обновили список друзей!");
                                            });
                                        } else {
                                            main.remove(frOnDiv);
                                        }
                                    } catch (e) {
                                        main.console.error('Ошибка (FRIENDS_ONLINE_JSON): ' + e.name + ":" + e.message + "\n" + e.stack);
                                    }
                                });
                                parent.appendChild(frOnDiv);
                            }
                        } else if (count == 0) {
                            if (frOnDiv) {
                                main.remove(frOnDiv);
                            }
                        }
                    } catch (e) {
                        main.console.error('Ошибка (FRIENDS_ONLINE): ' + e.name + ":" + e.message + "\n" + e.stack);
                    }
                }
            },
            online: function() {
                var locationHref = document.location.href.replace(/\#.*$/i, '');
                var path = document.location.pathname.toString();
                if (path == '/anketa/') {
                    try {
                        var nick = main.getQuery("user") || main.service(0);
                        var onBlock = main.getClassName("div.info-item__title", 1);
                        if (!onBlock) {
                            onBlock = main.getClassName("span.light_item", 1);
                        }
                        if (nick && onBlock && onlineLock != nick) {
                            onlineLock = nick;
                            main.jajax(_PROTOCOL + '//spaces.ru/anketa/?user=' + nick, function(data) {
                                if (data) {
                                    try {
                                        var _json = {
                                            'user_widget': {
                                                'online_time': null
                                            }
                                        };
                                        var json = main.extend(_json, JSON.parse(data));
                                        if (json.user_widget.online_time) {
                                            var online = main.time2str(json.user_widget.online_time);
                                            for (var i in onBlock) {
                                                if (onBlock[i].innerHTML == "Время онлайн:") {
                                                    var inblock = onBlock[i].nextElementSibling || onBlock[i].nextSibling;
                                                    if (inblock.nodeType == 3) {
                                                        inblock.data = " " + online;
                                                    } else {
                                                        inblock.innerHTML = online;
                                                    }
                                                    main.console.info("[S+] Время онлайн: " + online);
                                                }
                                            }
                                        }
                                    } catch (e) {
                                        main.console.error('Ошибка (JSON_ONLINE): ' + e.name + ":" + e.message + "\n" + e.stack);
                                    }
                                }
                            });
                        }
                    } catch (e) {
                        main.console.error('Ошибка (ONLINE): ' + e.name + ":" + e.message + "\n" + e.stack);
                    }
                } else if (path != '/anketa/') {
                    onlineLock = null;
                }
            },
            favorite: function() {
                var locationHref = document.location.href;
                var path = document.location.pathname.toString();
                if (locationHref == _PROTOCOL + "//spaces.ru/bookmarks/add/?irb526786=1" && !favRLock) {
                    favRLock = locationHref;
                    main.setLocation(_PROTOCOL + "//spaces.ru/bookmarks/?irb526786=1");
                }
                var checkfv1 = null;
                if (path == '/anketa/') {
                    var dlnk = document.links;
                    checkfv1 = main.find(dlnk, {
                        href: _PROTOCOL + "//spaces.ru/bookmarks/add/?"
                    });
                    if (!checkfv1) {
                        checkfv1 = main.find(dlnk, {
                            href: _PROTOCOL + "//spaces.ru/bookmarks/edit/?"
                        });
                    }
                }
                if ((path == '/mysite/' || path == '/anketa/' || path == '/activity/') && !checkfv1 && favLock != locationHref) {
                    var fvtools = main.qs("#SP_PLUS_INFAVORITE");
                    favLock = locationHref;
                    try {
                        var nick = main.getQuery("user");
                        if (!nick) {
                            nick = main.getQuery("name") || main.service(0);
                        }
                        var tbBlock = main.getClassName("td.table__cell table__cell_last", 1);
                        if (nick && tbBlock && tbBlock[0].innerHTML.indexOf("Вперёд") < 0 && !fvtools) {
                            main.jajax(_PROTOCOL + '//spaces.ru/anketa/?user=' + nick, function(data) {
                                if (data) {
                                    try {
                                        var _json = {
                                            'user_widget': {
                                                'id': null
                                            }
                                        };
                                        var json = main.extend(_json, JSON.parse(data));
                                        var lClass;
                                        if (json.user_widget.id) {
                                            if (tbBlock[0].firstElementChild.nodeName == "A") {
                                                lClass = tbBlock[0].firstElementChild.className.split(" ")[0];
                                            } else {
                                                lClass = 'stnd-link';
                                            }
                                            var favLink = fvtools || main.ce("td", {
                                                class: "table__cell",
                                                id: "SP_PLUS_INFAVORITE"
                                            });
                                            favLink.innerHTML = '<a href="' + _PROTOCOL + '//spaces.ru/bookmarks/add/?object_id=' + json.user_widget.id + '&object_type=11" class="' + lClass + '" title="Добавить в закладки"><span class="ico ico_fav_grey js-ico"></span> B закладки</a>';
                                            main.isFav(json.user_widget.id, favLink, nick, '<span class="ico ico_fav_on js-ico"></span><span style="color: #108210;"> В закладках</span>');
                                            if (!fvtools) {
                                                main.inBefore(favLink, tbBlock[0]);
                                            }
                                            var clds = tbBlock[0].parentNode.childNodes;
                                            for (var x in clds) {
                                                if (clds[x].nodeName == "TD") clds[x].width = "25%";
                                            }
                                        }
                                    } catch (e) {
                                        main.console.error('Ошибка (JSON_FAVORITE): ' + e.name + ":" + e.message + "\n" + e.stack);
                                    }
                                }
                            });
                        }
                    } catch (e) {
                        main.console.error('Ошибка (FAVORITE): ' + e.name + ":" + e.message + "\n" + e.stack);
                    }
                } else if (path != '/mysite/' && path != '/anketa/' && path != '/activity/') {
                    favLock = null;
                }
            },
            isFav: function(id, el, nm, html) {
                main.jajax(_PROTOCOL + '//spaces.ru/bookmarks/add/?object_id=' + id + '&object_type=11', function(data) {
                    if (data) {
                        try {
                            var _json = {
                                'delete_link': {
                                    'delete_URL': null
                                }
                            };
                            var json = main.extend(_json, JSON.parse(data));
                            if (json.delete_link.delete_URL) {
                                var dlink = json.delete_link.delete_URL.replace(/&amp;/g, '&');
                                el.firstElementChild.href = dlink;
                                el.firstElementChild.title = "Удалить из закладок";
                                el.firstElementChild.innerHTML = html;
                                el.firstElementChild.onclick = function() {
                                    main.confirmm("Хотите удалить пользователя " + nm + " из закладок?", function() {
                                        main.setLocation(dlink);
                                    });
                                    return false;
                                };
                            }
                        } catch (e) {
                            main.console.error('Ошибка (JSON_ISFAVORITE): ' + e.name + ":" + e.message + "\n" + e.stack);
                        }
                    }
                });
            },
            bannedHTML: function(nick, type, blocked, id) {
                var out = type ? '<div class="widgets-group links-group">' + (id ? '<span id="SP_PLUS_INFAV"><a href="' + _PROTOCOL + '//spaces.ru/bookmarks/add/?object_id=' + id + '&object_type=11" id="SP_PLUS_INFAV" class="list-link list-link_arrow list-link_first"><span class="ico ico_fav_grey js-ico"></span> Добавить в закладки<span class="ico ico_arr"></span></a></span>' : '') + '<a href="' + _PROTOCOL + '//spaces.ru/gifts/user_list/?user=' + nick + '" class="list-link list-link_arrow list-link_first"><span class="ico ico_gifts_blue"></span> Подарки<span class="ico ico_arr"></span></a>' + (!blocked ? '<a href="' + _PROTOCOL + '//spaces.ru/guestbook/?name=' + nick + '" class="list-link list-link_arrow list-link_first"><span class="ico ico_gb"></span> Гостевая<span class="ico ico_arr"></span></a><a href="' + _PROTOCOL + '//spaces.ru/diary/?name=' + nick + '" class="list-link list-link_arrow"><span class="ico ico_blog"></span> Личный блог<span class="ico ico_arr"></span></a>' : '') + '<a href="' + _PROTOCOL + '//spaces.ru/forums/search_user/?Comm=0&Ext=1&word=' + nick + '" class="list-link list-link_arrow"><span class="ico ico_forum"></span> Темы и комментарии <span class="ico ico_arr"></span></a>' + (!blocked ? '<div class="sep-item"></div><a href="' + _PROTOCOL + '//spaces.ru/pictures/?P=1&amp;name=' + nick + '" class="list-link list-link_arrow"><span class="ico ico_photo"></span> Фотографии<span class="ico ico_arr"></span></a><a href="' + _PROTOCOL + '//spaces.ru/music/?P=1&amp;name=' + nick + '" class="list-link list-link_arrow"><span class="ico ico_music"></span> Музыка<span class="ico ico_arr"></span></a><a href="' + _PROTOCOL + '//spaces.ru/video/?P=1&amp;name=' + nick + '" class="list-link list-link_arrow"><span class="ico ico_video"></span> Видео<span class="ico ico_arr"></span></a><a href="' + _PROTOCOL + '//spaces.ru/files/?P=1&amp;name=' + nick + '" class="list-link list-link_arrow"><span class="ico ico_file"></span> Файлы<span class="ico ico_arr"></span></a>' : '') + '<div class="sep-item"></div><a href="' + _PROTOCOL + '//spaces.ru/comm/?List=1&user=' + nick + '" class="list-link list-link_arrow"><span class="ico ico_comm"></span> Сообщества<span class="ico ico_arr"></span></a><a href="' + _PROTOCOL + '//spaces.ru/friends/?name=' + nick + '&amp;p=1" class="list-link list-link_arrow"><span class="ico ico_friends"></span> Друзья<span class="ico ico_arr"></span></a><a href="' + _PROTOCOL + '//spaces.ru/lenta/readers/?user=' + nick + '" class="list-link list-link_arrow"><span class="ico ico_readers"></span> Читатели<span class="ico ico_arr"></span></a></div>' : '<div class="no_underline_block start_page_padd light_border_bottom lh_160" style="padding-top:1px;">' + (id ? '<div id="SP_PLUS_INFAV"><a href="' + _PROTOCOL + '//spaces.ru/bookmarks/add/?object_id=' + id + '&object_type=11"><img src="' + _PROTOCOL + '//spac.me/i/action_fav_gray.gif" alt="" class="m p16"> <span class="m"> Добавить в закладки</span></a></div>' : '') + '<div><a href="' + _PROTOCOL + '//spaces.ru/gifts/user_list/?user=' + nick + '"><img src="' + _PROTOCOL + '//spac.me/i/sendgift.gif" alt="" class="m p16"> <span class="m">Подарки</span></a></div>' + (!blocked ? '<div> <a href="' + _PROTOCOL + '//spaces.ru/guestbook/?name=' + nick + '&amp;p=0"><img src="' + _PROTOCOL + '//spac.me/i/guestbook.gif" alt="" class="m p16"> <span class="m">Гостевая</span></a></div><div> <a href="' + _PROTOCOL + '//spaces.ru/diary/?name=' + nick + '"><img src="' + _PROTOCOL + '//spac.me/i/diary.gif" alt="" class="m p16"> <span class="m">Блог</span></a></div>' : '') + '</div><div class="no_underline_block start_page_padd light_blue light_border_bottom lh_160">' + (!blocked ? '<div> <a href="' + _PROTOCOL + '//spaces.ru/pictures/?P=1&amp;name=' + nick + '"><img src="' + _PROTOCOL + '//spac.me/i/PhotoIcon.gif" alt="" class="m p16"> <span class="m">Фото</span></a></div><div> <a href="' + _PROTOCOL + '//spaces.ru/music/?P=1&amp;name=' + nick + '"><img src="' + _PROTOCOL + '//spac.me/i/file_mp3.gif" alt="" class="m p16"> <span class="m">Музыка</span></a></div><div> <a href="' + _PROTOCOL + '//spaces.ru/video/?P=1&amp;name=' + nick + '"><img src="' + _PROTOCOL + '//spac.me/i/icon_video.gif" alt="" class="m p16"> <span class="m">Видео</span></a></div><div> <a href="' + _PROTOCOL + '//spaces.ru/files/?P=1&amp;name=' + nick + '"><img src="' + _PROTOCOL + '//spac.me/i/film.gif" alt="" class="m p16"> <span class="m">Файлы</span></a></div>' : '') + '<div> <a href="' + _PROTOCOL + '//spaces.ru/forums/search_user/?Comm=0&Ext=1&word=' + nick + '"><img src="' + _PROTOCOL + '//spac.me/i/Forum.gif" alt="" class="m p16"> <span class="m">Темы и комментарии</span></a> </div></div><div class="no_underline_block start_page_padd light_border_bottom lh_160"><div> <a href="' + _PROTOCOL + '//spaces.ru/friends/?name=' + nick + '"><img src="' + _PROTOCOL + '//spac.me/i/friends.gif" alt="" class="m p16"> <span class="m">Друзья</span></a></div><div> <a href="' + _PROTOCOL + '//spaces.ru/comm/?List=1&user=' + nick + '"> <img src="' + _PROTOCOL + '//spac.me/i/soo.gif" alt="" class="m p16"> <span class="m">Сообщества</span></a></div><div> <a href="' + _PROTOCOL + '//spaces.ru/lenta/readers/?user=' + nick + '"><img src="' + _PROTOCOL + '//spac.me/i/icon_readers.gif" alt="" class="m p16"> <span class="m">Читатели</span></a></div></div>';
                return out;
            },
            gifts: function() {
                var lctn = document.location.href.replace(/\#.*$/i, '');
                var path = document.location.pathname.toString();
                var giftLock = main.qs("#SP_PLUS_GIFT");
                if (path == "/mysite/" && !giftLock) {
                    try {
                        var nick = main.getQuery("name") || main.service(0);
                        var imgs = document.getElementsByTagName("img");
                        var gifts = main.find(imgs, {
                            src: "/i/gifts/40/"
                        });
                        if (!gifts) {
                            gifts = main.find(imgs, {
                                src: "/i/gifts/25/"
                            });
                        }
                        if (gifts && nick) {
                            var touch = true;
                            for (var i in gifts) {
                                var gid = 0;
                                var tmpi = main.ce("i", {
                                    style: "color: #FFFFFF; background-color: #000000; border-radius: 3px; padding: 5px; position: absolute; display: none; top: -40px; z-index:9999999; opacity: 0.8",
                                    id: "SP_PLUS_GIFT"
                                });
                                tmpi.innerHTML = "";
                                main.insertAfter(tmpi, gifts[i].parentNode);
                                gifts[i].parentNode.parentNode.style.position = "relative";
                                gifts[i].parentNode.parentNode.style.display = "inline";
                                gifts[i].ontouchstart = function(e) {
                                    if (touch) {
                                        var prnt = e.target.parentNode;
                                        if (/#gift([0-9]+)$/i.test(prnt.href)) {
                                            gid = /#gift([0-9]+)$/i.exec(prnt.href)[1];
                                        } else if (/(\?|&)gift=([0-9]+)/i.test(prnt.href)) {
                                            gid = /(\?|&)gift=([0-9]+)/i.exec(prnt.href)[2];
                                        }
                                        var next = prnt.nextElementSibling;
                                        next.style.display = "";
                                        if (next.innerHTML == "") {
                                            next.innerHTML = "<img src='" + _PROTOCOL + "//spac.me/i/spinner2.gif' alt='' style='height: 16px !important;'>";
                                            main.jajax(_PROTOCOL + '//spaces.ru/gifts/details/?gift=' + gid + '&user=' + nick, function(data) {
                                                try {
                                                    if (data) {
                                                        var _json = {
                                                            'gift_widget': {
                                                                'from_user': {
                                                                    'widget': {
                                                                        'siteLink': {
                                                                            'user_name': null
                                                                        }
                                                                    }
                                                                },
                                                                'date': null,
                                                                'message': null
                                                            }
                                                        };
                                                        var json = main.extend(_json, JSON.parse(data));
                                                        if (json.gift_widget.from_user) {
                                                            var usr = json.gift_widget.from_user.widget.siteLink.user_name;
                                                            next.innerHTML = '<div><a href="' + _PROTOCOL + '//spaces.ru/mysite/?name=' + (usr == "Система" ? "4839" : usr) + '" style="color: #FFFFFF !important">' + usr + '</a><small>&nbsp;(' + json.gift_widget.date + ')</small></div><div class="sp_plus_small"><small>' + json.gift_widget.message + '</small></div>';
                                                        } else {
                                                            next.innerHTML = "Неизвестный";
                                                        }
                                                    }
                                                } catch (e) {
                                                    next.innerHTML = "Неизвестный";
                                                    main.console.error('Ошибка (JSON_GIFTS): ' + e.name + ":" + e.message + "\n" + e.stack);
                                                }
                                            });
                                        }
                                    } else {
                                        e.target.parentNode.nextElementSibling.style.display = "none";
                                    }
                                };
                                gifts[i].ontouchend = function(e) {
                                    touch = touch ? false : true;
                                };
                                gifts[i].onmouseenter = function(e) {
                                    var prnt = e.target.parentNode;
                                    if (/#gift([0-9]+)$/i.test(prnt.href)) {
                                        gid = /#gift([0-9]+)$/i.exec(prnt.href)[1];
                                    } else if (/(\?|&)gift=([0-9]+)/i.test(prnt.href)) {
                                        gid = /(\?|&)gift=([0-9]+)/i.exec(prnt.href)[2];
                                    }
                                    var next = prnt.nextElementSibling;
                                    next.onmouseenter = function() {
                                        next.style.display = "";
                                    };
                                    next.onmouseleave = function() {
                                        next.style.display = "none";
                                    };
                                    next.style.display = "";
                                    if (next.innerHTML == "") {
                                        next.innerHTML = "<img src='" + _PROTOCOL + "//spac.me/i/spinner2.gif' alt='' style='height: 16px !important;'>";
                                        main.jajax(_PROTOCOL + '//spaces.ru/gifts/details/?gift=' + gid + '&user=' + nick, function(data) {
                                            try {
                                                if (data) {
                                                    var _json = {
                                                        'gift_widget': {
                                                            'from_user': {
                                                                'widget': {
                                                                    'siteLink': {
                                                                        'user_name': null
                                                                    }
                                                                }
                                                            },
                                                            'date': null,
                                                            'message': null
                                                        }
                                                    };
                                                    var json = main.extend(_json, JSON.parse(data));
                                                    if (json.gift_widget.from_user) {
                                                        var usr = json.gift_widget.from_user.widget.siteLink.user_name;
                                                        next.innerHTML = '<div><a href="' + _PROTOCOL + '//spaces.ru/mysite/?name=' + (usr == "Система" ? "4839" : usr) + '" style="color: #FFFFFF !important">' + usr + '</a><small>&nbsp;(' + json.gift_widget.date + ')</small></div><div class="sp_plus_small"><small>' + json.gift_widget.message + '</small></div>';
                                                    } else {
                                                        next.innerHTML = "Неизвестный";
                                                    }
                                                }
                                            } catch (e) {
                                                next.innerHTML = "Неизвестный";
                                                main.console.error('Ошибка (JSON_GIFTS): ' + e.name + ":" + e.message + "\n" + e.stack);
                                            }
                                        });
                                    }
                                };
                                gifts[i].onmouseleave = function(e) {
                                    e.target.parentNode.nextElementSibling.style.display = "none";
                                };
                            }
                        }
                    } catch (e) {
                        main.console.error('Ошибка (GIFTSTOOLS): ' + e.name + ":" + e.message + "\n" + e.stack);
                    }
                }
            },
            bannedTools: function() {
                var locationHref = document.location.href.replace(/\#.*$/i, ''),
                    path = document.location.pathname.toString(),
                    type = true;
                var btools = main.qs("#SP_PLUS_BNDBLOCK");
                if (path == '/mysite/' && banLock != locationHref) {
                    try {
                        var nick = main.getQuery("user");
                        if (!nick) {
                            nick = main.getQuery("name") || main.service(0);
                        }
                        banLock = locationHref;
                        if (btools) main.remove(btools);
                        if (nick) {
                            main.jajax(_PROTOCOL + "//spaces.ru/mysite/?name=" + nick, function(res) {
                                try {
                                    if (res) {
                                        var sContent = main.qs("#siteContent");
                                        if (!sContent) {
                                            sContent = main.getClassName("div.main", null);
                                            if (sContent) {
                                                sContent = sContent[0];
                                                type = false;
                                            }
                                        }
                                        var _json = {
                                            'owner_id': null,
                                            'owner_widget': {
                                                'ban_info': {
                                                    'deleted': null,
                                                    'frozen': null,
                                                    'blocked': null
                                                }
                                            }
                                        };
                                        var json = main.extend(_json, JSON.parse(res));
                                        if (json.owner_widget.ban_info && json.owner_id && sContent) {
                                            var blckg = false;
                                            var uid = json.owner_id;
                                            if (json.owner_widget.ban_info.deleted) {
                                                main.console.info("[S+] Аккаунт удален!");
                                            } else if (json.owner_widget.ban_info.frozen) {
                                                main.console.info("[S+] Аккаунт покинут!");
                                            } else if (json.owner_widget.ban_info.blocked) {
                                                main.console.info("[S+] Аккаунт забанен!");
                                                blckg = true;
                                            }
                                            var tBlock = btools || main.ce("div", {
                                                id: "SP_PLUS_BNDBLOCK"
                                            });
                                            tBlock.innerHTML = main.bannedHTML(nick, type, blckg, uid);
                                            if (!btools) {
                                                sContent.appendChild(tBlock);
                                            }
                                            if (uid) {
                                                main.isFav(uid, main.qs("#SP_PLUS_INFAV"), nick, (type ? '<span class="ico ico_fav_on js-ico"></span> Удалить из закладок<span class="ico ico_arr"></span>' : '<img src="' + _PROTOCOL + '//spac.me/i/action_fav_color.gif" alt="" class="m p16"> <span class="m"> Удалить из закладок</span>'));
                                            }
                                        }
                                    }
                                } catch (e) {
                                    main.console.error('Ошибка (JSON_BLOCKED): ' + e.name + ":" + e.message + "\n" + e.stack);
                                }
                            });
                        }
                    } catch (e) {
                        main.console.error('Ошибка (BLOCKED): ' + e.name + ":" + e.message + "\n" + e.stack);
                    }
                } else if (path != '/mysite/') {
                    if (btools) main.remove(btools);
                    banLock = null;
                }
            },
            extend: function(obj1, obj2) {
                if (obj2) {
                    for (var i in obj2) {
                        if (obj2.hasOwnProperty(i)) {
                            obj1[i] = obj2[i];
                        }
                    }
                }
                return obj1;
            },
            service: function(r) {
                try {
                    var nscr = document.getElementsByTagName('script').item(0);
                    if (r) {
                        if (/REVISION\s?=\s?'(.*?)'/i.test(nscr.innerHTML)) {
                            var rev = main.trim(/REVISION\s?=\s?'(.*?)'/i.exec(nscr.innerHTML)[1]);
                            return rev == "" ? null : rev;
                        } else {
                            return null;
                        }
                    } else {
                        if (/name:'(.*?)'/i.test(nscr.innerHTML)) {
                            var name = main.trim(/name:'(.*?)'/i.exec(nscr.innerHTML)[1]);
                            return name == "" ? null : name;
                        } else {
                            return null;
                        }
                    }
                } catch (e) {
                    return null;
                }
            },
            getCK: function(a) {
                var Sid = main.getCookie("sid");
                return a ? Sid : Sid.substr(-4);
            },
            allCookie: function() {
                var obj = new Object();
                var cook = document.cookie;
                if (cook && main.trim(cook) != "") {
                    var v1 = cook.split(";");
                    for (var i = 0; i < v1.length; i++) {
                        var tr = main.trim(v1[i]);
                        if (tr != "") {
                            var v2 = tr.split("=");
                            obj[decodeURIComponent(v2[0])] = decodeURIComponent(v2[1]);
                        }
                    }
                }
                return obj;
            },
            getCookie: function(name) {
                var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
                return matches ? decodeURIComponent(matches[1]) : undefined;
            },
            delCookie: function(name) {
                main.setCookie(name, null, {
                    expires: -1
                });
            },
            setCookie: function(key, value, opts) {
                opts = main.extend({
                    path: '/',
                    expires: 365,
                    secure: false,
                    domain: '.spaces.ru'
                }, opts);
                if (opts.expires && !(opts.expires instanceof Date)) opts.expires = new Date(+new Date + 1000 * 3600 * 24 * opts.expires);
                var query = encodeURIComponent(key) + "=" + encodeURIComponent(value);
                if (opts.expires) query += "; expires=" + opts.expires.toUTCString();
                if (opts.domain) query += "; domain=" + opts.domain;
                if (opts.path) query += "; path=" + opts.path;
                if (opts.secure) query += "; secure";
                document.cookie = query;
            },
            find: function(obj, obj2) {
                var list = new Array();
                for (var i = 0; i < obj.length; i++) {
                    for (var j in obj2) {
                        if (obj[i][j].indexOf(obj2[j]) >= 0) {
                            list.push(obj[i]);
                        }
                    }
                }
                return list[0] ? list : null;
            },
            readersDelete: function() {
                var path = document.location.pathname.toString();
                if (path == '/lenta/readers/' && !main.qs("#SP_PLUS_BOTTOM_DIVB")) {
                    try {
                        var edLinks = main.find(document.links, {
                            href: _PROTOCOL + "//spaces.ru/lenta/reader_delete/?"
                        });
                        if (edLinks && !main.qs("#SP_PLUS_BOTTOM_DIVB")) {
                            var CK = main.getCK(0);
                            var chbxArr = new Array();
                            for (var i in edLinks) {
                                edLinks[i].style.textAlign = "center";
                                var chWrap = main.ce("label", {
                                    class: "stnd-link icon-link",
                                    style: "right: 50px; top: -42px; padding-left: 8px; padding-right: 8px;",
                                });
                                var bChbx = main.ce("input", {
                                    type: "checkbox",
                                    id: "SP_DR_" + /(\?|&)user=([A-Za-z0-9\_]+)/i.exec(edLinks[i].href)[2],
                                    class: "sp_plus_checkbox"
                                });
                                var ckbxlb = main.ce("label", {
                                    style: "margin-left: 0px;",
                                    attr: {
                                        "for": "SP_DR_" + /(\?|&)user=([A-Za-z0-9\_]+)/i.exec(edLinks[i].href)[2]
                                    }
                                });
                                chWrap.appendChild(bChbx);
                                chWrap.appendChild(ckbxlb);
                                main.insertAfter(chWrap, edLinks[i]);
                                chbxArr.push(bChbx);
                            }
                            var lastParent = edLinks[edLinks.length - 1].parentNode;
                            if (lastParent) lastParent = lastParent.parentNode;
                            if (lastParent) {
                                var btnDiv = main.ce("div", {
                                    class: "user__tools_last",
                                    id: "SP_PLUS_BOTTOM_DIVB"
                                });
                                var chSubm = main.ce("button", {
                                    class: "user__tools-link table__cell",
                                    style: "width: 50%; display: inline-block; box-sizing: border-box;",
                                    html: '<span class="sp_plus_ico_okb"></span><span style="color: #57A3EA;">Выбрать все</span>',
                                    onclick: function(e) {
                                        var parent = (e.target.nodeName == "SPAN" ? e.target.parentNode : e.target);
                                        for (var i = 0; i < chbxArr.length; i++) {
                                            if (parent.innerHTML.indexOf('Выбрать все') >= 0) {
                                                chbxArr[i].checked = true;
                                            } else {
                                                chbxArr[i].checked = false;
                                            }
                                        }
                                        parent.innerHTML = '<span class="sp_plus_ico_okb"></span><span style="color: #57A3EA;">' + (parent.innerHTML.indexOf('Выбрать все') >= 0 ? "Снять отметки" : "Выбрать все") + '</span>';
                                        return false;
                                    }
                                });
                                var delSubm = main.ce("button", {
                                    class: "user__tools-link table__cell sp_btn_line",
                                    style: "width: 50%; display: inline-block; box-sizing: border-box;",
                                    html: '<span class="sp_plus_ico_del"></span><span style="color: #F86934;">Удалить выбранных</span>',
                                    onclick: function() {
                                        var delCount = 0,
                                            dArr = new Array();
                                        chSubm.innerHTML = '<span class="sp_plus_ico_okb"></span><span style="color: #57A3EA;">Выбрать все</span>';
                                        for (var i = 0; i < chbxArr.length; i++) {
                                            if (chbxArr[i].checked == true) {
                                                var delId = /^SP_DR_([A-Za-z0-9\_]+)$/i.exec(chbxArr[i].id)[1];
                                                dArr.push(delId);
                                                chbxArr[i].checked = false;
                                                delCount++;
                                            }
                                        }
                                        if (delCount > 0) {
                                            var ololo = main.declOfNum(delCount, ["я", "я", "ей"]);
                                            main.confirmm("Хотите удалить " + delCount + " читател" + ololo + "?", function() {
                                                var cancel = null;
                                                var intr = setInterval(function() {
                                                    main.alertm("Удаляем читателей: <span style='color: #1cc61c;'>" + delCount + "</span><br/><a href='#' onclick='return false;' id='SP_PLUS_CANCEL' class='sp_plus_a'>Отмена</a>", 0, null);
                                                    delCount--;
                                                    var dIdBl = dArr[delCount];
                                                    main.ajax(_PROTOCOL + '//spaces.ru/lenta/reader_delete/?user=' + dIdBl, 'POST', '&CK=' + CK + '&cfms=Удалить', function(r) {
                                                        main.console.info("[S+] Удалили читателей: " + dIdBl);
                                                    }, 2);
                                                    cancel = main.qs("#SP_PLUS_CANCEL");
                                                    cancel.onclick = function() {
                                                        dArr = null;
                                                        clearInterval(intr);
                                                        main.alertm("Отменено!<br/><a href='" + document.location.href.replace(/\#.*$/i, '') + "' onclick='document.body.removeChild(this.parentNode); return true;' class='sp_plus_a'>Обновить страницу</a>", 1, null);
                                                    };
                                                    if (delCount < 1) {
                                                        dArr = null;
                                                        clearInterval(intr);
                                                        main.alertm("Готово!<br/><a href='" + document.location.href.replace(/\#.*$/i, '') + "' onclick='document.body.removeChild(this.parentNode); return true;' class='sp_plus_a'>Обновить страницу</a>", 1, null);
                                                    }
                                                }, 500);
                                            });
                                        } else {
                                            main.alertm("Не выбрано ни одного читателя!", 1, null);
                                        }
                                        return false;
                                    }
                                });
                                btnDiv.appendChild(delSubm);
                                btnDiv.appendChild(chSubm);
                                main.insertAfter(btnDiv, lastParent);
                            } else {
                                for (var i = 0; i < chbxArr.length; i++) {
                                    chbxArr[i].style.display = "none";
                                }
                                var btnDiv = main.ce("div", {
                                    style: "display: none;",
                                    id: "SP_PLUS_BOTTOM_DIVB"
                                });
                                document.body.appendChild(btnDiv);
                            }
                        }
                    } catch (e) {
                        main.console.error('Ошибка (READERS): ' + e.name + ":" + e.message + "\n" + e.stack);
                    }
                }
            },
            blogsDelete: function() {
                var path = document.location.pathname.toString();
                if ((path == '/diary/' || path == '/diary/view/') && !main.qs("#SP_PLUS_BOTTOM_DIVB")) {
                    try {
                        var edLinks = main.find(document.links, {
                            href: _PROTOCOL + "//spaces.ru/diary/editaccess/?id="
                        });
                        if (edLinks && !main.qs("#SP_PLUS_BOTTOM_DIVB")) {
                            var CK = main.getCK(0);
                            var chbxArr = new Array();
                            for (var i = 0; i < edLinks.length; i++) {
                                if (edLinks[i].className) {
                                    edLinks[i].style.textDecoration = "none";
                                    var bChbx = main.ce("input", {
                                        type: "checkbox",
                                        id: "SP_DB_" + /\?id=([0-9]+)/i.exec(edLinks[i].href)[1],
                                        class: "sp_plus_checkbox"
                                    });
                                    var ckbxlb = main.ce("label", {
                                        attr: {
                                            "for": "SP_DB_" + /\?id=([0-9]+)/i.exec(edLinks[i].href)[1]
                                        }
                                    });
                                    main.insertAfter(bChbx, edLinks[i]);
                                    main.insertAfter(ckbxlb, bChbx);
                                    chbxArr.push(bChbx);
                                }
                            }
                            var lastParent = chbxArr[chbxArr.length - 1].parentNode;
                            if (lastParent) lastParent = lastParent.parentNode;
                            if (lastParent) lastParent = lastParent.parentNode;
                            if (lastParent) lastParent = lastParent.parentNode.parentNode;
                            if (lastParent) {
                                var btnDiv = main.ce("div", {
                                    class: "widgets-group user__tools_last",
                                    id: "SP_PLUS_BOTTOM_DIVB"
                                });
                                var chSubm = main.ce("button", {
                                    class: "user__tools-link table__cell",
                                    style: "width: 50%; display: inline-block; box-sizing: border-box;",
                                    html: '<span class="sp_plus_ico_okb"></span><span style="color: #57A3EA;">Выбрать все</span>',
                                    onclick: function(e) {
                                        var parent = (e.target.nodeName == "SPAN" ? e.target.parentNode : e.target);
                                        for (var i = 0; i < chbxArr.length; i++) {
                                            if (parent.innerHTML.indexOf('Выбрать все') >= 0) {
                                                chbxArr[i].checked = true;
                                            } else {
                                                chbxArr[i].checked = false;
                                            }
                                        }
                                        parent.innerHTML = '<span class="sp_plus_ico_okb"></span><span style="color: #57A3EA;">' + (parent.innerHTML.indexOf('Выбрать все') >= 0 ? "Снять отметки" : "Выбрать все") + '</span>';
                                        return false;
                                    }
                                });
                                var delSubm = main.ce("button", {
                                    class: "user__tools-link table__cell sp_btn_line",
                                    style: "width: 50%; display: inline-block; box-sizing: border-box;",
                                    html: '<span class="sp_plus_ico_del"></span><span style="color: #F86934;">Удалить выбранные</span>',
                                    onclick: function() {
                                        var delCount = 0,
                                            dArr = new Array();
                                        chSubm.innerHTML = '<span class="sp_plus_ico_okb"></span><span style="color: #57A3EA;">Выбрать все</span>';
                                        for (var i = 0; i < chbxArr.length; i++) {
                                            if (chbxArr[i].checked == true) {
                                                var delId = /^SP_DB_([0-9]+)$/i.exec(chbxArr[i].id)[1];
                                                dArr.push(delId);
                                                chbxArr[i].checked = false;
                                                delCount++;
                                            }
                                        }
                                        if (delCount > 0) {
                                            var ololo = main.declOfNum(delCount, ["", "а", "ов"]);
                                            main.confirmm("Хотите удалить " + delCount + " блог" + ololo + "?", function() {
                                                var cancel = null;
                                                var intr = setInterval(function() {
                                                    main.alertm("Удаляем блоги: <span style='color: #1cc61c;'>" + delCount + "</span><br/><a href='#' onclick='return false;' id='SP_PLUS_CANCEL' class='sp_plus_a'>Отмена</a>", 0, null);
                                                    delCount--;
                                                    var dIdBl = dArr[delCount];
                                                    main.ajax(_PROTOCOL + '//spaces.ru/diary/delete/?r=diary/delete', 'POST', 'CK=' + CK + '&id=' + dIdBl + '&Sure=1', function(r) {
                                                        main.console.info("[S+] Блог удален: " + dIdBl);
                                                    }, 2);
                                                    cancel = main.qs("#SP_PLUS_CANCEL");
                                                    cancel.onclick = function() {
                                                        dArr = null;
                                                        clearInterval(intr);
                                                        main.alertm("Отменено!<br/><a href='" + document.location.href.replace(/\#.*$/i, '') + "' onclick='document.body.removeChild(this.parentNode); return true;' class='sp_plus_a'>Обновить страницу</a>", 1, null);
                                                    };
                                                    if (delCount < 1) {
                                                        dArr = null;
                                                        clearInterval(intr);
                                                        main.alertm("Готово!<br/><a href='" + document.location.href.replace(/\#.*$/i, '') + "' onclick='document.body.removeChild(this.parentNode); return true;' class='sp_plus_a'>Обновить страницу</a>", 1, null);
                                                    }
                                                }, 500);
                                            });
                                        } else {
                                            main.alertm("Не выбрано ни одного блога!", 1, null);
                                        }
                                        return false;
                                    }
                                });
                                btnDiv.appendChild(delSubm);
                                btnDiv.appendChild(chSubm);
                                main.insertAfter(btnDiv, lastParent);
                            } else {
                                for (var i = 0; i < chbxArr.length; i++) {
                                    chbxArr[i].style.display = "none";
                                }
                                var btnDiv = main.ce("div", {
                                    style: "display: none;",
                                    id: "SP_PLUS_BOTTOM_DIVB"
                                });
                                document.body.appendChild(btnDiv);
                            }
                        }
                    } catch (e) {
                        main.console.error('Ошибка (BLOGS): ' + e.name + ":" + e.message + "\n" + e.stack);
                    }
                }
            },
            prompt: function(a, b) {
                a = a || "";
                b = b || "";
                var ret = prompt(a, b);
                return ret == null ? "" : ret;
            },
            icon: function(c) {
                if (c) {
                    return '<span class="sp_plus_ico_info"></span> ';
                } else {
                    return '<span class="sp_plus_ico_alert"></span> ';
                }
            },
            confirmm: function(html, callback) {
                var Yes = main.ce("a", {
                    html: "Да",
                    href: "#",
                    class: "sp_plus_a",
                    style: "color: #ec1818"
                });
                Yes.onclick = function(e) {
                    callback();
                    document.body.removeChild(e.target.parentNode);
                    return false;
                };
                var alDiv = main.qs("#SP_PLUS_CONFIRM");
                if (alDiv) {
                    alDiv.innerHTML = html + '<br/><br/><a class="sp_plus_a" href="#" style="color: #1cc61c;" onclick="document.body.removeChild(this.parentNode); return false;">Нет</a>&nbsp;&nbsp;';
                } else {
                    alDiv = main.ce("div", {
                        class: "sp_plus_alert_y",
                        id: "SP_PLUS_CONFIRM",
                        html: html + '<br/><br/><a class="sp_plus_a" href="#" style="color: #1cc61c;" onclick="document.body.removeChild(this.parentNode); return false;">Нет</a>&nbsp;&nbsp;'
                    });
                    document.body.appendChild(alDiv);
                }
                alDiv.appendChild(Yes);
            },
            alert: function(text, type, cb) {
                var div = main.qs("#import_alert_div");
                var cl = (!type ? "oh nl sp_plus_alertr" : "oh nl sp_plus_alertg");
                div.className = cl;
                if (cb) div.innerHTML = '<span class="ico ico_remove pointer right" onclick="this.parentNode.className=\'\';this.parentNode.innerHTML=\'\';"></span>' + text;
                else div.innerHTML = text;
            },
            alertm: function(html, close, timer) {
                var alDiv = main.qs("#SP_PLUS_ALERT");
                if (alDiv) {
                    alDiv.innerHTML = (close ? '<img src="' + _PROTOCOL + '//spac.me/i/cross_r.gif" alt="" class="pointer right notif_close" onclick="document.body.removeChild(this.parentNode);" title="Закрыть" />' : '') + html;
                } else {
                    alDiv = main.ce("div", {
                        class: "sp_plus_alert_y",
                        id: "SP_PLUS_ALERT",
                        html: (close ? '<img src="' + _PROTOCOL + '//spac.me/i/cross_r.gif" alt="" class="pointer right notif_close" onclick="document.body.removeChild(this.parentNode);" title="Закрыть" />' : '') + html
                    });
                    document.body.appendChild(alDiv);
                }
                if (!timer) {
                    setTimeout(function() {
                        if (main.qs("#SP_PLUS_ALERT")) main.qs("#SP_PLUS_ALERT").parentNode.removeChild(alDiv);
                    }, 4000);
                }
            },
            comments: function() {
                var childs = main.getClassName("span.comment_date", null);
                var bttlDiv = main.qs("#SP_PLUS_BOTTOM_DIV");
                try {
                    if (childs) {
                        if (!bttlDiv || childs.length != commentsLength) {
                            commentsLength = childs.length;
                            var delLink = null;
                            var refDiv = main.qs("div.js-comments-pgn");
                            var modrs = main.find(document.getElementsByTagName("input"), {
                                name: "del_comment_"
                            });
                            if (modrs) {
                                var testlink = main.find(modrs[0].parentNode.getElementsByTagName("a"), {
                                    innerHTML: "Удалить"
                                });
                                for (var x = 0; x < modrs.length; x++) {
                                    if (!modrs[x].id || !/^DC_\d+$/i.test(modrs[x].id)) {
                                        var ckbxlb = main.ce("label", {
                                            attr: {
                                                "for": "DC_" + modrs[x].value
                                            }
                                        });
                                        modrs[x].id = "DC_" + modrs[x].value;
                                        modrs[x].className = "sp_plus_checkbox";
                                        main.insertAfter(ckbxlb, modrs[x]);
                                    }
                                }
                            } else {
                                for (var k = 0; k < childs.length; k++) {
                                    delLink = main.find(childs[k].parentNode.parentNode.getElementsByTagName("a"), {
                                        innerHTML: "Удалить"
                                    });
                                    if (delLink && childs[k].getElementsByTagName("input").length == 0) {
                                        var ckbx = main.ce("input", {
                                            type: "checkbox",
                                            class: "sp_plus_checkbox",
                                            id: "DC_" + childs[k].parentNode.parentNode.parentNode.id
                                        });
                                        var ckbxlb = main.ce("label", {
                                            attr: {
                                                "for": "DC_" + childs[k].parentNode.parentNode.parentNode.id
                                            }
                                        });
                                        childs[k].appendChild(ckbx);
                                        childs[k].appendChild(ckbxlb);
                                    }
                                    if (k == (childs.length - 1) && !refDiv) {
                                        refDiv = childs[k].parentNode.parentNode;
                                    }
                                }
                            }
                            if (((modrs && testlink) || delLink) && !bttlDiv) {
                                var inputs = document.getElementsByTagName("input");
                                var exDiv = main.ce("div", {
                                    class: "widgets-group user__tools_last",
                                    id: "SP_PLUS_BOTTOM_DIV"
                                });
                                var chSubm = main.ce("button", {
                                    class: "user__tools-link table__cell",
                                    style: "width: 50%; display: inline-block; box-sizing: border-box;",
                                    html: '<span class="sp_plus_ico_okb"></span><span style="color: #57A3EA;">Выбрать все</span>',
                                    onclick: function(e) {
                                        var parent = (e.target.nodeName == "SPAN" ? e.target.parentNode : e.target);
                                        for (var i = 0; i < inputs.length; i++) {
                                            if (inputs[i].type == "checkbox" && /DC_([0-9]+)/gi.test(inputs[i].id) && inputs[i].parentNode.parentNode.parentNode.style.display != "none") {
                                                if (parent.innerHTML.indexOf('Выбрать все') >= 0) {
                                                    inputs[i].checked = true;
                                                } else {
                                                    inputs[i].checked = false;
                                                }
                                            }
                                        }
                                        parent.innerHTML = '<span class="sp_plus_ico_okb"></span><span style="color: #57A3EA;">' + (parent.innerHTML.indexOf('Выбрать все') >= 0 ? "Снять отметки" : "Выбрать все") + '</span>';
                                        return false;
                                    }
                                });
                                var delSubm = main.ce("button", {
                                    class: "user__tools-link table__cell sp_btn_line",
                                    style: "width: 50%; display: inline-block; box-sizing: border-box;",
                                    html: '<span class="sp_plus_ico_del"></span><span style="color: #F86934;">Удалить выбранные</span>',
                                    onclick: function() {
                                        var delCount = 0,
                                            dArr = new Array(),
                                            dArr2 = new Array();
                                        for (var i = 0; i < inputs.length; i++) {
                                            if (inputs[i].type == "checkbox" && /DC_([0-9]+)/gi.test(inputs[i].id) && inputs[i].checked == true) {
                                                if (modrs) {
                                                    var delLink = main.find(inputs[i].parentNode.parentNode.parentNode.getElementsByTagName("a"), {
                                                        innerHTML: "Удалить"
                                                    });
                                                } else {
                                                    var delLink = main.find(inputs[i].parentNode.parentNode.parentNode.getElementsByTagName("a"), {
                                                        innerHTML: "Удалить"
                                                    });
                                                }
                                                dArr.push(delLink[0]);
                                                dArr2.push(inputs[i]);
                                                delCount++;
                                            }
                                        }
                                        if (delCount > 0) {
                                            var ololo = main.declOfNum(delCount, ["й", "я", "ев"]),
                                                tmout;
                                            main.confirmm("Хотите удалить " + delCount + " комментари" + ololo + "?" + (_SETTINGS.comments_m2 ? " (альтернативный способ)" : ""), function() {
                                                var cancel = null;
                                                var intr = setInterval(function() {
                                                    main.alertm("Удаляем комментарии: <span style='color: #1cc61c;'>" + delCount + "</span><br/><a href='#' onclick='return false;' id='SP_PLUS_CANCEL' class='sp_plus_a'>Отмена</a>", 0, null);
                                                    delCount--;
                                                    if (_SETTINGS.comments_m2 && dArr[delCount].href) {
                                                        main.ajax(dArr[delCount].href, "GET", null, null, 2);
                                                    } else {
                                                        var clickEvent = document.createEvent("MouseEvent");
                                                        clickEvent.initEvent("click", true, true);
                                                        dArr[delCount].dispatchEvent(clickEvent);
                                                    }
                                                    dArr2[delCount].checked = false;
                                                    dArr2[delCount].className += " sp_plus_ch_cd";
                                                    cancel = main.qs("#SP_PLUS_CANCEL");
                                                    cancel.onclick = function() {
                                                        dArr = null;
                                                        dArr2 = null;
                                                        clearInterval(intr);
                                                        if (_SETTINGS.comments_m2) {
                                                            main.setLocation(document.location.href.replace(/\#.*$/i, ''));
                                                        } else {
                                                            main.alertm("Отменено!<br/><a href='" + document.location.href.replace(/\#.*$/i, '') + "' onclick='document.body.removeChild(this.parentNode); return true;' class='sp_plus_a'>Обновить страницу</a>", 1, null);
                                                        }
                                                    };
                                                    if (delCount < 1) {
                                                        dArr = null;
                                                        dArr2 = null;
                                                        clearInterval(intr);
                                                        if (_SETTINGS.comments_m2) {
                                                            main.setLocation(document.location.href.replace(/\#.*$/i, ''));
                                                        } else {
                                                            main.alertm("Готово!<br/><a href='" + document.location.href.replace(/\#.*$/i, '') + "' onclick='document.body.removeChild(this.parentNode); return true;' class='sp_plus_a'>Обновить страницу</a>", 1, null);
                                                        }
                                                    }
                                                }, 500);
                                            });
                                        } else {
                                            main.alertm("Не выбрано ни одного комментария!", 1, null);
                                        }
                                        return false;
                                    }
                                });
                                exDiv.appendChild(delSubm);
                                exDiv.appendChild(chSubm);
                                if (refDiv) {
                                    main.insertAfter(exDiv, refDiv);
                                } else if (main.qs("#page-down")) {
                                    main.inBefore(exDiv, main.qs("#page-down"));
                                } else {
                                    main.console.error("[S+] Не смогли найти ориентир для вставки!");
                                }
                            }
                        }
                    } else {
                        commentsLength = 0;
                    }
                } catch (e) {
                    main.console.error('Ошибка (COMMENTS): ' + e.name + ":" + e.message + "\n" + e.stack);
                }
            },
            playerDown: function() {
                var downPlace = main.qs("#SP_MUSIC_DOWN");
                try {
                    var trId = 0;
                    var track = sessionStorage.getItem('music:track');
                    var data = sessionStorage.getItem('music:playlist');
                    var player = main.qs("#gp_main_player");
                    if (player && track && data) {
                        var jstr = JSON.parse(track);
                        trId = parseInt(jstr.id, 10);
                        var jspl = JSON.parse(data);
                        var trScr = jspl.playlist.playlist[trId].src;
                        var tdIc = main.find(player.getElementsByTagName("td"), {
                            className: "ico_td"
                        });
                        if (tdIc && !downPlace) {
                            playerId = trId;
                            var dwnTd = main.ce("td", {
                                id: "SP_MUSIC_DOWN",
                                class: "ico_td",
                                innerHTML: '<a href="' + trScr + '" target="_blank" class="tdn"></span><span class="ico ico_download2" title="Скачать"></span></a>'
                            });
                            main.insertAfter(dwnTd, tdIc[0]);
                        } else if (downPlace && playerId != trId) {
                            playerId = trId;
                            main.console.info("[S+] Обновили трек!");
                            downPlace.innerHTML = '<a href="' + trScr + '" target="_blank" class="tdn"></span><span class="ico ico_download2" title="Скачать"></span></a>';
                        }
                    }
                } catch (e) {
                    if (downPlace) {
                        main.remove(downPlace);
                    }
                    main.console.error('Ошибка (PLAYER_DOWN): ' + e.name + ":" + e.message + "\n" + e.stack);
                }
            },
            coins: function() {
                var coinsLink = main.find(document.links, {
                    href: _PROTOCOL + "//spaces.ru/services/gift_get/?id="
                });
                if (coinsLink) {
                    coinsLink = coinsLink[0];
                    main.ajax(coinsLink.href, 'GET', null, function() {
                        try {
                            if (coinsLink) {
                                main.remove(coinsLink.parentNode);
                                main.console.info("[S+] Собрали монеты");
                            }
                        } catch (e) {
                            main.console.info("[S+] Собрали монеты???");
                        }
                    }, 2);
                }
            },
            karmaAccept: function() {
                var karmaLink = main.find(document.links, {
                    href: _PROTOCOL + "//spaces.ru/mysite/rate_n_karma/karma/?Accept="
                });
                if (karmaLink) {
                    karmaLink = karmaLink[0];
                    main.ajax(karmaLink.href, 'GET', null, function() {
                        try {
                            if (karmaLink) {
                                main.remove(karmaLink.parentNode);
                                main.console.info("[S+] Собрали карму!");
                            }
                        } catch (e) {
                            main.console.info("[S+] Собрали карму???");
                        }
                    }, 2);
                }
            },
            adsRemove: function() {
                var adsblock = main.find(document.links, {
                    href: _PROTOCOL + "//spaces.ru/?iF5oox6g="
                });
                if (adsblock) {
                    main.remove(adsblock[0].parentNode.parentNode);
                }
            },
            redirectURL: function() {
                var backURL = main.getClassName('a.c-red');
                var redirectURL = main.find(document.links, {
                    href: _PROTOCOL + "//spaces.ru/redirect/?"
                });
                if (redirectURL && backURL) {
                    redirectURL = redirectURL[0];
                    main.remove(redirectURL);
                    var wo = window.open(redirectURL, '_blank');
                    if (!wo) {
                        alert('Разрешите всплывающие окна для Spaces.ru');
                    }
                    main.setLocation(backURL);
                }
            },
            blogTools: function() {
                var path = document.location.pathname.toString();
                if (path == '/diary/read/' && !main.qs("#SP_PLUS_DELETEBL")) {
                    try {
                        var editLink = main.find(document.links, {
                            href: _PROTOCOL + "//spaces.ru/diary/new/?"
                        });
                        if (!editLink) {
                            editLink = main.find(document.links, {
                                href: _PROTOCOL + "//spaces.ru/diary/share/index/?"
                            });
                            if (editLink && !/(\?|&)Topic_id=([0-9]+)/i.test(editLink[0].href)) {
                                editLink = null;
                            }
                        }
                        if (editLink) {
                            for (var i = 0; i < editLink.length; i++) {
                                if (editLink[i].className) {
                                    editLink = editLink[i];
                                    break;
                                }
                            }
                        }
                        var diaryId = main.getQuery("id") || main.getQuery("Topic_id");
                        if (editLink && diaryId) {
                            var commlnk = main.getQuery("address");
                            var redUrl = _PROTOCOL + '//spaces.ru/diary/view/?';
                            if (commlnk) {
                                main.jajax(document.location.href, function(r) {
                                    try {
                                        if (r) {
                                            var _json = {
                                                'topicWidget': {
                                                    'topicModels': {
                                                        'topic_id': null
                                                    }
                                                }
                                            };
                                            var jsont = main.extend(_json, JSON.parse(r));
                                            if (jsont.topicWidget.topicModel.owner_id) {
                                                redUrl += 'comm=' + jsont.topicWidget.topicModel.owner_id;
                                                main.console.info("[S+] Редирект: " + redUrl);
                                            }
                                        }
                                    } catch (e) {
                                        main.console.error('Ошибка (JSON_BLOGTOOLS_COMM): ' + e.name + ":" + e.message + "\n" + e.stack);
                                    }
                                });
                            }
                            var CK = main.getCK(0);
                            if (editLink.parentNode.nodeName == "TD") {
                                var wrTd = main.ce("td", {
                                    class: editLink.parentNode.className
                                });
                                var delLink = main.ce("a", {
                                    href: _PROTOCOL + "//spaces.ru/diary/delete/?id=" + diaryId + "&irb526786=1",
                                    html: '<img src="' + _PROTOCOL + '//spac.me/i/remove.png" alt="" class="p16 m">',
                                    id: "SP_PLUS_DELETEBL",
                                    title: "Удалить запись",
                                    class: editLink.className,
                                    onclick: function() {
                                        var titl = main.getClassName("div.blog-item__title", null);
                                        if (titl) titl = ' <b style="color: #0000FF">' + titl[0].innerHTML + '</b>';
                                        else titl = "";
                                        main.confirmm('Хотите удалить запись' + titl + '?', function() {
                                            main.ajax(_PROTOCOL + '//spaces.ru/diary/delete/', 'POST', 'CK=' + CK + '&Sure=1' + '&id=' + diaryId, function(r) {
                                                main.setLocation(redUrl);
                                            }, 2);
                                        });
                                        return false;
                                    }
                                });
                                main.inBefore(wrTd, editLink.parentNode);
                                wrTd.appendChild(delLink);
                            } else {
                                var delLink = main.ce("a", {
                                    href: _PROTOCOL + "//spaces.ru/diary/delete/?id=" + diaryId + "&irb526786=1",
                                    html: '<img src="' + _PROTOCOL + '//spac.me/i/remove.png" alt="" class="p16 m"> <span class="m">Удалить</span>',
                                    id: "SP_PLUS_DELETEBL",
                                    title: "Удалить запись",
                                    class: editLink.className,
                                    onclick: function() {
                                        var titl = main.getClassName("div.blog-item__title", null);
                                        if (titl) titl = ' <b style="color: #0000FF">' + titl[0].innerHTML + '</b>';
                                        else titl = "";
                                        main.confirmm('Хотите удалить запись' + titl + '?', function() {
                                            main.ajax(_PROTOCOL + '//spaces.ru/diary/delete/', 'POST', 'CK=' + CK + '&Sure=1' + '&id=' + diaryId, function(r) {
                                                main.setLocation(redUrl);
                                            }, 2);
                                        });
                                        return false;
                                    }
                                });
                                main.inBefore(delLink, editLink);
                                if (editLink.nextElementSibling.nodeName == "BR") {
                                    main.insertAfter(main.ce("br", null), delLink);
                                }
                            }
                        }
                    } catch (e) {
                        main.console.error('Ошибка (BLOGTOOLS): ' + e.name + ":" + e.message + "\n" + e.stack);
                    }
                }
            },
            darkMode: function(t) {
                var parent = document.getElementsByTagName('head').item(0);
                var sdm = main.qs("#SP_PLUS_DARKMODE") || main.ce("style", {
                    id: "SP_PLUS_DARKMODE",
                    type: "text/css"
                });
                try {
                    if (sdm && !sdm.hasAttribute("sp-darkmode") && t) {
                        sdm.innerHTML = ".perimeter-border{border: 1px solid #344047;}.pdb{background-color: #4d5961 !important;}.sp_btn_line{border-right: 1px solid #344047 !important;}.btn-tools_centered .icon-link{border: 1px solid #344047 !important;}.sp_plus_alert_y{border: 1px solid #344047 !important; background: #4d5961 !important; color: #fff !important; -webkit-box-shadow: 0 3px 5px #293238 !important; -moz-box-shadow: 0 3px 5px #293238 !important; box-shadow: 0 3px 5px #293238 !important;}#copy_url{color: #888;}.sv b, .site-versions b{color: #fff;}#sandbox_indicator{background: #4d5961 none repeat scroll 0% 0% !important; color: #a4b7c4;}#page_counters > div{background-color: #404a51 !important;}#copy_url{background: #404a51 !important;}.bottom_fix{background: #404a51;}.karma__plus, .karma__minus{border-bottom: 1px solid #344047 !important;}.pc .mail__msg_checked:hover, .pc .mail__msg_checked.mail__new_msg:hover, .pc .mail__msg_checked.mail__new_msg_bg:hover, .mail__msg_checked{background: #344047 !important;}.sp_input_color{border: 1px solid #344047 !important;}.location-bar a:hover{color: #fff;}.bstrwrap{border-top: 1px solid #344047 !important;}.stnd-block-yellow{background: #f9edbf !important;}.content-bl__sep3{border-bottom: unset;}.triangle-show.js-clicked::after{border-bottom-color: #344047;}.dropdown-menu_top .table__cell .js-clicked::after{border-top-color: #344047;}.table__cell .clicked::after{border-bottom-color: #344047;}.table_cell_border{border-right: 1px solid #344047 !important;}.btn-tools.js-clicked::after{border-bottom-color: #344047;}.user__change-btn.js-clicked::after{border-bottom-color: #344047;}.tabs .clicked .tabs__link::after{border-top-color: #344047;}.triangle-show.triangle-block::after, .triangle-show.triangle-block::before{border-bottom-color: #344047;}.action-bar-info .triangle-show::after{border-bottom-color: #404a51;}.link_top-border{border-top: 1px solid #344047;}.f__title{color: #fff;}.b-title_in-window{background: #4d5961 !important; color: #fff;}button, input[type='button'], input[type='submit'], input[type='reset'], .button{border: 1px solid #344047; background: #4d5961;}button:hover, input[type='button']:hover, input[type='submit']:hover, input[type='reset']:hover, .button:hover{background-color: #818f99;}.sp_plus_line > span{background: #404a51 !important;}.sp_plus_line::before{border-bottom: 1px solid #344047 !important;}.sp_plus_text{color: #7a90a0 !important;}div.main{border-left: 1px solid #344047; border-right: 1px solid #344047;}.s_title{background: unset;}#left_nav ul li.li{border-top: unset; border-bottom: unset;}.location-bar a::after, .location-bar__title::after, .location-bar_no-break::after{background: unset;}.carousel-bg{border-bottom: 1px solid #344047;}a.region_link:visited, .author_settings, a.region_link, .t-strong_special .gr{color: #57a3ea !important;}.smiles_menu-back{border-top: 1px solid #344047;}.smiles_menu-header{background: #344047;}.smiles_menu{border: 1px solid #344047;}.smiles_menu-body{background: #4d5961;}.busi_switcher table .active_item, .busi_switcher table a:active{background: #4d5961;}.busi_switcher table a, .busi_switcher table span.active_item{text-shadow: unset;}.busi_switcher table a, .busi_switcher table span.active_item{border: 1px solid #344047;}.file_name, .search_bar, .more_link, .list_item, .edit_title_block, .busi_switcher table a, .edit_button{background: #344047;}.busi_switcher table a:hover{background: #4d5961;}.light_blue_bg{color: #fff;}.vlight_border_bottom{border-bottom: 1px solid #344047;}.bubble-message{color: #fff;}.text-block5, .text-block6, .text-block7{color: #fff;}.replace_widget_wrapper + .list-link, .replace_widget_wrapper + .content-item3{border-top: 1px solid #344047;}.list-link__more-users{background: #404a51; color: #fff;}.toolbar__wrap{background: unset;}.stnd-block.error__msg{background: unset;}.tile{background: #344047; color: #fff;}.select_custom{color: #fff;}.cnt-link:focus{color: #fff; background: #5b676f;}.cnt-link:hover{background: #5b676f;}.hover_bg:hover{background: #818f99;}.suggest__item{background: #434b5a;}a.service_link, a.service_link span, .service_item{color: #fff;}.t-link_no_underline_block, .t-link_no_underline_block:hover{color: #fff;}.t-link_no_underline:hover, .t-link_no_underline:hover span, .t-link_no_underline_block:hover .t-link_item_hover{color: #57a3ea;}a.region_link:hover, .ewb:hover span, a.title_link:hover span, a.grey_link:hover, span.grey_link a:hover, .list_item div a:hover, .author_link:hover, .edit_label a:hover, a.user_link:hover, a.service_link:hover, a.service_link:hover span, .busi a:hover, a.arrow_link:hover span, .pag .pgar .page:hover, .edit_link, .sub_menu a:hover, a.icolink:hover, .neutral_link span, .tools_block a:hover, .url-btn-blue:hover, .file_comments_info a:hover, .sub_block a:hover, a.name_link:hover, .response:hover, .green_box a:hover span, .ufi a:hover span, .ufi a:hover{color: #57a3ea !important;}a.region_link:hover, .ewb:hover span, a.title_link:hover, a.title_link:hover span, a.grey_link:hover, span.grey_link a:hover, .list_item div a:hover, .author_link:hover, .edit_label a:hover, a.user_link:hover, a.service_link:hover, a.service_link:hover span, .busi a:hover, a.arrow_link:hover span, .pag .pgar .page:hover, .edit_link, .sub_menu a:hover, a.icolink:hover, .neutral_link span, .tools_block a:hover, .url-btn-blue:hover, .file_comments_info a:hover, .sub_block a:hover, a.name_link:hover, .response:hover, .green_box a:hover span, .ufi a:hover span, .ufi a:hover{color: #57a3ea;}.tab_title{color: #fff;}.table__cell_last, .table_no_borders .table__cell{border-right: unset !important;}.service_links_block_top, .pad_t_a{border-top: unset !important;}.block-item__btn-wrap > div > a{border: 1px solid #344047;}.spo_desc{color: #57a3ea;}a.red_link, a.red_link span, .red_item{color: red;}.light_border_top{border-top: 1px solid #344047;}.text-input[readonly]{background: unset !important;}.stnd-link, .stnd-block{color: #fff;}.tabs_line{border-top: 1px solid #344047;}.tabs_block a:hover {background: #818f99;}.tabs_block .tab_item{border: 1px solid #344047; background: #404a51; color: #fff;}.tabs_block .tab_active, .tabs_block .tab_active:hover{background: #4d5961 !important; color: #fff;}.list_item{background: #4d5961 !important;}.bottom_link_block, .search_bar, div.backlink, body .blue_bg{background: #4d5961;}.user__tools_horiz-mode{border: 1px solid #344047;}.form-checkbox_w_descr .form-checkbox__label{color: #fff;}.content-item_info{color: #344047 !important;}.sp_plus_checkbox_el + label{color: #fff !important;}.chb-icons .ico_photo, .ico_photo_gray {background-position: -288px -180px !important;}.sep-chb .form-checkbox, .form-checkbox_dropdown-menu{background: #4d5961; border-bottom: 1px solid #344047;}.drop-down-list_inner .drop-down-label{background: unset;}.darkblue{color: #fff;}.text-block7{color: #fff;}.normal-stnd{color: #fff;}.list-link:hover, .me6d43f28:hover, .list-link__wrap_hover .list-link, .tabs__item:hover, .btn-main:hover, .btn-block:hover, .user__tools-link:hover, a.user__tools-link:hover, .user-tile__btn:hover, a.hover-item:hover, .tile__bottom-link:hover, .btn-link:hover, .stnd-link:hover, .s-city__item:hover, .s-chb:hover, a:hover .bordered, .pgn__link_hover:hover, .links-group_grey .list-link.strong_clicked, .form-checkbox_dropdown-menu:hover, .dropdown-menu .list-link:hover, .dropdown-menu .list-link__wrap_hover .list-link{background: #596671 !important;}.gp-active .gp-content{background-color: #344047;}#gp_playlist{background: #4d5961;}#gp_window{border: unset;}.att_wrap{background: #404a51;}.quote, .blog-item_short_shared{background: #596771; color: #fff; border: 1px solid #344047;}.links-group .stnd-link, .links-group .list-link_arrow{border-bottom: 1px solid #344047;}.soc-separator{background: #4d5961;}.sub-tabs{background: #4d5961;}.message{background: #404a51;}.table__cell_block{background: #4d5961;}.light_blue{background: #404a51;}.user__tools-link{color: #fff !important;}.flot-text{color: #fff !important;}.site-link__wrapper{border-bottom: 1px solid #344047;}.stnd-link_profile, .stnd-block_profile{color: #7a90a0 !important;}.pgn__go, .pgn__go:hover {background-position: -396px -306px !important;}.pgn__search_input:focus{background: #4d5961;}.blue_border_bottom{border-bottom: 1px solid #344047;}.light_blue_bg{background: #404a51; border-bottom: 1px solid #344047;}.t-padd_right{padding-right: unset;}#e0437eeb07, .pag, .search_bar, .bottom_link_block, .list_item, .button_block, .title_block, .sub_menu, .strong_border{border-bottom: 1px solid #344047;}.blue_wrap_block{background: #404a51;}.pgn-wrapper .pgn{border-top: 1px solid #344047;}.sup_block{background: #4d5961;}#main_shadow, #top_info_block{border-left: unset;}.list-link_online{color: #fff !important;}.ico_services {background: url('https://crashmax-off.github.io/darkmode/ico_services.png') no-repeat};.ico_services_nick{background-position: 0 -34px;}.ico_services_stickers{background-position: -34px -34px;}.ico_services_ads{background-position: 0 0;}.ico_services_nick{background-position: 0 -34px;}.ico_services_ghost{background-position: -34px 0;}.ico_services_storage{background-position: -68px 0;}.ico_services_head_icons{background-position: -68px -34px;}.ico{background: url('https://crashmax-off.github.io/darkmode/ico.png') no-repeat;}.ico_mode_na{background-position: -360px -72px;}.ico_rate_up{background-position: -80px -198px;}.ico_demo{background-position: -414px -130px;}.ico_ban_list {background-position: -180px -310px;}.ico_darr_left {background-position: -90px -364px;}.ico_question_light {background-position: -234px -144px;}.ico_ok, .ico_ok_green {background-position: -252px -108px !important;}.ico_darr_right {background-position: -108px -364px;}.ico_rotate_left {background-position: -54px -364px;}.ico_rotate_right {background-position: -72px -364px;}.ico_note {background-position: -198px -364px;}.ico_ok_grey {background-position: -18px -364px;}.ico_speaker{background-position:-72px -256px}.ico_close_btn_invers{background-position: 0 -198px;}.ico_locked{background-position:-378px -36px;}.ico_status {background-position: -128px -180px;}.ico_read_blue {background-position: -270px -292px;}.ico_place {background-position: -396px -162px;}.ico_arr4 {background-position: -414px -223px;}.ico_att {background-position: -144px -310px;}.ico_mess, .chb-icons .form-checkbox_checked .ico_mess {background-position: -198px -274px;}.ico_more_b {background-position: -54px -292px;}.ico_no_results {background-position: -34px -146px;}.ico_users_blue {background-position: -162px -328px;}.ico_shared_grey {background-position: -216px -220px;}.ico_shared_darkblue{background-position: -234px -220px;}.ico_ac_all_grey, .drop-down-list_inner .drop-down-label .ico_ac_all{background-position: -324px -310px;}.ico_filter {background-position: -396px -198px;}.ico_search_people_blue {background-position: -378px -198px;}.ico_mode_froffr {background-position: -71px -180px;}.ico_delete_g {background-position: -324px -180px;}.ico_plane_blue {background-position: -288px -310px;}.ico_alert {background-position: -216px -364px;}.ico_people_darkblue {background-position: -378px -270px;}.ico_locked_large {background-position: -68px -146px;}.ico_a {background-position: -126px -364px;}.ico_plus_blue {background-position: -324px -270px;}.ico_ac_group {background-position: -54px -328px;}.ico_ac_password {background-position: -342px -288px;}.ico_eye {background-position: -252px -310px;}.ico_ac_fof, .ico_ac_fof_black, .ico_ac_fof_darkblue{background-position: -342px -198px;}.ico_ac_friends {background-position: -342px -126px;}.ico_ac_user {background-position: -342px -36px;}.ico_mode_fronl {background-position: -162px -256px;}.ico_extended, .ico_extended_on, .ico_extended_off{background-position: -396px -342px;}.ico_short, .ico_short_on, .ico_short_off{background-position: -396px -324px;}.ico_mobile_blue {background-position: -324px -126px;}.ico_mail_blue {background-position: -324px -108px;}.ico_enter_grey, body a.stnd-link_disabled .ico_enter_grey {background-position: -306px -144px;}a.inl-link:hover .ico_shared_darkblue, .ico_shared_blue{background-position: -252px -18px;}.ico_checked {background-position: -180px -364px;}.ico_upload_blue {background-position: -396px -90px;}.ico_shared_white {background-position: -198px -220px;}.ico_befriends_blue {background-position: -144px -292px;}.ico_ac_friends_darkblue, .ico-menu-toggle.js-clicked .ico_ac_friends, .drop-down-label.js-clicked .ico_ac_friends_black{background-position: -378px -270px;}.ico_delete {background-position: -180px -256px;}.ico_rate_down {background-position: -324px -72px;}.ico_close_btn{background-position: -22px -198px;}.ico_enter_blue {background-position: -306px -126px;}.ico_add_darkblue {background-position: -396px -54px;}.ico_profile, .ico_edit_dim {background-position: 0 -292px;}.site-link__wrapper{background: #4d5961;}.ico_service_b {background-position: -200px -34px;}.ico_career_b {background-position: -200px -68px;}.ico_high_b {background-position: -102px -146px;}.ico_ed_b {background-position: -132px 0;}.ico_up {background-position: -360px 0;}.ico_down {background-position: -360px -36px;}.ico_plane {background-position: -234px -292px;}.ico_read_on {background-position: -324px -18px;}.ico_ac_fof_darkblue, .ico-menu-toggle.js-clicked .ico_ac_fof, .drop-down-label.js-clicked .ico_ac_fof_black{background-position: -342px -234px;}.ico_edit_b, a:hover .ico_edit_darkblue, a:hover .no-text .ico_profile, .link-normal:hover .ico_profile, .inline-link:hover .ico_edit_dim, .link-grey:hover .ico_edit_dim, .link-dim:hover .ico_edit_dim{background-position: -324px -216px;}.block-item{border-bottom: 1px solid #344047; background: #4d5961 !important;}.ico_main_b {background-position: -200px -136px;}.ico_befriends {background-position: -378px -288px;}.ico_man {background-position: -288px -364px;}.ico_woman {background-position: -324px -364px;}.user__tools_horiz-mode .table__cell{border-right: 1px solid #344047;}.text-input:focus{background: #4d5961;}.ico_compass {background-position: -166px -68px;}.s-city__item_light:active, .s-city__item_light.clicked{color: #fff;}.s-city__item_city.clicked, .s-city__item_light.clicked, .s-city__item_country.clicked{background: #4d5961;}.s-city__item_light{color: #fff;}.s-city__item{border-bottom: 1px solid #344047;}.s-city__wrap{background: #4d5961;}.drop-down-label_single.js-clicked, .drop-down-label_single.js-clicked .t, .drop-down-label.js-clicked, .drop-down-label.js-clicked .t{color: #57a3ea !important;}.drop-down-label:hover, .drop-down-label:hover .t, .drop-down-label.js-clicked:hover, .drop-down-label.js-clicked:hover .t{color: #57a3ea !important;}.drop-down-label{color: #fff;}.ico_arr5, .ico_arr_bottom {background-position: -180px -238px;}.ico_search_blue {background-position: -378px -162px;}.b-title__spoiler{background: #404a51;}.attention{background: #4d5961; border: 1px solid #344047;}.ico_add_univer {background-position: 0 -112px;}.ico_add_school {background-position: -68px -112px;}.ico_gifts_blue {background-position: -306px -198px;}.ico_write, body a.stnd-link_disabled .ico_write, body a.stnd-link_disabled:active .ico_write, body .list-link.user__tools-link_disabled .ico_write, body .user__tools-link.user__tools-link_disabled .ico_write{background-position: -324px -90px !important;}.ico_gifts, .stnd-link_disabled:active .ico_gifts, body .user__tools-link.user__tools-link_disabled .ico_gifts{background-position: -306px -180px;}.ico_tort {background-position: -198px -256px;}.ico_add_blue {background-position: -396px -36px;}.ico_ed_middle {background-position: -360px -162px;}.ico_settings_light {background-position: -234px -274px;}.ico_ok_blue {background-position: -116px -198px;}.ico_download, .ico_down_blue {background-position: -170px -198px;}.ico_complaint {background-position: -288px -36px;}.ico_read, body .list-link.user__tools-link_disabled:hover .ico_read, body .user__tools-link.user__tools-link_disabled .ico_read, body a.stnd-link_disabled .ico_read, body a.stnd-link_disabled:active .ico_read {background-position: -306px -292px;}.ico_write, body a.stnd-link_disabled .ico_write, body a.stnd-link_disabled:active .ico_write, body .list-link.user__tools-link_disabled .ico_write, body .user__tools-link.user__tools-link_disabled .ico_write {background-position: -324px -54px;}.ico_befriends_on {background-position: -162px -292px;}.ico_question_grey {background-position: -126px -220px;}.ico_download2_grey {background-position: -234px 0;}.links-group .ico_arr_bottom, .drop-down-label_single.drop-down-label .ico_arr_bottom, .drop-down-list_inner .drop-down-label .ico_arr_bottom, .ico_arr_bottom_grey {background-position: -270px -180px;}.ico_download2_blue {background-position: -206px -198px;}.ico_plus_white {background-position: -360px -108px;}.ico_galoom_white, .ico_galoom {background-position: -198px -346px;}.ico_mail_white {background-position: -324px -90px;}.ico_mymir_white, .soc-link .ico_mymir, .soc-link:active .ico_mymir, .soc-button .ico_mymir {background-position: -162px -346px;}.ico_twitter_white {background-position: -108px -346px;}.ico_fb_white, .soc-link .ico_fb, .soc-link:active .ico_fb, .soc-button .ico_fb {background-position: -180px -346px;}.ico_odnk_white, .soc-link .ico_odnk, .soc-link:active .ico_odnk, .soc-button .ico_odnk {background-position: -144px -346px;}.ico_vk_white, .soc-link .ico_vk, .soc-link:active .ico_vk, .soc-button .ico_vk {background-position: -126px -346px;}.ico_rating {background-position: -36px -220px;}.ico_info {background-position: -234px -180px;}.ico_forum, .chb-icons .form-checkbox_checked .ico_forum {background-position: -144px -274px;}.ico_user {background-position: -234px -72px;}.ico_arrow {background-position: -414px -321px;}.ico_com{background-position: -414px -166px;}.ico_users_group {background-position: -90px -180px;}.ico_user_online {background-position: -162px -220px;}.ico_pause, .playing .p_i_t_pb_image{background-position: -414px -58px;}.ico_reload_gray{background-position: 0 -238px;}.ico_download2{background-position: -188px -198px;}.ico_plus_darkblue, .js-clicked .ico_plus_grey{background-position: -324px -288px;}.ico_player_next{background-position: 0 -364px;}.ico_player_prev{background-position: -234px -90px;}a:hover .ico_lenta_comments, .ico_soo_down, .ico_weather_xlarge, .ico_spacesru{background-position: 0 -66px;}.ico_play, body .p_i_t_pb_image{background-position: -414px -148px;}.ico_ok_active{background-position: -252px -124px;}.ico_arr, .ico_arr2{background-position: -414px -265px;}.ico_arr3{background-position: -414px -237px;}.ico_arr_bottom_white{background-position: -270px -162px;}.location-bar__home-link{background-position: -396px 0;}.ico_reload_darkblue{background-position: -252px -216px;}.ico_remove, body input[type='submit'].delete-btn{background-position: -378px -306px;}.help-block{border-bottom: 1px solid #344047;}.p_i_p_progressLine{background-color: #9ab2cc;}.ico_friends_grey{background-position: -252px -364px;}.ico_settings{background-position: -98px -198px;}.ico_fav, .ico_fav_grey{background-position: -216px -256px;}.ico_more{background-position: -36px -292px;}.ico_fav_on{background-position: -252px -256px;}.ico_add{background-position: -270px -274px;}.ico_history{background-position: -306px 0;}.ico_exit{background-position: -306px -54px;}.ico_plus_grey{background-position: -180px -328px;}.ico_smile{background-position: -396px -126px;}.ico_plus{background-position: -62px -198px;}.ico_arrow-back, .ico_arr11{background-position: -414px -349px;}.ico_upload{background-position: -396px -72px;}.ico_gb{background-position: -126px -256px;}.ico_blog{background-position: -144px -256px;}.ico_game{background-position: -288px -90px;}.ico_photo, .chb-icons .form-checkbox_checked .ico_photo {background-position: -288px -162px;}.ico_music, .chb-icons .form-checkbox_checked .ico_music {background-position: -288px -252px;}.ico_video, .chb-icons .form-checkbox_checked .ico_video {background-position: -36px -274px;}.ico_file, .chb-icons .form-checkbox_checked .ico_file {background-position: -90px -274px;}.ico_comm {background-position: -52px -180px;}.ico_friends {background-position: -306px -234px;}.ico_readers {background-position: -109px -180px;}.ico_readers {background-position: -109px -180px;}.ico_int_people {background-position: -306px -270px;}.ico_add_user{background-position: -166px 0;}.ico_wait {background-position: -252px -198px;}.player_item{color: #fff !important;}.gp-playlist_active{background: #344047 !important;}.stnd_padd{background: #4d5961;}.light_border_bottom{border-bottom: 1px solid #344047; background: #4d5961 !important;}.upper_case{color: #a7b8c6;}.gp-info_wrap{color: #fff;}.gp-content:hover{background-color: #818f99;}.gp-content{background-color: #4D5961;}.user__tools{border-bottom: 1px solid #344047;}.user__details{color: #a7b8c6;}.blog-toolbar{color: #a7b8c6;}.switch__item{background: #344047;}.switch__item_current{background: #4d5961 !important; color: #fff;}.text-input{border: 1px solid #344047 !important; background: #4d5961; color: #fff;}.btn-min{border: 1px solid #344047;}.text-input-wrapper_inline{border: 1px solid #344047;}.tabs__item_disabled, .tabs__item_disabled:active{background: #4d5961 !important;}.dropdown-menu_text{background: #4d5961;}.pgn__button:active, .pgn__button_press, .pgn__button_press:hover, .mail__button:active{color: #7a90a0 !important; background: #344047 !important; -webkit-box-shadow: inset 0px 3px 5px #293238 !important;-moz-box-shadow: inset 0px 3px 5px #293238 !important;box-shadow: inset 0px 3px 5px #293238 !important;}.pgn__search_input{background: #4d5961; border: 1px solid #373f46; -webkit-box-shadow: inset 0px 3px 5px #374047;-moz-box-shadow: inset 0px 3px 5px #374047;box-shadow: inset 0px 3px 5px #374047;}.mail__dialog_message{background: #404a51;}.grey{color: #fff !important;}.mail__dialog_answer{background: #344047;}.mail__dialog_text{color: #fff !important;}.comm_selected .comm{background: #344047;}.system-message_alert{color: #ff6837 !important;}.info-item{color: #fff;}.content-bl{color: #fff;}.e02afd89e1, .list-link{color: #fff;}.b-title__all::before{content: unset;}a:hover .b-title__all{background: #344047;}.file_name, .search_bar, .more_link, .list_item, .edit_title_block, .busi_switcher table a, .edit_button{color: #fff;}.links-group_sections .list-link:hover{color: #fff !important;}.list-link-grey:active, .inl-link.js-clicked, .l-gr .list-link:active, .links-group .list-link:active, .list-link:active .lgrey2, body .links-group .list-link-blue:active{color: #fff !important;}.bubble::after, .user__status::after{border-bottom-color: #404a51;}.bubble, .user__status{background: #404a51; color: #a7b8c6;}#wrap_all{background: #4d5961;}.ico_mail{background: url('https://crashmax-off.github.io/darkmode/ico_mail.png') no-repeat;}.ico_mail_write{background-position: -32px -126px}.ico_mail_restore_grey{background-position: -17px -108px;}.ico_mail_spoiler {background-position: -72px -54px;}.ico_mail_message{background-position: -68px -108px;}.ico_mail_fav_blue{background-position: -90px -18px;}.ico_mail_archive_blue{background-position: -126px -54px;}.ico_mail_spam_blue{background-position: -18px -90px;}.ico_mail_garbage_blue{background-position: -126px 0;}.ico_mail_cog_blue{background-position: -54px -18px;}a.inl-link:hover .ico_cats_city, .ico_cats_city_black, .ico_leads, .ico_mail_quote, #present_link span{background-position: -36px -36px;}.ico_cats_news_black, a:active .ico_cats_news, a.stnd-link_active .ico_cats_news, .ico_cats_news_black, .ico_mail_link{background-position: -18px -72px;}.ico_cats_subculture_black, a:active .ico_cats_subculture, a.stnd-link_active .ico_cats_subculture, .ico_cats_subculture_black, .ico_chat_journal_blue, .ico_mail_color, .pc .voteDownCnt:hover span, .voteDownCnt span.on, .pc .voteDownCnt:hover span.on{background-position: -18px -54px;}.ico_settings_black_blue, .ico_mail_bold, .voteDownCnt span{background-position: -18px 0;}.ico_rules, .ico_mail_italic, .voteUpCnt span{background-position: 0 -18px;}.ico_journal, .ico_mail_underline, #mail_link span{background-position: -36px 0;}.ico_cats_rpg_black, a:active .ico_cats_rpg, a.stnd-link_active .ico_cats_rpg, .ico_cats_rpg_black, .ico_people_in_viktorina, .ico_mail_strike, #bookmark_link span{background-position: 0 -36px;}.ico_mail_code{background-position: -18px -126px;}.ico_mail_background, #comment_link span{background-position: -72px 0;}.ico_mail_picture{background-position: 0 0;}.ico_mail_music{background-position: -90px -36px;}.ico_mail_video{background-position: -108px -52px;}.f__ico_contacts, .ico_files_zip, .ico_mail_file{background-position: -126px -72px;}.ico_mail_spam, .mail__button.disabled:active .ico_mail_spam{background-position: -36px -90px;}.ico_mail_garbage_red{background-position: -108px -88px;}.ico_mail_attach{background-position: -54px -72px;}.ico_attaches{background: url('https://crashmax-off.github.io/darkmode/ico_attaches.png') no-repeat;}.ico_attaches_picture {background-position: -18px -18px;}.ico_attaches_poll {background-position: -36px 0;}.ico_attaches_file {background-position: -18px -36px;}.ico_attaches_music {background-position: 0 -18px;}.ico_attaches_attach{background-position: -18px 0;}#sidebar_wrap{background: #4d5961;}.ico_mail_receive{background-position: -104px -108px;}.ico_mail_archive{background-position: -126px -36px;}.ico_mail_garbage{background-position: -51px -108px;}#left_nav ul li.li a, .s_title{color: #fff;}.s_i_exchange{background-position: -36px -36px !important;}.s_i_love{background-position: 0 -72px;}.s_i_music{background-position: -72px -36px;}.s_i_diary{background-position: -36px 0;}.s_i_community{background-position: 0 -18px;}.s_i_forum{background-position: -36px -54px;}.s_i_chat{background-position: 0 -36px;}.s_i_games{background-position: -54px -18px;}.s_i_announcement{background-position: -72px 0;}.s_i_people{background-position: 0 -54px;}.s_i_guestbook{background-position: 0 -126px;}.s_i_files{background-position: -126px -18px;}.s_i_videos{background-position: -126px -54px;}.s_i_photos{background-position: -126px -90px;}.s_i_city{background-position: -108px -36px;}.s_i_mobiles{background-position: -72px -72px;}.s_i_info{background-position: -90px -18px;}.s_i_favorites{background-position: -72px -126px;}.s_i_friends{background-position: 0 -108px;}.s_i_history{background-position: -36px -126px;}.s_i_links{background-position: -108px -108px;}.s_i_options, .s_i_menu{background-position: -108px -72px;}.s_i_allservices_gray{background-position: -72px -108px;}.s_i_help{background-position: -90px -54px;}.s_i_exit{background-position: -36px -108px;}.left_nav_search_input, .reg_text_input{background: #434b5a; border: 1px solid #232833;}#left_nav ul li.li a:hover{background: #818f99;}.s_title, #left_nav ul li.li a.title_link{color: #fff;}.left_nav_search_input:hover{background: #434b5a;}#main_search_input{color: #c4ccda;}body #left_nav ul li.li a:active {color: #fff; background: #344047; -webkit-box-shadow: inset 0px 3px 5px #192228; -moz-box-shadow: inset 0px 3px 5px #192228; box-shadow: inset 0px 3px 5px #192228;}.left_nav_padding input.search__btn:focus{background: #434b5a;}.main, #logo_panel, .item_head_bg{background: #404a51;}.location-bar{color: #fff; background: #4d5961; -webkit-box-shadow: 0 3px 5px #293238;-moz-box-shadow: 0 3px 5px #293238;box-shadow: 0 3px 5px #293238;}.location-bar::after{background: #4d5961;}.tile-menu__title{color: #fff;}.tile-menu__link{background: #344047; -webkit-box-shadow: 0 3px 5px #293238; -moz-box-shadow: 0 3px 5px #293238; box-shadow: 0 3px 5px #293238;}.pc .tile-menu__link:hover {background: #4d5961}.tile-menu__link:active{background: #344047 !important;-webkit-box-shadow:inset 0 3px 4px #293238;-moz-box-shadow:inset 0 3px 4px #293238;box-shadow:inset 0 3px 4px #293238;}.search__input:focus{background: #434b5a;}.search__input{background: #434b5a; border: 1px solid #232833; color: #fff;}.b-title__link, .b-title__item{color: #fff !important;}.widgets-group, .m44f47fd1, .spoiler_inject::before, .our_spo_inj::before, .content-item, .dropdown-menu_text, .btn-single, .tabs::before, .spaced-group a, .user-tile__similarity-wrapper, .pgn, .shdw, .ma74074b9{-webkit-box-shadow: 0px 3px 5px #293238;-moz-box-shadow: 0px 3px 5px #293238;box-shadow: 0px 3px 5px #293238;}.b-title{background: #344047;}.b-title__link:hover, .header_links_fixer a:hover{background: #4d5961;}.page_fixer{background: #404a51;}.b-title__all{background: #344047;}.carousel-bg{background: #4d5961;}.b-title__all::before, .b-title__edit-link::before{background: #344047;}.carousel-prev .carousel-edges_shadow{left: 10px;}.list-link{background: #4d5961; border-bottom: 1px solid #344047;}.blog-item__author, .blog-item__time, .normal-light{color: #fff;}.list-link:hover, .me6d43f28:hover, .list-link__wrap_hover .list-link, .tabs__item:hover, .btn-main:hover, .btn-block:hover, .user__tools-link:hover, a.user__tools-link:hover, .user-tile__btn:hover, a.hover-item:hover, .tile__bottom-link:hover, .btn-link:hover, .stnd-link:hover, .s-city__item:hover, .s-chb:hover, a:hover .bordered, .pgn__link_hover:hover, .links-group_grey .list-link.strong_clicked, .form-checkbox_dropdown-menu:hover, .dropdown-menu .list-link:hover, .dropdown-menu .list-link__wrap_hover .list-link{background: #818f99;}.list-link-darkblue, .links-group .list-link_arrow, .links-group .list-link-darkblue, .links-group .stnd-link_profile{color: #fff !important;}.list-link-darkblue .cnt{color: #57a3ea;}.wbg{background: #4d5961 !important;}.block-item__descr{color: #fff;}.content-usr{background: #4d5961;-webkit-box-shadow: 0 3px 5px #293238;-moz-box-shadow: 0 3px 5px #293238;box-shadow: 0 3px 5px #293238;}.black{color: #fff;}.table__cell{border-right: 1px solid #344047;}.stnd-link, .stnd-block{color: #fff; background: #4d5961;}.user__tools{border-top: 1px solid #344047;}.list-link_online{-webkit-box-shadow: 0 3px 4px #293238;-moz-box-shadow: 0 3px 4px #293238;box-shadow: 0 3px 4px #293238;}.no-break::before{display: none;}.blog-item__subject, .blog-item__channel, .blog-item_short_shared .black{color: #fff;}.blog-item__title{color: #fff;}.content-bl{background: #4d5961;}#main_page a:visited, a, a.edit_link:visited, a.user_link:visited, .tools_block a, .sub_menu a, .inl-link, .link-stnd, .text-title, .nl a, .link-darkblue, .anketa__rate-link, .info-item__descr a, .info-item__descr-link, .drop-down-label.drop-down-label_spoiler, .t-strong_item, .blog-item__title, .list-link__name, .md77b4724, .f_descr_text, a.arrow_link span, .ufi a span, .response, .url-btn, .edit_widget_title, .ewb span{color: #57a3ea;}.list-link__text{color: #fff;}.mysite-nick{color: #fff;}.text-color, .links-group_important .list-link.clicked{color: #fff !important;}.link-return{color: #57a3ea !important;}.comm{background: #4d5961; border-bottom: 1px solid #344047;}.text, .text_anketa{color: #fff;}.spoiler_inject, .our_spo_inj{background: #404a51;}.dropdown-menu__wrap{background: #344047; -webkit-box-shadow: 0px 3px 5px #293238;-moz-box-shadow: 0px 3px 5px #293238;box-shadow: 0px 3px 5px #293238;}.links-group_grey .list-link, .links-group_grey .stnd-link{color: #fff !important;}.list .stnd-link{border-bottom: 1px solid #344047;}.tabs{background: #4d5961;}.tabs__link{color: #fff;}.list-link:active, .me6d43f28:active, .soc-links .list-link_soc.clicked, .soc-links .list-link_soc:active, .dropdown-menu .list-link:active, .user__tools-link:active, a.user__tools-link:active, a.user__tools-link.clicked, button.user__tools-link:active, .tabs__item:active, .btn-link:active, .user-tile__btn:active, .clicked, .tabs__item.clicked, .stnd-link.clicked, .header_links_fixer a:active, .clicked .stnd-link, .list-link.clicked, .dropdown-menu .list-link.clicked, label.user__tools-link.clicked, label.user__tools-link.clicked:hover, a.hover-item:active, .js-clicked .btn-single, .js-clicked .btn-single:hover, a.hover-item.clicked, .stnd-link:active, .stnd-link.attention_block:active, body .stnd-link_active, body .stnd-link_active:hover, .s-chb:active, .tile__bottom-link:active, .s-city__item:active, .c-letter__more-btn, .form-checkbox_dropdown-menu:active, .pgn__link_hover:active, .b-title__link:active, .s-city__item_city.clicked:active, .s-city__item_light.clicked:active, .s-city__item_country.clicked:active, .dropdown-menu .list-link.strong_clicked_active, .btn-main:active, .btn-block:active, a.item_clicked, a.item_clicked:hover, .js-dd_menu_link.strong_clicked, .user-tile__btn.js-clicked{background: #344047;-webkit-box-shadow: inset 0px 3px 5px #293238;-moz-box-shadow: inset 0px 3px 5px #293238;box-shadow: inset 0px 3px 5px #293238;}.tabs .clicked::before{display: none;}.content-widget{background: #404a51;}.cnt_tabs, .cnt_title, .sub-title .cnt_title{border: 1px solid #becedd; color: #57a3ea;}.drop-down-label:hover, .drop-down-label:hover .t, .drop-down-label.js-clicked:hover, .drop-down-label.js-clicked:hover .t{color: #61a961;}.static-bl{background: #4d5961; border-bottom: 1px solid #344047; color: #fff;}.bg-white, .dropdown-menu .list-link{background: #4d5961;}.sep-item{border-bottom: 2px solid #344047;}.table__cell_block{border-bottom: 1px solid #344047;}.btn-link{border: 1px solid #344047; background: #404a51;}.anketa__rate-cnt, .sub-title{color: #fff;}.sub-title .cnt, .list-link-darkblue:active .cnt, .stnd-link_profile:active .cnt{color: #57a3ea; border: 1px solid #becedd;}.btn-single{background: #4d5961; color: #fff;}.list-link-blue, .stnd-link_important, .links-group .stnd-link_arr.list-link-blue{color: #fff !important;}.block-item{background: #404a51;}.pgn{background: #4d5961;}.table_top_border{border-top: 1px solid #344047 !important;}.oh break-word{color: #fff;}.content, .list_spaced{background: #4d5961;}.content-item3{color: #fff;}.form-checkbox_full, .f-c_fll .form-checkbox{border-bottom: 1px solid #344047;}.user__tools-link{background: #4d5961;}.list-link-blue, .stnd-link_important, .links-group .stnd-link_arr.list-link-blue{color: #fff;}.stnd_padd{color: #fff;}.form-checkbox_checked{color: #fff !important;}.content-bl__sep, .content-bl__sep2, .text_anketa_sep{border-bottom: 1px solid #344047;}.action-bar{border-top: 1px solid #344047;}button.btn-main, input[type='submit'].btn-main, .btn-main:visited, .btn-main, .btn-block{background: #4d5961; color: #fff;}.light_bg{background: #404a51;}.toolbar td, .toolbar .hide td:last-child{border-right: 1px solid #344047;}.toolbar__wrap table{border: 1px solid #344047;}.toolbar .list-link{border-bottom: 1px solid #344047;}.text_distinguish{color: #57a3ea !important;}.green, .green_link, .link-green, a.green_link span, #e0437eeb07 a{color: #56e456;}.mail__button{background: #4d5961 !important;}.mail__button.disabled, .mail__button.disabled:focus, .mail__button.disabled:hover{background: #4d5961 !important; color: #fff !important; opacity: unset;}.mail__message_text.m_my_not_read{background: #344047;}.pgn__button:hover, .mail__button:hover{background: #4d5961 !important; color: #fff;}.pgn__button, .mail__button{color: #fff;}.color-black-light{color: #fff;}.content-bl__top_sep{border-top: 1px solid #344047;}.b-title__edit-link::after, .b-title__edit-link::before{background: #344047;}.ico_cats{background: url('https://crashmax-off.github.io/darkmode/ico_cats.png') no-repeat;}.ico_cats_news, .ico_cats_news_black{background-position: -80px -54px;}.ico_cats_game, .ico_cats_game_black{background-position: -36px -178px;}.ico_cats_humor, .ico_cats_humor_black{background-position: -134px 0;}.ico_cats_programm, .ico_cats_programm_black{background-position: 0 -144px;}.ico_cats_internet, .ico_cats_internet_black{background-position: -18px -90px;}.ico_cats_science, .ico_cats_science_black{background-position: -134px -72px;}.ico_cats_auto, .ico_cats_auto_black{background-position: -169px -96px;}.ico_cats_sport, .ico_cats_sport_black{background-position: -116px 0;}.ico_cats_business, .ico_cats_business_black{background-position: -144px -144px;}.ico_cats_hobby, .ico_cats_hobby_black{background-position: -126px -144px;}.ico_cats_video, .ico_cats_cinema, .ico_cats_cinema_black{background-position: -152px -36px;}.ico_cats_music, .ico_cats_music_black{background-position: -17px -126px;}.ico_cats_design, .ico_cats_design_black{background-position: -34px -126px;}.ico_cats_book, .ico_cats_book_black{background-position: -159px -160px;}.ico_cats_philosophy, .ico_cats_philosophy_black{background-position: -152px -90px;}.ico_cats_relationship, .ico_cats_relationship_black{background-position: 0 -108px;}.ico_cats_politic, .ico_cats_politic_black{background-position: -72px -144px;}.ico_cats_education, .ico_cats_education_black{background-position: -134px -36px;}.ico_cats_remont, .ico_cats_remont_black{background-position: -36px -72px;}.ico_cats_remont, .ico_cats_remont_black{background-position: -36px -72px;}.ico_cats_animal, .ico_cats_animal_black{background-position: -62px -18px;}.ico_cats_cook, .ico_cats_cook_black{background-position: -187px 0;}.ico_cats_moda, .ico_cats_moda_black{background-position: -98px 0;}.ico_cats_health, .ico_cats_health_black{background-position: -54px -108px;}.ico_cats_travel, .ico_cats_travel_black{background-position: -98px -54px;}.ico_cats_spaces, .ico_cats_spaces_black{background-position: -33px -160px;}.ico_cats_other, .ico_cats_other_black{background-position: -44px -18px;}.ico_cats_dating, .ico_cats_dating_black{background-position: -169px -32px;}.ico_cats_rpg, .ico_cats_rpg_black{background-position: -80px -18px;}.ico_cats_house, .ico_cats_house_black{background-position: -124px -126px;}.ico_cats_sex, .ico_cats_sex_black{background-position: -87px -160px;}.ico_cats_photo, .ico_cats_photo_black{background-position: -116px -54px;}.ico_cats_profession, .ico_cats_profession_black{background-position: -169px -141px;}.ico_cats_subculture, .ico_cats_subculture_black{background-position: -54px -54px;}.ico_cats_city, .ico_cats_city_black{background-position: -18px -36px;}.ico_cats_gadget, .ico_cats_gadget_black{background-position: -187px -88px;}.ico_chat{background: url('https://crashmax-off.github.io/darkmode/ico_chat.png') no-repeat;}.ico_journal, .ico_mail_underline, #mail_link span{background-position: -36px 0;}.ico_rules, .ico_mail_italic, .voteUpCnt span{background-position: 0 -18px;}.ico_settings_black_blue, .ico_mail_bold, .voteDownCnt span{background-position: -18px 0;}.ico_lock_open, #shared_link span.on{background-position: -54px -36px;}.ico_lock, #shared_link span{background-position: -54px -18px;}.ico_rings{background-position: 0 -54px;}";
                        sdm.setAttribute("sp-darkmode", "1");
                        parent.appendChild(sdm);
                        if (_SETTINGS.darkModeNav) {
                            var sdm = main.qs("#SP_PLUS_DARKMODE_NAV") || main.ce("style", {
                                id: "SP_PLUS_DARKMODE_NAV",
                                type: "text/css"
                            });
                            sdm.innerHTML = ".footer__link{border-color: #283238;}.footer__link_edit .footer__link, .footer__link_tool .footer__link, .footer__link_moder .footer__link{border-color: #283238;}.footer{background-color: #344047;}#left_nav{top: 1px;}#navi, .sidebar-logo, .unauth_header, .horiz-placeholder, .horiz-menu_bottom{color: #fff; background: #344047; border-bottom: 1px solid #344047; border-left: 1px solid #344047; border-right: 1px solid #344047;}";
                            sdm.setAttribute("sp-darkmode-nav", "1");
                            parent.appendChild(sdm);
                        }
                    } else if (!_SETTINGS.darkMode && sdm && sdm.hasAttribute("sp-darkmode") && !t) {
                        sdm.removeAttribute("sp-darkmode");
                        parent.removeChild(sdm);
                        var nav = document.getElementById('SP_PLUS_DARKMODE_NAV');
                        if (nav) {
                            parent.removeChild(nav)
                        }
                    }
                } catch (e) {
                    main.console.error('Ошибка (DARKMODE): ' + e.name + ":" + e.message + "\n" + e.stack);
                }
            },
            darkModeNav: function(t) {
                try {
                    var parent = document.getElementsByTagName('head').item(0);
                    var sdm = main.qs("#SP_PLUS_DARKMODE_NAV") || main.ce("style", {
                        id: "SP_PLUS_DARKMODE_NAV",
                        type: "text/css"
                    });
                    var dmNav = main.ce("div", {
                        id: "SP_DARKMODE_WRAP",
                        style: "padding-left: 7px; margin-left: 7px; border-left: 5px solid #92BEE2;"
                    });
                    var dm = main.ce("input", {
                        type: "checkbox",
                        id: "sp_darkMode_nav",
                        class: "sp_plus_checkbox_el",
                        checked: _SETTINGS.darkModeNav,
                        onclick: function(t) {
                            _SETTINGS.darkModeNav = t.target.checked;
                            var jsonSet = JSON.stringify(_SETTINGS);
                            main.setCookie("SP_PLUS_SET", jsonSet, null);
                            if (sdm && !sdm.hasAttribute("sp-darkmode-nav") && t) {
                                sdm.innerHTML = "#left_nav{top: 1px;}#navi, .sidebar-logo, .unauth_header, .horiz-placeholder, .horiz-menu_bottom{color: #fff; background: #344047; border-bottom: 1px solid #344047; border-left: 1px solid #344047; border-right: 1px solid #344047;}";
                                sdm.setAttribute("sp-darkmode-nav", "1");
                                parent.appendChild(sdm);
                            } else if (!_SETTINGS.darkModeNav && sdm && sdm.hasAttribute("sp-darkmode-nav")) {
                                sdm.removeAttribute("sp-darkmode-nav");
                                parent.removeChild(sdm);
                            }
                        }
                    });
                    var dmCheck = main.ce("label", {
                        attr: {
                            "for": "sp_darkMode_nav"
                        },
                        html: "- изменить цвет шапки",
                        style: "font-size: small;"
                    });
                    dmNav.appendChild(dm);
                    dmNav.appendChild(dmCheck);
                    main.insertAfter(dmNav, t.nextElementSibling);
                } catch (t) {
                    main.console.error('Ошибка (DARKMODE-NAV): ' + t.name + ":" + t.message + "\n" + t.stack);
                }
            },
            setStyle: function() {
                var rev = main.service(1) || "777";
                var parent = document.getElementsByTagName('head').item(0);
                var stl = main.qs("#SP_PLUS_INJSTYLE") || main.ce("style", {
                    id: "SP_PLUS_INJSTYLE",
                    type: "text/css"
                });
                stl.innerHTML = ".sp_plus_alert_y{border: 1px solid #cdd4e1; border-radius:5px; color:#7a90a0; display:block; font-family:sans-serif; font-weight:700; height:auto; padding:17px; position:fixed; text-align:center; margin-left:-156px; top:10%; left:50%; max-height:80%; width:275px; z-index:99999; background: #ffffff; -webkit-box-shadow: 0px 3px 5px rgba(93,109,157,0.3); -moz-box-shadow: 0px 3px 5px rgba(93,109,157,0.3); box-shadow: 0px 3px 5px rgba(93,109,157,0.3);}.null{display:none !important}.sp_plus_alertg,.sp_plus_small{background-color:#ddebf7}.sp_plus_small{margin:2px;color:#000;display:block;padding:3px;border-radius:2px}.sp_plus_small img{height:auto!important}.sp_plus_a{text-decoration:none!important;border-bottom:1px dashed}.sp_plus_alertr{background-color:#f9e1d9;color:#ff6837}.sp_plus_alertg,.sp_plus_alertr{background-clip:border-box;background-image:none;background-origin:padding-box;box-shadow:rgba(57,83,135,.3) 0 3px 5px 0;display:block;padding:10px;position:relative;font-size:13px}.sp_plus_ico_alert,.sp_plus_ico_del,.sp_plus_ico_info,.sp_plus_ico_okb,.sp_plus_ico_fav_off,.sp_plus_ico_fav_on{background-color:transparent;background-image:url(" + _PROTOCOL + "//spac.me/i/ico.png?r=" + rev + ");cursor:pointer;display:inline-block;height:16px;margin-bottom:2px;margin-right:4px;vertical-align:middle;text-align:center;width:16px}.sp_plus_ico_del{background-position:-180px -256px}.sp_plus_ico_okb{background-position:-116px -198px}.sp_plus_ico_alert{background-position:-108px -364px;cursor:default}.sp_plus_ico_info{background-position:-142px -52px;cursor:default}.sp_plus_ico_fav_off{background-position:-216px -256px}.sp_plus_ico_fav_on{background-position:-252px -256px}.sp_plus_button{cursor:pointer;background:#fff}.sp_plus_button:hover{background:#ecf5fd}.sp_plus_checkbox+label,.sp_plus_checkbox_el+label{position:relative;overflow:hidden;cursor:pointer;text-decoration:none!important}.sp_plus_checkbox+label{margin-left:5px;padding:0 4px 0 4px;vertical-align:top;width:16px;height:16px;display:inline-block}.sp_plus_checkbox_el+label{color:grey;padding:12px 5px 12px 25px}.sp_plus_checkbox+label:before,.sp_plus_checkbox_el+label:before{position:absolute;display:inline-block;content:'';background-position:-72px -220px;width:16px;height:16px;background-color:transparent;background-image:url(" + _PROTOCOL + "//spac.me/i/ico.png?r=" + rev + ")}.sp_plus_checkbox_el+label:before{left:3px;top:12px}.sp_plus_checkbox+label:before{top:8px;margin-top:-8px}.sp_plus_checkbox_el:checked+label{color:#323232}.sp_plus_checkbox:checked+label:before,.sp_plus_checkbox_el:checked+label:before{background-position:-252px -108px}.sp_plus_checkbox,.sp_plus_checkbox_el{position:absolute;left:-10000px}.sp_plus_line>span{background:#fff;padding:0 5px;position:relative;margin:0 10px;display:inline-block}.sp_plus_line:before{content:'';display:block;border-bottom:1px solid #cdd4e1;left:0;right:0;top:50%;position:absolute}.sp_plus_line{text-align: center;position: relative;font-weight: 700;}.sp_plus_text{color: #395387;}.sp_plus_liness{border-top: 1px solid #344047 !important;}.bstrwrap{border-bottom: unset !important; border-top: 1px solid #cdd4e1;}.ico_demo{background-position: -414px -130px;}input[type='color'] {opacity: 0; cursor: pointer;}.sp_input_color{border: 1px solid #cdd4e1; cursor: pointer;}.sp_btn_line{border-right: 1px solid rgb(205, 212, 225);}";
                if (_SETTINGS.bodystyle) {
                    if (_SETTINGS.bodystyle.url && _SETTINGS.bodystyle.urlchecked) stl.innerHTML += 'body,#main_wrap{background-image:url(' + _SETTINGS.bodystyle.url + ')}';
                    if (_SETTINGS.bodystyle.color && _SETTINGS.bodystyle.colorchecked) stl.innerHTML += 'body,#main_wrap{background-color:' + _SETTINGS.bodystyle.color + '}.sp_input_color{background-color:' + _SETTINGS.bodystyle.color + '!important}';
                }
                parent.appendChild(stl);
            },
            start: function() {
                if (_SETTINGS.blocked) main.bannedTools();
                if (_SETTINGS.comments) main.comments();
                if (_SETTINGS.blogsd) main.blogsDelete();
                if (_SETTINGS.readersd) main.readersDelete();
                if (_SETTINGS.online) main.online();
                if (_SETTINGS.ads) main.adsRemove();
                if (_SETTINGS.favorite) main.favorite();
                if (_SETTINGS.friendsOn) main.friendsOnline(1);
                if (_SETTINGS.gifts) main.gifts();
                if (_SETTINGS.rscroll) main.scrollMove(1);
                if (_SETTINGS.hrightbar) main.hiddenRightbar(1);
                if (_SETTINGS.coins) main.coins();
                if (_SETTINGS.karma) main.karmaAccept();
                if (_SETTINGS.rurl) main.redirectURL();
                if (_SETTINGS.fileTools) main.blogTools();
                if (_SETTINGS.darkMode) main.darkMode(1);
                if (_SETTINGS.myEvents) main.events();
                if (_SETTINGS.isOnline) main.isOnlineSupport(0);
                if (_SETTINGS.playerdn) {
                    main.playerDown();
                } else if (!_SETTINGS.playerdn && playerId >= 0) {
                    playerId = -1;
                    var downPlace = main.qs("#SP_MUSIC_DOWN");
                    if (downPlace) {
                        main.remove(downPlace);
                    }
                }
                main.settings();
            },
            init: function() {
                main.readSettings();
                main.start();
                setInterval(function() {
                    main.start();
                }, 200);
                main.setStyle();
            }
        };
        main.init();
    }
    spacesPlus();
})()
