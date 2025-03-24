const App = {
    async init() {
        try {
            await this.loadComponents();
            await this.initializeModules();
        } catch (error) {
            console.error('Initialization error:', error);
        }
    },

    async loadComponents() {
        const components = {
            header: await this.fetchComponent('components/header.html'),
            footer: await this.fetchComponent('components/footer.html')
        };

        this.renderComponents(components);
    },

    async fetchComponent(path) {
        const response = await fetch(path);
        return response.text();
    },

    renderComponents({ header, footer }) {
        document.getElementById('header').innerHTML = header;
        document.getElementById('footer').innerHTML = footer;
    },

    async initializeModules() {
        TranslationManager.init();
        FormValidator.init();
    }
};

document.addEventListener('DOMContentLoaded', () => App.init());
