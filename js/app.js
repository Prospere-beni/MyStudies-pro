(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/js/app"],{

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery, global) {__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

__webpack_require__(/*! ./plugins/scrollreveal */ "./resources/js/plugins/scrollreveal.js");

__webpack_require__(/*! ./plugins/sticky */ "./resources/js/plugins/sticky.js");

__webpack_require__(/*! ./ini/ini-front */ "./resources/js/ini/ini-front.js");

__webpack_require__(/*! ./ini/ini-tooltips */ "./resources/js/ini/ini-tooltips.js");

__webpack_require__(/*! ./ini/ini-popover */ "./resources/js/ini/ini-popover.js");

__webpack_require__(/*! ./ini/ini-tutors */ "./resources/js/ini/ini-tutors.js");

__webpack_require__(/*! ./ini/ini-datepicker */ "./resources/js/ini/ini-datepicker.js");

__webpack_require__(/*! ./ini/ini-animates */ "./resources/js/ini/ini-animates.js");

__webpack_require__(/*! ./ini/ini-collapse */ "./resources/js/ini/ini-collapse.js");

__webpack_require__(/*! ./ini/ini-socials */ "./resources/js/ini/ini-socials.js");

__webpack_require__(/*! ./ini/ini-datatables */ "./resources/js/ini/ini-datatables.js");

__webpack_require__(/*! ./ini/ini-rating */ "./resources/js/ini/ini-rating.js");

__webpack_require__(/*! ./ini/ini-login */ "./resources/js/ini/ini-login.js");

__webpack_require__(/*! ./ini/ini-orders */ "./resources/js/ini/ini-orders.js");

__webpack_require__(/*! ./ini/ini-qualifications */ "./resources/js/ini/ini-qualifications.js");

__webpack_require__(/*! ./ini/ini-cvs */ "./resources/js/ini/ini-cvs.js");

__webpack_require__(/*! ./ini/ini-card */ "./resources/js/ini/ini-card.js");

__webpack_require__(/*! ./ini/ini-buttons */ "./resources/js/ini/ini-buttons.js");

__webpack_require__(/*! ./ini/ini-charts.js */ "./resources/js/ini/ini-charts.js");

__webpack_require__(/*! ./ini/ini-numeric.js */ "./resources/js/ini/ini-numeric.js");

__webpack_require__(/*! ./ini/ini-charts-callback.js */ "./resources/js/ini/ini-charts-callback.js");

__webpack_require__(/*! ./ini/ini-discount-code.js */ "./resources/js/ini/ini-discount-code.js");

__webpack_require__(/*! ./ini/ini-search.js */ "./resources/js/ini/ini-search.js");

__webpack_require__(/*! ./shared/ini-keywords */ "./resources/js/shared/ini-keywords.js");

__webpack_require__(/*! ./ini/ini-carousel */ "./resources/js/ini/ini-carousel.js");

__webpack_require__(/*! ./ini/ini-autosize */ "./resources/js/ini/ini-autosize.js");

__webpack_require__(/*! ./ini/ini-marketplace */ "./resources/js/ini/ini-marketplace.js");

__webpack_require__(/*! ./ini/accounts/students/ini-tutors */ "./resources/js/ini/accounts/students/ini-tutors.js");

__webpack_require__(/*! ./ini/accounts/students/ini-surveys */ "./resources/js/ini/accounts/students/ini-surveys.js");

__webpack_require__(/*! ./ini/accounts/students/ini-messages */ "./resources/js/ini/accounts/students/ini-messages.js");

__webpack_require__(/*! ./ini/accounts/students/ini-uploads */ "./resources/js/ini/accounts/students/ini-uploads.js");

__webpack_require__(/*! ./admin/ini/ini-preview-file.js */ "./resources/js/admin/ini/ini-preview-file.js");

window.$ = global.jQuery = jQuery;
JSONfn = __webpack_require__(/*! jsonfn */ "./node_modules/jsonfn/jsonfn.js").JSONfn;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_window_dot_ajaxform) {//window._ = require('lodash');
try {
  window.rating = __webpack_require__(/*! jquery-rating */ "./node_modules/jquery-rating/bootstrap-rating.js");

  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");

  __webpack_require__(/*! bootstrap-datepicker */ "./node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js");

  window.ScrollReveal = __webpack_require__(/*! ./plugins/scrollreveal */ "./resources/js/plugins/scrollreveal.js");
  window.waypoint = __webpack_require__(/*! waypoints/lib/jquery.waypoints.js */ "./node_modules/waypoints/lib/jquery.waypoints.js");
  window.counterUp = __webpack_require__(/*! jquery.counterup */ "./node_modules/jquery.counterup/jquery.counterup.js");
  window.SimpleBar = __webpack_require__(/*! simplebar */ "./node_modules/simplebar/dist/simplebar.js");
  window.Cookies = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
  window.Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")["default"];
  window.swal = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
  window.numeric = __webpack_require__(/*! jquery.numeric */ "./node_modules/jquery.numeric/jquery.numeric.js");
  window.LoadingOverlay = __webpack_require__(/*! gasparesganga-jquery-loading-overlay/dist/loadingoverlay.min.js */ "./node_modules/gasparesganga-jquery-loading-overlay/dist/loadingoverlay.min.js");
  window.JSONfn = __webpack_require__(/*! jsonfn */ "./node_modules/jsonfn/jsonfn.js");
  window.dynamics = __webpack_require__(/*! dynamics.js */ "./node_modules/dynamics.js/lib/dynamics.js");
  window.moment = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");

  __webpack_require__(/*! pdfjs-dist */ "./node_modules/pdfjs-dist/build/pdf.js");

  __webpack_require__(/*! jssocials */ "./node_modules/jssocials/dist/jssocials.js");

  __webpack_require__(/*! clientjs */ "./node_modules/clientjs/dist/client.min.js");

  __webpack_require__(/*! ./plugins/sticky.js */ "./resources/js/plugins/sticky.js");

  window.autosize = __webpack_require__(/*! autosize/dist/autosize.min.js */ "./node_modules/autosize/dist/autosize.min.js");
  __webpack_provided_window_dot_ajaxform = __webpack_require__(/*! @toyi/aurion72-ajaxform-private */ "./node_modules/@toyi/aurion72-ajaxform-private/lib/index.js");
  __webpack_provided_window_dot_ajaxform.initAutoload();
  window.initSelect2 = __webpack_require__(/*! @toyi/select2-private */ "./node_modules/@toyi/select2-private/lib/index.js");
  window.initSelect2();
} catch (e) {}

var ES6Promise = __webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js");

ES6Promise.polyfill();
window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @toyi/aurion72-ajaxform-private */ "./node_modules/@toyi/aurion72-ajaxform-private/lib/index.js")))

