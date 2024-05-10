/*!
 * FileInput <_LANG_> Translations
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

    $.fn.fileinputLocales['sv'] = {
        fileSingle: 'fil',
        filePlural: 'filer',
        browseLabel: 'Bl盲ddra &hellip;',
        removeLabel: 'Ta bort',
        removeTitle: 'Rensa valda filer',
        cancelLabel: 'Avbryt',
        cancelTitle: 'Avbryt p氓g氓ende uppladdning',
        pauseLabel: 'Pause',
        pauseTitle: 'Pause ongoing upload',
        uploadLabel: 'Ladda upp',
        uploadTitle: 'Ladda upp valda filer',
        msgNo: 'Nej',
        msgNoFilesSelected: 'Inga filer valda',
        msgPaused: 'Paused',
        msgCancelled: 'Avbruten',
        msgPlaceholder: 'Select {files} ...',
        msgZoomModalHeading: 'detaljerad f枚rhandsgranskning',
        msgFileRequired: 'You must select a file to upload.',
        msgSizeTooSmall: 'Filen "{name}" (<b>{size} KB</b>) 盲r f枚r liten och m氓ste vara st枚rre 盲n <b>{minSize} KB</b>.',
        msgSizeTooLarge: 'File "{name}" (<b>{size} KB</b>) 枚verstiger h枚gsta till氓tna uppladdningsstorlek <b>{maxSize} KB</b>.',
        msgFilesTooLess: 'Du m氓ste v盲lja minst <b>{n}</b> {files} f枚r att ladda upp.',
        msgFilesTooMany: 'Antal filer valda f枚r uppladdning <b>({n})</b> 枚verstiger h枚gsta till氓tna gr盲nsen <b>{m}</b>.',
        msgTotalFilesTooMany: 'You can upload a maximum of <b>{m}</b> files (<b>{n}</b> files detected).',
        msgFileNotFound: 'Filen "{name}" kunde inte hittas!',
        msgFileSecured: 'S盲kerhetsbegr盲nsningar f枚rhindrar att l盲sa filen "{name}".',
        msgFileNotReadable: 'Filen "{name}" 盲r inte l盲sbar.',
        msgFilePreviewAborted: 'Filf枚rhandsvisning avbr枚ts f枚r "{name}".',
        msgFilePreviewError: 'Ett fel uppstod vid inl盲sning av filen "{name}".',
        msgInvalidFileName: 'Ogiltiga eller tecken som inte st枚ds i filnamnet "{name}".',
        msgInvalidFileType: 'Ogiltig typ f枚r filen "{name}". Endast "{types}" filtyper st枚ds.',
        msgInvalidFileExtension: 'Ogiltigt filtill盲gg f枚r filen "{name}". Endast "{extensions}" filer st枚ds.',
        msgFileTypes: {
            'image': 'bild',
            'html': 'HTML',
            'text': 'text',
            'video': 'video',
            'audio': 'ljud',
            'flash': 'flash',
            'pdf': 'PDF',
            'object': 'objekt'
        },
        msgUploadAborted: 'Fil枚verf枚ringen avbr枚ts',
        msgUploadThreshold: 'Bearbetar &hellip;',
        msgUploadBegin: 'P氓b枚rjar &hellip;',
        msgUploadEnd: 'F盲rdig',
        msgUploadResume: 'Resuming upload &hellip;',
        msgUploadEmpty: 'Ingen giltig data tillg盲nglig f枚r uppladdning.',
        msgUploadError: 'Upload Error',
        msgDeleteError: 'Delete Error',
        msgProgressError: 'Error',
        msgValidationError: 'Valideringsfel',
        msgLoading: 'Laddar fil {index} av {files} &hellip;',
        msgProgress: 'Laddar fil {index} av {files} - {name} - {percent}% f盲rdig.',
        msgSelected: '{n} {files} valda',
        msgFoldersNotAllowed: 'Endast drag & sl盲ppfiler! Skippade {n} sl盲pta mappar.',
        msgImageWidthSmall: 'Bredd p氓 bildfilen "{name}" m氓ste minst vara {size} pixlar.',
        msgImageHeightSmall: 'H枚jden p氓 bildfilen "{name}" m氓ste minst vara {size} pixlar.',
        msgImageWidthLarge: 'Bredd p氓 bildfil "{name}" kan inte 枚verstiga {size} pixlar.',
        msgImageHeightLarge: 'H枚jden p氓 bildfilen "{name}" kan inte 枚verstiga {size} pixlar.',
        msgImageResizeError: 'Det gick inte att h盲mta bildens dimensioner f枚r att 盲ndra storlek.',
        msgImageResizeException: 'Fel vid storleks盲ndring av bilden.<pre>{errors}</pre>',
        msgAjaxError: 'N氓got gick fel med {operation} operationen. F枚rs枚k igen senare!',
        msgAjaxProgressError: '{operation} misslyckades',
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
        dropZoneTitle: 'Drag & sl盲pp filer h盲r &hellip;',
        dropZoneClickTitle: '<br>(eller klicka f枚r att markera {files})',
        fileActionSettings: {
            removeTitle: 'Ta bort fil',
            uploadTitle: 'Ladda upp fil',
            uploadRetryTitle: 'Retry upload',
            zoomTitle: 'Visa detaljer',
            dragTitle: 'Flytta / 脛ndra ordning',
            indicatorNewTitle: 'Inte uppladdat 盲nnu',
            indicatorSuccessTitle: 'Uppladdad',
            indicatorErrorTitle: 'Uppladdningsfel',
            indicatorPausedTitle: 'Upload Paused',
            indicatorLoadingTitle: 'Laddar upp &hellip;'
        },
        previewZoomButtonTitles: {
            prev: 'Visa f枚reg氓ende fil',
            next: 'Visa n盲sta fil',
            toggleheader: 'Rubrik',
            fullscreen: 'Fullsk盲rm',
            borderless: 'Gr盲nsl枚s',
            close: 'St盲ng detaljerad f枚rhandsgranskning'
        }
    };
})(window.jQuery);
