// @ts-nocheck

/**
 *
 * DEFAULT VALUES
 *
 */
const default_style = 1;
const default_size = 24;
const default_margin_h = 4;
const default_margin_v = 4;

const default_inverse_ratio = 9;
const default_line_spacing = 0;

const default_logo = true;
const default_logo_size = 0;
const default_logo_size_em = 3.5;
const default_shadow = false;
const default_shadow_amount = 5;
const default_shadow_amount_em = 0.5;
const default_background = true;
const default_style_color_1 = '#D54141';
const default_style_color_2 = '#222222';

const default_corners = 0;
const default_border_thickness = false;
const default_border_thickness_amount = 0;
const default_border_color = false;
const default_style_color_3 = '#D54141';
const default_style_color_4 = '#222222';

const default_name_transform = true;
const default_name_weight = true;
const default_name_color = '#F2F2F2';

const default_info_transform = false;
const default_info_weight = false;
const default_info_color = '#8A8A8A';

function loadDefaultValues() {
    $("[id^=alt-][id$=-style]").val(default_style);
    $("[id^=alt-][id$=-size]").val(default_size);
    $("[id^=alt-][id$=-margin-h]").val(default_margin_h);
    $("[id^=alt-][id$=-margin-v]").val(default_margin_v);

    $("[id^=alt-][id$=-inverse-ratio]").val(default_inverse_ratio);
    $("[id^=alt-][id$=-line-spacing]").val(default_line_spacing);

    $("[id^=alt-][id$=-logo]").prop('checked', default_logo);
    $("[id^=alt-][id$=-logo-size]").val(default_logo_size);
    $("[id^=alt-][id$=-shadow]").prop('checked', default_shadow);
    $("[id^=alt-][id$=-shadow-amount]").val(default_shadow_amount);
    $("[id^=alt-][id$=-background]").val('checked', default_background);
    $("[id^=alt-][id$=-style-color-1]").val(default_style_color_1);
    $("[id^=alt-][id$=-style-color-2]").val(default_style_color_2);

    $("[id^=alt-][id$=-corners]").val(default_corners);
    $("[id^=alt-][id$=-border-thickness]").prop('checked', default_border_thickness);
    $("[id^=alt-][id$=-border-thickness-amount]").val(default_border_thickness_amount);
    $("[id^=alt-][id$=-border-color]").prop('checked', default_border_color);
    $("[id^=alt-][id$=-style-color-3]").val(default_style_color_3);
    $("[id^=alt-][id$=-style-color-4]").val(default_style_color_4);

    $("[id^=alt-][id$=-name-transform]").prop('checked', default_name_transform);
    $("[id^=alt-][id$=-name-weight]").prop('checked', default_name_weight);
    $("[id^=alt-][id$=-name-color]").val(default_name_color);

    $("[id^=alt-][id$=-info-transform]").prop('checked', default_info_transform);
    $("[id^=alt-][id$=-info-weight]").prop('checked', default_info_weight);
    $("[id^=alt-][id$=-info-color]").val(default_info_color);
}


var bc = new BroadcastChannel('obs-lower-thirds-channel'); //Send to browser source
var bcr = new BroadcastChannel('obs-lower-thirds-channel2'); //Receives from the source
var bcf = new BroadcastChannel('obs-lower-thirds-fonts'); //Send custom fonts
        

var slotDeleted = false;

var new_font_to_send;

var alt_1_active_time_monitor;
var alt_1_inactive_time_monitor;
var alt_2_active_time_monitor;
var alt_2_inactive_time_monitor;
var alt_3_active_time_monitor;
var alt_3_inactive_time_monitor;
var alt_4_active_time_monitor;
var alt_4_inactive_time_monitor;


var alt_1_autoload;
var alt_1_jumpnext;
var alt_2_autoload;
var alt_2_jumpnext;
var alt_3_autoload;
var alt_3_jumpnext;
var alt_4_autoload;
var alt_4_jumpnext;

var alt_1_autotrigger;
var alt_2_autotrigger;
var alt_3_autotrigger;
var alt_4_autotrigger;

var global_oneshot;
var alt_1_oneshot;
var alt_2_oneshot;
var alt_3_oneshot;
var alt_4_oneshot;

var global_lock_active;
var alt_1_lock_active;
var alt_2_lock_active;
var alt_3_lock_active;
var alt_4_lock_active;

var alt_1_logo_default = "../logos/logo_1.png";
var alt_2_logo_default = "../logos/logo_2.png";
var alt_3_logo_default = "../logos/logo_3.png";
var alt_4_logo_default = "../logos/logo_4.png";

var alt_1_style = default_style;
var alt_1_inverse_ratio = default_inverse_ratio;
var alt_1_name_size;
var alt_1_info_size;
var alt_1_size;
var alt_1_line_spacing;
var alt_1_margin_h;
var alt_1_margin_v;
var alt_1_shadows;
var alt_1_font;
var alt_1_logo_size;
var alt_1_shadow_amount;
var alt_1_corners;
var alt_1_border_thickness_amount;

var alt_1_corners;
var alt_1_border_thickness_amount;

var alt_2_style = default_style;
var alt_2_inverse_ratio = default_inverse_ratio;
var alt_2_name_size;
var alt_2_info_size;
var alt_2_size;
var alt_2_line_spacing;
var alt_2_margin_h;
var alt_2_margin_v;
var alt_2_shadows;
var alt_2_font;
var alt_2_logo_size;
var alt_2_shadow_amount;
var alt_2_corners;
var alt_2_border_thickness_amount;

var alt_3_style = default_style;
var alt_3_inverse_ratio = default_inverse_ratio;
var alt_3_name_size;
var alt_3_info_size;
var alt_3_size;
var alt_3_line_spacing;
var alt_3_margin_h;
var alt_3_margin_v;
var alt_3_shadows;
var alt_3_font;
var alt_3_logo_size;
var alt_3_shadow_amount;
var alt_3_corners;
var alt_3_border_thickness_amount;

var alt_4_style = default_style;
var alt_4_inverse_ratio = default_inverse_ratio;
var alt_4_name_size;
var alt_4_info_size;
var alt_4_size;
var alt_4_line_spacing;
var alt_4_margin_h;
var alt_4_margin_v;
var alt_4_shadows;
var alt_4_font;
var alt_4_logo_size;
var alt_4_shadow_amount;
var alt_4_corners;
var alt_4_border_thickness_amount;

var hotkeyMasterSwitchOld = hotkeyMasterSwitch;
var hotkeySwitch1Old = hotkeySwitch1;
var hotkeySwitch2Old = hotkeySwitch2;
var hotkeySwitch3Old = hotkeySwitch3;
var hotkeySwitch4Old = hotkeySwitch4;

var hotkeyAlt1Slot1Old = hotkeyAlt1Slot1;
var hotkeyAlt1Slot2Old = hotkeyAlt1Slot2;
var hotkeyAlt1Slot3Old = hotkeyAlt1Slot3;
var hotkeyAlt1Slot4Old = hotkeyAlt1Slot4;
var hotkeyAlt1Slot5Old = hotkeyAlt1Slot5;
var hotkeyAlt1Slot6Old = hotkeyAlt1Slot6;
var hotkeyAlt1Slot7Old = hotkeyAlt1Slot7;
var hotkeyAlt1Slot8Old = hotkeyAlt1Slot8;
var hotkeyAlt1Slot9Old = hotkeyAlt1Slot9;
var hotkeyAlt1Slot10Old = hotkeyAlt1Slot10;

var hotkeyAlt2Slot1Old = hotkeyAlt2Slot1;
var hotkeyAlt2Slot2Old = hotkeyAlt2Slot2;
var hotkeyAlt2Slot3Old = hotkeyAlt2Slot3;
var hotkeyAlt2Slot4Old = hotkeyAlt2Slot4;
var hotkeyAlt2Slot5Old = hotkeyAlt2Slot5;
var hotkeyAlt2Slot6Old = hotkeyAlt2Slot6;
var hotkeyAlt2Slot7Old = hotkeyAlt2Slot7;
var hotkeyAlt2Slot8Old = hotkeyAlt2Slot8;
var hotkeyAlt2Slot9Old = hotkeyAlt2Slot9;
var hotkeyAlt2Slot10Old = hotkeyAlt2Slot10;			

var hotkeyAlt3Slot1Old = hotkeyAlt3Slot1;
var hotkeyAlt3Slot2Old = hotkeyAlt3Slot2;
var hotkeyAlt3Slot3Old = hotkeyAlt3Slot3;
var hotkeyAlt3Slot4Old = hotkeyAlt3Slot4;
var hotkeyAlt3Slot5Old = hotkeyAlt3Slot5;
var hotkeyAlt3Slot6Old = hotkeyAlt3Slot6;
var hotkeyAlt3Slot7Old = hotkeyAlt3Slot7;
var hotkeyAlt3Slot8Old = hotkeyAlt3Slot8;
var hotkeyAlt3Slot9Old = hotkeyAlt3Slot9;
var hotkeyAlt3Slot10Old = hotkeyAlt3Slot10;

var hotkeyAlt4Slot1Old = hotkeyAlt4Slot1;
var hotkeyAlt4Slot2Old = hotkeyAlt4Slot2;
var hotkeyAlt4Slot3Old = hotkeyAlt4Slot3;
var hotkeyAlt4Slot4Old = hotkeyAlt4Slot4;
var hotkeyAlt4Slot5Old = hotkeyAlt4Slot5;
var hotkeyAlt4Slot6Old = hotkeyAlt4Slot6;
var hotkeyAlt4Slot7Old = hotkeyAlt4Slot7;
var hotkeyAlt4Slot8Old = hotkeyAlt4Slot8;
var hotkeyAlt4Slot9Old = hotkeyAlt4Slot9;
var hotkeyAlt4Slot10Old = hotkeyAlt4Slot10;

var alt_1_turnoff = false;
var alt_2_turnoff = false;
var alt_3_turnoff = false;
var alt_4_turnoff = false;

var acc = document.getElementsByClassName("accordion");
for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function () {
        this.classList.toggle("active");
        var hidable = this.nextElementSibling;
        if (hidable.style.maxHeight) {
            hidable.style.maxHeight = null;
        } else {
            hidable.style.maxHeight = hidable.scrollHeight + "px";
        }
    }
}

var more = document.getElementsByClassName("more");
for (var i = 0; i < more.length; i++) {
    more[i].onclick = function () {
        this.classList.toggle("active");
        var hideMore = this.nextElementSibling;
        if (hideMore.style.maxHeight) {
            hideMore.style.maxHeight = null;
        } else {
            hideMore.style.maxHeight = hideMore.scrollHeight + "px";

            //Increase the heigh of the main settings panel
            var hidable = document.getElementById("global-configuration").style.maxHeight;
            hidable = Number(hidable.replace(/px/g, ''));
            document.getElementById("global-configuration").style.maxHeight = hidable + hideMore.scrollHeight + "px";
        }
    }
}

function updateMoreMaxHeight() {
    const element = document.getElementsByClassName("more")[0];
    if ($('#more-settings').css('max-height') != "0px") {
        var hideMore = element.nextElementSibling;
        hideMore.style.maxHeight = hideMore.scrollHeight + "px";

        //Increase the heigh of the main settings panel
        var hidable = document.getElementById("global-configuration").style.maxHeight;
        hidable = Number(hidable.replace(/px/g, ''));
        document.getElementById("global-configuration").style.maxHeight = hidable + hideMore.scrollHeight + "px";
    }
}

////////////////////

//Load the theme style
var theme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark';
$('head').append('<link rel="stylesheet" href="../common/css/themes/' + theme + '/theme.css"/>');

function changeTheme(newTheme) {
    $('link[href="../common/css/themes/' + theme + '/theme.css"]').remove();
    var head= document.getElementsByTagName('head')[0];
    var link= document.createElement('link');
    link.rel= "stylesheet";
    link.href= "../common/css/themes/" + newTheme + "/theme.css";
    head.appendChild(link);
    theme = newTheme;
}

//Theme options to settings
var themes = ['acri', 'dark', 'rachni'];

$.each(themes, function(i) {
    var $selected = '';

    if(themes[i] == theme) {
        $selected = 'selected';
    }

    $('#alt-main-config-content #theme').append('<option name="' + themes[i] + '"' + $selected + '>' + themes[i] + '</option>');
});

//////////////////

//Font options to settings
var fontlist_names = ["'Open Sans', sans-serif", "'Poppins', sans-serif", "'Raleway', sans-serif", "'Anonymous Pro', monospace", "'Patua One', cursive", "'Abril Fatface', cursive", "'Lora', serif", "'Cookie', cursive", "'Oleo Script', cursive", "'Kalam', cursive", "'Fredoka One', cursive"];
var fontlist_urls = [];


//Load the list of stored Custom Fonts in the Main settings
if(localStorage.getItem("customFonts") == null){
    customFonts = 0;
} else {
    customFonts = Number(localStorage.getItem("customFonts"));
}

for (var i = 0; i < customFonts; i++) {
    font_number = i + 1;
    $('#custom-font-list ul').append('<li><div class="font-name-added slot-storable" id="font-name-added-' + font_number + '"></div><div class="font-url-added slot-storable" id="font-url-added-' + font_number + '"></div><div class="delete-font"><div class="icon icon-trash"></div></div></li>');
}

//On load
function updateCustomFontList() {			
        //Update the fontlist array (name and urls)
        $('#custom-font-list ul li').each(function(){
            var font_name_to_add = $(this).children('.font-name-added').text();
            var font_url_to_add = $(this).children('.font-url-added').text();
            fontlist_names.push(font_name_to_add);
            fontlist_urls.push(font_url_to_add);
        });				

        //Refresh the font list
        $.each(fontlist_names, function(i) {

            var fontlist_shortname = fontlist_names[i].substring(
                fontlist_names[i].lastIndexOf("*'") + 2, 
                fontlist_names[i].lastIndexOf("',")
            );

            $('.font-storable').each(function(){
                $(this).append('<option value="' + fontlist_names[i] + '">' + fontlist_shortname + '</option>');
            });

        });

        //Load the font stored in the localstorage
        $('.font-storable').each(function(){
            var id = $(this).attr('id');
            if(localStorage.getItem(id)){
                $("#" + id).val(localStorage.getItem(id));
            }
            //If option doesn't exist check the first
            if(fontlist_names.includes(localStorage.getItem(id)) == false){
                $("#" + id).val("'Open Sans', sans-serif");
            }
        });

        //Call function to send to the source
        // function_send_font();

}

