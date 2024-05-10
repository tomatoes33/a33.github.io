/*!
 * FileInput Catal脿 Translations
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

    $.fn.fileinputLocales['ca'] = {
        fileSingle: 'arxiu',
        filePlural: 'arxius',
        browseLabel: 'Examinar &hellip;',
        removeLabel: 'Treure',
        removeTitle: 'Treure arxius seleccionats',
        cancelLabel: 'Cancel',
        cancelTitle: 'Avortar la pujada en curs',
        pauseLabel: 'Pausa',
        pauseTitle: 'Pausar pujada actual',
        uploadLabel: 'Pujar arxiu',
        uploadTitle: 'Pujar arxius seleccionats',
        msgNo: 'No',
        msgNoFilesSelected: 'No has seleccionat cap arxiu',
        msgPaused: 'Pausat',
        msgCancelled: 'cancel路lat',
        msgPlaceholder: 'Selecciona {files} ...',
        msgZoomModalHeading: 'Vista pr猫via detallada',
        msgFileRequired: 'Has de seleccionar un arxiu per pujar.',
        msgSizeTooSmall: 'Arxiu "{name}" (<b>{size} KB</b>) es massa petit, ha de ser m茅s gran de <b>{minSize} KB</b>.',
        msgSizeTooLarge: 'Arxiu "{name}" (<b>{size} KB</b>) excedeix la mida m脿xima perm猫s de <b>{maxSize} KB</b>.',
        msgFilesTooLess: 'Heu de seleccionar almenys <b>{n}</b> {files} a carregar.',
        msgFilesTooMany: 'El nombre d\'arxius seleccionats a carregar <b>({n})</b> excedeix el l铆mit m脿xim perm猫s de <b>{m}</b>.',
        msgTotalFilesTooMany: 'Pots pujar un m脿xim de <b>{m}</b> arxius (<b>{n}</b> arxius seleccionats).',
        msgFileNotFound: 'Arxiu "{name}" no trobat.',
        msgFileSecured: 'No es pot accedir a l\'arxiu "{name}" perqu猫 estar脿 sent usat per una altra aplicaci贸 o no tinguem permisos de lectura.',
        msgFileNotReadable: 'No es pot accedir a l\'arxiu "{name}".',
        msgFilePreviewAborted: 'Previsualitzaci贸 de l\'arxiu "{name}" cancel路lada.',
        msgFilePreviewError: 'S\'ha produ茂t un error mentre es llegia el fitxer "{name}".',
        msgInvalidFileName: 'Car脿cters invalids al nom de l\'arxiu "{name}".',
        msgInvalidFileType: 'Tipus de fitxer no v脿lid per a "{name}". Nom茅s arxius "{types}" s贸n permesos.',
        msgInvalidFileExtension: 'Extensi贸 de fitxer no v脿lid per a "{name}". Nom茅s arxius "{extensions}" s贸n permesos.',
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
        msgUploadAborted: 'La c脿rrega d\'arxius s\'ha cancel路lat',
        msgUploadThreshold: 'Processant &hellip;',
        msgUploadBegin: 'Inicialitzant &hellip;',
        msgUploadEnd: 'Fet',
        msgUploadResume: 'Continuant pujada &hellip;',
        msgUploadEmpty: 'No hi han dades v脿lides per la pujada.',
        msgUploadError: 'Error al pujar',
        msgDeleteError: 'Error al borrar',
        msgProgressError: 'Error',
        msgValidationError: 'Error de validaci贸',
        msgLoading: 'Pujant fitxer {index} de {files} &hellip;',
        msgProgress: 'Pujant fitxer {index} de {files} - {name} - {percent}% completat.',
        msgSelected: '{n} {files} seleccionat(s)',
        msgFoldersNotAllowed: 'Arrossegueu i deixeu anar 煤nicament arxius. Omesa(es) {n} carpeta(es).',
        msgImageWidthSmall: 'L\'ample de la imatge "{name}" ha de ser almenys {size} px.',
        msgImageHeightSmall: 'L\'al莽ada de la imatge "{name}" ha de ser almenys {size} px.',
        msgImageWidthLarge: 'L\'ample de la imatge "{name}" no pot excedir de {size} px.',
        msgImageHeightLarge: 'L\'al莽ada de la imatge "{name}" no pot excedir de {size} px.',
        msgImageResizeError: 'No s\'ha pogut obtenir les dimensions d\'imatge per canviar la mida.',
        msgImageResizeException: 'Error en canviar la mida de la imatge.<pre>{errors}</pre>',
        msgAjaxError: 'Something went wrong with the {operation} operation. Please try again later!',
        msgAjaxProgressError: '{operation} failed',
        msgDuplicateFile: 'File "{name}" of same size "{size} KB" has already been selected earlier. Skipping duplicate selection.',
        msgResumableUploadRetriesExceeded: 'Upload aborted beyond <b>{max}</b> retries for file <b>{file}</b>! Error Details: <pre>{error}</pre>',
        msgPendingTime: '{time} remaining',
        msgCalculatingTime: 'calculating time remaining',
        ajaxOperations: {
            deleteThumb: 'file delete',
            uploadThumb: 'file upload',
            uploadBatch: 'batch file upload',
            uploadExtra: 'form data upload'
        },
        dropZoneTitle: 'Arrossegueu i deixeu anar aqu铆 els arxius &hellip;',
        dropZoneClickTitle: '<br>(or click to select {files})',
        fileActionSettings: {
            removeTitle: 'Eliminar arxiu',
            uploadTitle: 'Pujar arxiu',
            uploadRetryTitle: 'Tornar a pujar',
            downloadTitle: 'Descarregar arxiu',
            zoomTitle: 'Veure detalls',
            dragTitle: 'Moure / Ordenar',
            indicatorNewTitle: 'No pujat encara',
            indicatorSuccessTitle: 'Pujat',
            indicatorErrorTitle: 'Error al pujar',
            indicatorPausedTitle: 'Pujada pausada',
            indicatorLoadingTitle: 'Pujant &hellip;'
        },
        previewZoomButtonTitles: {
            prev: 'Veure arxiu previ',
            next: 'Veure arxiu seg眉ent',
            toggleheader: 'Activar cap莽alera',
            fullscreen: 'Activar pantalla completa',
            borderless: 'Activar mode sense vora',
            close: 'Tancar detalls'
        }
    };
})(window.jQuery);
