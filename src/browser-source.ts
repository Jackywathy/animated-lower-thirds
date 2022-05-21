// @ts-nocheck
import {getUrlParameter, animationOut, animationIn, stopTimeCount, activeCount, startInactiveCount, inactiveCount,
    startActiveCount, loadLogo} from "./browser-source-fixed.ts"

// Check preview
const mode = getUrlParameter('mode');

//Check mode and change de channel to receive switches orders or preview orders
if (mode == "preview") {
    document.body.classList.add('preview');
}


let alt_1_logo_image_old;
let alt_2_logo_image_old;
let alt_3_logo_image_old;
let alt_4_logo_image_old;

let alt_1_align_old = "left";
let alt_2_align_old = "left";
let alt_3_align_old = "left";
let alt_4_align_old = "left";

let alt_1_style_old;
let alt_2_style_old;
let alt_3_style_old;
let alt_4_style_old;

let canIn1 = false;
let canIn2 = false;
let canIn3 = false;
let canIn4 = false;

///////////////////////////
bcp.onmessage = function (ev) {
    const received_data = ev.data;
    const {global_animation_time, global_oneshot} = received_data;

    if (mode != "preview") {
        activeTime = received_data.global_active_time;
    } else {
        activeTime = Infinity;
    }
    inactiveTime = received_data.global_inactive_time;

    //Animated Lower Thirds 1
    const {alt_1_style, alt_1_name, alt_1_info, alt_1_name_size, alt_1_info_size, alt_1_name_transform, alt_1_info_transform,
        alt_1_name_weight, alt_1_info_weight, alt_1_name_color, alt_1_info_color, alt_1_logo_switch, alt_1_background_switch,
        alt_1_shadows, alt_1_align = "left", alt_1_size, alt_1_margin_h, alt_1_margin_v, alt_1_font , alt_1_logo_image = "../logos/logo_1.png",
        alt_1_logo_size, alt_1_shadow_amount, alt_1_corners, alt_1_border_switch} = received_data;
    let {alt_1_switch, alt_1_preview, alt_1_style_color_1, alt_1_style_color_2, alt_1_line_spacing, alt_1_border_thickness_amount, alt_1_style_color_3, alt_1_style_color_4} = received_data;

    document.getElementById("alt-1-name").innerHTML = alt_1_name;
    document.getElementById("alt-1-info").innerHTML = alt_1_info;

    if (alt_1_background_switch == "false"){
        alt_1_style_color_1 = "none";
        alt_1_style_color_2 = "none";
    }

    alt_1_line_spacing = alt_1_line_spacing * 0.1;
    alt_1_border_thickness_amount = alt_1_border_thickness_amount * 0.1;

    if (alt_1_border_switch == "false"){
        alt_1_style_color_3 = "none";
        alt_1_style_color_4 = "none";
        alt_1_border_thickness_amount = 0;
    }

    //Use the global times settins if custom times is empty
    alt_1_animation_time = Number(received_data.alt_1_animation_time || global_animation_time);
    alt_1_active_time = Number(received_data.alt_1_active_time || activeTime);
    alt_1_inactive_time = Number(received_data.alt_1_inactive_time || inactiveTime);

    //Animated Lower Thirds 2
    const {alt_2_style, alt_2_name, alt_2_info, alt_2_name_size, alt_2_info_size, alt_2_name_transform, alt_2_info_transform,
        alt_2_name_weight, alt_2_info_weight, alt_2_name_color, alt_2_info_color, alt_2_logo_switch, alt_2_background_switch,
        alt_2_shadows, alt_2_align = "left", alt_2_size, alt_2_margin_h, alt_2_margin_v, alt_2_font, alt_2_logo_image = "../logos/logo_2.png",
        alt_2_logo_size, alt_2_shadow_amount, alt_2_corners, alt_2_border_switch} = received_data;
    let {alt_2_switch, alt_2_preview, alt_2_style_color_1, alt_2_style_color_2, alt_2_line_spacing, alt_2_border_thickness_amount, alt_2_style_color_3, alt_2_style_color_4} = received_data;

    document.getElementById("alt-2-name").innerHTML = alt_2_name;
    document.getElementById("alt-2-info").innerHTML = alt_2_info;

    if (alt_2_background_switch == "false"){
        alt_2_style_color_1 = "none";
        alt_2_style_color_2 = "none";
    }

    alt_2_line_spacing = alt_2_line_spacing * 0.1;
    alt_2_border_thickness_amount = alt_2_border_thickness_amount * 0.1;

    if (alt_2_border_switch == "false"){
        alt_2_style_color_3 = "none";
        alt_2_style_color_4 = "none";
        alt_2_border_thickness_amount = 0;
    }

    alt_2_animation_time = Number(received_data.alt_2_animation_time || global_animation_time);
    alt_2_active_time = Number(received_data.alt_2_active_time || activeTime);
    alt_2_inactive_time = Number(received_data.alt_2_inactive_time || inactiveTime);

    //Animated Lower Thirds 3
    const {alt_3_style, alt_3_name, alt_3_info, alt_3_name_size, alt_3_info_size, alt_3_name_transform, alt_3_info_transform,
        alt_3_name_weight, alt_3_info_weight, alt_3_name_color, alt_3_info_color, alt_3_logo_switch, alt_3_background_switch,
        alt_3_shadows, alt_3_align = "left", alt_3_size, alt_3_margin_h, alt_3_margin_v, alt_3_font, alt_3_logo_image = "../logos/logo_3.png",
        alt_3_logo_size, alt_3_shadow_amount, alt_3_corners, alt_3_border_switch} = received_data;
    let {alt_3_switch, alt_3_preview, alt_3_style_color_1, alt_3_style_color_2, alt_3_line_spacing, alt_3_border_thickness_amount, alt_3_style_color_3, alt_3_style_color_4} = received_data;

    document.getElementById("alt-3-name").innerHTML = alt_3_name;
    document.getElementById("alt-3-info").innerHTML = alt_3_info;

    if (alt_3_background_switch == "false"){
        alt_3_style_color_1 = "none";
        alt_3_style_color_2 = "none";
    }

    alt_3_line_spacing = alt_3_line_spacing * 0.1;
    alt_3_border_thickness_amount = alt_3_border_thickness_amount * 0.1;

    if (alt_3_border_switch == "false"){
        alt_3_style_color_3 = "none";
        alt_3_style_color_4 = "none";
        alt_3_border_thickness_amount = 0;
    }

    alt_3_animation_time = Number(received_data.alt_3_animation_time || global_animation_time);
    alt_3_active_time = Number(received_data.alt_3_active_time || activeTime);
    alt_3_inactive_time = Number(received_data.alt_3_inactive_time || inactiveTime);

    //Animated Lower Thirds 4
    const {alt_4_style, alt_4_name, alt_4_info, alt_4_name_size, alt_4_info_size, alt_4_name_transform, alt_4_info_transform,
        alt_4_name_weight, alt_4_info_weight, alt_4_name_color, alt_4_info_color, alt_4_logo_switch, alt_4_background_switch,
        alt_4_shadows, alt_4_align = "left", alt_4_size, alt_4_margin_h, alt_4_margin_v, alt_4_font, alt_4_logo_image = "../logos/logo_4.png",
        alt_4_logo_size, alt_4_shadow_amount, alt_4_corners, alt_4_border_switch} = received_data;
    let {alt_4_switch, alt_4_preview, alt_4_style_color_1, alt_4_style_color_2, alt_4_line_spacing, alt_4_border_thickness_amount, alt_4_style_color_3, alt_4_style_color_4} = received_data;

    document.getElementById("alt-4-name").innerHTML = alt_4_name;
    document.getElementById("alt-4-info").innerHTML = alt_4_info;

    if (alt_4_background_switch == "false"){
        alt_4_style_color_1 = "none";
        alt_4_style_color_2 = "none";
    }			

    alt_4_line_spacing = alt_4_line_spacing * 0.1;
    alt_4_border_thickness_amount = alt_4_border_thickness_amount * 0.1;

    if (alt_4_border_switch == "false"){
        alt_4_style_color_3 = "none";
        alt_4_style_color_4 = "none";
        alt_4_border_thickness_amount = 0;
    }			

    alt_4_animation_time = Number(received_data.alt_4_animation_time || global_animation_time);
    alt_4_active_time = Number(received_data.alt_4_active_time || activeTime);
    alt_4_inactive_time = Number(received_data.alt_4_inactive_time || inactiveTime);

    //Use the global oneshot setting if oneshot switch is off or inactive field is empty
    alt_1_oneshot = received_data.alt_1_oneshot || (global_oneshot && !received_data.alt_1_inactive_time);
    alt_2_oneshot = received_data.alt_2_oneshot || (global_oneshot && !received_data.alt_2_inactive_time);
    alt_3_oneshot = received_data.alt_3_oneshot || (global_oneshot && !received_data.alt_3_inactive_time);
    alt_4_oneshot = received_data.alt_4_oneshot || (global_oneshot && !received_data.alt_4_inactive_time);

    if (alt_1_inactive_time < alt_1_animation_time){
        alt_1_inactive_time = alt_1_animation_time;
    }
    if (alt_2_inactive_time < alt_2_animation_time){
        alt_2_inactive_time = alt_2_animation_time;
    }
    if (alt_3_inactive_time < alt_3_animation_time){
        alt_3_inactive_time = alt_3_animation_time;
    }
    if (alt_4_inactive_time < alt_4_animation_time){
        alt_4_inactive_time = alt_4_animation_time;
    }

    if (alt_1_active_time < alt_1_animation_time){
        alt_1_active_time = alt_1_animation_time;
    }
    if (alt_2_active_time < alt_2_animation_time){
        alt_2_active_time = alt_2_animation_time;
    }
    if (alt_3_active_time < alt_3_animation_time){
        alt_3_active_time = alt_3_animation_time;
    }
    if (alt_4_active_time < alt_4_animation_time){
        alt_4_active_time = alt_4_animation_time;
    }

    //Set time infinite in the preview panel
    if (mode == "preview"){
        alt_1_active_time = Infinity;
        alt_2_active_time = Infinity;
        alt_3_active_time = Infinity;
        alt_4_active_time = Infinity;
        alt_1_switch = alt_1_preview;
        alt_2_switch = alt_2_preview;
        alt_3_switch = alt_3_preview;
        alt_4_switch = alt_4_preview;
    }

    //Check the switches
    if (alt_1_switch == "false" || alt_1_name.length == 0 || alt_1_info.length == 0) {
        if(canIn1){
            canIn1 = false;
            stopTimeCount("lower-third-1");
        } else {
            stopTimeCount("lower-third-1");
        }
    } else {
        if(!canIn1){
            canIn1 = true;
            document.getElementById("lower-third-1").classList.remove("hide-anim");
            startActiveCount("lower-third-1");
        }
    };

    if (alt_2_switch == "false" || alt_2_name.length == 0 || alt_2_info.length == 0) {
        if(canIn2){
            canIn2 = false;
            stopTimeCount("lower-third-2");
        } else {
            stopTimeCount("lower-third-2");
        }
    } else {
        if(!canIn2){
            canIn2 = true;
            document.getElementById("lower-third-2").classList.remove("hide-anim");
            startActiveCount("lower-third-2");
        }
    };

    if (alt_3_switch == "false" || alt_3_name.length == 0 || alt_3_info.length == 0) {
        if(canIn3){
            canIn3 = false;
            stopTimeCount("lower-third-3");
        } else {
            stopTimeCount("lower-third-3");
        }
    } else {
        if(!canIn3){
            canIn3 = true;
            document.getElementById("lower-third-3").classList.remove("hide-anim");
            startActiveCount("lower-third-3");
        }
    };
    if (alt_4_switch == "false" || alt_4_name.length == 0 || alt_4_info.length == 0) {
        if(canIn4){
            canIn4 = false;
            stopTimeCount("lower-third-4");
        } else {
            stopTimeCount("lower-third-4");
        }
    } else {
        if(!canIn4){
            canIn4 = true;
            document.getElementById("lower-third-4").classList.remove("hide-anim");
            startActiveCount("lower-third-4");
        }
    };

    //Change the alignment of the lower third
    if (alt_1_align != alt_1_align_old){
        if (alt_1_switch == "false"){
            document.getElementById("lower-third-1").classList.add("hide-anim");
        }
        document.getElementById("lower-third-1").classList.replace("left", alt_1_align);
        document.getElementById("lower-third-1").classList.replace("center", alt_1_align);
        document.getElementById("lower-third-1").classList.replace("right", alt_1_align);
    }
    alt_1_align_old = alt_1_align;

    if (alt_2_align != alt_2_align_old){
        if (alt_2_switch == "false"){
            document.getElementById("lower-third-2").classList.add("hide-anim");
        }
        document.getElementById("lower-third-2").classList.replace("left", alt_2_align);
        document.getElementById("lower-third-2").classList.replace("center", alt_2_align);
        document.getElementById("lower-third-2").classList.replace("right", alt_2_align);
    }
    alt_2_align_old = alt_2_align;

    if (alt_3_align != alt_3_align_old){
        if (alt_3_switch == "false"){
            document.getElementById("lower-third-3").classList.add("hide-anim");
        }
        document.getElementById("lower-third-3").classList.replace("left", alt_3_align);
        document.getElementById("lower-third-3").classList.replace("center", alt_3_align);
        document.getElementById("lower-third-3").classList.replace("right", alt_3_align);
    }
    alt_3_align_old = alt_3_align;

    if (alt_4_align != alt_4_align_old){
        if (alt_4_switch == "false"){
            document.getElementById("lower-third-4").classList.add("hide-anim");
        }
        document.getElementById("lower-third-4").classList.replace("left", alt_4_align);
        document.getElementById("lower-third-4").classList.replace("center", alt_4_align);
        document.getElementById("lower-third-4").classList.replace("right", alt_4_align);
    }
    alt_4_align_old = alt_4_align;

    //Change the style of the lower third
    if (alt_1_style != alt_1_style_old){
        if (alt_1_switch == "false"){
            document.getElementById("lower-third-1").classList.add("hide-anim");
        }
        document.getElementById("lower-third-1").classList.replace("style-1", "style-" + alt_1_style);
        document.getElementById("lower-third-1").classList.replace("style-2", "style-" + alt_1_style);
        document.getElementById("lower-third-1").classList.replace("style-3", "style-" + alt_1_style);
        //document.getElementById("lower-third-1").classList.replace("style-4", "style-" + alt_1_style);
        //document.getElementById("lower-third-1").classList.replace("style-5", "style-" + alt_1_style);
    }
    alt_1_style_old = alt_1_style;

    if (alt_2_style != alt_2_style_old){
        if (alt_2_switch == "false"){
            document.getElementById("lower-third-2").classList.add("hide-anim");
        }
        document.getElementById("lower-third-2").classList.replace("style-1", "style-" + alt_2_style);
        document.getElementById("lower-third-2").classList.replace("style-2", "style-" + alt_2_style);
        document.getElementById("lower-third-2").classList.replace("style-3", "style-" + alt_2_style);
    }
    alt_2_style_old = alt_2_style;

    if (alt_3_style != alt_3_style_old){
        if (alt_3_switch == "false"){
            document.getElementById("lower-third-3").classList.add("hide-anim");
        }
        document.getElementById("lower-third-3").classList.replace("style-1", "style-" + alt_3_style);
        document.getElementById("lower-third-3").classList.replace("style-2", "style-" + alt_3_style);
        document.getElementById("lower-third-3").classList.replace("style-3", "style-" + alt_3_style);
    }
    alt_3_style_old = alt_3_style;

    if (alt_4_style != alt_4_style_old){
        if (alt_4_switch == "false"){
            document.getElementById("lower-third-4").classList.add("hide-anim");
        }
        document.getElementById("lower-third-4").classList.replace("style-1", "style-" + alt_4_style);
        document.getElementById("lower-third-4").classList.replace("style-2", "style-" + alt_4_style);
        document.getElementById("lower-third-4").classList.replace("style-3", "style-" + alt_4_style);
    }
    alt_4_style_old = alt_4_style;


    ///////////////////////////

    //Load logo when it change
    if (alt_1_logo_image != alt_1_logo_image_old) {
        loadLogo("alt-1-logo-image", alt_1_logo_image);
    }
    alt_1_logo_image_old = alt_1_logo_image;

    if (alt_2_logo_image != alt_2_logo_image_old) {
        loadLogo("alt-2-logo-image", alt_2_logo_image);
    }
    alt_2_logo_image_old = alt_2_logo_image;

    if (alt_3_logo_image != alt_3_logo_image_old) {
        loadLogo("alt-3-logo-image", alt_3_logo_image);
    }
    alt_3_logo_image_old = alt_3_logo_image;

    if (alt_4_logo_image != alt_4_logo_image_old) {
        loadLogo("alt-4-logo-image", alt_4_logo_image);
    }
    alt_4_logo_image_old = alt_4_logo_image;

    //Show or hide if logo switch is ON.
    changeLogoVisibility(alt_1_logo_switch, alt_1_logo_image, alt_2_logo_switch, alt_2_logo_image, alt_3_logo_switch, alt_3_logo_image, alt_4_logo_switch, alt_4_logo_image);

    ///////////////////////////

    let root = document.documentElement;

    //Show or hide Background
    // if (alt_1_background_switch == "true"){
    // 	root.style.setProperty('--alt-1-background', "1");
    // } else {
    // 	root.style.setProperty('--alt-1-background', "0");
    // }

    // if (alt_2_background_switch == "true"){
    // 	root.style.setProperty('--alt-2-background', "1");
    // } else {
    // 	root.style.setProperty('--alt-2-background', "0");
    // }
    // if (alt_3_background_switch == "true"){
    // 	root.style.setProperty('--alt-3-background', "1");
    // } else {
    // 	root.style.setProperty('--alt-3-background', "0");
    // }
    // if (alt_4_background_switch == "true"){
    // 	root.style.setProperty('--alt-4-background', "1");
    // } else {
    // 	root.style.setProperty('--alt-4-background', "0");
    // }

    //root.style.setProperty('--animation-time', global_animation_time + "s"); no hace falta enviar el global
    root.style.setProperty('--alt-1-animation-time', alt_1_animation_time + "s");
    root.style.setProperty('--alt-2-animation-time', alt_2_animation_time + "s");
    root.style.setProperty('--alt-3-animation-time', alt_3_animation_time + "s");
    root.style.setProperty('--alt-4-animation-time', alt_4_animation_time + "s");

    //texts styling
    root.style.setProperty('--alt-1-size', alt_1_size + "px");
    root.style.setProperty('--alt-1-margin-h', alt_1_margin_h + "rem");
    root.style.setProperty('--alt-1-margin-v', alt_1_margin_v + "rem");
    root.style.setProperty('--alt-1-line-spacing', alt_1_line_spacing + "em");
    root.style.setProperty('--alt-1-name-size', alt_1_name_size + "em");
    root.style.setProperty('--alt-1-info-size', alt_1_info_size + "em");
    root.style.setProperty('--alt-1-name-transform', alt_1_name_transform);
    root.style.setProperty('--alt-1-info-transform', alt_1_info_transform);
    root.style.setProperty('--alt-1-name-weight', alt_1_name_weight);
    root.style.setProperty('--alt-1-info-weight', alt_1_info_weight);
    root.style.setProperty('--alt-1-name-color', alt_1_name_color);
    root.style.setProperty('--alt-1-info-color', alt_1_info_color);
    root.style.setProperty('--alt-1-style-color-1', alt_1_style_color_1);
    root.style.setProperty('--alt-1-style-color-2', alt_1_style_color_2);
    root.style.setProperty('--alt-1-style-color-3', alt_1_style_color_3);
    root.style.setProperty('--alt-1-style-color-4', alt_1_style_color_4);
    root.style.setProperty('--alt-1-font', alt_1_font);
    root.style.setProperty('--alt-1-logo-size', alt_1_logo_size + "em");
    root.style.setProperty('--alt-1-corners', alt_1_corners + "em");
    root.style.setProperty('--alt-1-border-switch', alt_1_border_switch);
    root.style.setProperty('--alt-1-border_thickness_amount', alt_1_border_thickness_amount + "rem");

    root.style.setProperty('--alt-2-size', alt_2_size + "px");
    root.style.setProperty('--alt-2-margin-h', alt_2_margin_h + "rem");
    root.style.setProperty('--alt-2-margin-v', alt_2_margin_v + "rem");
    root.style.setProperty('--alt-2-line-spacing', alt_2_line_spacing + "em");
    root.style.setProperty('--alt-2-name-size', alt_2_name_size + "em");
    root.style.setProperty('--alt-2-info-size', alt_2_info_size + "em");
    root.style.setProperty('--alt-2-name-transform', alt_2_name_transform);
    root.style.setProperty('--alt-2-info-transform', alt_2_info_transform);
    root.style.setProperty('--alt-2-name-weight', alt_2_name_weight);
    root.style.setProperty('--alt-2-info-weight', alt_2_info_weight);
    root.style.setProperty('--alt-2-name-color', alt_2_name_color);
    root.style.setProperty('--alt-2-info-color', alt_2_info_color);
    root.style.setProperty('--alt-2-style-color-1', alt_2_style_color_1);
    root.style.setProperty('--alt-2-style-color-2', alt_2_style_color_2);
    root.style.setProperty('--alt-2-style-color-3', alt_2_style_color_3);
    root.style.setProperty('--alt-2-style-color-4', alt_2_style_color_4);
    root.style.setProperty('--alt-2-font', alt_2_font);
    root.style.setProperty('--alt-2-logo-size', alt_2_logo_size + "em");
    root.style.setProperty('--alt-2-corners', alt_2_corners + "em");
    root.style.setProperty('--alt-2-border-switch', alt_2_border_switch);
    root.style.setProperty('--alt-2-border_thickness_amount', alt_2_border_thickness_amount + "rem");			

    root.style.setProperty('--alt-3-size', alt_3_size + "px");
    root.style.setProperty('--alt-3-margin-h', alt_3_margin_h + "rem");
    root.style.setProperty('--alt-3-margin-v', alt_3_margin_v + "rem");
    root.style.setProperty('--alt-3-line-spacing', alt_3_line_spacing + "em");
    root.style.setProperty('--alt-3-name-size', alt_3_name_size + "em");
    root.style.setProperty('--alt-3-info-size', alt_3_info_size + "em");
    root.style.setProperty('--alt-3-name-transform', alt_3_name_transform);
    root.style.setProperty('--alt-3-info-transform', alt_3_info_transform);
    root.style.setProperty('--alt-3-name-weight', alt_3_name_weight);
    root.style.setProperty('--alt-3-info-weight', alt_3_info_weight);
    root.style.setProperty('--alt-3-name-color', alt_3_name_color);
    root.style.setProperty('--alt-3-info-color', alt_3_info_color);
    root.style.setProperty('--alt-3-style-color-1', alt_3_style_color_1);
    root.style.setProperty('--alt-3-style-color-2', alt_3_style_color_2);
    root.style.setProperty('--alt-3-style-color-3', alt_3_style_color_3);
    root.style.setProperty('--alt-3-style-color-4', alt_3_style_color_4);
    root.style.setProperty('--alt-3-font', alt_3_font);
    root.style.setProperty('--alt-3-logo-size', alt_3_logo_size + "em");
    root.style.setProperty('--alt-3-corners', alt_3_corners + "em");
    root.style.setProperty('--alt-3-border-switch', alt_3_border_switch);
    root.style.setProperty('--alt-3-border_thickness_amount', alt_3_border_thickness_amount + "rem");

    root.style.setProperty('--alt-4-size', alt_4_size + "px");
    root.style.setProperty('--alt-4-margin-h', alt_4_margin_h + "rem");
    root.style.setProperty('--alt-4-margin-v', alt_4_margin_v + "rem");
    root.style.setProperty('--alt-4-line-spacing', alt_4_line_spacing + "em");
    root.style.setProperty('--alt-4-name-size', alt_4_name_size + "em");
    root.style.setProperty('--alt-4-info-size', alt_4_info_size + "em");
    root.style.setProperty('--alt-4-name-transform', alt_4_name_transform);
    root.style.setProperty('--alt-4-info-transform', alt_4_info_transform);
    root.style.setProperty('--alt-4-name-weight', alt_4_name_weight);
    root.style.setProperty('--alt-4-info-weight', alt_4_info_weight);
    root.style.setProperty('--alt-4-name-color', alt_4_name_color);
    root.style.setProperty('--alt-4-info-color', alt_4_info_color);
    root.style.setProperty('--alt-4-style-color-1', alt_4_style_color_1);
    root.style.setProperty('--alt-4-style-color-2', alt_4_style_color_2);
    root.style.setProperty('--alt-4-style-color-3', alt_3_style_color_3);
    root.style.setProperty('--alt-4-style-color-4', alt_3_style_color_4);			
    root.style.setProperty('--alt-4-font', alt_4_font);
    root.style.setProperty('--alt-4-logo-size', alt_4_logo_size + "em");
    root.style.setProperty('--alt-4-corners', alt_4_corners + "em");
    root.style.setProperty('--alt-4-border-switch', alt_4_border_switch);
    root.style.setProperty('--alt-4-border_thickness_amount', alt_4_border_thickness_amount + "rem");			


    //Hide the background shadow if color is transparent (end with ",0)")
    if (alt_1_style_color_2.match(/,0\)$/)) {
        root.style.setProperty('--alt-1-background', "0");
    } else {
        root.style.setProperty('--alt-1-background', "1");
    }
    if (alt_2_style_color_2.match(/,0\)$/)) {
        root.style.setProperty('--alt-2-background', "0");
    } else {
        root.style.setProperty('--alt-2-background', "1");
    }
    if (alt_3_style_color_2.match(/,0\)$/)) {
        root.style.setProperty('--alt-3-background', "0");
    } else {
        root.style.setProperty('--alt-3-background', "1");
    }
    if (alt_4_style_color_2.match(/,0\)$/)) {
        root.style.setProperty('--alt-4-background', "0");
    } else {
        root.style.setProperty('--alt-4-background', "1");
    }


    if (alt_1_shadows == "false"){
        root.style.setProperty('--alt-1-shadows', "none");
        root.style.setProperty('--alt-1-shadows-graph', "none");
    }
    if (alt_1_shadows == "true") {
        root.style.setProperty('--alt-1-shadows', "0.1rem 0.1rem 0.2rem rgba(0,0,0," + alt_1_shadow_amount + ")");
        if (alt_1_background_switch == "false"){
            root.style.setProperty('--alt-1-shadows-graph', "none");
        } else {
            root.style.setProperty('--alt-1-shadows-graph', "0.1rem 0.1rem 0.2rem rgba(0,0,0," + alt_1_shadow_amount + ")");
        } 
    }

    if (alt_2_shadows == "false") {
        root.style.setProperty('--alt-2-shadows', "none");
        root.style.setProperty('--alt-2-shadows-graph', "none");
    }
    if (alt_2_shadows == "true") {
        root.style.setProperty('--alt-2-shadows', "0.1rem 0.1rem 0.2rem rgba(0,0,0," + alt_2_shadow_amount + ")");
        if (alt_2_background_switch == "false"){
            root.style.setProperty('--alt-2-shadows-graph', "none");
        } else {
            root.style.setProperty('--alt-2-shadows-graph', "0.1rem 0.1rem 0.2rem rgba(0,0,0," + alt_2_shadow_amount + ")");
        } 
    }

    if (alt_3_shadows == "false") {
        root.style.setProperty('--alt-3-shadows', "none");
        root.style.setProperty('--alt-3-shadows-graph', "none");
    }
    if (alt_3_shadows == "true") {
        root.style.setProperty('--alt-3-shadows', "0.1rem 0.1rem 0.2rem rgba(0,0,0," + alt_3_shadow_amount + ")");
        if (alt_3_background_switch == "false"){
            root.style.setProperty('--alt-3-shadows-graph', "none");
        } else {
            root.style.setProperty('--alt-3-shadows-graph', "0.1rem 0.1rem 0.2rem rgba(0,0,0," + alt_3_shadow_amount + ")");
        } 
    }
    
    if (alt_4_shadows == "false") {
        root.style.setProperty('--alt-4-shadows', "none");
        root.style.setProperty('--alt-4-shadows-graph', "none");
    }
    if (alt_4_shadows == "true") {
        root.style.setProperty('--alt-4-shadows', "0.1rem 0.1rem 0.2rem rgba(0,0,0," + alt_4_shadow_amount + ")");
        if (alt_4_background_switch == "false"){
            root.style.setProperty('--alt-4-shadows-graph', "none");
        } else {
            root.style.setProperty('--alt-4-shadows-graph', "0.1rem 0.1rem 0.2rem rgba(0,0,0," + alt_4_shadow_amount + ")");
        } 
    }
}

