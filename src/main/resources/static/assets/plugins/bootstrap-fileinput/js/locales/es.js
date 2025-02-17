/*!
 * FileInput Spanish Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function ($) {
    "use strict";

    $.fn.fileinputLocales['es'] = {
        fileSingle: 'archivo',
        filePlural: 'archivos',
        browseLabel: 'Examinar &hellip;',
        removeLabel: 'Quitar',
        removeTitle: 'Quitar archivos seleccionados',
        cancelLabel: 'Cancelar',
        cancelTitle: 'Abortar la subida en curso',
        pauseLabel: 'Pause',
        pauseTitle: 'Pause ongoing upload',
        uploadLabel: 'Subir archivo',
        uploadTitle: 'Subir archivos seleccionados',
        msgNo: 'No',
        msgNoFilesSelected: 'No hay archivos seleccionados',
        msgPaused: 'Paused',
        msgCancelled: 'Cancelado',
        msgPlaceholder: 'Seleccionar {files} ...',
        msgZoomModalHeading: 'Vista previa detallada',
        msgFileRequired: 'Debes seleccionar un archivo para subir.',
        msgSizeTooSmall: 'El archivo "{name}" (<b>{size} KB</b>) es demasiado peque帽o y debe ser mayor de <b>{minSize} KB</b>.',
        msgSizeTooLarge: 'El archivo "{name}" (<b>{size} KB</b>) excede el tama帽o m谩ximo permitido de <b>{maxSize} KB</b>.',
        msgFilesTooLess: 'Debe seleccionar al menos <b>{n}</b> {files} a cargar.',
        msgFilesTooMany: 'El n煤mero de archivos seleccionados a cargar <b>({n})</b> excede el l铆mite m谩ximo permitido de <b>{m}</b>.',
        msgTotalFilesTooMany: 'You can upload a maximum of <b>{m}</b> files (<b>{n}</b> files detected).',
        msgFileNotFound: 'Archivo "{name}" no encontrado.',
        msgFileSecured: 'No es posible acceder al archivo "{name}" porque est谩 siendo usado por otra aplicaci贸n o no tiene permisos de lectura.',
        msgFileNotReadable: 'No es posible acceder al archivo "{name}".',
        msgFilePreviewAborted: 'Previsualizaci贸n del archivo "{name}" cancelada.',
        msgFilePreviewError: 'Ocurri贸 un error mientras se le铆a el archivo "{name}".',
        msgInvalidFileName: 'Caracteres no v谩lidos o no soportados en el nombre del archivo "{name}".',
        msgInvalidFileType: 'Tipo de archivo no v谩lido para "{name}". S贸lo se permiten archivos de tipo "{types}".',
        msgInvalidFileExtension: 'Extensi贸n de archivo no v谩lida para "{name}". S贸lo se permiten archivos "{extensions}".',
        msgFileTypes: {
            'image': 'image',
            'html': 'HTML',
            'text': 'text',
            'video': 'video',
            'audio': 'audio',
            'flash': 'flash',
            'pdf': 'PDF',
            'object': 'object'
        },
        msgUploadAborted: 'La carga de archivos se ha cancelado',
        msgUploadThreshold: 'Procesando &hellip;',
        msgUploadBegin: 'Inicializando &hellip;',
        msgUploadEnd: 'Hecho',
        msgUploadResume: 'Resuming upload &hellip;',
        msgUploadEmpty: 'No existen datos v谩lidos para el env铆o.',
        msgUploadError: 'Upload Error',
        msgDeleteError: 'Delete Error',
        msgProgressError: 'Error',
        msgValidationError: 'Error de validaci贸n',
        msgLoading: 'Subiendo archivo {index} de {files} &hellip;',
        msgProgress: 'Subiendo archivo {index} de {files} - {name} - {percent}% completado.',
        msgSelected: '{n} {files} seleccionado(s)',
        msgFoldersNotAllowed: 'Arrastre y suelte 煤nicamente archivos. Omitida(s) {n} carpeta(s).',
        msgImageWidthSmall: 'El ancho de la imagen "{name}" debe ser de al menos {size} px.',
        msgImageHeightSmall: 'La altura de la imagen "{name}" debe ser de al menos {size} px.',
        msgImageWidthLarge: 'El ancho de la imagen "{name}" no puede exceder de {size} px.',
        msgImageHeightLarge: 'La altura de la imagen "{name}" no puede exceder de {size} px.',
        msgImageResizeError: 'No se pudieron obtener las dimensiones de la imagen para cambiar el tama帽o.',
        msgImageResizeException: 'Error al cambiar el tama帽o de la imagen.<pre>{errors}</pre>',
        msgAjaxError: 'Algo ha ido mal con la operaci贸n {operation}. Por favor, int茅ntelo de nuevo mas tarde.',
        msgAjaxProgressError: 'La operaci贸n {operation} ha fallado',
        msgDuplicateFile: 'File "{name}" of same size "{size} KB" has already been selected earlier. Skipping duplicate selection.',
        msgResumableUploadRetriesExceeded: 'Upload aborted beyond <b>{max}</b> retries for file <b>{file}</b>! Error Details: <pre>{error}</pre>',
        msgPendingTime: '{time} remaining',
        msgCalculatingTime: 'calculating time remaining',
        ajaxOperations: {
            deleteThumb: 'Archivo borrado',
            uploadThumb: 'Archivo subido',
            uploadBatch: 'Datos subidos en lote',
            uploadExtra: 'Datos del formulario subidos '
        },
        dropZoneTitle: 'Arrastre y suelte aqu铆 los archivos &hellip;',
        dropZoneClickTitle: '<br>(o haga clic para seleccionar {files})',
        fileActionSettings: {
            removeTitle: 'Eliminar archivo',
            uploadTitle: 'Subir archivo',
            uploadRetryTitle: 'Reintentar subir',
            downloadTitle: 'Descargar archivo',
            zoomTitle: 'Ver detalles',
            dragTitle: 'Mover / Reordenar',
            indicatorNewTitle: 'No subido todav铆a',
            indicatorSuccessTitle: 'Subido',
            indicatorErrorTitle: 'Error al subir',
            indicatorPausedTitle: 'Upload Paused',
            indicatorLoadingTitle: 'Subiendo &hellip;'
        },
        previewZoomButtonTitles: {
            prev: 'Anterior',
            next: 'Siguiente',
            toggleheader: 'Mostrar encabezado',
            fullscreen: 'Pantalla completa',
            borderless: 'Modo sin bordes',
            close: 'Cerrar vista detallada'
        }
    };
})(window.jQuery);
