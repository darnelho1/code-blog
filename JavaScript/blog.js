blogEntryStore = [];
count=1;

function Blog(title,category,author,authorUrl,publishedOn,body){
  this.title = title;
  this.category=category;
  this.author=author;
  this.authorUrl=authorUrl;
  this.publishedOn=publishedOn;
  this.body=body;
  this.id=count++;

  // this.rawData=[];
  //   blog.rawData.push(this);
    blogEntryStore.push(this);

}


Blog.prototype.toHTML = function () {
  $contentSection = $('#contentSection');

  $contentSection.append(
    "<article id=count" +this.id+ " class ='blogItem'>"+
    "<ul class='blogMeta'>"+
    "<li> Title : " + this.title + "</li>"+
    "<li> Category : " + this.category + "</li>"+
    "<li> Author : <a href='" + this.authorUrl + "''>" + this.author + "</a> </li>"+
    "<li> Published : " + this.publishedOn + "</li>" +
    "</ul>" + "<div class='bodyWrapper'>" + this.body + "</div>");
};

rawData.forEach(function(item){
  x = new Blog(item.title,item.category,item.author,item.authorUrl,item.publishedOn,item.body);
});


blogEntryStore.forEach(function(blog){
  blog.toHTML();
});

$(document).ready(function() {
  $('.blogItem').click(function(){
    $(this).toggleClass('blogItemGrow');
  });
});

// $(document).ready(function() {
//   blogitem = document.getElementById('contentSection');
//   console.log(blogitem);
//   scroll = new slimScroll(blogitem,{
//     // 'scrollBarFixedHeight':'400px',
//     'wrapperClass':'blogWrapper'
//   });
//   window.onresize = blogitem.resetValues;
// });


// $('#contentSection').scroll(function() {
//   scrollval = 0;
//   if
//   console.log($('#contentSection').scrollTop());
// });