/***/ }),

/***/ "./resources/js/ini/accounts/students/ini-messages.js":
/*!************************************************************!*\
  !*** ./resources/js/ini/accounts/students/ini-messages.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {scrollMessagesArea = function scrollMessagesArea() {
  $('.btn-chat').trigger('click');
};

$('.btn-chat').on('chat:read', function (e) {
  var _this = $(e.currentTarget);

  var route = _this.data('route');

  if (route) {
    window.axios.post(_this.data('route')).then(function (res) {
      window.handleAjaxResponse(res.data);
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/js/ini/accounts/students/ini-surveys.js":
/*!***********************************************************!*\
  !*** ./resources/js/ini/accounts/students/ini-surveys.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  $('#cv-picture').on('change', function (e) {
    window.previewFile(e.currentTarget);
  });
  $('body').on('click', '.delete-cv-element', function (e) {
    var _this = $(e.currentTarget);

    var route = _this.data('route');

    window.axios["delete"](route).then(function (res) {
      window.handleAjaxResponse(res.data);
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/js/ini/accounts/students/ini-tutors.js":
/*!**********************************************************!*\
  !*** ./resources/js/ini/accounts/students/ini-tutors.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($, __webpack_provided_window_dot_ajaxform) {$(document).ready(function () {
  var interval;
  var search_area = $('.search-area');

  if (search_area.length) {
    interval = setInterval(function () {
      window.axios.get(search_area.data('route')).then(function (res) {
        if (res.data === 1) {
          clearInterval(interval);
          window.location.reload();
        }
      });
    }, 5000);
  }

  var tutors_list_wrapper = $('.tutors-list-wrapper');
  var tutors_list_area = $('.tutors-list-area');
  var no_tutors_label = $('.no-tutors-label');

  var getCandidates = function getCandidates() {
    var active_filter = $('.candidates-filter-by.active');
    var active_sort = $('.candidates-sort-by option:selected');
    window.axios.post(tutors_list_area.data('route'), {
      active_filter: active_filter.val(),
      active_sort: {
        name: active_sort.val().split('.')[0],
        dir: active_sort.val().split('.')[1]
      }
    }).then(function (res) {
      tutors_list_area.html(res.data.list);

      if (res.data.show) {
        tutors_list_wrapper.show();
        no_tutors_label.hide();
      } else {
        tutors_list_wrapper.hide();
        no_tutors_label.show();
      }

      $('.order-candidates-already-had-order-with-student-count').text(res.data.order_candidates_already_had_order_with_student);
      __webpack_provided_window_dot_ajaxform.initAutoload();
    });
  };

  if (tutors_list_wrapper.length) {
    setInterval(function () {
      getCandidates();
    }, 5000);
  }

  $('.candidates-filter-by').on('click', function (e) {
    $('.candidates-filter-by').removeClass('active');
    $(e.currentTarget).addClass('active');
    getCandidates();
  });
  $('.candidates-sort-by').on('change', function (e) {
    getCandidates();
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! @toyi/aurion72-ajaxform-private */ "./node_modules/@toyi/aurion72-ajaxform-private/lib/index.js")))

/***/ }),

