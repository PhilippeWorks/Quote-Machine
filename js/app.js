//facebook API
  window.fbAsyncInit = function() {
    FB.init({
      appId            : '107416346608688',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.10'
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

//model quotes
const data = [
	{author: 'Howlin\' Wolf', quote: 'I couldn\'t do no yodelin\', so I turned to howlin\'. And it\'s done me just fine.'},
	{author: 'Kanye West', quote: 'People always say that you can\'t please everybody. I think that\'s a cop-out. Why not attempt it? \'Cause think of all the people you will please if you try.'},
	{author: 'Zlatan Ibrahimovic', quote: 'Some coaches prefer players who will just do whatever he tells them to. It\'s like, if you\'re at school with a load of 10 year old boys and you tell them to jump, everyone will starts to jump. But the intelligent boy will ask, \'Why should I jump?\' \'Why?\' That can be difficult for a lot of coaches, and I understand that.'},
	{author: 'Dominick Cruz', quote: 'Loss is part of life, if you don\'t have loss, you don\'t grow. This isn\'t tough, this is life.'},
	{author: 'Jay-Z', quote: 'Do me a favor. Don’t do me no favors. I handle mine.' },
	{author: 'Neil deGrasse Tyson', quote: 'We are part of this universe; we are in this universe, but perhaps more important than both of those facts, is that the universe is in us.'},
	{author: 'Charlamagne tha God', quote: 'I’ve been fired 4x and it’s worth it to be myself.'},
	{author: 'Larry David', quote: 'If you tell the truth about how you\'re feeling, it becomes funny.' },
	{author: 'Jerry Seinfeld', quote: 'Make no mistake about why these babies are here - they are here to replace us.'},
	{author: 'Trevor Noah', quote: 'Being chosen is the greatest gift you can give to another human being.'},
	{author: 'Brett Favre', quote: 'You\'re only as good as your last pass.'},
	{author: 'Prince', quote: 'Technology is cool, but you\'ve got to use it as opposed to letting it use you.'},
	{author: 'William Glasser', quote: 'What students lack in school is an intellectual relationship or conversation with the teacher.'},
	{author: 'John Steinbeck', quote: 'No man really knows about other human beings. The best he can do is to suppose that they are like himself.'},
	{author: 'Aziz Ansari', quote: 'Why do we all say we prefer honesty but rarely give that courtesy to others?'},
	{author: 'Carl Jung', quote: 'Everyone knows nowadays that people \'have complexes\'. What is not so well known, though far more important theoretically, is that complexes can have us.'},
	{author: 'Alicia Keys', quote: 'I lived with my mom in a really small apartment. My bedroom was like in the living room. That\'s why I still love to sleep on couches now.'},
	{author: 'Elon Musk', quote: 'I don\'t spend my time pontificating about high-concept things; I spend my time solving engineering and manufacturing problems.'},
	{author: 'J.B. Smoove', quote: 'You turn hotdogs with tongs. Don\'t you ever use those tongs on a hamburger.'},
	{author: 'Daniel Day-Lewis', quote: 'I suppose I have a highly developed capacity for self-delusion, so it\'s no problem for me to believe that I\'m somebody else.'},
	];

//variables for id elements
const quoteButton = document.getElementById('quote-button');
const body = document.getElementsByTagName('body')[0];
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterButton = document.getElementById('twitter-share-button');
const facebookButton = document.getElementById('fbook-button');

//model colors
let colorData = ['#5042f4', '#f44268', '#ad42f4', '#f4c741', '#f49242', '#42f4eb', '#42f45f', '#680000', '#879A9B', '#166C00', '#00FFC4'];

//selects and displays a new quote on random and updates text
let randomizer = () => {
	let random = Math.round(Math.random()*data.length -1);
	console.log(random);
	if (random == -1) {
		random = 19;
	}
	quoteText.innerHTML = "\"" + data[random].quote + "\"";
	authorText.innerHTML = data[random].author;

	//for tweet button
	twitterButton.setAttribute('href', 'https://twitter.com/intent/tweet?text=' + quoteText.innerHTML + ' ' + data[random].author);

	//for facebook button
	facebookButton.quote = authorText.innerHTML + quoteText.innerHTML 
};

//Selects and displays new color scheme
let colorRandomizer = () => {
	let colorRandom = Math.round(Math.random()*colorData.length) - 1;
	body.style.backgroundColor = colorData[colorRandom];
	quoteButton.style.color = colorData[colorRandom];
};

colorRandomizer();
randomizer(); 

//ties functions to quote-button
quoteButton.addEventListener('click', () => { 
	$("#jumbotron").fadeOut( 400, () => {
		$("#jumbotron").fadeIn();
		randomizer();
		colorRandomizer();
	});
});

//facebook button
facebookButton.onclick = () => {
  FB.ui({
    method: 'share',
    mobile_iframe: true,
    display: 'popup',
    href: '',
  }, function(response){});
}