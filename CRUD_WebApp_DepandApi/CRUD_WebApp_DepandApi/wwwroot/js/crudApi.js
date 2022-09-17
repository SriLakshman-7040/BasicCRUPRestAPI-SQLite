
$.get("https://localhost:7029/api/PeopleDB", function (data, status) {
    if (data)
    {
        let code = "";
        for (let value in data)
        {
            code += "<tr>"
            code += "<td>" + data[value].sno + "</td>"
            code += "<td>" + data[value].name + "</td>"
            code += "<td>" + data[value].city + "</td>"
            code += "</tr>";
        }
        $("#bindingData").html(code);
    }
})