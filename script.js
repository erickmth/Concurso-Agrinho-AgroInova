// Importando o Firestore
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
const db = getFirestore();

// Adicionar novo tópico
const newTopicForm = document.getElementById('new-topic-form');
newTopicForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const author = document.getElementById('topic-author').value;
  const title = document.getElementById('topic-title').value;
  const content = document.getElementById('topic-content').value;

  db.collection('topics').add({
    title: title,
    content: content,
    author: author,
    date: new Date().toLocaleDateString()
  })
  .then((docRef) => {
    console.log("Tópico adicionado com ID:", docRef.id);
    // Limpar formulário e atualizar lista de tópicos
    newTopicForm.reset();
    renderTopics();
  })
  .catch((error) => {
    console.error("Erro ao adicionar tópico:", error);
  });
});

// Renderizar tópicos
function renderTopics() {
  const topicsList = document.getElementById('topics-list');
  topicsList.innerHTML = '';

  db.collection('topics').get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const topic = doc.data();
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <a href="#">${topic.title}</a>
        <span class="post-author">por ${topic.author}</span>
      `;
      topicsList.appendChild(listItem);
    });
  })
  .catch((error) => {
    console.error("Erro ao recuperar tópicos:", error);
  });
}

// Renderizar tópicos na inicialização
renderTopics();