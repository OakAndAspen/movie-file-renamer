$(() => {
    let clipboard = new ClipboardJS('.btn');

    // Lorsqu'un champ est modifié, on crée le nom de fichier
    $("input, select").change(function () {

        let movieName = $("#txtFilm").val();
        let year = $("#txtAnnee").val();
        let quality = $("#sltQualite").val();
        let languages = '';

        $(".cbxLangue:checked").each(function () {
            languages += "-" + $(this).val();
        });

        let fileName = normalize(movieName) + "-" + normalize(year) + "-" + quality + languages;
        $("#txtFileName").text(fileName);
        $(".btn").attr('data-clipboard-text', fileName);

    });

    // Lorsqu'on clique sur le bouton
    $(".btn").click(function () {
        $("input[type=text]").val("");
        $("input[type=checkbox]").prop("checked", false);
        $("#txtFileName").text("");
    });

    // Normalise une chaîne de caractères
    function normalize(input) {
        let s = input;

        // Caractères à remplacer par des _
        s = s.replace(/ /g, '_');

        // Caractères à supprimer
        s = s.replace(/'/g, '');
        s = s.replace(/!/g, '');
        s = s.replace(/:/g, '');
        s = s.replace(/,/g, '');
        s = s.replace(/"/g, '');
        s = s.replace(/]/g, '');
        s = s.replace(/}/g, '');
        s = s.replace(/-/g, '');
        s = s.replace(/%/g, '');
        s = s.replace(/&/g, '');
        s = s.replace(/=/g, '');
        s = s.replace(/\?/g, '');
        s = s.replace(/\(/g, '');
        s = s.replace(/\)/g, '');
        s = s.replace(/\./g, '');
        s = s.replace(/\[/g, '');
        s = s.replace(/\{/g, '');
        s = s.replace(/\+/g, '');
        s = s.replace(/\*/g, '');
        s = s.replace(/\//g, '');
        s = s.replace(/\\/g, '');

        s = s.replace(/____/g, '_');
        s = s.replace(/___/g, '_');
        s = s.replace(/__/g, '_');

        // Lettres spéciales
        s = s.replace(/ä/g, 'a');
        s = s.replace(/à/g, 'a');
        s = s.replace(/â/g, 'a');
        s = s.replace(/å/g, 'a');

        s = s.replace(/Ä/g, 'A');
        s = s.replace(/À/g, 'A');
        s = s.replace(/Â/g, 'A');
        s = s.replace(/Å/g, 'A');

        s = s.replace(/é/g, 'e');
        s = s.replace(/è/g, 'e');
        s = s.replace(/ë/g, 'e');
        s = s.replace(/ê/g, 'e');

        s = s.replace(/É/g, 'E');
        s = s.replace(/È/g, 'E');
        s = s.replace(/Ë/g, 'E');
        s = s.replace(/Ê/g, 'E');

        s = s.replace(/î/g, 'i');
        s = s.replace(/ï/g, 'i');

        s = s.replace(/Î/g, 'I');
        s = s.replace(/Ï/g, 'I');

        s = s.replace(/ö/g, 'o');
        s = s.replace(/ô/g, 'o');
        s = s.replace(/ø/g, 'o');

        s = s.replace(/Ö/g, 'O');
        s = s.replace(/Ô/g, 'O');
        s = s.replace(/Ø/g, 'O');

        s = s.replace(/ù/g, 'u');
        s = s.replace(/û/g, 'u');
        s = s.replace(/ü/g, 'u');

        s = s.replace(/Ù/g, 'U');
        s = s.replace(/Û/g, 'U');
        s = s.replace(/Ü/g, 'U');

        s = s.replace(/æ/g, 'ae');
        s = s.replace(/Æ/g, 'AE');
        s = s.replace(/œ/g, 'oe');
        s = s.replace(/Œ/g, 'OE');
        s = s.replace(/ç/g, 'c');
        s = s.replace(/Ç/g, 'C');
        s = s.replace(/ÿ/g, 'y');
        s = s.replace(/Ÿ/g, 'y');

        // Mise en minuscules
        s = s.toLowerCase();

        return s;
    }
});
