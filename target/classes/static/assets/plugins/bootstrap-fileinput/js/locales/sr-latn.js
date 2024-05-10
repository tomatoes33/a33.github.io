/*!
 * FileInput Serbian Latin Translations
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

    $.fn.fileinputLocales['sr-latn'] = {
        fileSingle: 'dokument',
        filePlural: 'dokumenti',
        browseLabel: 'Odaberi dokument &hellip;',
        removeLabel: 'Obri拧i',
        removeTitle: 'Obri拧i odabrane dokumente',
        cancelLabel: 'Prekini',
        cancelTitle: 'Prekini slanje dokumenata',
        pauseLabel: 'Pauziraj',
        pauseTitle: 'Pauziraj slanje dokumenata',
        uploadLabel: 'Po拧alji',
        uploadTitle: 'Po拧alji odabrane dokumente',
        msgNo: 'Ne',
        msgNoFilesSelected: 'Nema odabranih dokumenata',
        msgPaused: 'Pauzirano',
        msgCancelled: 'Prekinuto',
        msgPlaceholder: 'Odaberi {files} ...',
        msgZoomModalHeading: 'Pregled detalja',
        msgFileRequired: 'Obavezan odabir dokumenta za slanje.',
        msgSizeTooSmall: 'Dokument "{name}" (<b>{size} KB</b>) mora biti ve膰i od <b>{minSize} KB</b>.',
        msgSizeTooLarge: 'Dokument "{name}" (<b>{size} KB</b>) prelazi maksimalnu dozvoljenu veli膷inu od <b>{maxSize} KB</b>.',
        msgFilesTooLess: 'Obavezan odabir minimum <b>{n}</b> dokumenata za slanje.',
        msgFilesTooMany: 'Broj dokumenata odabranih za slanje <b>({n})</b> prelazi maksimalno ograni膷enje od <b>{m}</b>.',
        msgTotalFilesTooMany: 'Maksimalni broj dokumenata je <b>{m}</b> (<b>{n}</b> je odabrano).',
        msgFileNotFound: 'Dokument "{name}" nije prona膽en!',
        msgFileSecured: 'Bezbednosna ograni膷enja spre膷avaju 膷itanje dokumenta "{name}".',
        msgFileNotReadable: 'Dokument "{name}" nije mogu膰e pro膷itati.',
        msgFilePreviewAborted: 'Prikaz dokumenta "{name}" je prekinut.',
        msgFilePreviewError: 'Gre拧ka u 膷itanju dokumenta "{name}".',
        msgInvalidFileName: 'Nedozvoljeni karakteri u nazivu dokumenta "{name}".',
        msgInvalidFileType: 'Nedozvoljeni tip dokumenta "{name}". Dozvoljeni tipovi dokumenata su "{types}".',
        msgInvalidFileExtension: 'Nedozvoljena ekstenzija dokumenta "{name}". Dozvoljene ekstenzije dokumenata su "{extensions}".',
        msgFileTypes: {
            'image': 'slika',
            'html': 'HTML',
            'text': 'tekst',
            'video': 'video',
            'audio': 'audio',
            'flash': 'flash',
            'pdf': 'PDF',
            'object': 'objekat'
        },
        msgUploadAborted: 'Prekinuto je slanje dokumenta',
        msgUploadThreshold: 'U obradi &hellip;',
        msgUploadBegin: 'Pokretanje &hellip;',
        msgUploadEnd: 'Zavr拧eno',
        msgUploadResume: 'Nastavlja se slanje &hellip;',
        msgUploadEmpty: 'Nema podataka za slanje.',
        msgUploadError: 'Gre拧ka u slanju',
        msgDeleteError: 'Gre拧ka u brisanju',
        msgProgressError: 'Gre拧ka',
        msgValidationError: 'Gre拧ka nakon provere podataka',
        msgLoading: 'U膷itavanje dokumenta {index} od {files} &hellip;',
        msgProgress: 'U膷itavanje dokumenta {index} od {files} - {name} - {percent}% zavr拧eno.',
        msgSelected: '{n} dokumenata odabrano',
        msgFoldersNotAllowed: 'Prevla膷enje foldera nije dozvoljeno! {n} prevu膷enih foldera nije dodato.',
        msgImageWidthSmall: '艩irina slike "{name}" mora biti ve膰a od {size} px.',
        msgImageHeightSmall: 'Visina slike "{name}" mora biti ve膰a od {size} px.',
        msgImageWidthLarge: '艩irina slike "{name}" mora biti manja od {size} px.',
        msgImageHeightLarge: 'Visina slike "{name}" mora biti manja od {size} px.',
        msgImageResizeError: 'Gre拧ka u 膷itanju dimenzija slike za promenu veli膷ine.',
        msgImageResizeException: 'Gre拧ka u promeni veli膷ine slike.<pre>{errors}</pre>',
        msgAjaxError: 'Gre拧ka u {operation} operaciji. Molimo poku拧ajte ponovo kasnije!',
        msgAjaxProgressError: 'Operacija {operation} nije uspela.',
        msgDuplicateFile: 'Dokument "{name}" iste veli膷ine "{size} KB" je ve膰 selektovan. Duplirani dokument je presko膷en.',
        msgResumableUploadRetriesExceeded: 'Slanje je prekinuto nakon <b>{max}</b> poku拧aja za dokument <b>{file}</b>! Detalji gre拧ke: <pre>{error}</pre>',
        msgPendingTime: '{time} preostalo',
        msgCalculatingTime: 'ra膷unanje preostalog vremena',
        ajaxOperations: {
            deleteThumb: 'brisanje dokumenta',
            uploadThumb: 'slanje dokumenta',
            uploadBatch: 'slanje grupe dokumenata',
            uploadExtra: 'slanje podataka forme'
        },
        dropZoneTitle: 'Prevuci dokumente ovde &hellip;',
        dropZoneClickTitle: '<br>(ili klikni za odabir dokumenata)',
        fileActionSettings: {
            removeTitle: 'Obri拧i dokument',
            uploadTitle: 'Po拧alji dokument',
            uploadRetryTitle: 'Ponovi slanje',
            downloadTitle: 'Skini dokument',
            zoomTitle: 'Pregled detalja',
            dragTitle: 'Promeni redosled',
            indicatorNewTitle: 'Nije poslato',
            indicatorSuccessTitle: 'Poslato',
            indicatorErrorTitle: 'Gre拧ka u slanju',
            indicatorPausedTitle: 'Pauzirano slanje',
            indicatorLoadingTitle: 'Slanje u toku &hellip;'
        },
        previewZoomButtonTitles: {
            prev: 'Prethodni dokument',
            next: 'Slede膰i dokument',
            toggleheader: 'Isklju膷i naslov',
            fullscreen: 'Ra拧iri na ceo prozor',
            borderless: 'Isklju膷i ivice',
            close: 'Zatvori pregled detalja'
        }
    };
})(window.jQuery);
