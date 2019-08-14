var names = [
    {
        firstName: "Александр",
        secondName: "Македонский",
        thirdName: "Цезаревич",
        avatar: "https://i.pinimg.com/736x/29/a8/20/29a82067b71bd9e3df95e1c0ba5c4daf--fantasy-art-avatar-jake-sully.jpg"
    },
    {
        firstName: "Максим",
        secondName: "Авросский",
        thirdName: "Наимович",
        avatar: "https://i.pinimg.com/736x/29/a8/20/29a82067b71bd9e3df95e1c0ba5c4daf--fantasy-art-avatar-jake-sully.jpg"
    },
    {
        firstName: "Платон",
        secondName: "Планетный",
        thirdName: "Меркурович",
        avatar: "https://i.pinimg.com/736x/29/a8/20/29a82067b71bd9e3df95e1c0ba5c4daf--fantasy-art-avatar-jake-sully.jpg"
    }
];

var vw = new Vue({
    el: '#app',
    data: function(){
        return {
            title: 'Список имен',
            names: names
        }
    }
});