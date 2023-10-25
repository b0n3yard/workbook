// TODO: Create a class constructor named ForumItem that takes in 'authorName', 'text', and 'createdOn'.

// TODO: Setup BlogPost and Comment so they inherit their structure from ForumItem.
class BlogPost {
  constructor(authorName, title, text, createdOn) {
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.createdOn = createdOn;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment extends BlogPost{
  constructor(authorName, title, text, createdOn,reaction ) {
    super(authorName, title, text, createdOn )
    this.reaction = reaction;
  }
}

// TODO: Create a new object using the Comment class constructor.
class ForumItem extends Comment{

    constructor(authorName, title, text, createdOn,reaction){
      super(authorName, title, text, createdOn,reaction )
    }
}
// TODO: Create a new object using the BlogPost class constructor.

// TODO: Log both newly created BlogPost and Comment to the console.

const blog = new ForumItem('hello','hi','hithere',"555",'this')



blog.addComment('hi there')
console.log(blog)




