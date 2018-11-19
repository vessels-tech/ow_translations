/**
 * Do not edit this file directly. 
 * Instead, edit the appropriate spreadsheet 
 * https://docs.google.com/spreadsheets/d/102zLqEWj4xlqqNgVUFCiMLqdcvaLY6GntS1xmlHdAE8/edit#gid=0
 * and recompile in order to change these fields
 */

import { TranslationFile } from "../Types";

const fr_FR: TranslationFile = {
  metadata: {
    language: 'Français',
    region: 'France',
  },
  templates: {
    app_resource_load_error: "ERROR LOADING LOCATIONS. PLEASE TRY AGAIN.",
    app_resource_not_found: "COULD NOT FIND THE SELECTED READING LOCATION",
    settings_connect_to_pending_title: "OVERRIDE",
    settings_connect_to_connected_title: "OVERRIDE",
    settings_connect_to_subtitle_error: "OVERRIDE",
    settings_login_error: "ERROR LOGGING IN.",
    settings_sync_heading: "MYWELL SYNC",
    settings_new_resource: "NEW READING LOCATION",
    search_heading: "SEARCH",
    search_error: "COULDN'T PERFORM SEARCH. PLEASE TRY AGAIN.",
    search_more: "MORE...",
    search_no_results: "NO RESULTS FOUND",
    search_hint: "SEARCH BY ID",
    search_recent_searches: "RECENT SEARCHES",
    search_offline_line_1: "YOU ARE CURRENTLY OFFLINE.",
    search_offline_line_2: "SHOWING LIMITED SEARCH RESULTS.",
    new_reading_invalid_error_heading: "ERROR",
    new_reading_invalid_error_description: "INVALID READING. PLEASE CHECK AND TRY AGAIN.",
    new_reading_invalid_error_ok: "OK",
    new_reading_unknown_error_heading: "ERROR",
    new_reading_unknown_error_description: "THERE WAS A PROBLEM SAVING YOUR READING. PLEASE TRY AGAIN.",
    new_reading_unknown_error_ok: "OK",
    new_reading_saved_popup_title: "",
    new_reading_saved: "READING SAVED",
    new_reading_warning_login_required: "READING SAVED LOCALLY ONLY. LOGIN WITH MYWELL TO SAVE IN CLOUD.",
    new_reading_dialog_one_more: "ONE MORE",
    new_reading_dialog_done: "DONE",
    new_reading_date_field: "READING DATE",
    new_reading_date_field_invalid: "INVALID DATE",
    new_reading_value_field: (units: string) => `MEASUREMENT IN ${units}`,
    new_reading_value_field_invalid: "INVALID MEASUREMENT",
    new_reading_timeseries: "READING TYPE",
    new_reading_save_button: "SAVE",
    connect_to_service_username_field: "USERNAME",
    connect_to_service_username_invalid: "IS REQUIRED.",
    connect_to_service_password_field: "PASSWORD",
    connect_to_service_password_invalid: "IS REQUIRED.",
    connect_to_service_mobile_field: "PHONE NUMBER",
    connect_to_service_mobile_invalid: "PHONE NUMBER IS REQUIRED",
    connect_to_service_verify_field: "ENTER THE 4 DIGIT CODE WE SENT YOU.",
    connect_to_service_verify_invalid: "YOU ENTERED THE WRONG CODE. PLEASE TRY AGAIN.",
    connect_to_service_logout_button: "LOG OUT",
    connect_to_service_submit_button: "SUBMIT",
    connect_to_service_description: "CONNECT TO N/A TO CREATE NEW WELLS AND SAVE READINGS FROM YOUR DEVICE.",
    connect_to_service_connected_test: (fieldname: string, username: string) => `YOU ARE CONNECTED TO MYWELL WITH THE ${fieldname}: ${username}`,
    connect_to_service_error: "ERROR SIGNING IN. PLEASE TRY AGAIN",
    connect_to_service_org_selector: "N/A",
    favourite_resource_heading: "FAVOURITES",
    favourite_resource_hint_1: "PRESS THE",
    favourite_resource_hint_2: "BUTTON TO ADD A FAVOURITE",
    recent_resource_heading: "RECENTS",
    recent_resource_none: "NO RECENT LOCATIONS",
    resource_detail_latest: "LATEST READINGS:",
    resource_detail_new: "NEW READING",
    sync_login_message: "LOGIN TO SYNC WITH MYWELL",
    sync_start_sync_button: "START SYNC",
    sync_start_sync_button_loading: "SYNCING WITH MYWELL",
    sync_section_resources: "READING LOCATIONS",
    sync_section_readings: "READINGS",
    sync_empty_heading: "NOTHING TO SYNC!",
    sync_empty_content: "START TAKING READINGS OR CREATING GROUNDWATER STATIONS TO GET STARTED.",
    select_language_heading: "SELECT A LANGUAGE",
    resource_detail_summary_tab: "SUMMARY",
    resource_detail_empty_heading: "YOU HAVEN'T FOUND ANY READING LOCATIONS YET.",
    resource_detail_empty_hint: "PRESS THE QR SCANNER OR SEARCH FOR A READING TYPE TO FIND A READING LOCATION.",
    new_resource_saved_dialog: "SUCCESSFULLY SAVED  READING LOCATION!",
    new_resource_saved_dialog_warning: "SAVED LOCATION LOCALLY. LOGIN TO MYWELL TO SYNC.",
    resource_name: "READING LOCATIONS",
    new_resource_lat: "LATITUDE",
    new_resource_lng: "LONGITUDE",
    new_resource_asset_type_label: "READING LOCATION TYPE",
    new_resource_owner_name_label: "OWNER NAME",
    new_resource_submit_button: "SUBMIT",
    resource_detail_name_label: "NAME",
    new_resource_id: "ID",
    new_resource_id_check_error: "ERROR CHECKING THE ID. PLEASE TRY AGAIN.",
    new_resource_id_check_taken: "ID IS NOT VALID OR ALREADY TAKEN.",
    qr_code_not_found: "",
    calendar_input_confirm: "",
    calendar_input_cancel: "",
    timeseries_name_title: (tsName: string) => {
    switch (tsName.toLowerCase()) {
      case 'gwmbgs': return `Groundwater level below ground surface`
      case 'gwmmsl':
      default: return `Groundwater level below ground surface`
    }
  },
    resource_detail_heading_label: "ID: ",
    timeseries_date_format: "YYYY-MM-DD",
    resource_detail_new_reading_button: "NEW READING",
    sync_manual_text: "GROUNDWATER STATIONS NEED TO BE SYNCED MANUALLY",
    sync_manual_show_me_how: "SHOW ME HOW",
    sync_date_format: "YYYY-MM-DD",
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
  }
}

export {fr_FR};
