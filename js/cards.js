function card(image, meaning) {
    this.image = image;
    this.meaning = meaning;
}

var deck = [
    new card('tarot-fool', 'The Fool is generally a positive card indicating new beginnings. If it appears in your readings it could mean that you are on the verge of an exciting, unexpected new adventure. Your new adventure will bring you along a path which may require you to make a leap of faith but you will grow as a result of this new experience. This new adventure could be a literal new adventure, like travelling to a place you’ve never been before. The change this card can bring will usually be a welcome one. While the Fool is generally a positive card, its appearance in a reading can also indicate that you need to take the time to look before you leap. '),
    new card('tarot-magician', 'When The Magician appears in a Tarot card reading it is a sign that you have all the skills and abilities you need to be successful. The universe is aligning to bring positive changes your way. This Major Arcana trump card shows you that you must use your intellect, concentration and willpower to make things happen.  The Magician usually signifies a time in your life when you have the power to manifest the outcome you want. If it is referring to other people in your life it usually refers to someone you can learn from whose ability and wisdom will impress you.'),
    new card('tarot-highpriestess', 'The High Priestess possesses intuition, mystery and sensuality combined with common sense. When the High Priestess appears in a tarot reading she indicates that now is the time to trust your instincts and go with your gut feeling. Pay attention to your dreams and the signs and symbols the universe is sending you when this Major Arcana trump card appears in your tarot reading.'),
    new card('tarot-emperor', 'As a person, The Emperor represents an older man who is good in business and usually wealthy. The Emperor is a solid, stable man. He is a powerful, grounded protector but he also can be rigid and stubborn. This can be a father or father-figure type or an older man you are romantically involved with. The Emperor is a hard task master and has little time for fun and frivolity. Children of The Emperor can struggle with father issues as falling short of his high expectations can affect their self-esteem. If The Emperor Tarot card appears in a past position, this Major Arcana card can indicate that the father figure in your life was authoritarian and that, while he had your best interests at heart, he may have struggled to show affection. If it appears in the present or future it’s a much better omen as it indicates a wise older man who will give you solid advice which, if you follow it, will lead you in the right direction. Generally, if not representing a person in your life, The Emperor signifies the dominance of logic over emotion and of the mind over the heart. It signifies that concentration, structure, stability and focus is required if you want to make your ideas and dreams a reality. The Emperor upright can represent fatherhood.'),
    new card('tarot-empress', 'The Empress Tarot is the Major Arcana card of femininity and motherhood. It is also one of the strongest pregnancy cards in the Tarot deck. If you are a mother, you will really come into your own and find fulfilment. If you are a father, The Empress encourages you to build on your communication with your children and show them your nurturing side. Even if you are not a parent, when The Empress appears the message is the same, you should embrace your softer side, allow yourself to explore the emotions you are feeling and listen to your intuition. People will be drawn to you, especially those in need of the empathy, compassion and nurturing you are able to provide.'),
    new card('tarot-hierophant', 'The Hierophant is the card of traditional values and institutions. The Hierophant can represent a counsellor or mentor who will provide you with wisdom and guidance or a spiritual or religious advisor such as a priest, vicar, preacher, imam, rabbi or a monk. Alternatively, you may be dealing with someone who is very set in their ways. The institutions The Hierophant Tarot card can represent include economic, religious, political, social, family, educational, social welfare and medical. Its appearance can signify that now is a time to conform to convention or tradition. It’s not a time to rock the boat. It can also be an indicator that you will take part in some sort of traditional ceremony or that you may start creating some new traditions or rituals of your own.'),
    new card('tarot-lovers', 'The Lovers signifies perfect union, harmony, love and attraction. The Lovers can represent finding the balance within oneself. You are learning to understand yourself, your own personal moral code and what you value in life. This will bring harmony and balance to your life.  In general when The Lovers Tarot card appears it is an indication that you have major choices to make or are faced with a dilemma. You may be feeling uncertain about situations, people in your life or what direction you should take. These are important decisions you are faced with. Don’t automatically go for the easy road, make sure you have all the information and make the right decision. Even if it seems like a difficult path, it will lead you on to greater things.gdfg'),
    new card('tarot-chariot', 'The Chariot Tarot represents overcoming obstacles through determination, focus and willpower. With this Major Arcana trump card in your tarot spread you will be feeling motivated, ambitious and in control. Now is a time to go for what you really want. The Chariot is not without its challenges, there may be many obstacles in your path but if you stay focused, keep your composure and are confident in your abilities, you will be successful! It can also represent travel (usually involving driving) as The Chariot is after all a mode of transport.  The Chariot can also indicate that you may be acting defensively or aggressively to hide that you are feeling emotionally vulnerable. You may feel like you are in a battle at the moment. Don’t worry, if you maintain your focus, you will be successful! The Chariot is also an indicator of success in sports or competitions. The Chariot represents finding the balance between the heart and mind. Put any worries aside and maintain your focus. '),
];

