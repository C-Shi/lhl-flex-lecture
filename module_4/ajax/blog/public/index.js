$(document).ready(() => {

  /** Ex 1
   * When I click the Get More Post button
   * I should see a new post added to the post list,
   * with an incremented ID, a title and a post body
   */
  // When to Fire AJAX request --> When Get More Post button clicked
  $('button').on('click', function() {
    // send ajax here
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/posts/2',
      method: 'GET'
    }).then(response => {
      let $article = $(`
        <article>
          <header>Post # ${response.id}: ${response.title}</header>
          <p>${response.body}</p>
        </article>
      `)
      $('section').append($article)
    })
  })


  /** ************************************************************************************** */
  /** Ex 2
   * When I fill the form and click post
   * I should create a new post and added to the page
   * and the form should reset
   */

  // When to Fire AJAX request --> When Form is submitted
  $('form').on('submit', function(event) {
    event.preventDefault()
    $.ajax({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/posts',
      data: $(this).serialize()
    })
    .then(response => {
      let $article = $(`
        <article>
          <header>Post # ${response.id}: ${response.title}</header>
          <p>${response.body}</p>
        </article>
      `)
      $('section').append($article)
      $(this).trigger('reset')
    })
  })
})