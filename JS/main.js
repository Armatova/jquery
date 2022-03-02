// //!  селекторы JQuery
// //? селекторы по id
// let elemById = $("#title");
// console.log(elemById);

// //?селектор по классу
// let = elemsByClassName = $(".list");
// console.log(elemsByClassName);

// //? селекторы по ТЕГУ
// let = elemsByTagName = $("li");
// console.log(elemsByTagName);
// //?селектор по атрибуту
// let elem = $('[name="value"]');
// console.log(typeof elemById);

// elemById.css("color", "red");
// elemsByClassName.css("color", "blue");
// elemsByTagName.text("1");
// console.log(elemsByTagName[0]);

// for (let i = 0; i < elemsByTagName.length; i++) {
//   elemsByTagName[i].innerText = `item ${i + 1}`;
// }
// elemsByTagName.each((index, item) => {
//   console.log(item);
//   item.innerText = `item ${index + 1}`;
// });

// elemById.addClass("addedClass");
// console.log(elemById.hasClass("addedClass"));
// elemById.removeClass("addedClass");
// elemById.toggleClass("addedClass"); //?либо удаляет либо добавляет
// console.log(getComputedStyle(elemById[0]));
// console.log(elemById.width());
// console.log(elemById.height());

// let inp = $("input");
// inp.val("Hello");
// inp.attr("value", "changed value");
// inp.attr("disabled", "true");

// let img = $("img");
// img.hide(); //? скрывает элемент
// img.show(); //? показывает элемент
// img.toggle(); //? скрывает то что указано или же показывае то что скрыто
// img.toggle();

// img.fadeOut("slow");
// img.fadeIn("slow");
// img.slideUp(1000);
// img.slideDown(1000);

// setTimeout(() => {
//   console.log("hello setTimeOut");
// }, 4000);
// setInterval(() => {
//   console.log("Hello setInterval");
// }, 1000);

// setTimeout(() => {
//   img.css("transition", "all 3s ease");
//   img.css("opacity", "0%");
// }, 1000);
// setTimeout(() => {
//   img.css("transition", "all 3s ease");
//   img.css("opacity", "100%");
// }, 3000);

// img.removeAttr("src"); //? удаляет атрибут
// img.attr(
//   "src",
//   "https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204__480.jpg"
// ); //? добавляет картинку

// let container = $(".container");
// container.append("<h1>Append Elem</h1>");
// container.prepend("<h1>Prepend Elem</h1>");

// elemById.prependTo(container);
// elemById.appendTo(container);

// elemById.before("<span>Before content</span>");
// elemById.after("<span>After content</span>");
// elemById.remove();
// elemById.empty();

// elemById.html("<h1>HTML</h1>");
// elemById.text("text");

// for (let i = 1; i <= 5; i++) {
//   let clonedElem = elemById.clone();
//   $("body").append(clonedElem);
// }

// задание: отобразить карточки студентов, в которых будут выведены имена и kpi, у студентов с kpi больше 50 задний фон карточек зеленого цвета, у студентов с kpi меньше 50 задний фон карточек красного цвета
// решение
// let students = [
//   {
//     name: "Kate",
//     kpi: "100",
//   },
//   {
//     name: "Marina",
//     kpi: "100",
//   },
//   {
//     name: "Alina",
//     kpi: "10",
//   },
//   {
//     name: "Dan",
//     kpi: "100",
//   },
//   {
//     name: "Jonh",
//     kpi: "100",
//   },
//   {
//     name: "Mark",
//     kpi: "10",
//   },
//   {
//     name: "Boris",
//     kpi: "10",
//   },
// ];

// let container = $(".container");
// for (let i of students) {
//   if (i.kpi > 50) {
//     container.append(
//       `<div class="yellow"><span>${i.name}</span>${i.kpi}<span></span></div>`
//     );
//   } else if (i.kpi < 50) {
//     container.append(
//       `<div class="green"><span>${i.name}</span>${i.kpi}<span></span></div>`
//     );
//   }
// }
// $(".yellow").css("background-color", "yellow");
// $(".green").css("background-color", "green");
