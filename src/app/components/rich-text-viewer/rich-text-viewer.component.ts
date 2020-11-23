import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-rich-text-viewer',
    templateUrl: './rich-text-viewer.component.html',
    styleUrls: ['./rich-text-viewer.component.scss']
})
export class RichTextViewerComponent implements OnInit {

    validHTML = '';
    htmlRegex = /<(br|basefont|hr|input|source|frame|param|area|meta|!--|col|link|option|base|img|wbr|!DOCTYPE).*?>|<(a|abbr|acronym|address|applet|article|aside|audio|b|bdi|bdo|big|blockquote|body|button|canvas|caption|center|cite|code|colgroup|command|datalist|dd|del|details|dfn|dialog|dir|div|dl|dt|em|embed|fieldset|figcaption|figure|font|footer|form|frameset|head|header|hgroup|h1|h2|h3|h4|h5|h6|html|i|iframe|ins|kbd|keygen|label|legend|li|map|mark|menu|meter|nav|noframes|noscript|object|ol|optgroup|output|p|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|small|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|track|tt|u|ul|var|video).*?<\/\2>/i;


    @Input() set htmlText(value: string) {
        const html = this.parseNonEmptyHTML(value);
        const isValidHTML = this.htmlRegex.test(html);

        this.validHTML = isValidHTML ? html : '';
    }

    constructor() {
    }

    ngOnInit(): void {
    }

    private parseNonEmptyHTML(html = ''): string {
        const htmlTags: RegExp = /<[^]*?>/g;
        const hasContent = html.replace(htmlTags, '').trim().length > 0;

        return hasContent ? html : '';
    }
}
