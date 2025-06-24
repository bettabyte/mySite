const TOPIC_DATA={
  id:'root',
  content:[
    {type:'title',text:'My Interests'},
    {type:'image',src:'/preimgs/hobbies.png'},
    {type:'subtopics'}
  ],
  subtopics:[
    {
      id:'electronics',
      title:'Computers/Electronics',
      content:[
        {type:'title',text:'Computers and Electronics'},
        {type:'text',text:'Computers have always been a large part of my life.'},
        {type:'subtopics'}
      ],
      subtopics:[
        {
          id:'video-games',
          title:'Video games',
          content:[
            {type:'title',text:'Video Games'},
            {type:'header',text:'History'},
            {type:'text',text:'talk about always finding joy in it since childhood with club penguin, minecraft, and my ds/wii.'},
            {type:'image',src:'/preimgs/videogames.png'},
            {type:'subtopics'}
          ],
          subtopics:[
            {
            
            }
          ]
        },
        {
          id:'computers',
          title:'Computers',
          content:[
            {type:'title',text:'Computers'},
            {type:'header',text:'History'},
            {type:'text',text:'Always been curious about them.'},
            {type:'subtopics'}
          ],
          subtopics:[
            {
            
            }
          ]
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