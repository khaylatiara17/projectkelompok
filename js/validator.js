const FormValidator = {
    patterns: {
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        phone: /^[0-9\-\+]{10,13}$/
    },

    init() {
        this.bindForms();
    },

    bindForms() {
        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', e => this.handleSubmit(e));
        });
    },

    handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        
        if (this.validateForm(form)) {
            form.submit();
        }
    },

    validateForm(form) {
        return Array.from(form.querySelectorAll('[required]'))
            .every(field => this.validateField(field));
    }

    // ...existing validation methods...
};
