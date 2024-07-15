// The code below ensures that students who are using CodeGrade will get credit
// for the code-along in Canvas; you can disregard i

document.addEventListener('DOMContentLoaded', function() {
    const counter = document.getElementById('counter');
    let count = 0;
    const plusBtn = document.getElementById('plus');
    const minusBtn = document.getElementById('minus');
    const likeBtn = document.getElementById('heart');
    const pauseBtn = document.getElementById('pause');
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentList = document.getElementById('list');
    const likes = {};

    // Timer functionality
    let timerInterval;

    function startCounter() {
        timerInterval = setInterval(function() {
            count++;
            counter.textContent = count;
        }, 1000);
    }

    startCounter();

    // Plus button functionality
    plusBtn.addEventListener('click', function() {
        count++;
        counter.textContent = count;
    });

    // Minus button functionality
    minusBtn.addEventListener('click', function() {
        count--;
        counter.textContent = count;
    });

    // Like button functionality
    likeBtn.addEventListener('click', function() {
        if (!likes[count]) {
            likes[count] = 1;
        } else {
            likes[count]++;
        }
        // Update display of likes here if needed
    });

    // Pause and resume functionality
    pauseBtn.addEventListener('click', function() {
        if (pauseBtn.textContent === 'pause') {
            clearInterval(timerInterval);
            plusBtn.disabled = true;
            minusBtn.disabled = true;
            likeBtn.disabled = true;
            commentInput.disabled = true; // Disable comment input if needed
            pauseBtn.textContent = 'resume';
        } else {
            startCounter();
            plusBtn.disabled = false;
            minusBtn.disabled = false;
            likeBtn.disabled = false;
            commentInput.disabled = false; // Enable comment input if needed
            pauseBtn.textContent = 'pause';
        }
    });

    // Comment functionality (assuming form submission adds comments to list)
    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const commentText = commentInput.value;
        const commentItem = document.createElement('li');
        commentItem.textContent = commentText;
        commentList.appendChild(commentItem);
        commentInput.value = '';
    });
});

