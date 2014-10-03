/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

Week.find({}).remove(function(){
  Week.create({
    name: 1
  }, {
    name: 2
  }, {
    name: 3
  }, {
    name: 4
  }, {
    name: 5
  }, {
    name: 6
  }, {
    name: 7
  }, {
    name: 8
  }, {
    name: 9
  }, {
    name: 10
  }, {
    name: 11
  }, {
    name: 12
  })
})
Task.find({}).remove(function(){
  Task.create({
    week_id: 1,
    point: 2,
    name: 'Unfriend, Un-follow, Un-Everything!',
    description: 'Are you still friends with your ex on Facebook? Unfriend them immediately! Do you follow them on Twitter? Stop! Thinking about signing up for Instagram just so you can check out their photos? Don’t! Maybe someday you can connect using social media, but it will only hold you back from moving on at that present moment. In order to take back your heart, you need to take back your social media accounts!'
  },{
    week_id: 1,
    point: 2,
    name: 'Big Girls Do Cry',
    description: 'Cry as much as you need to. Don’t let ANYONE tell you that you shouldn\'t waste tears on him» because you need to relieve all that frustration and the best way to do that is by allowing yourself to feel all of the emotions attached to a breakup without closure. I cried for weeks. Some days were better than others, but even today I have an occasional cry here and there. With every tear, you’ll realize that you get a little bit stronger. So grab a box of tissues and let it rain'
  },{
    week_id: 1,
    point: 2,
    name: 'Remember Why You Broke Up',
    description: 'When you find yourself romanticizing your ex and thinking about how great he or she is, remind yourself of all the reasons you broke up.  Whether the two of you just weren’t right for each other, or you had completely different values and beliefs, there is an explanation for why you broke up. Try making a list of all the reasons why you just don’t work together. It will help you to stop fantasizing about the past and you can pull that list out when you need to remind yourself why you’re better off alone!'
  },{
    week_id: 1,
    point: 2,
    name: 'Be Bitter!',
    description: 'Most women advise you not to be bitter, but I say they’re wrong. YOU HAVE EVERY RIGHT TO BE BITTER. As long as this is temporary and lasts up to the period when you\'ve finally been able to flush him out of your system, be as bitter about the breakup, the memories attached to it, and the man himself without any guilt.'
  },{
    week_id: 1,
    point: 2,
    name: 'Focus on today',
    description: 'You can decide right now that negative experiences from your past will not predict your future.  Figure out what the next positive step is, no matter how small or difficult, and take it.  Ultimately, the only thing you can ever really do is to keep moving forward.  Take that leap without hesitation, without looking back.  Simply forget the past, look straight ahead and forge toward the future.'
  },{
    week_id: 2,
    point: 2,
    name: 'Declutter. Clean your house!',
    description: 'Get everything that reminds you of him out of your house, and I mean EVERYTHING. The ticket stubs for the movies you guys went to, the pen he lent you, and any receipts you saved from special outings–THROW ALL OF THAT AWAY. He deserves no place in your heart, mind, or closet.'
  },{
    week_id: 2,
    point: 2,
    name: 'Get healthy from the inside out. Exercise and workout.',
    description: 'Enjoy hobbies and activities that you\'ve been meaning to do'
  },{
    week_id: 2,
    point: 2,
    name: 'Hit that Play Button',
    description: 'Hearing songs about moving on as opposed to songs about heartbreak and getting him back will allow your mind to accept the fact that it’s done and that you need to start moving forward and stop looking back.'
  },{
    week_id: 2,
    point: 2,
    name: 'Accept the fact that it\'s over and the only thing to do is move forward.',
    description: 'To let go is to be thankful for the experiences that made you laugh, made you cry, and helped you learn and grow.  It’s the acceptance of everything you have, everything you once had, and the possibilities that lie ahead.  It’s all about finding the strength to embrace life’s changes, to trust your intuition, to learn as you go, to realize that every experience has value, and to continue taking positive steps forward.'
  },{
    week_id: 2,
    point: 2,
    name: 'Distance yourself for a while',
    description: 'Sometimes you need to take several steps back in order to gain clarity on a situation.  The best way to do this is to simply take a break and explore something else for a while.  Why?  So you can return to where you started and see things with a new set of eyes.  And the people there may see you differently too.  Returning where you started is entirely different than never leaving.'
  },{
    week_id: 3,
    point: 2,
    name: 'Connect and spend time with your family and friends',
    description: 'I can’t begin to stress how important it is to spend time with those special ladies in your life who make you feel whole again. I don’t know what I would have done without my girlfriends. Girlfriends will be there for you to offer all kinds of support, a shoulder, an ear, a stiff drink. Let them be there for you–you need them now more than ever.'
  },{
    week_id: 3,
    point: 3,
    name: 'Forgive yourself',
    description: "You might think you made the biggest mistake of your life, and if only you didn’t do it you wouldn’t be in pain right now. Don’t go down that road—there’s nothing good down there!\n\nInstead, keep reminding yourself that you are human. You’re entitled to make mistakes; everyone does. And you will learn from them and use those lessons to improve your life."
  },{
    week_id: 3,
    point: 3,
    name: 'Take a chance',
    description: "When life sets you up with a challenge, there’s a reason for it; it’s meant to test your courage and willingness to make a change and take a chance on something new.  There’s no point in denying that things are different now, or being fearful of the next step.  The challenge will not wait even if you hesitate.  Life only moves in one direction – forward.  This challenge is your chance to let go of the old and make way for the new.  Your destiny awaits your decision."
  },{
    week_id: 3,
    point: 3,
    name: 'Practice releasing regrets.',
    description: "When a relationship ends, it’s tempting to dwell on what you did wrong or what you could have done differently. This might seem productive—like you can somehow change things by rehashing it. You can’t\n\nAll dwelling does is cause you to suffer. When you start revisiting the past in your head, pull yourself into the moment. Focus on the good things in your current situation: the friends who are there for you and the lessons you’ve learned that will help you with future relationships."
  },{
    week_id: 4,
    point: 2,
    name: 'Create a bucket list and start planning and executing to make it happen',
    description: "Been wanting to learn how to play piano, but could not find time for it while you were in a relationship? Go search and buy for a cheap piano and start playing!"
  },{
    week_id: 4,
    point: 3,
    name: 'Don\'t think about any time as lost.',
    description: "If you’ve been clinging to the past for a while and now feel you’ve missed out, shift the focus to everything you’ve gained. Maybe you’ve built great friendships or made great progress in your career."
  },{
    week_id: 4,
    point: 3,
    name: 'Remember the bad as well as the good.',
    description: "We tend to remember everything with reverie, as if it was all sunshine and roses. If your ex broke up with you, it may be even more tempting to imagine she or he was perfect and you weren’t.  In all reality, you both have strengths and weaknesses and you both made mistakes."
  },{
    week_id: 5,
    point: 2,
    name: 'Do not talk continually about him with your friends, family and anyone who will listen',
    description: ""
  },{
    week_id: 5,
    point: 3,
    name: 'Resist going to places where you spent time together',
    description: ""
  },{
    week_id: 5,
    point: 3,
    name: 'Get a Hobby',
    description: "Now is the perfect time to master a new skill (and that’s in addition to practicing positivity)! What have you always wanted to do, but could never find the time to take on because you were too busy hanging out with your ex? From trying a new yoga class to getting your pilot’s license, trying something new will not only take your mind off your broken heart, but it will open you up to all sorts of new opportunities as well!"
  },{
    week_id: 5,
    point: 3,
    name: 'Resist thinking about the good times you had together. It will only make you feel worse.',
    description: "Resist thinking about the good times you had together. It will only make you feel worse."
  },{
    week_id: 6,
    point: 2,
    name: 'Avoid looking at his pictures, cards, love letters.',
    description: "Avoid looking at his pictures, cards, love letters."
  },{
    week_id: 6,
    point: 2,
    name: 'Recognize he/she is not the one for you.',
    description: "A large portion why you can’t move on is probably because you keep seeing him/her as “the one” for you. You just can’t see yourself with anyone else but him/her. Such fixations are dangerous. This leads you to linger on and on, hoping for a “some day” which will never come."
  },{
    week_id: 6,
    point: 2,
    name: 'Make that CONS list',
    description: "Make a cons list of all the things you hated about him. The things he did that annoyed you, disgusted you, things he said that hurt you. For example, my ex never supported my dreams, love for writing, or my opinions. I hate that he always made it a point to comment on how thin I am, never called me, or told me I was beautiful. I remember these things constantly and it helps me realize exactly what I don’t want in a forever man. Making a cons list alone helps you focus on all the things you don’t want in a man you intend to spend the rest of your life with and get over him."
  },{
    week_id: 6,
    point: 2,
    name: 'Focus only on what can be changed.',
    description: "Realize that not everything in life is meant to be modified or perfectly understood.  Live, let go, learn what you can and don’t waste energy worrying about the things you can’t change.  Focus exclusively on what you can change, and if you can’t change something you don’t like, change the way you think about it.  Review your options and then re-frame what you don’t like into a starting point for achieving something better."
  },{
    week_id: 6,
    point: 2,
    name: 'Keep positive attitude. Be grateful for the wonderful things in your life',
    description: "After you’ve given yourself sufficient time to mourn the relationship, make a conscious decision to stop feeling bad for yourself. Choose to think positive thoughts about yourself, about love and about your future romantic prospects."
  },{
    week_id: 7,
    point: 2,
    name: 'Do not try to investigate if he\'s dating a new one. Seeing him with someone new does not help at all.',
    description: ""
  },{
    week_id: 7,
    point: 2,
    name: 'Stop wishing and hoping that he\'ll come back to you',
    description: ""
  },{
    week_id: 7,
    point: 2,
    name: 'Keep off from trying to run into him in grocery store or in his current work place.',
    description: ""
  },{
    week_id: 7,
    point: 2,
    name: 'Do things you love',
    description: "Get into some activities. What are the things that perk you up? Things that excite you, enthuse you, make you feel rejuvenated? Exercising? Jogging? Swimming? Cycling? Rollerblading? Traveling? Going out with friends? Movies? Watching a drama? Reading a book? Engage yourself in them."
  },{
    week_id: 7,
    point: 2,
    name: 'Meet new people.',
    description: "It’s easy to get trapped in your head thinking about the thing for too long. Meeting new people, friends or romantic potentials alike, reminds how there is a whole world out there. There are many great people to know out there. Don’t get cooped up with your life. I always find it an amazing adventure to know someone new and be exposed to a whole different life. It helps me understand life from a whole different angle."
  })
})

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});