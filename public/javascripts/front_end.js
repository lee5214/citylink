/**
 * Created by lee on 9/10/16.
 */
$('#post_btn').on('click',function(){
    $('#submit_form').slideToggle();
})
$('#btn_driver').on('click',function(){
    console.log('btn driver');
    $('#driver_form').show();
    $('#passenger_form').hide();
});

$('#btn_passenger').on('click',function(){
    console.log('btn driver');
    $('#driver_form').hide();
    $('#passenger_form').show();
});

$('.section_btn').on('click', function(){
    $('#welcome_container').fadeToggle();
});