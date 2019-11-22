import React, { Component } from 'react';
// import "./style.scss";
import './style.css';
// import './styles.sass';

let arr = "1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122 123 124 125 126 127 128 129 130 131 132 133 134 135 136 137 138 139 140 141 142 143 144 145 146 147 148 149 150 151 152 153 154 155 156 157 158 159 160 161 162 163 164 165 166 167 168 169 170 171 172 173 174 175 176 177 178 179 180 181 182 183 184 185 186 187 188 189 190 191 192 193 194 195";
 let desc = ["The Michael in Damier Graphite canvas is a lightweight backpack combining style and comfort. Ideal for carrying a laptop, books and all essentials, it can be used for business or leisure.","A stylish and easy-to-wear messenger bag, the new District PM is the ideal companion for everyday life. With its elegant details, lightweight and surprisingly spacious interior, it's the perfect combination of functionality and elegance","A stylish and easy-to-wear messenger bag, the new District MM is the ideal companion for everyday life. With its elegant details, lightweight and surprisingly spacious interior, it's the perfect combination of functionality and elegance.","Bringing sophistication to the office, this contemporary briefcase in masculine Eclipse Monogram canvas with distinctive details takes business for pleasure. Enjoy the spacious inside compartments, savour the darker, modern take of our iconic Monogram motif.","Soft faux leather and nylon inner, fashion and durable men shoulder bag.  It features a full front flap with magnetic closure for easy access, an outside front compartment to store small items, a large interior pocket , 2 interior slip pockets ","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown"];
 let titles = ["Material  Damier Graphite Canvas","Material Damier Graphite Canvas","Monogram Eclipse Canvas","Briefcase Explorer","Shoulder Bag Business Man Messenger Brown by Alena ","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown","Unknown"];
 let harga = ["$2,560.00","$2,350.00","$1,635.00","$2,200.00 ","$20.89","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40","$40"];

class Cart extends Component {
  componentDidMount() {
    document.body.scrollTop = 0;
    document.querySelector('.menu').classList.remove('open');

  }