bcf.onmessage = function (ev) {
    received_data = ev.data;
    new_font = received_data.new_font_to_send;

    //console.log(new_font);
    $('head').append('<style>' + new_font + '</style>');
}

function loadLogo(alt,logo) {
    if(logo){
        $('#'+alt).attr("src", logo);
    } else {
        $('#'+alt).attr("src", '//:0');
    }
}


//Send data to Control Panel
function function_send() {
    let activeTime1_to_send = c1 - 1;
    let inactiveTime1_to_send = d1 - 1;
    let activeTime2_to_send = c2 - 1;
    let inactiveTime2_to_send = d2 - 1;
    let activeTime3_to_send = c3 - 1;
    let inactiveTime3_to_send = d3 - 1;
    let activeTime4_to_send = c4 - 1;
    let inactiveTime4_to_send = d4 - 1;

    if (activeTime1_to_send < 0){
        activeTime1_to_send = 0;
    }
    if (inactiveTime1_to_send < 0){
        inactiveTime1_to_send = 0;
    }
    if (activeTime2_to_send < 0){
        activeTime2_to_send = 0;
    }
    if (inactiveTime2_to_send < 0){
        inactiveTime2_to_send = 0;
    }
    if (activeTime3_to_send < 0){
        activeTime3_to_send = 0;
    }
    if (inactiveTime3_to_send < 0){
        inactiveTime3_to_send = 0;
    }
    if (activeTime4_to_send < 0){
        activeTime4_to_send = 0;
    }
    if (inactiveTime4_to_send < 0){
        inactiveTime4_to_send = 0;
    }


    bcr.postMessage({activeTime1_to_send, inactiveTime1_to_send, activeTime2_to_send, inactiveTime2_to_send, activeTime3_to_send, inactiveTime3_to_send, activeTime4_to_send, inactiveTime4_to_send, alt_1_turnoff, alt_2_turnoff, alt_3_turnoff, alt_4_turnoff});

    alt_1_turnoff = false;
    alt_2_turnoff = false;
    alt_3_turnoff = false;
    alt_4_turnoff = false;
}

function refreshData() {
    if (mode != "preview"){
        function_send();
    }
}

const x = 1; // Refresh time multiplier
setInterval(refreshData, x * 1000);
bcr.postMessage({resend: true});
