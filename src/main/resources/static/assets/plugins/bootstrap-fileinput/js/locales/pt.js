/*!
 * FileInput Portuguese Translations
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

    $.fn.fileinputLocales['pt'] = {
        fileSingle: 'ficheiro',
        filePlural: 'ficheiros',
        browseLabel: 'Procurar &hellip;',
        removeLabel: 'Remover',
        removeTitle: 'Remover ficheiros selecionados',
        cancelLabel: 'Cancelar',
        cancelTitle: 'Abortar envio',
        pauseLabel: 'Parar',
        pauseTitle: 'Parar envio em curso',
        uploadLabel: 'Enviar',
        uploadTitle: 'Enviar ficheiros selecionados',
        msgNo: 'N茫o',
        msgNoFilesSelected: 'Nenhum ficheiro selecionado',
        msgPaused: 'Parado',
        msgCancelled: 'Cancelado',
        msgPlaceholder: 'Selecionar {files} ...',
        msgZoomModalHeading: 'Pr茅-visualiza莽茫o detalhada',
        msgFileRequired: '脡 necess谩rio selecionar um ficheiro a enviar.',
        msgSizeTooSmall: 'Ficheiro "{name}" (<b>{size} KB</b>) 茅 demasiado pequeno, tem ser ser maior que <b>{minSize} KB</b>.',
        msgSizeTooLarge: 'Ficheiro "{name}" (<b>{size} KB</b>) excede o tamanho m谩ximo permido de <b>{maxSize} KB</b>.',
        msgFilesTooLess: 'Deve selecionar pelo menos <b>{n}</b> {files} para enviar.',
        msgFilesTooMany: 'N煤mero m谩ximo de ficheiros selecionados <b>({n})</b> excede o limite m谩ximo de <b>{m}</b>.',
        msgTotalFilesTooMany: 'Pode enviar no m谩ximo <b>{m}</b> ficheiros (<b>{n}</b> ficheiros detetados).',
        msgFileNotFound: 'Ficheiro "{name}" n茫o encontrado.',
        msgFileSecured: 'Restri莽玫es de seguran莽a impedem a leitura do ficheiro "{name}".',
        msgFileNotReadable: 'Ficheiro "{name}" n茫o pode ser lido.',
        msgFilePreviewAborted: 'Pr茅-visualiza莽茫o abortado para o ficheiro "{name}".',
        msgFilePreviewError: 'Ocorreu um erro ao ler o ficheiro "{name}".',
        msgInvalidFileName: 'Caracteres inv谩lidos ou n茫o suportados no nome de ficheiro "{name}".',
        msgInvalidFileType: 'Tipo inv谩lido para o ficheiro "{name}". Apenas ficheiros "{types}" s茫o suportados.',
        msgInvalidFileExtension: 'Extens茫o inv谩lida para o ficheiro "{name}". Apenas ficheiros "{extensions}" s茫o suportados.',
        msgFileTypes: {
            'image': 'imagem',
            'html': 'HTML',
            'text': 'texto',
            'video': 'v铆deo',
            'audio': 'audio',
            'flash': 'flash',
            'pdf': 'PDF',
            'object': 'objeto'
        },
        msgUploadAborted: 'O envio do ficheiro foi abortado',
        msgUploadThreshold: 'A processar &hellip;',
        msgUploadBegin: 'A inicializar &hellip;',
        msgUploadEnd: 'Conclu铆do',
        msgUploadResume: 'A retomar o envio &hellip;',
        msgUploadEmpty: 'N茫o existem dados v谩lidos dispon铆veis para o envio.',
        msgUploadError: 'Erro de Envio',
        msgDeleteError: 'Erro de Elimina莽茫o',
        msgProgressError: 'Erro',
        msgValidationError: 'Erro de Valida莽茫o',
        msgLoading: 'A enviar ficheiro {index} de {files} &hellip;',
        msgProgress: 'A enviar ficheiro {index} de {files} - {name} - {percent}% completo.',
        msgSelected: '{n} {files} selecionados',
        msgFoldersNotAllowed: 'Arrastar e largar ficheiros apenas. {n} pasta(s) ignoradas.',
        msgImageWidthSmall: 'Largura da imagem "{name}" deve ser pelo menos {size} px.',
        msgImageHeightSmall: 'Altura da imagem "{name}" deve ser pelo menos {size} px.',
        msgImageWidthLarge: 'Largura da imagem "{name}" n茫o pode exceder {size} px.',
        msgImageHeightLarge: 'Altura da imagem "{name}" n茫o pode exceder {size} px.',
        msgImageResizeError: 'N茫ofoi poss铆vel obter as dimens玫es da imagem para redimensionar.',
        msgImageResizeException: 'Erro ao redimensionar a imagem.<pre>{errors}</pre>',
        msgAjaxError: 'Ocorreu um erro durante a opera莽茫o {operation}. Por favor tente de novo mais tarde.',
        msgAjaxProgressError: '{operation} falhou',
        msgDuplicateFile: 'O ficheiro "{name}" com o mesmo tamanho "{size} KB" j谩 foi anteriormente selecionado. O ficheiro duplicado foi ignorado.',
        msgResumableUploadRetriesExceeded: 'O envio foi abortado ap贸s <b>{max}</b> tentativas para o ficheiro <b>{file}</b>. Detalhes do erro: <pre>{error}</pre>',
        msgPendingTime: '{time} restante',
        msgCalculatingTime: 'a calcular o tempo restante',
        ajaxOperations: {
            deleteThumb: 'eliminar ficheiro',
            uploadThumb: 'enviar ficheiro',
            uploadBatch: 'envio de ficheiros em lote',
            uploadExtra: 'envio de ficheiro em formul谩rio'
        },
        dropZoneTitle: 'Arrastar e largar ficheiros aqui &hellip;',
        dropZoneClickTitle: '<br>(ou clique para selecionar {files})',
        fileActionSettings: {
            removeTitle: 'Remover ficheiro',
            uploadTitle: 'Enviar ficheiro',
            uploadRetryTitle: 'Voltar a tentar o envio',
            downloadTitle: 'Transferir ficheiro',
            zoomTitle: 'Ver detalhes',
            dragTitle: 'Mover / Reorganizar',
            indicatorNewTitle: 'Ainda N茫o Enviado',
            indicatorSuccessTitle: 'Enviado',
            indicatorErrorTitle: 'Erro de Envio',
            indicatorPausedTitle: 'Envio Parado',
            indicatorLoadingTitle: 'A enviar &hellip;'
        },
        previewZoomButtonTitles: {
            prev: 'Ver ficheiro anterior',
            next: 'Ver pr贸ximo ficheiro',
            toggleheader: 'Mostrar/esconder cabe莽alho',
            fullscreen: 'Alternar entre ecr茫 completo',
            borderless: 'Alternar entre modo sem bordas',
            close: 'Fechar pr茅-visualiza莽茫o detalhada'
        }
    };
})(window.jQuery);
