// tslint:disable-next-line: class-name
export class alert {
    'status': boolean;
    'text': string;
    constructor() {
        this.status = false;
        this.text = '';
    }
    public setAlert(text) {
        this.status = true;
        this.text = text;
    }
    public close() {
        this.status = false;
    }
}
