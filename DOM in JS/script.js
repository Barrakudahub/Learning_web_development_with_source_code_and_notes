<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM in JavaScript</title>
</head>
<body>
    <div class="container">
        <div class="box">
            This is a box
        </div>
    </div>
    <script>
        document.title = "Hitoshi Barrakuda"
        console.log(document.title)
        console.log(document.body)
        document.body.style.backgroundColor = "purple";
        document.body.style.color = "white";

    </script>
</body>
</html>
