/*!
 * FileInput French Translations
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

    $.fn.fileinputLocales['fr'] = {
        fileSingle: 'fichier',
        filePlural: 'fichiers',
        browseLabel: 'Parcourir &hellip;',
        removeLabel: 'Retirer',
        removeTitle: 'Retirer les fichiers s茅lectionn茅s',
        cancelLabel: 'Annuler',
        cancelTitle: 'Annuler le transfert en cours',
        pauseLabel: 'Suspendre',
        pauseTitle: 'Suspendre le transfert en cours',
        uploadLabel: 'Transf茅rer',
        uploadTitle: 'Transf茅rer les fichiers s茅lectionn茅s',
        msgNo: 'Non',
        msgNoFilesSelected: 'Aucun fichier s茅lectionn茅',
        msgPaused: 'Suspendu',
        msgCancelled: 'Annul茅',
        msgPlaceholder: 'S茅lectionner le(s) {files} ...',
        msgZoomModalHeading: 'Aper莽u d茅taill茅',
        msgFileRequired: 'Vous devez s茅lectionner un fichier 脿 envoyer.',
        msgSizeTooSmall: 'Le fichier "{name}" (<b>{size} KB</b>) est inf茅rieur 脿 la taille minimale de <b>{minSize} KB</b>.',
        msgSizeTooLarge: 'Le fichier "{name}" (<b>{size} Ko</b>) d茅passe la taille maximale autoris茅e qui est de <b>{maxSize} Ko</b>.',
        msgFilesTooLess: 'Vous devez s茅lectionner au moins <b>{n}</b> {files} 脿 transmettre.',
        msgFilesTooMany: 'Le nombre de fichiers s茅lectionn茅s <b>({n})</b> d茅passe la quantit茅 maximale autoris茅e qui est de <b>{m}</b>.',
        msgTotalFilesTooMany: 'Il n\'est pas permis d\'envoyer plus de <b>{m}</b> fichiers (actuellement <b>{n}</b> fichiers).',
        msgFileNotFound: 'Le fichier "{name}" est introuvable !',
        msgFileSecured: "Des restrictions de s茅curit茅 vous emp锚chent d'acc茅der au fichier \"{name}\".",
        msgFileNotReadable: 'Le fichier "{name}" est illisible.',
        msgFilePreviewAborted: 'Pr茅visualisation du fichier "{name}" annul茅e.',
        msgFilePreviewError: 'Une erreur est survenue lors de la lecture du fichier "{name}".',
        msgInvalidFileName: 'Caract猫res invalides ou non support茅s dans le nom de fichier "{name}".',
        msgInvalidFileType: 'Type de document invalide pour "{name}". Seulement les documents de type "{types}" sont autoris茅s.',
        msgInvalidFileExtension: 'Extension invalide pour le fichier "{name}". Seules les extensions "{extensions}" sont autoris茅es.',
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
        msgUploadAborted: 'Le transfert du fichier a 茅t茅 interrompu',
        msgUploadThreshold: 'En cours &hellip;',
        msgUploadBegin: 'Initialisation &hellip;',
        msgUploadEnd: 'Termin茅',
        msgUploadResume: 'Reprise du transfert &hellip;',
        msgUploadEmpty: 'Aucune donn茅e valide n\'est disponible pour l\'envoi.',
        msgUploadError: 'Erreur lors du transfert',
        msgDeleteError: 'Erreur de suppression',
        msgProgressError: 'Erreur',
        msgValidationError: 'Erreur de validation',
        msgLoading: 'Transmission du fichier {index} sur {files} &hellip;',
        msgProgress: 'Transmission du fichier {index} sur {files} - {name} - {percent}%.',
        msgSelected: '{n} {files} s茅lectionn茅(s)',
        msgFoldersNotAllowed: 'Glissez et d茅posez uniquement des fichiers ! {n} r茅pertoire(s) exclu(s).',
        msgImageWidthSmall: 'La largeur de l\'image "{name}" doit 锚tre d\'au moins {size} px.',
        msgImageHeightSmall: 'La hauteur de l\'image "{name}" doit 锚tre d\'au moins {size} px.',
        msgImageWidthLarge: 'La largeur de l\'image "{name}" ne peut pas d茅passer {size} px.',
        msgImageHeightLarge: 'La hauteur de l\'image "{name}" ne peut pas d茅passer {size} px.',
        msgImageResizeError: "Impossible d'obtenir les dimensions de l'image 脿 redimensionner.",
        msgImageResizeException: "Erreur lors du redimensionnement de l'image.<pre>{errors}</pre>",
        msgAjaxError: "Une erreur s'est produite pendant l'op茅ration de {operation}. Veuillez r茅essayer plus tard.",
        msgAjaxProgressError: 'L\'op茅ration "{operation}" a 茅chou茅e',
        msgDuplicateFile: 'Le fichier "{name}" de taille "{size} KB" 脿 d茅j脿 茅t茅 envoy茅. Les doublons sont ignor茅s.',
        msgResumableUploadRetriesExceeded: 'Le transfert a 茅t茅 annul茅 apr猫s <b>{max}</b> essais pour le fichier <b>{file}</b>! Details de l\'erreur: <pre>{error}</pre>',
        msgPendingTime: '{time} restant',
        msgCalculatingTime: 'calcul du temps restant',
        ajaxOperations: {
            deleteThumb: 'suppression du fichier',
            uploadThumb: 'transfert du fichier',
            uploadBatch: 'transfert des fichiers',
            uploadExtra: 'soumission des donn茅es du formulaire'
        },
        dropZoneTitle: 'Glissez et d茅posez les fichiers ici &hellip;',
        dropZoneClickTitle: '<br>(ou cliquez pour s茅lectionner manuellement)',
        fileActionSettings: {
            removeTitle: 'Supprimer le fichier',
            uploadTitle: 'Transf茅rer le fichier',
            uploadRetryTitle: 'Relancer le transfert',
            downloadTitle: 'T茅l茅charger',
            zoomTitle: 'Voir les d茅tails',
            dragTitle: 'D茅placer / R茅arranger',
            indicatorNewTitle: 'Pas encore transf茅r茅',
            indicatorSuccessTitle: 'Post茅',
            indicatorErrorTitle: 'Ajouter erreur',
            indicatorPausedTitle: 'Transfert suspendu',
            indicatorLoadingTitle: 'En cours &hellip;'
        },
        previewZoomButtonTitles: {
            prev: 'Voir le fichier pr茅c茅dent',
            next: 'Voir le fichier suivant',
            toggleheader: 'Masquer le titre',
            fullscreen: 'Mode plein 茅cran',
            borderless: 'Mode cin茅ma',
            close: "Fermer l'aper莽u"
        }
    };
})(window.jQuery);
