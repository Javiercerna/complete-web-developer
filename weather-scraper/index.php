<?php

    $cityInvalidAlert = '';
    $forecastAlert = '';

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        if ($_POST['cityName'] == '') {
            $cityInvalidAlert = '<div class="alert alert-danger mt-5" role="alert">Please enter a valid city (e.g. London)</div>';
        }
        else {
            $forecast_html = file_get_contents('http://www.completewebdevelopercourse.com/locations/London');
        
            preg_match_all('/<span class="phrase">(.*?)<\/span>/s', $forecast_html, $matches);
            
            $forecast = $matches[0][0];
            
            $forecastAlert = '<div class="alert alert-success mt-5" role="alert">'.$forecast.'</div>';
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Weather Scraper</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="index.css">
</head>
<body class="text-center">
    
    <h1 class="mt-5">What's The Weather?</h1>
    <p>Enter the name of a city.</p>

    <div class="container">
        <div class="row">
            <div class="col-6 mx-auto">
                <form method="POST">
                    <div class="form-group mt-3 mb-3">
                        <input type="text" class="form-control" id="cityName" name="cityName" aria-describedby="cityHelp" placeholder="E.g. London, Tokyo">
                    </div>
                    <button type="submit" class="btn btn-primary mt-3">Submit</button>
                    <?php echo $cityInvalidAlert; echo $forecastAlert; ?>
                </form>
            </div>
        </div>
    </div>
    

    <!-- Scripts -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>