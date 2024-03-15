const app = Vue.createApp({
    data() {
        return {
            contacts: [
                {
                    id: 1,
                    name: 'Fabio',
                    image: './asset/img/avatar_2.jpg',
                    lastSeen: '16:03',
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
                {
                    id: 6,
                    name: 'Federico',
                    image: './asset/img/avatar_3.jpg',
                    lastSeen: '16:03'
                },
                {
                    id: 7,
                    name: 'Davide',
                    image: './asset/img/avatar_3.jpg',
                    lastSeen: '16:03'
                }
            ]
        };
    }
});

app.mount('#app');
