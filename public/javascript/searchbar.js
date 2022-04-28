function searchDishes() {
    var input, search, located, table, tr, th, i, j;
    input = document.getElementById("dishInput");
    search = input.value.toUpperCase();
    table = document.getElementById("dishTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        th = tr[i].getElementsByTagName("th");
        for (j = 0; j < th.length; j++) {
            if (th[j].innerHTML.toUpperCase().indexOf(search) > -1) {
                located = true;
            }
        }
        if (located) {
            tr[i].style.display = "";
            located = false;
        } else {
            tr[i].style.display = "none";
        }
    }
}