//Add Custom Fonts to the panel Selectors
function AddNewFont(font_name, font_url) {
    //Add to array
    fontlist_names.push(font_name);
    fontlist_urls.push(font_url);

    var font_name_shortname = font_name.substring(
        font_name.lastIndexOf("*'") + 2, 
        font_name.lastIndexOf("',")
    );

    $('.font-storable').each(function(){
        $(this).append('<option value="' + font_name + '">' + font_name_shortname + '</option>');
    });

    function_send_font();

}

//Remove Custom Fonts to the panel Selectors
function removeFont(font_name, font_url) {
    //Remove from the array
    fontlist_names = jQuery.grep(fontlist_names, function(value) {
    return value != font_name;
    });
    fontlist_urls = jQuery.grep(fontlist_urls, function(value) {
    return value != font_url;
    });

    var font_name_shortname = font_name.substring(
        font_name.lastIndexOf("*'") + 2, 
        font_name.lastIndexOf("',")
    );
    
    $('.font-storable').each(function(){
        $(this).children('option[value="' + font_name + '"]').remove();
    });
}			


//Add new Font
$('#add-new-font').click(function() {
    var howMany = $('#custom-font-list ul li').length;
    howMany += 1;
    var font_name_to_add = $('#new-font-name').val();
    var font_url_to_add = $('#new-font-url').val();
    if (font_name_to_add && font_url_to_add){
        $("#new-font-name").val("");
        $("#new-font-url").val("");

        //Clean font name to add whit no "font-family" or ";"
        var font_name_to_add_clean = font_name_to_add.replace("font-family: ", "");
        var font_name_to_add_clean = font_name_to_add_clean.replace(";", "");

        //Clean font name to add whit no "font-family" or ";"
        var font_url_to_add_clean = font_url_to_add.replace("<style> ", "");
        var font_url_to_add_clean = font_url_to_add_clean.replace(" </style>", "");


        $('#custom-font-list ul').append('<li><div class="font-name-added slot-storable" id="font-name-added-' + howMany + '">' + font_name_to_add_clean + '</div><div class="font-url-added slot-storable" id="font-url-added-' + howMany + '">' + font_url_to_add_clean + '</div><div class="delete-font"><div class="icon icon-trash"></div></div></li>');
        AddNewFont(font_name_to_add_clean, font_url_to_add_clean);

        //Increase the heigh of the main settings panel
        var hidable = document.getElementById("global-configuration").style.maxHeight;
        hidable = Number(hidable.replace(/px/g,''));
        document.getElementById("global-configuration").style.maxHeight = hidable + 28 + "px";
        document.getElementById("more-settings").style.maxHeight = hidable + 28 + "px";

        //Update the amount of custom fonts (+1)
        id = "customFonts";
        localStorage.setItem(id, howMany);
        
        //Save localStorage
        localStorage.setItem('font-name-added-' + howMany, font_name_to_add_clean);
        localStorage.setItem('font-url-added-' + howMany, font_url_to_add_clean);
    }
});

//Remove Font
$('#custom-font-list ul').on('click', 'li > .delete-font', function(e) {
    var howMany = $('#custom-font-list ul li').length;
    howMany -= 1;

    var font_name_to_remove = $(this).closest('li').children('.font-name-added').text();
    var font_url_to_remove = $(this).closest('li').children('.font-url-added').text();

    $(this).closest('li').remove();
    
    removeFont(font_name_to_remove, font_url_to_remove);

    //Update the amount of custom fonts (-1)
    id = "customFonts";
    localStorage.setItem(id, howMany);

    //Clean localStorage of fonts that are no longer used.
    for (var i = 20; i > howMany; i--) {
        localStorage.removeItem('font-name-added-' + i);
        localStorage.removeItem('font-url-added-' + i);
    }
});

//<Rename> de IDs of Font to correct store
$('#custom-font-list ul').on('click', 'li', function(e) {
    $('#custom-font-list ul li').each(function(i) {
        i++;
        var font_name_added = 'font-name-added-' + i;
        var font_url_added = 'font-url-added-' + i;

        $(this).children('.font-name-added').attr('id', font_name_added);
        $(this).children('.font-url-added').attr('id', font_url_added);

        localStorage.setItem(font_name_added, $('#' + font_name_added).text());
        localStorage.setItem(font_url_added, $('#' + font_url_added).text());
    });
});


//////////////////

$( "#sortable" ).sortable({handle: ".drag-handle"});
$( "#sortable" ).on("sortupdate",function( event, ui ) {
    var sorted = $( this ).sortable( "serialize");
    localStorage.setItem('sorted', sorted);
});

if(localStorage.getItem("sorted") !== null){
    var arrValuesForOrder = localStorage.getItem('sorted').substring(6).split("&alt[]=");
    var $ul = $("#sortable");
    $items = $("#sortable").children();

    // loop backwards so you can just prepend elements in the list
    // instead of trying to place them at a specific position
    for (var i = arrValuesForOrder.length - 1; i >= 0; i--) {
    // index is zero-based to you have to remove one from the values in your array
    $ul.prepend( $items.get((arrValuesForOrder[i] - 1)));
    }
}

$( "#sortable" ).disableSelection();
/*
//Reset order button
$("#clear").click(function(){
    window.localStorage.removeItem("sorted");
});
*/			

////////////////////

var oriVal;
$(".renameable").on('dblclick', function () {
    var titleDiv = $(this);
    if (titleDiv.text()){
        oriVal = titleDiv.text();
    }
    titleDiv.text("");
    $("<input type='text' value='"+ oriVal + "' maxlength='40'>").appendTo(this).focus().change(function() {
        titleDiv.text($(this).val());
    });

});

$(".renameable").on('focusout', '> input', function () {
    var newAltTitle = $(this);
    // newAltTitle.parent().text(newAltTitle.val() || oriVal);
    newAltTitle.remove();
});

////////////////////

function checkSwitches (){
    //Check Master Switch
    if (document.getElementById("lower-thirds-masterswitch").checked) {
        masterSwitchIsOn = true;
        document.getElementById("alt-main-config-content").classList.add("active");
    } else {
        masterSwitchIsOn = false;
        document.getElementById("alt-main-config-content").classList.remove("active");
    }

    //Check switches and blue and red lights in the background to see active and inactive times
    if (masterSwitchIsOn) {
        //When the Main Switch is ON the lower thirds can be Active, Inactive or OFF.
        //Switch 1
        if (document.getElementById("lower-thirds-switch1").checked){
            if (alt_1_active_time_monitor >= 0 && alt_1_inactive_time_monitor == 0 && alt_1_name && alt_1_info){
                document.getElementById("alt-1-config-content").classList.remove("inactive");
                document.getElementById("alt-1-config-content").classList.add("active");
                alt_1_jumpnext = true;
            } else {
                document.getElementById("alt-1-config-content").classList.remove("active");
                document.getElementById("alt-1-config-content").classList.add("inactive");
                //check if autoload is active and jump to next slot
                if (alt_1_autoload && alt_1_jumpnext) {
                    alt_1_jumpnext = false;
                    jumpNextSlot("#alt-1-memory-slots", "#alt-1-name", "#alt-1-info", "#alt-1-logo-preview", alt_1_waiting_time);
                }
            }
        } else {
            document.getElementById("alt-1-config-content").className = '';
            if (alt_1_turnoff && alt_1_autoload && alt_1_jumpnext) {
                alt_1_jumpnext = false;
                jumpNextSlot("#alt-1-memory-slots", "#alt-1-name", "#alt-1-info", "#alt-1-logo-preview", alt_1_waiting_time);
            }
        }

        //Switch 2
        if (document.getElementById("lower-thirds-switch2").checked){
            if (alt_2_active_time_monitor >= 0 && alt_2_inactive_time_monitor == 0 && alt_2_name && alt_2_info){
                document.getElementById("alt-2-config-content").classList.remove("inactive");
                document.getElementById("alt-2-config-content").classList.add("active");
                alt_2_jumpnext = true;
            } else {
                document.getElementById("alt-2-config-content").classList.remove("active");
                document.getElementById("alt-2-config-content").classList.add("inactive");
                //check if autoload is active and jump to next slot
                if (alt_2_autoload && alt_2_jumpnext) {
                    alt_2_jumpnext = false;
                    jumpNextSlot("#alt-2-memory-slots", "#alt-2-name", "#alt-2-info", "#alt-2-logo-preview", alt_2_waiting_time);
                }
            }
        } else {
            document.getElementById("alt-2-config-content").className = '';
        }

        //Switch 3
        if (document.getElementById("lower-thirds-switch3").checked){
            if (alt_3_active_time_monitor >= 0 && alt_3_inactive_time_monitor == 0 && alt_3_name && alt_3_info){
                document.getElementById("alt-3-config-content").classList.remove("inactive");
                document.getElementById("alt-3-config-content").classList.add("active");
                alt_3_jumpnext = true;
            } else {
                document.getElementById("alt-3-config-content").classList.remove("active");
                document.getElementById("alt-3-config-content").classList.add("inactive");
                //check if autoload is active and jump to next slot
                if (alt_3_autoload && alt_3_jumpnext) {
                    alt_3_jumpnext = false;
                    jumpNextSlot("#alt-3-memory-slots", "#alt-3-name", "#alt-3-info", "#alt-3-logo-preview", alt_3_waiting_time);
                }
            }
        } else {
            document.getElementById("alt-3-config-content").className = '';
        }

        //Switch 4
        if (document.getElementById("lower-thirds-switch4").checked){
            if (alt_4_active_time_monitor >= 0 && alt_4_inactive_time_monitor == 0 && alt_4_name && alt_4_info){
                document.getElementById("alt-4-config-content").classList.remove("inactive");
                document.getElementById("alt-4-config-content").classList.add("active");
                alt_4_jumpnext = true;
            } else {
                document.getElementById("alt-4-config-content").classList.remove("active");
                document.getElementById("alt-4-config-content").classList.add("inactive");
                //check if autoload is active and jump to next slot
                if (alt_4_autoload && alt_4_jumpnext) {
                    alt_4_jumpnext = false;
                    jumpNextSlot("#alt-4-memory-slots", "#alt-4-name", "#alt-4-info", "#alt-4-logo-preview", alt_4_waiting_time);
                }
            }
        } else {
            document.getElementById("alt-4-config-content").className = '';
        }

    } else {
        //When the Main Switch is OFF all the Lower Thirds area Inactives or OFF.
        //Switch 1
        if (document.getElementById("lower-thirds-switch1").checked) {
            document.getElementById("alt-1-config-content").classList.add("inactive");
            document.getElementById("alt-1-config-content").classList.remove("active");
        } else {
            document.getElementById("alt-1-config-content").className = '';
        }

        //Switch 2
        if (document.getElementById("lower-thirds-switch2").checked) {
            document.getElementById("alt-2-config-content").classList.add("inactive");
            document.getElementById("alt-2-config-content").classList.remove("active");
        } else {
            document.getElementById("alt-2-config-content").className = '';
        }

        //Switch 3
        if (document.getElementById("lower-thirds-switch3").checked) {
            document.getElementById("alt-3-config-content").classList.add("inactive");
            document.getElementById("alt-3-config-content").classList.remove("active");
        } else {
            document.getElementById("alt-3-config-content").className = '';
        }

        //Switch 4
        if (document.getElementById("lower-thirds-switch4").checked) {
            document.getElementById("alt-4-config-content").classList.add("inactive");
            document.getElementById("alt-4-config-content").classList.remove("active");
        } else {
            document.getElementById("alt-4-config-content").className = '';
        }
    }
}

////////////////////

//Reload the hotjeys.js file updated by the LUA script
function updateHotkeys() {
    src = '../common/js/hotkeys.js';
    $('script[src="' + src + '"]').remove();
    var head= document.getElementsByTagName('head')[0];
    var script= document.createElement('script');
    script.src= src;
    head.appendChild(script);
}

