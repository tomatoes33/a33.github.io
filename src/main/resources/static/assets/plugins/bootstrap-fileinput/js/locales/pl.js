/*!
 * FileInput Polish Translations
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

    $.fn.fileinputLocales['pl'] = {
        fileSingle: 'plik',
        filePlural: 'pliki',
        browseLabel: 'Przegl膮daj &hellip;',
        removeLabel: 'Usu艅',
        removeTitle: 'Usu艅 zaznaczone pliki',
        cancelLabel: 'Przerwij',
        cancelTitle: 'Anuluj wysy艂anie',
        pauseLabel: 'Wstrzymaj',
        pauseTitle: 'Wstrzymaj trwaj膮ce przesy艂anie',
        uploadLabel: 'Wgraj',
        uploadTitle: 'Wgraj zaznaczone pliki',
        msgNo: 'Nie',
        msgNoFilesSelected: 'Brak zaznaczonych plik贸w',
        msgPaused: 'Wstrzymano',
        msgCancelled: 'Odwo艂any',
        msgPlaceholder: 'Wybierz {files} ...',
        msgZoomModalHeading: 'Szczeg贸艂owy podgl膮d',
        msgFileRequired: 'Musisz wybra膰 plik do wgrania.',
        msgSizeTooSmall: 'Plik "{name}" (<b>{size} KB</b>) jest zbyt ma艂y i musi by膰 wi臋kszy ni偶 <b>{minSize} KB</b>.',
        msgSizeTooLarge: 'Plik o nazwie "{name}" (<b>{size} KB</b>) przekroczy艂 maksymaln膮 dopuszczaln膮 wielko艣膰 pliku wynosz膮c膮 <b>{maxSize} KB</b>.',
        msgFilesTooLess: 'Minimalna liczba plik贸w do wgrania: <b>{n}</b>.',
        msgFilesTooMany: 'Liczba plik贸w wybranych do wgrania w liczbie <b>({n})</b>, przekracza maksymalny dozwolony limit wynosz膮cy <b>{m}</b>.',
        msgTotalFilesTooMany: 'Mo偶esz wgra膰 maksymalnie <b>{m}</b> plik贸w (wykryto <b>{n}</b>).',
        msgFileNotFound: 'Plik "{name}" nie istnieje!',
        msgFileSecured: 'Ustawienia zabezpiecze艅 uniemo偶liwiaj膮 odczyt pliku "{name}".',
        msgFileNotReadable: 'Plik "{name}" nie jest plikiem do odczytu.',
        msgFilePreviewAborted: 'Podgl膮d pliku "{name}" zosta艂 przerwany.',
        msgFilePreviewError: 'Wyst膮pi艂 b艂膮d w czasie odczytu pliku "{name}".',
        msgInvalidFileName: 'Nieprawid艂owe lub nieobs艂ugiwane znaki w nazwie pliku "{name}".',
        msgInvalidFileType: 'Nieznany typ pliku "{name}". Tylko nast臋puj膮ce rodzaje plik贸w s膮 dozwolone: "{types}".',
        msgInvalidFileExtension: 'Z艂e rozszerzenie dla pliku "{name}". Tylko nast臋puj膮ce rozszerzenia plik贸w s膮 dozwolone: "{extensions}".',
        msgUploadAborted: 'Przesy艂anie pliku zosta艂o przerwane',
        msgUploadThreshold: 'Przetwarzanie &hellip;',
        msgUploadBegin: 'Rozpoczynanie &hellip;',
        msgUploadEnd: 'Gotowe!',
        msgUploadResume: 'Wznawianie przesy艂ania &hellip;',
        msgUploadEmpty: 'Brak poprawnych danych do przes艂ania.',
        msgUploadError: 'B艂膮d przesy艂ania',
        msgDeleteError: 'B艂膮d usuwania',
        msgProgressError: 'B艂膮d',
        msgValidationError: 'B艂膮d walidacji',
        msgLoading: 'Wczytywanie pliku {index} z {files} &hellip;',
        msgProgress: 'Wczytywanie pliku {index} z {files} - {name} - {percent}% zako艅czone.',
        msgSelected: '{n} Plik贸w zaznaczonych',
        msgFoldersNotAllowed: 'Metod膮 przeci膮gnij i upu艣膰, mo偶na przenosi膰 tylko pliki. Pomini臋to {n} katalog贸w.',
        msgImageWidthSmall: 'Szeroko艣膰 pliku obrazu "{name}" musi by膰 co najmniej {size} px.',
        msgImageHeightSmall: 'Wysoko艣膰 pliku obrazu "{name}" musi by膰 co najmniej {size} px.',
        msgImageWidthLarge: 'Szeroko艣膰 pliku obrazu "{name}" nie mo偶e przekracza膰 {size} px.',
        msgImageHeightLarge: 'Wysoko艣膰 pliku obrazu "{name}" nie mo偶e przekracza膰 {size} px.',
        msgImageResizeError: 'Nie uda艂o si臋 uzyska膰 wymiaru obrazu, aby zmieni膰 rozmiar.',
        msgImageResizeException: 'B艂膮d podczas zmiany rozmiaru obrazu.<pre>{errors}</pre>',
        msgAjaxError: 'Co艣 pocz艂o nie tak podczas {operation}. Spr贸buj ponownie!',
        msgAjaxProgressError: '{operation} nie powiod艂o si臋',
        msgDuplicateFile: 'Plik "{name}" o identycznym rozmiarze "{size} KB" zosta艂 wgrany wcze艣niej. Pomijanie zduplikowanego pliku.',
        msgResumableUploadRetriesExceeded: 'Przekroczono limit <b>{max}</b> pr贸b wgrania pliku <b>{file}</b>! Szczeg贸艂y b艂臋du: <pre>{error}</pre>',
        msgPendingTime: 'Pozosta艂o {time}',
        msgCalculatingTime: 'obliczanie pozosta艂ego czasu',
        ajaxOperations: {
            deleteThumb: 'usuwanie pliku',
            uploadThumb: 'przesy艂anie pliku',
            uploadBatch: 'masowe przesy艂anie plik贸w',
            uploadExtra: 'przesy艂anie danych formularza'
        },
        dropZoneTitle: 'Przeci膮gnij i upu艣膰 pliki tutaj &hellip;',
        dropZoneClickTitle: '<br>(lub kliknij tutaj i wybierz {files} z komputera)',
        fileActionSettings: {
            removeTitle: 'Usu艅 plik',
            uploadTitle: 'Przesy艂anie pliku',
            uploadRetryTitle: 'Pon贸w',
            downloadTitle: 'Pobierz plik',
            zoomTitle: 'Poka偶 szczeg贸艂y',
            dragTitle: 'Przenies / Ponownie zaaran偶uj',
            indicatorNewTitle: 'Jeszcze nie przes艂any',
            indicatorSuccessTitle: 'Dodane',
            indicatorErrorTitle: 'B艂膮d',
            indicatorPausedTitle: 'Przesy艂anie zatrzymane',
            indicatorLoadingTitle: 'Przesy艂anie &hellip;'
        },
        previewZoomButtonTitles: {
            prev: 'Poka偶 poprzedni plik',
            next: 'Poka偶 nast臋pny plik',
            toggleheader: 'W艂膮cz / wy艂膮cz nag艂贸wek',
            fullscreen: 'W艂膮cz / wy艂膮cz pe艂ny ekran',
            borderless: 'W艂膮cz / wy艂膮cz tryb bez ramek',
            close: 'Zamknij szczeg贸艂owy widok'
        }
    };
})(window.jQuery);
