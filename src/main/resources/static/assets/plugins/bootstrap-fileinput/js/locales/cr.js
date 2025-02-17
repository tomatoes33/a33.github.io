/*!
 * FileInput Croatian Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 * @author Milos Stojanovic <stojanovic.loshmi@gmail.com>
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function ($) {
    "use strict";

    $.fn.fileinputLocales['cr'] = {
        fileSingle: 'datoteka',
        filePlural: 'datoteke',
        browseLabel: 'Izaberi &hellip;',
        removeLabel: 'Ukloni',
        removeTitle: 'Ukloni ozna膷ene datoteke',
        cancelLabel: 'Odustani',
        cancelTitle: 'Prekini trenutno otpremanje',
        pauseLabel: 'Pause',
        pauseTitle: 'Pause ongoing upload',
        uploadLabel: 'Otpremi',
        uploadTitle: 'Otpremi ozna膷ene datoteke',
        msgNo: 'Ne',
        msgNoFilesSelected: '',
        msgPaused: 'Paused',
        msgCancelled: 'Otkazan',
        msgPlaceholder: 'Select {files} ...',
        msgZoomModalHeading: 'Detaljni pregled',
        msgFileRequired: 'You must select a file to upload.',
        msgSizeTooSmall: 'File "{name}" (<b>{size} KB</b>) is too small and must be larger than <b>{minSize} KB</b>.',
        msgSizeTooLarge: 'Datoteka "{name}" (<b>{size} KB</b>) prekora膷uje maksimalnu dozvoljenu veli膷inu datoteke od <b>{maxSize} KB</b>.',
        msgFilesTooLess: 'Morate odabrati najmanje <b>{n}</b> {files} za otpremanje.',
        msgFilesTooMany: 'Broj datoteka ozna膷enih za otpremanje <b>({n})</b> prekora膷uje maksimalni dozvoljeni limit od <b>{m}</b>.',
        msgTotalFilesTooMany: 'You can upload a maximum of <b>{m}</b> files (<b>{n}</b> files detected).',
        msgFileNotFound: 'Datoteka "{name}" nije prona膽ena!',
        msgFileSecured: 'Datoteku "{name}" nije mogu膰e pro膷itati zbog bezbednosnih ograni膷enja.',
        msgFileNotReadable: 'Datoteku "{name}" nije mogu膰e pro膷itati.',
        msgFilePreviewAborted: 'Generisanje prikaza nije mogu膰e za "{name}".',
        msgFilePreviewError: 'Do拧lo je do gre拧ke prilikom 膷itanja datoteke "{name}".',
        msgInvalidFileName: 'Invalid or unsupported characters in file name "{name}".',
        msgInvalidFileType: 'Datoteka "{name}" je pogre拧nog formata. Dozvoljeni formati su "{types}".',
        msgInvalidFileExtension: 'Ekstenzija datoteke "{name}" nije dozvoljena. Dozvoljene ekstenzije su "{extensions}".',
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
        msgUploadAborted: 'Prijenos datoteka je prekinut',
        msgUploadThreshold: 'Processing &hellip;',
        msgUploadBegin: 'Initializing &hellip;',
        msgUploadEnd: 'Done',
        msgUploadResume: 'Resuming upload &hellip;',
        msgUploadEmpty: 'No valid data available for upload.',
        msgUploadError: 'Upload Error',
        msgDeleteError: 'Delete Error',
        msgProgressError: 'Error',
        msgValidationError: 'Provjera pogre拧aka',
        msgLoading: 'U膷itavanje datoteke {index} od {files} &hellip;',
        msgProgress: 'U膷itavanje datoteke {index} od {files} - {name} - {percent}% zavr拧eno.',
        msgSelected: '{n} {files} je ozna膷eno',
        msgFoldersNotAllowed: 'Mogu膰e je prevla膷iti samo datoteke! Presko膷eno je {n} fascikla.',
        msgImageWidthSmall: '艩irina slikovnu datoteku "{name}" moraju biti najmanje {size} px.',
        msgImageHeightSmall: 'Visina slikovnu datoteku "{name}" moraju biti najmanje {size} px.',
        msgImageWidthLarge: '艩irina slikovnu datoteku "{name}" ne mo啪e prelaziti {size} px.',
        msgImageHeightLarge: 'Visina slikovnu datoteku "{name}" ne mo啪e prelaziti {size} px.',
        msgImageResizeError: 'Nije mogao dobiti dimenzije slike na veli膷inu.',
        msgImageResizeException: 'Gre拧ka prilikom promjene veli膷ine slike.<pre>{errors}</pre>',
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
        dropZoneTitle: 'Prevucite datoteke ovde &hellip;',
        dropZoneClickTitle: '<br>(or click to select {files})',
        fileActionSettings: {
            removeTitle: 'Uklonite datoteku',
            uploadTitle: 'Postavi datoteku',
            uploadRetryTitle: 'Retry upload',
            downloadTitle: 'Download file',
            zoomTitle: 'Pregledavati pojedinosti',
            dragTitle: 'Move / Rearrange',
            indicatorNewTitle: 'Jo拧 nije u膷itao',
            indicatorSuccessTitle: 'Preneseno',
            indicatorErrorTitle: 'Postavi Gre拧ka',
            indicatorPausedTitle: 'Upload Paused',
            indicatorLoadingTitle: 'Prijenos &hellip;'
        },
        previewZoomButtonTitles: {
            prev: 'View previous file',
            next: 'View next file',
            toggleheader: 'Toggle header',
            fullscreen: 'Toggle full screen',
            borderless: 'Toggle borderless mode',
            close: 'Close detailed preview'
        }
    };
})(window.jQuery);
