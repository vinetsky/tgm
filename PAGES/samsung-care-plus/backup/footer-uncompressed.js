window.addEventListener("load", () => {
    function s() {
        var s;
        $(function () {
            $(".scroll").length &&
                $(document).on("click scroll.init", ".scroll", function (s) {
                    s.preventDefault();
                    var a = $(this).attr("href") || $(this).data("href"),
                        e = $(a).offset().top;
                    $("html, body").animate({ scrollTop: e - 95 }, 1500);
                }),
                (function () {
                    let s = document.querySelectorAll(".where__item");
                    for (let a of s) {
                        a.querySelector(".where__item-check"), a.querySelector(".where__item-info");
                    }
                })(),
                (function () {
                    function s(s, e) {
                        !(function (s) {
                            t(s.sort((s, a) => (s.id > a.id ? 1 : -1)));
                        })(a.filter((a) => a.category === s).filter((s) => s.series === e));
                    }
                    function t(s) {
                        $(".program__icons_block").html(
                            '\n            <div class="swiperWrap">\n                <div class="iconsSwiper">\n                    <div class="program__icons swiper-wrapper"></div>\n                    <div class="program__icons-pagination"></div>\n                </div>\n            </div>\n          '
                        );
                        for (let a of s) {
                            let s = $(
                                `\n              <div\n                class="swiper-slide program__icon ${a.icon}"\n                data-icon="${a.icon}"\n                data-omni-type="microsite"\n                data-omni="ru:s-care-plus:program:${a.category}:${a.series}:${a.icon}"\n              >\n                <div class="program__icon-image">\n                  <img src="https://images.samsung.com/is/image/samsung/assets/ru/offer/samsung-care-plus/06062022/models/${a.icon}.png" class="program__icon-pic" alt="${a.name}" />\n                </div>\n                <p class="program__icon-title">${a.shortname}</p>\n              </div>\n            `
                            );
                            $(".program__icons").append(s);
                        }
                        new Swiper(".iconsSwiper", {
                            slidesPerView: "auto",
                            spaceBetween: 12,
                            centeredSlides: !1,
                            loop: !1,
                            breakpoints: { 320: { spaceBetween: 20 }, 476: { spaceBetween: 20 }, 769: { spaceBetween: 5 } },
                            pagination: { el: ".program__icons-pagination", clickable: !0 },
                        }),
                            "Galaxy A" === $(".program__filter.active").val("")[0].outerText
                                ? ($(".swiper-wrapper").addClass("swiper-wrapper_a"), sendOmniEvent26("ru:samsung-care-plus:phone-a"))
                                : "Galaxy S" === $(".program__filter.active").val("")[0].outerText
                                ? sendOmniEvent26("ru:samsung-care-plus:phone-s")
                                : "Galaxy M" === $(".program__filter.active").val("")[0].outerText
                                ? ($(".swiper-wrapper").addClass("swiper-wrapper_m"), sendOmniEvent26("ru:samsung-care-plus:phone-m"))
                                : "Galaxy Tab S" === $(".program__filter.active").val("")[0].outerText
                                ? sendOmniEvent26("ru:samsung-care-plus:tablet-s")
                                : "Galaxy Tab A" === $(".program__filter.active").val("")[0].outerText
                                ? sendOmniEvent26("ru:samsung-care-plus:tablet-a")
                                : ($(".swiper-wrapper").removeClass("swiper-wrapper_a"), $(".swiper-wrapper").removeClass("swiper-wrapper_m")),
                            $(".program__icons").on("click", ".program__icon", (s) => {
                                const t = $(s.currentTarget);
                                $(".program__icon").removeClass("active"),
                                    t.addClass("active"),
                                    $(".program__card").addClass("active"),
                                    $(".program__card-help").addClass("active"),
                                    (window.sendOmniEvent = function (s) {
                                        var a;
                                        if (s)
                                            try {
                                                return (
                                                    ((a = window.s || s_gi("sssamsung4ru,sssamsung4mstglobal")).linkTrackVars = "eVar33,events"), (a.linkTrackEvents = "event45"), (a.eVar33 = s), (a.events = "event45"), a.tl(this, "o", s)
                                                );
                                            } catch (s) {}
                                    });
                                let r = t.data("icon"),
                                    o = a.find((s) => s.icon === r),
                                    c = o.images,
                                    i = o.options;
                                    console.log(e);
                                0 === e &&
                                    (sendOmniEvent(`ru:samsung-care-plus:user-choose-${o.name}`),
                                    setTimeout(() => {
                                        e = 0;
                                    }),
                                    n && e++),
                                    $(".program__card-options").empty();
                                for (let s of i) {
                                    let a = document.createElement("div"),
                                        e = "";
                                    switch (s.name) {
                                        case "complex":
                                            e = "complex";
                                            break;
                                        case "screen":
                                            e = "screen-active";
                                            break;
                                        case "guarantee":
                                            e = "warranty";
                                    }
                                    (a.className = `swiper-slide program__card-tab ${s.name} ${s.nameSht}`),
                                        a.setAttribute("data-omni-type", "microsite"),
                                        a.setAttribute("data-omni", `ru:s-care-plus:program-card:${e}`),
                                        (a.innerHTML = `\n                    <p class="program__card-tab-text">Программа</p>\n                    <p class="program__card-tab-title">${s.text}</p>\n                    <a href="${s.link}" class="program__card-tab-link hidden" style="display:none">...</a>\n                    <a href="${s.buy}" class="program__card-tab-buy hidden" data-price="${s.price}" style="display:none">...</a>\n                    <div class="program__card-tab-info hidden" style="display: none;">${s.info}</div>\n                  `),
                                        $(".program__card-options").append(a);
                                }
                                if (
                                    ($(".program__card-options").children().eq(0).addClass("active"),
                                    $(".program__card").on("click", ".program__card-tab", (s) => {
                                        let a = $(s.currentTarget);
                                        a.siblings(".active").removeClass("active"),
                                            a.addClass("active"),
                                            a.hasClass("complex") &&
                                                0 === e &&
                                                (sendOmniEvent("ru:samsung-care-plus:click-on-tab-complex"),
                                                sendOmniEvent("ru:samsung-care-plus:user-program"),
                                                console.log("lololo"),
                                                setTimeout(() => {
                                                    e = 0;
                                                }),
                                                n && e++),
                                            a.hasClass("screen") &&
                                                0 === e &&
                                                (sendOmniEvent("ru:samsung-care-plus:click-on-tab-screen"),
                                                sendOmniEvent("ru:samsung-care-plus:user-program"),
                                                setTimeout(() => {
                                                    e = 0;
                                                }),
                                                n && e++),
                                            a.hasClass("guarantee") &&
                                                0 === e &&
                                                (sendOmniEvent("ru:samsung-care-plus:click-on-tab-guarantee"),
                                                sendOmniEvent("ru:samsung-care-plus:user-program"),
                                                console.log("lololo"),
                                                setTimeout(() => {
                                                    e = 0;
                                                }),
                                                n && e++),
                                            a.hasClass("guarantee")
                                                ? $(".program__card-photo").removeClass("active")
                                                : $(".program__card-photo").hasClass("active")
                                                ? (setTimeout(function () {
                                                      $(".program__card-photo").removeClass("active");
                                                  }, 100),
                                                  setTimeout(function () {
                                                      $(".program__card-photo").addClass("active");
                                                  }, 1e3))
                                                : $(".program__card-photo").addClass("active"),
                                            $(".program__card-info-title").html(a.find(".program__card-tab-title").html()),
                                            $(".program__card-info-link").attr("href", a.find(".program__card-tab-link").attr("href")),
                                            $(".program__card-info-btn").attr("href", a.find(".program__card-tab-buy").attr("href")),
                                            a.hasClass("points")
                                                ? $(".cost").html(a.find(".program__card-tab-buy").data("price"))
                                                : $(".cost").text(
                                                      (function (s) {
                                                          return s.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ") + " ₽";
                                                      })(a.find(".program__card-tab-buy").data("price"))
                                                  ),
                                            $(".program__card-info-terms").html(a.find(".program__card-tab-info").html());
                                    }),
                                    $("._01").hasClass("active"))
                                ) {
                                    $(".program__icons").on("click", ".program__icon", (s) => {
                                        $(s.currentTarget).closest(".program__block").find(".program__card-options").find(".program__card-tab")[1].click();
                                    }),
                                        (function () {
                                            function s() {
                                                window.matchMedia("(min-width: 768px)").matches && null !== e
                                                    ? (e.destroy(), (e = null))
                                                    : window.matchMedia("(max-width: 767px)").matches &&
                                                      null === e &&
                                                      ((e = new Swiper(".program__card-action-swiper", a)),
                                                      setTimeout(function () {
                                                          $(".program__card-tab").eq(0).width();
                                                      }, 1));
                                            }
                                            let a = { slidesPerView: 1.45, spaceBetween: 10, centeredSlides: !1, loop: !1 },
                                                e = null;
                                            s(), window.addEventListener("resize", s), window.addEventListener("orientationchange", s);
                                        })();
                                } else if ($("._04").hasClass("active"))
                                    $(".program__icons").on("click", ".program__icon", (s) => {
                                        const a = $(s.currentTarget);
                                        if (a.hasClass("icon_watch4_u1")) {
                                            a.closest(".program__block").find(".program__card-options").find(".program__card-tab")[0].click();
                                        }
                                        if (a.hasClass("icon_watch4classic_u1")) {
                                            a.closest(".program__block").find(".program__card-options").find(".program__card-tab")[0].click();
                                        }
                                        if (a.hasClass("icon_watch4classic-42")) {
                                            a.closest(".program__block").find(".program__card-options").find(".program__card-tab")[0].click();
                                        }
                                        if (a.hasClass("icon_watch4-44")) {
                                            a.closest(".program__block").find(".program__card-options").find(".program__card-tab")[0].click();
                                        }
                                        if (a.hasClass("icon_watch5pro")) {
                                            a.closest(".program__block").find(".program__card-options").find(".program__card-tab")[0].click();
                                        }
                                        if (a.hasClass("icon_watch5")) {
                                            a.closest(".program__block").find(".program__card-options").find(".program__card-tab")[0].click();
                                        }
                                        if (a.hasClass("icon_watch5_44")) {
                                            a.closest(".program__block").find(".program__card-options").find(".program__card-tab")[0].click();
                                        }
                                    });
                                else {
                                    !(function () {
                                        function s() {
                                            window.matchMedia("(min-width: 768px)").matches && null !== e
                                                ? (e.destroy(), (e = null))
                                                : window.matchMedia("(max-width: 767px)").matches &&
                                                  null === e &&
                                                  ((e = new Swiper(".program__card-action-swiper", a)),
                                                  setTimeout(function () {
                                                      $(".program__card-options.active").css({ transform: "translate3d(0px, 0px, 0px)", "pointer-events": "none" });
                                                  }, 1));
                                        }
                                        let a = { slidesPerView: 1, onlyExternal: !1, allowTouchMove: !1, centeredSlides: !0, loop: !1 },
                                            e = null;
                                        s(), window.addEventListener("resize", s), window.addEventListener("orientationchange", s);
                                    })();
                                }
                                for (item in ($(".program__card-photo").empty(), c)) {
                                    let s = `${c[item]}`,
                                        a = s.split("_")[1],
                                        e = s.split("_")[0],
                                        n = "";
                                    switch (o.category) {
                                        case "phone":
                                        case "flip":
                                            n = "смартфона";
                                            break;
                                        case "tablet":
                                            n = "планшета";
                                            break;
                                        default:
                                            n = "умных часов";
                                    }
                                    const t = $('<div class="program__card-photo-block"></div>');
                                    "back" === e
                                        ? t.html(
                                              `\n                                <div class="program__card-photo-${item} " >\n                                    <img alt="Замена задней панели для ${n} Galaxy ${a}" src="https://images.samsung.com/is/image/samsung/assets/ru/offer/samsung-care-plus/06062022/models/${c[item]}.png" class="" />\n                                </div>`
                                          )
                                        : "battery" === e
                                        ? t.html(
                                              `\n                                <div class="program__card-photo-${item} " >\n                                    <img alt="Замена аккумулятора для ${n} Galaxy ${a}" src="https://images.samsung.com/is/image/samsung/assets/ru/offer/samsung-care-plus/06062022/models/${c[item]}.png" class="" />\n                                </div>`
                                          )
                                        : "body" === e
                                        ? t.html(
                                              `\n                                <div class="program__card-photo-${item} " >\n                                    <img alt="Дополнительный год гарантии для ${n} Galaxy ${a}" src="https://images.samsung.com/is/image/samsung/assets/ru/offer/samsung-care-plus/06062022/models/${c[item]}.png" class="" />\n                                </div>`
                                          )
                                        : "screen" === e
                                        ? t.html(
                                              `\n                                <div class="program__card-photo-${item} " >\n                                    <img alt="Замена экрана для ${n} Galaxy ${a}" src="https://images.samsung.com/is/image/samsung/assets/ru/offer/samsung-care-plus/06062022/models/${c[item]}.png" class="" />\n                                </div>`
                                          )
                                        : t.html(
                                              `\n                                <div class="program__card-photo-${item} " >\n                                    <img alt="Модель Galaxy ${a}" src="https://images.samsung.com/is/image/samsung/assets/ru/offer/samsung-care-plus/06062022/models/${c[item]}.png" class="" />\n                                </div>`
                                          ),
                                        $(".program__card.active").attr("data-card", `${r}`),
                                        $(".program__card-photo").attr("data-item", `${r}`),
                                        $(".program__card-photo").append(t);
                                }
                                $(".program__card-photo-block img").on("load", function () {
                                    $(".program__card-photo-block").removeClass("preload"), $(".program__card-photo-block").addClass("preload");
                                });
                            }),
                            (function () {
                                let s = 0;
                                $(".program__icon").click(function () {
                                    if ((s++, s >= 2)) {
                                        const s = $(".program__card").offset().top,
                                            a = $(".main__nav").outerHeight() + 60;
                                        $("html, body").animate({ scrollTop: s - a }, 1e3);
                                    }
                                });
                            })();
                    }
                    $(".program__tab").click(function () {
                        let a = document.querySelector(".program__block-top");
                        document.querySelector(".program__icons"),
                            $(".program__tab").removeClass("active"),
                            $(this).addClass("active"),
                            $(".program__block").addClass("active"),
                            $(".program__card-photo").removeClass("active"),
                            "phone" === $(this).data("tab")
                                ? ((a.innerHTML =
                                      '\n                        <div\n                            class="program__filter _phone-z active"\n                            data-filter="z"\n                            data-omni-type="microsite"\n                            data-omni="ru:s-care-plus:program:phone:z"\n                        >Galaxy Z</div>\n                        <div\n                            class="program__filter _phone-s"\n                            data-filter="s"\n                            data-omni-type="microsite"\n                            data-omni="ru:s-care-plus:program:phone:s"\n                        >Galaxy S</div>\n                        <div\n                            class="program__filter _phone-a"\n                            data-filter="a"\n                            data-omni-type="microsite"\n                            data-omni="ru:s-care-plus:program:phone:a"\n                        >Galaxy A</div>\n                    '),
                                  $(".program__filter").click(function () {
                                      $(".program__filter").removeClass("active"),
                                          $(this).addClass("active"),
                                          s("phone", $(this).data("filter")),
                                          $(".icon_zflip5").click(),
                                          $(this).closest(".program__block.active").find(".program__card-options.active").find(".program__card-tab")[0].click();
                                  }),
                                  $("._phone-s").click(function () {
                                      $(".iconss23ultra-new-style").click(), $(this).closest(".program__block.active").find(".program__card-options.active").find(".program__card-tab")[1].click();
                                  }),
                                  $("._phone-a").click(function () {
                                      $(".icon_a73-new-style").click(), $(this).closest(".program__block.active").find(".program__card-options.active").find(".program__card-tab")[1].click();
                                  }),
                                  $("._phone-m").click(function () {
                                      $(".icon_m53-new-style").click(), $(this).closest(".program__block.active").find(".program__card-options.active").find(".program__card-tab")[1].click();
                                  }),
                                  $(".program__filter.active").click())
                                : "tablet" === $(this).data("tab")
                                ? ((a.innerHTML =
                                      '\n                        <div\n                            class="program__filter _tablet-s active"\n                            data-filter="s"\n                            data-omni-type="microsite"\n                            data-omni="ru:s-care-plus:program:tablet:s"\n                        >Galaxy Tab S</div>\n                        <div\n                            class="program__filter _tablet-a"\n                            data-filter="a"\n                            data-omni-type="microsite"\n                            data-omni="ru:s-care-plus:program:tablet:a"\n                        >Galaxy Tab A</div>\n                    '),
                                  $(".program__filter").click(function () {
                                      $(".program__filter").removeClass("active"),
                                          $(this).addClass("active"),
                                          s("tablet", $(this).data("filter")),
                                          $(".icon_s9_ultra").click(),
                                          $(".program__card").find(".program__card-tab")[0].click(),
                                          $("._tablet-a").click(function () {
                                              $(".icon_a8").click();
                                          });
                                  }),
                                  $(".program__filter.active").click())
                                : "flip" === $(this).data("tab")
                                ? ((a.innerHTML = '\n                            <div class="program__filter active" data-filter="z">Galaxy Z</div>\n                        '),
                                  $(".program__filter").click(function () {
                                      $(".program__filter").removeClass("active"), $(this).addClass("active"), s("flip", $(this).data("filter")), $(".icon_zflip5").click(), $(".program__card").find(".program__card-tab")[0].click();
                                  }),
                                  $(".program__filter.active").click())
                                : ((a.innerHTML =
                                      '\n                        <div\n                            class="program__filter active"\n                            data-filter="w"\n                            data-omni-type="microsite"\n                            data-omni="ru:s-care-plus:program:device:w"\n                        >Galaxy Watch</div>\n                    '),
                                  $(".program__filter").click(function () {
                                      $(".program__filter").removeClass("active"), $(this).addClass("active"), s("watch", $(this).data("filter")), $(".icon_watch4-44").click(), $(".program__card").find(".program__card-tab")[0].click();
                                  }),
                                  $(".program__filter.active").click());
                    });
                })(),
                (function () {
                    let s = $("#program"),
                        a = $("#status"),
                        e = $("#promo");
                    $(window).scroll(function () {
                        let n = $(window).scrollTop() + $(window).height(),
                            t = s.offset().top,
                            r = a.offset().top,
                            o = e.offset().top;
                        document.querySelector(".sticky-navigation-text__wrap"), document.querySelector(".main__nav");
                        n > o && ($(".main__nav-link").removeClass("active"), $("#care__nav-01").addClass("active")),
                            n > t && ($(".main__nav-link").removeClass("active"), $("#care__nav-02").addClass("active")),
                            n > r && ($(".main__nav-link").removeClass("active"), $("#care__nav-03").addClass("active"));
                    });
                })(),
                (function () {
                    function s() {
                        var s = !1;
                        $(".popup__program-form").find(".error").removeClass("active"), (s = !(grecaptcha.getResponse() < 1));
                        return (
                            (new Date().getTime() <
                                new Date(
                                    $("#buydate")
                                        .val()
                                        .replace(/(\d{2}).(\d{2}).(\d{4})/, "$2/$1/$3")
                                ).getTime() ||
                                $("#buydate").val().length < 1) &&
                                ($("#errorBuydate").addClass("active"), (s = !1)),
                            $("#sertNumber").val() || ($("#errorSert").addClass("active"), (s = !1)),
                            ($("#inputEmail").val() < 1 || !/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test($("#inputEmail").val())) && ($("#errorEmail").addClass("active"), (s = !1)),
                            $("#programIMEI").val() < 1 && ($("#errorIMEI").addClass("active"), (s = !1)),
                            s
                        );
                    }
                    $("#status-btn").click(function (s) {
                        if ((s.preventDefault(), $("#status-btn").text("Проверить"), $(".status__item-form").find(".errorMessage").remove(), $("#imei-check").val() < 1))
                            $(".errorPlace").html('<span class="errorMessage">' + $("#imei-check").data("error") + "</span>");
                        else {
                            var a = { Number: $("#imei-check").val() };
                            $.ajax({
                                url: "https://ssl.samsung.ru/localCMS/Services/GetSmartCareStatus",
                                type: "POST",
                                dataType: "json",
                                traditional: !0,
                                data: a,
                                success: function (s) {
                                    "ERROR" === s.Result ||
                                    ("OK" === s.Result &&
                                        "К сожалению, регистрация с указанными Вами данными не найдена или в предоставленных данных содержится ошибка. Для получения дополнительной информации обратитесь в контактный центр по тел. 8-800-555-55-88 (Россия), 0-800-555-555 (Грузия)." ===
                                            s.Message)
                                        ? ($(".errorPlace").html('<span class="errorMessage">' + s.Message + "</span>"), $("#status-btn").text("Проверить").css({ "background-color": "#000", color: "#fff", border: "2px solid #000" }))
                                        : $("#status-btn").text("Активна").css({ "background-color": "#fff", color: "#0da321", border: "2px solid #0da321" });
                                },
                                error: function (s) {
                                    console.log(s);
                                },
                            });
                        }
                    }),
                        $("#activation-btn").click(function (s) {
                            if (
                                (s.preventDefault(),
                                $("#activation-btn").text("Проверить").css({ "background-color": "#fff", color: "#4eb1dd", border: "2px solid #fff" }),
                                $(".popup__activation").find(".errorMessage").remove(),
                                $("#activation-input").val() < 1)
                            )
                                $(".errorPlace").html('<span class="errorMessage">' + $("#activation-input").data("error") + "</span>");
                            else {
                                var a = { Number: $("#activation-input").val() };
                                $.ajax({
                                    url: "https://ssl.samsung.ru/localCMS/Services/GetSmartCareStatus",
                                    type: "POST",
                                    dataType: "json",
                                    traditional: !0,
                                    data: a,
                                    success: function (s) {
                                        console.log(s.Result),
                                            "ERROR" === s.Result
                                                ? ($(".errorPlace").html('<span class="errorMessage">' + s.Message + "</span>"),
                                                  $("#activation-btn").text("Не активна").css({ "background-color": "#fff", color: "#ff6347", border: "2px solid #ff6347" }))
                                                : "OK" === s.Result &&
                                                  "К сожалению, регистрация с указанными Вами данными не найдена или в предоставленных данных содержится ошибка. Для получения дополнительной информации обратитесь в контактный центр по тел. 8-800-555-55-88 (Россия), 0-800-555-555 (Грузия)." ===
                                                      s.Message
                                                ? ($("#status-btn").text("Проверить"), $(".errorPlace").html('<span class="errorMessage">' + s.Message + "</span>"))
                                                : $("#activation-btn").text("Активна").css({ "background-color": "#fff", color: "rgb(13, 163, 33)", border: "2px solid rgb(13, 163, 33)" });
                                    },
                                    error: function (s) {
                                        console.log(s);
                                    },
                                });
                            }
                        }),
                        $("#program-btn").click(function (a) {
                            if ((a.preventDefault(), !s())) return s(), !1;
                            {
                                $("#program-btn").removeAttr("disabled");
                                const s = "https://ssl.samsung.ru/localCMS/Warranty/Warranty_Insert";
                                let a = {
                                    extWarrantyCertificate: $("#sertNumber").val(),
                                    serialImei: $("#programIMEI").val(),
                                    email: $("#inputEmail").val(),
                                    clientSaleDate: $("#buydate").val(),
                                    SubscribeEmail: !$("#subscribe").is("[disabled]"),
                                };
                                $.ajax({
                                    url: s,
                                    type: "POST",
                                    dataType: "json",
                                    traditional: !0,
                                    data: a,
                                    success: function (s) {
                                        "ERROR" === s.Result ||
                                        ("OK" === s.Result &&
                                            "К сожалению, регистрация с указанными Вами данными не найдена или в предоставленных данных содержится ошибка. Для получения дополнительной информации обратитесь в контактный центр по тел. 8-800-555-55-88 (Россия), 0-800-555-555 (Грузия)." ===
                                                s.Message)
                                            ? ($(".serverMsg").html('<span class="errorMessage">' + s.Message + "</span>"),
                                              $(".popup__program-form")[0].reset(),
                                              $("#program-btn").closest(".s-modal__content").addClass("hidden"),
                                              $("#program-btn").closest(".s-modal__block").find(".s-modal__content-result-error").removeClass("hidden"),
                                              $("#program-btn").closest(".s-modal__block").find(".popup__program-text-error").text(s.Message))
                                            : ($("#program-btn").removeAttr("disabled").text("Активна").css({ "background-color": "#fff", color: "#000", border: "2px solid #000" }),
                                              $("#program-btn").closest(".s-modal__block").find(".s-modal__content-result-error").addClass("hidden"),
                                              $("#program-btn").closest(".s-modal__content").addClass("hidden"),
                                              $("#program-btn").closest(".s-modal__block").find(".s-modal__content-result-positive").removeClass("hidden"));
                                    },
                                    error: function (s) {},
                                });
                            }
                        }),
                        (function () {
                            const s = document.querySelector(".js-input-program-number"),
                                a = document.querySelector(".js-program-number-error-message");
                            function e(s) {
                                s
                                    ? ((a.innerText = "Введен некорректный символ"), a.classList.add("active"))
                                    : (a.classList.remove("active"), (a.innerText = "Введите номер программы, который находится под защитным слоем или в чеке. Первые три символа — буквы"));
                            }
                            s.addEventListener("click", (s) => {
                                0 === s.target.value.length && (s.target.value = "RU");
                            }),
                                s.addEventListener("input", (s) => {
                                    const a = s.target,
                                        n = /^[a-zA-Z0-9]+$/gm,
                                        t = /^[a-zA-Z1-9]+$/gm,
                                        r = /^[a-zA-Z]+$/gm,
                                        o = /^[0-9]+$/gm;
                                    (a.value = a.value.toUpperCase()),
                                        a.value.length < 2 && (a.value = "RU"),
                                        n.test(a.value)
                                            ? (e(!1),
                                              a.value.length > 2 &&
                                                  (t.test(a.value[2])
                                                      ? (e(!1),
                                                        a.value.length > 3 &&
                                                            (o.test(a.value[2])
                                                                ? ((o.lastIndex = 0),
                                                                  a.value.length < 10
                                                                      ? o.test(a.value[a.value.length - 1])
                                                                          ? e(!1)
                                                                          : ((o.lastIndex = 0), (a.value = a.value.slice(0, a.value.length - 1)), e(!0))
                                                                      : r.test(a.value[a.value.length - 1])
                                                                      ? e(!1)
                                                                      : ((r.lastIndex = 0), (a.value = a.value.slice(0, a.value.length - 1)), e(!0)),
                                                                  a.value.length > 10 && (a.value = a.value.slice(0, a.value.length - 1)))
                                                                : r.test(a.value[2]) &&
                                                                  ((r.lastIndex = 0),
                                                                  (t.lastIndex = 0),
                                                                  a.value[3] && !t.test(a.value[3]) ? ((t.lastIndex = 0), (a.value = a.value.slice(0, a.value.length - 1)), e(!0)) : e(!1),
                                                                  a.value.length > 4 &&
                                                                      (a.value.length < 11
                                                                          ? o.test(a.value[a.value.length - 1])
                                                                              ? e(!1)
                                                                              : ((o.lastIndex = 0), (a.value = a.value.slice(0, a.value.length - 1)), e(!0))
                                                                          : r.test(a.value[a.value.length - 1])
                                                                          ? e(!1)
                                                                          : ((r.lastIndex = 0), (a.value = a.value.slice(0, a.value.length - 1)), e(!0))),
                                                                  a.value.length > 11 && (a.value = a.value.slice(0, a.value.length - 1)))))
                                                      : ((t.lastIndex = 0), (a.value = a.value.slice(0, a.value.length - 1)), e(!0))))
                                            : ((n.lastIndex = 0), (a.value = a.value.slice(0, a.value.length - 1)), e(!0));
                                });
                        })(),
                        (function () {
                            const s = document.querySelector(".js-input-imei-number"),
                                a = document.querySelector(".js-imei-number-error-message");
                            s.addEventListener("input", (s) => {
                                const e = s.target,
                                    n = /^[0-9]+$/gm;
                                function t(s) {
                                    s ? ((a.innerText = "Введен некорректный номер"), a.classList.add("active")) : (a.classList.remove("active"), (a.innerText = "Введите IMEI/Серийный номер"));
                                }
                                n.test(e.value) ? (t(!1), e.value.length > 15 ? ((e.value = e.value.slice(0, e.value.length - 1)), t(!0)) : t(!1)) : ((n.lastIndex = 0), (e.value = e.value.slice(0, e.value.length - 1)), t(!0));
                            });
                        })(),
                        (function () {
                            const s = document.querySelector(".js-input-email"),
                                a = document.querySelector(".js-input-email-error-message");
                            s.addEventListener("blur", (s) => {
                                const e = s.target,
                                    n = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gm;
                                n.test(e.value) ? (a.classList.remove("active"), (a.innerText = "Введите ваш e-mail")) : ((n.lastIndex = 0), (a.innerText = "Введен корректный email"), a.classList.add("active"));
                            }),
                                s.addEventListener("focus", () => {
                                    a.classList.remove("active"), (a.innerText = "Введите ваш e-mail");
                                });
                        })(),
                        (async function () {
                            const s = document.querySelector(".js-input-date"),
                                a = document.querySelector(".js-input-date-error-message"),
                                e = Intl.DateTimeFormat().resolvedOptions().timeZone,
                                n = await fetch(`https://worldtimeapi.org/api/timezone/${e}`)
                                    .then((s) => s.json())
                                    .then((s) => s.datetime),
                                t = new Date(n);
                            function r(s, e = "Введите верную дату покупки устройства") {
                                s ? ((a.innerText = e), a.classList.add("active")) : (a.classList.remove("active"), (a.innerText = "Введите верную дату покупки устройства"));
                            }
                            s.addEventListener("blur", (s) => {
                                const a = s.target;
                                if (a.value.length) {
                                    let s = a.value.split(".");
                                    [s[0], s[1]] = [s[1], s[0]];
                                    const e = new Date(s.join("."));
                                    e instanceof Date && !isNaN(e)
                                        ? t - e > 31536e6
                                            ? r(!0, `Дата должна быть после ${t.getDate() < 10 ? "0" + t.getDate() : t.getDate()}.${t.getMonth() + 1 < 10 ? "0" + (t.getMonth() + 1) : t.getMonth() + 1}.${t.getFullYear() - 1}`)
                                            : e > t && r(!0)
                                        : r(!0);
                                } else r(!0);
                            }),
                                s.addEventListener("focus", () => r(!1));
                        })(),
                        (function () {
                            const s = document.querySelector(".js-activation-form"),
                                a = s.querySelector(".js-activation-form-popup-notification");
                            s.addEventListener("click", (s) => {
                                const e = s.target;
                                e.classList.contains("js-activation-form-icon")
                                    ? (s.preventDefault(), a.classList.toggle("hidden"))
                                    : e.classList.contains("js-activation-form-popup-notification")
                                    ? s.preventDefault()
                                    : a.classList.add("hidden");
                            });
                        })();
                })(),
                (function () {
                    let s = $("#what"),
                        a = $("#promo"),
                        e = $("#advantage"),
                        n = $("#simple"),
                        t = $("#where"),
                        r = $("#status"),
                        o = $("#call");
                    $(window).scroll(function () {
                        $(window).scrollTop() > a.offset().top - a.height() / 2 - 300 &&
                            a.find(".animBlock").each(function (s) {
                                $(this).css({ "transition-delay": "." + s + "s" }), $(this).addClass("_show");
                            }),
                            $(window).scrollTop() > s.offset().top - s.height() / 2 - 300 &&
                                s.find(".animBlock").each(function (s) {
                                    $(this).css({ "transition-delay": "." + s + "s" }), $(this).addClass("_show");
                                }),
                            $(window).scrollTop() > e.offset().top - e.height() / 2 - 300 &&
                                e.find(".animBlock").each(function (s) {
                                    $(this).css({ "transition-delay": "." + s + "s" }), $(this).addClass("_show");
                                }),
                            $(window).scrollTop() > n.offset().top - n.height() / 2 - 300 &&
                                n.find(".animationJs").each(function (s) {
                                    $(this).css({ "transition-delay": "." + s + "s" }), $(this).addClass("_show");
                                }),
                            $(window).scrollTop() > t.offset().top - t.height() / 2 - 300 &&
                                t.find(".animBlock").each(function (s) {
                                    $(this).css({ "transition-delay": "." + s + "s" }), $(this).addClass("_show");
                                }),
                            $(window).scrollTop() > r.offset().top - r.height() / 2 - 300 &&
                                r.find(".animBlock").each(function (s) {
                                    $(this).css({ "transition-delay": "." + s + "s" }), $(this).addClass("_show");
                                }),
                            $(window).scrollTop() > o.offset().top - o.height() / 2 - 300 &&
                                o.find(".animBlock").each(function (s) {
                                    $(this).css({ "transition-delay": "." + s + "s" }), $(this).addClass("_show");
                                });
                    });
                })(),
                (window.sendOmniEvent = function (s) {
                    var a;
                    if (s)
                        try {
                            return ((a = window.s || s_gi("sssamsung4ru,sssamsung4mstglobal")).linkTrackVars = "eVar33,events"), (a.linkTrackEvents = "event45"), (a.eVar33 = s), (a.events = "event45"), a.tl(this, "o", s);
                        } catch (s) {}
                }),
                (window.sendOmniEvent26 = function (s) {
                    var a;
                    if (s)
                        try {
                            return ((a = window.s || s_gi("sssamsung4ru,sssamsung4mstglobal")).linkTrackVars = "eVar26,events"), (a.linkTrackEvents = "event26"), (a.eVar26 = s), (a.events = "event26"), a.tl(this, "o", s);
                        } catch (s) {}
                }),
                $(".main__nav-link-01").on("click", function () {
                    sendOmniEvent26("ru:samsung-care-plus:nav-samsung-care");
                }),
                $(".main__nav-link-02").on("click", function () {
                    sendOmniEvent26("ru:samsung-care-plus:nav-choose-program");
                }),
                $(".main__nav-link-03").on("click", function () {
                    sendOmniEvent26("ru:samsung-care-plus:nav-activate");
                }),
                $(".simple__item-link-01").on("click", function () {
                    sendOmniEvent("ru:samsung-care-plus:scroll-to-block-where");
                }),
                $(".simple__item-link-02").on("click", function () {
                    sendOmniEvent("ru:samsung-care-plus:scroll-to-block-status-02");
                }),
                $(".simple__item-popup-01").on("click", function () {
                    sendOmniEvent("ru:samsung-care-plus:popup-activation");
                }),
                $(".simple__item-information-01").on("click", function () {
                    sendOmniEvent("ru:samsung-care-plus:click-on-servicelocation");
                }),
                $(".simple__item-information-02").on("click", function () {
                    sendOmniEvent("ru:samsung-care-plus:click-on-repair-van");
                }),
                $(".program__tab._01").on("click", function () {
                    sendOmniEvent26("ru:samsung-care-plus:tab-phone");
                }),
                $(".program__tab._02").on("click", function () {
                    sendOmniEvent26("ru:samsung-care-plus:tab-tablet");
                }),
                $(".program__tab._03").on("click", function () {
                    sendOmniEvent26("ru:samsung-care-plus:tab-flip");
                }),
                $(".program__tab._04").on("click", function () {
                    sendOmniEvent26("ru:samsung-care-plus:tab-device");
                }),
                $(".program__card-info-link").on("click", function () {
                    sendOmniEvent("ru:samsung-care-plus:click-on-information-about-program");
                }),
                $(".where__item-link").on("click", function () {
                    sendOmniEvent("ru:samsung-care-plus:select-stores");
                }),
                $(".where__item-text._01").on("click", function () {
                    sendOmniEvent("ru:samsung-care-plus:information-about-screen");
                }),
                $(".where__item-text._02").on("click", function () {
                    sendOmniEvent("ru:samsung-care-plus:information-about-complex");
                }),
                $(".where__item-text._03").on("click", function () {
                    sendOmniEvent("ru:samsung-care-plus:information-about-warranty");
                }),
                $(".status__item-btn-link").on("click", function () {
                    sendOmniEvent("ru:samsung-care-plus:open-popup-activation");
                }),
                $(".call__block-contact-link").on("click", function () {
                    sendOmniEvent("ru:samsung-care-plus:phone-link-01");
                }),
                $(".legal__text-link").on("click", function () {
                    sendOmniEvent("ru:samsung-care-plus:phone-link-02");
                }),
                $("#faq01").on("click", function () {
                    sendOmniEvent("ru:samsung-care-plus:faq-link-01");
                }),
                $("#faq02").on("click", function () {
                    sendOmniEvent("ru:samsung-care-plus:faq-link-02");
                }),
                $("#faq03").on("click", function () {
                    sendOmniEvent("ru:samsung-care-plus:faq-link-03");
                }),
                $("#faq04").on("click", function () {
                    sendOmniEvent("ru:samsung-care-plus:faq-link-04");
                }),
                $("#faq05").on("click", function () {
                    sendOmniEvent("ru:samsung-care-plus:faq-link-05");
                }),
                $("#faq06").on("click", function () {
                    sendOmniEvent("ru:samsung-care-plus:faq-link-06");
                }),
                $("#faq07").on("click", function () {
                    sendOmniEvent("ru:samsung-care-plus:faq-link-07");
                }),
                $("#faq08").on("click", function () {
                    sendOmniEvent("ru:samsung-care-plus:faq-link-08");
                }),
                $("#faq09").on("click", function () {
                    sendOmniEvent("ru:samsung-care-plus:faq-link-09");
                }),
                $("#faq10").on("click", function () {
                    sendOmniEvent("ru:samsung-care-plus:faq-link-10");
                }),
                $("#faq11").on("click", function () {
                    sendOmniEvent("ru:samsung-care-plus:faq-link-11");
                }),
                $("#faq12").on("click", function () {
                    sendOmniEvent("ru:samsung-care-plus:faq-link-12");
                }),
                $("#faq13").on("click", function () {
                    sendOmniEvent("ru:samsung-care-plus:faq-link-13");
                }),
                $("#faq14").on("click", function () {
                    sendOmniEvent("ru:samsung-care-plus:faq-link-14");
                }),
                $("#faq15").on("click", function () {
                    sendOmniEvent("ru:samsung-care-plus:faq-link-15");
                }),
                $(".popup__activation-form-btn").on("click", function () {
                    sendOmniEvent("ru:samsung-care-plus:popup-activation-btn");
                }),
                $(".popup__program-form-btn").on("click", function () {
                    sendOmniEvent("ru:samsung-care-plus:popup-program-btn");
                }),
                $(".status__item-btn").on("click", function () {
                    sendOmniEvent("ru:samsung-care-plus:status-btn");
                }),
                setTimeout(void $(".program__tab._01").click(), 10),
                $("#buydate").mask("99.99.9999", { placeholder: "дд.мм.гггг" }),
                $("#buydate").on("focus, click", function () {
                    "дд.мм.гггг" === $(this)[0].value && $(this)[0].setSelectionRange(0, 0);
                }),
                $(".s-faq-toggle").on("click", () => {
                    setTimeout(function () {
                        $(".where__item-check").toggleClass("active"), $(".where__item-info").toggleClass("active");
                    }, 2e3);
                });
        }),
            (s = "s-faq__item_open"),
            $(".s-faq__list").on("click", ".s-faq__name", function () {
                const a = $(this).closest(".s-faq__item"),
                    e = a.find(".s-faq__content");
                if (a.hasClass(s)) e.stop().slideUp(300), a.removeClass(s);
                else {
                    e.stop().slideDown(300), a.addClass(s);
                    let n = a.siblings("." + s);
                    n.find(".s-faq__content").stop().slideUp(300), n.removeClass(s);
                }
            }),
            (function () {
                const s = $(".s-modal"),
                    a = function () {
                        s.find("._modal-open")
                            .stop()
                            .slideUp(300, function () {
                                s.stop().fadeOut(200), $("body").removeAttr("style");
                            });
                    };
                $("[data-modal]").on("click", function (a) {
                    const e = $(this).attr("href");
                    return (
                        !!e &&
                        (s.stop().fadeIn(200, function () {
                            s.css("display", "flex"), s.find(e).stop().slideDown(300).addClass("_modal-open"), $("body").css("overflow", "hidden");
                        }),
                        !1)
                    );
                }),
                    $("body").on("click keyup", function (s) {
                        if ("hidden" === $(this).css("overflow")) {
                            if (("click" === s.type && $(s.target).hasClass("s-modal__close")) || $(s.target).hasClass("s-modal")) return a(), !1;
                            "keyup" === s.type && "Escape" === s.key && a();
                        }
                    });
            })();
    }
    const a = [
        {
            category: "phone",
            series: "z",
            name: "Samsung Galaxy Z Flip5 5G",
            shortname: "Z Flip5 5G",
            icon: "icon_zflip5",
            id: "z01",
            images: { battery: "body_zflip5", body: "screen_zflip5" },
            options: [
                {
                    name: "screen",
                    nameSht: "",
                    price: "В комплекте <br/><span>при покупке <br/> Z Flip5 5G</span>",
                    work: 9500,
                    sku: "P-GT-NCXCSOFW",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана (внутреннего или внешнего) или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-z-flip5/",
                },
            ],
        },
        {
            category: "phone",
            series: "z",
            name: "Samsung Galaxy Z Fold5 5G",
            shortname: "Z Fold5 5G",
            icon: "icon_zfold5",
            id: "z02",
            images: { battery: "body_zfold5", body: "screen_zfold5" },
            options: [
                {
                    name: "screen",
                    nameSht: "",
                    price: "В комплекте <br/><span>при покупке <br/> Z Fold5 5G</span>",
                    work: 9500,
                    sku: "P-GT-NCXCSOFW",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана (внутреннего или внешнего) или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-z-fold5/",
                },
            ],
        },
        {
            category: "phone",
            series: "s",
            name: "Samsung Galaxy S23 Ultra",
            shortname: "S23 Ultra",
            icon: "iconss23ultra-new-style",
            id: "-01",
            images: { back: "back_s23ultra", battery: "battery_s23ultra", body: "body_s23ultra", screen: "screen_s23ultra" },
            options: [
                {
                    name: "complex",
                    nameSht: "",
                    price: 20990,
                    work: 1990,
                    sku: "P-GT-ACXXS0GC",
                    text: "+ Комплексный <br/>  сервис на 2 года",
                    info: "<p>Две замены экрана или задней панели в течение 2 лет</p>\n<p>Замена аккумулятора</p>\n<p>1 год гарантии</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/comprehensive-service-for-2-years.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-s22-ultra/buy/",
                },
                {
                    name: "screen",
                    nameSht: "",
                    price: 14990,
                    work: 1990,
                    sku: "P-GT-NKXXS0GC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-s22-ultra/buy/",
                },
                {
                    name: "guarantee",
                    nameSht: "",
                    price: 3490,
                    work: 0,
                    sku: "P-GT-1CXXS0PC",
                    text: "+ 1 год <br/> гарантии",
                    info: "<p>Дополнительный год гарантии</p>\n<p>Устранение заводских дефектов и неисправностей, возникших не по вине пользователя</p>\n<p>Неограниченное количество обращений</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/1-year-warranty.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-s22-ultra/buy/",
                },
            ],
        },
        {
            category: "phone",
            series: "s",
            name: "Samsung Galaxy S23+",
            shortname: "S23+",
            icon: "iconss23plus-new-style",
            id: "-02",
            images: { back: "back_s23plus", battery: "battery_s23plus", body: "body_s23plus", screen: "screen_s23plus" },
            options: [
                {
                    name: "complex",
                    nameSht: "",
                    price: 14990,
                    work: 1990,
                    sku: "P-GT-ACXXS0PC",
                    text: "+ Комплексный <br/>  сервис на 2 года",
                    info: "<p>Две замены экрана или задней панели в течение 2 лет</p>\n<p>Замена аккумулятора</p>\n<p>1 год гарантии</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/comprehensive-service-for-2-years.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-s22/buy/",
                },
                {
                    name: "screen",
                    nameSht: "",
                    price: 9990,
                    work: 1990,
                    sku: "P-GT-NKXXS0PC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-s22/buy/",
                },
                {
                    name: "guarantee",
                    nameSht: "",
                    price: 3490,
                    work: 0,
                    sku: "P-GT-1CXXS0PC",
                    text: "+ 1 год <br/> гарантии",
                    info: "<p>Дополнительный год гарантии</p>\n<p>Устранение заводских дефектов и неисправностей, возникших не по вине пользователя</p>\n<p>Неограниченное количество обращений</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/1-year-warranty.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-s22/buy/",
                },
            ],
        },
        {
            category: "phone",
            series: "s",
            name: "Samsung Galaxy S23",
            shortname: "S23",
            icon: "iconss23-new-style",
            id: "-03",
            images: { back: "back_s23", battery: "battery_s23", body: "body_s23", screen: "screen_s23" },
            options: [
                {
                    name: "complex",
                    nameSht: "",
                    price: 14990,
                    work: 1990,
                    sku: "P-GT-ACXXS0PC",
                    text: "+ Комплексный <br/>  сервис на 2 года",
                    info: "<p>Две замены экрана или задней панели в течение 2 лет</p>\n<p>Замена аккумулятора</p>\n<p>1 год гарантии</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/comprehensive-service-for-2-years.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-s22/buy/",
                },
                {
                    name: "screen",
                    nameSht: "",
                    price: 9990,
                    work: 1990,
                    sku: "P-GT-NKXXS0PC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-s22/buy/",
                },
                {
                    name: "guarantee",
                    nameSht: "",
                    price: 3490,
                    work: 0,
                    sku: "P-GT-1CXXS0PC",
                    text: "+ 1 год <br/> гарантии",
                    info: "<p>Дополнительный год гарантии</p>\n<p>Устранение заводских дефектов и неисправностей, возникших не по вине пользователя</p>\n<p>Неограниченное количество обращений</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/1-year-warranty.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-s22/buy/",
                },
            ],
        },
        {
            category: "phone",
            series: "s",
            name: "Samsung Galaxy S22 Ultra",
            shortname: "S22 Ultra",
            icon: "icon_s22ultra-new-style",
            id: "01",
            images: { back: "back_s22ultra", battery: "battery_s22ultra", body: "body_s22ultra", screen: "screen_s22ultra" },
            options: [
                {
                    name: "complex",
                    nameSht: "",
                    price: 20990,
                    work: 1990,
                    sku: "P-GT-ACXXS0GC",
                    text: "+ Комплексный <br/>  сервис на 2 года",
                    info: "<p>Две замены экрана или задней панели в течение 2 лет</p>\n<p>Замена аккумулятора</p>\n<p>1 год гарантии</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/comprehensive-service-for-2-years.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-s22-ultra/buy/",
                },
                {
                    name: "screen",
                    nameSht: "",
                    price: 14990,
                    work: 1990,
                    sku: "P-GT-NKXXS0GC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-s22-ultra/buy/",
                },
                {
                    name: "guarantee",
                    nameSht: "",
                    price: 3490,
                    work: 0,
                    sku: "P-GT-1CXXS0PC",
                    text: "+ 1 год <br/> гарантии",
                    info: "<p>Дополнительный год гарантии</p>\n<p>Устранение заводских дефектов и неисправностей, возникших не по вине пользователя</p>\n<p>Неограниченное количество обращений</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/1-year-warranty.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-s22-ultra/buy/",
                },
            ],
        },
        {
            category: "phone",
            series: "s",
            name: "Samsung Galaxy S22+",
            shortname: "S22+",
            icon: "icon_s22plus_p1-new-style",
            id: "02",
            images: { back: "back_s22plus_u3", battery: "battery_s22plus_u3", body: "body_s22plus_u3", screen: "screen_s22plus_u3" },
            options: [
                {
                    name: "complex",
                    nameSht: "",
                    price: 14990,
                    work: 1990,
                    sku: "P-GT-ACXXS0PC",
                    text: "+ Комплексный <br/>  сервис на 2 года",
                    info: "<p>Две замены экрана или задней панели в течение 2 лет</p>\n<p>Замена аккумулятора</p>\n<p>1 год гарантии</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/comprehensive-service-for-2-years.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-s22/buy/",
                },
                {
                    name: "screen",
                    nameSht: "",
                    price: 9990,
                    work: 1990,
                    sku: "P-GT-NKXXS0PC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-s22/buy/",
                },
                {
                    name: "guarantee",
                    nameSht: "",
                    price: 3490,
                    work: 0,
                    sku: "P-GT-1CXXS0PC",
                    text: "+ 1 год <br/> гарантии",
                    info: "<p>Дополнительный год гарантии</p>\n<p>Устранение заводских дефектов и неисправностей, возникших не по вине пользователя</p>\n<p>Неограниченное количество обращений</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/1-year-warranty.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-s22/buy/",
                },
            ],
        },
        {
            category: "phone",
            series: "s",
            name: "Samsung Galaxy S22",
            shortname: "S22",
            icon: "icon_s22_p1-new-style",
            id: "03",
            images: { back: "back_s22_u2", battery: "battery_s22_u2", body: "body_s22_u2", screen: "screen_s22_u2" },
            options: [
                {
                    name: "complex",
                    nameSht: "",
                    price: 14990,
                    work: 1990,
                    sku: "P-GT-ACXXS0PC",
                    text: "+ Комплексный <br/>  сервис на 2 года",
                    info: "<p>Две замены экрана или задней панели в течение 2 лет</p>\n<p>Замена аккумулятора</p>\n<p>1 год гарантии</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/comprehensive-service-for-2-years.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-s22/buy/",
                },
                {
                    name: "screen",
                    nameSht: "",
                    price: 9990,
                    work: 1990,
                    sku: "P-GT-NKXXS0PC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-s22/buy/",
                },
                {
                    name: "guarantee",
                    nameSht: "",
                    price: 3490,
                    work: 0,
                    sku: "P-GT-1CXXS0PC",
                    text: "+ 1 год <br/> гарантии",
                    info: "<p>Дополнительный год гарантии</p>\n<p>Устранение заводских дефектов и неисправностей, возникших не по вине пользователя</p>\n<p>Неограниченное количество обращений</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/1-year-warranty.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-s22/buy/",
                },
            ],
        },
        {
            category: "phone",
            series: "m",
            name: "Samsung Galaxy M13",
            shortname: "M13",
            icon: "icon_m13-new-style",
            id: "07",
            images: { back: "back_m13", battery: "battery_m13", body: "body_m13", screen: "screen_m13" },
            options: [
                {
                    name: "complex",
                    nameSht: "",
                    price: 2990,
                    work: 590,
                    sku: "P-GT-ACXXS0LC",
                    text: "+ Комплексный <br/>  сервис на 2 года",
                    info: "<p>Две замены экрана или задней панели в течение 2 лет</p>\n<p>Замена аккумулятора</p>\n<p>1 год гарантии</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/comprehensive-service-for-2-years.pdf",
                    buy: "#",
                },
                {
                    name: "screen",
                    nameSht: "",
                    price: 1490,
                    work: 590,
                    sku: "P-GT-NKXXS0LC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "#",
                },
                {
                    name: "guarantee",
                    nameSht: "",
                    price: 990,
                    work: 0,
                    sku: "P-GT-1CXXS0LC",
                    text: "+ 1 год <br/> гарантии",
                    info: "<p>Дополнительный год гарантии</p>\n<p>Устранение заводских дефектов и неисправностей, возникших не по вине пользователя</p>\n<p>Неограниченное количество обращений</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/1-year-warranty.pdf",
                    buy: "#",
                },
            ],
        },
        {
            category: "phone",
            series: "m",
            name: "Samsung Galaxy M14",
            shortname: "M14",
            icon: "icon_m54",
            id: "07",
            images: { back: "back_m14", battery: "battery_m14", body: "body_m14", screen: "screen_m14" },
            options: [
                {
                    name: "complex",
                    nameSht: "",
                    price: 2990,
                    work: 590,
                    sku: "P-GT-ACXXS0LC",
                    text: "+ Комплексный <br/>  сервис на 2 года",
                    info: "<p>Две замены экрана или задней панели в течение 2 лет</p>\n<p>Замена аккумулятора</p>\n<p>1 год гарантии</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/comprehensive-service-for-2-years.pdf",
                    buy: "#",
                },
                {
                    name: "screen",
                    nameSht: "",
                    price: 1490,
                    work: 590,
                    sku: "P-GT-NKXXS0LC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "#",
                },
                {
                    name: "guarantee",
                    nameSht: "",
                    price: 990,
                    work: 0,
                    sku: "P-GT-1CXXS0LC",
                    text: "+ 1 год <br/> гарантии",
                    info: "<p>Дополнительный год гарантии</p>\n<p>Устранение заводских дефектов и неисправностей, возникших не по вине пользователя</p>\n<p>Неограниченное количество обращений</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/1-year-warranty.pdf",
                    buy: "#",
                },
            ],
        },
        {
            category: "phone",
            series: "a",
            name: "Samsung Galaxy A04",
            shortname: "A04",
            icon: "icon_a04-new-style",
            id: "12",
            images: { back: "back_a04", battery: "battery_a04", body: "body_a04", screen: "screen_a04" },
            options: [
                {
                    name: "complex",
                    nameSht: "",
                    price: 2990,
                    work: 590,
                    sku: "P-GT-ACXXS0LC",
                    text: "+ Комплексный <br/>  сервис на 2 года",
                    info: "<p>Две замены экрана или задней панели в течение 2 лет</p>\n<p>Замена аккумулятора</p>\n<p>1 год гарантии</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/comprehensive-service-for-2-years.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a04-orange-copper-64gb-sm-a045fzcgser/buy/",
                },
                {
                    name: "screen",
                    nameSht: "",
                    price: 1490,
                    work: 590,
                    sku: "P-GT-NKXXS0LC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a04-orange-copper-64gb-sm-a045fzcgser/buy/",
                },
                {
                    name: "guarantee",
                    nameSht: "",
                    price: 990,
                    work: 0,
                    sku: "P-GT-1CXXS0LC",
                    text: "+ 1 год <br/> гарантии",
                    info: "<p>Дополнительный год гарантии</p>\n<p>Устранение заводских дефектов и неисправностей, возникших не по вине пользователя</p>\n<p>Неограниченное количество обращений</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/1-year-warranty.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a04-orange-copper-64gb-sm-a045fzcgser/buy/",
                },
            ],
        },
        {
            category: "phone",
            series: "a",
            name: "Samsung Galaxy A04s",
            shortname: "A04s",
            icon: "icon_a04s-new-style",
            id: "13",
            images: { back: "back_a04s", battery: "battery_a04s", body: "body_a04s", screen: "screen_a04s" },
            options: [
                {
                    name: "complex",
                    nameSht: "",
                    price: 2990,
                    work: 590,
                    sku: "P-GT-ACXXS0LC",
                    text: "+ Комплексный <br/>  сервис на 2 года",
                    info: "<p>Две замены экрана или задней панели в течение 2 лет</p>\n<p>Замена аккумулятора</p>\n<p>1 год гарантии</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/comprehensive-service-for-2-years.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a04s-green-64gb-sm-a047fzggser/buy/",
                },
                {
                    name: "screen",
                    nameSht: "",
                    price: 1490,
                    work: 590,
                    sku: "P-GT-NKXXS0LC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a04s-green-64gb-sm-a047fzggser/buy/",
                },
                {
                    name: "guarantee",
                    nameSht: "",
                    price: 990,
                    work: 0,
                    sku: "P-GT-1CXXS0LC",
                    text: "+ 1 год <br/> гарантии",
                    info: "<p>Дополнительный год гарантии</p>\n<p>Устранение заводских дефектов и неисправностей, возникших не по вине пользователя</p>\n<p>Неограниченное количество обращений</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/1-year-warranty.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a04s-green-64gb-sm-a047fzggser/buy/",
                },
            ],
        },
        {
            category: "phone",
            series: "a",
            name: "Samsung Galaxy A13",
            shortname: "A13",
            icon: "icon_a13-new-style",
            id: "10",
            images: { back: "back_a13", battery: "battery_a13", body: "body_a13", screen: "screen_a13" },
            options: [
                {
                    name: "complex",
                    nameSht: "",
                    price: 2990,
                    work: 590,
                    sku: "P-GT-ACXXS0LC",
                    text: "+ Комплексный <br/>  сервис на 2 года",
                    info: "<p>Две замены экрана или задней панели в течение 2 лет</p>\n<p>Замена аккумулятора</p>\n<p>1 год гарантии</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/comprehensive-service-for-2-years.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a13-light-blue-128gb-sm-a135flbkser/buy/",
                },
                {
                    name: "screen",
                    nameSht: "",
                    price: 1490,
                    work: 590,
                    sku: "P-GT-NKXXS0LC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a13-light-blue-128gb-sm-a135flbkser/buy/",
                },
                {
                    name: "guarantee",
                    nameSht: "",
                    price: 990,
                    work: 0,
                    sku: "P-GT-1CXXS0LC",
                    text: "+ 1 год <br/> гарантии",
                    info: "<p>Дополнительный год гарантии</p>\n<p>Устранение заводских дефектов и неисправностей, возникших не по вине пользователя</p>\n<p>Неограниченное количество обращений</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/1-year-warranty.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a13-light-blue-128gb-sm-a135flbkser/buy/",
                },
            ],
        },
        {
            category: "phone",
            series: "a",
            name: "Samsung Galaxy A14",
            shortname: "A14",
            icon: "icon_a14-new",
            id: "10",
            images: { back: "back_a14-new", battery: "battery_a14-new", body: "body_a14-new", screen: "screen_a14-new" },
            options: [
                {
                    name: "complex",
                    nameSht: "",
                    price: 2990,
                    work: 590,
                    sku: "P-GT-ACXXS0LC",
                    text: "+ Комплексный <br/>  сервис на 2 года",
                    info: "<p>Две замены экрана или задней панели в течение 2 лет</p>\n<p>Замена аккумулятора</p>\n<p>1 год гарантии</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/comprehensive-service-for-2-years.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a13-light-blue-128gb-sm-a135flbkser/buy/",
                },
                {
                    name: "screen",
                    nameSht: "",
                    price: 1490,
                    work: 590,
                    sku: "P-GT-NKXXS0LC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a13-light-blue-128gb-sm-a135flbkser/buy/",
                },
                {
                    name: "guarantee",
                    nameSht: "",
                    price: 990,
                    work: 0,
                    sku: "P-GT-1CXXS0LC",
                    text: "+ 1 год <br/> гарантии",
                    info: "<p>Дополнительный год гарантии</p>\n<p>Устранение заводских дефектов и неисправностей, возникших не по вине пользователя</p>\n<p>Неограниченное количество обращений</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/1-year-warranty.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a13-light-blue-128gb-sm-a135flbkser/buy/",
                },
            ],
        },
        {
            category: "phone",
            series: "a",
            name: "Samsung Galaxy A23",
            shortname: "A23",
            icon: "icon_a23-new-style",
            id: "07",
            images: { back: "back_a23", battery: "battery_a23", body: "body_a23", screen: "screen_a23" },
            options: [
                {
                    name: "complex",
                    nameSht: "",
                    price: 2990,
                    work: 590,
                    sku: "P-GT-ACXXS0LC",
                    text: "+ Комплексный <br/>  сервис на 2 года",
                    info: "<p>Две замены экрана или задней панели в течение 2 лет</p>\n<p>Замена аккумулятора</p>\n<p>1 год гарантии</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/comprehensive-service-for-2-years.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a23-orange-128gb-sm-a235fzokser/buy/",
                },
                {
                    name: "screen",
                    nameSht: "",
                    price: 1490,
                    work: 590,
                    sku: "P-GT-NKXXS0LC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a23-orange-128gb-sm-a235fzokser/buy/",
                },
                {
                    name: "guarantee",
                    nameSht: "",
                    price: 990,
                    work: 0,
                    sku: "P-GT-1CXXS0LC",
                    text: "+ 1 год <br/> гарантии",
                    info: "<p>Дополнительный год гарантии</p>\n<p>Устранение заводских дефектов и неисправностей, возникших не по вине пользователя</p>\n<p>Неограниченное количество обращений</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/1-year-warranty.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a23-orange-128gb-sm-a235fzokser/buy/",
                },
            ],
        },
        {
            category: "phone",
            series: "a",
            name: "Samsung Galaxy A24",
            shortname: "A24",
            icon: "icon_a24",
            id: "07",
            images: { back: "back_a24", battery: "battery_a24", body: "body_a24", screen: "screen_a24" },
            options: [
                {
                    name: "complex",
                    nameSht: "",
                    price: 2990,
                    work: 590,
                    sku: "P-GT-ACXXS0LC",
                    text: "+ Комплексный <br/>  сервис на 2 года",
                    info: "<p>Две замены экрана или задней панели в течение 2 лет</p>\n<p>Замена аккумулятора</p>\n<p>1 год гарантии</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/comprehensive-service-for-2-years.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a23-orange-128gb-sm-a235fzokser/buy/",
                },
                {
                    name: "screen",
                    nameSht: "",
                    price: 1490,
                    work: 590,
                    sku: "P-GT-NKXXS0LC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a23-orange-128gb-sm-a235fzokser/buy/",
                },
                {
                    name: "guarantee",
                    nameSht: "",
                    price: 990,
                    work: 0,
                    sku: "P-GT-1CXXS0LC",
                    text: "+ 1 год <br/> гарантии",
                    info: "<p>Дополнительный год гарантии</p>\n<p>Устранение заводских дефектов и неисправностей, возникших не по вине пользователя</p>\n<p>Неограниченное количество обращений</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/1-year-warranty.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a23-orange-128gb-sm-a235fzokser/buy/",
                },
            ],
        },
        {
            category: "phone",
            series: "a",
            name: "Samsung Galaxy A34",
            shortname: "A34 5G",
            icon: "icon_a34",
            id: "04",
            images: { back: "back_a34", battery: "battery_a34", body: "body_a34", screen: "screen_a34" },
            options: [
                {
                    name: "complex",
                    nameSht: "",
                    price: 3990,
                    work: 590,
                    sku: "P-GT-ACXXS0LC",
                    text: "+ Комплексный <br/>  сервис на 2 года",
                    info: "<p>Две замены экрана или задней панели в течение 2 лет</p>\n<p>Замена аккумулятора</p>\n<p>1 год гарантии</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/comprehensive-service-for-2-years.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a33-5g-awesome-black-128gb-sm-a336bzkgser/buy/",
                },
                {
                    name: "screen",
                    nameSht: "",
                    price: 2990,
                    work: 590,
                    sku: "P-GT-NKXXS0LC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a33-5g-awesome-black-128gb-sm-a336bzkgser/buy/",
                },
                {
                    name: "guarantee",
                    nameSht: "",
                    price: 1490,
                    work: 0,
                    sku: "P-GT-1CXXS0LC",
                    text: "+ 1 год <br/> гарантии",
                    info: "<p>Дополнительный год гарантии</p>\n<p>Устранение заводских дефектов и неисправностей, возникших не по вине пользователя</p>\n<p>Неограниченное количество обращений</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/1-year-warranty.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a33-5g-awesome-black-128gb-sm-a336bzkgser/buy/",
                },
            ],
        },
        {
            category: "phone",
            series: "a",
            name: "Samsung Galaxy A33",
            shortname: "A33 5G",
            icon: "icon_a33-new-style",
            id: "05",
            images: { back: "back_a33", battery: "battery_a33", body: "body_a33", screen: "screen_a33" },
            options: [
                {
                    name: "complex",
                    nameSht: "",
                    price: 3990,
                    work: 590,
                    sku: "P-GT-ACXXS0LC",
                    text: "+ Комплексный <br/>  сервис на 2 года",
                    info: "<p>Две замены экрана или задней панели в течение 2 лет</p>\n<p>Замена аккумулятора</p>\n<p>1 год гарантии</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/comprehensive-service-for-2-years.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a33-5g-awesome-black-128gb-sm-a336bzkgser/buy/",
                },
                {
                    name: "screen",
                    nameSht: "",
                    price: 2990,
                    work: 590,
                    sku: "P-GT-NKXXS0LC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a33-5g-awesome-black-128gb-sm-a336bzkgser/buy/",
                },
                {
                    name: "guarantee",
                    nameSht: "",
                    price: 1490,
                    work: 0,
                    sku: "P-GT-1CXXS0LC",
                    text: "+ 1 год <br/> гарантии",
                    info: "<p>Дополнительный год гарантии</p>\n<p>Устранение заводских дефектов и неисправностей, возникших не по вине пользователя</p>\n<p>Неограниченное количество обращений</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/1-year-warranty.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a33-5g-awesome-black-128gb-sm-a336bzkgser/buy/",
                },
            ],
        },
        {
            category: "phone",
            series: "a",
            name: "Samsung Galaxy A53",
            shortname: "A53 5G",
            icon: "icon_a53-new-style",
            id: "03",
            images: { back: "back_a53", battery: "battery_a53", body: "body_a53", screen: "screen_a53" },
            options: [
                {
                    name: "complex",
                    nameSht: "",
                    price: 3990,
                    work: 590,
                    sku: "P-GT-ACXXS0LC",
                    text: "+ Комплексный <br/>  сервис на 2 года",
                    info: "<p>Две замены экрана или задней панели в течение 2 лет</p>\n<p>Замена аккумулятора</p>\n<p>1 год гарантии</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/comprehensive-service-for-2-years.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a53-5g-awesome-blue-128gb-sm-a536elbdser/buy/",
                },
                {
                    name: "screen",
                    nameSht: "",
                    price: 2990,
                    work: 590,
                    sku: "P-GT-NKXXS0LC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a53-5g-awesome-blue-128gb-sm-a536elbdser/buy/",
                },
                {
                    name: "guarantee",
                    nameSht: "",
                    price: 1490,
                    work: 0,
                    sku: "P-GT-1CXXS0LC",
                    text: "+ 1 год <br/> гарантии",
                    info: "<p>Дополнительный год гарантии</p>\n<p>Устранение заводских дефектов и неисправностей, возникших не по вине пользователя</p>\n<p>Неограниченное количество обращений</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/1-year-warranty.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a53-5g-awesome-blue-128gb-sm-a536elbdser/buy/",
                },
            ],
        },
        {
            category: "phone",
            series: "a",
            name: "Samsung Galaxy A54",
            shortname: "A54 5G",
            icon: "icon_a54",
            id: "03",
            images: { back: "back_a54", battery: "battery_a54", body: "body_a54", screen: "screen_a54" },
            options: [
                {
                    name: "complex",
                    nameSht: "",
                    price: 3990,
                    work: 590,
                    sku: "P-GT-ACXXS0LC",
                    text: "+ Комплексный <br/>  сервис на 2 года",
                    info: "<p>Две замены экрана или задней панели в течение 2 лет</p>\n<p>Замена аккумулятора</p>\n<p>1 год гарантии</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/comprehensive-service-for-2-years.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a53-5g-awesome-blue-128gb-sm-a536elbdser/buy/",
                },
                {
                    name: "screen",
                    nameSht: "",
                    price: 2990,
                    work: 590,
                    sku: "P-GT-NKXXS0LC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a53-5g-awesome-blue-128gb-sm-a536elbdser/buy/",
                },
                {
                    name: "guarantee",
                    nameSht: "",
                    price: 1490,
                    work: 0,
                    sku: "P-GT-1CXXS0LC",
                    text: "+ 1 год <br/> гарантии",
                    info: "<p>Дополнительный год гарантии</p>\n<p>Устранение заводских дефектов и неисправностей, возникших не по вине пользователя</p>\n<p>Неограниченное количество обращений</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/1-year-warranty.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a53-5g-awesome-blue-128gb-sm-a536elbdser/buy/",
                },
            ],
        },
        {
            category: "phone",
            series: "a",
            name: "Samsung Galaxy A73",
            shortname: "A73 5G",
            icon: "icon_a73-new-style",
            id: "01",
            images: { back: "back_a73", battery: "battery_a73", body: "body_a73", screen: "screen_a73" },
            options: [
                {
                    name: "complex",
                    nameSht: "",
                    price: 3990,
                    work: 590,
                    sku: "P-GT-ACXXS0LC",
                    text: "+ Комплексный <br/>  сервис на 2 года",
                    info: "<p>Две замены экрана или задней панели в течение 2 лет</p>\n<p>Замена аккумулятора</p>\n<p>1 год гарантии</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/comprehensive-service-for-2-years.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a73-5g-awesome-mint-256gb-sm-a736blghser/buy/",
                },
                {
                    name: "screen",
                    nameSht: "",
                    price: 2990,
                    work: 590,
                    sku: "P-GT-NKXXS0LC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a73-5g-awesome-mint-256gb-sm-a736blghser/buy/",
                },
                {
                    name: "guarantee",
                    nameSht: "",
                    price: 1490,
                    work: 0,
                    sku: "P-GT-1CXXS0LC",
                    text: "+ 1 год <br/> гарантии",
                    info: "<p>Дополнительный год гарантии</p>\n<p>Устранение заводских дефектов и неисправностей, возникших не по вине пользователя</p>\n<p>Неограниченное количество обращений</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/1-year-warranty.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a73-5g-awesome-mint-256gb-sm-a736blghser/buy/",
                },
            ],
        },
        {
            category: "phone",
            series: "m",
            name: "Samsung Galaxy M23",
            shortname: "M23 5G",
            icon: "icon_m23-new-style",
            id: "05",
            images: { back: "back_m23", battery: "battery_m23", body: "body_m23", screen: "screen_m23" },
            options: [
                {
                    name: "complex",
                    nameSht: "",
                    price: 2990,
                    work: 590,
                    sku: "P-GT-ACXXS0LC",
                    text: "+ Комплексный <br/>  сервис на 2 года",
                    info: "<p>Две замены экрана или задней панели в течение 2 лет</p>\n<p>Замена аккумулятора</p>\n<p>1 год гарантии</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/comprehensive-service-for-2-years.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-m/galaxy-m23-5g-orange-copper-64gb-sm-m236biddser/buy/",
                },
                {
                    name: "screen",
                    nameSht: "",
                    price: 1490,
                    work: 590,
                    sku: "P-GT-NKXXS0LC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-m/galaxy-m23-5g-orange-copper-64gb-sm-m236biddser/buy/",
                },
                {
                    name: "guarantee",
                    nameSht: "",
                    price: 990,
                    work: 0,
                    sku: "P-GT-1CXXS0LC",
                    text: "+ 1 год <br/> гарантии",
                    info: "<p>Дополнительный год гарантии</p>\n<p>Устранение заводских дефектов и неисправностей, возникших не по вине пользователя</p>\n<p>Неограниченное количество обращений</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/1-year-warranty.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-m/galaxy-m23-5g-orange-copper-64gb-sm-m236biddser/buy/",
                },
            ],
        },
        {
            category: "phone",
            series: "m",
            name: "Samsung Galaxy M53",
            shortname: "M53 5G",
            icon: "icon_m53-new-style",
            id: "01",
            images: { back: "back_m53", battery: "battery_m53", body: "body_m53", screen: "screen_m53" },
            options: [
                {
                    name: "complex",
                    nameSht: "",
                    price: 3990,
                    work: 590,
                    sku: "P-GT-ACXXS0LC",
                    text: "+ Комплексный <br/>  сервис на 2 года",
                    info: "<p>Две замены экрана или задней панели в течение 2 лет</p>\n<p>Замена аккумулятора</p>\n<p>1 год гарантии</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/comprehensive-service-for-2-years.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-m/galaxy-m53-5g-blue-128gb-sm-m536bzbdser/buy/",
                },
                {
                    name: "screen",
                    nameSht: "",
                    price: 2990,
                    work: 590,
                    sku: "P-GT-NKXXS0LC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-m/galaxy-m53-5g-blue-128gb-sm-m536bzbdser/buy/",
                },
                {
                    name: "guarantee",
                    nameSht: "",
                    price: 1490,
                    work: 0,
                    sku: "P-GT-1CXXS0LC",
                    text: "+ 1 год <br/> гарантии",
                    info: "<p>Дополнительный год гарантии</p>\n<p>Устранение заводских дефектов и неисправностей, возникших не по вине пользователя</p>\n<p>Неограниченное количество обращений</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/1-year-warranty.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-m/galaxy-m53-5g-blue-128gb-sm-m536bzbdser/buy/",
                },
            ],
        },
        {
            category: "phone",
            series: "m",
            name: "Samsung Galaxy M33",
            shortname: "M33 5G",
            icon: "icon_m33-new-style",
            id: "03",
            images: { back: "back_m33", battery: "battery_m33", body: "body_m33", screen: "screen_m33" },
            options: [
                {
                    name: "complex",
                    nameSht: "",
                    price: 3990,
                    work: 590,
                    sku: "P-GT-ACXXS0LC",
                    text: "+ Комплексный <br/>  сервис на 2 года",
                    info: "<p>Две замены экрана или задней панели в течение 2 лет</p>\n<p>Замена аккумулятора</p>\n<p>1 год гарантии</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/comprehensive-service-for-2-years.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-m/galaxy-m33-5g-green-128gb-sm-m336bzggser/buy/",
                },
                {
                    name: "screen",
                    nameSht: "",
                    price: 2990,
                    work: 590,
                    sku: "P-GT-NKXXS0LC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-m/galaxy-m33-5g-green-128gb-sm-m336bzggser/buy/",
                },
                {
                    name: "guarantee",
                    nameSht: "",
                    price: 1490,
                    work: 0,
                    sku: "P-GT-1CXXS0LC",
                    text: "+ 1 год <br/> гарантии",
                    info: "<p>Дополнительный год гарантии</p>\n<p>Устранение заводских дефектов и неисправностей, возникших не по вине пользователя</p>\n<p>Неограниченное количество обращений</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/1-year-warranty.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-m/galaxy-m33-5g-green-128gb-sm-m336bzggser/buy/",
                },
            ],
        },
        {
            category: "phone",
            series: "a",
            name: "Samsung Galaxy A03",
            shortname: "A03",
            icon: "icon_a03-new-style",
            id: "14",
            images: { back: "back_a03", battery: "battery_a03", body: "body_a03", screen: "screen_a03" },
            options: [
                {
                    name: "complex",
                    nameSht: "",
                    price: 2990,
                    work: 590,
                    sku: "P-GT-ACXXS0LC",
                    text: "+ Комплексный <br/>  сервис на 2 года",
                    info: "<p>Две замены экрана или задней панели в течение 2 лет</p>\n<p>Замена аккумулятора</p>\n<p>1 год гарантии</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/comprehensive-service-for-2-years.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a03-blue-32gb-sm-a035fzbdser/buy/",
                },
                {
                    name: "screen",
                    nameSht: "",
                    price: 1490,
                    work: 590,
                    sku: "P-GT-NKXXS0LC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a03-blue-32gb-sm-a035fzbdser/buy/",
                },
                {
                    name: "guarantee",
                    nameSht: "",
                    price: 990,
                    work: 0,
                    sku: "P-GT-1CXXS0LC",
                    text: "+ 1 год <br/> гарантии",
                    info: "<p>Дополнительный год гарантии</p>\n<p>Устранение заводских дефектов и неисправностей, возникших не по вине пользователя</p>\n<p>Неограниченное количество обращений</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/1-year-warranty.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a03-blue-32gb-sm-a035fzbdser/buy/",
                },
            ],
        },
        {
            category: "phone",
            series: "a",
            name: "Samsung Galaxy A03 Core",
            shortname: "A03 Core",
            icon: "icon_a03_core-new-style",
            id: "15",
            images: { back: "back_a03_core", battery: "battery_a03_core", body: "body_a03_core", screen: "screen_a03_core" },
            options: [
                {
                    name: "complex",
                    nameSht: "",
                    price: 2990,
                    work: 590,
                    sku: "P-GT-ACXXS0LC",
                    text: "+ Комплексный <br/>  сервис на 2 года",
                    info: "<p>Две замены экрана или задней панели в течение 2 лет</p>\n<p>Замена аккумулятора</p>\n<p>1 год гарантии</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/comprehensive-service-for-2-years.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a03-core-blue-32gb-sm-a032fzbdser/buy/",
                },
                {
                    name: "screen",
                    nameSht: "",
                    price: 1490,
                    work: 590,
                    sku: "P-GT-NKXXS0LC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a03-core-blue-32gb-sm-a032fzbdser/buy/",
                },
                {
                    name: "guarantee",
                    nameSht: "",
                    price: 990,
                    work: 0,
                    sku: "P-GT-1CXXS0LC",
                    text: "+ 1 год <br/> гарантии",
                    info: "<p>Дополнительный год гарантии</p>\n<p>Устранение заводских дефектов и неисправностей, возникших не по вине пользователя</p>\n<p>Неограниченное количество обращений</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/1-year-warranty.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-a/galaxy-a03-core-blue-32gb-sm-a032fzbdser/buy/",
                },
            ],
        },
        {
            category: "phone",
            series: "s",
            name: "Samsung Galaxy S21 FE",
            shortname: "S21 FE 5G",
            icon: "icon_s21fe-new-style",
            id: "04",
            images: { back: "back_s21fe", battery: "battery_s21fe", body: "body_s21fe", screen: "screen_s21fe" },
            options: [
                {
                    name: "complex",
                    nameSht: "",
                    price: 9990,
                    work: 1990,
                    sku: "P-GT-ACXXS0HC",
                    text: "+ Комплексный <br/>  сервис на 2 года",
                    info: "<p>Две замены экрана или задней панели в течение 2 лет</p>\n<p>Замена аккумулятора</p>\n<p>1 год гарантии</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/comprehensive-service-for-2-years.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-s21-5g/galaxy-s21-fe-5g/buy/",
                },
                {
                    name: "screen",
                    nameSht: "",
                    price: 6990,
                    work: 1990,
                    sku: "P-GT-NKXXS0HC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-s21-5g/galaxy-s21-fe-5g/buy/",
                },
                {
                    name: "guarantee",
                    nameSht: "",
                    price: 3490,
                    work: 0,
                    sku: "P-GT-1CXXS0PC",
                    text: "+ 1 год <br/> гарантии",
                    info: "<p>Дополнительный год гарантии</p>\n<p>Устранение заводских дефектов и неисправностей, возникших не по вине пользователя</p>\n<p>Неограниченное количество обращений</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/1-year-warranty.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-s21-5g/galaxy-s21-fe-5g/buy/",
                },
            ],
        },
        {
            category: "phone",
            series: "s",
            name: "Samsung Galaxy S20 FE",
            shortname: "S20 FE",
            icon: "icon_s20fe-new-style",
            id: "08",
            images: { back: "back_s20fe", battery: "battery_s20fe", body: "body_s20fe", screen: "screen_s20fe" },
            options: [
                {
                    name: "complex",
                    nameSht: "",
                    price: 9990,
                    work: 1990,
                    sku: "P-GT-ACXXS0HC",
                    text: "+ Комплексный <br/>  сервис на 2 года",
                    info: "<p>Две замены экрана или задней панели в течение 2 лет</p>\n<p>Замена аккумулятора</p>\n<p>1 год гарантии</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/comprehensive-service-for-2-years.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-s20/buy/",
                },
                {
                    name: "screen",
                    nameSht: "",
                    price: 6990,
                    work: 1990,
                    sku: "P-GT-NKXXS0HC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-s20/buy/",
                },
                {
                    name: "guarantee",
                    nameSht: "",
                    price: 3490,
                    work: 0,
                    sku: "P-GT-1CXXS0PC",
                    text: "+ 1 год <br/> гарантии",
                    info: "<p>Дополнительный год гарантии</p>\n<p>Устранение заводских дефектов и неисправностей, возникших не по вине пользователя</p>\n<p>Неограниченное количество обращений</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/1-year-warranty.pdf",
                    buy: "https://www.samsung.com/ru/smartphones/galaxy-s20/buy/",
                },
            ],
        },
        {
            category: "tablet",
            series: "a",
            name: "Samsung Galaxy Tab A8",
            shortname: "A8",
            icon: "icon_a8",
            id: "01",
            images: { back: "back_A8", battery: "battery_A8", body: "body_A8", screen: "screen_A8" },
            options: [
                {
                    name: "screen",
                    nameSht: "",
                    price: 2490,
                    work: 890,
                    sku: "P-GT-NCXXT0MC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/tablets/galaxy-tab-a/galaxy-tab-a8-lte-dark-gray-64gb-sm-x205nzaeser/buy/",
                },
            ],
        },
        {
            category: "tablet",
            series: "a",
            name: " Samsung Galaxy Tab A7 Lite",
            shortname: "A7 Lite",
            icon: "icon_a7lite",
            id: "02",
            images: { back: "back_A7lite", battery: "battery_A7lite", body: "body_A7lite", screen: "screen_A7lite" },
            options: [
                {
                    name: "screen",
                    nameSht: "",
                    price: 2490,
                    work: 890,
                    sku: "P-GT-NCXXT0MC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/tablets/galaxy-tab-a/galaxy-tab-a7-lite-lte-gray-32gb-sm-t225nzaaser/buy/",
                },
            ],
        },
        {
            category: "tablet",
            series: "s",
            name: "Samsung Galaxy Tab S9 Ultra",
            shortname: "S9 Ultra",
            icon: "icon_s9_ultra",
            id: "01",
            images: { back: "back_s9ultra", battery: "battery_s9ultra", body: "body_s9ultra", screen: "screen_s9ultra" },
            options: [
                {
                    name: "screen",
                    nameSht: "",
                    work: 1990,
                    sku: "P-GT-NCXXT0HC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/tablets/galaxy-tab-s/galaxy-tab-s9-ultra-5g-graphite-256gb-sm-x916bzaacau/buy/",
                },
            ],
        },
        {
            category: "tablet",
            series: "s",
            name: "Samsung Galaxy Tab S9+",
            shortname: "S9+",
            icon: "icon_s9plus",
            id: "02",
            images: { back: "back_s9_plus", battery: "battery_s9_plus", body: "body_s9_plus", screen: "screen_s9_plus" },
            options: [
                {
                    name: "screen",
                    nameSht: "",
                    work: 1990,
                    sku: "P-GT-NCXXT0HC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/tablets/galaxy-tab-s/galaxy-tab-s9-plus-5g-graphite-256gb-sm-x816bzaacau/buy/",
                },
            ],
        },
        {
            category: "tablet",
            series: "s",
            name: "Samsung Galaxy Tab S9",
            shortname: "S9",
            icon: "icon_s9",
            id: "03",
            images: { back: "back_s9", battery: "battery_s9", body: "body_s9", screen: "screen_s9" },
            options: [
                {
                    name: "screen",
                    nameSht: "",
                    work: 1990,
                    sku: "P-GT-NCXXT0HC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/tablets/galaxy-tab-s/galaxy-tab-s9-5g-beige-128gb-sm-x716bzeacau/buy/",
                },
            ],
        },
        {
            category: "tablet",
            series: "s",
            name: "Samsung Galaxy Tab S8 Ultra",
            shortname: "S8 Ultra",
            icon: "icon_s8_ultra",
            id: "04",
            images: { back: "back_S8ultra", battery: "battery_S8ultra_u3", body: "body_S8ultra", screen: "screen_S8ultra" },
            options: [
                {
                    name: "screen",
                    nameSht: "",
                    price: 9990,
                    work: 1990,
                    sku: "P-GT-NCXXT0HC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/tablets/galaxy-tab-s/galaxy-tab-s8-ultra-5g-graphite-128gb-sm-x906bzaaser/buy/",
                },
            ],
        },
        {
            category: "tablet",
            series: "s",
            name: "Samsung Galaxy Tab S8+",
            shortname: "S8+",
            icon: "icon_s8plus",
            id: "05",
            images: { back: "back_s8plus", battery: "battery_s8plus_u1", body: "body_s8plus", screen: "screen_s8plus" },
            options: [
                {
                    name: "screen",
                    nameSht: "",
                    price: 9990,
                    work: 1990,
                    sku: "P-GT-NCXXT0HC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/tablets/galaxy-tab-s/galaxy-tab-s8-plus-5g-graphite-128gb-sm-x806bzaaser/buy/",
                },
            ],
        },
        {
            category: "tablet",
            series: "s",
            name: "Samsung Galaxy Tab S8",
            shortname: "S8",
            icon: "icon_s8",
            id: "06",
            images: { back: "back_s8", battery: "battery_s8_u1", body: "body_s8", screen: "screen_s8" },
            options: [
                {
                    name: "screen",
                    nameSht: "",
                    price: 9990,
                    work: 1990,
                    sku: "P-GT-NCXXT0HC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/tablets/galaxy-tab-s/galaxy-tab-s8-5g-graphite-128gb-sm-x706bzaaser/buy/",
                },
            ],
        },
        {
            category: "tablet",
            series: "s",
            name: "Samsung Galaxy Tab S7+",
            shortname: "S7+",
            icon: "icon_s7plus",
            id: "07",
            images: { back: "back_s7plus", battery: "battery_s7plus_u1", body: "body_s7plus", screen: "screen_s7plus" },
            options: [
                {
                    name: "screen",
                    nameSht: "",
                    price: 9990,
                    work: 1990,
                    sku: "P-GT-NCXXT0HC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/tablets/galaxy-tab-s/galaxy-tab-s7-plus-12-4-inch-mystic-black-128gb-lte-sm-t975nzkaser/buy/",
                },
            ],
        },
        {
            category: "tablet",
            series: "s",
            name: "Samsung Galaxy Tab S7",
            shortname: "S7",
            icon: "icon_s7",
            id: "08",
            images: { back: "back_s7", battery: "battery_s7_u1", body: "body_s7", screen: "screen_s7" },
            options: [
                {
                    name: "screen",
                    nameSht: "",
                    price: 9990,
                    work: 1990,
                    sku: "P-GT-NCXXT0HC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/tablets/galaxy-tab-s/galaxy-tab-s7-11-inch-mystic-black-128gb-lte-sm-t875nzkaser/buy/",
                },
            ],
        },
        {
            category: "tablet",
            series: "s",
            name: "Samsung Galaxy Tab S7 FE",
            shortname: "S7 FE",
            icon: "icon_s7FE",
            id: "09",
            images: { back: "back_s7fe", battery: "battery_s7fe_u1", body: "body_s7fe", screen: "screen_s7fe" },
            options: [
                {
                    name: "screen",
                    nameSht: "",
                    price: 9990,
                    work: 1990,
                    sku: "P-GT-NCXXT0HC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/tablets/galaxy-tab-s/galaxy-tab-s7-11-inch-mystic-black-128gb-lte-sm-t875nzkaser/buy/",
                },
            ],
        },
        {
            category: "watch",
            series: "w",
            name: "Samsung Galaxy Watch4",
            shortname: "Watch4 <br/>40 мм",
            icon: "icon_watch4_u1",
            id: "05",
            images: { back: "body_watch4_u1", battery: "back_watch4", body: "battery_watch4", screen: "body2_watch4_u1", screen2: "screen_watch4_u1" },
            options: [
                {
                    name: "screen",
                    nameSht: "",
                    price: 2490,
                    work: 890,
                    sku: "P-GT-NCXXT0MC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/watches/galaxy-watch/galaxy-watch4-pink-gold-lte-sm-r865fzdaser/buy/",
                },
            ],
        },
        {
            category: "watch",
            series: "w",
            name: "Samsung Galaxy Watch4 Classic 46mm",
            shortname: "Watch4 <br/>Classic<br/>46 мм",
            icon: "icon_watch4classic_u1",
            id: "06",
            images: { back: "body_watch4classic_u1", battery: "back_watch4", body: "battery_watch4", screen: "body2_watch4classic_u1", screen2: "screen_watch4classic_u1" },
            options: [
                {
                    name: "screen",
                    nameSht: "",
                    price: 2490,
                    work: 890,
                    sku: "P-GT-NCXXT0MC",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/watches/galaxy-watch/galaxy-watch4-classic-black-lte-sm-r895fzkaser/buy/",
                },
            ],
        },
        {
            category: "watch",
            series: "w",
            name: "Samsung Galaxy Watch4 Classic 42mm",
            shortname: "Watch4 <br/>Classic<br/>42 мм",
            icon: "icon_watch4classic-42",
            id: "07",
            images: { back: "body_watch4classic-42", battery: "back_watch4classic-42", body: "battery_watch4classic-42", screen: "body2_watch4classic-42", screen2: "screen_watch4classic-42" },
            options: [
                {
                    name: "screen",
                    nameSht: "",
                    price: 2490,
                    work: 890,
                    sku: "---",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/watches/galaxy-watch/galaxy-watch4-classic-silver-bt-sm-r880nzsacis/buy/",
                },
            ],
        },
        {
            category: "watch",
            series: "w",
            name: "Samsung Galaxy Watch4 44mm",
            shortname: "Watch4 <br/>44 мм",
            icon: "icon_watch4-44",
            id: "04",
            images: { back: "body_watch4-44", battery: "back_watch4-44", body: "battery_watch4-44", screen: "body2_watch4-44", screen2: "screen_watch4-44" },
            options: [
                {
                    name: "screen",
                    nameSht: "",
                    price: 2490,
                    work: 890,
                    sku: "---",
                    text: "+ Экран на 1 год",
                    info: "<p>Одна замена экрана или задней панели</p>\n<p>Замена аккумулятора</p>\n<p>Срок действия: 1 год</p>",
                    link: "https://images.samsung.com/is/content/samsung/assets/ru/offer/samsung-care-plus/screen-for-1-year.pdf",
                    buy: "https://www.samsung.com/ru/watches/galaxy-watch/galaxy-watch4-green-bt-sm-r870nzgacis/buy/",
                },
            ],
        },
    ];
    let e = 0,
        n = !0;
    !(function (a) {
        !(function e(n) {
            let t = document.createElement("script");
            (t.src = a[n]),
                document.head.append(t),
                (t.onload = () => {
                    n === a.length - 1 ? s() : e(n + 1);
                });
        })(0);
    })(["https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js", "https://cdnjs.cloudflare.com/ajax/libs/jquery.maskedinput/1.4.1/jquery.maskedinput.min.js"]);
});
