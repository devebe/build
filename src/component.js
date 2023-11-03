class Component {
    constructor(obj) {
        this.name = obj.name;
        this.className = obj.className;
        this.id = obj.id;
        this.tag = obj.tag;
        this.parentid = obj.parentid;
        this.text = obj.text;
        this.url = obj.url
        this.node;
    };

    createTag() {
        this.node = document.createElement(this.tag);
        this.node.id = this.id;
    };

    setParent() {
        return this.parent = document.getElementById(this.parentid);
    };

    setClass() {
        return this.node.classList.add(this.className);
    };

    setUrl() {
        return this.node.setAttribute('href', this.url);
    }

    setTextContent() {
        return this.node.textContent = this.text
    }

    appendNode() {
        return this.parent.appendChild(this.node);
    }

    build() {
        this.createTag();
        this.setParent();
        if (this.className) {this.setClass()};
        if (this.text) {this.setTextContent()};
        if (this.url) {this.setUrl()};
        this.appendNode();
    };
};

function buildUpComponent(obj) {
    let component = new Component(obj);
    component.build();
};

export function render(array) {
    array.forEach((element) => {
        if (element.id) {
            buildUpComponent(element);
            return;
        }
        if (!element.id) {
            element.forEach((item) => {
                buildUpComponent(item);
            });
        }
        else {
            console.log(['weird', element]);
        }; 
    });
};