//Toggle the switches if a hotkey is pressed
function checkHotkeys (){
    if (hotkeyMasterSwitch != hotkeyMasterSwitchOld){
        if (document.getElementById("lower-thirds-masterswitch").checked) {
            $('#lower-thirds-masterswitch').prop('checked', false).change();
        }
        else {
            $('#lower-thirds-masterswitch').prop('checked', true).change();
        }
        hotkeyMasterSwitchOld = hotkeyMasterSwitch;
    }

    if (hotkeySwitch1 != hotkeySwitch1Old){
        if (document.getElementById("lower-thirds-switch1").checked) {
            $('#lower-thirds-switch1').prop('checked', false).change();
        }
        else {
            $('#lower-thirds-switch1').prop('checked', true).change();
        }
        hotkeySwitch1Old = hotkeySwitch1;
    }

    if (hotkeySwitch2 != hotkeySwitch2Old){
        if (document.getElementById("lower-thirds-switch2").checked) {
            $('#lower-thirds-switch2').prop('checked', false).change();
        }
        else {
            $('#lower-thirds-switch2').prop('checked', true).change();
        }
        hotkeySwitch2Old = hotkeySwitch2;
    }

    if (hotkeySwitch3 != hotkeySwitch3Old){
        if (document.getElementById("lower-thirds-switch3").checked) {
            $('#lower-thirds-switch3').prop('checked', false).change();
        }
        else {
            $('#lower-thirds-switch3').prop('checked', true).change();
        }
        hotkeySwitch3Old = hotkeySwitch3;
    }
    if (hotkeySwitch4 != hotkeySwitch4Old){
        if (document.getElementById("lower-thirds-switch4").checked) {
            $('#lower-thirds-switch4').prop('checked', false).change();
        }
        else {
            $('#lower-thirds-switch4').prop('checked', true).change();
        }
        hotkeySwitch4Old = hotkeySwitch4;
    }

    //Memory Slots triggers LT1
    if (hotkeyAlt1Slot1 != hotkeyAlt1Slot1Old) {
        if ($("#alt-1-name-1").text() && $("#alt-1-info-1").text()){
            loadSlot("#alt-1-name", "#alt-1-info", "#alt-1-logo-preview", $("#alt-1-name-1").text(), $("#alt-1-info-1").text(), $("#alt-1-logo-1").text(), 0);
        }
        hotkeyAlt1Slot1Old = hotkeyAlt1Slot1;
    }
    if (hotkeyAlt1Slot2 != hotkeyAlt1Slot2Old) {
        loadSlot("#alt-1-name", "#alt-1-info", "#alt-1-logo-preview", $("#alt-1-name-2").text(), $("#alt-1-info-2").text(), $("#alt-1-logo-2").text(), 0);
        hotkeyAlt1Slot2Old = hotkeyAlt1Slot2;
    }
    if (hotkeyAlt1Slot3 != hotkeyAlt1Slot3Old) {
        loadSlot("#alt-1-name", "#alt-1-info", "#alt-1-logo-preview", $("#alt-1-name-3").text(), $("#alt-1-info-3").text(), $("#alt-1-logo-3").text(), 0);
        hotkeyAlt1Slot3Old = hotkeyAlt1Slot3;
    }
    if (hotkeyAlt1Slot4 != hotkeyAlt1Slot4Old) {
        loadSlot("#alt-1-name", "#alt-1-info", "#alt-1-logo-preview", $("#alt-1-name-4").text(), $("#alt-1-info-4").text(), $("#alt-1-logo-4").text(), 0);
        hotkeyAlt1Slot4Old = hotkeyAlt1Slot4;
    }
    if (hotkeyAlt1Slot5 != hotkeyAlt1Slot5Old) {
        loadSlot("#alt-1-name", "#alt-1-info", "#alt-1-logo-preview", $("#alt-1-name-5").text(), $("#alt-1-info-5").text(), $("#alt-1-logo-5").text(), 0);
        hotkeyAlt1Slot5Old = hotkeyAlt1Slot5;
    }
    if (hotkeyAlt1Slot6 != hotkeyAlt1Slot6Old) {
        loadSlot("#alt-1-name", "#alt-1-info", "#alt-1-logo-preview", $("#alt-1-name-6").text(), $("#alt-1-info-6").text(), $("#alt-1-logo-6").text(), 0);
        hotkeyAlt1Slot6Old = hotkeyAlt1Slot6;
    }
    if (hotkeyAlt1Slot7 != hotkeyAlt1Slot7Old) {
        loadSlot("#alt-1-name", "#alt-1-info", "#alt-1-logo-preview", $("#alt-1-name-7").text(), $("#alt-1-info-7").text(), $("#alt-1-logo-7").text(), 0);
        hotkeyAlt1Slot7Old = hotkeyAlt1Slot7;
    }
    if (hotkeyAlt1Slot8 != hotkeyAlt1Slot8Old) {
        loadSlot("#alt-1-name", "#alt-1-info", "#alt-1-logo-preview", $("#alt-1-name-8").text(), $("#alt-1-info-8").text(), $("#alt-1-logo-8").text(), 0);
        hotkeyAlt1Slot8Old = hotkeyAlt1Slot8;
    }
    if (hotkeyAlt1Slot9 != hotkeyAlt1Slot9Old) {
        loadSlot("#alt-1-name", "#alt-1-info", "#alt-1-logo-preview", $("#alt-1-name-9").text(), $("#alt-1-info-9").text(), $("#alt-1-logo-9").text(), 0);
        hotkeyAlt1Slot9Old = hotkeyAlt1Slot9;
    }
    if (hotkeyAlt1Slot10 != hotkeyAlt1Slot10Old) {
        loadSlot("#alt-1-name", "#alt-1-info", "#alt-1-logo-preview", $("#alt-1-name-10").text(), $("#alt-1-info-10").text(), $("#alt-1-logo-10").text(), 0);
        hotkeyAlt1Slot10Old = hotkeyAlt1Slot10;
    }

    //Memory Slots triggers LT2
    if (hotkeyAlt2Slot1 != hotkeyAlt2Slot1Old) {
        loadSlot("#alt-2-name", "#alt-2-info", "#alt-2-logo-preview", $("#alt-2-name-1").text(), $("#alt-2-info-1").text(), $("#alt-2-logo-1").text(), 0);
        hotkeyAlt2Slot1Old = hotkeyAlt2Slot1;
    }
    if (hotkeyAlt2Slot2 != hotkeyAlt2Slot2Old) {
        loadSlot("#alt-2-name", "#alt-2-info", "#alt-2-logo-preview", $("#alt-2-name-2").text(), $("#alt-2-info-2").text(), $("#alt-2-logo-2").text(), 0);
        hotkeyAlt2Slot2Old = hotkeyAlt2Slot2;
    }
    if (hotkeyAlt2Slot3 != hotkeyAlt2Slot3Old) {
        loadSlot("#alt-2-name", "#alt-2-info", "#alt-2-logo-preview", $("#alt-2-name-3").text(), $("#alt-2-info-3").text(), $("#alt-2-logo-3").text(), 0);
        hotkeyAlt2Slot3Old = hotkeyAlt2Slot3;
    }
    if (hotkeyAlt2Slot4 != hotkeyAlt2Slot4Old) {
        loadSlot("#alt-2-name", "#alt-2-info", "#alt-2-logo-preview", $("#alt-2-name-4").text(), $("#alt-2-info-4").text(), $("#alt-2-logo-4").text(), 0);
        hotkeyAlt2Slot4Old = hotkeyAlt2Slot4;
    }
    if (hotkeyAlt2Slot5 != hotkeyAlt2Slot5Old) {
        loadSlot("#alt-2-name", "#alt-2-info", "#alt-2-logo-preview", $("#alt-2-name-5").text(), $("#alt-2-info-5").text(), $("#alt-2-logo-5").text(), 0);
        hotkeyAlt2Slot5Old = hotkeyAlt2Slot5;
    }
    if (hotkeyAlt2Slot6 != hotkeyAlt2Slot6Old) {
        loadSlot("#alt-2-name", "#alt-2-info", "#alt-2-logo-preview", $("#alt-2-name-6").text(), $("#alt-2-info-6").text(), $("#alt-2-logo-6").text(), 0);
        hotkeyAlt2Slot6Old = hotkeyAlt2Slot6;
    }
    if (hotkeyAlt2Slot7 != hotkeyAlt2Slot7Old) {
        loadSlot("#alt-2-name", "#alt-2-info", "#alt-2-logo-preview", $("#alt-2-name-7").text(), $("#alt-2-info-7").text(), $("#alt-2-logo-7").text(), 0);
        hotkeyAlt2Slot7Old = hotkeyAlt2Slot7;
    }
    if (hotkeyAlt2Slot8 != hotkeyAlt2Slot8Old) {
        loadSlot("#alt-2-name", "#alt-2-info", "#alt-2-logo-preview", $("#alt-2-name-8").text(), $("#alt-2-info-8").text(), $("#alt-2-logo-8").text(), 0);
        hotkeyAlt2Slot8Old = hotkeyAlt2Slot8;
    }
    if (hotkeyAlt2Slot9 != hotkeyAlt2Slot9Old) {
        loadSlot("#alt-2-name", "#alt-2-info", "#alt-2-logo-preview", $("#alt-2-name-9").text(), $("#alt-2-info-9").text(), $("#alt-2-logo-9").text(), 0);
        hotkeyAlt2Slot9Old = hotkeyAlt2Slot9;
    }
    if (hotkeyAlt2Slot10 != hotkeyAlt2Slot10Old) {
        loadSlot("#alt-2-name", "#alt-2-info", "#alt-2-logo-preview", $("#alt-2-name-10").text(), $("#alt-2-info-10").text(), $("#alt-2-logo-10").text(), 0);
        hotkeyAlt2Slot10Old = hotkeyAlt2Slot10;
    }

    //Memory Slots triggers LT3
    if (hotkeyAlt3Slot1 != hotkeyAlt3Slot1Old) {
        loadSlot("#alt-3-name", "#alt-3-info", "#alt-3-logo-preview", $("#alt-3-name-1").text(), $("#alt-3-info-1").text(), $("#alt-3-logo-1").text(), 0);
        hotkeyAlt3Slot1Old = hotkeyAlt3Slot1;
    }
    if (hotkeyAlt3Slot2 != hotkeyAlt3Slot2Old) {
        loadSlot("#alt-3-name", "#alt-3-info", "#alt-3-logo-preview", $("#alt-3-name-2").text(), $("#alt-3-info-2").text(), $("#alt-3-logo-2").text(), 0);
        hotkeyAlt3Slot2Old = hotkeyAlt3Slot2;
    }
    if (hotkeyAlt3Slot3 != hotkeyAlt3Slot3Old) {
        loadSlot("#alt-3-name", "#alt-3-info", "#alt-3-logo-preview", $("#alt-3-name-3").text(), $("#alt-3-info-3").text(), $("#alt-3-logo-3").text(), 0);
        hotkeyAlt3Slot3Old = hotkeyAlt3Slot3;
    }
    if (hotkeyAlt3Slot4 != hotkeyAlt3Slot4Old) {
        loadSlot("#alt-3-name", "#alt-3-info", "#alt-3-logo-preview", $("#alt-3-name-4").text(), $("#alt-3-info-4").text(), $("#alt-3-logo-4").text(), 0);
        hotkeyAlt3Slot4Old = hotkeyAlt3Slot4;
    }
    if (hotkeyAlt3Slot5 != hotkeyAlt3Slot5Old) {
        loadSlot("#alt-3-name", "#alt-3-info", "#alt-3-logo-preview", $("#alt-3-name-5").text(), $("#alt-3-info-5").text(), $("#alt-3-logo-5").text(), 0);
        hotkeyAlt3Slot5Old = hotkeyAlt3Slot5;
    }
    if (hotkeyAlt3Slot6 != hotkeyAlt3Slot6Old) {
        loadSlot("#alt-3-name", "#alt-3-info", "#alt-3-logo-preview", $("#alt-3-name-6").text(), $("#alt-3-info-6").text(), $("#alt-3-logo-6").text(), 0);
        hotkeyAlt3Slot6Old = hotkeyAlt3Slot6;
    }
    if (hotkeyAlt3Slot7 != hotkeyAlt3Slot7Old) {
        loadSlot("#alt-3-name", "#alt-3-info", "#alt-3-logo-preview", $("#alt-3-name-7").text(), $("#alt-3-info-7").text(), $("#alt-3-logo-7").text(), 0);
        hotkeyAlt3Slot7Old = hotkeyAlt3Slot7;
    }
    if (hotkeyAlt3Slot8 != hotkeyAlt3Slot8Old) {
        loadSlot("#alt-3-name", "#alt-3-info", "#alt-3-logo-preview", $("#alt-3-name-8").text(), $("#alt-3-info-8").text(), $("#alt-3-logo-8").text(), 0);
        hotkeyAlt3Slot8Old = hotkeyAlt3Slot8;
    }
    if (hotkeyAlt3Slot9 != hotkeyAlt3Slot9Old) {
        loadSlot("#alt-3-name", "#alt-3-info", "#alt-3-logo-preview", $("#alt-3-name-9").text(), $("#alt-3-info-9").text(), $("#alt-3-logo-9").text(), 0);
        hotkeyAlt3Slot9Old = hotkeyAlt3Slot9;
    }
    if (hotkeyAlt3Slot10 != hotkeyAlt3Slot10Old) {
        loadSlot("#alt-3-name", "#alt-3-info", "#alt-3-logo-preview", $("#alt-3-name-10").text(), $("#alt-3-info-10").text(), $("#alt-3-logo-10").text(), 0);
        hotkeyAlt3Slot10Old = hotkeyAlt3Slot10;
    }

    //Memory Slots triggers LT4
    if (hotkeyAlt4Slot1 != hotkeyAlt4Slot1Old) {
        loadSlot("#alt-4-name", "#alt-4-info", "#alt-4-logo-preview", $("#alt-4-name-1").text(), $("#alt-4-info-1").text(), $("#alt-4-logo-1").text(), 0);
        hotkeyAlt4Slot1Old = hotkeyAlt4Slot1;
    }
    if (hotkeyAlt4Slot2 != hotkeyAlt4Slot2Old) {
        loadSlot("#alt-4-name", "#alt-4-info", "#alt-4-logo-preview", $("#alt-4-name-2").text(), $("#alt-4-info-2").text(), $("#alt-4-logo-2").text(), 0);
        hotkeyAlt4Slot2Old = hotkeyAlt4Slot2;
    }
    if (hotkeyAlt4Slot3 != hotkeyAlt4Slot3Old) {
        loadSlot("#alt-4-name", "#alt-4-info", "#alt-4-logo-preview", $("#alt-4-name-3").text(), $("#alt-4-info-3").text(), $("#alt-4-logo-3").text(), 0);
        hotkeyAlt4Slot3Old = hotkeyAlt4Slot3;
    }
    if (hotkeyAlt4Slot4 != hotkeyAlt4Slot4Old) {
        loadSlot("#alt-4-name", "#alt-4-info", "#alt-4-logo-preview", $("#alt-4-name-4").text(), $("#alt-4-info-4").text(), $("#alt-4-logo-4").text(), 0);
        hotkeyAlt4Slot4Old = hotkeyAlt4Slot4;
    }
    if (hotkeyAlt4Slot5 != hotkeyAlt4Slot5Old) {
        loadSlot("#alt-4-name", "#alt-4-info", "#alt-4-logo-preview", $("#alt-4-name-5").text(), $("#alt-4-info-5").text(), $("#alt-4-logo-5").text(), 0);
        hotkeyAlt4Slot5Old = hotkeyAlt4Slot5;
    }
    if (hotkeyAlt4Slot6 != hotkeyAlt4Slot6Old) {
        loadSlot("#alt-4-name", "#alt-4-info", "#alt-4-logo-preview", $("#alt-4-name-6").text(), $("#alt-4-info-6").text(), $("#alt-4-logo-6").text(), 0);
        hotkeyAlt4Slot6Old = hotkeyAlt4Slot6;
    }
    if (hotkeyAlt4Slot7 != hotkeyAlt4Slot7Old) {
        loadSlot("#alt-4-name", "#alt-4-info", "#alt-4-logo-preview", $("#alt-4-name-7").text(), $("#alt-4-info-7").text(), $("#alt-4-logo-7").text(), 0);
        hotkeyAlt4Slot7Old = hotkeyAlt4Slot7;
    }
    if (hotkeyAlt4Slot8 != hotkeyAlt4Slot8Old) {
        loadSlot("#alt-4-name", "#alt-4-info", "#alt-4-logo-preview", $("#alt-4-name-8").text(), $("#alt-4-info-8").text(), $("#alt-4-logo-8").text(), 0);
        hotkeyAlt4Slot8Old = hotkeyAlt4Slot8;
    }
    if (hotkeyAlt4Slot9 != hotkeyAlt4Slot9Old) {
        loadSlot("#alt-4-name", "#alt-4-info", "#alt-4-logo-preview", $("#alt-4-name-9").text(), $("#alt-4-info-9").text(), $("#alt-4-logo-9").text(), 0);
        hotkeyAlt4Slot9Old = hotkeyAlt4Slot9;
    }
    if (hotkeyAlt4Slot10 != hotkeyAlt4Slot10Old) {
        loadSlot("#alt-4-name", "#alt-4-info", "#alt-4-logo-preview", $("#alt-4-name-10").text(), $("#alt-4-info-10").text(), $("#alt-4-logo-10").text(), 0);
        hotkeyAlt4Slot10Old = hotkeyAlt4Slot10;
    }

}

