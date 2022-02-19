/**
 * @author Dudi Iskandar
 * @version 1.0
 * @description Modal with Vanilla JS
 */

class Modal {

    constructor(body, modal, target) {
        this.body = body;
        this.modal = modal;
        this.isOpen = false;
        this.target = target;
        this.closeModal = modal.querySelectorAll('.modal-close');

        /* Initial Modal Backdrop */
        this.addBackdrop();

        /* Handle Click Button Trigger */
        this.target.addEventListener('click', () => {
            if (this.isOpen) return this.close()
            this.open();
        });

        /* Handle Click Close Button */
        this.closeModal.forEach(element => {
            element.addEventListener('click', () => {
                this.close();
            });
        });

        /* Handle Keydown Event */
        this.body.addEventListener('keydown', (e) => {
            this.handleKeydownEvent(e);
        });
    }

    addBackdrop() {
        const position = 'afterbegin'
        const htmlBackdrop = `<div class="modal-backdrop" onclick="modal.close()"></div>`
        this.modal.insertAdjacentHTML(position, htmlBackdrop);
    }

    removeBackdrop() {
        this.modal.querySelectorAll('.modal-backdrop').forEach(element => {
            element.remove();
        });
    }

    open() {
        this.addBackdrop();
        this.modal.classList.add('modal-open');
        this.body.style.overflow = 'hidden';
    }

    close() {
        this.removeBackdrop();
        this.modal.classList.remove('modal-open');
        this.body.style.overflow = 'auto';
    }

    handleKeydownEvent(e) {
        /* Handle Escape Key */
        if (e.which === 27) this.close();
    }
}

/* Get Body Element */
const elBody = document.body;
/* Get Modal Element */
const elModal = document.querySelector('.modal');
/* Get Target Element */
const elTarget = document.querySelector('.modal-target');

/* Main */
const modal = new Modal(elBody, elModal, elTarget);
