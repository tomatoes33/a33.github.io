/*!
 * FileInput Hungarian Translations
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

    $.fn.fileinputLocales['hu'] = {
        fileSingle: 'f谩jl',
        filePlural: 'f谩jlok',
        browseLabel: 'Tall贸z谩s&hellip;',
        removeLabel: 'Elt谩vol铆t谩s',
        removeTitle: 'Kijel枚lt f谩jlok t枚rl茅se',
        cancelLabel: 'M茅gse',
        cancelTitle: 'Felt枚lt茅s megszak铆t谩sa',
        pauseLabel: 'Sz眉net',
        pauseTitle: 'A folyamatban l茅v艖 felt枚lt茅s sz眉neteltet茅se',
        uploadLabel: 'Felt枚lt茅s',
        uploadTitle: 'Kijel枚lt f谩jlok felt枚lt茅se',
        msgNo: 'Nem',
        msgNoFilesSelected: 'Nincs f谩jl kiv谩lasztva',
        msgPaused: 'Sz眉netel',
        msgCancelled: 'Megszak铆tva',
        msgPlaceholder: '{files} kiv谩laszt谩sa...',
        msgZoomModalHeading: 'R茅szletes El艖n茅zet',
        msgFileRequired: 'K枚telez艖 f谩jlt kiv谩lasztani a felt枚lt茅shez.',
        msgSizeTooSmall: '"{name}" f谩jl (<b>{size} KB</b>) m茅rete t煤l kicsi, nagyobbnak kell lennie, mint <b>{minSize} KB</b>.',
        msgSizeTooLarge: '"{name}" f谩jl (<b>{size} KB</b>) m茅rete nagyobb a megengedettn茅l <b>{maxSize} KB</b>.',
        msgFilesTooLess: 'Legal谩bb <b>{n}</b> f谩jl kiv谩laszt谩s谩ra van sz眉ks茅g a felt枚lt茅shez.',
        msgFilesTooMany: 'A felt枚lteni k铆v谩nt f谩jlok sz谩ma <b>({n})</b> el茅rte a megengedett maximumot <b>{m}</b>.',
        msgTotalFilesTooMany: 'Legfeljebb <b>{m}</b> f谩jlt t枚lthet fel (<b>{n}</b> f谩jl 茅szlelve).',
        msgFileNotFound: '"{name}" f谩jl nem tal谩lhat贸!',
        msgFileSecured: 'Biztons谩gi be谩ll铆t谩sok nem engedik olvasni a f谩jlt: "{name}"',
        msgFileNotReadable: '"{name}" f谩jl nem olvashat贸.',
        msgFilePreviewAborted: '"{name}" f谩jl felt枚lt茅se megszak铆tva.',
        msgFilePreviewError: '"{name}" f谩jl olvas谩sa k枚zben hiba l茅pett fel.',
        msgInvalidFileName: '"{name}" f谩jln茅v hib谩s vagy nem t谩mogatott karaktereket tartalmaz.',
        msgInvalidFileType: '"{name}" f谩jl t铆pusa nem megengedett. Csak a k枚vetkez艖 f谩jlt铆pusok t谩mogatottak: "{types}"',
        msgInvalidFileExtension: '"{name}" f谩jl kiterjeszt茅se nem megengedett. Csak a k枚vetkez艖 kiterjeszt茅sek t谩mogatottak: "{extensions}"',
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
        msgUploadAborted: 'A f谩jl felt枚lt茅s megszak铆tva',
        msgUploadThreshold: 'Feldolgoz谩s&hellip;',
        msgUploadBegin: 'Inicializ谩l谩s &hellip;',
        msgUploadEnd: 'K茅sz',
        msgUploadResume: 'Felt枚lt茅s folytat谩sa &hellip;',
        msgUploadEmpty: 'Nincs 茅rv茅nyes adat a felt枚lt茅shez.',
        msgUploadError: 'Felt枚lt茅si hiba',
        msgDeleteError: 'T枚rl茅si hiba',
        msgProgressError: 'Hiba',
        msgValidationError: '脡rv茅nyes铆t茅si hiba',
        msgLoading: '{index}. f谩jl t枚lt茅se&hellip;',
        msgProgress: '{index}. f谩jl t枚lt茅se&hellip; - {name} - {percent}% k茅sz.',
        msgSelected: '{n} f谩jl kiv谩lasztva',
        msgFoldersNotAllowed: 'Csak f谩jlokat h煤zzon ide! Kihagyva {n} k枚nyvt谩r.',
        msgImageWidthSmall: '"{name}" k茅p sz茅less茅g茅nek legal谩bb {size} pixelnek kell lennie.',
        msgImageHeightSmall: '"{name}" k茅p magass谩g谩nak legal谩bb {size} pixelnek kell lennie.',
        msgImageWidthLarge: '"{name}" k茅p sz茅less茅ge nem haladhatja meg a {size} pixelt.',
        msgImageHeightLarge: '"{name}" k茅p magass谩ga nem haladhatja meg a {size} pixelt.',
        msgImageResizeError: 'Nem lehet meg谩llap铆tani a k茅p m茅reteit az 谩tm茅retez茅shez.',
        msgImageResizeException: 'Hiba t枚rt茅nt a m茅retez茅s k枚zben.<pre>{errors}</pre>',
        msgAjaxError: 'Hiba t枚rt茅nt a m疟velet k枚zben ({operation}). K茅rj眉k, pr贸b谩lja 煤jra k茅s艖bb!',
        msgAjaxProgressError: '{operation} sikertelen',
        msgDuplicateFile: '"{name}" f谩jl azonos m茅rettel "{size} KB" m谩r kor谩bban kiv谩lasztva. Az ism茅telt kiv谩laszt谩s kihagy谩sa.',
        msgResumableUploadRetriesExceeded: '<b>{file}</b> f谩jl felt枚lt茅se megszak铆tva <b>{max}</b> pr贸b谩lkoz谩s ut谩n! Hiba r茅szletei: <pre>{error}</pre>',
        msgPendingTime: '{time} van h谩tra',
        msgCalculatingTime: 'h谩tral茅v艖 id艖 kisz谩m铆t谩sa',
        ajaxOperations: {
            deleteThumb: 'f谩jl t枚rl茅s',
            uploadThumb: 'f谩jl felt枚lt茅s',
            uploadBatch: 'csoportos f谩jl felt枚lt茅s',
            uploadExtra: '疟rlap adat felt枚lt茅s'
        },
        dropZoneTitle: 'H煤zzon ide f谩jlokat &hellip;',
        dropZoneClickTitle: '<br>(vagy kattintson ide a {files} tall贸z谩s谩hoz &hellip;)',
        fileActionSettings: {
            removeTitle: 'A f谩jl elt谩vol铆t谩sa',
            uploadTitle: 'F谩jl felt枚lt茅se',
            uploadRetryTitle: 'Felt枚lt茅s 煤jb贸l',
            downloadTitle: 'F谩jl let枚lt茅se',
            zoomTitle: 'R茅szletek megtekint茅se',
            dragTitle: 'Mozgat谩s / 脕trendez茅s',
            indicatorNewTitle: 'M茅g fel nem t枚lt枚tt',
            indicatorSuccessTitle: 'Felt枚lt枚tt',
            indicatorErrorTitle: 'Felt枚lt茅s hiba',
            indicatorPausedTitle: 'Felt枚lt茅s sz眉neteltetve',
            indicatorLoadingTitle: 'Felt枚lt茅s &hellip;'
        },
        previewZoomButtonTitles: {
            prev: 'El艖z艖 f谩jl megn茅z茅se',
            next: 'K枚vetkez艖 f谩jl megn茅z茅se',
            toggleheader: 'Fejl茅c mutat谩sa',
            fullscreen: 'Teljes k茅perny艖s m贸d bekapcsol谩sa',
            borderless: 'Keret n茅lk眉li ablak m贸d bekapcsol谩sa',
            close: 'R茅szletes el艖n茅zet bez谩r谩sa'
        }
    };
})(window.jQuery);
