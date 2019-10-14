var product_quantities = [11, 3, 2, 5, 1];

var item1 = 'Nuka-Cola';
var quantity1 = 11;
var price1 = 2.99;
var extended_price1 = quantity1 * price1;

var product1 = {item1:'Nuka-Cola',
                quantity1: product_quantities[0],
                price1: 2.99,
                SKU: "1234"
            };

var item2 = 'Nuka-Grape';
var quantity2 = 3;
var price2 = 3.99;
var extended_price2 = quantity2 * price2;

var product2 = {item2: 'Nuka-Grape',
                quantity2: product_quantities[1],
                price2: 3.99
            }

var item3 = 'Nuka-Cherry';
var quantity3 = 2;
var price3 = 5.99;
var extended_price3 = quantity2 * price2;

var product3 = {item3:'Nuka-Cherry',
                quantity3: product_quantities[2],
                price3: 5.99
            }

var item4 = 'Nuka-Cola Dark';
var quantity4 = 5;
var price4 = 9.99;
var extended_price4 = quantity4 * price4;

var product4 = {item4: 'Nuka-Cola Dark',
                quantity4: product_quantities[3],
                price4: 9.99
            }

var item5 = 'Nuka-Cola Quantum';
var quantity5 = 1;
var price5 = 29.99;
var extended_price5 = quantity5 * price5;

var product5 = {item5: 'Nuka-Cola Quantum',
                quantity5: product_quantities[4],
                price5: 29.99
            }

var subtotal = extended_price1 + extended_price2 + extended_price3 + extended_price4 + extended_price5;

var taxrate = 0.0575;
var taxpercent = "5.75" + "%";
var salestax = (subtotal * taxrate).toFixed(2);

var grandtotal = (Number(subtotal) + Number(salestax)).toFixed(2)

document.write("Item: " + item1 + "<br>" + "Quantity: " + quantity1 + "<br>" + "Price: $" + price1 + "<br>" + "Extended Price: $" + extended_price1 + "<br>" + "<br>");

document.write("Item: " + item2 + "<br>" + "Quantity: " + quantity2 + "<br>" + "Price: $" + price2 + "<br>" + "Extended Price: $" + extended_price2 + "<br>" + "<br>");

document.write("Item: " + item3 + "<br>" + "Quantity: " + quantity3 + "<br>" + "Price: $" + price3 + "<br>" + "Extended Price: $" + extended_price3 + "<br>" + "<br>");

document.write("Item: " + item4 + "<br>" + "Quantity: " + quantity4 + "<br>" + "Price: $" + price4 + "<br>" + "Extended Price: $" + extended_price4 + "<br>" + "<br>");

document.write("Item: " + item5 + "<br>" + "Quantity: " + quantity5 + "<br>" + "Price: $" + price5 + "<br>" + "Extended Price: $" + extended_price5 + "<br>" + "<br>");

document.write("Subtotal: " + subtotal + "<br>" + "<br>");

document.write("Sales Tax: " + salestax + "<br>" + "<br>");

document.write("Grand Total: " + `<strong> ${(Number(subtotal) + Number(salestax)).toFixed(2)} </strong>`);

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
            "<tr>" +
                "<td width=\"43%\">" + product1.item1 + "</td>" +
                "<td align=\"center\" width=\"11%\">" + product1.quantity1 + "</td>" +
                "<td width=\"13%\">" + product1.price1 + "</td>" +
                "<td width=\"54%\">" + extended_price1 + "</td>" +
            "</tr>" + 
            "<tr>" +
                "<td width=\"43%\">" + product2.item2 + "</td>" +
                "<td align=\"center\" width=\"11%\">" + product2.quantity2 + "</td>" +
                "<td width=\"13%\">" + product2.price2 + "</td>" +
                "<td width=\"54%\">" + extended_price2 + "</td>" +
            "</tr>" + 
	    "<tr>" +
                "<td width=\"43%\">" + product3.item3 + "</td>" +
                "<td align=\"center\" width=\"11%\">" + product3.quantity3 + "</td>" +
                "<td width=\"13%\">" + product3.price3 + "</td>" +
                "<td width=\"54%\">" + extended_price3 + "</td>" +
            "</tr>" +  
	    "<tr>" +
                "<td width=\"43%\">" + product4.item4 + "</td>" +
                "<td align=\"center\" width=\"11%\">" + product4.quantity4 + "</td>" +
                "<td width=\"13%\">" + product4.price4 + "</td>" +
                "<td width=\"54%\">" + extended_price4 + "</td>" +
            "</tr>" +   
	    "<tr>" +
                "<td width=\"43%\">" + product5.item5 + "</td>" +
                "<td align=\"center\" width=\"11%\">" + product5.quantity5 + "</td>" +
                "<td width=\"13%\">" + product5.price5 + "</td>" +
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
      		"<td style=\"text-align: center;\" colspan=\"3\" width=\"67%\">" + "<strong>" + "Grand Total" + "</strong>" + "</td>" +
      		"<td width=\"54%\">" + "<strong>" + grandtotal + "</strong>" + "</td>" +
    	    "</tr>" +
        "</tbody>" +
    "</table>" +
"</div>");

