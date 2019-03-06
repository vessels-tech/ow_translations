/**
 * Do not edit this file directly. 
 * Instead, edit the appropriate spreadsheet 
 * https://docs.google.com/spreadsheets/d/102zLqEWj4xlqqNgVUFCiMLqdcvaLY6GntS1xmlHdAE8/edit#gid=0
 * and recompile in order to change these fields
 */

import { TranslationFile } from "../Types";

const es_ES: TranslationFile = {
  metadata: {
    language: 'Español',
    region: 'Latin América (Chile)',
  },
  templates: {
    app_resource_load_error: "Error al cargar ubicaciones. Por favor inténtelo nuevamente.",
    app_resource_not_found: "No se pudo encontrar la ubicación seleccionada",
    settings_connect_to_pending_title: "Conectar a GGMN",
    settings_connect_to_connected_title: "Conectado a GGMN",
    settings_connect_to_subtitle_error: "Error al conectar a GGMN",
    settings_login_error: "Error al iniciar sesión",
    settings_sync_heading: "Sincronizar con GGMN",
    settings_new_resource: "Nueva estación de monitoreo",
    search_heading: "Buscar",
    search_error: "Su búsqueda no se pudo completar. Por favor inténtelo otra vez",
    search_more: "Más...",
    search_no_results: "No se encontraron resultados",
    search_hint: "Buscar estaciones de monitoreo usando su código identificador",
    search_recent_searches: "Búsquedas recientes",
    search_offline_line_1: "Ahora se encuentra desconectado (offline)",
    search_offline_line_2: "Mostrando resultados limitados de búsqueda",
    new_reading_invalid_error_heading: "Error",
    new_reading_invalid_error_description: "Medición incorrecta. Por favor verificar e intentar otra vez.",
    new_reading_invalid_error_ok: "OK",
    new_reading_unknown_error_heading: "Error",
    new_reading_unknown_error_description: "Hubo un problema guardando su medición. Por favor inténtelo otra vez.",
    new_reading_unknown_error_ok: "OK",
    new_reading_saved_popup_title: "",
    new_reading_saved: "Medición guardada",
    new_reading_warning_login_required: "Medición guardada solo localmente. Inicie sesión en GGMN App para guardar.",
    new_reading_dialog_one_more: "Una vez más",
    new_reading_dialog_done: "Listo",
    new_reading_date_field: "Leyendo fecha",
    new_reading_date_field_invalid: "Fecha incorrecta",
    new_reading_value_field: (units: string) => `Medidas en ${units}`,
    new_reading_value_field_invalid: "Medición incorrecta",
    new_reading_timeseries: "Serie de datos",
    new_reading_save_button: "Guardar",
    connect_to_service_username_field: "Nombre de usuario",
    connect_to_service_username_invalid: "es requerido",
    connect_to_service_password_field: "Contraseña",
    connect_to_service_password_invalid: "es requerido",
    connect_to_service_mobile_field: "Número de teléfono",
    connect_to_service_mobile_invalid: "El número de teléfono es requerido",
    connect_to_service_verify_field: "Por favor introduzca el código de 4 dígitos que le hemos enviado",
    connect_to_service_verify_invalid: "Ha introducido un código incorrecto. Por favor introdúzcalo nuevamente",
    connect_to_service_logout_button: "Salir",
    connect_to_service_submit_button: "Enviar",
    connect_to_service_description: "Conéctese a GGMN para crear nuevas estaciones de monitoreo de aguas subterráneas y para guardar mediciones desde su dispositivo.",
    connect_to_service_connected_test: (fieldName: string, username: string) => `Se encuentra conectado a GGMN con el ${fieldName}: ${username}`,
    connect_to_service_error: "Error al iniciar sesión. Por favor inténtelo nuevamente.",
    connect_to_service_org_selector: "Seleccione una organización",
    favourite_resource_heading: "Favoritos",
    favourite_resource_hint_1: "Presione el",
    favourite_resource_hint_2: "botón para agregar un favorito",
    recent_resource_heading: "Recientes",
    recent_resource_none: "No hay recursos recientes",
    resource_detail_latest: "Últimas mediciones",
    resource_detail_new: "Nueva medición",
    sync_login_message: "Iniciar sesión para sincronizar con GGMN",
    sync_start_sync_button: "Comenzar la sincronización",
    sync_start_sync_button_loading: "Sincronizar con GGMN",
    sync_section_resources: "Estaciones de monitoreo de aguas subterráneas",
    sync_section_readings: "Mediciones",
    sync_empty_heading: "¡Nada que sincronizar!",
    sync_empty_content: "Ingresar mediciones o crear estaciones de monitoreo para empezar",
    select_language_heading: "Seleccione un idioma",
    resource_detail_summary_tab: "Resumen",
    resource_detail_empty_heading: "Todavía no ha encontrado estaciones de monitoreo",
    resource_detail_empty_hint: "Presione el botón de búsqueda o navegue en el mapa para encontrar alguna.",
    new_resource_saved_dialog: "¡Estación guardada exitosamente!",
    new_resource_saved_dialog_warning: "Ubicación guardada localmente. Iniciar sesión en GGMN para sincronizar.",
    resource_name: "Estación de monitoreo de aguas subterráneas",
    new_resource_lat: "Latitud",
    new_resource_lng: "Longitud",
    new_resource_asset_type_label: "Tipo de estación",
    new_resource_owner_name_label: "Nombre del propietario/a",
    new_resource_submit_button: "ENVIAR",
    resource_detail_name_label: "Nombre ",
    new_resource_id: "Código identificador",
    new_resource_id_check_error: "Error al verificar el código identificador. Por favor inténtelo nuevamente.",
    new_resource_id_check_taken: "El código identificador no es válido o ya se encuentra en uso.",
    qr_code_not_found: "No se pudo encontrar la ubicación a través del código QR. Por favor inténtelo escaneando otra vez.",
    calendar_input_confirm: "CONFIRMAR",
    calendar_input_cancel: "CANCELAR",
    timeseries_name_title: (tsName: string) => {
    switch (tsName.toLowerCase()) {
      case 'gwmbgs': return `Nivel de agua en metros bajo la superficie`
      case 'gwmmsl':
      default: return `Nivel de agua en metros bajo la superficie`
    }
  },
    resource_detail_heading_label: "Código identificador:",
    timeseries_date_format: "DD-MM-YYYY",
    resource_detail_new_reading_button: "NUEVA MEDICIÓN",
    sync_manual_text: "Las estaciones de monitoreo deben ser sincronizadas manualmente",
    sync_manual_show_me_how: "Muéstrame cómo",
    sync_date_format: "DD-MM-YYYY",
    sync_error_station_not_created: "La estación no ha sido creada todavía",
    sync_error_get_timeseries_id_transport: "La solicitud ha fallado o el tiempo de espera se ha agotado. Por favor inténtelo otra vez.",
    sync_error_get_timeseries_id_none: "No se encontraron series de datos",
    sync_error_get_timeseries_id_too_many: "No se encontraron series de datos",
    sync_error_get_timeseries_id_no_timeseries: "No se encontraron series de datos",
    sync_error_save_reading_not_logged_in: "Debe iniciar sesión para realizar la sincronización",
    sync_error_generic_transport: "La solicitud ha fallado o el tiempo de espera se ha agotado. Por favor inténtelo otra vez.",
    sync_error_save_reading_unknown: "Ha ocurrido un error desconocido.",
    sync_error_delete_pending_reading: "Error de limpieza",
    sync_error_unknown: "Ha ocurrido un error desconocido.",
    sync_email_error: "Ha ocurrido un error al enviar el correo electrónico. Por favor inténtelo otra vez.",
    sync_email_success: "¡Correo enviado!",
    sync_screen_heading: "Para terminar de guardar sus estaciones en GGMN estas deben ser registradas manualmente en el sitio web de GGMN",
    sync_screen_step_1_heading: "Paso 1",
    sync_screen_step_1_body: "Haga clic en el boton de abajo 'Enviar correo' para enviar un correo a su cuenta de GGMN. Este correo contendrá los archivos necesarios para registrar las estaciones de monitoreo en GGMN.",
    sync_screen_step_2_heading: "Paso 2",
    sync_screen_step_2_body: "Una vez recibido el correo, inicie sesión en GGMN a través de  https://ggmn.un-igrac.org/ y suba los archivos a la plataforma de la manera habitual.",
    sync_screen_step_3_heading: "Paso 3",
    sync_screen_step_3_body: "Vuelva a entrar a la GGMN app, y verá que las nuevas estaciones han cambiado de color y que las mediciones pendientes se empiezan a guardar.",
    sync_screen_step_4_heading: "",
    sync_screen_step_4_body: "",
    sync_screen_help_heading: "¿Necesita ayuda?",
    sync_screen_help_body: "Contáctese con ___ al correo ___. Estaremos encantados de ayudarle.",
    sync_screen_send_email_button: "Enviar correo",
    settings_language: "Idioma",
    timeseries_none: "No se encontraron series de datos para esta estación.",
    resource_detail_new_reading: "NUEVA MEDICIÓN",
    connect_to_error_message: "Error al iniciar sesión. Por favor inténtelo nuevamente.",
    connect_to_invalid_phone_number: "Número de teléfono no es correcto",
    connect_to_login_code: (mobile: string) => `Ingrese el código enviado a ${mobile}. O espere a ser verificado/a automáticamente`,
    connect_to_resend: "No ha recibido el mensaje de texto?",
    connect_to_signed_in_heading: "Se encuenta conectado/a",
    connect_to_edit: "Modificar",
    connect_to_name_label: "Nombre completo",
    connect_to_nickname_label: "Nombre (corto)",
    connect_to_email_label: "Correo electrónico",
    connect_to_profile_mobile: "Móvil",
    connect_to_sign_out: "Desconectarse",
    menu_well: "Pozos",
    menu_rainfall: "Precipitación",
    menu_water_quality: "Calidad del agua",
    menu_checkdam: "Represas",
    scan_hint: "Escanear una ubicación usando un código QR",
    sync_screen_step_5_heading: "es requerido.",
    sync_screen_step_5_body: "",
    timeseries_card_not_enough: "",
    resource_detail_edit_resource: "No hay suficientes mediciones para este periodo",
    resource_detail_edit_readings: "Editar estaciones",
    new_resource_name: "Editar mediciones",
    edit_resource_delete_button: "es requerido.",
    general_is_required_error: "Nombre:",
    sync_screen_help_email: "BORRAR",
    sync_screen_help_end: "claudia.ruz-vargas@un-igrac.org",
    resource_email_subject: ". Estaremos encantados de ayudarle.",
    resource_email_message: "GGMN Manual Resources",
    resource_loading_error: "Aquí estan sus archivos shapefile y csv para sincronizar manualmente con GGMN. <br/>Vaya a https://ggmn.un-igrac.org/ para empezar. <br/><strong>Nota: </strong>Si una nueva estación tiene el mismo código identificador (ID) que una estación existente en GGMN, la nueva estación será eliminada y las nuevas mediciones se agregarán a la estación existente. Por lo tanto, por favor asegúrese de que todas sus estacions tienen un único código identificador",
    timeseries_loading_error: "Error guardando la estación",
    connect_to_login_error: "Error cargando las mediciones",
    edit_resource_delete_modal_title: "Error de inicio de sesión",
    edit_resource_delete_modal_text: "¿Está seguro?",
    edit_resource_delete_modal_ok: "Eliminar esta estación eliminará todas las mediciones asociadas. Este proceso no es reversible.",
    edit_resource_delete_modal_cancel: "ELIMINAR",
    settings_pending_heading: "CANCELAR",
    new_resource_water_column_height: "Guardar recursos pendientes",
    pending_status_rejected: "Elevación (m):",
    pending_status_unapproved: "",
    pending_status_approved: "",
    resource_detail_sync_required: "",
    about_html: "",
    settings_about: "",
    powered_by_html: "",
  }
}

export {es_ES};
