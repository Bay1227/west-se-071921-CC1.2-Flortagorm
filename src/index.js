//console.log("you got this!");
const imageUrl = "https://distinct-vaulted-freesia.glitch.me/image"
const fgTitle = el("fg-title")
const fgImage = el("fg-image")
const fgLikes = el("fg-likes")
const likeButton = el("like-button")
const fgComments = el("fg-comments")
const comForm = el("comment-form")

let likes = 0;

likeButton.addEventListener("click", () => {
    likes += 1;
    renderLikes();
});

comForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addComment(e.target.comment.value);
    e.target.comment.value = '';
});

fetch(imageUrl) // this url data is not matching Deliverables data. So I work on exactly this 'https://distinct-vaulted-freesia.glitch.me/image' was displayed in browser
.then((res) => res.json())
.then(renderImage);

function renderImage(data) {
    fgTitle.innerText = data.title;
    fgImage.src = data.image;
    likes = data.likes;
    renderLikes();
    setComments(data.comments);  
}
function renderLikes(){
    fgLikes.innerHTML = `${likes} likes`; // id: 338, likes: 20 was hard coded so when I refresh the page 20 likes automatically displayed
}

function setComments (comments){
    fgComments.innerHTML = '';
    comments.forEach((comment) => addComment(comment.content));
}

function addComment (comment) {
    const li = document.createElement("li");
    li.innerText = comment;
    fgComments.append(li);
}



function el(id) {
    return document.getElementById(id);
}