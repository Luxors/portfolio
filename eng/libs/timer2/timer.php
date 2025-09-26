<?php
    function render_timer($id)
    {
?>
            <!-- ТАЙМЕР (начало) -->
            <div class="timer timer<?=$id;?>" id='clock<?=$id;?>'>
                <div class="timer_body">
<!--
                
                    <div class="timer_block timer_months">
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

    function render_timer_old($id)
    {
?>
			<!-- ТАЙМЕР (начало) -->
        	<div class="timer timer<?=$id;?>">
    	        <div id='clock<?=$id;?>' class="timer_clock">
<!--        	                <div id="month">-->
<!--        	                    <span id="month0" class="timer_month0 timer_digit"></span>-->
<!--        	                    <span id="month1" class="timer_month1 timer_digit"></span>-->
<!--        	                </div>-->
<!--      	            <div class="timer_clock_block timer_block_days">
    	                <span class="timer_day0 timer_digit"></span>
    	                <span class="timer_day1 timer_digit"></span>
    	                <span class="timer_day2 timer_digit"></span>
    	                <span class="timer_hour_splitter">:</span>
    	            </div>
 -->
     	            <div class="timer_clock_block timer_block_hours">
    	                <span class="timer_hour0 timer_digit">0</span>
    	                <span class="timer_hour1 timer_digit">0</span>
    	                <span class="timer_hour_splitter">:</span>
    	            </div>
    	            <div class="timer_clock_block timer_block_mins">
    	                <span class="timer_min0 timer_digit">0</span>
    	                <span id="min1" class="timer_min1 timer_digit">0</span>
    	                <span class="timer_hour_splitter">:</span>
    	            </div>
    	            <div class="timer_clock_block timer_block_secs">
    	                <span class="timer_sec0 timer_digit">0</span>
    	                <span class="timer_sec1 timer_digit">0</span>
    	            </div>
    	            <div style="clear: both;"></div>
    	        </div><!-- #clock -->

    	        <div class="timer_header">
    	            <p class="period">
    	                <!-- <span class="timer_header_day timer_header_block">Дней</span> -->
    	                <span class="timer_header_hour timer_header_block">Часов</span>
    	                <span class="timer_header_min timer_header_block">Минут</span>
    	                <span class="timer_header_sec timer_header_block">Секунд</span>
    	            </p>
    	            <div class="hidden"></div>
    	        </div><!-- #timer_wrap -->
        	</div><!-- .timer -->
        	<!-- ТАЙМЕР (окончание) -->
<?php
    }

?>