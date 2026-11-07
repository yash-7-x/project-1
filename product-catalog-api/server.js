const http = require('http');
const products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000,
        category: "Electronics"
    },
    {
        id: 2,
        name: "Phone",
        price: 20000,
        category: "Electronics"
    },
    {
        id: 3,
        name: "Headphones",
        price: 3000,
        category: "Accessories"
    }
];
function sendJSON(res, statusCode, data) {
    res.writeHead(statusCode, {
        "Content-Type": "application/json"
    });
    res.end(JSON.stringify(data));
}
const server = http.createServer((req, res) => {

    const url = new URL(req.url, "http://localhost:9000");

    console.log(`${req.method} ${url.pathname}`);

    if (url.pathname === "/" && req.method === "GET") {

        sendJSON(res, 200, {
            message: "Welcome to Product Catalog API"
        });

    }

    // HEA  LTH CHECK
    else if (url.pathname === "/health" && req.method === "GET") {

        sendJSON(res, 200, {
            status: "healthy"
        });

    }

    // GET ALL PRODUCTS
    else if (url.pathname === "/products" && req.method === "GET") {

        sendJSON(res, 200, products);

    }

    // GET A SINGLE PRODUCT
    else if (
        url.pathname.startsWith("/products/") &&
        req.method === "GET"
    ) {

        const id = Number(url.pathname.split("/")[2]);

        const product = products.find(p => p.id === id);

        if (!product) {

            sendJSON(res, 404, {
                error: "Product not found"
            });

        } else {

            sendJSON(res, 200, product);

        }

    }

    // ABOUT ROUTE
    else if (url.pathname === "/about" && req.method === "GET") {

        sendJSON(res, 200, {
            application: "Product Catalog API",
            version: "1.0.0"
        });

    }

    // UNKNOWN ROUTE OR METHOD
    else {

        sendJSON(res, 404, {
            error: "Route not found"
        });

    }

});
const PORT = 9000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});