  render() {
    let nomor = Math.floor(Math.random() * 10) + 1
    let img, img1, img2, uri, titl1, titl2, titl3, harg1, harg2, harg3
    let naom = Math.floor(parseInt(nomor) / 5 ) + 1
    function generateRandom(maks) {
        return Math.floor(Math.random() * maks) + 1;
      }
    let r = generateRandom(desc.length);
  	if (parseInt(nomor) % 5 == 1) {
  		if (naom < 10) {
        img = <img className="image" src={"../sneakers_191107_000"+(naom).toString(10)+".jpg"}/>
        titl1 = titles[r-1]
        harg1 = harga[r-1]
        r = generateRandom(desc.length)
        titl2 = titles[r-1]
        harg2 = harga[r-1]
        r = generateRandom(desc.length)
        titl3 = titles[r-1]
        harg3 = harga[r-1]


        nomor = Math.floor(Math.random() * 10) + 1;
        naom = Math.floor(parseInt(nomor) / 5 )+1;
        img1 = <img className="image" src={"../sneakers_191107_000"+(naom).toString(10)+".jpg"}/>
        nomor = Math.floor(Math.random() * 10) + 1;
        naom = Math.floor(parseInt(nomor) / 5 )+1;
        img2 = <img className="image" src={"../sneakers_191107_000"+(naom).toString(10)+".jpg"}/>
  			uri = "sneakers_191107_000"+(naom).toString(10)+".jpg"
  	
  		}
  		
  		if (naom >= 10) {
        img = <img className="image" src={"../sneakers_191107_00"+(naom).toString(10)+".jpg"}/>
        titl1 = titles[r-1]
        harg1 = harga[r-1]
        r = generateRandom(desc.length)
        titl2 = titles[r-1]
        harg2 = harga[r-1]
        r = generateRandom(desc.length)
        titl3 = titles[r-1]
        harg3 = harga[r-1]


        nomor = Math.floor(Math.random() * 10) + 1;
        naom = Math.floor(parseInt(nomor) / 5 )+1;
        img1 = <img className="image" src={"../sneakers_191107_00"+(naom).toString(10)+".jpg"}/>
        nomor = Math.floor(Math.random() * 10) + 1;
        naom = Math.floor(parseInt(nomor) / 5 )+1;
        img2 = <img className="image" src={"../sneakers_191107_00"+(naom).toString(10)+".jpg"}/>
  			uri = "sneakers_191107_00"+(naom).toString(10)+".jpg"
  		}
  	}
  	if (parseInt(nomor) % 5 == 2) {
  		if (naom < 10) {
        img = <img className="image" src={"../Bag_191107_000"+(naom).toString(10)+".jpg"}/>
        titl1 = titles[r-1]
        harg1 = harga[r-1]
        r = generateRandom(desc.length)
        titl2 = titles[r-1]
        harg2 = harga[r-1]
        r = generateRandom(desc.length)
        titl3 = titles[r-1]
        harg3 = harga[r-1]


        nomor = Math.floor(Math.random() * 10) + 1;
        naom = Math.floor(parseInt(nomor) / 5 )+1;
        img1 = <img className="image" src={"../Bag_191107_000"+(naom).toString(10)+".jpg"}/>
        nomor = Math.floor(Math.random() * 10) + 1;
        naom = Math.floor(parseInt(nomor) / 5 )+1;
        img2 = <img className="image" src={"../Bag_191107_000"+(naom).toString(10)+".jpg"}/>
  			uri = "Bag_191107_000"+(naom).toString(10)+".jpg"
  	
  		}
  		
  		if (naom >= 10) {
        img = <img className="image" src={"../Bag_191107_00"+(naom).toString(10)+".jpg"}/>
        titl1 = titles[r-1]
        harg1 = harga[r-1]
        r = generateRandom(desc.length)
        titl2 = titles[r-1]
        harg2 = harga[r-1]
        r = generateRandom(desc.length)
        titl3 = titles[r-1]
        harg3 = harga[r-1]


        nomor = Math.floor(Math.random() * 10) + 1;
        naom = Math.floor(parseInt(nomor) / 5 )+1;
        img1 = <img className="image" src={"../Bag_191107_00"+(naom).toString(10)+".jpg"}/>
        nomor = Math.floor(Math.random() * 10) + 1;
        naom = Math.floor(parseInt(nomor) / 5 )+1;
        img2 = <img className="image" src={"../Bag_191107_00"+(naom).toString(10)+".jpg"}/>
  			uri = "Bag_191107_00"+(naom).toString(10)+".jpg"
  		}
  	}
  	if (parseInt(nomor) % 5 == 3) {
  		if (naom < 10) {
        img = <img className="image" src={"../Hat_191107_000"+(naom).toString(10)+".jpg"}/>
        titl1 = titles[r-1]
        harg1 = harga[r-1]
        r = generateRandom(desc.length)
        titl2 = titles[r-1]
        harg2 = harga[r-1]
        r = generateRandom(desc.length)
        titl3 = titles[r-1]
        harg3 = harga[r-1]


        nomor = Math.floor(Math.random() * 10) + 1;
        naom = Math.floor(parseInt(nomor) / 5 )+1;
        img1 = <img className="image" src={"../Hat_191107_000"+(naom).toString(10)+".jpg"}/>
        nomor = Math.floor(Math.random() * 10) + 1;
        naom = Math.floor(parseInt(nomor) / 5 )+1;
        img2 = <img className="image" src={"../Hat_191107_000"+(naom).toString(10)+".jpg"}/>
  			uri = "Hat_191107_000"+(naom).toString(10)+".jpg"
  	
  		}
  		
  		if (naom >= 10) {
        img = <img className="image" src={"../Hat_191107_00"+(naom).toString(10)+".jpg"}/>
        titl1 = titles[r-1]
        harg1 = harga[r-1]
        r = generateRandom(desc.length)
        titl2 = titles[r-1]
        harg2 = harga[r-1]
        r = generateRandom(desc.length)
        titl3 = titles[r-1]
        harg3 = harga[r-1]


        nomor = Math.floor(Math.random() * 10) + 1;
        naom = Math.floor(parseInt(nomor) / 5 )+1;
        img1 = <img className="image" src={"../Hat_191107_00"+(naom).toString(10)+".jpg"}/>
        nomor = Math.floor(Math.random() * 10) + 1;
        naom = Math.floor(parseInt(nomor) / 5 )+1;
        img2 = <img className="image" src={"../Hat_191107_00"+(naom).toString(10)+".jpg"}/>
  			uri = "Hat_191107_00"+(naom).toString(10)+".jpg"
  		}
  	}
  	if (parseInt(nomor) % 5 == 4) {
  		if (naom < 10) {
        img = <img className="image" src={"../Watch_191107_000"+(naom).toString(10)+".jpg"}/>
        titl1 = titles[r-1]
        harg1 = harga[r-1]
        r = generateRandom(desc.length)
        titl2 = titles[r-1]
        harg2 = harga[r-1]
        r = generateRandom(desc.length)
        titl3 = titles[r-1]
        harg3 = harga[r-1]


        nomor = Math.floor(Math.random() * 10) + 1;
        naom = Math.floor(parseInt(nomor) / 5 )+1;
        img1 = <img className="image" src={"../Watch_191107_000"+(naom).toString(10)+".jpg"}/>
        nomor = Math.floor(Math.random() * 10) + 1;
        naom = Math.floor(parseInt(nomor) / 5 )+1;
        img2 = <img className="image" src={"../Watch_191107_000"+(naom).toString(10)+".jpg"}/>
  			uri = "Watch_191107_000"+(naom).toString(10)+".jpg"
  	
  		}
  		
  		if (naom >= 10) {

        img = <img className="image" src={"../Watch_191107_00"+(naom).toString(10)+".jpg"}/>
        titl1 = titles[r-1]
        harg1 = harga[r-1]
        r = generateRandom(desc.length)
        titl2 = titles[r-1]
        harg2 = harga[r-1]
        r = generateRandom(desc.length)
        titl3 = titles[r-1]
        harg3 = harga[r-1]


        nomor = Math.floor(Math.random() * 10) + 1;
        naom = Math.floor(parseInt(nomor) / 5 )+1;
        img1 = <img className="image" src={"../Watch_191107_00"+(naom).toString(10)+".jpg"}/>
        nomor = Math.floor(Math.random() * 10) + 1;
        naom = Math.floor(parseInt(nomor) / 5 )+1;
        img2 = <img className="image" src={"../Watch_191107_00"+(naom).toString(10)+".jpg"}/>
  			uri = "Watch_191107_00"+(naom).toString(10)+".jpg"
  		}
  	}
  	if (parseInt(nomor) % 5 == 0) {
  		if (naom < 10) {
        img = <img className="image" src={"../Belt_191107_000"+(naom).toString(10)+".jpg"}/>
        titl1 = titles[r-1]
        harg1 = harga[r-1]
        r = generateRandom(desc.length)
        titl2 = titles[r-1]
        harg2 = harga[r-1]
        r = generateRandom(desc.length)
        titl3 = titles[r-1]
        harg3 = harga[r-1]


        nomor = Math.floor(Math.random() * 10) + 1;
        naom = Math.floor(parseInt(nomor) / 5 )+1;
        img1 = <img className="image" src={"../Belt_191107_000"+(naom).toString(10)+".jpg"}/>
        nomor = Math.floor(Math.random() * 10) + 1;
        naom = Math.floor(parseInt(nomor) / 5 )+1;
        img2 = <img className="image" src={"../Belt_191107_000"+(naom).toString(10)+".jpg"}/>
  			uri = "Belt_191107_000"+(naom).toString(10)+".jpg"
  	
  		}
  		
  		if (naom >= 10) {
        img = <img className="image" src={"../Belt_191107_00"+(naom).toString(10)+".jpg"}/>
        titl1 = titles[r-1]
        harg1 = harga[r-1]
        r = generateRandom(desc.length)
        titl2 = titles[r-1]
        harg2 = harga[r-1]
        r = generateRandom(desc.length)
        titl3 = titles[r-1]
        harg3 = harga[r-1]


        nomor = Math.floor(Math.random() * 10) + 1;
        naom = Math.floor(parseInt(nomor) / 5 )+1;
        img1 = <img className="image" src={"../Belt_191107_00"+(naom).toString(10)+".jpg"}/>
        nomor = Math.floor(Math.random() * 10) + 1;
        naom = Math.floor(parseInt(nomor) / 5 )+1;
        img2 = <img className="image" src={"../Belt_191107_00"+(naom).toString(10)+".jpg"}/>
  			uri = "Belt_191107_00"+(naom).toString(10)+".jpg"
  		}
      }
      
    return (
      <div className="loginWrapper">
      <h2>Cart</h2>
      <br/>
      <div className="cont" style={{display: 'flex'}}>
        <div>{img}
        <h3>{titl1}</h3>
        <h5>{harg1}</h5>
        </div>
        <div>{img2}
        <h3>{titl2}</h3>
        <h5>{harg2}</h5>
        </div>
        <div>{img1}
        <h3>{titl3}</h3>
        <h5>{harg3}</h5>
        </div>
        </div>
      </div>
    );
  }
}

export default Cart;
