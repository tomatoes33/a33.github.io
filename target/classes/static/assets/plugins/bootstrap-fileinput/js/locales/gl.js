/*!
 * FileInput Galician Translations
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

    $.fn.fileinputLocales['gl'] = {
        fileSingle: 'arquivo',
        filePlural: 'arquivos',
        browseLabel: 'Examinar &hellip;',
        removeLabel: 'Quitar',
        removeTitle: 'Quitar aquivos seleccionados',
        cancelLabel: 'Cancelar',
        cancelTitle: 'Abortar a subida en curso',
        pauseLabel: 'Pause',
        pauseTitle: 'Pause ongoing upload',
        uploadLabel: 'Subir arquivo',
        uploadTitle: 'Subir arquivos seleccionados',
        msgNo: 'Non',
        msgNoFilesSelected: 'Non hay arquivos seleccionados',
        msgPaused: 'Paused',
        msgCancelled: 'Cancelado',
        msgPlaceholder: 'Seleccinar {files} ...',
        msgZoomModalHeading: 'Vista previa detallada',
        msgFileRequired: 'Debes seleccionar un arquivo para subir.',
        msgSizeTooSmall: 'O arquivo "{name}" (<b>{size} KB</b>) 茅 demasiado pequeno e debe ser maior de <b>{minSize} KB</b>.',
        msgSizeTooLarge: 'O arquivo "{name}" (<b>{size} KB</b>) excede o tama帽o m谩ximo permitido de <b>{maxSize} KB</b>.',
        msgFilesTooLess: 'Debe seleccionar ao menos <b>{n}</b> {files} a cargar.',
        msgFilesTooMany: 'O n煤mero de arquivos seleccionados a cargar <b>({n})</b> excede do l铆mite m谩ximo permitido de <b>{m}</b>.',
        msgTotalFilesTooMany: 'You can upload a maximum of <b>{m}</b> files (<b>{n}</b> files detected).',
        msgFileNotFound: 'Arquivo "{name}" non encontrado.',
        msgFileSecured: 'Non 茅 posible acceder ao arquivo "{name}" porque estar谩 sendo usado por outra aplicaci贸n ou non te帽amos permisos de lectura.',
        msgFileNotReadable: 'Non 茅 posible acceder ao arquivo "{name}".',
        msgFilePreviewAborted: 'Previsualizaci贸n do arquivo "{name}" cancelada.',
        msgFilePreviewError: 'Ocurriu un erro mentras se l铆a o arquivo "{name}".',
        msgInvalidFileName: 'Caracteres non v谩lidos ou non soportados no nome do arquivo "{name}".',
        msgInvalidFileType: 'Tipo de arquivo non v谩lido para "{name}". S贸 se permiten arquivos do tipo "{types}".',
        msgInvalidFileExtension: 'Extensi贸n de arquivo non v谩lida para "{name}". S贸 se permiten arquivos "{extensions}".',
        msgFileTypes: {
            'image': 'imaxe',
            'html': 'HTML',
            'text': 'text',
            'video': 'video',
            'audio': 'audio',
            'flash': 'flash',
            'pdf': 'PDF',
            'object': 'object'
        },
        msgUploadAborted: 'A carga de arquivos cancelouse',
        msgUploadThreshold: 'Procesando &hellip;',
        msgUploadBegin: 'Inicializando &hellip;',
        msgUploadEnd: 'Feito',
        msgUploadResume: 'Resuming upload &hellip;',
        msgUploadEmpty: 'Non existen datos v谩lidos para o env铆o.',
        msgUploadError: 'Upload Error',
        msgDeleteError: 'Delete Error',
        msgProgressError: 'Erro',
        msgValidationError: 'Erro de validaci贸n',
        msgLoading: 'Subindo arquivo {index} de {files} &hellip;',
        msgProgress: 'Subindo arquivo {index} de {files} - {name} - {percent}% completado.',
        msgSelected: '{n} {files} seleccionado(s)',
        msgFoldersNotAllowed: 'Arrastra e solta unicamente arquivos. Omitida(s) {n} carpeta(s).',
        msgImageWidthSmall: 'O ancho da imaxe "{name}" debe ser de ao menos {size} px.',
        msgImageHeightSmall: 'A altura da imaxe "{name}" debe ser de ao menos {size} px.',
        msgImageWidthLarge: 'O ancho da imaxe "{name}" non pode exceder de {size} px.',
        msgImageHeightLarge: 'A altura da imaxe "{name}" non pode exceder de {size} px.',
        msgImageResizeError: 'Non se puideron obter as dimensi贸ns da imaxe para cambiar o tama帽o.',
        msgImageResizeException: 'Erro ao cambiar o tama帽o da imaxe. <pre>{errors}</pre>',
        msgAjaxError: 'Algo foi mal ca operaci贸n {operation}. Por favor, int茅ntao de novo m谩is tarde.',
        msgAjaxProgressError: 'A operaci贸n {operation} fallou',
        msgDuplicateFile: 'File "{name}" of same size "{size} KB" has already been selected earlier. Skipping duplicate selection.',
        msgResumableUploadRetriesExceeded: 'Upload aborted beyond <b>{max}</b> retries for file <b>{file}</b>! Error Details: <pre>{error}</pre>',
        msgPendingTime: '{time} remaining',
        msgCalculatingTime: 'calculating time remaining',
        ajaxOperations: {
            deleteThumb: 'Arquivo borrado',
            uploadThumb: 'Arquivo subido',
            uploadBatch: 'Datos subidos en lote',
            uploadExtra: 'Datos do formulario subidos'
        },
        dropZoneTitle: 'Arrasta e solta aqu铆 os arquivos &hellip;',
        dropZoneClickTitle: '<br>(ou fai clic para seleccionar {files})',
        fileActionSettings: {
            removeTitle: 'Eliminar arquivo',
            uploadTitle: 'Subir arquivo',
            uploadRetryTitle: 'Reintentar a subida',
            downloadTitle: 'Descargar arquivo',
            zoomTitle: 'Ver detalles',
            dragTitle: 'Mover / Reordenar',
            indicatorNewTitle: 'Non subido a铆nda',
            indicatorSuccessTitle: 'Subido',
            indicatorErrorTitle: 'Erro ao subir',
            indicatorPausedTitle: 'Upload Paused',
            indicatorLoadingTitle: 'Subindo &hellip;'
        },
        previewZoomButtonTitles: {
            prev: 'Ver arquivo anterior',
            next: 'Ver arquivo seguinte',
            toggleheader: 'Mostrar encabezado',
            fullscreen: 'Mostrar a pantalla completa',
            borderless: 'Activar o modo sen bordes',
            close: 'Cerrar vista detallada'
        }
    };
})(window.jQuery);
