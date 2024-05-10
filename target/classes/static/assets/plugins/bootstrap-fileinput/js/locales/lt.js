/*!
 * FileInput <_LANG_> Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 * @author Mindaugas Varkalys <varkalys.mindaugas@gmail.com>
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function ($) {
    "use strict";

    $.fn.fileinputLocales['lt'] = {
        fileSingle: 'failas',
        filePlural: 'failai',
        browseLabel: 'Nar拧yti &hellip;',
        removeLabel: '艩alinti',
        removeTitle: 'Pa拧alinti pasirinktus failus',
        cancelLabel: 'At拧aukti',
        cancelTitle: 'At拧aukti vykstant寞 寞k臈lim膮',
        pauseLabel: 'Pause',
        pauseTitle: 'Pause ongoing upload',
        uploadLabel: '漠kelti',
        uploadTitle: '漠kelti pasirinktus failus',
        msgNo: 'Ne',
        msgNoFilesSelected: 'Nepasirinkta joki懦 fail懦',
        msgPaused: 'Paused',
        msgCancelled: 'At拧aukta',
        msgPlaceholder: 'Select {files} ...',
        msgZoomModalHeading: 'Detali Per啪i奴ra',
        msgFileRequired: 'Pasirinkite fail膮 寞k臈limui.',
        msgSizeTooSmall: 'Failas "{name}" (<b>{size} KB</b>) yra per ma啪as ir turi b奴ti didesnis nei <b>{minSize} KB</b>.',
        msgSizeTooLarge: 'Failas "{name}" (<b>{size} KB</b>) vir拧ija maksimal懦 leid啪iam膮 寞keliamo failo dyd寞 <b>{maxSize} KB</b>.',
        msgFilesTooLess: 'Turite pasirinkti bent <b>{n}</b> failus 寞k臈limui.',
        msgFilesTooMany: '漠k臈limui pasirinkt懦 fail懦 skai膷ius <b>({n})</b> vir拧ija maksimal懦 leid啪iam膮 limit膮 <b>{m}</b>.',
        msgTotalFilesTooMany: 'You can upload a maximum of <b>{m}</b> files (<b>{n}</b> files detected).',
        msgFileNotFound: 'Failas "{name}" nerastas!',
        msgFileSecured: 'Saugumo apribojimai neleid啪ia perskaityti failo "{name}".',
        msgFileNotReadable: 'Failas "{name}" neperskaitomas.',
        msgFilePreviewAborted: 'Failo per啪i奴ra nutraukta "{name}".',
        msgFilePreviewError: '漠vyko klaida skaitant fail膮 "{name}".',
        msgInvalidFileName: 'Klaidingi arba nepalaikomi simboliai failo pavadinime "{name}".',
        msgInvalidFileType: 'Klaidingas failo "{name}" tipas. Tik "{types}" tipai yra palaikomi.',
        msgInvalidFileExtension: 'Klaidingas failo "{name}" pl臈tinys. Tik "{extensions}" pl臈tiniai yra palaikomi.',
        msgFileTypes: {
            'image': 'paveiksl臈lis',
            'html': 'HTML',
            'text': 'tekstas',
            'video': 'vaizdo 寞ra拧as',
            'audio': 'garso 寞ra拧as',
            'flash': 'flash',
            'pdf': 'PDF',
            'object': 'objektas'
        },
        msgUploadAborted: 'Failo 寞k臈limas buvo nutrauktas',
        msgUploadThreshold: 'Vykdoma &hellip;',
        msgUploadBegin: 'Inicijuojama &hellip;',
        msgUploadEnd: 'Baigta',
        msgUploadResume: 'Resuming upload &hellip;',
        msgUploadEmpty: 'N臈ra teising懦 duomen懦 寞k臈limui.',
        msgUploadError: 'Upload Error',
        msgDeleteError: 'Delete Error',
        msgProgressError: 'Klaida',
        msgValidationError: 'Validacijos Klaida',
        msgLoading: 'Keliamas failas {index} i拧 {files} &hellip;',
        msgProgress: 'Keliamas failas {index} i拧 {files} - {name} - {percent}% baigta.',
        msgSelected: 'Pasirinkti {n} {files}',
        msgFoldersNotAllowed: 'Tempkite tik failus! Praleisti {n} nutempti aplankalas(-i).',
        msgImageWidthSmall: 'Paveiksl臈lio "{name}" plotis turi b奴ti bent {size} px.',
        msgImageHeightSmall: 'Paveiksl臈lio "{name}" auk拧tis turi b奴ti bent {size} px.',
        msgImageWidthLarge: 'Paveiksl臈lio "{name}" plotis negali vir拧yti {size} px.',
        msgImageHeightLarge: 'Paveiksl臈lio "{name}" auk拧tis negali vir拧yti {size} px.',
        msgImageResizeError: 'Nepavyksta gauti paveiksl臈lio matmet懦, kad pakeisti jo matmemis.',
        msgImageResizeException: 'Klaida kei膷iant paveiksl臈lio matmenis.<pre>{errors}</pre>',
        msgAjaxError: 'Ka啪kas nutiko vykdant {operation} operacij膮. Pra拧ome pabandyti v臈liau!',
        msgAjaxProgressError: '{operation} operacija nes臈kminga',
        msgDuplicateFile: 'File "{name}" of same size "{size} KB" has already been selected earlier. Skipping duplicate selection.',
        msgResumableUploadRetriesExceeded: 'Upload aborted beyond <b>{max}</b> retries for file <b>{file}</b>! Error Details: <pre>{error}</pre>',
        msgPendingTime: '{time} remaining',
        msgCalculatingTime: 'calculating time remaining',
        ajaxOperations: {
            deleteThumb: 'failo trynimo',
            uploadThumb: 'failo 寞k臈limo',
            uploadBatch: 'fail懦 rinkinio 寞k臈limo',
            uploadExtra: 'formos duomen懦 寞k臈limo'
        },
        dropZoneTitle: 'Tempkite failus 膷ia &hellip;',
        dropZoneClickTitle: '<br>(arba paspauskite, kad pasirinktum臈te failus)',
        fileActionSettings: {
            removeTitle: '艩alinti fail膮',
            uploadTitle: '漠kelti fail膮',
            uploadRetryTitle: 'Bandyti 寞kelti v臈l',
            zoomTitle: 'Per啪i奴r臈ti detales',
            dragTitle: 'Perstumti',
            indicatorNewTitle: 'Dar ne寞kelta',
            indicatorSuccessTitle: '漠kelta',
            indicatorErrorTitle: '漠k臈limo Klaida',
            indicatorPausedTitle: 'Upload Paused',
            indicatorLoadingTitle: '漠keliama &hellip;'
        },
        previewZoomButtonTitles: {
            prev: 'Per啪i奴r臈ti ankstesn寞 fail膮',
            next: 'Per啪i奴r臈ti kit膮 fail膮',
            toggleheader: 'Perjungti vir拧utin臋 juost膮',
            fullscreen: 'Perjungti pilno ekrano r臈啪im膮',
            borderless: 'Perjungti ber臈m寞 re啪im膮',
            close: 'U啪daryti detali膮 per啪i奴r膮'
        }
    };
})(window.jQuery);
