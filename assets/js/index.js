$("#add_user").submit((event) => {
  alert("Data inserted successfully");
});

$("#update_user").submit((event) => {
  event.preventDefault();
  var unindexed_array = $("#update_user").serializeArray();
  // console.log(unindexed_array);
  var data = {};
  $.map(unindexed_array, (arr, index) => {
    data[arr["name"]] = arr["value"];
  });
  // console.log(data);
  var request = {
    url: `http://localhost:3000/api/users/${data.id}`,
    method: "PUT",
    data: data,
  };

  $.ajax(request).done((response) => {
    alert("Data Updated Successfully");
  });
});

if (window.location.pathname == "/") {
  $ondelete = $(".table tbody td a.delete");
  $ondelete.click(() => {
    var id = $ondelete.attr("data-id");
    // console.log(id);

    var request = {
      url: `http://localhost:3000/api/users/${id}`,
      method: "DELETE",
    };

    if (confirm("Do you really want to delete this record?")) {
      $.ajax(request).done((response) => {
        alert("Data deleted successfully!");
        location.reload();
      });
    }
  });
}
