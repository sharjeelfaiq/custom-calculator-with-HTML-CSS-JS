let output = document.getElementById("output");

let buttons = Array.from(document.querySelectorAll(".button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        output.innerText = "";
        break;
      case "CE":
        output.innerText = output.innerText.slice(0, -1);
        break;
      case "=":
        try {
          output.innerText = eval(output.innerText);
        } catch (error) {
          output.innerText = "";
        }
        break;
      default:
        output.innerText += e.target.innerText;
        break;
    }
    window.onkeydown = function (e) {
      switch (e.keyCode) {
        case 8:
          output.innerText = output.innerText.slice(0, -1);
          break;
        case 13:
          try {
            output.innerText = eval(output.innerText);
          } catch (error) {
            output.innerText = "Error!";
          }
          break;
        case 27:
          output.innerText = "";
          break;
        case 96:
          output.innerText += "0";
          break;
        case 110:
          output.innerText += ".";
          break;
        case 97:
          output.innerText += "1";
          break;
        case 98:
          output.innerText += "2";
          break;
        case 99:
          output.innerText += "3";
          break;
        case 100:
          output.innerText += "4";
          break;
        case 101:
          output.innerText += "5";
          break;
        case 102:
          output.innerText += "6";
          break;
        case 103:
          output.innerText += "7";
          break;
        case 104:
          output.innerText += "8";
          break;
        case 105:
          output.innerText += "9";
          break;
        case 107:
          output.innerText += "+";
          break;
        case 109:
          output.innerText += "-";
          break;
        case 106:
          output.innerText += "*";
          break;
        case 111:
          output.innerText += "/";
          break;
        case 48:
          output.innerText += "0";
          break;
        case 49:
          output.innerText += "1";
          break;
        case 50:
          output.innerText += "2";
          break;
        case 51:
          output.innerText += "3";
          break;
        case 52:
          output.innerText += "4";
          break;
        case 53:
          output.innerText += "5";
          break;
        case 54:
          output.innerText += "6";
          break;
        case 55:
          output.innerText += "7";
          break;
        case 56:
          output.innerText += "8";
          break;
        case 57:
          output.innerText += "9";
          break;
        default:
          output.innerText += "";
          break;
      }
    };
  });
});
