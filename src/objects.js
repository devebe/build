import { generateRandomString } from "./id-generator"

export class Node {
    constructor(name) {
        this.name = name;
        this.className = name;
        this.tag = 'div';
        this.id = this.tag + '-' + this.name;
        this.parentid = '';
    };
};

export class DivNode extends Node {

};

export class TextNode extends Node {
    constructor(name) {
        super(name);
        this.tag = 'p';
        this.id = this.tag + '-' + this.name;
    }
    setText(text) {
        this.text = text;
    };
    setHeading(heading) {
        this.tag = heading;
        this.id = this.tag + '-' + this.name;
    };
};

export class LinkNode extends TextNode {
    constructor(name) {
        super(name);
        this.tag = 'a';
        this.id = this.tag + '-' + this.name;
    };
    setUrl(url) {
        this.url = url;
    };
};

export class ListNode extends Node {
    constructor(name) {
        super(name);
        this.tag = 'li';
        this.id = this.tag + '-' + this.name;
    };
};

export class OrderedListNode extends Node {
    constructor(name) {
        super(name);
        this.tag = 'ol';
        this.id = this.tag + '-' + this.name;
    };
};

export class UnorderedListNode extends Node {
    constructor(name) {
        super(name);
        this.tag = 'ul';
        this.id = this.tag + '-' + this.name;
    };
};

export class ButtonNode extends TextNode {
    constructor(name) {
        super(name);
        this.tag = 'button';
        this.id = this.tag + '-' + this.name;
    };
};

export class ImageNode extends Node {
    constructor(name) {
        super(name);
        this.tag = 'img';
        this.id = this.tag + '-' + this.name;
        this.src = '#'
    };
};




