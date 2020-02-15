export class Article {
    votes: number;
    title: string;
    link: string;

    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 10;
    }

    voteUp() {
        this.votes++;
    }
    voteDown() {
        this.votes--;
    }

    domain(): string {
        try {
            // e.g. http://foo.com/path/to/bar
            const link: string = this.link.split('//')[1];
            // e.g. foo.com/path/to/bar
            return link.split('/')[0];
        } catch (err) {
            return null;
        }
    }

}