/***/ "./resources/js/ini/accounts/students/ini-uploads.js":
/*!***********************************************************!*\
  !*** ./resources/js/ini/accounts/students/ini-uploads.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  $('body').on('click', '.refresh-upload-area', function (e) {
    setTimeout(function () {
      window.axios.post($(e.currentTarget).attr('data-route')).then(function (res) {
        window.handleAjaxResponse(res.data);
      });
    }, 400);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/js/ini/ini-animates.js":
/*!******************************************!*\
  !*** ./resources/js/ini/ini-animates.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery, $) {jQuery(document).ready(function () {
  window.sr = ScrollReveal();
  sr.reveal('.header-animate', {
    duration: 400,
    useDelay: 'once',
    delay: '0'
  }, 100);
  sr.reveal('.img-ref', {
    duration: 600,
    useDelay: 'once',
    delay: '0'
  }, 20);
  sr.reveal('.btn-correction-type', {
    duration: 600,
    useDelay: 'once',
    delay: '100'
  }, 50);
  sr.reveal('.btn-trade-type', {
    duration: 400,
    useDelay: 'once',
    delay: '100'
  }, 50);
  sr.reveal('.content-securitie', {
    duration: 600,
    useDelay: 'once',
    delay: '100'
  }, 100);
  sr.reveal('.toolbox', {
    duration: 600,
    origin: 'bottom',
    useDelay: 'once',
    distance: '100px',
    delay: '600'
  }, 100);
  sr.reveal('.bubble', {
    duration: 600,
    origin: 'top',
    useDelay: 'once',
    distance: '100px',
    delay: '800'
  }, 100);
  sr.reveal('.content-buy', {
    duration: 400,
    useDelay: 'once',
    delay: '400'
  }, 100);
  sr.reveal('.content-sell', {
    duration: 400,
    useDelay: 'once',
    delay: '200'
  }, 100);
  $(".sticked").sticky({
    topSpacing: 0
  });
  $(".sticked-sidebar").sticky({
    topSpacing: 82,
    bottomSpacing: 735
  });
  $(".btn-to-top").click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });
  $(".anchor-link").click(function () {
    var id = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $("" + id + "").offset().top - 80
    }, "slow");
    return false;
  });
  $(".btn-chat").click(function () {
    $("html, body").animate({
      scrollTop: $(".chat").offset().top - 120
    }, "slow");
    $(".content-messages").animate({
      scrollTop: $('.messages-area').height()
    }, "fast");
    $(".btn-chat").trigger('chat:read');
  });

  if (document.location.hash.substring(1) == "chat") {
    $(".btn-chat").trigger('click', function () {
      $("html, body").animate({
        scrollTop: $(".chat").offset().top - 120
      }, "slow");
      $(".content-messages").animate({
        scrollTop: $('.messages-area').height()
      }, "fast");
    });
  }

  $('.counter').counterUp({
    delay: 20,
    time: 2000
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/js/ini/ini-autosize.js":
/*!******************************************!*\
  !*** ./resources/js/ini/ini-autosize.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery, $) {jQuery(document).ready(function () {
  autosize($('textarea'));
  $('.account-btn').on('click', function (e) {
    autosize.update($('textarea'));
  });
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    autosize.update($('textarea'));
  });
  $(".average").css("max-width", $(".target-bar").width() + "px");
  $(window).resize(function () {
    $(".average").css("max-width", $(".target-bar").width() + "px");
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/js/ini/ini-buttons.js":
/*!*****************************************!*\
  !*** ./resources/js/ini/ini-buttons.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$('.btn-loading').on('click', function () {
  $(this).html($(this).data('loading-text'));
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/js/ini/ini-card.js":
/*!**************************************!*\
  !*** ./resources/js/ini/ini-card.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  $('.range-min-max').on('blur', function (e) {
    var _this = $(e.currentTarget);

    var val = parseFloat(_this.val());
    if (val > parseFloat(_this.attr('max'))) val = parseFloat(_this.attr('max'));
    if (val < parseFloat(_this.attr('min'))) val = parseFloat(_this.attr('min'));
    if (isNaN(val)) val = _this.attr('min');

    _this.val(val);
  });
  $('.autoswitchinput').on('keypress', function (e) {
    setTimeout(function () {
      var _this = $(e.currentTarget);

      var maxlength = _this.attr('maxlength');

      var target = _this.attr('data-target');

      if (parseInt(maxlength) === _this.val().length) {
        $(target)[0].focus();
      }
    }, 100);
  });
  $('body').on('click', 'input[name="card_id"]', function (e) {
    var _this = $(e.currentTarget);

    if (_this.val() === '') {
      $('.add-card-area').show();
      $('.saved-card-area').hide();
    } else {
      $('.add-card-area').hide();
      $('.saved-card-area').show();
      Checkout.close();
    }
  });
  $('body').on('click', '.new-card', function (e) {
    e.preventDefault();
    Checkout.open();
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/js/ini/ini-carousel.js":
/*!******************************************!*\
  !*** ./resources/js/ini/ini-carousel.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery, $) {jQuery(document).ready(function () {
  $('.carousel').carousel({
    interval: 5000
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/js/ini/ini-charts-callback.js":
/*!*************************************************!*\
  !*** ./resources/js/ini/ini-charts-callback.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.formattedEuros = function (value, index, values) {
  return numeral(value).format('0,0') + ' €';
};

window.formattedPercent = function (value, index, values) {
  return value + '%';
};

window.labelHistoVariable = function (tooltipItems, data, chart) {
  if (tooltipItems.datasetIndex == 0) {
    return 'Pourcentage de rémunération variable : ' + numeral(tooltipItems.yLabel).format('0,0[.]00') + ' %';
  } else {
    var format = '0,0';
    var value = data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index];
    return numeral(value).format(format) + ' €';
  }
};

window.ageTickLabel = function (value, index, values) {
  return value + ' an(s)';
};

window.percentLabel = function (tooltipItems, data) {
  return data.labels[tooltipItems.index] + " : " + numeral(data.datasets[0].data[tooltipItems.index]).format('0,0[.]0') + '%';
};

window.titleDefault = function (tooltipItems, data, chart) {
  return data.datasets[tooltipItems[0].datasetIndex].label;
};

window.doughnutSimpleLabel = function (tooltipItems, data) {
  return data.labels[tooltipItems.index] + " : " + numeral(data.datasets[0].data[tooltipItems.index]).format('0') + ' €';
};

window.diffBarLabel = function (tooltipItems, data) {
  if (tooltipItems.datasetIndex == 0) {
    return 'Écart de ' + numeral(tooltipItems.yLabel).format('0') + ' %';
  } else {
    return numeral(tooltipItems.yLabel).format('0') + ' €';
  }
};

window.labelNoUnit = function (tooltipItems, data, chart) {
  var value = 0;

  for (var i = 0; i <= tooltipItems.datasetIndex; i++) {
    value += data.datasets[i].data[tooltipItems.index];
  }

  var format = '0';
  return numeral(value).format(format);
};

window.labelDefaultSum = function (tooltipItems, data, chart) {
  var value = 0;

  for (var i = 0; i <= tooltipItems.datasetIndex; i++) {
    value += data.datasets[i].data[tooltipItems.index];
  }

  var format = '0';
  return numeral(value).format(format) + ' €';
};

window.labelDefaultAbsolute = function (tooltipItems, data, chart) {
  var format = '0';
  return numeral(value).format(format) + ' €';
};

window.labelDefault = function (tooltipItems, data) {
  return numeral(tooltipItems.yLabel).format('0,0') + ' €';
};

window.labelDefaultNoUnit = function (tooltipItems, data) {
  return numeral(tooltipItems.yLabel).format('0,0');
};

window.pieLabelDefault = function (tooltipItems, data, chart) {
  var format = '0,0';
  return data.labels[tooltipItems.index] + " : " + numeral(data.datasets[0].data[tooltipItems.index]).format(format) + ' €';
};

window.pieLabelDefaultNoUnit = function (tooltipItems, data, chart) {
  var format = '0,0';
  return data.labels[tooltipItems.index] + " : " + numeral(data.datasets[0].data[tooltipItems.index]).format(format);
};

/***/ }),

/***/ "./resources/js/ini/ini-charts.js":
/*!****************************************!*\
  !*** ./resources/js/ini/ini-charts.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  var loadCharts = function loadCharts() {
    setTimeout(function () {
      $('#loadChartsForm').trigger('submit');
    }, 200);
  };

  if ($('.charts-area').length) {
    loadCharts();
  }

  $('#loadChartsForm select').on('change', function (e) {
    loadCharts();
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/js/ini/ini-collapse.js":
/*!******************************************!*\
  !*** ./resources/js/ini/ini-collapse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery, $) {jQuery(document).ready(function () {
  $(".select-collapse").on("change", function () {
    var target = $(this).attr("data-target");
    var data = $(this).val();

    if (!$("." + target).hasClass("option-" + data)) {
      $("." + target).collapse('hide');
    }

    $("." + target + ".option-" + data).collapse('show');
  });
  $(".select-collapse").trigger('change');
  $('.select-tab').click(function () {
    var target = $(this).attr("data-target");
    $('#tab-balance a[href="#' + target + '"]').tab('show');
    return false;
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/js/ini/ini-cvs.js":
/*!*************************************!*\
  !*** ./resources/js/ini/ini-cvs.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  $('body').on('click', '.submit-cv-btn', function (e) {
    var _this = $(e.currentTarget);

    var _parent = _this.closest('.one-cv-form');

    var id = _parent.attr('data-id');

    $('.cv-error', _parent).remove();
    var basename = 'cvs[' + id + ']';
    var formData = new FormData();
    formData.append('name', $('input[name="' + basename + '[name]"]', _parent).val());
    formData.append('year', $('select[name="' + basename + '[year]"]', _parent).val());
    formData.append('mention_id', $('select[name="' + basename + '[mention_id]"]', _parent).val());
    formData.append('filename', $('input[name="' + basename + '[filename]"]', _parent).val());
    formData.append('original_filename', $('input[name="' + basename + '[original_filename]"]', _parent).val());
    formData.append('file', $('input[name="file"]', _parent).prop('files')[0]);
    formData.append('token', id);
    window.axios.post(_this.attr('data-route'), formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(function (res) {
      $('.modal').modal('hide');
      setTimeout(function () {
        if (id === 'no_token') {
          $('.cvs-area').append(res.data);
        } else {
          var html = $.parseHTML(res.data)[0];
          $('.cvs-area .one-cv[data-id="' + id + '"]').html(html.innerHTML);
        }
      }, 150);
      window.initSelect2();
    })["catch"](function (error) {
      $.each(error.response.data.errors, function (i, v) {
        v.forEach(function (error) {
          var target;

          if (i === 'file') {
            target = $('input[name="file"]', _parent);
          } else {
            target = $('input[name="' + basename + '[' + i + ']"]', _parent);
          }

          target.after("<div class=\"invalid-feedback cv-error\">".concat(error, "</div>"));
        });
      });
      window.initSelect2();
    });
  });
  $('body').on('click', '.delete-cv-btn', function (e) {
    $(e.currentTarget).closest('.one-cv').remove();
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/js/ini/ini-datatables.js":
/*!********************************************!*\
  !*** ./resources/js/ini/ini-datatables.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(/*! @toyi/datatables-private */ "./node_modules/@toyi/datatables-private/lib/index.js");

