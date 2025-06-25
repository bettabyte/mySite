const TOPIC_DATA = {
  id: 'root',
  content: [
    {type: 'title', text: 'My Interests'},
    {type: 'image', src: '/preimgs/hobbies.png'},
    {type: 'subtopics'}
  ],
  subtopics: [
    {
      id: 'electronics',
      title: 'Electronics',
      content: [
        {type: 'title', text: 'Computers and Electronics'},
        {type: 'text', text: 'Computers have always been a large part of my life. Playing video games throughout my childhood was one of my favorite passtimes and it really fostered my curiousity surrounding computers as whole.'},
        {type: 'image', src: '/preimgs/electronics.png'},
        {type: 'subtopics'}
      ],
      subtopics: [
        {
          id: 'video-games',
          title: 'Video games',
          content: [
            {type: 'title', text: 'Video Games'},
            {type: 'text', text: 'Playing video games is one of my favorite hobbies and how connect with a lot of my friends.'},
            {type: 'image', src: '/preimgs/videogames.png'},
            {type: 'header', text: 'Childhood'},
            {type: 'text', text: 'As a kid I played a lot of Club Penguin and Minecraft on my family\'s old home PC (oh the good old days of 10 FPS). I also like to play on my DS Lite where I\'d usually just wander around leveling up on Empoleon. I managed to get to 300 hours and not even beat the 8th gym. I also remember playing a ton of Mario Kart Wii and had a whole birthday party themed around it where we had a tournament which I won but my parents said I couldn\'t get the prize because I was the birthday kid which I am definitely still not salty about.'},
            {type: 'header', text: 'Recently'},
            {type: 'text', text: 'I met my best friend in middle school and we would play a bunch of Minecraft and COD: Ghosts. He also started getting me into War Thunder which I still play quite a bit today. I really like sandbox games like Kerbal Space Program and stuff, and my favorite parts of games is usually the customization (totally don\'t spend 30 mintues making loadouts in COD instead of just playing lol. Been playing some Roblox Grow a Garden recently too and also Insurgency Sandstorm. Still trying to find a buddy to play BG3 with.'},
            {type: 'header', text: 'My Setup'},
            {type: 'text', text: 'I don\'t like to spend money, but computers are the one things I will usually make exceptions for. I sold my consoles in 7th grade to afford a cheap gaming PC which became my first PC gaming setup and I placed it under the loft bed I probably only slept on like 10 times. Then in university I spent quite a bit more to get a nice updated system with dual 2k screens which I\'m very happy with.'},
            {type: 'subtopics'}
          ],
          subtopics: []
        },
        {
          id: 'computers',
          title: 'Computers',
          content: [
            {type: 'title', text: 'Computers'},
            {type: 'image', src: '/preimgs/electronics.png'},
            {type: 'header', text: 'History'},
            {type: 'text', text: 'Always been curious about them. I think the idea of an entirely different world on this metal brick always fascinate me.'},
            {type: 'header', text: 'Study'},
            {type: 'text', text: 'Now I am majoring in this shit, and it is fun but damn class are annoying. I\'m still as fascinated as ever, this field has so much for me to learn.'},
            {type: 'subtopics'}
          ],
          subtopics: []
        },
        {
          id: '3d-printing',
          title: '3D Printing',
          content: [
            {type: 'title', text: '3D Printing'},
            {type: 'image', src: '/preimgs/printing.png'},
            {type: 'header', text: 'History'},
            {type: 'text', text: 'I first was able to 3D print in middle school when we had this amazing tech teacher who brought his in when they were still pretty new and let us design something simple on tinkercad. I never really got another oppurtunity again until I found the RPL at OIT.'},
            {type: 'header', text: 'Currently'},
            {type: 'text', text: 'I now have my own 3D printer and like to mess around with stuff now and then; it is very fun. I now just need to take the time to better my design skills which I plan on doing by making my own arcade machine this summer.'},
          ],
          subtopics: []
        }
      ]
    },
    {
      id: 'sports',
      title: 'Sports',
      content: [
        {type: 'title', text: 'Sports'},
        {type: 'image', src: '/preimgs/sports.png'},
        {type: 'text', text: 'Sports has always been a part of my life. They are fun.'},
        {type: 'subtopics'}
      ],
      subtopics: [
        {
          id: 'soccer',
          title: 'Soccer',
          content: [
            {type: 'title', text: 'Soccer'},
            {type: 'image', src: '/preimgs/soccer.png'},
            {type: 'header', text: 'History'},
            {type: 'text', text: 'My dad has always been big into soccer so he got me started when I was just 3 years old. I played competitive soccer up until high school when I wanted a break because the team was full of not so nice people. I played a little bit in high school but also found it to be not as fun so now I play indoor soccer on the weekends and have been for the past 5 years.'},
          ],
          subtopics: []
        },
        {
          id: 'tennis',
          title: 'Tennis',
          content: [
            {type: 'title', text: 'Tennis'},
            {type: 'image', src: '/preimgs/tennis.png'},
            {type: 'header', text: 'History'},
            {type: 'text', text: 'In high school I tried out tennis because I wanted to play a Spring sport. It ended up being some of the most fun I had in high school. It really pushed me to become better and the team was so fun and nice. I have not played much after high school, usually just a few matches with my dad now and then, but still really enjoy it!'},
          ],
          subtopics: []
        }
      ]
    },
    {
      id: 'fantasy',
      title: 'Fantasy',
      content: [
        {type: 'title', text: 'Fantasy'},
        {type: 'image', src: '/preimgs/fantasy.png'},
        {type: 'header', text: 'History'},
        {type: 'text', text: 'I have always had a really vivid and wild imagination, and just the fantasy genre as a whole really let my brain go crazy with existing in another world for a while or just pretending to fight some ninjas for bit.'},
        {type: 'subtopics'}
      ],
      subtopics: [
        {
          id: 'books',
          title: 'Books',
          content: [
            {type: 'title', text: 'Books'},
            {type: 'image', src: '/preimgs/books.png'},
            {type: 'header', text: 'Childhood'},
            {type: 'text', text: 'Some of my favorite books to read as a kid were the Percy Jackson series, the other series by Rick Riordan like The Kane Chronicles, and Harry Potter. I would read these over and over again.'},
            {type: 'header', text: 'Currently'},
            {type: 'text', text: 'Recently I have not read much because I have not had the time with studies, work, and relationships, but one series that is probably my favorite now is Mistborn.'}
          ],
          subtopics: []
        },
        {
          id: 'games',
          title: 'Games',
          content: [
            {type: 'title', text: 'Games'},
            {type: 'image', src: '/preimgs/fantasy.png'},
            {type: 'text', text: 'I just wanted to restate how much I like this genre as a whole and all of the games and tropes that come with it. As a kid I would play imaginary and fight evil monsters as a wizard or other ninjas with my elemental powers. Now I mostly stick to things like Skyrim or Divinity: Original Sin 2 because for some reason people look at you weird when you are wacking at air with sticks in the park as a 20 something year old.'}
          ],
          subtopics: []
        },
        {
          id: 'dungeons-and-dragons',
          title: 'Dungeons and Dragons',
          content: [
            {type: 'title', text: 'Dungeons and Dragons'},
            {type: 'image', src: '/preimgs/dnd.png'},
            {type: 'header', text: 'History'},
            {type: 'text', text: 'I started playing D&D in high school when my family friend\'s invited me to play with one of their friends. I did not realize how big of a part of my life it would become. During high school I found a group to play with over discord. I realize now that I am a total nerd as I would play d&d every Friday night instead of going to the football games.'},
            {type: 'header', text: 'Currently'},
            {type: 'text', text: 'Now I own a lot of the books, pretty much have all the rules memorized, and play about every other Saturday with some people I met at a local game shop.'}
          ],
          subtopics: []
        }
      ]
    }
  ]
};
const topicPage=document.getElementById('topic-page');
const detailView=document.getElementById('detail-view');
const infoSection=document.getElementById('info-section');
const detailContent=document.getElementById('detail-content');
const backBtn=document.getElementById('back-btn');
let topicStack=[TOPIC_DATA];
function renderCurrent(){
  const topic=topicStack.at(-1);
  const isRoot=topicStack.length===1;
  detailView.classList.toggle('hidden',isRoot);
  topicPage.classList.toggle('hidden',!isRoot);
  topicPage.innerHTML='';
  infoSection.innerHTML='';
  detailContent.innerHTML='';
  const container=isRoot?topicPage:infoSection;
  (topic.content||[]).forEach(block=>{
    let html='';
    switch(block.type){
      case 'title':
        html=`<h1 class="${'pageTitle'}">${block.text}</h1>`;
        break;
      case 'header':
        html=`<h1 class="${'swTitle'}">${block.text}</h1>`;
        break;
      case 'text':
        html=`<p>${block.text}</p>`;
        break;
      case 'image':
        html=`<img src="${block.src}" alt="" class="topic-image">`;
        break;
      case 'subtopics':
        if(!topic.subtopics?.length)return;
        const items=topic.subtopics.map((sub,i)=>
          `<div class="sticky-note" data-index="${i}"><h3>${sub.title}</h3></div>`
        ).join('');
        html=`<h1 class="${'swTitle'}">Subtopics:</h1><div class="subtopic-list">${items}</div>`;
        break;
      default:
        return;
    }
    container.insertAdjacentHTML('beforeend',html);
  });
  container.querySelectorAll('.sticky-note').forEach(el=>{
    el.addEventListener('click',()=>{
      const idx=+el.dataset.index;
      topicStack.push(topic.subtopics[idx]);
      renderAndScrollTop();
    });
  });
}
function renderAndScrollTop(){
  renderCurrent();
  window.scrollTo(0,0);
}
backBtn.addEventListener('click',()=>{
  if(topicStack.length>1){
    topicStack.pop();
    renderAndScrollTop();
  }
});
renderAndScrollTop();