function openResetPopup() {
    document.getElementById("reset-all").classList.remove("hide");
}
function okResetPopup() {
    localStorage.clear(); //To clear data fields

    //Restore logo default (fix missing logos in the reload)
    $('.logo-storable').each(function(){
        var id = $(this).attr('id');
        var value
        if (id == "alt-1-logo-preview" || id == "alt-1-logo-default"){
            value = alt_1_logo_default;
        }
        if (id == "alt-2-logo-preview" || id == "alt-2-logo-default"){
            value = alt_2_logo_default;
        }
        if (id == "alt-3-logo-preview" || id == "alt-3-logo-default"){
            value = alt_3_logo_default;
        }
        if (id == "alt-4-logo-preview" || id == "alt-4-logo-default"){
            value = alt_4_logo_default;
        }
        localStorage.setItem(id, value);
    });

    location.reload();
}

function cancelResetPopup() {
    document.getElementById("reset-all").classList.add("hide");
}

//Export popup info
function openExportPopup() {
    document.getElementById("export-data").classList.remove("hide");
}
function okExportPopup() {
    document.getElementById("export-data").classList.add("hide");
}

//Load new logo image
function showPreview(element){
    if(element.files.length > 0){
        var src = URL.createObjectURL(element.files[0]);
        var preview = document.getElementById("logo-file-preview");
        document.getElementById("file-preview").classList.remove("no-image");
        preview.src = src;
        preview.style.display = "block";
    }
}

function openLogoPopup(logo, logo_default) {
    document.getElementById("select-image").classList.remove("hide");
    document.getElementById("file-preview").classList.remove("no-image");
    var preview_to_change = $("#" + logo).attr("src");
    var preview = document.getElementById("logo-file-preview");
    preview.src = preview_to_change;
    preview.style.display = "block";
    $("#logo-file").val("");
    
    //Config ok button
    $(".btn-ok").attr("onclick", "okLogoPopup('" + logo + "', '" + logo_default + "')");
    
    //Hide remove button if it's a default logo
    if (logo == logo_default){
        $(".btn-remove").attr('style','display: none');
    } else {
        $(".btn-remove").attr('style','display: block');
    }
}

//OK button
function okLogoPopup(logo, logo_default) {
    var src = document.getElementById("logo-file").files[0];
    var popup_preview = $("#logo-file-preview").attr("src");
    var preview = document.getElementById(logo);
    var alt_logo_preview = logo_default.replace("-default", "-preview");

    if(src){
        preview.src = "../logos/" + src.name;
        $(preview).change();
        //Change the lt logo if it use default
        if (logo == logo_default && $("#" + alt_logo_preview).hasClass('default')){
            $("#" + alt_logo_preview).attr("src", "../logos/" + src.name).change();
        }
    } else {
        if (!popup_preview) {
            var alt_logo_default = $("#" + logo_default).attr("src");
            preview.src = alt_logo_default;
            $(preview).change();
        }
    }
    
    document.getElementById("select-image").classList.add("hide");
}

//Cancel button
function cancelLogoPopup() {
    document.getElementById("select-image").classList.add("hide");
}

function removeLogoPopup() {
    var preview = document.getElementById("logo-file-preview");
    document.getElementById("file-preview").classList.add("no-image");
    $("#logo-file").val("");
    preview.src = "";
    preview.style.display = "none";
}

function checkLogos() {
    $(".alt-logo-preview").each(function(){
        check_logo_id = $(this).attr('id');
        check_default_logo_id = check_logo_id.replace("-preview", "-default");
        check_is_default_logo = ($("#" + check_logo_id).attr("src") == $("#" + check_default_logo_id).attr("src"))? true : false;
        
        if (check_is_default_logo) {
            $("#" + check_logo_id).addClass('default');
        } else {
            $("#" + check_logo_id).removeClass('default');
        }
    });
}

//Memory Slots System
function checkSlots (memory_slot, name, info, logo) {
    $("ul" + memory_slot + " li").each(function(){
        const check_slot_id = $(this).attr('id');
        const check_name_id = $(this).children('.stored-name').attr('id');
        const check_info_id = $(this).children('.stored-info').attr('id');
        const check_logo_id = $(this).children('.stored-logo').attr('id');
        const check_is_default_logo = $(logo).hasClass('default');
        const name_value = $(this).children('.stored-name').text();
        const info_value = $(this).children('.stored-info').text();
        const logo_value = $(this).children('.stored-logo').text();

        let check_slot_id_element = document.getElementById(check_slot_id);

        //If stored data has no logo, set to default
        if (name_value && info_value && !logo_value) {
            $(this).children('.stored-logo').text("default");
        }
        if ($('#' + check_name_id).is(':empty') && $('#' + check_info_id).is(':empty') && $('#' + check_logo_id).is(':empty')){
            check_slot_id_element.classList.remove("stored");
        } else {
            check_slot_id_element.classList.add("stored");
        }
        //Check active slots
        if ($(name).val() == name_value && $(info).val() == info_value && ($(logo).attr("src") == logo_value || (check_is_default_logo && logo_value == "default"))){
            if(name_value && info_value && logo_value){
                check_slot_id_element.classList.add("active-slot");
                check_slot_id_element.classList.remove("next-to-load");
            }
        } else {
            check_slot_id_element.classList.remove("active-slot");
        }

        //Check if it has default logo
        if (logo_value && logo_value != "default"){
            check_slot_id_element.classList.add("custom-logo");
        } else {
            check_slot_id_element.classList.remove("custom-logo");
        }

    });
}

function memorySlotsSystem (memory_slot, name, info, logo) {
    let slot_id, name_id, info_id, logo_id, default_logo, is_default_logo;
    $("ul" + memory_slot + " li").mousedown(function(e){
        slot_id = $(this).attr('id');
        name_id = $(this).children('.stored-name').attr('id');
        info_id = $(this).children('.stored-info').attr('id');
        logo_id = $(this).children('.stored-logo').attr('id');
        // name_value = $(this).children('.stored-name').text();
        // info_value = $(this).children('.stored-info').text();
        default_logo = logo.replace("-preview", "-default");
        is_default_logo = ($(logo).attr("src") == $(default_logo).attr("src")) ? true : false;
        clearTimeout(this.downTimer);
        this.downTimer = setTimeout(function() {
                //Delete
                document.getElementById(slot_id).classList.add("delete");
                $('#' + name_id)[0].innerHTML = "";
                $('#' + info_id)[0].innerHTML = "";
                $('#' + logo_id)[0].innerHTML = "";
                slotDeleted = true;
        }, 600);
    }).mouseup(function(e) {
        clearTimeout(this.downTimer);
        document.getElementById(slot_id).classList.remove("delete");
            if (!slotDeleted){
                if ($('#' + name_id).is(':empty') && $('#' + info_id).is(':empty') && $('#' + logo_id).is(':empty')){
                    //Save
                    const name_to_save = $(name + ":text").val();
                    const info_to_save = $(info + ":text").val();
                    const logo_to_save = $(logo).attr("src");
                    if (name_to_save && info_to_save){
                        $('#' + name_id)[0].innerHTML = name_to_save;
                        $('#' + info_id)[0].innerHTML = info_to_save;
                        if (is_default_logo){
                            $('#' + logo_id)[0].innerHTML = "default";
                        } else {
                            $('#' + logo_id)[0].innerHTML = logo_to_save;
                        }
                    }
                } else {
                    //Load
                    const name_to_load = $(this).children('#' + name_id).text();
                    const info_to_load = $(this).children('#' + info_id).text();
                    const logo_to_load = $(this).children('#' + logo_id).text();
                    const defaul_logo_to_load = $(default_logo).attr("src");
                    $(name + ":text").val(name_to_load).change();
                    $(info + ":text").val(info_to_load).change();
                    if (logo_to_load == "default"){
                        $(logo).attr("src", defaul_logo_to_load).change();
                    } else {
                        $(logo).attr("src", logo_to_load).change();
                    }

                    //Switch ON the panel if the autotrigger is ON
                    const slot_number_called = $(this).children('.slot-number').text();
                    const auto_trigger = slot_id.replace("-slot-" + slot_number_called, "-autotrigger");
                    let alt_switch = slot_id.replace("alt-", "");
                    alt_switch = alt_switch.replace("-slot-" + slot_number_called, "");
                    if (document.getElementById(auto_trigger).checked  && $("#lower-thirds-switch" + alt_switch).is(':not(:checked)')) {
                        $("#lower-thirds-switch" + alt_switch).prop('checked', true).change();
                    }
                }
            } else {
                slotDeleted = false;
            }
    });
}
memorySlotsSystem("#alt-1-memory-slots", "#alt-1-name", "#alt-1-info" , "#alt-1-logo-preview");
memorySlotsSystem("#alt-2-memory-slots", "#alt-2-name", "#alt-2-info" , "#alt-2-logo-preview");
memorySlotsSystem("#alt-3-memory-slots", "#alt-3-name", "#alt-3-info" , "#alt-3-logo-preview");
memorySlotsSystem("#alt-4-memory-slots", "#alt-4-name", "#alt-4-info" , "#alt-4-logo-preview");

//////////////////////////////////////

function jumpNextSlot(memory_slot, name, info, logo, alt_waiting_time) {
    let find_next = false;
    let find_first = false;
    let first_stored_slot;
    let next_slot_num;
    let to_load = 0;

    const name_loaded = $(name + ":text").val();
    const info_loaded = $(info + ":text").val();
    const logo_loaded = $(logo).attr("src");

    //Find actual and search the next slot to load
    $("ul" + memory_slot + " li").each(function(){
        const name_id = $(this).children('.stored-name').attr('id');
        const info_id = $(this).children('.stored-info').attr('id');
        const logo_id = $(this).children('.stored-logo').attr('id');
        const name_value = $(this).children('.stored-name').text();
        const info_value = $(this).children('.stored-info').text();
        const logo_value = $(this).children('.stored-logo').text();
        const slot_number = Number($(this).children('.slot-number').text());

        const loadedSlot = (name_loaded == name_value && info_loaded == info_value && (logo_loaded == logo_value || $(logo).hasClass(logo_value))) ? true : false;
        const emptySlot = ($('#' + name_id).is(':empty') && $('#' + info_id).is(':empty') && $('#' + logo_id).is(':empty')) ? true : false;

        if(!find_first && !emptySlot) {
            find_first = true;
            first_stored_slot = slot_number;
        }
        if (loadedSlot) {
            find_next = true;
            const loaded_slot_num = slot_number;
            next_slot_num = loaded_slot_num + 1;
        }

        if (find_next && slot_number == next_slot_num && !emptySlot) {
            find_next = false;
            to_load = slot_number;
        }
        if (find_next && (next_slot_num > 10 || emptySlot)) {
            find_next = false;
            to_load = first_stored_slot;
        }
    });

    // Si hay un slot para cargar
    if (to_load && to_load > 0) {
        $("ul" + memory_slot + " li:nth-child("+to_load+")").each(function () {
            const slot_id = ($(this).attr('id'));
            const name_id = $(this).children('.stored-name').attr('id');
            const info_id = $(this).children('.stored-info').attr('id');
            const logo_id = $(this).children('.stored-logo').attr('id');

            const name_to_load = $(this).children('#' + name_id).text();
            const info_to_load = $(this).children('#' + info_id).text();
            const logo_to_load = $(this).children('#' + logo_id).text();

            loadSlot(name, info, logo, name_to_load, info_to_load, logo_to_load, alt_waiting_time, false);
            $('#' + slot_id).addClass('next-to-load');
        });
    }
}

//////////////////////////////////////

function loadSlot(name, info, logo, name_to_load, info_to_load, logo_to_load, alt_waiting_time, from_hotkey = true) {
    setTimeout(function (){
        const default_logo = logo.replace("-preview", "-default");
        const default_logo_value = $(default_logo).attr("src");

        $(name + ":text").val(name_to_load);
        $(info + ":text").val(info_to_load);
        if (logo_to_load == "default") {
            logo_to_load = default_logo_value;
        }
        $(logo).attr("src", logo_to_load);
        refreshData();
    }, alt_waiting_time * 1000);

    //Switch ON the panel if the autotrigger is ON
    let auto_trigger = name.replace("#", "");
    auto_trigger = auto_trigger.replace("-name", "-autotrigger");
    let alt_switch = name.replace("#alt-", "");
    alt_switch = alt_switch.replace("-name", "");

    if (from_hotkey && document.getElementById(auto_trigger).checked && $("#lower-thirds-switch" + alt_switch).is(':not(:checked)')) {
        $("#lower-thirds-switch" + alt_switch).prop('checked', true).change();
    }
    //console.log(name + "|" + info + "|" + logo + "|" + name_to_load + "|" + info_to_load + "|" + logo_to_load + "|" + alt_waiting_time);
}

