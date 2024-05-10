/*!
 * FileInput Brazillian Portuguese Translations
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

    $.fn.fileinputLocales['pt-BR'] = {
        fileSingle: 'arquivo',
        filePlural: 'arquivos',
        browseLabel: 'Procurar &hellip;',
        removeLabel: 'Remover',
        removeTitle: 'Remover arquivos selecionados',
        cancelLabel: 'Cancelar',
        cancelTitle: 'Interromper envio em andamento',
        pauseLabel: 'Pausa',
        pauseTitle: 'Pausa do envio',
        uploadLabel: 'Enviar',
        uploadTitle: 'Enviar arquivos selecionados',
        msgNo: 'N茫o',
        msgNoFilesSelected: 'Nenhum arquivo selecionado',
        msgPaused: 'Pausado',
        msgCancelled: 'Cancelado',
        msgPlaceholder: 'Selecionar {files} ...',
        msgZoomModalHeading: 'Pr茅-visualiza莽茫o detalhada',
        msgFileRequired: 'Voc锚 deve selecionar um arquivo para enviar.',
        msgSizeTooSmall: 'O arquivo "{name}" (<b>{size} KB</b>) 茅 muito pequeno e deve ser maior que <b>{minSize} KB</b>.',
        msgSizeTooLarge: 'O arquivo "{name}" (<b>{size} KB</b>) excede o tamanho m谩ximo permitido de <b>{maxSize} KB</b>.',
        msgFilesTooLess: 'Voc锚 deve selecionar pelo menos <b>{n}</b> {files} para enviar.',
        msgFilesTooMany: 'O n煤mero de arquivos selecionados para o envio <b>({n})</b> excede o limite m谩ximo permitido de <b>{m}</b>.',
        msgTotalFilesTooMany: 'Pode enviar no m谩ximo <b>{m}</b> arquivos (<b>{n}</b> arquivos detetados).',
        msgFileNotFound: 'O arquivo "{name}" n茫o foi encontrado!',
        msgFileSecured: 'Restri莽玫es de seguran莽a impedem a leitura do arquivo "{name}".',
        msgFileNotReadable: 'O arquivo "{name}" n茫o pode ser lido.',
        msgFilePreviewAborted: 'A pr茅-visualiza莽茫o do arquivo "{name}" foi interrompida.',
        msgFilePreviewError: 'Ocorreu um erro ao ler o arquivo "{name}".',
        msgInvalidFileName: 'Caracteres inv谩lidos ou n茫o suportados no arquivo "{name}".',
        msgInvalidFileType: 'Tipo inv谩lido para o arquivo "{name}". Apenas arquivos "{types}" s茫o permitidos.',
        msgInvalidFileExtension: 'Extens茫o inv谩lida para o arquivo "{name}". Apenas arquivos "{extensions}" s茫o permitidos.',
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
        msgUploadAborted: 'O envio do arquivo foi abortado',
        msgUploadThreshold: 'Processando &hellip;',
        msgUploadBegin: 'Inicializando &hellip;',
        msgUploadEnd: 'Conclu铆do',
        msgUploadResume: 'Retomando envio &hellip;',
        msgUploadEmpty: 'Nenhuma informa莽茫o v谩lida para upload.',
        msgUploadError: 'Erro de Envio',
        msgDeleteError: 'Erro ao Deletar',
        msgProgressError: 'Erro de Envio',
        msgValidationError: 'Erro de valida莽茫o',
        msgLoading: 'Enviando arquivo {index} de {files} &hellip;',
        msgProgress: 'Enviando arquivo {index} de {files} - {name} - {percent}% completo.',
        msgSelected: '{n} {files} selecionado(s)',
        msgFoldersNotAllowed: 'Arraste e solte apenas arquivos! {n} pasta(s) ignoradas.',
        msgImageWidthSmall: 'Largura do arquivo de imagem "{name}" deve ser pelo menos {size} px.',
        msgImageHeightSmall: 'Altura do arquivo de imagem "{name}" deve ser pelo menos {size} px.',
        msgImageWidthLarge: 'Largura do arquivo de imagem "{name}" n茫o pode exceder {size} px.',
        msgImageHeightLarge: 'Altura do arquivo de imagem "{name}" n茫o pode exceder {size} px.',
        msgImageResizeError: 'N茫o foi poss铆vel obter as dimens玫es da imagem para redimensionar.',
        msgImageResizeException: 'Erro ao redimensionar a imagem.<pre>{errors}</pre>',
        msgAjaxError: 'Algo deu errado com a opera莽茫o {operation}. Por favor tente novamente mais tarde!',
        msgAjaxProgressError: '{operation} falhou',
        msgDuplicateFile: 'O arquivo "{name}" do mesmo tamanho "{size} KB" j谩 foi selecionado. Ignorando a sele莽茫o duplicada.',
        msgResumableUploadRetriesExceeded: 'Envio abortado, excedido <b>{max}</b> tentativas para o arquivo <b>{file}</b>! Detalhes do erro: <pre>{error}</pre>',
        msgPendingTime: '{time} restante',
        msgCalculatingTime: 'calculando o tempo restante',
        ajaxOperations: {
            deleteThumb: 'Exclus茫o de arquivo',
            uploadThumb: 'Upload de arquivos',
            uploadBatch: 'Carregamento de arquivos em lote',
            uploadExtra: 'Carregamento de dados do formul谩rio'
        },
        dropZoneTitle: 'Arraste e solte os arquivos aqui &hellip;',
        dropZoneClickTitle: '<br>(ou clique para selecionar o(s) arquivo(s))',
        fileActionSettings: {
            removeTitle: 'Remover arquivo',
            uploadTitle: 'Enviar arquivo',
            uploadRetryTitle: 'Repetir envio',
            downloadTitle: 'Baixar arquivo',
            zoomTitle: 'Ver detalhes',
            dragTitle: 'Mover / Reordenar',
            indicatorNewTitle: 'Ainda n茫o enviado',
            indicatorSuccessTitle: 'Enviado',
            indicatorErrorTitle: 'Erro',
            indicatorPausedTitle: 'Envio pausado',
            indicatorLoadingTitle: 'Enviando &hellip;'
        },
        previewZoomButtonTitles: {
            prev: 'Visualizar arquivo anterior',
            next: 'Visualizar pr贸ximo arquivo',
            toggleheader: 'Mostrar cabe莽alho',
            fullscreen: 'Ativar tela cheia',
            borderless: 'Ativar modo sem borda',
            close: 'Fechar pr茅-visualiza莽茫o detalhada'
        }
    };
})(window.jQuery);