$('.reload-datatable').on('change', function (e) {
  $('.datatable-load').dataTable().api().ajax.reload();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/js/ini/ini-discount-code.js":
/*!***********************************************!*\
  !*** ./resources/js/ini/ini-discount-code.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  $('body').on('click', '#apply-discount-code', function (e) {
    e.preventDefault();

    var _this = $(e.currentTarget);

    var discount_code = $('input[name="discount_code"]').val();

    var order_id = _this.attr('data-order-id');

    var token_email = _this.attr('data-token-email');

    window.axios.post('/commander/applyDiscountCode/' + order_id + token_email, {
      discount_code: discount_code
    }).then(function (response) {
      $('.compute-preview-total-on-change:first').trigger('change.compute-preview');
      swal({
        type: response.data.type,
        title: response.data.title,
        text: response.data.text,
        onClose: function onClose(dialog) {
          window.location.reload();
        }
      });
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/js/ini/ini-front.js":
/*!***************************************!*\
  !*** ./resources/js/ini/ini-front.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery, $) {jQuery(document).ready(function () {
  $(".h-i-w-btn").on('click', function () {
    var target = $(this).attr("data-target");
    $(".h-i-w").hide();
    $(".h-i-w-btn").removeClass("active");
    $(this).addClass("active");
    $("." + target).show();
    return false;
  });
  $(".account-btn").on('click', function () {
    var target = $(this).attr("data-target");
    $(".account-content").hide();
    $(".account-btn").removeClass("active");
    $(this).addClass("active");
    $("." + target).show();
    return false;
  });
  $('#modalUpgradeAccount').modal('toggle');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/js/ini/ini-login.js":
/*!***************************************!*\
  !*** ./resources/js/ini/ini-login.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  var clientjs = new ClientJS();
  var ck = clientjs.isCookie();
  var cr = clientjs.getCurrentResolution();
  $('input[name="cjs_ck"]').val(btoa(ck));
  $('input[name="cjs_cr"]').val(btoa(cr));
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/js/ini/ini-marketplace.js":
/*!*********************************************!*\
  !*** ./resources/js/ini/ini-marketplace.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  $(".filter-checkbox").prop('disabled', false);
  $(".btn-download-document-iframe").on("click", function () {
    $(".btn-download-document-marketplace")[0].click();
  });
  $(".filter-checkbox").on("click", function (e) {
    var full_url_without_filters = $("[data-url]").attr('data-url');
    var url_filters_array = [];
    var url_filters_string = '';
    $.LoadingOverlay('show');
    $(".filter-checkbox:checked").each(function (i, v) {
      url_filters_array.push(v.id);
    });
    url_filters_string = url_filters_array.join('+');
    window.location.href = full_url_without_filters + '/' + url_filters_string;
  });
  $(".add-document").submit(function (e) {
    $.LoadingOverlay('show');
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/js/ini/ini-popover.js":
/*!*****************************************!*\
  !*** ./resources/js/ini/ini-popover.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery, $) {jQuery(document).ready(function () {
  $('[data-toggle="popover"]').popover({
    trigger: "hover",
    container: 'body'
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/js/ini/ini-qualifications.js":
/*!************************************************!*\
  !*** ./resources/js/ini/ini-qualifications.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  $('body').on('click', '.submit-qualification-btn', function (e) {
    var _this = $(e.currentTarget);

    var _parent = _this.closest('.one-qualification-form');

    var id = _parent.attr('data-id');

    $('.qualification-error', _parent).remove();
    var basename = 'qualifications[' + id + ']';
    var formData = new FormData();
    formData.append('name', $('input[name="' + basename + '[name]"]', _parent).val());
    formData.append('year', $('select[name="' + basename + '[year]"]', _parent).val());
    formData.append('mention_id', $('select[name="' + basename + '[mention_id]"]', _parent).val());
    formData.append('filename', $('input[name="' + basename + '[filename]"]', _parent).val());
    formData.append('original_filename', $('input[name="' + basename + '[original_filename]"]', _parent).val());
    formData.append('file', $('input[name="file"]', _parent).prop('files')[0]);
    formData.append('token', id);
    window.axios.post(_this.attr('data-route'), formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(function (res) {
      $('.modal').modal('hide');
      setTimeout(function () {
        if (id === 'no_token') {
          $('.qualifications-area').append(res.data);
        } else {
          var html = $.parseHTML(res.data)[0];
          $('.qualifications-area .one-qualification[data-id="' + id + '"]').html(html.innerHTML);
        }
      }, 150);
      window.initSelect2();
    })["catch"](function (error) {
      $.each(error.response.data.errors, function (i, v) {
        v.forEach(function (error) {
          var target;

          if (i === 'file') {
            target = $('input[name="file"]', _parent);
          } else {
            target = $('input[name="' + basename + '[' + i + ']"]', _parent);
          }

          target.after("<div class=\"invalid-feedback qualification-error\">".concat(error, "</div>"));
        });
      });
      window.initSelect2();
    });
  });
  $('body').on('click', '.delete-qualification-btn', function (e) {
    $(e.currentTarget).closest('.one-qualification').remove();
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/js/ini/ini-search.js":
/*!****************************************!*\
  !*** ./resources/js/ini/ini-search.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  /*function getResults(value) {
          window.axios.post('place-de-marche/autocomplete/' + value.val()).then((result) => {
            let results = [];
          
          result.data.forEach(function (y, index) {
              results.push(y.title);
          });
            $('#searched-documents-count').innerHTML = results.length;
            return results;
      });
  }
    $('body').on('keyup', '#query', (e) => {
        let _this = $(e.currentTarget);
      
      $("#query").typeahead({
          minLength: 2,
          source: getResults(_this)
      });
      
    });*/
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/js/ini/ini-socials.js":
/*!*****************************************!*\
  !*** ./resources/js/ini/ini-socials.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery, $) {jQuery(document).ready(function () {
  $("#share").jsSocials({
    showCount: true,
    shares: [{
      share: 'twitter',
      label: "Partager sur twitter",
      logo: "fab text-white fa-twitter",
      shareUrl: "https://twitter.com/share?url={url}&text={text}&via={via}&hashtags={hashtags}",
      countUrl: ""
    }, {
      share: 'facebook',
      label: "Partager sur Facebook",
      logo: "fab text-white fa-facebook",
      shareUrl: "https://facebook.com/sharer/sharer.php?u={url}",
      countUrl: "https://graph.facebook.com/?id={url}",
      getCount: function getCount(data) {
        return data.share && data.share.share_count || 0;
      }
    }, {
      share: 'linkedin',
      label: "Share",
      logo: "fab text-white fa-linkedin",
      shareUrl: "https://www.linkedin.com/shareArticle?mini=true&url={url}",
      countUrl: "https://www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?",
      getCount: function getCount(data) {
        return data.count;
      }
    }, {
      share: 'pinterest',
      label: "Pin it",
      logo: "fab text-white fa-pinterest",
      shareUrl: "https://pinterest.com/pin/create/bookmarklet/?media={media}&url={url}&description={text}",
      countUrl: "https://api.pinterest.com/v1/urls/count.json?&url={url}&callback=?",
      getCount: function getCount(data) {
        return data.count;
      }
    }]
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/js/ini/ini-tooltips.js":
/*!******************************************!*\
  !*** ./resources/js/ini/ini-tooltips.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery, $) {jQuery(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/js/ini/ini-tutors.js":
/*!****************************************!*\
  !*** ./resources/js/ini/ini-tutors.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  //Get the nearest .profile-select-subject
  var getSelect = function getSelect(el) {
    if (el.hasClass('select-wrapper')) {
      return $('.profile-select-subject:first', el);
    } else {
      return $('.profile-select-subject:first', getSelectWrapper(el));
    }
  };

  var getSelectWrapper = function getSelectWrapper(el) {
    return el.closest('.select-wrapper');
  }; //Put the loading overlay on the nearest .sub-serviceable-container


  var loadingOverlay = function loadingOverlay(el, display) {
    el.closest('.sub-serviceable-container').LoadingOverlay(display ? 'show' : 'hide');
  }; //Handle subjects selection / unselection from the related select2


  $('.profile-select-subject').on('select2:select', function (e) {
    var _this = $(e.currentTarget);

    var subject_id = typeof e.params !== 'undefined' ? e.params.data.id : null;

    var values = _this.val();

    var subjects_area = $('.subjects-area', getSelectWrapper(_this));

    if (subjects_area.length) {
      if (values.length && subject_id !== null) {
        var route = getSelectWrapper(_this).data('academic-levels-row-route');
        loadingOverlay(_this, true); //Add the academic level selection row

        window.axios.post(route, {
          subject_id: subject_id
        }).then(function (res) {
          subjects_area.show();
          subjects_area.append(res.data);
          loadingOverlay(_this, false);
        });
      } else if (values.length === 0) {
        subjects_area.hide();
      }
    }
  }).on('select2:unselect', function (e) {
    var _this = $(e.currentTarget);

    var subjects_area = $('.subjects-area', getSelectWrapper(_this));

    if (subjects_area.length) {
      $("[data-subject_id=\"".concat(e.params.data.id, "\"]"), subjects_area).remove();
    }

    if (_this.val().length === 0) subjects_area.hide();
  });
  $('body').on('click', '.delete-subject-btn', function (e) {
    var _this = $(e.currentTarget);

    var subject_card = _this.closest('[data-subject_id]');

    var subject_id = subject_card.attr('data-subject_id');
    var select = getSelect(_this);
    var data = {
      id: subject_id
    }; //$('option[value="' + subject_id + '"]').prop('selected', false);

    select.trigger({
      type: 'select2:unselect',
      params: {
        data: data
      }
    });
    select.trigger('change.select2');
    select.trigger('select2:select');
    subject_card.remove();
  });
  $('.edit-tutor-form').on('submit', function (e) {
    return false;
  });
  $('body').on('click', '.all-academic-levels', function (e) {
    var _this = $(e.currentTarget);

    var name = "subjects_for_sub_service" + _this.attr('name');

    var $allCheckBoxes = $('input[name="' + name + '"]');
    $allCheckBoxes.prop('checked', _this.prop('checked'));
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./resources/js/plugins/scrollreveal.js":
/*!**********************************************!*\
  !*** ./resources/js/plugins/scrollreveal.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function () {
  "use strict";

  function e(n) {
    return "undefined" == typeof this || Object.getPrototypeOf(this) !== e.prototype ? new e(n) : (O = this, O.version = "3.4.0", O.tools = new E(), O.isSupported() ? (O.tools.extend(O.defaults, n || {}), O.defaults.container = t(O.defaults), O.store = {
      elements: {},
      containers: []
    }, O.sequences = {}, O.history = [], O.uid = 0, O.initialized = !1) : "undefined" != typeof console && null !== console, O);
  }

  function t(e) {
    if (e && e.container) {
      if ("string" == typeof e.container) return window.document.documentElement.querySelector(e.container);
      if (O.tools.isNode(e.container)) return e.container;
    }

    return O.defaults.container;
  }

  function n(e, t) {
    return "string" == typeof e ? Array.prototype.slice.call(t.querySelectorAll(e)) : O.tools.isNode(e) ? [e] : O.tools.isNodeList(e) ? Array.prototype.slice.call(e) : Array.isArray(e) ? e.filter(O.tools.isNode) : [];
  }

  function i() {
    return ++O.uid;
  }

  function o(e, t, n) {
    t.container && (t.container = n), e.config ? e.config = O.tools.extendClone(e.config, t) : e.config = O.tools.extendClone(O.defaults, t), "top" === e.config.origin || "bottom" === e.config.origin ? e.config.axis = "Y" : e.config.axis = "X";
  }

  function r(e) {
    var t = window.getComputedStyle(e.domEl);
    e.styles || (e.styles = {
      transition: {},
      transform: {},
      computed: {}
    }, e.styles.inline = e.domEl.getAttribute("style") || "", e.styles.inline += "; visibility: visible; ", e.styles.computed.opacity = t.opacity, t.transition && "all 0s ease 0s" !== t.transition ? e.styles.computed.transition = t.transition + ", " : e.styles.computed.transition = ""), e.styles.transition.instant = s(e, 0), e.styles.transition.delayed = s(e, e.config.delay), e.styles.transform.initial = " -webkit-transform:", e.styles.transform.target = " -webkit-transform:", a(e), e.styles.transform.initial += "transform:", e.styles.transform.target += "transform:", a(e);
  }

  function s(e, t) {
    var n = e.config;
    return "-webkit-transition: " + e.styles.computed.transition + "-webkit-transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; transition: " + e.styles.computed.transition + "transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; ";
  }

  function a(e) {
    var t,
        n = e.config,
        i = e.styles.transform;
    t = "top" === n.origin || "left" === n.origin ? /^-/.test(n.distance) ? n.distance.substr(1) : "-" + n.distance : n.distance, parseInt(n.distance) && (i.initial += " translate" + n.axis + "(" + t + ")", i.target += " translate" + n.axis + "(0)"), n.scale && (i.initial += " scale(" + n.scale + ")", i.target += " scale(1)"), n.rotate.x && (i.initial += " rotateX(" + n.rotate.x + "deg)", i.target += " rotateX(0)"), n.rotate.y && (i.initial += " rotateY(" + n.rotate.y + "deg)", i.target += " rotateY(0)"), n.rotate.z && (i.initial += " rotateZ(" + n.rotate.z + "deg)", i.target += " rotateZ(0)"), i.initial += "; opacity: " + n.opacity + ";", i.target += "; opacity: " + e.styles.computed.opacity + ";";
  }

  function l(e) {
    var t = e.config.container;
    t && O.store.containers.indexOf(t) === -1 && O.store.containers.push(e.config.container), O.store.elements[e.id] = e;
  }

  function c(e, t, n) {
    var i = {
      target: e,
      config: t,
      interval: n
    };
    O.history.push(i);
  }

  function f() {
    if (O.isSupported()) {
      y();

      for (var e = 0; e < O.store.containers.length; e++) {
        O.store.containers[e].addEventListener("scroll", d), O.store.containers[e].addEventListener("resize", d);
      }

      O.initialized || (window.addEventListener("scroll", d), window.addEventListener("resize", d), O.initialized = !0);
    }

    return O;
  }

  function d() {
    A(y);
  }

  function u() {
    var e, t, n, i;
    O.tools.forOwn(O.sequences, function (o) {
      i = O.sequences[o], e = !1;

      for (var r = 0; r < i.elemIds.length; r++) {
        n = i.elemIds[r], t = O.store.elements[n], q(t) && !e && (e = !0);
      }

      i.active = e;
    });
  }

  function y() {
    var e, t;
    u(), O.tools.forOwn(O.store.elements, function (n) {
      t = O.store.elements[n], e = w(t), g(t) ? (t.config.beforeReveal(t.domEl), e ? t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.target + t.styles.transition.delayed) : t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.target + t.styles.transition.instant), p("reveal", t, e), t.revealing = !0, t.seen = !0, t.sequence && m(t, e)) : v(t) && (t.config.beforeReset(t.domEl), t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.initial + t.styles.transition.instant), p("reset", t), t.revealing = !1);
    });
  }

  function m(e, t) {
    var n = 0,
        i = 0,
        o = O.sequences[e.sequence.id];
    o.blocked = !0, t && "onload" === e.config.useDelay && (i = e.config.delay), e.sequence.timer && (n = Math.abs(e.sequence.timer.started - new Date()), window.clearTimeout(e.sequence.timer)), e.sequence.timer = {
      started: new Date()
    }, e.sequence.timer.clock = window.setTimeout(function () {
      o.blocked = !1, e.sequence.timer = null, d();
    }, Math.abs(o.interval) + i - n);
  }

  function p(e, t, n) {
    var i = 0,
        o = 0,
        r = "after";

    switch (e) {
      case "reveal":
        o = t.config.duration, n && (o += t.config.delay), r += "Reveal";
        break;

      case "reset":
        o = t.config.duration, r += "Reset";
    }

    t.timer && (i = Math.abs(t.timer.started - new Date()), window.clearTimeout(t.timer.clock)), t.timer = {
      started: new Date()
    }, t.timer.clock = window.setTimeout(function () {
      t.config[r](t.domEl), t.timer = null;
    }, o - i);
  }

  function g(e) {
    if (e.sequence) {
      var t = O.sequences[e.sequence.id];
      return t.active && !t.blocked && !e.revealing && !e.disabled;
    }

    return q(e) && !e.revealing && !e.disabled;
  }

  function w(e) {
    var t = e.config.useDelay;
    return "always" === t || "onload" === t && !O.initialized || "once" === t && !e.seen;
  }

  function v(e) {
    if (e.sequence) {
      var t = O.sequences[e.sequence.id];
      return !t.active && e.config.reset && e.revealing && !e.disabled;
    }

    return !q(e) && e.config.reset && e.revealing && !e.disabled;
  }

  function b(e) {
    return {
      width: e.clientWidth,
      height: e.clientHeight
    };
  }

  function h(e) {
    if (e && e !== window.document.documentElement) {
      var t = x(e);
      return {
        x: e.scrollLeft + t.left,
        y: e.scrollTop + t.top
      };
    }

    return {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }

  function x(e) {
    var t = 0,
        n = 0,
        i = e.offsetHeight,
        o = e.offsetWidth;

    do {
      isNaN(e.offsetTop) || (t += e.offsetTop), isNaN(e.offsetLeft) || (n += e.offsetLeft), e = e.offsetParent;
    } while (e);

    return {
      top: t,
      left: n,
      height: i,
      width: o
    };
  }

  function q(e) {
    function t() {
      var t = c + a * s,
          n = f + l * s,
          i = d - a * s,
          y = u - l * s,
          m = r.y + e.config.viewOffset.top,
          p = r.x + e.config.viewOffset.left,
          g = r.y - e.config.viewOffset.bottom + o.height,
          w = r.x - e.config.viewOffset.right + o.width;
      return t < g && i > m && n < w && y > p;
    }

    function n() {
      return "fixed" === window.getComputedStyle(e.domEl).position;
    }

    var i = x(e.domEl),
        o = b(e.config.container),
        r = h(e.config.container),
        s = e.config.viewFactor,
        a = i.height,
        l = i.width,
        c = i.top,
        f = i.left,
        d = c + a,
        u = f + l;
    return t() || n();
  }

  function E() {}

  var O, A;
  e.prototype.defaults = {
    origin: "bottom",
    distance: "20px",
    duration: 500,
    delay: 0,
    rotate: {
      x: 0,
      y: 0,
      z: 0
    },
    opacity: 0,
    scale: .9,
    easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
    container: window.document.documentElement,
    mobile: !0,
    reset: !1,
    useDelay: "always",
    viewFactor: .2,
    viewOffset: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    beforeReveal: function beforeReveal(e) {},
    beforeReset: function beforeReset(e) {},
    afterReveal: function afterReveal(e) {},
    afterReset: function afterReset(e) {}
  }, e.prototype.isSupported = function () {
    var e = document.documentElement.style;
    return "WebkitTransition" in e && "WebkitTransform" in e || "transition" in e && "transform" in e;
  }, e.prototype.reveal = function (e, s, a, d) {
    var u, y, m, p, g, w;
    if (void 0 !== s && "number" == typeof s ? (a = s, s = {}) : void 0 !== s && null !== s || (s = {}), u = t(s), y = n(e, u), !y.length) return O;
    a && "number" == typeof a && (w = i(), g = O.sequences[w] = {
      id: w,
      interval: a,
      elemIds: [],
      active: !1
    });

    for (var v = 0; v < y.length; v++) {
      p = y[v].getAttribute("data-sr-id"), p ? m = O.store.elements[p] : (m = {
        id: i(),
        domEl: y[v],
        seen: !1,
        revealing: !1
      }, m.domEl.setAttribute("data-sr-id", m.id)), g && (m.sequence = {
        id: g.id,
        index: g.elemIds.length
      }, g.elemIds.push(m.id)), o(m, s, u), r(m), l(m), O.tools.isMobile() && !m.config.mobile || !O.isSupported() ? (m.domEl.setAttribute("style", m.styles.inline), m.disabled = !0) : m.revealing || m.domEl.setAttribute("style", m.styles.inline + m.styles.transform.initial);
    }

    return !d && O.isSupported() && (c(e, s, a), O.initTimeout && window.clearTimeout(O.initTimeout), O.initTimeout = window.setTimeout(f, 0)), O;
  }, e.prototype.sync = function () {
    if (O.history.length && O.isSupported()) {
      for (var e = 0; e < O.history.length; e++) {
        var t = O.history[e];
        O.reveal(t.target, t.config, t.interval, !0);
      }

      f();
    }

    return O;
  }, E.prototype.isObject = function (e) {
    return null !== e && "object" == _typeof(e) && e.constructor === Object;
  }, E.prototype.isNode = function (e) {
    return "object" == _typeof(window.Node) ? e instanceof window.Node : e && "object" == _typeof(e) && "number" == typeof e.nodeType && "string" == typeof e.nodeName;
  }, E.prototype.isNodeList = function (e) {
    var t = Object.prototype.toString.call(e),
        n = /^\[object (HTMLCollection|NodeList|Object)\]$/;
    return "object" == _typeof(window.NodeList) ? e instanceof window.NodeList : e && "object" == _typeof(e) && n.test(t) && "number" == typeof e.length && (0 === e.length || this.isNode(e[0]));
  }, E.prototype.forOwn = function (e, t) {
    if (!this.isObject(e)) throw new TypeError('Expected "object", but received "' + _typeof(e) + '".');

    for (var n in e) {
      e.hasOwnProperty(n) && t(n);
    }
  }, E.prototype.extend = function (e, t) {
    return this.forOwn(t, function (n) {
      this.isObject(t[n]) ? (e[n] && this.isObject(e[n]) || (e[n] = {}), this.extend(e[n], t[n])) : e[n] = t[n];
    }.bind(this)), e;
  }, E.prototype.extendClone = function (e, t) {
    return this.extend(this.extend({}, e), t);
  }, E.prototype.isMobile = function () {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }, A = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e) {
    window.setTimeout(e, 1e3 / 60);
  },  true && "object" == _typeof(__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js")) && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js") ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return e;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) :  true && module.exports ? module.exports = e : window.ScrollReveal = e;
}();

/***/ }),

