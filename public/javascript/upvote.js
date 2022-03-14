async function upvoteClickHandler(event) {
    event.preventDefault();
    // takes URL and splits it into sub arrays separated with "/"
    const id = window.location.toString().split('/')[
        // makes index the length of this array - 1 to get the last index number
        window.location.toString().split('/').length - 1
    ];   
    
    const response = await fetch('/api/posts/upvote', {
            method: 'PUT',
            body: JSON.stringify({
                post_id: id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.upvote-btn').addEventListener('click', upvoteClickHandler);