//////////////////////////////////////

//Button to clear fields
$("#alt-1-clean-inputs").click(function(){
    $("#alt-1-name:text").val("").change();
    $("#alt-1-info:text").val("").change();
    var alt_logo_default = $("#alt-1-logo-default").attr("src");
    $("#alt-1-logo-preview").attr("src", alt_logo_default).change();
});
$("#alt-2-clean-inputs").click(function(){
    $("#alt-2-name:text").val("").change();
    $("#alt-2-info:text").val("").change();
    var alt_logo_default = $("#alt-2-logo-default").attr("src");
    $("#alt-2-logo-preview").attr("src", alt_logo_default).change();
});
$("#alt-3-clean-inputs").click(function(){
    $("#alt-3-name:text").val("").change();
    $("#alt-3-info:text").val("").change();
    var alt_logo_default = $("#alt-3-logo-default").attr("src");
    $("#alt-3-logo-preview").attr("src", alt_logo_default).change();
});
$("#alt-4-clean-inputs").click(function(){
    $("#alt-4-name:text").val("").change();
    $("#alt-4-info:text").val("").change();
    var alt_logo_default = $("#alt-4-logo-default").attr("src");
    $("#alt-4-logo-preview").attr("src", alt_logo_default).change();
});

///////////////////////////////////////

//Open Preview screen
$("#toggle-preview").click(function(){
    document.getElementById("toggle-preview").classList.toggle("active");
    document.getElementById("alt-preview").classList.toggle("active");
    if (document.getElementById("alt-panel").style.marginBottom == "0px") {
        document.getElementById("alt-panel").style.marginBottom = "220px";
    } else {
        document.getElementById("alt-panel").style.marginBottom = "0px";
    }
});

///////////////////////////////////////

function getAppearance () {
    //Lower Third Style
    alt_1_style = $("#alt-1-style").val() || default_style;
    $("#alt-1-style").val(alt_1_style);
    alt_2_style = $("#alt-2-style").val() || default_style;
    $("#alt-2-style").val(alt_2_style);
    alt_3_style = $("#alt-3-style").val() || default_style;
    $("#alt-3-style").val(alt_3_style);
    alt_4_style = $("#alt-4-style").val()  || default_style;
    $("#alt-4-style").val(alt_4_style);

    //Calculate Text Sizes using the inverse ratio
    alt_1_inverse_ratio = $("#alt-1-inverse-ratio").val() || default_inverse_ratio;
    alt_1_name_size = 1 + alt_1_inverse_ratio * 0.1;
    alt_1_info_size = 2 - alt_1_inverse_ratio * 0.1;

    alt_2_inverse_ratio = $("#alt-2-inverse-ratio").val() || default_inverse_ratio;
    alt_2_name_size = 1 + alt_2_inverse_ratio * 0.1;
    alt_2_info_size = 2 - alt_2_inverse_ratio * 0.1;				

    alt_3_inverse_ratio = $("#alt-3-inverse-ratio").val() || default_inverse_ratio;
    alt_3_name_size = 1 + alt_3_inverse_ratio * 0.1;
    alt_3_info_size = 2 - alt_3_inverse_ratio * 0.1;

    alt_4_inverse_ratio = $("#alt-4-inverse-ratio").val() || default_inverse_ratio;
    alt_4_name_size = 1 + alt_4_inverse_ratio * 0.1;
    alt_4_info_size = 2 - alt_4_inverse_ratio * 0.1;				

    //Line Spacing
    alt_1_line_spacing = $("#alt-1-line-spacing").val() || default_line_spacing;
    alt_2_line_spacing = $("#alt-2-line-spacing").val() || default_line_spacing;
    alt_3_line_spacing = $("#alt-3-line-spacing").val() || default_line_spacing;
    alt_4_line_spacing = $("#alt-4-line-spacing").val() || default_line_spacing;

    //Lower Third Size
    alt_1_size = $("#alt-1-size").val() || default_size;
    alt_2_size = $("#alt-2-size").val() || default_size;
    alt_3_size = $("#alt-3-size").val() || default_size;
    alt_4_size = $("#alt-4-size").val() || default_size;

    //Logo Size
    alt_1_logo_size = Number($("#alt-1-logo-size").val()) * 0.25 + 3.5 || default_logo_size_em;
    alt_2_logo_size = Number($("#alt-2-logo-size").val()) * 0.25 + 3.5 || default_logo_size_em;
    alt_3_logo_size = Number($("#alt-3-logo-size").val()) * 0.25 + 3.5 || default_logo_size_em;
    alt_4_logo_size = Number($("#alt-4-logo-size").val()) * 0.25 + 3.5 || default_logo_size_em;

    //Shadow Amount
    alt_1_shadow_amount = $("#alt-1-shadow-amount").val() * 0.1 || default_shadow_amount_em;
    alt_2_shadow_amount = $("#alt-2-shadow-amount").val() * 0.1 || default_shadow_amount_em;
    alt_3_shadow_amount = $("#alt-3-shadow-amount").val() * 0.1 || default_shadow_amount_em;
    alt_4_shadow_amount = $("#alt-4-shadow-amount").val() * 0.1 || default_shadow_amount_em;

    //Background Corners
    alt_1_corners = (Number($("#alt-1-corners").val()) * 0.25) || default_corners;
    alt_2_corners = (Number($("#alt-2-corners").val()) * 0.25) || default_corners;
    alt_3_corners = (Number($("#alt-3-corners").val()) * 0.25) || default_corners;
    alt_4_corners = (Number($("#alt-4-corners").val()) * 0.25) || default_corners;

    //Border Thickness amount
    alt_1_border_thickness_amount = $("#alt-1-border-thickness-amount").val() || default_border_thickness_amount;
    alt_2_border_thickness_amount = $("#alt-2-border-thickness-amount").val() || default_border_thickness_amount;
    alt_3_border_thickness_amount = $("#alt-3-border-thickness-amount").val() || default_border_thickness_amount;
    alt_4_border_thickness_amount = $("#alt-4-border-thickness-amount").val() || default_border_thickness_amount;

    //Margin from de borders Horizontal and Vertical
    alt_1_margin_h = $("#alt-1-margin-h").val() || default_margin_h;
    alt_1_margin_v = $("#alt-1-margin-v").val() || default_margin_v;

    alt_2_margin_h = $("#alt-2-margin-h").val() || default_margin_h;
    alt_2_margin_v = $("#alt-2-margin-v").val() || default_margin_v;

    alt_3_margin_h = $("#alt-3-margin-h").val() || default_margin_h;
    alt_3_margin_v = $("#alt-3-margin-v").val() || default_margin_v;

    alt_4_margin_h = $("#alt-4-margin-h").val() || default_margin_h;
    alt_4_margin_v = $("#alt-4-margin-v").val() || default_margin_v;

    styleRestrictions();
}

function styleRestrictions() {
    switch (alt_1_style){
        case "1":
            //Disable: align center | Enable: logo;
            document.getElementById("alt-1-align-center").disabled = true;
            if (document.getElementById("alt-1-align-center").checked){
                $("#alt-1-align-left").prop('checked', true).change();
            }
            document.getElementById("alt-1-logo").disabled = false;
            document.getElementById("alt-1-logo-size").disabled = false;
            // document.getElementById("alt-1-background").classList.remove("locked");
            $("#alt-1-style-border-color-appearance > :nth-child(3)").addClass("disabled");

            break;
        case "2":
            //Disable: logo | Enable: align center;
            document.getElementById("alt-1-align-center").disabled = false;
            document.getElementById("alt-1-logo").disabled = true;
            document.getElementById("alt-1-logo-size").disabled = false;
            if (document.getElementById("alt-1-logo").checked){
                $("#alt-1-logo").prop('checked', false).change();
            }
            // document.getElementById("alt-1-background").classList.remove("locked");
            $("#alt-1-style-border-color-appearance > :nth-child(3)").removeClass("disabled");

            break;
        case "3":
            //Disable: - | Enable: Logo, align center;
            document.getElementById("alt-1-align-center").disabled = true;
            if (document.getElementById("alt-1-align-center").checked){
                $("#alt-1-align-left").prop('checked', true).change();
            }
            document.getElementById("alt-1-logo").disabled = false;
            document.getElementById("alt-1-logo-size").disabled = true;
            $("#alt-1-style-border-color-appearance > :nth-child(3)").removeClass("disabled");
            // $("#alt-1-background").prop('checked', true).change(); NO
            // $("#alt-1-background").prop('checked', true);
            // document.getElementById("alt-1-background").classList.add("locked");

            break;
    }
    switch (alt_2_style){
        case "1":
            //Disable: align center | Enable: logo;
            document.getElementById("alt-2-align-center").disabled = true;
            if (document.getElementById("alt-2-align-center").checked){
                $("#alt-2-align-left").prop('checked', true).change();
            }
            document.getElementById("alt-2-logo").disabled = false;
            document.getElementById("alt-2-logo-size").disabled = false;
            $("#alt-2-style-border-color-appearance > :nth-child(3)").addClass("disabled");
            break;
        case "2":
            //Disable: logo | Enable: align center;
            document.getElementById("alt-2-align-center").disabled = false;
            document.getElementById("alt-2-logo").disabled = true;
            if (document.getElementById("alt-2-logo").checked){
                $("#alt-2-logo").prop('checked', false).change();
            }
            $("#alt-2-style-border-color-appearance > :nth-child(3)").removeClass("disabled");
            break;
        case "3":
            //Disable: - | Enable: Logo, align center;
            document.getElementById("alt-2-align-center").disabled = true;
            if (document.getElementById("alt-2-align-center").checked){
                $("#alt-2-align-left").prop('checked', true).change();
            }
            document.getElementById("alt-2-logo").disabled = false;
            document.getElementById("alt-2-logo-size").disabled = true;
            $("#alt-2-style-border-color-appearance > :nth-child(3)").removeClass("disabled");
            break;
    }
    switch (alt_3_style){
        case "1":
            //Disable: align center | Enable: logo;
            document.getElementById("alt-3-align-center").disabled = true;
            if (document.getElementById("alt-3-align-center").checked){
                $("#alt-3-align-left").prop('checked', true).change();
            }
            document.getElementById("alt-3-logo").disabled = false;
            document.getElementById("alt-3-logo-size").disabled = false;
            $("#alt-3-style-border-color-appearance > :nth-child(3)").addClass("disabled");
            break;
        case "2":
            //Disable: logo | Enable: align center;
            document.getElementById("alt-3-align-center").disabled = false;
            document.getElementById("alt-3-logo").disabled = true;
            if (document.getElementById("alt-3-logo").checked){
                $("#alt-3-logo").prop('checked', false).change();
            }
            $("#alt-3-style-border-color-appearance > :nth-child(3)").removeClass("disabled");
            break;
        case "3":
            //Disable: - | Enable: Logo, align center;
            document.getElementById("alt-3-align-center").disabled = true;
            if (document.getElementById("alt-3-align-center").checked){
                $("#alt-3-align-left").prop('checked', true).change();
            }
            document.getElementById("alt-3-logo").disabled = false;
            document.getElementById("alt-3-logo-size").disabled = true;
            $("#alt-3-style-border-color-appearance > :nth-child(3)").removeClass("disabled");
            break;
    }
    switch (alt_4_style){
        case "1":
            //Disable: align center | Enable: logo;
            document.getElementById("alt-4-align-center").disabled = true;
            if (document.getElementById("alt-4-align-center").checked){
                $("#alt-4-align-left").prop('checked', true).change();
            }
            document.getElementById("alt-4-logo").disabled = false;
            document.getElementById("alt-4-logo-size").disabled = false;
            $("#alt-4-style-border-color-appearance > :nth-child(3)").addClass("disabled");
            break;
        case "2":
            //Disable: logo | Enable: align center;
            document.getElementById("alt-4-align-center").disabled = false;
            document.getElementById("alt-4-logo").disabled = true;
            if (document.getElementById("alt-4-logo").checked){
                $("#alt-4-logo").prop('checked', false).change();
            }
            $("#alt-4-style-border-color-appearance > :nth-child(3)").removeClass("disabled");
            break;
        case "3":
            //Disable: - | Enable: Logo, align center;
            document.getElementById("alt-4-align-center").disabled = true;
            if (document.getElementById("alt-4-align-center").checked){
                $("#alt-4-align-left").prop('checked', true).change();
            }
            document.getElementById("alt-4-logo").disabled = false;
            document.getElementById("alt-4-logo-size").disabled = true;
            $("#alt-4-style-border-color-appearance > :nth-child(3)").removeClass("disabled");
            break;
    }				
}

//////////////////////////////////////

//Receive data from the source
bcr.onmessage = function (ev) {
    const received_data = ev.data;

    if (received_data.resend) {
        refreshData();
        function_send_font();
    } else {

        alt_1_active_time_monitor = received_data.activeTime1_to_send;
        alt_1_inactive_time_monitor = received_data.inactiveTime1_to_send;
        alt_2_active_time_monitor = received_data.activeTime2_to_send;
        alt_2_inactive_time_monitor = received_data.inactiveTime2_to_send;
        alt_3_active_time_monitor = received_data.activeTime3_to_send;
        alt_3_inactive_time_monitor = received_data.inactiveTime3_to_send;
        alt_4_active_time_monitor = received_data.activeTime4_to_send;
        alt_4_inactive_time_monitor = received_data.inactiveTime4_to_send;

        document.getElementById("alt-1-active-time-monitor").innerHTML = alt_1_active_time_monitor;
        document.getElementById("alt-1-inactive-time-monitor").innerHTML = alt_1_inactive_time_monitor;
        document.getElementById("alt-2-active-time-monitor").innerHTML = alt_2_active_time_monitor;
        document.getElementById("alt-2-inactive-time-monitor").innerHTML = alt_2_inactive_time_monitor;
        document.getElementById("alt-3-active-time-monitor").innerHTML = alt_3_active_time_monitor;
        document.getElementById("alt-3-inactive-time-monitor").innerHTML = alt_3_inactive_time_monitor;
        document.getElementById("alt-4-active-time-monitor").innerHTML = alt_4_active_time_monitor
        document.getElementById("alt-4-inactive-time-monitor").innerHTML = alt_4_inactive_time_monitor;

        alt_1_turnoff = (received_data.alt_1_turnoff);
        alt_2_turnoff = (received_data.alt_2_turnoff);
        alt_3_turnoff = (received_data.alt_3_turnoff);
        alt_4_turnoff = (received_data.alt_4_turnoff);


        if (alt_1_turnoff && $("#lower-thirds-switch1").is(':checked')) {
            $("#lower-thirds-switch1").prop('checked', false).change();
        }
        if (alt_2_turnoff && $("#lower-thirds-switch2").is(':checked')) {
            $('#lower-thirds-switch2').prop('checked', false).change();
        }
        if (alt_3_turnoff && $("#lower-thirds-switch3").is(':checked')) {
            $('#lower-thirds-switch3').prop('checked', false).change();
        }
        if (alt_4_turnoff && $("#lower-thirds-switch4").is(':checked')) {
            $('#lower-thirds-switch4').prop('checked', false).change();
        }

        checkSwitches();
    }
}

