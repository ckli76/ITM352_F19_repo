var user_products_quantity

app.get("/purchase", function(request, response)
{
    //Get quantity data from query string
    user_products_quantity = request.query;
    console.log(user_products_quantity);

    //validate quantities if not valid go back to purchase page
    response.redirect('login');
});

var qs = require('querystring'); //Node's qs = Querystring specifically request the querystring

theQueryString = qs.stringify(user_products_quantity)
response.redirect("/invoice.html?" + theQueryString)

// (".") =  current folder 

//table script
let params = (new URL(document.location)).searchParams;

outStr = "";

for (i=0; i<products.length; i++){
    thisParam = "quantity" + i;
    let qty = myParams.get(thisParam);
    if (qty != null)
    {
    
    }
}
