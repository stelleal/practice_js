class Button {
	constructor(text, background, color) {
		this.text = text;
		this.background = background;
		this.color = color;
	}
	element() {
		const buttonElement = document.createElement('button');
		buttonElement.innerText = this.text;
		buttonElement.style.background = this.background;
		buttonElement.style.color = this.color;
		buttonElement.style.borderRadius = '4px';
		return buttonElement;
	}
	appendTo(target) {
		const targetElement = document.querySelector(target);
		targetElement.appendChild(this.element());
		return targetElement;
	}
	static lightBlueButton(text) {
		return new Button(text, 'lightblue', 'blue');
	}
}

Button.lightBlueButton('Azulzin').appendTo('body');
new Button('Vermelho', 'tomato', 'darkred').appendTo('body');
new Button('Roxo', 'orchid', 'indigo').appendTo('body');
new Button('Verde', 'lightgreen', 'darkgreen').appendTo('body');

// class Button {
// 	constructor(text, background, color) {
// 		this.text = text;
// 		this.background = background;
// 		this.color = color;
// 	}
// 	get element() {
//     const type = this._elementType || 'button'
// 		const buttonElement = document.createElement(type);
// 		buttonElement.innerText = this.text;
// 		buttonElement.style.background = this.background;
// 		buttonElement.style.color = this.color;
//     buttonElement.style.borderRadius = '4px'
// 		return buttonElement;
// 	}
//   set element(type) {
//     this._elementType = type;
//   }
// }

// const greenButton = new Button('Verde', 'lightgreen', 'darkgreen')
