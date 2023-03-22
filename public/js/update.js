const updateFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#post-name').value.trim();
    const description = document.querySelector('#post-desc').value.trim();

    const url = this.location.href;
    const splitURL = url.toString().split("/");
    const id = splitURL[splitURL.length - 1];

    if (name && description && id) {
        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ name, description, id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to update post');
        }
    }
};

document
    .querySelector('.update-post-form')
    .addEventListener('submit', updateFormHandler);
