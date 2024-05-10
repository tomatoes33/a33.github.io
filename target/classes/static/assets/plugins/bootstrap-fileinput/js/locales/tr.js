/*!
 * FileInput Turkish Translations
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

    $.fn.fileinputLocales['tr'] = {
        fileSingle: 'dosya',
        filePlural: 'dosyalar',
        browseLabel: 'G枚zat &hellip;',
        removeLabel: 'Sil',
        removeTitle: 'Se莽ilen dosyalar谋 sil',
        cancelLabel: '陌ptal',
        cancelTitle: 'Devam eden y眉klemeyi iptal et',
        pauseLabel: 'Durdur',
        pauseTitle: 'Devam eden y眉klemeyi durdur',
        uploadLabel: 'Y眉kle',
        uploadTitle: 'Se莽ilen dosyalar谋 y眉kle',
        msgNo: 'Hay谋r',
        msgNoFilesSelected: 'Dosya se莽ilmedi',
        msgPaused: 'Durduruldu',
        msgCancelled: '陌ptal edildi',
        msgPlaceholder: 'Se莽ilen {files} ...',
        msgZoomModalHeading: 'Detayl谋 脰nizleme',
        msgFileRequired: 'Y眉klemek i莽in bir dosya se莽melisiniz.',
        msgSizeTooSmall: '"{name}"(<b>{size} KB</b>) dosyas谋 莽ok k眉莽眉k  ve <b>{minSize} KB</b> boyutundan b眉y眉k olmal谋d谋r.',
        msgSizeTooLarge: '"{name}" dosyas谋n谋n boyutu (<b>{size} KB</b>) izin verilen azami dosya boyutu olan <b>{maxSize} KB</b>\'tan b眉y眉k.',
        msgFilesTooLess: 'Y眉klemek i莽in en az <b>{n}</b> {files} dosya se莽melisiniz.',
        msgFilesTooMany: 'Y眉klemek i莽in se莽ti臒iniz dosya say谋s谋 <b>({n})</b> azami limitin <b>({m})</b> alt谋nda olmal谋d谋r.',
        msgTotalFilesTooMany: 'En fazla <b>{m}</b> adet dosya y眉kleyebilirsiniz (<b>{n}</b> adet tespit edildi).',
        msgFileNotFound: '"{name}" dosyas谋 bulunamad谋!',
        msgFileSecured: 'G眉venlik k谋s谋tlamalar谋 "{name}" dosyas谋n谋n okunmas谋n谋 engelliyor.',
        msgFileNotReadable: '"{name}" dosyas谋 okunabilir de臒il.',
        msgFilePreviewAborted: '"{name}" dosyas谋 i莽in 枚nizleme iptal edildi.',
        msgFilePreviewError: '"{name}" dosyas谋 okunurken bir hata olu艧tu.',
        msgInvalidFileName: '"{name}" dosya ad谋nda ge莽ersiz veya desteklenmeyen karakterler var.',
        msgInvalidFileType: '"{name}" dosyas谋n谋n t眉r眉 ge莽erli de臒il. Yaln谋zca "{types}" t眉r眉nde dosyalara izin veriliyor.',
        msgInvalidFileExtension: '"{name}" dosyas谋n谋n uzant谋s谋 ge莽ersiz. Yaln谋zca "{extensions}" uzant谋l谋 dosyalara izin veriliyor.',
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
        msgUploadAborted: 'Dosya y眉kleme iptal edildi',
        msgUploadThreshold: '陌艧lem yap谋l谋yor &hellip;',
        msgUploadBegin: 'Ba艧l谋yor &hellip;',
        msgUploadEnd: 'Ba艧ar谋l谋',
        msgUploadResume: 'Y眉klemeye devam ediliyor &hellip;',
        msgUploadEmpty: 'Y眉klemek i莽in ge莽erli veri mevcut de臒il.',
        msgUploadError: 'Y眉kleme Hatas谋',
        msgDeleteError: 'Silme Hatas谋',
        msgProgressError: 'Hata',
        msgValidationError: 'Do臒rulama Hatas谋',
        msgLoading: 'Dosya y眉kleniyor {index} / {files} &hellip;',
        msgProgress: 'Dosya y眉kleniyor {index} / {files} - {name} - %{percent} tamamland谋.',
        msgSelected: '{n} {files} se莽ildi',
        msgFoldersNotAllowed: 'Yaln谋zca dosyalar谋 s眉r眉kleyip b谋rakabilirsiniz! {n} dizin(ler) g枚z ard谋 edildi.',
        msgImageWidthSmall: '"{name}" adl谋 g枚r眉nt眉 dosyas谋n谋n geni艧li臒i en az {size} piksel olmal谋d谋r.',
        msgImageHeightSmall: '"{name}" adl谋 g枚r眉nt眉 dosyas谋n谋n y眉ksekli臒i en az {size} piksel olmal谋d谋r.',
        msgImageWidthLarge: '"{name}" adl谋 g枚r眉nt眉 dosyas谋n谋n geni艧li臒i {size} pikseli ge莽emez.',
        msgImageHeightLarge: '"{name}" adl谋 g枚r眉nt眉 dosyas谋n谋n y眉ksekli臒i {size} pikseli ge莽emez.',
        msgImageResizeError: 'G枚r眉nt眉 boyutlar谋n谋 yeniden boyutland谋ramad谋.',
        msgImageResizeException: 'G枚r眉nt眉 boyutland谋rma s谋ras谋nda hata.<pre>{errors}</pre>',
        msgAjaxError: '{operation} i艧lemi ile ilgili bir 艧eyler ters gitti. L眉tfen daha sonra tekrar deneyiniz!',
        msgAjaxProgressError: '{operation} i艧lemi ba艧ar谋s谋z oldu.',
        msgDuplicateFile: 'Ayn谋 "{size} KB" boyutundaki "{name}" dosyas谋 daha 枚nce se莽ilmi艧. Yinelenen se莽im atlan谋yor.',
        msgResumableUploadRetriesExceeded: '<b>{max}</b> deneme sonras谋nda <b>{file}</b> dosyas谋n谋n y眉kleme i艧lemi iptal edildi! Hata Detaylar谋: <pre>{error}</pre>',
        msgPendingTime: '{time} kald谋',
        msgCalculatingTime: 'kalan s眉re hesaplan谋yor',
        ajaxOperations: {
            deleteThumb: 'dosya silme',
            uploadThumb: 'dosya y眉kleme',
            uploadBatch: 'toplu dosya y眉kleme',
            uploadExtra: 'form verisi y眉kleme'
        },
        dropZoneTitle: 'Dosyalar谋 buraya s眉r眉kleyip b谋rak谋n',
        dropZoneClickTitle: '<br>(ya da {files} se莽mek i莽in t谋klay谋n谋z)',
        fileActionSettings: {
            removeTitle: 'Dosyay谋 kald谋r',
            uploadTitle: 'Dosyay谋 y眉kle',
            uploadRetryTitle: 'Tekrar dene',
            zoomTitle: 'Ayr谋nt谋lar谋 g枚r眉nt眉le',
            dragTitle: 'Ta艧谋 / Yeniden d眉zenle',
            indicatorNewTitle: 'Hen眉z y眉klenmedi',
            indicatorSuccessTitle: 'Y眉klendi',
            indicatorErrorTitle: 'Y眉kleme Hatas谋',
            indicatorPausedTitle: 'Upload Paused',
            indicatorLoadingTitle: 'Y眉kleniyor &hellip;'
        },
        previewZoomButtonTitles: {
            prev: '脰nceki dosyay谋 g枚ster',
            next: 'Sonraki dosyay谋 g枚ster',
            toggleheader: '脺st bilgi ge莽i艧',
            fullscreen: 'Tam ekran ge莽i艧',
            borderless: '脟er莽evesiz moda ge莽i艧',
            close: 'Detayl谋 枚nizlemeyi kapat'
        }
    };
})(window.jQuery);
