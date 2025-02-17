/*!
 * FileInput Romanian Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 * @author Ciprian Voicu <pictoru@autoportret.ro>
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function ($) {
    "use strict";

    $.fn.fileinputLocales['ro'] = {
        fileSingle: 'fi葯ier',
        filePlural: 'fi葯iere',
        browseLabel: 'R膬sfoie葯te &hellip;',
        removeLabel: '葮terge',
        removeTitle: 'Cur膬葲膬 fi葯ierele selectate',
        cancelLabel: 'Renun葲膬',
        cancelTitle: 'Anuleaz膬 卯nc膬rcarea curent膬',
        pauseLabel: 'Pause',
        pauseTitle: 'Pause ongoing upload',
        uploadLabel: '脦ncarc膬',
        uploadTitle: '脦ncarc膬 fi葯ierele selectate',
        msgNo: 'Nu',
        msgNoFilesSelected: '',
        msgPaused: 'Paused',
        msgCancelled: 'Anulat',
        msgPlaceholder: 'Select {files} ...',
        msgZoomModalHeading: 'Previzualizare detaliat膬',
        msgFileRequired: 'You must select a file to upload.',
        msgSizeTooSmall: 'File "{name}" (<b>{size} KB</b>) is too small and must be larger than <b>{minSize} KB</b>.',
        msgSizeTooLarge: 'Fi葯ierul "{name}" (<b>{size} KB</b>) dep膬葯e葯te limita maxim膬 de 卯nc膬rcare de <b>{maxSize} KB</b>.',
        msgFilesTooLess: 'Trebuie s膬 selectezi cel pu葲in <b>{n}</b> {files} pentru a 卯nc膬rca.',
        msgFilesTooMany: 'Num膬rul fi葯ierelor pentru 卯nc膬rcare <b>({n})</b> dep膬葯e葯te limita maxim膬 de <b>{m}</b>.',
        msgTotalFilesTooMany: 'You can upload a maximum of <b>{m}</b> files (<b>{n}</b> files detected).',
        msgFileNotFound: 'Fi葯ierul "{name}" nu a fost g膬sit!',
        msgFileSecured: 'Restric葲ii de securitate previn citirea fi葯ierului "{name}".',
        msgFileNotReadable: 'Fi葯ierul "{name}" nu se poate citi.',
        msgFilePreviewAborted: 'Fi葯ierului "{name}" nu poate fi previzualizat.',
        msgFilePreviewError: 'A intervenit o eroare 卯n 卯ncercarea de citire a fi葯ierului "{name}".',
        msgInvalidFileName: 'Invalid or unsupported characters in file name "{name}".',
        msgInvalidFileType: 'Tip de fi葯ier incorect pentru "{name}". Sunt suportate doar fi葯iere de tipurile "{types}".',
        msgInvalidFileExtension: 'Extensie incorect膬 pentru "{name}". Sunt suportate doar extensiile "{extensions}".',
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
        msgUploadAborted: 'Fi葯ierul 脦nc膬rcarea a fost 卯ntrerupt',
        msgUploadThreshold: 'Processing &hellip;',
        msgUploadBegin: 'Initializing &hellip;',
        msgUploadEnd: 'Done',
        msgUploadResume: 'Resuming upload &hellip;',
        msgUploadEmpty: 'No valid data available for upload.',
        msgUploadError: 'Upload Error',
        msgDeleteError: 'Delete Error',
        msgProgressError: 'Error',
        msgValidationError: 'Eroare de validare',
        msgLoading: 'Se 卯ncarc膬 fi葯ierul {index} din {files} &hellip;',
        msgProgress: 'Se 卯ncarc膬 fi葯ierul {index} din {files} - {name} - {percent}% 卯nc膬rcat.',
        msgSelected: '{n} {files} 卯nc膬rcate',
        msgFoldersNotAllowed: 'Se poate doar tr膬g芒nd fi葯ierele! Se renun葲膬 la {n} dosar(e).',
        msgImageWidthSmall: 'L膬葲imea de fi葯ier de imagine "{name}" trebuie s膬 fie de cel pu葲in {size} px.',
        msgImageHeightSmall: '脦n膬l葲imea fi葯ier imagine "{name}" trebuie s膬 fie de cel pu葲in {size} px.',
        msgImageWidthLarge: 'L膬葲imea de fi葯ier de imagine "{name}" nu poate dep膬葯i {size} px.',
        msgImageHeightLarge: '脦n膬l葲imea fi葯ier imagine "{name}" nu poate dep膬葯i {size} px.',
        msgImageResizeError: 'Nu a putut ob葲ine dimensiunile imaginii pentru a redimensiona.',
        msgImageResizeException: 'Eroare la redimensionarea imaginii.<pre>{errors}</pre>',
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
        dropZoneTitle: 'Trage fi葯ierele aici &hellip;',
        dropZoneClickTitle: '<br>(or click to select {files})',
        fileActionSettings: {
            removeTitle: 'Scoate葲i fi葯ier',
            uploadTitle: 'Incarca fisier',
            uploadRetryTitle: 'Retry upload',
            downloadTitle: 'Download file',
            zoomTitle: 'Vezi detalii',
            dragTitle: 'Move / Rearrange',
            indicatorNewTitle: 'Nu a 卯nc膬rcat 卯nc膬',
            indicatorSuccessTitle: '卯nc膬rcat',
            indicatorErrorTitle: '脦nc膬rca葲i eroare',
            indicatorPausedTitle: 'Upload Paused',
            indicatorLoadingTitle: 'Se 卯ncarc膬 &hellip;'
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
