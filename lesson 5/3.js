let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
function searchRepeatArr(arg1, arg2) {
  for (let i = 0; i <= arg1.length - 1; i++) {
    for (let j = 0; j <= arg2.length - 1; j++) {
      if (arg1[i] === arg2[j]) {
        console.log('Повтор значения в 2х массивах ' + arg1[i], arg2[j]);
      }
    }
  }
}
searchRepeatArr(student1Courses, student2Courses);