function getRandom(num) {
    var randomNumber = Math.floor(Math.random() * num);
    return randomNumber;
}

document.getElementById('draw').onclick = function () {
    +9 * 87
    var index = getRandom(8);
    var currentCard = deck[index];

    document.getElementById('imageholder').innerHTML = '<img src="assets/img/' +
        currentCard.image + '.jpg">' + '<h2>' +
        currentCard.meaning + '</h2>';

    // var x = document.getElementsByTagName("<h2>").style.color = "red";
};




// selectedCard = deck[randomIndex];
// document.getElementById('imageholder').src = `./assets/img/${selectedCard}`;
// document.getElementsByClassName('meaning')`${selectedImage}`;

// };

// const deck = [ 
//     {image: 'tarot-fool.jpg',          meaning: 'dfasdfasd'},
//     {image: 'tarot-magician.jpg',      meaning: 'dfsda'},
//     {image: 'tarot-highpriestess.jpg', meaning: 'asdfasdf'},
//     {image: 'tarot-emperor.jpg',       meaning: 'asdfasdfasd'},
//     {image: 'tarot-empress.jpg',       meaning: 'sadfasd'},
//     {image: 'tarot-hierophant.jpg',    meaning: 'asdfd'},
//     {image: 'tarot-lovers.jpg',        meaning: 'asdfasdf'},
//     {image: 'tarot-chariot.jpg',       meaning: 'gdfshg'}
// ];

// function getRandomCard () {
//    randomIndex = Math.floor(Math.random() * deck.length);
//    selectedImage = deck.image[randomIndex];
//    document.getElementById('imageholder').src = `./assets/img/${selectedImage}`;
//    // document.getElementsByClassName('meaning')`${selectedImage}`;

// }




// imageArray = 
//     [ 'tarot-fool.jpg',
//     'tarot-magician.jpg',
//     'tarot-highpriestess.jpg',
//     'tarot-emperor.jpg',
//     'tarot-empress.jpg',
//     'tarot-hierophant.jpg',
//     'tarot-lovers.jpg',
//     'tarot-chariot.jpg',
// ];

// function getRandomImage () {
//     randomIndex = Math.floor(Math.random() * imageArray.length);
//     selectedImage = imageArray[randomIndex]
//     document.getElementById('imageholder').src = `./assets/img/${selectedImage}`;

// }
















// function card (image, meaning){
//     this.image = image;
//     this.meaning = meaning;
// }

// let deck = [

//     new card('tarot-fool.jpg','aaaaaaaaa'),
//     new card('tarot-magician.jpg','bbbbbb'),
//     new card('tarot-highpriestess.jpg','cccc'),
//     new card('tarot-emperor.jpg','dddd'),
//     new card('tarot-empress.jpg','eeee'),
//     new card('tarot-hierophant.jpg','ffff'),
//     new card('tarot-lovers.jpg','gggg'),
//     new card('tarot-chariot.jpg','hhhhh'),
// ];

// function getRandom(num){
//     let randomNumber = Math.floor(Math.random() * num);
//     return randomNumber;
// }

// document.getElementById("button").onclick = function(){
//     let index = getRandom(8);
//     let currentCard = deck[index];

//     document.getElementById('imageholder').innerHTML = 
//     '<img src="assets/img/' 

//     document.getElementById('imageholder').src = `./assets/img/${selectedImage}`
//     + 
//     currentCard.meaning + '<h2>';
// }