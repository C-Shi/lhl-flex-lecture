$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();

        $.post('/users-ajax', $(this).serialize())
            .then((response) => {
                const row = `
                <tr>
                    <td>${response.id}</td>
                    <td>${response.name}</td>
                    <td>${response.age}</td>
                </tr>
                `;

                $('tbody').append(row);
                $(this).trigger("reset")
            })
    })
})