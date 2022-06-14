$(() => {
  $.get("/api/properties")
    .then(({ properties })=> {
      properties.forEach(property => {
        $(`
          <section style="border: 1px solid black">
            <p>Property: ${property.title}<p>
            <img src="${property.thumbnail_photo_url}">
            <p>Price: ${property.cost_per_night}
          </section>
        `).appendTo('main')
      })
    })
});