  var products = [
        {
          id: "100",
          name: "iPhone 4S",
          brand: "Apple",
          os: "iOS",
        },
        {
          id: "101",
          name: "Moto X",
          brand: "Motorola",
          os: "Android",
        },
        {
          id: "102",
          name: "iPhone 6",
          brand: "Apple",
          os: "iOS",
        },
        {
          id: "103",
          name: "Samsung Galaxy S",
          brand: "Samsung",
          os: "Android",
        },
        {
          id: "104",
          name: "Google Nexus",
          brand: "ASUS",
          os: "Android",
        },
        {
          id: "105",
          name: "Surface",
          brand: "Microsoft",
          os: "Windows",
        },
      ];
      $(document).ready(function () {
          display();

          
        $("#os,#brand").on("change", function () {
          var OS = $("#os").find("option:selected").val();
        //   console.log(OS);
          var BRAND = $("#brand").find("option:selected").val();
        //   console.log(BRAND);
          SearchData(OS, BRAND);
        });

        //Search Function
        $("#searching").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#table11 tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  //Remove Function
  $(document).on("click", ".remove", function () {
          var id = this.id;
          $(`#${id}`).parent().hide();
        });
      });

      //filter By Selector Funtion
      function SearchData(OS, BRAND) {
        if (OS.toUpperCase() == "ALL" && BRAND.toUpperCase() == "ALL") {
          $("#table11 tbody tr").show();
        } else {
          $("#table11 tbody tr:has(td)").each(function () {
            var rowOS = $.trim($(this).find("td:eq(3)").text());
            console.log(rowOS);
            var rowBRAND = $.trim($(this).find("td:eq(2)").text());
            console.log(rowBRAND);
            if (OS.toUpperCase() != "ALL" && BRAND.toUpperCase() != "ALL") {
              if (
                rowOS.toUpperCase() == OS.toUpperCase() &&
                rowBRAND == BRAND
              ) {
                $(this).show();
              } else {
                $(this).hide();
              }
            } else if (
              $(this).find("td:eq(1)").text() != "" ||
              $(this).find("td:eq(1)").text() != ""
            ) {
              if (OS != "all") {
                if (rowOS.toUpperCase() == OS.toUpperCase()) {
                  $(this).show();
                } else {
                  $(this).hide();
                }
              }
              if (BRAND != "all") {
                if (rowBRAND == BRAND) {
                  $(this).show();
                } else {
                  $(this).hide();
                }
              }
            }
          });
        }
      }
      //dynamic table head
      var head = `<tr>
        <th>id</th>
        <th>name</th>
        <th>brand</th>
        <th>os</th>
        <th>Remove</th>
    </tr>`;
      function display() {
          //dynamic table data or td of table using template string method
        var sheet = ``;
        products.forEach((element) => {
            sheet += ` <tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.brand}</td>
        <td>${element.os}</td>
        <td class="remove" id="${element.id}">X</td>
      </tr>`;
        });
        document.getElementById("table11").innerHTML= head + sheet;
      }