/*!
 * FileInput Czech Translations
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

    $.fn.fileinputLocales['cs'] = {
        fileSingle: 'soubor',
        filePlural: 'soubory',
        browseLabel: 'Vybrat &hellip;',
        removeLabel: 'Odstranit',
        removeTitle: 'Vy膷istit vybran茅 soubory',
        cancelLabel: 'Storno',
        cancelTitle: 'P艡eru拧it  nahr谩v谩n铆',
        pauseLabel: 'Pozastavit',
        pauseTitle: 'Pozastavit prob铆haj铆c铆 nahr谩v谩n铆',
        uploadLabel: 'Nahr谩t',
        uploadTitle: 'Nahr谩t vybran茅 soubory',
        msgNo: 'Ne',
        msgNoFilesSelected: 'Nevybr谩ny 啪谩dn茅 soubory',
        msgPaused: 'Pozastaven茅',
        msgCancelled: 'Zru拧eno',
        msgPlaceholder: 'Vybrat {files} ...',
        msgZoomModalHeading: 'Detailn铆 n谩hled',
        msgFileRequired: 'Mus铆te vybrat soubor, kter媒 chcete nahr谩t.',
        msgSizeTooSmall: 'Soubor "{name}" (<b>{size} KB</b>) je p艡铆li拧 mal媒, mus铆 m铆t velikost nejm茅n臎 <b>{minSize} KB</b>.',
        msgSizeTooLarge: 'Soubor "{name}" (<b>{size} KB</b>) je p艡铆li拧 velk媒, maxim谩ln铆 povolen谩 velikost <b>{maxSize} KB</b>.',
        msgFilesTooLess: 'Mus铆te vybrat nejm茅n臎 <b>{n}</b> {files} soubor暖.',
        msgFilesTooMany: 'Po膷et vybran媒ch soubor暖 <b>({n})</b> p艡ekro膷il maxim谩ln铆 povolen媒 limit <b>{m}</b>.',
        msgTotalFilesTooMany: 'M暖啪ete nahr谩t maxim谩ln臎 <b>{m}</b> soubor暖 (bylo nalezeno <b>{n}</b> soubor暖).',
        msgFileNotFound: 'Soubor "{name}" nebyl nalezen!',
        msgFileSecured: 'Zabezpe膷en铆 souboru znemo啪nilo 膷铆st soubor "{name}".',
        msgFileNotReadable: 'Soubor "{name}" nen铆 膷iteln媒.',
        msgFilePreviewAborted: 'N谩hled souboru byl p艡eru拧en pro "{name}".',
        msgFilePreviewError: 'Nastala chyba p艡i na膷ten铆 souboru "{name}".',
        msgInvalidFileName: 'Neplatn茅 nebo nepovolen茅 znaky ve jm茅nu souboru "{name}".',
        msgInvalidFileType: 'Neplatn媒 typ souboru "{name}". Pouze "{types}" soubor暖 jsou podporov谩ny.',
        msgInvalidFileExtension: 'Neplatn谩 extenze souboru "{name}". Pouze "{extensions}" soubor暖 jsou podporov谩ny.',
        msgFileTypes: {
            'image': 'obr谩zek',
            'html': 'HTML',
            'text': 'text',
            'video': 'video',
            'audio': 'audio',
            'flash': 'flash',
            'pdf': 'PDF',
            'object': 'object'
        },
        msgUploadAborted: 'Nahr谩v谩n铆 souboru bylo p艡eru拧eno',
        msgUploadThreshold: 'Zpracov谩v谩m &hellip;',
        msgUploadBegin: 'Inicializujem &hellip;',
        msgUploadEnd: 'Hotovo',
        msgUploadResume: 'Obnovuje se nahr谩v谩n铆 &hellip;',
        msgUploadEmpty: 'Pro nahr谩v谩n铆 nejsou k dispozici 啪谩dn茅 platn茅 煤daje.',
        msgUploadError: 'Chyba p艡i nahr谩v谩n铆',
        msgDeleteError: 'Chyba p艡i odstra艌ov谩n铆',
        msgProgressError: 'Chyba',
        msgValidationError: 'Chyba ov臎艡en铆',
        msgLoading: 'Nahr谩v谩n铆 souboru {index} z {files} &hellip;',
        msgProgress: 'Nahr谩v谩n铆 souboru {index} z {files} - {name} - {percent}% dokon膷eno.',
        msgSelected: '{n} {files} vybr谩no',
        msgFoldersNotAllowed: 'T谩hni a pus钮 pouze soubory! Vynechan茅 {n} pust臎n茅 slo啪k(y).',
        msgImageWidthSmall: '艩铆艡ka obr谩zku "{name}", mus铆 b媒t alespo艌 {size} px.',
        msgImageHeightSmall: 'V媒拧ka obr谩zku "{name}", mus铆 b媒t alespo艌 {size} px.',
        msgImageWidthLarge: '艩铆艡ka obr谩zku "{name}" nesm铆 b媒t v臎t拧铆 ne啪 {size} px.',
        msgImageHeightLarge: 'V媒拧ka obr谩zku "{name}" nesm铆 b媒t v臎t拧铆 ne啪 {size} px.',
        msgImageResizeError: 'Nelze z铆skat rozm臎ry obr谩zku pro zm臎nu velikosti.',
        msgImageResizeException: 'Chyba p艡i zm臎n臎 velikosti obr谩zku.<pre>{errors}</pre>',
        msgAjaxError: 'Do拧lo k chyb臎 v {operation}. Pros铆m zkuste to znovu pozd臎ji!',
        msgAjaxProgressError: '{operation} - ne煤sp臎拧n茅',
        msgDuplicateFile: 'Soubor "{name}" stejn茅 velikosti "{size} KB" u啪 byl vybr谩n d艡铆ve. P艡esko膷en铆 duplicitn铆ho v媒b臎ru.',
        msgResumableUploadRetriesExceeded: 'Nahr谩v谩n铆 bylo p艡eru拧eno po <b>{max}</b> opakov谩n铆ch souboru <b>{file}</b>! Detaily chyby: <pre>{error}</pre>',
        msgPendingTime: '{time} z暖st谩v谩',
        msgCalculatingTime: 'v媒po膷et zb媒vaj铆c铆ho 膷asu',
        ajaxOperations: {
            deleteThumb: 'odstranit soubor',
            uploadThumb: 'nahr谩t soubor',
            uploadBatch: 'nahr谩t v谩rku soubor暖',
            uploadExtra: 'odes铆l谩n铆 dat formul谩艡e'
        },
        dropZoneTitle: 'P艡et谩hni soubory sem &hellip;',
        dropZoneClickTitle: '<br>(nebo klikni sem a vyber je)',
        fileActionSettings: {
            removeTitle: 'Odstranit soubor',
            uploadTitle: 'Nahr谩t soubor',
            uploadRetryTitle: 'Opakovat nahr谩v谩n铆',
            downloadTitle: 'St谩hnout soubor',
            zoomTitle: 'Zobrazit podrobnosti',
            dragTitle: 'Posunout / P艡eskl谩dat',
            indicatorNewTitle: 'Je拧t臎 nenahr谩l',
            indicatorSuccessTitle: 'Nahran媒',
            indicatorErrorTitle: 'Chyba nahr谩v谩n铆',
            indicatorPausedTitle: 'Nahr谩v谩n铆 bylo pozastaveno',
            indicatorLoadingTitle: 'Nahr谩v谩n铆 &hellip;'
        },
        previewZoomButtonTitles: {
            prev: 'Zobrazit p艡edchoz铆 soubor',
            next: 'Zobrazit n谩sleduj铆c铆 soubor',
            toggleheader: 'P艡epnout z谩hlav铆',
            fullscreen: 'P艡epnout celoobrazovkov茅 zobrazen铆',
            borderless: 'P艡epnout bezr谩me膷kov茅 zobrazen铆',
            close: 'Zav艡铆t detailn铆 n谩hled'
        }
    };
})(window.jQuery);
