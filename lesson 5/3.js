let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
function concatArray(arr1, arr2) {
  let arrConcat = arr1.concat(arr2);
  console.log(arrConcat);
}
concatArray(student1Courses, student2Courses);