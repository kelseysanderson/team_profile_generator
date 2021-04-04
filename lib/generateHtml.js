const fs = require('fs');

//.................................array.
function generateHtml(managerCard, employeeCards){
    var header = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Mandali">


            <title>Team Profile Generator</title>
        </head>
        <body style = "background-color: #f4f3ea">
            <header>
                <div class="jumbotron jumbotron-fluid"  style = "border-bottom: 2px solid #1d2638; background: linear-gradient(to bottom, #4f5a70 0%, #333d51 100%); color:#f9f1f8; font-family: 'Mandali';">
                    <div class="container">
                    <h1 class="display-4">My Team</h1>
                    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>    
            </header>
            <main class = "container" >
                <section class="row justify-content-center">
                    <div class="col-12 col-md-9 mb-3">
                    <h2 style = "text-align: center; padding-bottom: 20px;">Meet Everyone:</h2>
            
                <section class="row justify-content-center">
                    <div id = "employee-card" class="col-12 col-sm-6 col-lg-4 mb-3">`
        var footer = `<div class="card" style = "box-shadow:10px 10px 2px 1px rgba(41, 75, 168, 0.2); border-radius: 5px;">
                            <div class = card-title class="card-title" style="padding: 10px 0px 10px 10px; border-bottom: 2px solid #8a6f17; background-color:#c29d23; color: #f7f5f2">
                                <h3>Name</h3>
                                <h4>Title</h4>
                            </div>
                            <div class="card-body">
                            <ul class="card-text">
                                <li>id</li>
                                <li>email</li>
                                <li>github</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                    </section>
                </div>
            </main>
        </body>
        </html>`

        var html = header + managerCard +footer

    fs.writeFile('./dist/index.html', html, (err) =>
        err ? console.error(err) : console.log('Success!')
    );
}

module.exports = generateHtml;