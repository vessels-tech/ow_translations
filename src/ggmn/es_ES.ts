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
    about_html: "<p>La aplicación GGMN está impulsada por MyWell, que es una app para smartphones y SMS que fue desarrollada en el marco del proyecto MARVI<a href='https://www.westernsydney.edu.au/marvi/managed_aquifer_recharge_through_village-level_intervention'>(Gestión de la recarga de acuíferos y uso sostenido de aguas subterráneas mediante intervenciones a nivel de aldea)</a>financiado por el Centro Australiano para la Investigación Agrícola Internacional (ACIAR). En MARVI, MyWell asiste a los 'voluntarios informados sobre el agua subterránea', o Bhujal Jankaars (BJ), en el monitoreo de los niveles piezométricos, precipitaciones, el nivel de agua en pequeñas represas, y la calidad del agua en las comunidades rurales en India. Más información sobre MyWell y MARVI en:<a href='http://www.marvi.org.in/home'>marvi.org.in</a></p><p>La Red Global de Monitoreo de Aguas Subterráneas, o GGMN por sus siglas en inglés, es una red de redes participativa, creada para mejorar la accesibilidad a la información obtenida mediante el monitoreo de este recurso, y así, mejorar nuestro conocimiento sobre el estado de las aguas subterráneas a nivel global. GGMN es un programa de la UNESCO, implementado por el Centro Internacional de Evaluación de Recursos de Agua Subterránea (IGRAC por sus siglas en inglés) y apoyado por socios globales y regionales.</p></br><strong>El Portal GGMN</strong></br><p>El portal GGMN (<a href='https://ggmn.un-igrac.org/'>https://ggmn.un-igrac.org/</a>) es una herramienta para el análisis espacial y temporal de los datos de monitoreo y puede configurarse para su propia organización y/o proyectos. Los datos se pueden configurar para que sean privados (solo accesibles para usuarios autorizados) o públicos.</p></br><strong>¡Únete a la red!</strong></br><p>Si desea formar parte del programa GGMN y hacer uso del portal web junto con la aplicación, contáctenos a <a href='mailto:info@un-igrac.org'>info@un-igrac.org</a> para obtener más información, o visite nuestro sitio web https://www.un-igrac.org/. De lo contrario, empiece a usar la aplicación libremente para almacenar datos piezométricos de agua subterránea en su teléfono.</p>",
    settings_about: "Sobre la GGMN",
    powered_by_html: "Powered by <a href='https://www.marvi.org.in'>MyWell</a>",
  }
}

export {ggmn_es_ES};
