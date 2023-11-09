// TODO: Refactor the class to a factory function.
// class Lesson {
//   constructor() {
//     this.title = 'Module 17 - Computer Science';
//     this.description = 'CS for JS';
//   }
//   information() {
//     console.log(this.title, this.description);
//   }
// }

const { title } = require("process")

// const csForJS = new Lesson();
// csForJS.information();

function lesson(title, description){
  let lessoninfo = {
    title: title,
    description: description

  }
  return {
    information: function(){
      console.log( lessoninfo.title, description)
    }
  }
}

const lessonplan = lesson('a title','a description')
lessonplan.information()
module.exports = lesson