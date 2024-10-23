import { ChatProps, UserProps } from './types'

export const users: UserProps[] = [
    {
        name: 'Eduardo.',
        username: '@dudu',
        avatar: '/static/images/avatar/2.jpg',
        online: true,
    },
    {
        name: 'Felipe',
        username: '@cripto',
        avatar: '/static/images/avatar/3.jpg',
        online: false,
    },
    {
        name: 'Gabriel',
        username: '@bebeto',
        avatar: '/static/images/avatar/1.jpg',
        online: true,
    },


]

export const chats: ChatProps[] = [
    {
        id: '1',
        sender: users[2],
        messages: [
            {
                id: '1',
                content: 'Salve!',
                timestamp: '5 mins ago',
                sender: users[2],
                unread: true,
            },
        ],
    },
    {
        id: '2',
        sender: users[0],
        messages: [
            {
                id: '1',
                content: 'Oi Bruno, Tudo bem?',
                timestamp: 'Quarta-feira 9:00am',
                sender: users[0],
            },
            {
                id: '2',
                content: 'Estou interessado na Memória RAM.',
                timestamp: 'Quarta-feira 9:10am',
                sender: users[0],
            },
            {
                id: '4',
                timestamp: 'Quarta-feira 2:00pm',
                sender: 'You',
                content: 'Boa tarde, Eduardo',
            },
            {
                id: '5',
                timestamp: 'Quarta-feira 2:00pm',
                sender: 'You',
                content: 'Tudo bem?',
            },
            {
                id: '7',
                content: 'Vou buscar hoje, estou precisando muito desse componente.',
                timestamp: 'Quarta-feira 2:02pm',
                sender: 'You',
            },
            {
                id: '7',
                content:
                    'Eu busco hoje, estou precisando bastante desse componente',
                timestamp: 'Quarta-feira 15:00pm',
                sender: users[0],
            },

        ],
    },
    {
        id: '3',
        sender: users[1],
        messages: [
            {
                id: '1',
                content: 'Eae Bruno, eu estou interessado no processador.',
                timestamp: 'Quarta-feira 9:05am',
                sender: users[1],
            },
            {
                id: '2',
                content:
                    'Eu posso ir buscar hoje?',
                timestamp: 'Quarta-feira 9:05am',
                sender: users[1],
            },

        ],
    },








]
