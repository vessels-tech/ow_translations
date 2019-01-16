/**
 * Do not edit this file directly. 
 * Instead, edit the appropriate spreadsheet 
 * https://docs.google.com/spreadsheets/d/102zLqEWj4xlqqNgVUFCiMLqdcvaLY6GntS1xmlHdAE8/edit#gid=0
 * and recompile in order to change these fields
 */

import { TranslationOrg, TranslationOverrideFile } from "../Types";

const ggmn_es_ES: TranslationOverrideFile = {
  org: TranslationOrg.ggmn,
  overrides: {
    settings_connect_to_pending_title: "Conectar a GGMN",
    settings_connect_to_connected_title: "Conectado a GGMN",
    settings_connect_to_subtitle_error: "Error al conectar a GGMN",
    settings_sync_heading: "Sincronizar con GGMN",
    settings_new_resource: "Nueva estación de monitoreo",
    search_hint: "Buscar estaciones de monitoreo usando su código identificador",
    new_reading_warning_login_required: "Medición guardada solo localmente. Inicie sesión en GGMN App para guardar.",
    new_reading_value_field: (units: string) => `Medidas en ${units}`,
    new_reading_value_field_invalid: "Medición incorrecta",
    connect_to_service_description: "Conéctese a GGMN para crear nuevas estaciones de monitoreo de aguas subterráneas y para guardar mediciones desde su dispositivo.",
    connect_to_service_connected_test: (fieldName: string, username: string) => `Se encuentra conectado a GGMN con el ${fieldName}: ${username}`,
    connect_to_service_org_selector: "Seleccione una organización",
    recent_resource_none: "No hay recursos recientes",
    resource_detail_new: "Nueva medición",
    sync_login_message: "Iniciar sesión para sincronizar con GGMN",
    sync_start_sync_button_loading: "Sincronizar con GGMN",
    sync_section_resources: "Estaciones de monitoreo de aguas subterráneas",
    sync_empty_content: "Ingresar mediciones o crear estaciones de monitoreo para empezar",
    resource_detail_empty_heading: "Todavía no ha encontrado estaciones de monitoreo",
    resource_detail_empty_hint: "Presione el botón de búsqueda o navegue en el mapa para encontrar alguna.",
    new_resource_saved_dialog_warning: "Ubicación guardada localmente. Iniciar sesión en GGMN para sincronizar.",
    resource_name: "Estación de monitoreo de aguas subterráneas",
    timeseries_name_title: (tsName: string) => {
    switch (tsName.toLowerCase()) {
      case 'gwmbgs': return `Nivel de agua en metros bajo la superficie`
      case 'gwmmsl':
      default: return `Nivel de agua en metros bajo la superficie`
    }
  },
    sync_manual_text: "Las estaciones de monitoreo deben ser sincronizadas manualmente",
    sync_screen_heading: "Para terminar de guardar sus estaciones en GGMN estas deben ser registradas manualmente en el sitio web de GGMN",
    sync_screen_step_1_body: "Haga clic en el boton de abajo 'Enviar correo' para enviar un correo a su cuenta de GGMN. Este correo contendrá los archivos necesarios para registrar las estaciones de monitoreo en GGMN.",
    sync_screen_step_2_body: "Una vez recibido el correo, inicie sesión en GGMN a través de  https://ggmn.un-igrac.org/ y suba los archivos a la plataforma de la manera habitual.",
    sync_screen_step_3_body: "Vuelva a entrar a la GGMN app, y verá que las nuevas estaciones han cambiado de color y que las mediciones pendientes se empiezan a guardar.",
    sync_screen_step_4_heading: "",
    sync_screen_step_4_body: "",
    sync_screen_help_body: "Contáctese con ___ al correo ___. Estaremos encantados de ayudarle.",
    sync_screen_step_5_heading: "",
    sync_screen_step_5_body: "",
    sync_screen_help_email: "claudia.ruz-vargas@un-igrac.org",
    sync_screen_help_end: ". Estaremos encantados de ayudarle.",
    resource_email_subject: "GGMN Manual Resources",
    resource_email_message: "Aquí estan sus archivos shapefile y csv para sincronizar manualmente con GGMN. <br/>Vaya a https://ggmn.un-igrac.org/ para empezar. <br/><strong>Nota: </strong>Si una nueva estación tiene el mismo código identificador (ID) que una estación existente en GGMN, la nueva estación será eliminada y las nuevas mediciones se agregarán a la estación existente. Por lo tanto, por favor asegúrese de que todas sus estacions tienen un único código identificador",
    resource_loading_error: "Error guardando la estación",
    edit_resource_delete_modal_text: "Eliminar esta estación eliminará todas las mediciones asociadas. Este proceso no es reversible.",
    about_html: "",
    settings_about: "",
  }
}

export {ggmn_es_ES};
