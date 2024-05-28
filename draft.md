<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="./styles.css">
    </head>
    <body>
        <table class="pretty-table">
            <thead>
                <tr>
                    <th>
                        F.I.O.
                    </th>
                    <th>
                        Tug'ulgan sana
                    </th>
                    <th>
                        Jinsi
                    </th>
                    <th>
                        Bajarish
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                       Muzaffar Mamatmurodov
                    </td>
                    <td>
                        25.01.2003
                    </td>
                    <td>
                        Erkak
                    </td>
                    <td>
                        <a href="">O'zgartirish</a>
                        <a href="">O'chirish</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </body>
</html>



.pretty-table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 18px;
    text-align: left;
}
.pretty-table th, .pretty-table td {
    padding: 12px 15px;
    border-bottom: 1px solid #ddd;
    border-left: 20px solid lightgrey;
}
.pretty-table th {
    background-color: #f2f2f2;
}
.pretty-table a {
    margin-right: 10px;
    color: #007BFF;
    text-decoration: none;
}
.pretty-table a:hover {
    text-decoration: underline;
}
@media (max-width: 600px) {
    .pretty-table, .pretty-table thead, .pretty-table tbody, .pretty-table th, .pretty-table td, .pretty-table tr {
        display: block;
    }
    .pretty-table thead tr {
        position: absolute;
        top: -9999px;
        left: -9999px;
    }
    .pretty-table tr {
        margin: 0 0 1rem 0;
    }
    .pretty-table td {
        border: none;
        position: relative;
        padding-left: 50%;
        text-align: right;
    }
    .pretty-table td::before {
        content: attr(data-label);
        position: absolute;
        left: 0;
        width: 50%;
        padding-left: 15px;
        font-weight: bold;
        text-align: left;
    }
}