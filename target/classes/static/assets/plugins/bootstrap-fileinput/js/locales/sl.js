/*!
 * FileInput Slovenian Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 * @author kv1dr <kv1dr.android@gmail.com>
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function ($) {
    "use strict";

    $.fn.fileinputLocales['sl'] = {
        fileSingle: 'datoteka',
        filePlural: 'datotek',
        browseLabel: 'Prebrskaj &hellip;',
        removeLabel: 'Odstrani',
        removeTitle: 'Po膷isti izbrane datoteke',
        cancelLabel: 'Prekli膷i',
        cancelTitle: 'Prekli膷i nalaganje',
        pauseLabel: 'Pause',
        pauseTitle: 'Pause ongoing upload',
        uploadLabel: 'Nalo啪i',
        uploadTitle: 'Nalo啪i izbrane datoteke',
        msgNo: 'Ne',
        msgNoFilesSelected: 'Nobena datoteka ni izbrana',
        msgPaused: 'Paused',
        msgCancelled: 'Preklicano',
        msgPlaceholder: 'Select {files} ...',
        msgZoomModalHeading: 'Podroben predogled',
        msgSizeTooLarge: 'Datoteka "{name}" (<b>{size} KB</b>) presega najve膷jo dovoljeno velikost za nalaganje <b>{maxSize} KB</b>.',
        msgFilesTooLess: 'Za nalaganje morate izbrati vsaj <b>{n}</b> {files}.',
        msgFilesTooMany: '艩tevilo datotek, izbranih za nalaganje <b>({n})</b> je prekora膷ilo najve膷jo dovoljeno 拧tevilo <b>{m}</b>.',
        msgTotalFilesTooMany: 'You can upload a maximum of <b>{m}</b> files (<b>{n}</b> files detected).',
        msgFileNotFound: 'Datoteka "{name}" ni bila najdena!',
        msgFileSecured: 'Zaradi varnostnih omejitev nisem mogel prebrati datoteko "{name}".',
        msgFileNotReadable: 'Datoteka "{name}" ni berljiva.',
        msgFilePreviewAborted: 'Predogled datoteke "{name}" preklican.',
        msgFilePreviewError: 'Pri branju datoteke "{name}" je pri拧lo do napake.',
        msgInvalidFileType: 'Napa膷en tip datoteke "{name}". Samo "{types}" datoteke so podprte.',
        msgInvalidFileExtension: 'Napa膷na kon膷nica datoteke "{name}". Samo "{extensions}" datoteke so podprte.',
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
        msgUploadAborted: 'Nalaganje datoteke je bilo preklicano',
        msgUploadThreshold: 'Procesiram &hellip;',
        msgUploadBegin: 'Initializing &hellip;',
        msgUploadEnd: 'Done',
        msgUploadResume: 'Resuming upload &hellip;',
        msgUploadEmpty: 'No valid data available for upload.',
        msgUploadError: 'Upload Error',
        msgDeleteError: 'Delete Error',
        msgProgressError: 'Error',
        msgValidationError: 'Napaki pri validiranju',
        msgLoading: 'Nalaganje datoteke {index} od {files} &hellip;',
        msgProgress: 'Nalaganje datoteke {index} od {files} - {name} - {percent}% dokon膷ano.',
        msgSelected: '{n} {files} izbrano',
        msgFoldersNotAllowed: 'Povlecite in spustite samo datoteke! Izpu拧膷enih je bilo {n} map.',
        msgImageWidthSmall: '艩irina slike "{name}" mora biti vsaj {size} px.',
        msgImageHeightSmall: 'Vi拧ina slike "{name}" mora biti vsaj {size} px.',
        msgImageWidthLarge: '艩irina slike "{name}" ne sme prese膷i {size} px.',
        msgImageHeightLarge: 'Vi拧ina slike "{name}" ne sme prese膷i {size} px.',
        msgImageResizeError: 'Nisem mogel pridobiti dimenzij slike za spreminjanje velikosti.',
        msgImageResizeException: 'Napaka pri spreminjanju velikosti slike.<pre>{errors}</pre>',
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
        dropZoneTitle: 'Povlecite in spustite datoteke sem &hellip;',
        dropZoneClickTitle: '<br>(ali kliknite sem za izbiro {files})',
        fileActionSettings: {
            removeTitle: 'Odstrani datoteko',
            uploadTitle: 'Nalo啪i datoteko',
            uploadRetryTitle: 'Retry upload',
            downloadTitle: 'Download file',
            zoomTitle: 'Poglej podrobnosti',
            dragTitle: 'Premaki / Razporedi',
            indicatorNewTitle: '艩e ni nalo啪eno',
            indicatorSuccessTitle: 'Nalo啪eno',
            indicatorErrorTitle: 'Napaka pri nalaganju',
            indicatorPausedTitle: 'Upload Paused',
            indicatorLoadingTitle: 'Nalagam &hellip;'
        },
        previewZoomButtonTitles: {
            prev: 'Poglej prej拧no datoteko',
            next: 'Poglej naslednjo datoteko',
            toggleheader: 'Preklopi glavo',
            fullscreen: 'Preklopi celozaslonski na膷in',
            borderless: 'Preklopi na膷in brez robov',
            close: 'Zapri predogled podrobnosti'
        }
    };
})(window.jQuery);
