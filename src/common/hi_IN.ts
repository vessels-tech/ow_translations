/**
 * Do not edit this file directly. 
 * Instead, edit the appropriate spreadsheet 
 * https://docs.google.com/spreadsheets/d/102zLqEWj4xlqqNgVUFCiMLqdcvaLY6GntS1xmlHdAE8/edit#gid=0
 * and recompile in order to change these fields
 */

import { TranslationFile } from "../Types";

const hi_IN: TranslationFile = {
  metadata: {
    language: 'hindi',
    region: 'india',
  },
  templates: {
    app_resource_load_error: "स्थानों को लोड करने में त्रुटि। कृपया पुन: प्रयास करें।",
    app_resource_not_found: "चयनित स्थान नहीं मिला",
    settings_connect_to_pending_title: "ओवरराइड",
    settings_connect_to_connected_title: "ओवरराइड",
    settings_connect_to_subtitle_error: "ओवरराइड",
    settings_login_error: "लॉग इन करने में त्रुटि।",
    settings_sync_heading: "MyWell सिंक",
    settings_new_resource: "नया स्थान",
    search_heading: "खोजे",
    search_error: "खोज नहीं हो पाया, कृपया पुन: प्रयास करें।",
    search_more: "अधिक जानकारी...",
    search_no_results: "कोई परिणाम नहीं मिला",
    search_hint: "आईडी द्वारा खोजें",
    search_recent_searches: "पिछली खोजें",
    search_offline_line_1: "आप वर्तमान में ऑफ़लाइन हैं।",
    search_offline_line_2: "सीमित खोज परिणाम",
    new_reading_invalid_error_heading: "त्रुटि",
    new_reading_invalid_error_description: "अमान्य रीडिंग, कृपया जाँच करें और पुनः प्रयास करें।",
    new_reading_invalid_error_ok: "ओके",
    new_reading_unknown_error_heading: "त्रुटि",
    new_reading_unknown_error_description: "आपकी रीडिंग को रिकॉर्ड करने में समस्या, कृपया पुन: प्रयास करें।",
    new_reading_unknown_error_ok: "ओके",
    new_reading_saved_popup_title: "",
    new_reading_saved: "आपकी रीडिंग रिकॉर्ड  हो गयी",
    new_reading_warning_login_required: "आपकी रीडिंग केवल आपके फोने मे ही रिकॉर्ड हुइं हैं, इसको इंटरनेट पर बचाने के लिए MyWell में लॉगिन करें।",
    new_reading_dialog_one_more: "एक बार और",
    new_reading_dialog_done: "हो गया",
    new_reading_date_field: "रीडिंग की दिनांक",
    new_reading_date_field_invalid: "अमान्य दिनांक",
    new_reading_value_field: (units: string) => `${units} में मापन`,
    new_reading_value_field_invalid: "अमान्य रीडिंग",
    new_reading_timeseries: "रीडिंग प्रकार",
    new_reading_save_button: "बचाइये",
    connect_to_service_username_field: "उपयोगकर्ता नाम",
    connect_to_service_username_invalid: "आवश्यक है।",
    connect_to_service_password_field: "पासवर्ड",
    connect_to_service_password_invalid: "आवश्यक है।",
    connect_to_service_mobile_field: "फ़ोन नंबर",
    connect_to_service_mobile_invalid: "फोन नंबर की आवश्यकता है",
    connect_to_service_verify_field: "हमने जो 4 अंकों का कोड भेजा हैं, उसे यहाँ दर्ज करें।",
    connect_to_service_verify_invalid: "आपने गलत कोड दर्ज किया है। कृपया पुन: प्रयास करें।",
    connect_to_service_logout_button: "लोग आउट",
    connect_to_service_submit_button: "जमा करें",
    connect_to_service_description: "नए कुएं से जुडने से पहले  अपने डिवाइस से रीडिंग जमा करले।  ",
    connect_to_service_connected_test: (fieldName: string, username: string) => `आप ${fieldName} के साथ MyWell से जुड़े हुए हैं: ${username}`,
    connect_to_service_error: "साइन इन करने में त्रुटि। कृपया पुनः प्रयास करें",
    connect_to_service_org_selector: "इसकी जरुरत नही ",
    favourite_resource_heading: "पसंदीदा",
    favourite_resource_hint_1: "दबाएं",
    favourite_resource_hint_2: "पसंदीदा जोड़ने के लिए बटन",
    recent_resource_heading: "हाल ही",
    recent_resource_none: "कोई पिछले स्थान नहीं",
    resource_detail_latest: "नवीनतम रीडिंग्स",
    resource_detail_new: "नयी  रीडिंग ",
    sync_login_message: "MyWell के साथ सिंक करने के लिए लॉग इन करें",
    sync_start_sync_button: "सिंक शुरू करें",
    sync_start_sync_button_loading: "MyWell के साथ सिंक हो रहा हैं",
    sync_section_resources: "रीडिंग स्थान",
    sync_section_readings: "रीडिंग",
    sync_empty_heading: "सिंक करने के लिए कुछ भी नहीं!",
    sync_empty_content: "रीडिंग लेना शुरू करे या भूजल नाप स्टेशन रजिस्टर करके नाप शुरू करे।",
    select_language_heading: "भाषा चुनें",
    resource_detail_summary_tab: "सारांश",
    resource_detail_empty_heading: "आपको अभी तक कोई रीडिंग स्थान नहीं मिला है।",
    resource_detail_empty_hint: "क्यूआर स्कैनर दबाएं  या  नाप स्थान पाने के लिए नाप प्रकार  खोजें।",
    new_resource_saved_dialog: "रीडिंग स्थान सफलतापूर्वक जमा !",
    new_resource_saved_dialog_warning: "रीडिंग स्थान स्थानीय रूप जमा। सिंक करने के लिए MyWell में लॉग इन करें।",
    resource_name: "रीडिंग स्थान",
    new_resource_lat: "अक्षांश",
    new_resource_lng: "देशान्तर",
    new_resource_asset_type_label: "रीडिंग स्थान का प्रकार",
    new_resource_owner_name_label: "मालिक का नाम*",
    new_resource_submit_button: "जमा करें",
    resource_detail_name_label: "Name:",
    new_resource_id: "Id",
    new_resource_id_check_error: "Error checking the Id. Please try again.",
    new_resource_id_check_taken: "Id is not valid or already taken.",
    qr_code_not_found: "Hmm. That doesn't look like a MyWell QR Code. Please check the code and try again.",
    calendar_input_confirm: "CONFIRM",
    calendar_input_cancel: "CANCEL",
    timeseries_name_title: (tsName: string) => {
    switch (tsName.toLowerCase()) {
      case 'gwmbgs': return ``
      case 'gwmmsl':
      default: return ``
    }
  },
    resource_detail_heading_label: "ID: ",
    timeseries_date_format: "DD-MM-YYYY",
    resource_detail_new_reading_button: "NEW READING",
    sync_manual_text: "GROUNDWATER STATIONS NEED TO BE SYNCED MANUALLY",
    sync_manual_show_me_how: "SHOW ME HOW",
    sync_date_format: "DD-MM-YYYY",
    sync_error_station_not_created: "STATION HASN'T BEEN CREATED YET.",
    sync_error_get_timeseries_id_transport: "REQUEST FAILED OR TIMED OUT. PLEASE TRY AGAIN.",
    sync_error_get_timeseries_id_none: "COULD NOT FIND TIMESERIES",
    sync_error_get_timeseries_id_too_many: "COULD NOT FIND TIMESERIES",
    sync_error_get_timeseries_id_no_timeseries: "COULD NOT FIND TIMESERIES",
    sync_error_save_reading_not_logged_in: "YOU MUST BE LOGGED IN TO PERFORM A SYNC.",
    sync_error_generic_transport: "REQUEST FAILED OR TIMED OUT. PLEASE TRY AGAIN.",
    sync_error_save_reading_unknown: "AN UNKNOWN ERROR OCCOURED",
    sync_error_delete_pending_reading: "CLEANUP ERROR",
    sync_error_unknown: "AN UNKNOWN ERROR OCCOURED",
    sync_email_error: "THERE WAS A PROBLEM SENDING THE EMAIL. PLEASE TRY AGAIN.",
    sync_email_success: "EMAIL SENT!",
    sync_screen_heading: "IN ORDER TO FINISH SAVING YOUR GROUNDWATER STATIONS TO GGMN, YOU NEED TO MANUALLY REGISTER THEM ON THE GGMN SITE.",
    sync_screen_step_1_heading: "STEP 1.",
    sync_screen_step_1_body: "CLICK THE 'SEND EMAIL' BUTTON BELOW TO SEND AN EMAIL TO YOUR GGMN ACCOUNT. THIS EMAIL WILL CONTAIN THE SHAPEFILES NEEDED TO REGISTER THE GROUNDWATER STATIONS",
    sync_screen_step_2_heading: "STEP 2.",
    sync_screen_step_2_body: "ONCE YOU HAVE RECIEVED THE EMAIL, LOG INTO GGMN AT HTTPS://GGMN.UN-IGRAC.ORG/ AND SELECT 'UPLOAD' IN THE TOP RIGHT CORNER.",
    sync_screen_step_3_heading: "STEP 3.",
    sync_screen_step_3_body: "SCROLL DOWN TO 'IMPORT A SUFHYD OR SHAPE FILE' SELECT THE ORGANISATION YOUR ACCOUNT IS ASSOCIATED WITH, AND THE FILE FROM THE EMAIL.",
    sync_screen_step_4_heading: "STEP 4.",
    sync_screen_step_4_body: "ONCE THIS IS DONE, LOG BACK INTO GGMN ON YOUR DEVICE, AND YOU WILL SEE THAT RESOURCES HAVE CHANGED COLOR, AND AND PENDING REAADINGS WILL START TO SAVE.",
    sync_screen_help_heading: "NEED SOME HELP?",
    sync_screen_help_body: "JUST REACH OUT TO ____ AT ____. WE'D BE GLAD TO ASSIST YOU.",
    sync_screen_send_email_button: "SEND EMAIL",
    settings_language: "भाषा",
    timeseries_none: "No timeseries found for this Station.",
    resource_detail_new_reading: "NEW READING",
    connect_to_error_message: "ERROR SIGNING IN. PLEASE TRY AGAIN.",
    connect_to_invalid_phone_number: "PHONE NUMBER IS INVALID",
    connect_to_login_code: (mobile: string) => `हमारे द्वारा ${mobile} पर भेजे गए लॉगिन कोड को दर्ज करें। या प्रतीक्षा करें क्योंकि हम आपको स्वचालित रूप से सत्यापित करते हैं`,
    connect_to_resend: "पाठ प्राप्त नहीं किया?",
    connect_to_signed_in_heading: "आप में साइन इन हैं",
    connect_to_edit: "संपादित करें",
    connect_to_name_label: "पूरा नाम",
    connect_to_nickname_label: "Short Name",
    connect_to_email_label: "Email",
    connect_to_profile_mobile: "मोबाइल",
    connect_to_sign_out: "साइन आउट",
    menu_well: "कुंआ",
    menu_rainfall: "वर्षा",
    menu_water_quality: "पानी की गुणवत्ता",
    menu_checkdam: "बांध",
    scan_hint: "Scan for a Location using a QR Code",
    sync_screen_step_5_heading: "Step 5.",
    sync_screen_step_5_body: "Once this is done, log back into GGMN on your device, and you will see that the groundwater stations have changed color, and and pending readings will start to save.",
    timeseries_card_not_enough: "Not enough readings for this time range.",
    resource_detail_edit_resource: "EDIT STATION",
    resource_detail_edit_readings: "EDIT READINGS",
    new_resource_name: "Name:",
    edit_resource_delete_button: "DELETE",
    general_is_required_error: "is required.",
    sync_screen_help_email: "claudia.ruz-vargas@un-igrac.org",
    sync_screen_help_end: ". We'd be glad to assist you.",
    resource_email_subject: "GGMN Manual Resources",
    resource_email_message: "Here are your shapefile and csv files for manually syncing to GGMN. Go to https://www.un-igrac.org/ggis/ggmn-portal to get started.",
    resource_loading_error: "Error loading resource",
    timeseries_loading_error: "Error loading readings",
    connect_to_login_error: "Error logging you in",
    edit_resource_delete_modal_title: "Are You Sure?",
    edit_resource_delete_modal_text: "Deleting this station will delete any associated readings, and cannot be undone.",
    edit_resource_delete_modal_ok: "DELETE",
    edit_resource_delete_modal_cancel: "CANCEL",
    settings_pending_heading: "Save Pending Resources",
    new_resource_water_column_height: "Water Column Height (m):",
    pending_status_rejected: "Your account has been suspended. You won't be able to save anything until an administrator fixes your account.",
    pending_status_unapproved: "Your account is still waiting for approval. If it's been too long, reach out to an administrator at ____ to rectify the problem.",
    pending_status_approved: "Your account is approved! Your readings and resources will be synced shortly, or you can sync manually now.",
    resource_detail_sync_required: "Location needs to be synced before you can save any readings.",
    about_html: "<h2>MyWell</h2>",
    settings_about: "",
    powered_by_html: "",
    long_date_format: "DD-MM-YYYY h:mm",
    default_datetime_format: "HH:MM DD/MM/Y",
    pending_resource_heading: "Pending Resources",
    resource_detail_owner_section: "About:",
    resource_detail_owner_name: "Owner Name",
    open_url_error: "Can' open url",
    edit_readings_no_readings: "No Pending Readings for this Station",
    edit_readings_new_reading: "New Reading",
    settings_map: "Browse on Map",
    menu_browse_text: "Browse",
    menu_scan_text: "Scan",
    menu_search_text: "Search",
    menu_new_text: "New",
    country_label: "Country",
    pincode_invalid_message: "Pincode is not valid",
    connect_to_edit_heading: "Tell Us More About Yourself",
    connect_to_invalid_message: "is not valid.",
    unapproved: "unapproved",
    approved: "approved",
    rejected: "rejected",
    unapproved_description: "We're still waiting for an admin to verify your account.",
    approved_description: "Your account is approved! Feel free to sync measurements and locations now.",
    rejected_description: "Your account has been rejected. Reach out to ___@___ to learn more.",
    formatSubtitlekey: (key: string) => { 
  switch (key) {
    case 'legacyResourceId': return "OldId";
    case 'pincode': return 'Pincode';
    case 'country': return 'Country';
   default:
   return key;
  }
},
    about_html_url: "https://our-water-dev.firebaseapp.com/about_mywell_en.html",
  }
}

export {hi_IN};
