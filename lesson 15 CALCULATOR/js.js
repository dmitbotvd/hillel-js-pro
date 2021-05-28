
// // try {
// //   console.log('try');
// //   let one = false;
// //   if (!one) {
// //     console.log('error1');
// //   }
// // } catch(err) {
// //   console.log('error');
// // }

// class Calc {
  
//   output(text) {
//     let output = document.querySelector('.output');
//     output.textContent = text;
//     // console.log(output);
//     return output;
//   }
//   createBtn() {
//     let main = document.querySelector('.button');
//     let arrBtn = this.arrayBtn();
    
//     arrBtn.map((e) => {
//       let div = document.createElement('div');
//       div.classList.add('item');
//       div.append(e);
//       div.addEventListener('click', () => {
//         console.log(this.output(e));
//       });
//       main.append(div);
//     });
    
//   }
//   arrayBtn() {
//     let number = ['1','2','3','4','5','6','7','8','9','0'];
//     let arg = ['+', '-', '='];
//     let fullArgBtn = number.concat(arg);
//     return fullArgBtn;
//   }
// }

// let calc = new Calc();
// calc.createBtn();

// // calc.output('asdasdasd');
  var signs = [
      '1', '2', '3', '+',
      '4', '5', '6', '-',
      '7', '8', '9', '/',
      '0', '=', '*', 'c', 
  ];
  var calc = document.getElementById('calc');
  var textArea = document.getElementById('inputVal');
  signs.forEach((sign) => {
      var signElement = document.createElement('div');
      signElement.className = 'btn';
      signElement.innerHTML = sign;
      calc.appendChild(signElement);
  });
function main() {
  try {
    document.querySelectorAll('#calc-wrap .btn').forEach(function (button) {
      // Добавляем действие, выполняемое при клике на любую кнопку
      button.addEventListener('click', onButtonClick);
  });
    function onButtonClick(e) {
      // e - MouseEvent (содержит информацию о клике)
      if (e.target.innerHTML === 'c') {
          // Если нажата кнопка "с", то стирает все из текстового поля
          textArea.innerHTML = '0';
      } else if (e.target.innerHTML === '=') {
          // Если нажата кнопка "=", то, приведя выражение
          // в текстовом поле к javascript, вычислить значение
          textArea.innerHTML = eval(textArea.innerHTML);
      } else if (textArea.innerHTML === '0') {
          // Если textarea содержит только "0", то
          // стереть "0" и записать
          // значения кнопки в текстовое поле
          textArea.innerHTML = e.target.innerHTML;
      } else {
          // Добавление значения кнопки в текстовое поле
          textArea.innerHTML += e.target.innerHTML;
      }
    }
    console.log(a);
  } catch(e) {
    throw new Error('не определена переменная');
    // console.log(e.name);
    // console.log(e.message);
    // console.log(e.stack);
  }
  finally {
    console.log('выполниться полюбому ');
  }
}
main();
