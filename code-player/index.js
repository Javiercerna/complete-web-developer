$(function() {
    $('.container').on('DOMSubtreeModified', '#html_editor', function() {
        $('#code_output').html($(this).text());

        $('#css_editor').trigger('DOMSubtreeModified');
        $('#javascript_editor').trigger('DOMSubtreeModified');
    });

    $('.container').on('DOMSubtreeModified', '#css_editor', function() {
        let new_style = parseStylesFromString($(this).text())
        for (let selector in new_style) {
            $('#code_output').children(selector).attr('style', new_style[selector]);
        }
    });

    $('.container').on('DOMSubtreeModified', '#javascript_editor', function() {
        try {
            eval($(this).text());
        } catch { }
    });

    $('header').on('click', 'span', function() {
        let tab_name = $(this).text().toLowerCase();

        if (tab_name === 'output') {
            return;
        }

        let editor_div = '#' + tab_name + '_editor';
        $(editor_div).toggle();
        $('.' + tab_name).toggleClass('tab-hidden');
        $(editor_div).toggleClass('editor-hidden');
    });
});

function parseStylesFromString(css_string) {
    const pattern = /{(.*?)}/;
    let splitted_styles = css_string.split(pattern);
    
    let styles = {};
    for (let ind=0; ind < splitted_styles.length - 1; ind += 2) {
        styles[splitted_styles[ind].trim()] = splitted_styles[ind+1].trim();
    }

    return styles;
}