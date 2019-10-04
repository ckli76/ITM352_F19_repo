var item1 = 'Nuka-Cola';
var quantity1 = 11;
var price1 = 2.99;
var extended_price1 = quantity1 * price1;

var item2 = 'Nuka-Grape';
var quantity2 = 3;
var price2 = 3.99;
var extended_price2 = quantity2 * price2;

var item3 = 'Nuka-Cherry';
var quantity3 = 2;
var price3 = 5.99;
var extended_price3 = quantity2 * price2;

var item4 = 'Nuka-Cola Dark';
var quantity4 = 5;
var price4 = 9.99;
var extended_price4 = quantity4 * price4;


var item5 = 'Nuka-Cola Quantum';
var quantity5 = 1;
var price5 = 29.99;
var extended_price5 = quantity5 * price5;

var subtotal = extended_price1 + extended_price2 + extended_price3 + extended_price4 + extended_price5;

var taxrate = 0.0575;
var taxpercent = "5.75" + "%";
var salestax = (subtotal * taxrate).toFixed(2);
var shipping = 1.99
if (subtotal >= 25 && subtotal <= 50) {
    shipping = 2.99;
}
    else if (subtotal > 100 && subtotal <= 150) {
        shipping = 5.99;
    }
        else if (subtotal > 150) {
            shipping = 7.99
        };

var grandtotal = (Number(subtotal) + Number(salestax + Number(shipping))).toFixed(2)

document.write("Item: " + item1 + "<br>" + "Quantity: " + quantity1 + "<br>" + "Price: $" + price1 + "<br>" + "Extended Price: $" + extended_price1 + "<br>" + "<br>");

document.write("Item: " + item2 + "<br>" + "Quantity: " + quantity2 + "<br>" + "Price: $" + price2 + "<br>" + "Extended Price: $" + extended_price2 + "<br>" + "<br>");

document.write("Item: " + item3 + "<br>" + "Quantity: " + quantity3 + "<br>" + "Price: $" + price3 + "<br>" + "Extended Price: $" + extended_price3 + "<br>" + "<br>");

document.write("Item: " + item4 + "<br>" + "Quantity: " + quantity4 + "<br>" + "Price: $" + price4 + "<br>" + "Extended Price: $" + extended_price4 + "<br>" + "<br>");

document.write("Item: " + item5 + "<br>" + "Quantity: " + quantity5 + "<br>" + "Price: $" + price5 + "<br>" + "Extended Price: $" + extended_price5 + "<br>" + "<br>");

document.write("Subtotal: $" + subtotal + "<br>" + "<br>");

document.write("Sales Tax: $" + salestax + "<br>" + "<br>");

document.write("Shipping: $" + shipping + "<br>" + "<br>");

document.write("Grand Total: " + `<strong> $${(Number(subtotal) + Number(salestax) + Number(shipping)).toFixed(2)} </strong>`);

document.write("<br>" + "<br>")

document.write(
"<div>" + 
    "<table border=\"2\">" +
        "<tbody>" + 
            "<tr>" +
                "<th style=\"text-align: center;\" width=\"43%\">" + "Item" + "</th>" +
                "<th style=\"text-align: center;\" width=\"11%\">" + "Quantity" + "</th>" +
                "<th style=\"text-align: center;\" width=\"13%\">" + "Price" + "</th>" +
                "<th style=\"text-align: center;\" width=\"54%\">" + "Extended Price" + "</th>" +
            "</tr>" +
            "</th>" +
            "</tr>" +
            "<tr>" +
                "<td width=\"43%\">" + item1 + "</td>" +
                "<td align=\"center\" width=\"11%\">" + quantity1 + "</td>" +
                "<td width=\"13%\">" + price1 + "</td>" +
                "<td width=\"54%\">" + extended_price1 + "</td>" +
            "</tr>" + 
            "<tr>" +
                "<td width=\"43%\">" + item2 + "</td>" +
                "<td align=\"center\" width=\"11%\">" + quantity2 + "</td>" +
                "<td width=\"13%\">" + price2 + "</td>" +
                "<td width=\"54%\">" + extended_price2 + "</td>" +
            "</tr>" + 
	    "<tr>" +
                "<td width=\"43%\">" + item3 + "</td>" +
                "<td align=\"center\" width=\"11%\">" + quantity3 + "</td>" +
                "<td width=\"13%\">" + price3 + "</td>" +
                "<td width=\"54%\">" + extended_price3 + "</td>" +
            "</tr>" +  
	    "<tr>" +
                "<td width=\"43%\">" + item4 + "</td>" +
                "<td align=\"center\" width=\"11%\">" + quantity4 + "</td>" +
                "<td width=\"13%\">" + price4 + "</td>" +
                "<td width=\"54%\">" + extended_price4 + "</td>" +
            "</tr>" +   
	    "<tr>" +
                "<td width=\"43%\">" + item5 + "</td>" +
                "<td align=\"center\" width=\"11%\">" + quantity5 + "</td>" +
                "<td width=\"13%\">" + price5 + "</td>" +
                "<td width=\"54%\">" + extended_price5 + "</td>" +
            "</tr>" + 
            "</tr>" +  
	    "<tr>" +
                "<td colspan=\"4\" width=\"100%\">" + "&nbsp;" + "</td>" +
    	    "</tr>" +
      	    "<tr>" +
                "<td style=\"text-align: center;\" colspan=\"3\" width=\"67%\">" + "Sub-total" + "</td>" +
      		 "<td width=\"54%\">" + subtotal + "</td>" +
    	    "</tr>" +
    	    "<tr>" +
      		"<td style=\"text-align: center;\" colspan=\"3\" width=\"67%\">" + "<span style=\"font-family: arial;\">" + "Tax @" + taxpercent + "</span>" + "</td>" +
      		"<td width=\"54%\">" + salestax + "</td>" +
            "</tr>" +
            "<tr>" +
            "<td style=\"text-align: center;\" colspan=\"3\" width=\"67%\">" + "<span style=\"font-family: arial;\">" + "Shipping" + "</span>" + "</td>" +
      		"<td width=\"54%\">" + shipping + "</td>" +
            "</tr>" +
    	    "<tr>" +
      		"<td style=\"text-align: center;\" colspan=\"3\" width=\"67%\">" + "<strong>" + "Grand Total" + "</strong>" + "</td>" +
      		"<td width=\"54%\">" + "<strong>" + grandtotal + "</strong>" + "</td>" +
    	    "</tr>" +
        "</tbody>" +
    "</table>" +
"</div>");

