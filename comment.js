const form = document.querySelector("#comment-form");
const commentInput = document.querySelector(".commentTextArea");
const commentList = document.querySelector(".list-group");
const firstCardBody = document.querySelector(".card-body")[0];
const secondCardBody = document.querySelector(".card-body")[1];

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addComment);
  secondCardBody && secondCardBody.addEventListener("click", deleteComment);
}
function addComment(e) {
  const newComment = commentInput.value.trim();

  addToDoToUI(newComment);

  e.preventDefault();
}
function addToDoToUI(newComment) {
  const listItem = document.createElement("li");
  const link = document.createElement("a");

  link.className = "delete-item";
  link.innerHTML = "<i class = 'fa fa-remove'></i>";

  listItem.className = "list-group-item d-flex justify-content-between";

  listItem.appendChild(document.createTextNode(newComment));
  listItem.appendChild(link);

  commentList.appendChild(listItem);
}
function deleteComment(e){


    if (e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove();
    }

}