//////////////////////////////////////

function function_send() {
    //Switch Lock Active Mode ALT ON/OFF
    global_lock_active = (document.getElementById("global-lock-active").checked) ? true : false;

    alt_1_lock_active = (document.getElementById("alt-1-lock-active").checked) ? true : false;
    alt_2_lock_active = (document.getElementById("alt-2-lock-active").checked) ? true : false;
    alt_3_lock_active = (document.getElementById("alt-3-lock-active").checked) ? true : false;
    alt_4_lock_active = (document.getElementById("alt-4-lock-active").checked) ? true : false;


    //////////////////////////////

    global_animation_time = $("#global-animation-time").val();
    if (global_lock_active){
        global_active_time = Infinity;
    } else {
        global_active_time = $("#global-active-time").val();
    }
    global_inactive_time = $("#global-inactive-time").val();

    alt_1_name = $("#alt-1-name:text").val();
    alt_1_info = $("#alt-1-info:text").val();
    alt_1_name_color = $("#alt-1-name-color:text").val();
    alt_1_info_color = $("#alt-1-info-color:text").val();
    alt_1_style_color_1 = $("#alt-1-style-color-1:text").val();
    alt_1_style_color_2 = $("#alt-1-style-color-2:text").val();
    alt_1_style_color_3 = $("#alt-1-style-color-3:text").val();
    alt_1_style_color_4 = $("#alt-1-style-color-4:text").val();

    alt_1_animation_time = $("#alt-1-animation-time").val();
    if (alt_1_lock_active){
        alt_1_active_time = Infinity;
    } else {
        alt_1_active_time = $("#alt-1-active-time").val();
    }
    alt_1_inactive_time = $("#alt-1-inactive-time").val();
    alt_1_logo_image= $("#alt-1-logo-preview").attr("src");

    alt_2_name = $("#alt-2-name:text").val();
    alt_2_info = $("#alt-2-info:text").val();
    alt_2_name_color = $("#alt-2-name-color:text").val();
    alt_2_info_color = $("#alt-2-info-color:text").val();
    alt_2_style_color_1 = $("#alt-2-style-color-1:text").val();
    alt_2_style_color_2 = $("#alt-2-style-color-2:text").val();
    alt_2_style_color_3 = $("#alt-2-style-color-3:text").val();
    alt_2_style_color_4 = $("#alt-2-style-color-4:text").val();
    alt_2_animation_time = $("#alt-2-animation-time").val();
    if (alt_2_lock_active){
        alt_2_active_time = Infinity;
    } else {
        alt_2_active_time = $("#alt-2-active-time").val();
    }
    alt_2_inactive_time = $("#alt-2-inactive-time").val();
    alt_2_logo_image = $("#alt-2-logo-preview").attr("src");

    alt_3_name = $("#alt-3-name:text").val();
    alt_3_info = $("#alt-3-info:text").val();
    alt_3_name_color = $("#alt-3-name-color:text").val();
    alt_3_info_color = $("#alt-3-info-color:text").val();
    alt_3_style_color_1 = $("#alt-3-style-color-1:text").val();
    alt_3_style_color_2 = $("#alt-3-style-color-2:text").val();
    alt_3_style_color_3 = $("#alt-3-style-color-3:text").val();
    alt_3_style_color_4 = $("#alt-3-style-color-4:text").val();
    alt_3_animation_time = $("#alt-3-animation-time").val();
    if (alt_3_lock_active){
        alt_3_active_time = Infinity;
    } else {
        alt_3_active_time = $("#alt-3-active-time").val();
    }
    alt_3_inactive_time = $("#alt-3-inactive-time").val();
    alt_3_logo_image = $("#alt-3-logo-preview").attr("src");

    alt_4_name = $("#alt-4-name:text").val();
    alt_4_info = $("#alt-4-info:text").val();
    alt_4_name_color = $("#alt-4-name-color:text").val();
    alt_4_info_color = $("#alt-4-info-color:text").val();
    alt_4_style_color_1 = $("#alt-4-style-color-1:text").val();
    alt_4_style_color_2 = $("#alt-4-style-color-2:text").val();
    alt_4_style_color_3 = $("#alt-4-style-color-3:text").val();
    alt_4_style_color_4 = $("#alt-4-style-color-4:text").val();
    alt_4_animation_time = $("#alt-4-animation-time").val();
    if (alt_4_lock_active){
        alt_4_active_time = Infinity;
    } else {
        alt_4_active_time = $("#alt-4-active-time").val();
    }
    alt_4_inactive_time = $("#alt-4-inactive-time").val();
    alt_4_logo_image = $("#alt-4-logo-preview").attr("src");

    //Standard Main settings values
    if(!global_lock_active && global_active_time == "") {
        global_active_time = 25;
    }
    if(global_inactive_time == "") {
        global_inactive_time = 420;
    }
    if(global_animation_time == "") {
        global_animation_time = 4;
    }

    //Check Master Switch
    if (document.getElementById("lower-thirds-masterswitch").checked) {
        masterSwitchIsOn = true;
    } else {
        masterSwitchIsOn = false;
    }

    //Check switches
    if (masterSwitchIsOn) {
        //Switch 1
        if (document.getElementById("lower-thirds-switch1").checked){
            alt_1_switch = "true";
        } else {
            alt_1_switch = "false";
        }

        //Switch 2
        if (document.getElementById("lower-thirds-switch2").checked){
            alt_2_switch = "true";
        } else {
            alt_2_switch = "false";
        }

        //Switch 3
        if (document.getElementById("lower-thirds-switch3").checked){
            alt_3_switch = "true";
        } else {
            alt_3_switch = "false";
        }

        //Switch 4
        if (document.getElementById("lower-thirds-switch4").checked){
            alt_4_switch = "true";
        } else {
            alt_4_switch = "false";
        }
    } else {
        //When the Main Switch is OFF all the Lower Thirds area Inactives or OFF.
        alt_1_switch = "false";
        alt_2_switch = "false";
        alt_3_switch = "false";
        alt_4_switch = "false";
    }

    alt_1_waiting_time = alt_1_animation_time || global_animation_time;
    alt_2_waiting_time = alt_2_animation_time || global_animation_time;
    alt_3_waiting_time = alt_3_animation_time || global_animation_time;
    alt_4_waiting_time = alt_4_animation_time || global_animation_time;

    //////////////////////////////

    //Switch Autoload ALT ON/OFF
    alt_1_autoload = (document.getElementById("alt-1-autoload").checked) ? true : false;
    alt_2_autoload = (document.getElementById("alt-2-autoload").checked) ? true : false;
    alt_3_autoload = (document.getElementById("alt-3-autoload").checked) ? true : false;
    alt_4_autoload = (document.getElementById("alt-4-autoload").checked) ? true : false;

    //////////////////////////////

    //Switch Autotrigger ALT ON/OFF
    alt_1_autotrigger = document.getElementById("alt-1-autotrigger").checked;
    alt_2_autotrigger = document.getElementById("alt-2-autotrigger").checked;
    alt_3_autotrigger = document.getElementById("alt-3-autotrigger").checked;
    alt_4_autotrigger = document.getElementById("alt-4-autotrigger").checked;


    //////////////////////////////

    //Switch One-shot Mode ALT ON/OFF
    global_oneshot = (document.getElementById("global-oneshot").checked) ? true : false;

    alt_1_oneshot = (document.getElementById("alt-1-oneshot").checked) ? true : false;
    alt_2_oneshot = (document.getElementById("alt-2-oneshot").checked) ? true : false;
    alt_3_oneshot = (document.getElementById("alt-3-oneshot").checked) ? true : false;
    alt_4_oneshot = (document.getElementById("alt-4-oneshot").checked) ? true : false;

    //////////////////////////////

    //Show the slots numbers
    if (document.getElementById("set-slot-numbers").checked == false) {
        $('.slot-number').each(function(){
            $(this).removeClass("hide");
        });
    } else {
        $('.slot-number').each(function(){
            $(this).addClass("hide");
        });
    }

    //////////////////////////////

    //Create Tooltips to show the contect of the slots
    if (document.getElementById("set-tooltips").checked) {
        $('.panel-bottom > ul > li').each(function(){
            var name_to_tooltip = $(this).children('.stored-name').text();
            var info_to_tooltip = $(this).children('.stored-info').text();
            var isStored = (name_to_tooltip && info_to_tooltip) ? true : false;
            var isTooltip = $(this).children(".tooltiptext")[0] ? true : false;

            if (isTooltip){
                if (!isStored) {
                    $(this).children(".tooltiptext").remove();
                    // $(this).prepend('<span class="tooltiptext"><p>Empty. Click to save.</p></span>');
                }
            } else {
                if (isStored) {
                    $(this).prepend('<span class="tooltiptext">' + name_to_tooltip + '<br>' + info_to_tooltip + '<hr><p>Click and hold to delete.</p></span>');
                }
            }

        });
    } else {
        $('.tooltiptext').each(function(){
            $(this).remove();
        });
    }


    //////////////////////////////

    if (document.getElementById("set-switch-position").checked) {
        $('.switch').each(function(){
            $(this).addClass("switch-left");
        });
        $('.drag-handle').each(function(){
            $(this).addClass("switch-left");
        });
        $('.main-title').addClass("switch-left");

    } else {
        $('.switch').each(function(){
            $(this).removeClass("switch-left");
        });
        $('.drag-handle').each(function(){
            $(this).removeClass("switch-left");
        });
        $('.main-title').removeClass("switch-left");
    }


    //////////////////////////////

    //Switch Preview ALT ON/OFF
    if (document.getElementById("set-preview").checked) {
        $('#alt-preview, .preview-btn').each(function(){
            $(this).removeClass("hide");
        });
    } else {
        $('#alt-preview, .preview-btn').each(function(){
            $(this).addClass("hide");
        });
    }

    if (document.getElementById("alt-1-preview").checked == false) {
        alt_1_preview = "false";
    } else {
        alt_1_preview = "true";
    }
    if (document.getElementById("alt-2-preview").checked == false) {
        alt_2_preview = "false";
    } else {
        alt_2_preview = "true";
    }
    if (document.getElementById("alt-3-preview").checked == false) {
        alt_3_preview = "false";
    } else {
        alt_3_preview = "true";
    }
    if (document.getElementById("alt-4-preview").checked == false) {
        alt_4_preview = "false";
    } else {
        alt_4_preview = "true";
    }


    //////////////////////////////

    //Switch Logo ON/OFF
    if (document.getElementById("alt-1-logo").checked == false) {
        alt_1_logo_switch = "false";
        $("#alt-1-logo-size").addClass("disable");
        $("#alt-1-config-content > .first-edit-container > .logo-container").addClass("hide");
    } else {
        alt_1_logo_switch = "true";
        $("#alt-1-logo-size").removeClass("disable");
        $("#alt-1-config-content > .first-edit-container > .logo-container").removeClass("hide");
    }
    if (document.getElementById("alt-2-logo").checked == false) {
        alt_2_logo_switch = "false";
        $("#alt-2-logo-size").addClass("disable");
        $("#alt-2-config-content > .first-edit-container > .logo-container").addClass("hide");
    } else {
        alt_2_logo_switch = "true";
        $("#alt-2-logo-size").removeClass("disable");
        $("#alt-2-config-content > .first-edit-container > .logo-container").removeClass("hide");
    }
    if (document.getElementById("alt-3-logo").checked == false) {
        alt_3_logo_switch = "false";
        $("#alt-3-logo-size").addClass("disable");
        $("#alt-3-config-content > .first-edit-container > .logo-container").addClass("hide");
    } else {
        alt_3_logo_switch = "true";
        $("#alt-3-logo-size").removeClass("disable");
        $("#alt-3-config-content > .first-edit-container > .logo-container").removeClass("hide");
    }
    if (document.getElementById("alt-4-logo").checked == false) {
        alt_4_logo_switch = "false";
        $("#alt-4-logo-size").addClass("disable");
        $("#alt-4-config-content > .first-edit-container > .logo-container").addClass("hide");
    } else {
        alt_4_logo_switch = "true";
        $("#alt-4-logo-size").removeClass("disable");
        $("#alt-4-config-content > .first-edit-container > .logo-container").removeClass("hide");
    }

    //Switch Background color ON/OFF
    if (document.getElementById("alt-1-background").checked == false) {
        alt_1_background_switch = "false";
        $("#alt-1-style-color-appearance").addClass("disable");
    } else {
        alt_1_background_switch = "true";
        $("#alt-1-style-color-appearance").removeClass("disable");
    }
    if (document.getElementById("alt-2-background").checked == false) {
        alt_2_background_switch = "false";
        $("#alt-2-style-color-appearance").addClass("disable");
    } else {
        alt_2_background_switch = "true";
        $("#alt-2-style-color-appearance").removeClass("disable");
    }
    if (document.getElementById("alt-3-background").checked == false) {
        alt_3_background_switch = "false";
        $("#alt-3-style-color-appearance").addClass("disable");
    } else {
        alt_3_background_switch = "true";
        $("#alt-3-style-color-appearance").removeClass("disable");
    }
    if (document.getElementById("alt-4-background").checked == false) {
        alt_4_background_switch = "false";
        $("#alt-4-style-color-appearance").addClass("disable");
    } else {
        alt_4_background_switch = "true";
        $("#alt-4-style-color-appearance").removeClass("disable");
    }

    //Multiple/Twins checkbox
    $('.twin-checkbox').each(function(){
        twin_name = $(this).attr('name');
        var twin_checkboxes = $("input[type=checkbox][name="+ twin_name +"]");
        twin_checkboxes.on("click", function(e) {
            twin_checkboxes.prop("checked", this.checked);
        });
    });

    //Switch Border color and Border thickness ON/OFF
    if (document.getElementById("alt-1-border-color").checked == false) {
        alt_1_border_switch = "false";
        $("#alt-1-border-thickness-amount").addClass("disable");
        $("#alt-1-style-border-color-appearance").addClass("disable");
    } else {
        alt_1_border_switch = "true";
        $("#alt-1-border-thickness-amount").removeClass("disable");
        $("#alt-1-style-border-color-appearance").removeClass("disable");
    }
    if (document.getElementById("alt-2-border-color").checked == false) {
        alt_2_border_switch = "false";
        $("#alt-2-border-thickness-amount").addClass("disable");
        $("#alt-2-style-border-color-appearance").addClass("disable");
    } else {
        alt_2_border_switch = "true";
        $("#alt-2-border-thickness-amount").removeClass("disable");
        $("#alt-2-style-border-color-appearance").removeClass("disable");
    }
    if (document.getElementById("alt-3-border-color").checked == false) {
        alt_3_border_switch = "false";
        $("#alt-3-border-thickness-amount").addClass("disable");
        $("#alt-3-style-border-color-appearance").addClass("disable");
    } else {
        alt_3_border_switch = "true";
        $("#alt-3-border-thickness-amount").removeClass("disable");
        $("#alt-3-style-border-color-appearance").removeClass("disable");
    }
    if (document.getElementById("alt-4-border-color").checked == false) {
        alt_4_border_switch = "false";
        $("#alt-4-border-thickness-amount").addClass("disable");
        $("#alt-4-style-border-color-appearance").addClass("disable");
    } else {
        alt_4_border_switch = "true";
        $("#alt-4-border-thickness-amount").removeClass("disable");
        $("#alt-4-style-border-color-appearance").removeClass("disable");
    }

    //Switch Shadows ON/OFF
    if (document.getElementById("alt-1-shadows").checked == false) {
        alt_1_shadows = "false";
        $("#alt-1-shadow-amount").addClass("disable");
    } else {
        alt_1_shadows = "true";
        $("#alt-1-shadow-amount").removeClass("disable");
    }
    if (document.getElementById("alt-2-shadows").checked == false) {
        alt_2_shadows = "false";
        $("#alt-2-shadow-amount").addClass("disable");
    } else {
        alt_2_shadows = "true";
        $("#alt-2-shadow-amount").removeClass("disable");
    }
    if (document.getElementById("alt-3-shadows").checked == false) {
        alt_3_shadows = "false";
        $("#alt-3-shadow-amount").addClass("disable");
    } else {
        alt_3_shadows = "true";
        $("#alt-3-shadow-amount").removeClass("disable");
    }
    if (document.getElementById("alt-4-shadows").checked == false) {
        alt_4_shadows = "false";
        $("#alt-4-shadow-amount").addClass("disable");
    } else {
        alt_4_shadows = "true";
        $("#alt-4-shadow-amount").removeClass("disable");
    }

    //Name and Info text appearance (Uppercase and Bold)
    if (document.getElementById("alt-1-name-transform").checked == false) {
        alt_1_name_transform = "normal";
    } else {
        alt_1_name_transform = "uppercase";
    }
    if (document.getElementById("alt-1-name-weight").checked == false) {
        alt_1_name_weight = "lighter";
    } else {
        alt_1_name_weight = "bold";
    }
    if (document.getElementById("alt-2-name-transform").checked == false) {
        alt_2_name_transform = "normal";
    } else {
        alt_2_name_transform = "uppercase";
    }
    if (document.getElementById("alt-2-name-weight").checked == false) {
        alt_2_name_weight = "lighter";
    } else {
        alt_2_name_weight = "bold";
    }
    if (document.getElementById("alt-3-name-transform").checked == false) {
        alt_3_name_transform = "normal";
    } else {
        alt_3_name_transform = "uppercase";
    }
    if (document.getElementById("alt-3-name-weight").checked == false) {
        alt_3_name_weight = "lighter";
    } else {
        alt_3_name_weight = "bold";
    }
    if (document.getElementById("alt-4-name-transform").checked == false) {
        alt_4_name_transform = "normal";
    } else {
        alt_4_name_transform = "uppercase";
    }
    if (document.getElementById("alt-4-name-weight").checked == false) {
        alt_4_name_weight = "lighter";
    } else {
        alt_4_name_weight = "bold";
    }

    if (document.getElementById("alt-1-info-transform").checked == false) {
        alt_1_info_transform = "normal";
    } else {
        alt_1_info_transform = "uppercase";
    }
    if (document.getElementById("alt-1-info-weight").checked == false) {
        alt_1_info_weight = "lighter";
    } else {
        alt_1_info_weight = "bold";
    }
    if (document.getElementById("alt-2-info-transform").checked == false) {
        alt_2_info_transform = "normal";
    } else {
        alt_2_info_transform = "uppercase";
    }
    if (document.getElementById("alt-2-info-weight").checked == false) {
        alt_2_info_weight = "lighter";
    } else {
        alt_2_info_weight = "bold";
    }
    if (document.getElementById("alt-3-info-transform").checked == false) {
        alt_3_info_transform = "normal";
    } else {
        alt_3_info_transform = "uppercase";
    }
    if (document.getElementById("alt-3-info-weight").checked == false) {
        alt_3_info_weight = "lighter";
    } else {
        alt_3_info_weight = "bold";
    }
    if (document.getElementById("alt-4-info-transform").checked == false) {
        alt_4_info_transform = "normal";
    } else {
        alt_4_info_transform = "uppercase";
    }
    if (document.getElementById("alt-4-info-weight").checked == false) {
        alt_4_info_weight = "lighter";
    } else {
        alt_4_info_weight = "bold";
    }

    //Font of the Lower Third
    var font_id_1 = document.getElementById("alt-1-font");
    var alt_1_font = font_id_1.options[font_id_1.selectedIndex].value;
    var font_id_2 = document.getElementById("alt-2-font");
    var alt_2_font = font_id_2.options[font_id_2.selectedIndex].value;
    var font_id_3 = document.getElementById("alt-3-font");
    var alt_3_font = font_id_3.options[font_id_3.selectedIndex].value;
    var font_id_4 = document.getElementById("alt-4-font");
    var alt_4_font = font_id_4.options[font_id_4.selectedIndex].value;

    //Alignment of the Lower Third
    var alt_1_align = $('input[name=alt-1-align]:checked').val();
    if (!alt_1_align) {
        $('#alt-1-align-left').prop('checked', true).change();
    }
    var alt_2_align = $('input[name=alt-2-align]:checked').val();
    if (!alt_2_align) {
        $('#alt-2-align-left').prop('checked', true).change();
    }
    var alt_3_align = $('input[name=alt-3-align]:checked').val();
    if (!alt_3_align) {
        $('#alt-3-align-left').prop('checked', true).change();
    }
    var alt_4_align = $('input[name=alt-4-align]:checked').val();
    if (!alt_4_align) {
        $('#alt-4-align-left').prop('checked', true).change();
    }

    //
    if (global_oneshot){
        document.getElementById("global-inactive-time").classList.add("disable");
    } else {
        document.getElementById("global-inactive-time").classList.remove("disable");
    }
    if (alt_1_oneshot){
        document.getElementById("alt-1-inactive-time").classList.add("disable");
    } else {
        document.getElementById("alt-1-inactive-time").classList.remove("disable");
    }
    if (alt_2_oneshot){
        document.getElementById("alt-2-inactive-time").classList.add("disable");
    } else {
        document.getElementById("alt-2-inactive-time").classList.remove("disable");
    }
    if (alt_3_oneshot){
        document.getElementById("alt-3-inactive-time").classList.add("disable");
    } else {
        document.getElementById("alt-3-inactive-time").classList.remove("disable");
    }
    if (alt_4_oneshot){
        document.getElementById("alt-4-inactive-time").classList.add("disable");
    } else {
        document.getElementById("alt-4-inactive-time").classList.remove("disable");
    }

    //
    if (global_lock_active){
        document.getElementById("global-active-time").classList.add("disable");
    } else {
        document.getElementById("global-active-time").classList.remove("disable");
    }
    if (alt_1_lock_active){
        document.getElementById("alt-1-active-time").classList.add("disable");
        // document.getElementById("alt-1-active-time").value = "Locked";
    } else {
        document.getElementById("alt-1-active-time").classList.remove("disable");
        // document.getElementById("alt-1-active-time").value = "";
    }
    if (alt_2_lock_active){
        document.getElementById("alt-2-active-time").classList.add("disable");
    } else {
        document.getElementById("alt-2-active-time").classList.remove("disable");
    }
    if (alt_3_lock_active){
        document.getElementById("alt-3-active-time").classList.add("disable");
    } else {
        document.getElementById("alt-3-active-time").classList.remove("disable");
    }
    if (alt_4_lock_active){
        document.getElementById("alt-4-active-time").classList.add("disable");
    } else {
        document.getElementById("alt-4-active-time").classList.remove("disable");
    }

    //Shows if custom time settings is used
    if (alt_1_animation_time || (alt_1_active_time && alt_1_active_time != 'Infinity') || alt_1_inactive_time || alt_1_lock_active || alt_1_oneshot) {
        $("#alt-1-custom-times").children(".icon-btn").addClass("active");
    } else {
        $("#alt-1-custom-times").children(".icon-btn").removeClass("active");
    }
    if (alt_2_animation_time || (alt_2_active_time && alt_2_active_time != 'Infinity') || alt_2_inactive_time || alt_2_lock_active || alt_2_oneshot) {
        $("#alt-2-custom-times").children(".icon-btn").addClass("active");
    } else {
        $("#alt-2-custom-times").children(".icon-btn").removeClass("active");
    }
    if (alt_3_animation_time || (alt_3_active_time && alt_3_active_time != 'Infinity') || alt_3_inactive_time || alt_3_lock_active || alt_3_oneshot) {
        $("#alt-3-custom-times").children(".icon-btn").addClass("active");
    } else {
        $("#alt-3-custom-times").children(".icon-btn").removeClass("active");
    }
    if (alt_4_animation_time || (alt_4_active_time && alt_4_active_time != 'Infinity') || alt_4_inactive_time || alt_4_lock_active || alt_4_oneshot) {
        $("#alt-4-custom-times").children(".icon-btn").addClass("active");
    } else {
        $("#alt-4-custom-times").children(".icon-btn").removeClass("active");
    }

    bc.postMessage({global_animation_time, global_active_time, global_inactive_time, alt_1_switch, alt_1_style, alt_1_name, alt_1_info, alt_1_name_size, alt_1_info_size , alt_1_name_transform, alt_1_info_transform, alt_1_name_weight, alt_1_info_weight, alt_1_name_color, alt_1_info_color, alt_1_style_color_1, alt_1_style_color_2, alt_1_logo_switch, alt_1_background_switch, alt_1_shadows, alt_1_align, alt_1_size, alt_1_margin_h, alt_1_margin_v, alt_1_line_spacing, alt_1_font, alt_2_switch, alt_2_style, alt_2_name, alt_2_info, alt_2_name_size, alt_2_info_size , alt_2_name_transform, alt_2_info_transform, alt_2_name_weight, alt_2_info_weight, alt_2_name_color, alt_2_info_color, alt_2_style_color_1, alt_2_style_color_2, alt_2_logo_switch, alt_2_background_switch, alt_2_shadows, alt_2_align, alt_2_size, alt_2_margin_h, alt_2_margin_v, alt_2_line_spacing, alt_2_font, alt_3_switch, alt_3_style, alt_3_name, alt_3_info, alt_3_name_size, alt_3_info_size , alt_3_name_transform, alt_3_info_transform, alt_3_name_weight, alt_3_info_weight, alt_3_name_color, alt_3_info_color, alt_3_style_color_1, alt_3_style_color_2, alt_3_logo_switch, alt_3_background_switch, alt_3_shadows, alt_3_align, alt_3_size, alt_3_margin_h, alt_3_margin_v, alt_3_line_spacing, alt_3_font, alt_4_switch, alt_4_style, alt_4_name, alt_4_info, alt_4_name_size, alt_4_info_size , alt_4_name_transform, alt_4_info_transform, alt_4_name_weight, alt_4_info_weight, alt_4_name_color, alt_4_info_color, alt_4_style_color_1, alt_4_style_color_2, alt_4_logo_switch, alt_4_background_switch, alt_4_shadows, alt_4_align, alt_4_size, alt_4_margin_h, alt_4_margin_v, alt_4_line_spacing, alt_4_font, alt_1_animation_time, alt_1_active_time, alt_1_inactive_time, alt_2_animation_time, alt_2_active_time, alt_2_inactive_time, alt_3_animation_time, alt_3_active_time, alt_3_inactive_time, alt_4_animation_time, alt_4_active_time, alt_4_inactive_time, alt_1_logo_image, alt_2_logo_image, alt_3_logo_image, alt_4_logo_image, global_oneshot, alt_1_oneshot, alt_2_oneshot, alt_3_oneshot, alt_4_oneshot, alt_1_logo_size, alt_1_shadow_amount, alt_1_corners, alt_1_border_switch, alt_1_border_thickness_amount, alt_1_style_color_3, alt_1_style_color_4, alt_2_logo_size, alt_2_shadow_amount, alt_2_corners, alt_2_border_switch, alt_2_border_thickness_amount, alt_2_style_color_3, alt_2_style_color_4, alt_3_logo_size, alt_3_shadow_amount, alt_3_corners, alt_3_border_switch, alt_3_border_thickness_amount, alt_3_style_color_3, alt_3_style_color_4, alt_4_logo_size, alt_4_shadow_amount, alt_4_corners, alt_4_border_switch, alt_4_border_thickness_amount, alt_4_style_color_3, alt_4_style_color_4, alt_1_preview, alt_2_preview, alt_3_preview, alt_4_preview});
}

