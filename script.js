const postForm = document.getElementById('postForm');
const postsContainer = document.getElementById('postsContainer');

function createPost(title, category, content) {
  if(!postsContainer) return;

  const postDiv = document.createElement('div');
  postDiv.className = 'post';

  const postTitle = document.createElement('h2');
  postTitle.textContent = title;

  const postDate = document.createElement('div');
  postDate.className = 'date';
  const now = new Date();
  postDate.textContent = now.toLocaleDateString() + ' - ' + category;

  const postContent = document.createElement('p');
  postContent.textContent = content;

  postDiv.appendChild(postTitle);
  postDiv.appendChild(postDate);
  postDiv.appendChild(postContent);

  postsContainer.prepend(postDiv);
}

if(postForm){
  postForm.addEventListener('submit', function(e){
    e.preventDefault();
    const title = document.getElementById('title').value;
    const category = document.getElementById('category').value;
    const content = document.getElementById('content').value;

    createPost(title, category, content);

    postForm.reset();
    alert("Post aggiunto (ancora solo lato client).");
  });
}
