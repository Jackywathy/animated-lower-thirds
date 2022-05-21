const sourceToPanelChannelName = 'obs-lower-thirds-channel'

const sourceDataChannel = new BroadcastChannel(sourceToPanelChannelName); //Receives from the source
const commandsChannel = new BroadcastChannel('obs-lower-thirds-channel2'); //Send to Control Panel
const fontsChannel = new BroadcastChannel('obs-lower-thirds-fonts');

let c1: number = 0;
let d1: number = 0;
let t1: number;
let s1: number;

let c2: number = 0;
let d2: number = 0;
let t2: number;
let s2: number;

let c3: number = 0;
let d3: number = 0;
let t3: number;
let s3: number;

let c4: number = 0;
let d4: number = 0;
let t4: number;
let s4: number;

let active1IsOn: boolean;
let inactive1IsOn: boolean;
let active2IsOn: boolean;
let inactive2IsOn: boolean;
let active3IsOn: boolean;
let inactive3IsOn: boolean;
let active4IsOn: boolean;
let inactive4IsOn: boolean;

let alt_1_active_time = 0;
let alt_2_active_time = 0;
let alt_3_active_time = 0;
let alt_4_active_time = 0;

let alt_1_inactive_time = 0;
let alt_2_inactive_time = 0;
let alt_3_inactive_time = 0;
let alt_4_inactive_time = 0;

let alt_1_oneshot: boolean;
let alt_2_oneshot: boolean;
let alt_3_oneshot: boolean;
let alt_4_oneshot: boolean;

let alt_1_turnoff: boolean;
let alt_2_turnoff: boolean;
let alt_3_turnoff: boolean;
let alt_4_turnoff: boolean;


export function animationIn(elementId: string) {
    const elementAnim = document.getElementById(elementId)!;
    elementAnim.classList.remove("animation-out");
    void elementAnim.offsetWidth;
    elementAnim.classList.add("animation-in");
}

export function animationOut(elementId: string) {
    const elementAnim = document.getElementById(elementId)!;
    elementAnim.classList.remove("animation-in");
    void elementAnim.offsetWidth;
    elementAnim.classList.add("animation-out");
}

/** Gets the url parameter  */
export function getUrlParameter(sParam: string) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const myParam = urlSearchParams.get(sParam);
    if(myParam === null) {
        return null;
    }
    return decodeURIComponent(myParam)
}

// Stop active and inactive states.
export function stopTimeCount(i: string) {
    if (i == "lower-third-1"){
      c1 = 0;
      d1 = 0;
      active1IsOn = false;
      inactive1IsOn = false;
      clearTimeout(s1);
      clearTimeout(t1);
    }
    if (i == "lower-third-2"){
      c2 = 0;
      d2 = 0;
      active2IsOn = false;
      inactive2IsOn = false;
      clearTimeout(s2);
      clearTimeout(t2);
    }
    if (i == "lower-third-3"){
      c3 = 0;
      d3 = 0;
      active3IsOn = false;
      inactive3IsOn = false;
      clearTimeout(s3);
      clearTimeout(t3);
    }
    if (i == "lower-third-4"){
      c4 = 0;
      d4 = 0;
      active4IsOn = false;
      inactive4IsOn = false;
      clearTimeout(s4);
      clearTimeout(t4);
    }

    animationOut(i);
  }

/** Timer for  */
export function activeCount(i: string) {
    switch (i) {
        case "lower-third-1": {
            if (c1 <= alt_1_active_time){
                c1 = c1 + 1;
                t1 = setTimeout(activeCount, 1000, i);
            } else {
                stopTimeCount(i);
                startInactiveCount(i);
            }
        }
            break;
        case "lower-third-2": {
            if (c2 <= alt_2_active_time){
                c2 = c2 + 1;
                t2 = setTimeout(activeCount, 1000, i);
            } else {
                stopTimeCount(i);
                startInactiveCount(i);
            }
        }
            break;
        case "lower-third-3": {
            if (c3 <= alt_3_active_time){
                c3 = c3 + 1;
                t3 = setTimeout(activeCount, 1000, i);
            } else {
                stopTimeCount(i);
                startInactiveCount(i);
            }
        }
            break;
        case "lower-third-4": {
            if (c4 <= alt_4_active_time){
                c4 = c4 + 1;
                t4 = setTimeout(activeCount, 1000, i);
            } else {
                stopTimeCount(i);
                startInactiveCount(i);
            }
        }
            break;
        default:
            break;
    }
}

// Can start Inactive time counter? Start Animation Out
export function startInactiveCount(i: string) {
    if (!inactive1IsOn && i == "lower-third-1") {
      inactive1IsOn = true;
      if (!alt_1_oneshot){
          inactiveCount(i);
      } else {
          alt_1_turnoff = true;
      }
      animationOut(i);
    }
    if (!inactive2IsOn && i == "lower-third-2") {
      inactive2IsOn = true;
      if (!alt_2_oneshot){
          inactiveCount(i);
      } else {
          alt_2_turnoff = true;
      }
      animationOut(i);
    }
    if (!inactive3IsOn && i == "lower-third-3") {
      inactive3IsOn = true;
      if (!alt_3_oneshot){
          inactiveCount(i);
      } else {
          alt_3_turnoff = true;
      }
      animationOut(i);
    }
    if (!inactive4IsOn && i == "lower-third-4") {
      inactive4IsOn = true;
      if (!alt_4_oneshot){
          inactiveCount(i);
      } else {
          alt_4_turnoff = true;
      }
      animationOut(i);
    }
  }

