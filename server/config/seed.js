/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

Week.find({}).remove(function() {
  var week = new Week({name: 2, quota: 0});
  week.save();
  Task.find({}).remove(function() {
    week.tasks.create({
      point: 2,
      name: 'Do not try to investigate if he\'s dating a new one. Seeing him with someone new does not help at all.',
      description: ""
    },{
      point: 2,
      name: 'Stop wishing and hoping that he\'ll come back to you',
      description: ""
    },{
      point: 2,
      name: 'Keep off from trying to run into him in grocery store or in his current work place.',
      description: ""
    },{
      point: 2,
      name: 'Do things you love',
      description: "Get into some activities. What are the things that perk you up? Things that excite you, enthuse you, make you feel rejuvenated? Exercising? Jogging? Swimming? Cycling? Rollerblading? Traveling? Going out with friends? Movies? Watching a drama? Reading a book? Engage yourself in them."
    },{
      point: 2,
      name: 'Meet new people.',
      description: "It’s easy to get trapped in your head thinking about the thing for too long. Meeting new people, friends or romantic potentials alike, reminds how there is a whole world out there. There are many great people to know out there. Don’t get cooped up with your life. I always find it an amazing adventure to know someone new and be exposed to a whole different life. It helps me understand life from a whole different angle."
    });
  });
});