//Send New Fonts to source
function function_send_font() {
    $.each(fontlist_urls, function(i) {
        new_font_to_send = fontlist_urls[i];
        bcf.postMessage({new_font_to_send});
    });					
}

//Read txt file and call writeLocalStorage function
document.getElementById('importFile').onchange = function(){
    var file = this.files[0];
    var reader = new FileReader();
    reader.onload = function(progressEvent){
        localStorage.clear();
        
        writeLocalStorage(this.result);
    };
    reader.readAsText(file);
};

function openTab(element, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById('tab-'+cityName).style.display = "block";
    element.className += " active";
    updateMoreMaxHeight()
}

//Create Tooltips to show settings info
function settingsTooltips (){
    const tooltip = {
        "global_animation_time" : "Length of the in and out animation.<br>Default: 4 sec.",
        "global_active_time" : "How long the LT is active.<br>Default: 25 sec.",
        "global_inactive_time" : "How long the LT is inactive.<br>Default: 420 sec." ,
        "lock_active" : "Lock the active state: Always active.",
        "oneshot" : "Oneshot: Turns off the LT Switch when it goes into inactive state.",
        "preview" : "Show/hide the LT in the preview window",
        "align_left" : "Left alignment.",
        "align_center" : "Center alignment.",
        "align_right" : "Right alignment.",
        "style" : "Style: Changes the look of the LT.",
        "size" : "Size of the LT.",
        "margin" : "Horizontal and vertical margin.",
        "text_size" : "Ratio between the size of the texts.",
        "line_spacing" : "Space between texts.",					
        "font" : "LT Text font.",
        "logo" : "Show/hide the logo image.",
        "logo_size" : "Size of the logo image.",
        "shadow" : "Show/hide shadows.",
        "shadow_opacity" : "Shadows opacity.",
        "fill_colors" : "Enable/disable fill or background colors.",
        "corners" : "Round corners.",
        "borders" : "Enable/disable borders.",
        "borders_thinkness" : "Border thickness.",
        "uppercase" : "Enable/disable uppercase.",
        "bold" : "Enable/disable bold.",
        "clean" : "Clear the text fields and set the logo to default.",
        "autotrigger" : "Autotrigger: Turns on the switch automatically when a slot memory is loaded.",
        "autoload" : "Autoload: Loads automatically the next memory slot every time it goes to the inactive state. Ready to display in the next cycle.",
        "custom_times" : "Show/hide custom time settings.",
        "animation_time" : "Length of the in and out animation.",
        "active_time" : "How long the LT is active.",
        "inactive_time" : "How long the LT is inactive.",
        "preview_window" : "Show/hide preview window.",
        "custom_fonts" : "Add fonts from Google Fonts.",
        "default_logos" : "Change the default logos of each LT.<br>Make sure to copy the logo files into the logos folder.<br>You can use JPG, PNG, TIFF, GIF, etc.<br>With transparency or animated.",
    };

    $("#global-animation-time").attr("title", tooltip.global_animation_time);
    $("#global-active-time").attr("title", tooltip.global_active_time);
    $("#global-inactive-time").attr("title", tooltip.global_inactive_time);
    $("#alt-1-animation-time, #alt-2-animation-time, #alt-3-animation-time, #alt-4-animation-time").attr("title", tooltip.animation_time);
    $("#alt-1-active-time, #alt-2-active-time, #alt-3-active-time, #alt-4-active-time").attr("title", tooltip.active_time);
    $("#alt-1-inactive-time, #alt-2-inactive-time, #alt-3-inactive-time, #alt-4-inactive-time").attr("title", tooltip.inactive_time);
    $("#global-lock-active, #alt-1-lock-active, #alt-2-lock-active, #alt-3-lock-active, #alt-4-lock-active").parent().attr("title", tooltip.lock_active);
    $("#global-oneshot, #alt-1-oneshot, #alt-2-oneshot, #alt-3-oneshot, #alt-4-oneshot").parent().attr("title", tooltip.oneshot);
    
    $("#alt-1-preview, #alt-2-preview, #alt-3-preview, #alt-4-preview").parent().attr("title", tooltip.preview);
    $("#alt-1-align-left, #alt-2-align-left, #alt-3-align-left, #alt-4-align-left").next().attr("title", tooltip.align_left);
    $("#alt-1-align-center, #alt-2-align-center, #alt-3-align-center, #alt-4-align-center").next().attr("title", tooltip.align_center);
    $("#alt-1-align-right, #alt-2-align-right, #alt-3-align-right, #alt-4-align-right").next().attr("title", tooltip.align_right);
    $("#alt-1-style, #alt-2-style, #alt-3-style, #alt-4-style").parent().parent().attr("title", tooltip.style);
    $("#alt-1-size, #alt-2-size, #alt-3-size, #alt-4-size").parent().parent().attr("title", tooltip.size);
    $("#alt-1-margin-h, #alt-2-margin-h, #alt-3-margin-h, #alt-4-margin-h").parent().parent().attr("title", tooltip.margin);
    $("#alt-1-inverse-ratio, #alt-2-inverse-ratio, #alt-3-inverse-ratio, #alt-4-inverse-ratio").parent().parent().attr("title", tooltip.text_size);
    $("#alt-1-line-spacing, #alt-2-line-spacing, #alt-3-line-spacing, #alt-4-line-spacing").parent().parent().attr("title", tooltip.line_spacing);
    $("#alt-1-font, #alt-2-font, #alt-3-font, #alt-4-font").parent().attr("title", tooltip.font);
    $("#alt-1-logo, #alt-2-logo, #alt-3-logo, #alt-4-logo").parent().attr("title", tooltip.logo);
    $("#alt-1-logo-size, #alt-2-logo-size, #alt-3-logo-size, #alt-4-logo-size").parent().attr("title", tooltip.logo_size);
    $("#alt-1-shadows, #alt-2-shadows, #alt-3-shadows, #alt-4-shadows").parent().attr("title", tooltip.shadow);
    $("#alt-1-shadow-amount, #alt-2-shadow-amount, #alt-3-shadow-amount, #alt-4-shadow-amount").parent().attr("title", tooltip.shadow_opacity);
    $("#alt-1-background, #alt-2-background, #alt-3-background, #alt-4-background").parent().attr("title", tooltip.fill_colors);
    $("#alt-1-corners, #alt-2-corners, #alt-3-corners, #alt-4-corners").parent().parent().attr("title", tooltip.corners);
    $("#alt-1-border-thickness, #alt-2-border-thickness, #alt-3-border-thickness #alt-4-border-thickness").parent().attr("title", tooltip.borders);
    $("#alt-1-border-color, #alt-2-border-color, #alt-3-border-color, #alt-4-border-color").parent().attr("title", tooltip.borders);
    $("#alt-1-border-thickness-amount, #alt-2-border-thickness-amount, #alt-3-border-thickness-amount, #alt-4-border-thickness-amount").parent().attr("title", tooltip.borders_thinkness);

    $("#alt-1-clean-inputs, #alt-2-clean-inputs, #alt-3-clean-inputs, #alt-4-clean-inputs").attr("title", tooltip.clean);
    $("#alt-1-autotrigger, #alt-2-autotrigger, #alt-3-autotrigger, #alt-4-autotrigger").parent().attr("title", tooltip.autotrigger);
    $("#alt-1-autoload, #alt-2-autoload, #alt-3-autoload, #alt-4-autoload").parent().attr("title", tooltip.autoload);
    $("#alt-1-custom-times, #alt-2-custom-times, #alt-3-custom-times, #alt-4-custom-times").attr("title", tooltip.custom_times);

    $("#fonts-options").children().first().attr("title", tooltip.custom_fonts);
    $(".logos-options").children().first().attr("title", tooltip.default_logos);
    $("#toggle-preview").attr("title", tooltip.preview_window);
    
    $(document).tooltip({  
        show: { delay: 600, duration: 200 },
        open: function(event, ui)  
        {  
            ui.tooltip.hover(  
            function () {  
                $(this).fadeTo("slow", 0.2);  
            });  
        },
        content: function() {
            return $(this).attr("title");
        }
    });
}

