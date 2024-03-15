const app = Vue.createApp({
    data() {
        return {
            contacts: [
                {
                    id: 1,
                    name: 'Fabio',
                    image: './asset/img/avatar_2.jpg',
                    lastSeen: '16:03',
                    messages: [
                        {
                            type: 'received',
                            content: 'Ciao come stai?',
                            time: '16:30'
                        },
                        {
                            type: 'sent',
                            content: 'Bene grazie! Stasera ci vediamo?',
                            time: '16:30'
                        },
                    ]
                },
                {
                    id: 2,
                    name: 'Samuele',
                    image: './asset/img/avatar_3.jpg',
                    lastSeen: '16:03'
                },
                {
                    id: 3,
                    name: 'Alessandro B.',
                    image: './asset/img/avatar_3.jpg',
                    lastSeen: '16:03'
                },
                {
                    id: 4,
                    name: 'Alessandro L.',
                    image: './asset/img/avatar_3.jpg',
                    lastSeen: '16:03'
                },
                {
                    id: 5,
                    name: 'Claudia',
                    image: './asset/img/avatar_3.jpg',
                    lastSeen: '16:03'
                },
            ],
            currentContactIndex: null
        };
    },
    methods: {
        selectContact(index) {
            this.currentContactIndex = index;
        }
    },
    computed: {
        currentContact() {
            return this.currentContactIndex !== null ? this.contacts[this.currentContactIndex] : null;
        }
    }
});

app.mount('#app');