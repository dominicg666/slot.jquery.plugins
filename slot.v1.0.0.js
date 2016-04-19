/*!
 * Slot v1.0.0
 * Docs & License: http://dreamidea.in/plugins/slot
 * (c) 2015 Dominic George
 */

/*
 * Use slot_v1.0.0.css for basic styling.
 */



(function ($) {
    var __json_data = [];

    $.fn.slot = function (  ) {

        // This is the easiest way to have default options.
        var defaults = {
            textColor: "#000",
            backColor: "#fff",
            fontSize: "1em",
            delay: "quite long",
            series: []
        };

        var options = $.extend({
        }, arguments[0] || {});

        // defualt extention
//     var options = $.extend({
//        SlotClick: function() {},serializeClick:function() {}
//    }, arguments[0] || {});


        var selected = function (data, ____THIS) {
            if (____THIS.attr('select-id') == '0')
            {

                __json_data.push({"cl": ____THIS.attr('data-cl'), "rw": ____THIS.attr('data-id'), "data": data});
                ____THIS.attr('select-id', '1');
                ____THIS.addClass('button-success');
            } else {

                $.each(__json_data, function (key, data1) {
                    if (data1.cl == ____THIS.attr('data-cl') && data1.rw == ____THIS.attr('data-id')) {

                        __json_data.splice(key, 1);
                        ____THIS.attr('select-id', '0');
                        ____THIS.removeClass('button-success');
                        return false;

                    }
                });

            }

            var __cr = 0;
            var __sel_json = [];
            $.each(__json_data, function (key2, data2) {
                __cr++;
                __sel_json.push(data2.data);
            });
            $('.f-foo').find('label').html(__cr);
            return __sel_json;
        };


        // serialize

        var serialize_selected = function (data, ____THIS, id) {


            if (____THIS.attr('select-id') == '0')
            {

                __json_data.push({id: id, data: data});
                ____THIS.attr('select-id', '1');
                ____THIS.addClass('button-success');
            } else {

                $.each(__json_data, function (key, data1) {
                    if (data1.id == id) {
                        __json_data.splice(key, 1);
                        ____THIS.attr('select-id', '0');
                        ____THIS.removeClass('button-success');
                    }
                });

            }
            var __cr = 0;
            var __sel_json = [];
            $.each(__json_data, function (key, data1) {
                __cr++;
                __sel_json.push(data1.data);
            });
            $('.f-foo').find('label').html(__cr);
            return __sel_json;
        };

        var settings = $.extend({}, defaults, options);

        // Greenify the collection based on the settings variable.
        return this.each(function () {
            // Plugin code would go here...
            var __this = $(this);
            $(this).css({
                color: settings.color,
                backgroundColor: settings.backColor,
                fontSize: settings.fontSize
            });
            __this.addClass('ui-slot');
            // click event
            $(this).on('click', '.ui-slot-r', function (e) {
                if (options.serializeClick !== undefined)
                {
                    var ___index = [];
                    if (options.serializeInput !== undefined)
                    {
                        ___val = $(options.serializeInput).val();
                    } else {
                        ___val = prompt("Please enter value");
                    }
                    var __count = 1;
                    var ___this = $(this);
                    for (var i = 1; i <= ___val; i++)
                    {
                        if (___this.attr('d-id') == 0) {

                            __count++;


                            ___this = ___this.next();

                        } else if (___this.attr('d-id') === undefined) {
                            return false;
                        } else {
                            return false;
                        }
                    }
                    if (parseInt(___val) <= __count) {
                        ___this = $(this);
                        ___this.parents('rows-slot').find('a').each(function () {
                            $.each(__json_data, function (key, data1) {
                                __json_data.splice(key, 1);

                            });
                            $(this).attr('select-id', '0');
                            $(this).removeClass('button-success');
                        });


                        for (var i = 1; i <= ___val; i++)
                        {
                            if (___this.attr('d-id') == 0) {
                                var __p = serialize_selected(settings.series[___this.attr('data-cl')].data[___this.attr('data-id')], ___this, ___this.attr('data-id'));
                                ___index.push({col: ___this.attr('data-cl'), rw: ___this.attr('data-id')});
                                ___this = ___this.next();

                            }
                        }
                    }

                    return  options.serializeClick(___index, __p);

                } else {
                    if (options.SlotClick !== undefined) {
                        var __p = selected(settings.series[$(this).attr('data-cl')].data[$(this).attr('data-id')], $(this));
                        var ___index = {col: $(this).attr('data-cl'), rw: $(this).attr('data-id')};
                        return  options.SlotClick(___index, settings.series[$(this).attr('data-cl')].data[$(this).attr('data-id')], __p);
                        //__this.data('index', $(this).index());
                    }
                }


            });


            var _c = '<lf class="lf-cl">';
            $.each(settings.series, function (i, val) {
                if (val.color !== undefined)
                    color = val.color;
                else
                    color = '#28547c';
                _c += '<tf-row class="tf-row"><tf class="ui-slot-tf button-secondary" style="background: ' + color + ';" >' + val.name + '</tf> </tf-row>';
            });
            _c += '</lf><rows-slot class="rows-slot">';

            $.each(settings.series, function (i, val) {
                _c += '<c class="ui-slot-c"> <cl class="ui-slot-cl">';
                if (val.color !== undefined)
                    color = val.color;
                else
                    color = '#28547c';


                _c += '<tf-row class="tf-row"><tf class="ui-slot-tf button-secondary " style="background:' + color + ';" >' + val.name + '</tf> </tf-row>';
                $.each(val.data, function (j, value) {

                    if (value.color !== undefined)
                        color = value.color;
                    else
                        color = '#5da1e0';
                    var __d = 0;
                    if (value.disabled !== undefined) {
                        disabled = 'pure-button-disabled';
                        __d = 1;
                        color = '#5da1e0';
                    } else
                        disabled = '';

                    if (value.selected !== undefined) {
                        sel = 1;
                        disabled = 'button-success';
                        color = '';
                    } else
                        sel = 0;

                    _c += ' <a class="ui-slot-r button-secondary ' + disabled + '" d-id=' + __d + ' style="background: ' + color + ';" select-id="' + sel + '" data-cl=' + i + ' data-id=' + j + '>' + value.name + '</a>';
                });
                _c += ' </cl> </c>';

            });
            _c += '<hr/> <f-foo class="f-foo"> <a class="ui-slot-r button-secondary pure-button-disabled" style="background: #5da1e0;" >&nbsp;&nbsp;&nbsp;&nbsp;</a> Disabled</f-foo>\n\
 <f-foo class="f-foo"> <fa class="ui-slot-r button-secondary button-success"  >&nbsp;&nbsp;&nbsp;&nbsp;</fa> Selected (<label id="selected"></label>)</f-foo></rows-slot> ';

            $(this).append(_c);



        });


    };

}(jQuery));