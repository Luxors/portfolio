<?php
    function render_timer($id)
    {
?>
            <!-- ТАЙМЕР (начало) -->
            <div class="timer timer<?=$id;?>" id='clock<?=$id;?>'>
                <div class="timer_body">
                    <!--<div class="timer_block timer_months">
                            <span class="timer_month0 timer_digit">0</span>
                            <span class="timer_month1 timer_digit">0</span>
                            <span class="timer_field_title">месяцев</span>
                        </div>
                        <span class="timer_hour_splitter">:</span>
                    -->
                    <div class="timer_block timer_days">
                        <div class="timer_digit_wrap"><div class="timer_day1 timer_digit">0</div></div>
                        <div class="timer_digit_wrap"><div class="timer_day2 timer_digit">0</div></div>
                        <div class="timer_field_title">дней</div>
                    </div
                    ><div class="timer_hour_splitter">:</div
                    ><div class="timer_block timer_hours">
                        <div class="timer_digit_wrap"><div class="timer_hour0 timer_digit">0</div></div>
                        <div class="timer_digit_wrap"><div class="timer_hour1 timer_digit">0</div></div>
                        <div class="timer_field_title">часов</div>
                    </div
                    ><div class="timer_hour_splitter">:</div
                    ><div class="timer_block timer_mins">
                        <div class="timer_digit_wrap"><div class="timer_min0 timer_digit">0</div></div>
                        <div class="timer_digit_wrap"><div id="min1" class="timer_min1 timer_digit">0</div></div>
                        <div class="timer_field_title">минут</div>
                    </div
                    ><div class="timer_hour_splitter">:</div
                    ><div class="timer_block timer_secs">
                        <div class="timer_digit_wrap"><div class="timer_sec0 timer_digit">0</div></div>
                        <div class="timer_digit_wrap"><div class="timer_sec1 timer_digit">0</div></div>
                        <div class="timer_field_title">секунд</div>
                    </div>
                </div>
                <div style="clear: both;"></div>
            </div><!-- .timer -->
            <!-- ТАЙМЕР (окончание) -->

<?php
    }

?>