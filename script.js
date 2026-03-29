const mobiles = [
    {
        name: "iPhone 14",
        price: 69999,
        image: "https://imgs.search.brave.com/g7wOYW6vGxyDAg9_No5ok8aNcCbyDZWdem3tBKSmdgc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9mZG4u/Z3NtYXJlbmEuY29t/L2ltZ3Jvb3QvcmV2/aWV3cy8yMi9hcHBs/ZS1pcGhvbmUtMTQv/LTEyMjB4NTI2L2dz/bWFyZW5hXzAwMi5q/cGc",
        buy: "https://www.flipkart.com/search?q=iphone+14"
    },
    {
        name: "iPhone 13",
        price: 59999,
        image: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5",
        buy: "https://www.flipkart.com/search?q=iphone+13"
    },
    {
        name: "Samsung S23",
        price: 74999,
        image: "https://imgs.search.brave.com/BM2rfexQwGjEEe9pObucFIDA1YwY6GhIZW7iH43JcyQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/YW5kcm9pZGF1dGhv/cml0eS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMDMv/U2Ftc3VuZy1HYWxh/eHktUzIzLVVsdHJh/LXZzLUdhbGF4eS1T/MjMtcGxhY2VkLW9u/LWEtdGFibGUuanBn",
        buy: "https://www.flipkart.com/search?q=samsung+galaxy+s23"
    },
    {
        name: "Samsung A54",
        price: 32999,
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf",
        buy: "https://www.flipkart.com/search?q=samsung+galaxy+a54"
    },
    {
        name: "OnePlus 11",
        price: 56999,
        image: "https://imgs.search.brave.com/jB7al8ij9L3hjslORE07UJ3ESYWS7SnjKPDz1LemUIU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L1pW/emdtb0xDVFVBc01x/TFFDQTNHQ2IuanBn",
        buy: "https://www.flipkart.com/search?q=oneplus+11"
    },
    {
        name: "OnePlus Nord",
        price: 26999,
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd",
        buy: "https://www.flipkart.com/search?q=oneplus+nord"
    },
    {
        name: "Redmi Note 12",
        price: 15999,
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97",
        buy: "https://www.flipkart.com/search?q=redmi+note+12"
    },
    {
        name: "Realme Narzo",
        price: 17999,
        image: "https://imgs.search.brave.com/oGjH48RcfZBb1ZGX6CI_RgJwpnvNp0kCIC8xif12GDo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Z2l6bW9jaGluYS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjAvMDYvUmVhbG1l/LU5hcnpvLTYwMHg2/MDAuanBnP3g3MDQ2/MQ",
        buy: "https://www.flipkart.com/search?q=realme+narzo"
    },
    {
        name: "Vivo V27",
        price: 29999,
        image: "https://imgs.search.brave.com/0AU5rm3scBE9ht9NXnrkcIeGNYBwG4WavLzAZaVji64/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubW9uZXljb250/cm9sLmNvbS9zdGF0/aWMtbWNuZXdzLzIw/MjMvMDMvdml2by12/MjctcHJvLTkuanBn",
        buy: "https://www.flipkart.com/search?q=vivo+v27"
    },
    {
        name: "Oppo Reno 10",
        price: 32999,
        image: "https://imgs.search.brave.com/SYhj9JxSvCxa24cMkR2v3691g9W6IGVw2bQcdf0z8d0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzU1LzAw/L2Y0LzU1MDBmNDJm/OGQxMDI4NTQxYWEw/ZWUzNjNhMTdlZGU3/LmpwZw",
        buy: "https://www.flipkart.com/search?q=oppo+reno+10"
    }
];

const cards = document.getElementById("cards");

mobiles.forEach(m => {
    let card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${m.image}">
    <div class="cardContent">
        <h3>${m.name}</h3>
        <p class="price">₹${m.price}</p>
       <button class="btn"><a href="${m.buy}">Buy Now</a></button>
    </div>
`;

    cards.appendChild(card);
});



