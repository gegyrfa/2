document.getElementById('i').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('ti lox');
});
const content = document.getElementById('content');
const paragraphs = content.querySelectorAll('p');
paragraphs.forEach((p) => {
    p.style.color = 'red';
});
const block = document.querySelector('.content');
block.style.display = 'none';
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
