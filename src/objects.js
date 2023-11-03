import { generateRandomString } from "./id-generator"

export class Node {
    constructor(name) {
        this.name = name;
        this.className = name;
        this.id = generateRandomString(12);
        this.tag = 'div';
        this.parentid = '';
    };
};

export class DivNode extends Node {

};

export class TextNode extends Node {
    constructor(name) {
        super(name);
        this.tag = 'p';
    }
    setText(text) {
        this.text = text;
    };
    setHeading(heading) {
        this.tag = heading;
    };
};

export class LinkNode extends TextNode {
    constructor(name) {
        super(name);
        this.tag = 'a';
    };
    setUrl(url) {
        this.url = url;
    };
};

export class ListNode extends Node {
    constructor(name) {
        super(name);
        this.tag = 'li';
    };
};

export class OrderedListNode extends Node {
    constructor(name) {
        super(name);
        this.tag = 'ol';
    };
};

export class UnorderedListNode extends Node {
    constructor(name) {
        super(name);
        this.tag = 'ul';
    };
};

export class ButtonNode extends TextNode {
    constructor(name) {
        super(name);
        this.tag = 'button';
    };
};

export class ImageNode extends Node {
    constructor(name) {
        super(name);
        this.tag = 'img';
        this.src = '#'
    };
};




