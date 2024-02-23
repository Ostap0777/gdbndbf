const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openModalBtn = document.querySelector('.btn-open')
const closeModalBtn = document.querySelector('.btn-close')


const openModal = function () {
	modal.classList.remove('hidden');
	overlay.classList.remove('hidden')
}

openModalBtn.addEventListener('click', openModal)


const closeModal = function () {
	modal.classList.add('hidden');
	overlay.classList.add('hidden')
}
closeModalBtn.addEventListener('click', closeModal)


overlay.addEventListener("click", closeModal);





     /* ==================1=============== */

	  function open () {
		let targetElement = document.querySelector('.foot__1');
		targetElement.classList.add('open');
	  }
  
	  document.querySelector('.btn-koshuk__delate').addEventListener('click', open)



	  function add () {
        let targetElement = document.querySelector('.foot__1');
		  targetElement.classList.remove('open')
	  }

	  document.querySelector('.foot__add').addEventListener('click', add)

	  let outsale = document.querySelector('.sale__number');
	  outres = 1;
function plus () {
	
	outres ++;
	outsale.textContent = outres

}

document.querySelector('.sale__plus').addEventListener('click', plus)



outr = outres ;
function minus () {

if (outres > 0) {
	outres--;
	outsale.textContent = outres;
}

}

document.querySelector('.sale__minus').addEventListener('click', minus)



/* ==================2====================== */
//btn-koshuk__delate2
//foot__2
//plus2
//number2
//minus2


function open2 () {
	let targetElement = document.querySelector('.foot__2');
	targetElement.classList.add('open');
  }

  document.querySelector('.btn-koshuk__delate2').addEventListener('click', open2)

  function add2 () {
	let targetElement = document.querySelector('.foot__2');
	targetElement.classList.remove('open')
}
document.querySelector('.foot__add2').addEventListener('click', add2)


let outsale2 = document.querySelector('.number2');
	  outres2 = 1;
function plus2 () {
	
	outres2 ++;
	outsale2.textContent = outres2;

}

document.querySelector('.plus2').addEventListener('click', plus2)



outr2 = outres2 ;
function minus2 () {

if (outres2 > 0) {
	outres2--;
	outsale2.textContent = outres2;
}

}

document.querySelector('.minus2').addEventListener('click', minus2)


   /* ================3================= */



	function open3 () {
		let targetElement = document.querySelector('.foot__3');
		targetElement.classList.add('open');
	  }
	
	  document.querySelector('.btn-koshuk__delate3').addEventListener('click', open3)
	
	  function add3 () {
		let targetElement = document.querySelector('.foot__3');
		targetElement.classList.remove('open')
	}
	document.querySelector('.foot__add3').addEventListener('click', add3)
	
	
	let outsale3 = document.querySelector('.number3');
		  outres3 = 1;
	function plus3 () {
		
		outres3 ++;
		outsale3.textContent = outres3;
	
	}
	
	document.querySelector('.plus3').addEventListener('click', plus3)
	
	
	
	outr3 = outres3 ;
	function minus3 () {
	
	if (outres3 > 0) {
		outres3--;
		outsale3.textContent = outres3;
	}
	
	}
	
	document.querySelector('.minus3').addEventListener('click', minus3)



	/* ========================================= */
	//cart-header__quantity   
	let cardHeader = document.querySelector('.cart-header__quantity') 
	resKoshuk = 0; 
	let clickFlag = false
function koshukNumber() {

	if(!clickFlag) {
     resKoshuk++
	  cardHeader.textContent = resKoshuk
	  clickFlag = true;
	}
}

	document.querySelector('.foot__add').addEventListener('click',koshukNumber);
	let clickFlag2 = false
	function koshukNumber2() {

		if(!clickFlag2) {
		  resKoshuk++
		  cardHeader.textContent = resKoshuk;
		  clickFlag2 = true
		}
	}
	
		document.querySelector('.foot__add2').addEventListener('click',koshukNumber2);

		document.querySelector('.foot__add').addEventListener('click',koshukNumber);
		let clickFlag3 = false


		function koshukNumber3() {
	
			if(!clickFlag3) {
			  resKoshuk++
			  cardHeader.textContent = resKoshuk;
			  clickFlag3 = true
			}
		}
		
			document.querySelector('.foot__add3').addEventListener('click',koshukNumber3)



	/* ========================================= */
      let removeKoshuk = () => {
			let btn1Remove = document.querySelector('.btn-koshuk__delate1');

		}

	/* ========================================= */







