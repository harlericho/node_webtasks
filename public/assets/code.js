const app = new (function () {
  this.id = document.getElementById("id");
  this.title = document.getElementById("title");
  this.description = document.getElementById("description");
  this.autor = document.getElementById("autor");
  this.tbody = document.getElementById("tbody");
  this.listData = () => {
    fetch("/api/tasks")
      .then((response) => response.json())
      .then((data) => {
        this.tbody.innerHTML = "";
        if (data.length !== 0) {
          data.forEach((element) => {
            this.tbody.innerHTML += `
              <tr>
                  <td>${element.title}</td>
                  <td>${element.description}</td>
                  <td>${element.autor}</td>
                  <td>
                      <button class="btn btn-danger btn-sm" onclick="app.delete('${element._id}')">Delete</button>
                      <button class="btn btn-info text-white btn-sm" onclick="app.edit('${element._id}')">Edit</button>
                  </td>
              </tr>
          `;
          });
        } else {
          this.tbody.innerHTML += `
              <tr>
                  <td colspan="4" align="center">No found data</td>
              </tr>
          `;
        }
      })
      .catch((error) => console.error(error));
  };
  this.submit = () => {
    const info = {
      title: this.title.value,
      description: this.description.value,
      autor: this.autor.value,
    };
    if (this.id.value === "") {
      fetch("/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      })
        .then((response) => response.json())
        .then((data) => {
          alert(data.message);
          this.listData();
          this.new();
        })
        .catch((error) => console.error(error));
    } else {
      fetch("/api/tasks/" + this.id.value, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      })
        .then((response) => response.json())
        .then((data) => {
          alert(data.message);
          this.listData();
          this.new();
        })
        .catch((error) => console.error(error));
    }
  };
  this.edit = (id) => {
    fetch("/api/tasks/" + id, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.id.value = data._id;
        this.title.value = data.title;
        this.description.value = data.description;
        this.autor.value = data.autor;
        this.title.focus;
      })
      .catch((err) => console.log(err));
  };
  this.delete = (id) => {
    if (confirm("Are you sure you want to delete this record?")) {
      fetch("/api/tasks/" + id, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.message);
          this.listData();
        })
        .catch((err) => console.log(err));
    }
  };
  this.new = () => {
    this.id.value = "";
    this.title.value = "";
    this.description.value = "";
    this.autor.value = "";
    this.title.focus();
  };
})();
app.listData();