export function inactiveCount(i: string) {
    switch (i) {
        case "lower-third-1": {
            if (d1 <= alt_1_inactive_time){
                d1 = d1 + 1;
                s1 = setTimeout(inactiveCount, 1000, i);
            } else {
                startActiveCount(i);
                d1 = 0;
                clearTimeout(s1);
                inactive1IsOn = false;
            }
        }
            break;
        case "lower-third-2": {
            if (d2 <= alt_2_inactive_time){
                d2 = d2 + 1;
                s2 = setTimeout(inactiveCount, 1000, i);
            } else {
                startActiveCount(i);
                d2 = 0;
                clearTimeout(s2);
                inactive2IsOn = false;
            }
        }
            break;
        case "lower-third-3": {
            if (d3 <= alt_3_inactive_time){
                d3 = d3 + 1;
                s3 = setTimeout(inactiveCount, 1000, i);
            } else {
                startActiveCount(i);
                d3 = 0;
                clearTimeout(s3);
                inactive3IsOn = false;
            }
        }
            break;
        case "lower-third-4": {
            if (d4 <= alt_4_inactive_time){
                d4 = d4 + 1;
                s4 = setTimeout(inactiveCount, 1000, i);
            } else {
                startActiveCount(i);
                d4 = 0;
                clearTimeout(s4);
                inactive4IsOn = false;
            }
        }
            break;
        default:
            break;
    }
}


// Can start Active time counter? Start Animation In
export function startActiveCount(i: string) {
    if (!active1IsOn && i == "lower-third-1") {
        active1IsOn = true;
        activeCount(i);
        animationIn(i);
    }
    if (!active2IsOn && i == "lower-third-2") {
        active2IsOn = true;
        activeCount(i);
        animationIn(i);
    }
    if (!active3IsOn && i == "lower-third-3") {
        active3IsOn = true;
        activeCount(i);
        animationIn(i);
    }
    if (!active4IsOn && i == "lower-third-4") {
        active4IsOn = true;
        activeCount(i);
        animationIn(i);
    }
}

export function loadLogo(alt: string, logo: string = "") {
    if(logo){
        $('#'+alt).attr("src", logo);
    } else {
        $('#'+alt).attr("src", '//:0');
    }
}


type LogoSwitch = "true" | "false"
function changeLogoVisibility(alt_1_logo_switch: LogoSwitch, alt_1_logo_image: LogoSwitch, alt_2_logo_switch: LogoSwitch, alt_2_logo_image: LogoSwitch, alt_3_logo_switch: LogoSwitch, alt_3_logo_image: LogoSwitch, alt_4_logo_switch: LogoSwitch, alt_4_logo_image: LogoSwitch) {
    if (alt_1_logo_switch == "true") {
        $("#alt-1-logo").removeClass("no-logo");
        loadLogo("alt-1-logo-image", alt_1_logo_image);
    } else {
        $("#alt-1-logo").addClass("no-logo");
        loadLogo("alt-1-logo-image", "");
    }

    if (alt_2_logo_switch == "true") {
        $("#alt-2-logo").removeClass("no-logo");
        loadLogo("alt-2-logo-image", alt_2_logo_image);
    } else {
        $("#alt-2-logo").addClass("no-logo");
        loadLogo("alt-2-logo-image", 
        );
    }

    if (alt_3_logo_switch == "true") {
        $("#alt-3-logo").removeClass("no-logo");
        loadLogo("alt-3-logo-image", alt_3_logo_image);
    } else {
        $("#alt-3-logo").addClass("no-logo");
        loadLogo("alt-3-logo-image");
    }

    if (alt_4_logo_switch == "true") {
        $("#alt-4-logo").removeClass("no-logo");
        loadLogo("alt-4-logo-image", alt_4_logo_image);
    } else {
        $("#alt-4-logo").addClass("no-logo");
        loadLogo("alt-4-logo-image", ""  );
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

    console.log("sending to obs-lower-thirds-channel2 big boi")
    commandsChannel.postMessage({activeTime1_to_send, inactiveTime1_to_send, activeTime2_to_send, inactiveTime2_to_send, activeTime3_to_send, inactiveTime3_to_send, activeTime4_to_send, inactiveTime4_to_send, alt_1_turnoff, alt_2_turnoff, alt_3_turnoff, alt_4_turnoff});

    alt_1_turnoff = false;
    alt_2_turnoff = false;
    alt_3_turnoff = false;
    alt_4_turnoff = false;
}

function refreshData() {
    function_send();
}
