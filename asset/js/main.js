const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            contacts: [
                {
                    id: 1,
                    name: 'Michele',
                    image: './asset/img/avatar_1.jpg',
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
                            time: '16:31'
                        }
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
                }
            ],
            currentContactIndex: null,
            newMessage: '',
            searchText: '' // Nuova variabile per memorizzare il testo di ricerca
        };
    },
    methods: {
        selectContact(index) {
            this.currentContactIndex = index;
        },
        sendMessage() {
            if (this.currentContactIndex !== null && this.newMessage.trim() !== '') {
                this.contacts[this.currentContactIndex].messages.push({
                    type: 'sent',
                    content: this.newMessage,
                    time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
                });

                
                setTimeout(() => {
                    this.contacts[this.currentContactIndex].messages.push({
                        type: 'received',
                        content: 'Ok',
                        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
                    });
                }, 1000);

                this.newMessage = '';
            }
        },
        filterContacts() {
            return this.contacts.filter(contact =>
                contact.name.toLowerCase().includes(this.searchText.toLowerCase())
            );
        }
    }
}).mount('#app');