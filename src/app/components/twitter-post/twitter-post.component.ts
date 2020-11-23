import {Component, Input, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'app-twitter-post',
    templateUrl: './twitter-post.component.html',
    styleUrls: ['./twitter-post.component.scss']
})
export class TwitterPostComponent implements OnInit {

    @Input() baseHref = '';
    @Input() hashTags = ['DylanIsrael', 'Javascript', 'Typescript', 'Angular', '100 Angular Challenge'];

    constructor(private titleService: Title) {
    }

    get twitterUrl(): string {
        const base = this.getBaseWithHashTagsAndRoute();
        const message = encodeURIComponent(`Check out ${this.titleService.getTitle()} and become a coding god!`);
        return `${base}${message}`;
    }

    ngOnInit(): void {
    }

    private getBaseWithHashTagsAndRoute(): any {
        const route = encodeURI(this.baseHref);
        const hashTags = this.hashTags.join(',');

        return `https://twitter.com/intent/tweet?hashtags=${encodeURIComponent(hashTags)}&related=pizzapokerguy&url=${route}`;
    }
}
