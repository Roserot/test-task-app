import './ModalAlert.css';


export default class ModalAlert {
    type:string;
    message:string;
    modalAlert:any;
    dismissAfter:number;

    /**
     * @param {{type:string,message:string,dismissAfter?:number}} props
     * @return {ModalAlert}
     *
     * Types: primary, secondary, success, danger, warning, info, light, dark.
     */
    constructor(props) {
        const {type, message} = props;
        this.type = type;
        this.message = message;
        this.modalAlert = null;
        this.dismissAfter = props.dismissAfter || 3500;
    }

    show() {
        if(ModalAlert.checkIsExistence())
            return;

        // @ts-ignore
        document.querySelector('body').insertAdjacentHTML('afterbegin', this.makeHtml());
        this.modalAlert =  document.querySelector('#modal-alert');

        setTimeout(async () => {
            this.modalAlert.classList.add('in');
        }, 100);

        this.hide()
            .then(() => this.remove());
    }

    hide() {
        return new Promise(resolve => {
            setTimeout(() => {
                this.modalAlert.classList.add('out');
                resolve();
            }, this.dismissAfter);
        });
    }

    remove() {
        setTimeout(()=> {
            this.modalAlert.remove();
        }, 500);
    }

    /**
     * @return {string}
     */
    makeHtml() {
        return (
            `<div id='modal-alert' class='alert alert-${this.type}'>
                ${this.message}
            </div>`
        );
    }

    /**
     * @return {boolean}
     */
    static checkIsExistence() {
        const existModal = document.querySelector('#modal-alert');
        return !!existModal;
    }
}