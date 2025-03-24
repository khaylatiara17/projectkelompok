const FormValidator = {
    patterns: {
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        phone: /^[0-9\-\+]{10,13}$/
    },

    validate(formId) {
        const form = document.getElementById(formId);
        const fields = form.querySelectorAll('[required]');
        let isValid = true;

        fields.forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });

        return isValid;
    },

    validateField(field) {
        const value = field.value.trim();
        const type = field.type;

        if (!value) {
            this.showError(field, 'Field ini wajib diisi');
            return false;
        }

        if (type === 'email' && !this.patterns.email.test(value)) {
            this.showError(field, 'Email tidak valid');
            return false;
        }

        if (type === 'tel' && !this.patterns.phone.test(value.replace(/\s/g, ''))) {
            this.showError(field, 'Nomor telepon tidak valid');
            return false;
        }

        this.clearError(field);
        return true;
    },

    showError(field, message) {
        const errorDiv = field.nextElementSibling || document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        if (!field.nextElementSibling) {
            field.parentNode.appendChild(errorDiv);
        }
    },

    clearError(field) {
        const errorDiv = field.nextElementSibling;
        if (errorDiv?.className === 'error-message') {
            errorDiv.remove();
        }
    }
};
