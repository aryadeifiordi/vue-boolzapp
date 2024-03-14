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
                                { text: 'Ciao!', time: '16:05', sender: 'me' },
                                { text: 'Come stai?', time: '16:07', sender: 'me' },
                            ]
                        },
                        {
                            id: 2,
                            name: 'Samuele',
                            image: './asset/img/avatar_3.jpg',
                            lastSeen: '16:03',
                            messages: [
                                { text: 'Hey!', time: '15:30', sender: 'other' },
                                { text: 'Tutto bene, grazie!', time: '15:32', sender: 'other' },
                            ]
                        },
                        {
                            id: 3,
                            name: 'Marco',
                            image: './asset/img/avatar_4.jpg',
                            lastSeen: '16:03',
                            messages: [
                                { text: 'Salve!', time: '14:00', sender: 'other' },
                                { text: 'Come va?', time: '14:05', sender: 'other' },
                            ]
                        }
                    ],
                    activeContact: null
                };
            },
            methods: {
                setActiveContact(contact) {
                    this.activeContact = contact;
                }
            }
        });
        app.mount('#app');
