PageTimers = 
{
    // Москва: GMT+3
    moscow_GMT : -3
,   week_days : ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота']
,   months_days : [ 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль'
                  , 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

,   months_days2 : ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля'
                   , 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']

,   timers : []

    // разница локального времени с Москвой в миллисекундах
,   moscow_time_offset : function ()
    {
        return ( - (new Date()).getTimezoneOffset() + this.moscow_GMT * 60)*60*1000;
    }
    // вычисляет локальное время, соответствующее указанному московскому времени
,   convert_moscow_to_local : function(moscow)
    {
        return new Date(moscow.getTime() + this.moscow_time_offset() );
    }
    // вычисляет московское время, соответствующее указанному локальному времени
,   convert_local_to_moscow : function(local)
    {
        return new Date(local.getTime() - this.moscow_time_offset() );
    }
,   add : function (date, id, callback, opts)
    {
        this.timers.push({date: date, id: id, callback : callback, opts: opts || {}});
    }
,   run : function ()
    {
        for ( var i=0; i<this.timers.length; ++i )
            this.update_timer(this.timers[i]);
        var PT = this;

        setTimeout( function(){ PT.run(); }, 1000);
    }
,   animate : function (obj)
    {
        obj.css({
            'opacity' : '0'
        }).animate({
            'opacity' : '1'
        })
    }
,   next_digit : function (timer, id, value, animate)
    {
        var parent_selector = timer.id ? timer.id+' ' : '';
        var obj = $(parent_selector+".timer_"+id);

        if (obj && obj.length>0)
        {
            obj.html(value);
            if ( animate )  this.animate (obj);   
        }

    }
,   update_timer : function(timer)
    {
        var dateEnd = timer.date;
        var parent_selector = timer.id ? timer.id+' ' : '';

        var date = new Date();
        var dt = dateEnd - date;
        
//        var months = dateEnd.getMonth() - date.getMonth();
        if ( timer.id !== '' && dateEnd > date )
        {
            var day = Math.floor (dt / (60 * 60 * 1000 * 24));
            var hour = Math.floor (dt / (60 * 60 * 1000)) % 24;
            var min = Math.floor (dt / (1000 * 60)) % 60;
            var sec = Math.floor (dt / 1000) % 60;


            var min_end   = sec  == 59;
            var hour_end  = (min  == 59) && min_end ;
            var day_end   = (hour == 23) && hour_end;
            var day99_end = (day%100  == 99) && day_end;

            function zeroes (num, len)
            {
                if ( !len ) len = 2;
                num += '';
                while (num.length < len) num = '0'+num;
                return num;
            }

            day  = zeroes (day, 3);
            hour = zeroes (hour + (timer.opts['hidden_days'] ? parseInt(day)*24 : 0) );
            min  = zeroes (min);
            sec  = zeroes (sec);

            var digits = [
                /*  field id   |   new value   |   do animation */
                ["day0", day[0], day99_end]
            ,   ["day1", day[1], day[2] == 9 && day_end]
            ,   ["day2", day[2], day_end]

            ,   ["hour0", hour[0], day_end || hour[1] == 9 && hour_end]
            ,   ["hour1", hour[1], hour_end]

            ,   ["min0", min[0], min[1] == 9 && min_end]
            ,   ["min1", min[1], min_end]

            ,   ["sec0", sec[0], sec[1] == 9]
            ,   ["sec1", sec[1], true]
            ]

            for (var i=0; i<digits.length; ++i )
                this.next_digit(timer, digits[i][0], digits[i][1], digits[i][2]);

        }
        
        if (timer.callback) timer.callback(timer, date, dateEnd <= date);
    }

,   nearest_week_day_time_in_msk : function(day, h, m)
    {
        var local_time = new Date();
        var d1 = PageTimers.convert_local_to_moscow(new Date());
        var d2 = new Date(d1.getTime());

        d2.setHours(h);
        d2.setMinutes(m);

        var t1 = d1.getTime(), t2 = d2.getTime();

        var days_until_day = (day + 7 - d1.getDay())%7;
        if ( days_until_day <= 0 &&  t2 < t1 ) days_until_day = 7;
        
        var dt = t2 + days_until_day*24*60*60*1000 - t1;


        return new Date( local_time.getTime() + dt );
    }

,   time_add_days : function (date, days)
    {
        return new Date( date.getTime() + days*24*60*60*1000 );
    }
    
}

$(document).ready(function ()
{
    PageTimers.run();
});
