/*!
 * FileInput German Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 */
(function ($) {
    "use strict";

    $.fn.fileinputLocales['de'] = {
        fileSingle: 'Datei',
        filePlural: 'Dateien',
        browseLabel: 'Ausw盲hlen &hellip;',
        removeLabel: 'L枚schen',
        removeTitle: 'Ausgew盲hlte l枚schen',
        cancelLabel: 'Abbrechen',
        cancelTitle: 'Hochladen abbrechen',
        pauseLabel: 'Pause',
        pauseTitle: 'Pause ongoing upload',
        uploadLabel: 'Hochladen',
        uploadTitle: 'Hochladen der ausgew盲hlten Dateien',
        msgNo: 'Keine',
        msgNoFilesSelected: 'Keine Dateien ausgew盲hlt',
        msgPaused: 'Paused',
        msgCancelled: 'Abgebrochen',
        msgPlaceholder: '{files} ausw盲hlen ...',
        msgZoomModalHeading: 'ausf眉hrliche Vorschau',
        msgFileRequired: 'Sie m眉ssen eine Datei zum Hochladen ausw盲hlen.',
        msgSizeTooSmall: 'Datei "{name}" (<b>{size} KB</b>) unterschreitet mindestens notwendige Upload-Gr枚脽e von <b>{minSize} KB</b>.',
        msgSizeTooLarge: 'Datei "{name}" (<b>{size} KB</b>) 眉berschreitet maximal zul盲ssige Upload-Gr枚脽e von <b>{maxSize} KB</b>.',
        msgFilesTooLess: 'Sie m眉ssen mindestens <b>{n}</b> {files} zum Hochladen ausw盲hlen.',
        msgFilesTooMany: 'Anzahl der zum Hochladen ausgew盲hlten Dateien <b>({n})</b>, 眉berschreitet maximal zul盲ssige Grenze von <b>{m}</b> St眉ck.',
        msgTotalFilesTooMany: 'You can upload a maximum of <b>{m}</b> files (<b>{n}</b> files detected).',
        msgFileNotFound: 'Datei "{name}" wurde nicht gefunden!',
        msgFileSecured: 'Sicherheitseinstellungen verhindern das Lesen der Datei "{name}".',
        msgFileNotReadable: 'Die Datei "{name}" ist nicht lesbar.',
        msgFilePreviewAborted: 'Dateivorschau abgebrochen f眉r "{name}".',
        msgFilePreviewError: 'Beim Lesen der Datei "{name}" ein Fehler aufgetreten.',
        msgInvalidFileName: 'Ung眉ltige oder nicht unterst眉tzte Zeichen im Dateinamen "{name}".',
        msgInvalidFileType: 'Ung眉ltiger Typ f眉r Datei "{name}". Nur Dateien der Typen "{types}" werden unterst眉tzt.',
        msgInvalidFileExtension: 'Ung眉ltige Erweiterung f眉r Datei "{name}". Nur Dateien mit der Endung "{extensions}" werden unterst眉tzt.',
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
        msgUploadAborted: 'Der Datei-Upload wurde abgebrochen',
        msgUploadThreshold: 'Wird bearbeitet &hellip;',
        msgUploadBegin: 'Wird initialisiert &hellip;',
        msgUploadEnd: 'Erledigt',
        msgUploadResume: 'Resuming upload &hellip;',
        msgUploadEmpty: 'Keine g眉ltigen Daten zum Hochladen verf眉gbar.',
        msgUploadError: 'Upload Error',
        msgDeleteError: 'Delete Error',
        msgProgressError: 'Fehler',
        msgValidationError: 'Validierungsfehler',
        msgLoading: 'Lade Datei {index} von {files} hoch &hellip;',
        msgProgress: 'Datei {index} von {files} - {name} - zu {percent}% fertiggestellt.',
        msgSelected: '{n} {files} ausgew盲hlt',
        msgFoldersNotAllowed: 'Drag & Drop funktioniert nur bei Dateien! {n} Ordner 眉bersprungen.',
        msgImageWidthSmall: 'Breite der Bilddatei "{name}" muss mindestens {size} px betragen.',
        msgImageHeightSmall: 'H枚he der Bilddatei "{name}" muss mindestens {size} px betragen.',
        msgImageWidthLarge: 'Breite der Bilddatei "{name}" nicht 眉berschreiten {size} px.',
        msgImageHeightLarge: 'H枚he der Bilddatei "{name}" nicht 眉berschreiten {size} px.',
        msgImageResizeError: 'Konnte nicht die Bildabmessungen zu 盲ndern.',
        msgImageResizeException: 'Fehler beim 脛ndern der Gr枚脽e des Bildes.<pre>{errors}</pre>',
        msgAjaxError: 'Bei der Aktion {operation} ist ein Fehler aufgetreten. Bitte versuche es sp盲ter noch einmal!',
        msgAjaxProgressError: '{operation} fehlgeschlagen',
        msgDuplicateFile: 'File "{name}" of same size "{size} KB" has already been selected earlier. Skipping duplicate selection.',
        msgResumableUploadRetriesExceeded: 'Upload aborted beyond <b>{max}</b> retries for file <b>{file}</b>! Error Details: <pre>{error}</pre>',
        msgPendingTime: '{time} remaining',
        msgCalculatingTime: 'calculating time remaining',
        ajaxOperations: {
            deleteThumb: 'Datei l枚schen',
            uploadThumb: 'Datei hochladen',
            uploadBatch: 'Batch-Datei-Upload',
            uploadExtra: 'Formular-Datei-Upload'
        },
        dropZoneTitle: 'Dateien hierher ziehen &hellip;',
        dropZoneClickTitle: '<br>(oder klicken um {files} auszuw盲hlen)',
        fileActionSettings: {
            removeTitle: 'Datei entfernen',
            uploadTitle: 'Datei hochladen',
            uploadRetryTitle: 'Upload erneut versuchen',
            downloadTitle: 'Datei herunterladen',
            zoomTitle: 'Details anzeigen',
            dragTitle: 'Verschieben / Neuordnen',
            indicatorNewTitle: 'Noch nicht hochgeladen',
            indicatorSuccessTitle: 'Hochgeladen',
            indicatorErrorTitle: 'Upload Fehler',
            indicatorPausedTitle: 'Upload Paused',
            indicatorLoadingTitle: 'Hochladen &hellip;'
        },
        previewZoomButtonTitles: {
            prev: 'Vorherige Datei anzeigen',
            next: 'N盲chste Datei anzeigen',
            toggleheader: 'Header umschalten',
            fullscreen: 'Vollbildmodus umschalten',
            borderless: 'Randlosen Modus umschalten',
            close: 'Detailansicht schlie脽en'
        }
    };
})(window.jQuery);
