import Click from './Modules/Click.js';

const Menu = new Click('.BtnMobile','.Navigation');
Menu.init();

const Cart = new Click('.CartBtn', '.Buys');
Cart.init();


import ChangeImg from './Modules/Changeimg.js';

const imgChange = new ChangeImg('.MainImages img','.Previews img');
imgChange.init();

import AcountProduct from './Modules/AcountProducts.js';
const acountProduct = new AcountProduct('.PlusLess img',"#AddCart", '#Amount')
acountProduct.init();