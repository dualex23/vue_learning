
var users = [
    {
        firstName: "Александр",
        secondName: "Македонский",
        thirdName: "Цезаревич",
        avatar: "http://nice-avatar.ucoz.ru/_ph/4/2/933339845.png"
    },
    {
        firstName: "Максим",
        secondName: "Авросский",
        thirdName: "Наимович",
        avatar: ""
    },
    {
        firstName: "Платон",
        secondName: "Планетный",
        thirdName: "Меркурович",
        avatar: "https://s017.radikal.ru/i427/1303/35/85bea17b0018.gif"
    },
    {
        firstName: "Карл",
        secondName: "Фиджеральд",
        thirdName: "Карлович",
        avatar: "https://cheat-master.ru/avatar/04/859171.png"
    },
    {
        firstName: "Морис",
        secondName: "Бирюза",
        thirdName: "Агапович",
        avatar: "http://smm-blogs.ru/upload/000/u1/036/ca01410e.jpg"
    }
];

var app = new Vue({
    el: '#app',
    data: function(){
        return {
            isVisible: false,
            users: users,
            defaultAvatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaUD8jlvVjouynDln66CRBRL-ecagVV5I3xhRBXJweSU_1iyYLTw'
        }
    },
    computed: {
        fullName() {
            return this.users.firstName + this.users.secondName;
        },
        title(){
            return 'Всего человек: ' + this.users.length;
        },
        ava(user){
            return user.avatar != '' ? user.avatar : defaultAvatar;
        }
    }
});