/***/ "./resources/js/plugins/sticky.js":
/*!****************************************!*\
  !*** ./resources/js/plugins/sticky.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Sticky Plugin v1.0.4 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 02/14/2011
// Date: 07/20/2015
// Website: http://stickyjs.com/
// Description: Makes an element on the page stick on the screen as you scroll
//              It will only set the 'top' and 'position' of your element, you
//              might need to adjust the width in some cases.
(function (factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(function ($) {
  var slice = Array.prototype.slice; // save ref to original slice()

  var splice = Array.prototype.splice; // save ref to original slice()

  var defaults = {
    topSpacing: 0,
    bottomSpacing: 0,
    className: 'is-sticky',
    wrapperClassName: 'sticky-wrapper',
    center: false,
    getWidthFrom: '',
    widthFromWrapper: true,
    // works only when .getWidthFrom is empty
    responsiveWidth: false,
    zIndex: 'inherit'
  },
      $window = $(window),
      $document = $(document),
      sticked = [],
      windowHeight = $window.height(),
      scroller = function scroller() {
    var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = scrollTop > dwh ? dwh - scrollTop : 0;

    for (var i = 0, l = sticked.length; i < l; i++) {
      var s = sticked[i],
          elementTop = s.stickyWrapper.offset().top,
          etse = elementTop - s.topSpacing - extra; //update height in case of dynamic content

      s.stickyWrapper.css('height', s.stickyElement.outerHeight());

      if (scrollTop <= etse) {
        if (s.currentTop !== null) {
          s.stickyElement.css({
            'width': '',
            'position': '',
            'top': '',
            'z-index': ''
          });
          s.stickyElement.parent().removeClass(s.className);
          s.stickyElement.trigger('sticky-end', [s]);
          s.currentTop = null;
        }
      } else {
        var newTop = documentHeight - s.stickyElement.outerHeight() - s.topSpacing - s.bottomSpacing - scrollTop - extra;

        if (newTop < 0) {
          newTop = newTop + s.topSpacing;
        } else {
          newTop = s.topSpacing;
        }

        if (s.currentTop !== newTop) {
          var newWidth;

          if (s.getWidthFrom) {
            padding = s.stickyElement.innerWidth() - s.stickyElement.width();
            newWidth = $(s.getWidthFrom).width() - padding || null;
          } else if (s.widthFromWrapper) {
            newWidth = s.stickyWrapper.width();
          }

          if (newWidth == null) {
            newWidth = s.stickyElement.width();
          }

          s.stickyElement.css('width', newWidth).css('position', 'fixed').css('top', newTop).css('z-index', s.zIndex);
          s.stickyElement.parent().addClass(s.className);

          if (s.currentTop === null) {
            s.stickyElement.trigger('sticky-start', [s]);
          } else {
            // sticky is started but it have to be repositioned
            s.stickyElement.trigger('sticky-update', [s]);
          }

          if (s.currentTop === s.topSpacing && s.currentTop > newTop || s.currentTop === null && newTop < s.topSpacing) {
            // just reached bottom || just started to stick but bottom is already reached
            s.stickyElement.trigger('sticky-bottom-reached', [s]);
          } else if (s.currentTop !== null && newTop === s.topSpacing && s.currentTop < newTop) {
            // sticky is started && sticked at topSpacing && overflowing from top just finished
            s.stickyElement.trigger('sticky-bottom-unreached', [s]);
          }

          s.currentTop = newTop;
        } // Check if sticky has reached end of container and stop sticking


        var stickyWrapperContainer = s.stickyWrapper.parent();
        var unstick = s.stickyElement.offset().top + s.stickyElement.outerHeight() >= stickyWrapperContainer.offset().top + stickyWrapperContainer.outerHeight() && s.stickyElement.offset().top <= s.topSpacing;

        if (unstick) {
          s.stickyElement.css('position', 'absolute').css('top', '').css('bottom', 0).css('z-index', '');
        } else {
          s.stickyElement.css('position', 'fixed').css('top', newTop).css('bottom', '').css('z-index', s.zIndex);
        }
      }
    }
  },
      resizer = function resizer() {
    windowHeight = $window.height();

    for (var i = 0, l = sticked.length; i < l; i++) {
      var s = sticked[i];
      var newWidth = null;

      if (s.getWidthFrom) {
        if (s.responsiveWidth) {
          newWidth = $(s.getWidthFrom).width();
        }
      } else if (s.widthFromWrapper) {
        newWidth = s.stickyWrapper.width();
      }

      if (newWidth != null) {
        s.stickyElement.css('width', newWidth);
      }
    }
  },
      methods = {
    init: function init(options) {
      return this.each(function () {
        var o = $.extend({}, defaults, options);
        var stickyElement = $(this);
        var stickyId = stickyElement.attr('id');
        var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName;
        var wrapper = $('<div></div>').attr('id', wrapperId).addClass(o.wrapperClassName);
        stickyElement.wrapAll(function () {
          if ($(this).parent("#" + wrapperId).length == 0) {
            return wrapper;
          }
        });
        var stickyWrapper = stickyElement.parent();

        if (o.center) {
          stickyWrapper.css({
            width: stickyElement.outerWidth(),
            marginLeft: "auto",
            marginRight: "auto"
          });
        }

        if (stickyElement.css("float") === "right") {
          stickyElement.css({
            "float": "none"
          }).parent().css({
            "float": "right"
          });
        }

        o.stickyElement = stickyElement;
        o.stickyWrapper = stickyWrapper;
        o.currentTop = null;
        sticked.push(o);
        methods.setWrapperHeight(this);
        methods.setupChangeListeners(this);
      });
    },
    setWrapperHeight: function setWrapperHeight(stickyElement) {
      var element = $(stickyElement);
      var stickyWrapper = element.parent();

      if (stickyWrapper) {
        stickyWrapper.css('height', element.outerHeight());
      }
    },
    setupChangeListeners: function setupChangeListeners(stickyElement) {
      if (window.MutationObserver) {
        var mutationObserver = new window.MutationObserver(function (mutations) {
          if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) {
            methods.setWrapperHeight(stickyElement);
          }
        });
        mutationObserver.observe(stickyElement, {
          subtree: true,
          childList: true
        });
      } else {
        if (window.addEventListener) {
          stickyElement.addEventListener('DOMNodeInserted', function () {
            methods.setWrapperHeight(stickyElement);
          }, false);
          stickyElement.addEventListener('DOMNodeRemoved', function () {
            methods.setWrapperHeight(stickyElement);
          }, false);
        } else if (window.attachEvent) {
          stickyElement.attachEvent('onDOMNodeInserted', function () {
            methods.setWrapperHeight(stickyElement);
          });
          stickyElement.attachEvent('onDOMNodeRemoved', function () {
            methods.setWrapperHeight(stickyElement);
          });
        }
      }
    },
    update: scroller,
    unstick: function unstick(options) {
      return this.each(function () {
        var that = this;
        var unstickyElement = $(that);
        var removeIdx = -1;
        var i = sticked.length;

        while (i-- > 0) {
          if (sticked[i].stickyElement.get(0) === that) {
            splice.call(sticked, i, 1);
            removeIdx = i;
          }
        }

        if (removeIdx !== -1) {
          unstickyElement.unwrap();
          unstickyElement.css({
            'width': '',
            'position': '',
            'top': '',
            'float': '',
            'z-index': ''
          });
        }
      });
    }
  }; // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):


  if (window.addEventListener) {
    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', resizer, false);
  } else if (window.attachEvent) {
    window.attachEvent('onscroll', scroller);
    window.attachEvent('onresize', resizer);
  }

  $.fn.sticky = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (_typeof(method) === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };

  $.fn.unstick = function (method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (_typeof(method) === 'object' || !method) {
      return methods.unstick.apply(this, arguments);
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };

  $(function () {
    setTimeout(scroller, 0);
  });
});

/***/ }),

/***/ "./resources/sass/admin/admin.scss":
/*!*****************************************!*\
  !*** ./resources/sass/admin/admin.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***********************************************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ./resources/sass/admin/admin.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/vagrant/code/resources/js/app.js */"./resources/js/app.js");
__webpack_require__(/*! /home/vagrant/code/resources/sass/app.scss */"./resources/sass/app.scss");
module.exports = __webpack_require__(/*! /home/vagrant/code/resources/sass/admin/admin.scss */"./resources/sass/admin/admin.scss");


/***/ })

},[[0,"/js/manifest","/js/vendor"]]]);