//Read all localstorage data
function getLocalStorage() {
    var a = {};
    for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        var v = localStorage.getItem(k);
        a[k] = v;
    }
    var s = JSON.stringify(a);
    return s;
}

//Save data to localStorage
function writeLocalStorage(data) {
    var o = JSON.parse(data);
    for (var property in o) {
        if (o.hasOwnProperty(property)) {
            localStorage.setItem(property, o[property]);
        }
    }
    location.reload();
}

//Copy all data to clipboard
function exportData() {
    var allData = getLocalStorage();
    document.getElementById("dataInput").value = allData;
    var copyText = document.getElementById("dataInput");

    //Open the Popup "Copied to Clipboard"
    openExportPopup();

    //Select text input and copy to the clipboard
    copyText.select();
    document.execCommand("copy");
}


function loadData () {
    $('.storable').each(function(){    
        var id = $(this).attr('id');
        var value = localStorage.getItem(id);
        var default_value = $(this).attr('value');

        if(value) {
            $(this).val(value);
        } else if (default_value) {
            $(this).val(default_value);
        }
    });

    $('.logo-storable').each(function(){    
        var id = $(this).attr('id');
        var value = localStorage.getItem(id);
        if(value != "undefined" && value != ""){
            $(this).attr('src', value);
        } else {
            //Set all to default the first time
            if (id == "alt-1-logo-preview" || id == "alt-1-logo-default"){
                $(this).attr('src', alt_1_logo_default);
            }
            if (id == "alt-2-logo-preview" || id == "alt-2-logo-default"){
                $(this).attr('src', alt_2_logo_default);
            }
            if (id == "alt-3-logo-preview" || id == "alt-3-logo-default"){
                $(this).attr('src', alt_3_logo_default);
            }
            if (id == "alt-4-logo-preview" || id == "alt-4-logo-default"){
                $(this).attr('src', alt_4_logo_default);
            }
        }
    });

    $('.slot-storable').each(function(){    
        var id = $(this).attr('id');
        var value = localStorage.getItem(id);

        $(this).text(value);
    });

    $('.checkbox-storable, .radio-storable').each(function(){
        var id = $(this).attr('id');
        var value = localStorage.getItem(id);

        if (value) {
            $(this).prop('checked', localStorage.getItem(id) === 'true');
        }
    });

    $('.title-storable').each(function(){    
        var id = $(this).attr('id');
        var value = localStorage.getItem(id);
        
        if (value) {
            $(this).text(value);
        }
    });

}

function saveData () {
    // If local storage is empty, call reset to reinitialize
    if (localStorage.length === 0) {
        okResetPopup();
    }

    $('.storable').change(function(){
        refreshData();
        var id = $(this).attr('id');
        var value = $(this).val();
        localStorage.setItem(id, value);
    });

    // Update while input (text or number) is changed
    $(':input[type=text], :input[type=number]').on('input',function(e){
        refreshData();
        var id = $(this).attr('id');
        var value = $(this).val();
        localStorage.setItem(id, value);
    });

    $('.logo-storable').change(function(){
        refreshData();
        var id = $(this).attr('id');
        var value = $(this).attr('src');
        localStorage.setItem(id, value);              
    });

    $('.slot-storable, .title-storable').change(function(){
        refreshData();
        var id = $(this).attr('id');
        var value = $(this).text();
        localStorage.setItem(id, value);
    });

    $('.checkbox-storable').change(function(){
        refreshData();
        var id = $(this).attr('id');
        localStorage.setItem(id, $(this).is(':checked'));

        // Check for a twin chekcbox
        if ($(this).hasClass('twin-checkbox')) {
            const twin =$(this).parents('.grid-row').find('.twin-checkbox').not(this);
            id = twin.attr('id');
            localStorage.setItem(id, twin.is(':checked'));
        }
    });

    $('.radio-storable').change(function(){
        refreshData();
        var radio_name = $(this).attr('name');
        $(':input[name=' + radio_name + ']').each(function(){
            var id = $(this).attr('id');
            localStorage.setItem(id, $(this).is(':checked'));
        });
    });

    $('.font-storable, .select-settings-storable').change(function(){
        refreshData();
        var id =  $(this).attr('id');
        localStorage.setItem(id, this.value);
    });

    /**
        * Indirect changes
        */
    $(':button').on('click',function(e){
        // Lanza evento de cambio del input superior
        $(this).parent().find('input').change()
    });

    $('.slot-number').on('click',function(e){
        // Lanza evento de cambio de los divs hermanos
        $(this).siblings('.slot-storable').change();
    });
}

function refreshData() {
    console.log('refreshData');
    checkLogos();
    checkSlots("#alt-1-memory-slots", "#alt-1-name", "#alt-1-info", "#alt-1-logo-preview");
    checkSlots("#alt-2-memory-slots", "#alt-2-name", "#alt-2-info", "#alt-2-logo-preview");
    checkSlots("#alt-3-memory-slots", "#alt-3-name", "#alt-3-info", "#alt-3-logo-preview");
    checkSlots("#alt-4-memory-slots", "#alt-4-name", "#alt-4-info", "#alt-4-logo-preview");
    getAppearance();
    checkSwitches();
    function_send();
}

function checkUpdates() {
    checkHotkeys();
    updateHotkeys();
}

settingsTooltips();
loadDefaultValues();
loadData();
updateCustomFontList();
refreshData();
checkSwitches();
saveData();
setInterval(() => checkUpdates(), 200);

// Wait document to be ready to do some stuff
$( document ).ready(function() {
    $('#defaultTab').click();
});

export {
    openTab,
    openLogoPopup,
    exportData,
    openResetPopup,
    cancelLogoPopup,
    removeLogoPopup,
    okLogoPopup,
    okExportPopup,
    cancelResetPopup,
    okResetPopup,
}
