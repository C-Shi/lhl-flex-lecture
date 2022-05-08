$(document).ready(() => {

  /** Ex 1
   * When I click the Get More Post button
   * I should see a new post added to the post list,
   * with an incremented ID, a title and a post body
   */
  // When to Fire AJAX request --> When Get More Post button clicked
  $('button').on('click', function() {
    getPost()
      .then(post => addPost(post))
  })

  // Where and what to send Request --> Send a get request to JSONPlaceholder to retrieve a post
  let index = 1;

  const getPost = () => {
    const id = ++index
    return $.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }

  // What to do on receiving response --> Generate a new POST element and add to the page
  const addPost = (post) => {
    const $article = $(`
      <article>
        <header>Post # ${post.id}: ${post.title}</header>
        <p>${post.body}</p>
      </article>
    `);

    $('section').append($article)
  }

  /** ************************************************************************************** */
  /** Ex 2
   * When I fill the form and click post
   * I should create a new post and added to the page
   * and the form should reset
   */

  // When to Fire AJAX request --> When Form is submitted
  $('form').on('submit', function(event) {
    event.preventDefault();
    const data = $(this).serialize()
    sendPost(data)
      .then(addPost)
      .then(resetForm)
  })

  // Where and what to send Request --> Send a POST request to JSONPlaceholder to with body
  const sendPost = (data) => {
    return $.post('https://jsonplaceholder.typicode.com/posts', data)
  }

  // What to do on receiving response --> Generate a new POST element from response, add to page and reset form
  const resetForm = () => {
    $('form').trigger('reset')
  }
})