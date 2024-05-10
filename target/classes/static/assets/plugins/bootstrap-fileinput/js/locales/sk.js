/*!
 * FileInput Slovakian Translations
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

    $.fn.fileinputLocales['sk'] = {
        fileSingle: 's煤bor',
        filePlural: 's煤bory',
        browseLabel: 'Vybra钮 &hellip;',
        removeLabel: 'Odstr谩ni钮',
        removeTitle: 'Vy膷isti钮 vybrat茅 s煤bory',
        cancelLabel: 'Storno',
        cancelTitle: 'Preru拧i钮  nahr谩vanie',
        pauseLabel: 'Pozastavi钮',
        pauseTitle: 'Pozastavi钮 prebiehaj煤ce nahr谩vanie',
        uploadLabel: 'Nahra钮',
        uploadTitle: 'Nahra钮 vybrat茅 s煤bory',
        msgNo: 'Nie',
        msgNoFilesSelected: '',
        msgPaused: 'Pozastaven茅',
        msgCancelled: 'Zru拧en茅',
        msgPlaceholder: 'Vybra钮 {files} ...',
        msgZoomModalHeading: 'Detailn媒 n谩h木ad',
        msgFileRequired: 'Mus铆te vybra钮 s煤bor, ktor媒 chcete nahra钮.',
        msgSizeTooSmall: 'S煤bor "{name}" (<b>{size} KB</b>) je pr铆li拧 mal媒, mus铆 ma钮 ve木kos钮 najmenej <b>{minSize} KB</b>.',
        msgSizeTooLarge: 'S煤bor "{name}" (<b>{size} KB</b>) je pr铆li拧 ve木k媒, maxim谩lna povolen谩 ve木kos钮 <b>{maxSize} KB</b>.',
        msgFilesTooLess: 'Mus铆te vybra钮 najmenej <b>{n}</b> {files} pre nahranie.',
        msgFilesTooMany: 'Po膷et vybrat媒ch s煤borov <b>({n})</b> prekro膷il maxim谩lny povolen媒 limit <b>{m}</b>.',
        msgTotalFilesTooMany: 'M么啪ete nahra钮 maxim谩lne <b>{m}</b> s煤borov (zisten媒ch <b>{n}</b> s煤borov).',
        msgFileNotFound: 'S煤bor "{name}" nebol n谩jden媒!',
        msgFileSecured: 'Zabezpe膷enie s煤boru znemo啪nilo 膷铆ta钮 s煤bor "{name}".',
        msgFileNotReadable: 'S煤bor "{name}" nie je 膷itate木n媒.',
        msgFilePreviewAborted: 'N谩h木ad s煤boru bol preru拧en媒 pre "{name}".',
        msgFilePreviewError: 'Nastala chyba pri na膷铆tan铆 s煤boru "{name}".',
        msgInvalidFileName: 'Invalid or unsupported characters in file name "{name}".',
        msgInvalidFileType: 'Neplatn媒 typ s煤boru "{name}". Iba "{types}" s煤borov s煤 podporovan茅.',
        msgInvalidFileExtension: 'Neplatn谩 extenzia s煤boru "{name}". Iba "{extensions}" s煤borov s煤 podporovan茅.',
        msgFileTypes: {
            'image': 'obr谩zok',
            'html': 'HTML',
            'text': 'text',
            'video': 'video',
            'audio': 'audio',
            'flash': 'flash',
            'pdf': 'PDF',
            'object': 'object'
        },
        msgUploadAborted: 'Nahr谩vanie s煤boru bolo preru拧en茅',
        msgUploadThreshold: 'Spracov谩vam &hellip;',
        msgUploadBegin: 'Inicializujem &hellip;',
        msgUploadEnd: 'Hotovo',
        msgUploadResume: 'Obnovuje sa nahr谩vanie &hellip;',
        msgUploadEmpty: 'Na nahr谩vanie nie s煤 k dispoz铆cii 啪iadne platn茅 煤daje.',
        msgUploadError: 'Chyba pri nahr谩van铆',
        msgDeleteError: 'Chyba pri odstra艌ovan铆',
        msgProgressError: 'Chyba',
        msgValidationError: 'Chyba overenia',
        msgLoading: 'Nahr谩vanie s煤boru {index} z {files} &hellip;',
        msgProgress: 'Nahr谩vanie s煤boru {index} z {files} - {name} - {percent}% dokon膷en茅.',
        msgSelected: '{n} {files} vybrat茅',
        msgFoldersNotAllowed: 'Tiahni a pus钮 iba s煤bory! Vynechan茅 {n} pusten茅 pre膷inok(y).',
        msgImageWidthSmall: '艩铆rka obr谩zku "{name}", mus铆 by钮 minim谩lne {size} px.',
        msgImageHeightSmall: 'V媒拧ka obr谩zku "{name}", mus铆 by钮 minim谩lne {size} px.',
        msgImageWidthLarge: '艩铆rka obr谩zku "{name}" nem么啪e presiahnu钮 {size} px.',
        msgImageHeightLarge: 'V媒拧ka obr谩zku "{name}" nesmie presiahnu钮 {size} px.',
        msgImageResizeError: 'Nepodarilo sa z铆ska钮 ve木kos钮 obr谩zka pre zmenu ve木kosti.',
        msgImageResizeException: 'Chyba pri zmene ve木kosti obr谩zka.<pre>{errors}</pre>',
        msgAjaxError: 'Pri oper谩cii {operation} sa vyskytla chyba. Sk煤ste to pros铆m nesk么r!',
        msgAjaxProgressError: '{operation} - ne煤spe拧n茅',
        msgDuplicateFile: 'S煤bor "{name}" rovnakej ve木kosti "{size} KB" u啪 bol vybrat媒 sk么r. Presko膷enie duplicitn茅ho v媒beru.',
        msgResumableUploadRetriesExceeded: 'Nahr谩vanie bolo preru拧en茅 po <b>{max}</b> opakovaniach s煤boru <b>{file}</b>! Detaily chyby: <pre>{error}</pre>',
        msgPendingTime: '{time} zost谩va',
        msgCalculatingTime: 'v媒po膷et zost谩vaj煤ceho 膷asu',
        ajaxOperations: {
            deleteThumb: 'odstr谩ni钮 s煤bor',
            uploadThumb: 'nahra钮 s煤bor',
            uploadBatch: 'nahra钮 v谩rku s煤borov',
            uploadExtra: 'odosielanie 煤dajov z formul谩ra'
        },
        dropZoneTitle: 'Tiahni a pus钮 s煤bory tu &hellip;',
        dropZoneClickTitle: '<br>(alebo kliknite sem a vyberte {files})',
        fileActionSettings: {
            removeTitle: 'Odstr谩ni钮 s煤bor',
            uploadTitle: 'Nahra钮 s煤bor',
            uploadRetryTitle: 'Znova nahra钮',
            downloadTitle: 'Stiahnu钮 s煤bor',
            zoomTitle: 'Zobrazi钮 podrobnosti',
            dragTitle: 'Posun煤钮 / Preskl谩da钮',
            indicatorNewTitle: 'E拧te nenahral',
            indicatorSuccessTitle: 'Nahran媒',
            indicatorErrorTitle: 'Chyba pri nahr谩van铆',
            indicatorPausedTitle: 'Nahr谩vanie bolo pozastaven茅',
            indicatorLoadingTitle: 'Nahr谩vanie &hellip;'
        },
        previewZoomButtonTitles: {
            prev: 'Zobrazi钮 predch谩dzaj煤ci s煤bor',
            next: 'Zobrazi钮 n谩sleduj煤ci s煤bor',
            toggleheader: 'Prepn煤钮 z谩hlavie',
            fullscreen: 'Prepn煤钮 zobrazenie na cel煤 obrazovku',
            borderless: 'Prepn煤钮 na bezr谩mikov茅 zobrazenie',
            close: 'Zatvori钮 detailn媒 n谩h木ad'
        }
    };
})(window.jQuery);
