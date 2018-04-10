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
            'blogsd': true,
            'readersd': true,
            'favorite': true,
            'blocked': false,
            'rscroll': false,
            'playerdn': true,
            'coins': true,
            'gifts': false,
            'online': true,
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
            'fileTools': "Дополнительные кнопки в фото/файлах/блогах",
            'friendsOn': "Панель друзей онлайн",
            'myEvents': "Свой звук уведомлений <a href='#' onclick='if(confirm(\"В настройках сайта должен быть выключен звук уведомлений. Файл должен быть в форматах *.ogg или *.mp3.\\nУказывайте прямую ссылку!\\n\\nХотите открыть каталог рингтонов?\")) {window.open(\"https://crashmax-off.github.io/sn/\", \"_blank\");} return false;' style='cursor: help;'><span class=\"ico\" style=\"background-position: -234px -144px;\"></span></a>",
            'online': "Точное время онлайн в анкетах",
            'favorite': "Возможность добавить пользователя в закладки",
            'playerdn': "Кнопка загрузки трека из плеера",
            'rscroll': "Скроллер страницы справа",
            'blocked': "Открытые разделы удаленных пользователей",
            'coins': "Собирать бонусные монеты",
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
                var cookieOnl = main.getCookie("SP_PLUS_ONLINE");
                try {
                    if (cookieSet) {
                        cookieSet = JSON.parse(cookieSet);
                        _SETTINGS = main.extend(_SETTINGS, cookieSet);
                    }
                    if (cookieOnl) {
                        cookieOnl = JSON.parse(cookieOnl);
                        ONLINE = main.extend(ONLINE, cookieOnl);
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
                                    if (prnt.id == "main") {
                                        var hp = main.qs("#header_path");
                                        if (hp) {
                                            hp.innerHTML = hp.innerHTML.replace("Настройки", '<span id="SP_PLUS_SETHEAD2">Spaces+</span>');
                                        }
                                        prnt.innerHTML = '<div class="widgets-group widgets-group_top js-container__block"><div class="b-title cl b-title_center b-title_first oh"><div class="b-title__item">Настройки Spaces+ <sup>' + rVer + '</sup><span class="js-cnt cnt cnt_title hide"></span></div></div><div class="content"><div class="list f-c_fll"> <div id="SP_PLUS_SETAREA" class="list_item lh_160"></div></div></div></div> <a id="SP_PLUS_SETBACK" href="http://spaces.ru/settings/?" class="link-return full_link"><span class="ico ico_arrow-back"></span><span class="m">Назад</span></a>';
                                    } else if (prnt.className == "main") {
                                        prnt.innerHTML = prnt.firstElementChild.outerHTML.replace("Настройки", 'Настройки <span style="color: #0000FF;">Spaces+</span>') + '<div class="start_page_padd light_blue_bg"><b id="SP_PLUS_SETHEAD">Настройки <span style="color: #0000FF;">Spaces+ ' + rVer + '</span></b></div><div id="SP_PLUS_SETAREA"></div><a id="SP_PLUS_SETBACK" href="http://spaces.ru/settings/?" class="link-return full_link"><span class="ico ico_arrow-back"></span><span class="m">Назад</span></a>';
                                    } else {
                                        main.alertm('<h4>Настройки <span>Spaces+ <sup>' + rVer + '</sup></span></h4><div id="SP_PLUS_SETAREA" style="text-align:left!important;line-height:1.5;display:block;height:100%;"></div>', 1, 1);
                                    }
                                    var setArea = main.qs("#SP_PLUS_SETAREA");
                                    if (setArea) {
                                        for (var i in _SETTINGS) {
                                            if (i == 'bodystyle') {
                                                var bstlWrap = main.ce("div", {
                                                    style: "padding-left: 7px; margin-left: 7px; border-left: 5px solid #92BEE2;"
                                                });
                                                var bstyle = main.ce("input", {
                                                    type: "text",
                                                    value: _SETTINGS.bodystyle.url,
                                                    class: "text-input",
                                                    style: "width: 40%;",
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
                                                var bstylec = main.ce("input", {
                                                    type: "color",
                                                    value: _SETTINGS.bodystyle.color,
                                                    placeholder: "Цвет фона"
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
                                                var lbl = main.ce("span", {
                                                    html: "Фон сайта"
                                                });
                                                var lblstyle = main.ce("span", {
                                                    html: " - URL"
                                                });
                                                var lblstylec = main.ce("span", {
                                                    html: " - Цвет"
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
                                                setArea.appendChild(main.ce("br", null));
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
                                            }
                                            if (typeof _SETSTRINGS[i] != "undefined") {
                                                setArea.appendChild(tmpCkb);
                                                setArea.appendChild(tmpLbl);
                                                setArea.appendChild(main.ce("br", null));
                                            }
                                        }
                                        if (_SETTINGS.friendsOn) {
                                            main.setFriend(main.qs("#sp_set_friendsOn"));
                                        }
                                        if (_SETTINGS.comments) {
                                            main.comments2m(main.qs("#sp_set_comments"));
                                        }
                                        if (_SETTINGS.myEvents) {
                                            main.evenstSupport(main.qs("#sp_set_myEvents"));
                                        }
                                        var spActLbl = main.ce("span", {
                                            html: "Встроенные возможности сайта"
                                        });
                                        setArea.appendChild(spActLbl);
                                        main.spacesAction(setArea);
                                        setArea.appendChild(main.ce("br", null));
                                        var nbqLink = main.ce("a", {
                                            href: _PROTOCOL + "//spaces.ru/newbequest/?r=newbequest/delete",
                                            style: "display: none",
                                            id: "sp_newbequest_togl",
                                            class: "sp_plus_a",
                                            html: "Скрыть квест новичка",
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
                                        setArea.appendChild(nbqLink);
                                        main.newbequest();
                                        setArea.appendChild(main.ce("br", null));
                                        var tgLink = main.ce("a", {
                                            href: (_PROTOCOL == "http:" ? "https:" : "http:") + "//spaces.ru/settings/?sp_plus_settings=1",
                                            class: "sp_plus_a",
                                            id: "sp_protocol_togl",
                                            html: "Переключиться на " + (_PROTOCOL == "http:" ? "HTTPS" : "HTTP") + "-протокол",
                                            onclick: function() {
                                                document.location.href = (_PROTOCOL == "http:" ? "https:" : "http:") + "//spaces.ru/settings/?sp_plus_settings=1";
                                                return false;
                                            }
                                        });
                                        setArea.appendChild(tgLink);
                                        setArea.appendChild(main.ce("br", null));
                                        var cookEdit = main.ce("a", {
                                            href: _PROTOCOL + "//spaces.ru/settings/?sp_plus_settings=1&sp_cookie_editor=1",
                                            class: "sp_plus_a",
                                            id: "sp_cookie_editor",
                                            html: "Редактор Cookies",
                                            onclick: function() {
                                                var head = main.qs("#SP_PLUS_SETHEAD");
                                                var head2 = main.qs("#SP_PLUS_SETHEAD2");
                                                var back = main.qs("#SP_PLUS_SETBACK");
                                                if (head) {
                                                    head.innerHTML = '<a href="http://spaces.ru/settings/?sp_plus_settings=1">Spaces+</a><span class="location-bar__sep ico"></span> Редактор cookies';
                                                }
                                                if (head2) {
                                                    head2.innerHTML = '<a href="http://spaces.ru/settings/?sp_plus_settings=1">Spaces+</a><span class="location-bar__sep ico"></span> Редактор cookies';
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
                                            class: "sp_plus_a",
                                            id: "sp_isonline_editor",
                                            html: "Проверка онлайна",
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
                                                        head2.innerHTML = '<a href="http://spaces.ru/settings/?sp_plus_settings=1">Spaces+</a><span class="location-bar__sep ico"></span> Проверка онлайна';
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
                                                                head.innerHTML = '<span style="color: #0000FF;">Spaces+</span>: проверка онлайна';
                                                            }
                                                            if (head2) {
                                                                head2.innerHTML = '<span style="color: #0000FF;">Spaces+</span>: проверка онлайна';
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
                                                    main.alertm("Вы <b style='color: #800;'>запретили</b> показывать уведомления для сайта Spaces.ru!<br/>Зайдите в настройки браузера и настройте доступ.", 1, null);
                                                }
                                                return false;
                                            }
                                        });
                                        setArea.appendChild(main.ce("br", null));
                                        setArea.appendChild(isOnl);
                                        var resetLink = main.ce("a", {
                                            href: "#",
                                            class: "sp_plus_a",
                                            id: "sp_plus_reset",
                                            style: "font-weight: bold; color: #903030",
                                            html: "Сброс настроек",
                                            onclick: function() {
                                                main.confirmm("Сбросить <b style='color: #F00;'>ВСЕ</b> настройки скрипта?", function() {
                                                    main.delCookie("SP_PLUS_SET");
                                                    document.location.reload();
                                                });
                                                return false;
                                            }
                                        });
                                        setArea.appendChild(main.ce("br", null));
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
                            var hideNotyf = main.ce("span", {
                                class: "ico pointer right",
                                style: "background-position:-378px -198px; margin: 10px;",
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
                                html: 'Вы можете добавить здесь аккаунты, о онлайне которых нужно оповещать, а также частоту проверки.<br /><span class="ico" style="background-position: -108px -364px;"></span><b style="color: #F00;">Внимание!</b> <b>Функция потребляет трафик в фоновом режиме!</b>'
                            });
                            var infoDiv = main.ce("div", {
                                class: "none"
                            });
                            infoDiv.appendChild(hideNotyf);
                            target.appendChild(infoDiv);
                            infoDiv.appendChild(smallInfo);
                            target.appendChild(main.ce("br", null));
                        }
                        var wraps = main.ce("div", {
                            class: "content-bl__sep",
                            style: "padding: 10px; margin: -10px;",
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
                            style: "padding: 10px; margin: -10px;",
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
                            html: '<label class="label" style="margin-top: 15px; margin-bottom: 2px; text-align: left;">Список пользователей:</label>',
                        }));
                        for (var i in ONLINE) {
                            var wrap = main.ce("div", null);
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
                    main.insertAfter(c2mWrap, e.nextElementSibling.nextElementSibling);
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
                        style: "color: #808080; font-size: small;"
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
                    main.insertAfter(frMaxWrap, e.nextElementSibling.nextElementSibling);
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
                                main.alertm("Вы <b style='color: #800;'>запретили</b> показывать уведомления для сайта Spaces.ru!<br/>Зайдите в настройки браузера и настройте доступ.", 1, null);
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
                        style: "width: 40%",
                        placeholder: "https://example.com/sound.ogg"
                    });
                    eventsUrl.onchange = eventsUrl.oninput = function(e) {
                        if ((main.isValidUrl(e.target.value) && /\.(ogg|mp3)$/i.test(e.target.value)) || main.trim(e.target.value) == "") {
                            e.target.style.backgroundColor = "";
                            _SETTINGS.events.url = main.trim(e.target.value);
                            var jsonSet = JSON.stringify(_SETTINGS);
                            main.setCookie("SP_PLUS_SET", jsonSet, null);
                        } else {
                            e.target.style.backgroundColor = "#FF7C7C";
                        }
                    };
                    var testPlay = main.ce("a", {
                        href: "#",
                        html: "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAA/klEQVQ4jd3UzypEURwH8M9cZsaGpZJoyBNIiieQrYWivADvYCwshIw3sLRQViSr2SqykL3l2PqzFIt71O10rzG3Wc2vzuZb53P+/ToMSjUK8kpZ7CUnT3CD9TLYd5TXMIYmPjDbKxaDLdxiCHe4iCe30I5GJ4P9gjUsYybsbAsr+MJ0FmxHk/MGbARoEgd4lN5lBztlwAqesIf5kI/jEmdlQDjCNeohX8Kp9E5Lgce4wkg/wATP2MVCP468iTdM4BAPYZFXbGfB/7ZNFYuYw2dYYFXaNlO6VENxY59IH2YY9zjvhuWh2apiFPt4V/x5/InGlUhfe60XLIsOSP0A9294Kp+7cD4AAAAASUVORK5CYII='>",
                        style: "margin-left: 7px; font-size: small",
                        title: "Прослушать",
                        onclick: function(e) {
                            main.sound(_SETTINGS.events.url + "?r=" + main.rand(1000, 9999), _SETTINGS.events.volume);
                            return false;
                        }
                    });
                    var volum = main.ce("span", {
                        style: "color: #808080; margin-left: 7px; font-size: small",
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
                    main.insertAfter(eventsWrap, e.nextElementSibling.nextElementSibling);
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
            cookieEditor: function(id) {
                window.scrollTo(0, 0);
                var cookie = main.allCookie();
                var target = main.qs(id);
                if (target) {
                    try {
                        target.innerHTML = "";
                        if (!_SETTINGS.hideNotyf.cookieEditor) {
                            var hideNotyf = main.ce("span", {
                                class: "ico pointer right",
                                style: "background-position:-378px -198px; margin: 10px;",
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
                                html: '<span class="ico" style="background-position: -108px -364px;"></span>Никому не сообщайте значения ваших cookies! Не делайте скриншот этой страницы, на котором будут видны эти значения! От этого зависит безопасность вашего аккаунта!'
                            });
                            var infoDiv = main.ce("div", {
                                class: "none"
                            });
                            infoDiv.appendChild(hideNotyf);
                            target.appendChild(infoDiv);
                            infoDiv.appendChild(smallInfo);
                            target.appendChild(main.ce("br", null));
                        }
                        var wrap1 = main.ce("div", {
                            html: '<label class="label" style="margin-top: -7px;margin-bottom: 2px; text-align: left;">Создание новой cookies:</label>',
                            class: "content-bl__sep",
                            style: "padding: 10px; margin: -10px; text-align: center;"
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
                            style: "max-width: 30%; margin: 3px; padding: 5px 3px 3px 7px; font-size: 14px;",
                            onclick: function(e) {
                                var prev = (e.target.nodeName == "SPAN" ? e.target.parentNode.previousElementSibling : e.target.previousElementSibling);
                                var name = main.htmlspecialchars(main.trim(prev.previousElementSibling.value));
                                var val = main.htmlspecialchars(main.trim(prev.value));
                                if ((name == "SP_KEY_IMPORT" || name == "SP_PLUS_SET") && _X77hgg) {
                                    main.alertm("Это служебное значение скрипта, не изменяйте его!", 1, null);
                                } else if (name != "") {
                                    main.confirmm((name == "SP_KEY_IMPORT" || name == "SP_PLUS_SET" ? "<b style='color: #FF0000;'>Внимание, <span style='color: #0000FF;'>\"" + name + "\"</span> является служебным значение скрипта, не стоит его изменять!</b><br/>" : "") + "Хотите добавить куку <span style='color: #0000FF;'>\"" + name + "\"</span> со значением <span style='color: #0000FF;'>\"" + val + "\"</span>?", function() {
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
                            html: '<label class="label" style="padding-top: 15px;margin-bottom: 2px;">Список существующий cookies:</label>',
                        }));
                        for (var i in cookie) {
                            if ((i == "SP_KEY_IMPORT" || i == "SP_PLUS_SET") && _X77hgg) {
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
                                    if ((name == "SP_KEY_IMPORT" || name == "SP_PLUS_SET") && _X77hgg) {
                                        main.alertm("Это служебное значение скрипта, не удаляйте его!", 1, null);
                                    } else if (name != "") {
                                        main.confirmm((name == "SP_KEY_IMPORT" || name == "SP_PLUS_SET" ? "<b style='color: #FF0000;'>Внимание, <span style='color: #0000FF;'>\"" + name + "\"</span> является служебным значение скрипта, не стоит его удалять!</b><br/>" : "") + "Хотите удалить куку <span style='color: #0000FF;'>\"" + name + "\"</span>?", function() {
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
                                    if ((name == "SP_KEY_IMPORT" || name == "SP_PLUS_SET") && _X77hgg) {
                                        main.alertm("Это служебное значение скрипта, не изменяйте его!", 1, null);
                                    } else if (name != "") {
                                        main.confirmm((name == "SP_KEY_IMPORT" || name == "SP_PLUS_SET" ? "<b style='color: #FF0000;'>Внимание, <span style='color: #0000FF;'>\"" + name + "\"</span> является служебным значение скрипта, не стоит его изменять!</b><br/>" : "") + "Хотите задать куке <span style='color: #0000FF;'>\"" + name + "\"</span> значение <span style='color: #0000FF;'>\"" + val + "\"</span>?", function() {
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
                    id: "wrap_spaces_option",
                    style: "padding-left: 7px; margin-left: 7px; border-left: 5px solid #92BEE2;"
                });
                var apidebug = main.ce("a", {
                    href: 'javascript:var Arr=[\'<div class="time-block" style="text-align: left;" id="wrap_spacesAction_AD"><a href="#" id="api_debug-button">API-Debugger</a><div id="api_debug-place"></div></div>\',"append","parent","#navi","debugger"];$(Arr[3])[Arr[2]]()[Arr[1]](Arr[0]),require(Arr[4]);void(0);',
                    class: "sp_plus_a",
                    id: "sp_spacesAction_AD",
                    html: "API-Debugger",
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
                    class: "sp_plus_a",
                    id: "sp_spacesAction_beta",
                    html: (beta ? "Выйти из песочницы" : "Beta-песочница"),
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
                    class: "sp_plus_a",
                    id: "sp_spacesFAT",
                    html: (fat ? "Убрать полосу загрузки" : "Добавить полосу загрузки"),
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
                    class: "sp_plus_a",
                    id: "sp_spacesGLB",
                    html: (glb ? "Убрать плеер из панели" : "Плеер в левой панели"),
                    style: "font-size: small;",
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
                wrap.appendChild(apidebug);
                wrap.appendChild(main.ce("br", null));
                wrap.appendChild(sndbeta);
                wrap.appendChild(main.ce("br", null));
                wrap.appendChild(fatWrap);
                wrap.appendChild(main.ce("br", null));
                wrap.appendChild(glbWrap);
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
                                main.console.info("[S+] Вырубили друзей из панели!");
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
                                                        html: '<span class="comm_ava m for_avatar"><img src="' + friendsList[i].avatar.previewURL + '" alt="" class="preview s21_20"></span><span class="online-status m"><img class="p14 online_status_ico" src="' + _PROTOCOL + '//spac.me/i/' + friendsList[i].online_status.on_img + '" alt="(ON)"></span><span class="block-item__title m break-word">' + friendsList[i].name + '</span>'
                                                    }));
                                                }
                                                frCount.parentNode.removeAttribute("sp-click-el");
                                                main.console.info("[S+] Обновили друзей!");
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
                                var chWrap = main.ce("div", {
                                    class: "stnd-link icon-link",
                                    style: "right: 50px;top: -42px; padding-left: 8px; padding-right: 8px;",
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
                                    class: "user__tools-link table__cell",
                                    style: "width: 50%; display: inline-block; border-right: 1px solid #cdd4e1; box-sizing: border-box;",
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
                                                    main.alertm("Удаляем читателей: <span style='color: #008000;'>" + delCount + "</span><br/><a href='#' onclick='return false;' id='SP_PLUS_CANCEL' class='sp_plus_a'>Отмена</a>", 0, null);
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
                            if (lastParent) lastParent = lastParent.parentNode;
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
                                    class: "user__tools-link table__cell",
                                    style: "width: 50%; display: inline-block; border-right: 1px solid #cdd4e1; box-sizing: border-box;",
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
                                                    main.alertm("Удаляем блоги: <span style='color: #008000;'>" + delCount + "</span><br/><a href='#' onclick='return false;' id='SP_PLUS_CANCEL' class='sp_plus_a'>Отмена</a>", 0, null);
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
                    style: "color: #800000"
                });
                Yes.onclick = function(e) {
                    callback();
                    document.body.removeChild(e.target.parentNode);
                    return false;
                };
                var alDiv = main.qs("#SP_PLUS_CONFIRM");
                if (alDiv) {
                    alDiv.innerHTML = html + '<br/><br/><a class="sp_plus_a" href="#" style="color: #008000;" onclick="document.body.removeChild(this.parentNode); return false;">Нет</a>&nbsp;&nbsp;';
                } else {
                    alDiv = main.ce("div", {
                        class: "sp_plus_alert_y",
                        id: "SP_PLUS_CONFIRM",
                        html: html + '<br/><br/><a class="sp_plus_a" href="#" style="color: #008000;" onclick="document.body.removeChild(this.parentNode); return false;">Нет</a>&nbsp;&nbsp;'
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
                    }, 3000);
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
                                    class: "user__tools-link table__cell",
                                    style: "width: 50%; display: inline-block; border-right: 1px solid rgb(205, 212, 225); box-sizing: border-box;",
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
                                                    main.alertm("Удаляем комментарии: <span style='color: #008000;'>" + delCount + "</span><br/><a href='#' onclick='return false;' id='SP_PLUS_CANCEL' class='sp_plus_a'>Отмена</a>", 0, null);
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
                                innerHTML: '<a href="' + trScr + '" onclick="window.open(\'' + trScr + '\'); return true;" class="tdn"></span><span class="ico ico_download2" title="Скачать"></span></a>'
                            });
                            main.insertAfter(dwnTd, tdIc[0]);
                        } else if (downPlace && playerId != trId) {
                            playerId = trId;
                            main.console.info("[S+] Обновили трек!");
                            downPlace.innerHTML = '<a href="' + trScr + '" onclick="window.open(\'' + trScr + '\'); return true;" class="tdn"></span><span class="ico ico_download2" title="Скачать"></span></a>';
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
                                main.remove(coinsLink);
                                main.console.info("[S+] Собрали монеты");
                            }
                        } catch (e) {
                            main.console.info("[S+] Собрали монеты???");
                        }
                    }, 2);
                }
            },
            setStyle: function() {
                var rev = main.service(1) || "777";
                var parent = document.getElementsByTagName('head').item(0);
                var stl = main.qs("#SP_PLUS_INJSTYLE") || main.ce("style", {
                    id: "SP_PLUS_INJSTYLE",
                    type: "text/css"
                });
                stl.innerHTML = ".sp_plus_alert_y{-webkit-box-shadow:#888 0 5px 90px 0;border:1px solid #e2b709;border-radius:5px;box-shadow:#888 0 5px 90px 0;color:#404040;display:block;font-family:sans-serif;font-weight:700;height:auto;padding:17px;position:fixed;text-align:center;margin-left:-156px;top:10%;left:50%;max-height:80%;width:275px;z-index:11000;background:#ffe57e;overflow:scroll;}.sp_plus_alertg,.sp_plus_small{background-color:#ddebf7}.sp_plus_small{margin:2px;color:#000;display:block;padding:3px;border-radius:2px}.sp_plus_small img{height:auto!important}.sp_plus_a{color:#006090;text-decoration:none!important;border-bottom:1px dashed}.sp_plus_alertr{background-color:#f9e1d9;color:#ff6837}.sp_plus_alertg,.sp_plus_alertr{background-clip:border-box;background-image:none;background-origin:padding-box;box-shadow:rgba(57,83,135,.3) 0 3px 5px 0;display:block;padding:10px;position:relative;font-size:13px}.sp_plus_ico_alert,.sp_plus_ico_del,.sp_plus_ico_info,.sp_plus_ico_okb,.sp_plus_ico_fav_off,.sp_plus_ico_fav_on{background-color:transparent;background-image:url(" + _PROTOCOL + "//spac.me/i/ico.png?r=" + rev + ");cursor:pointer;display:inline-block;height:16px;margin-bottom:2px;margin-right:4px;vertical-align:middle;text-align:center;width:16px}.sp_plus_ico_del{background-position:-180px -256px}.sp_plus_ico_okb{background-position:-116px -198px}.sp_plus_ico_alert{background-position:-108px -364px;cursor:default}.sp_plus_ico_info{background-position:-142px -52px;cursor:default}.sp_plus_ico_fav_off{background-position:-216px -256px}.sp_plus_ico_fav_on{background-position:-252px -256px}.sp_plus_button{cursor:pointer;background:#fff}.sp_plus_button:hover{background:#ecf5fd}.sp_plus_checkbox+label,.sp_plus_checkbox_el+label{position:relative;overflow:hidden;cursor:pointer;text-decoration:none!important}.sp_plus_checkbox+label{margin-left:5px;padding:0 4px 0 4px;vertical-align:top;width:16px;height:16px;display:inline-block}.sp_plus_checkbox_el+label{color:grey;padding:12px 5px 12px 25px}.sp_plus_checkbox+label:before,.sp_plus_checkbox_el+label:before{position:absolute;display:inline-block;content:'';background-position:-72px -220px;width:16px;height:16px;background-color:transparent;background-image:url(" + _PROTOCOL + "//spac.me/i/ico.png?r=" + rev + ")}.sp_plus_checkbox_el+label:before{left:3px;top:12px}.sp_plus_checkbox+label:before{top:8px;margin-top:-8px}.sp_plus_checkbox_el:checked+label{color:#323232}.sp_plus_checkbox:checked+label:before,.sp_plus_checkbox_el:checked+label:before{background-position:-252px -108px}.sp_plus_checkbox,.sp_plus_checkbox_el{position:absolute;left:-10000px}";
                if (_SETTINGS.bodystyle) {
                    if (_SETTINGS.bodystyle.url && _SETTINGS.bodystyle.urlchecked) stl.innerHTML += 'body,#main_wrap{background-image:url(' + _SETTINGS.bodystyle.url + ')}';
                    if (_SETTINGS.bodystyle.color && _SETTINGS.bodystyle.colorchecked) stl.innerHTML += 'body,#main_wrap{background-color:' + _SETTINGS.bodystyle.color + '}';
                }
                parent.appendChild(stl);
            },
            rever: function(s) {
                return s ? s.toString.split("").join(".") : s;
            },
            start: function() {
                if (_SETTINGS.blocked) main.bannedTools();
                if (_SETTINGS.comments) main.comments();
                if (_SETTINGS.blogsd) main.blogsDelete();
                if (_SETTINGS.readersd) main.readersDelete();
                if (_SETTINGS.online) main.online();
                if (_SETTINGS.favorite) main.favorite();
                if (_SETTINGS.friendsOn) main.friendsOnline(1);
                if (_SETTINGS.gifts) main.gifts();
                if (_SETTINGS.rscroll) main.scrollMove(1);
                if (_SETTINGS.coins) main.coins();
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
                }, 100);
                main.setStyle();
            }
        };
        main.init();
    }
    spacesPlus();
})();
