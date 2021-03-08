const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            confirmedName: '',
        };
    },
    computed: {
        fullName() {
            if (this.name === '') {
                return '';
            }
            return this.name + ' ' + 'Das';
        },
    },
    methods: {
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
        },
        updateName(event) {
            this.name = event.target.value;
        },
        resetInput() {
            this.name = '';
            this.confirmedName = '';
        },
        outputFullname() {
            if (this.name === '') {
                return '';
            }
            return this.name + ' ' + 'Das';
        },
    },
});

app.mount('#events');
