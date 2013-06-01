var pages = [
{lesson: 1,
    text: 
        "<p> One easy way to get started at programming is to examine some typical interactions with an interpreter for the Scheme dialect of Lisp. Imagine that you are sitting at a computer terminal. You type an expression, and the interpreter responds by displaying the result of its evaluating that expression.\
        </p>\
        <p> One kind of primitive expression you might type is a number. (More precisely, the expression that you type consists of the numerals that represent the number in base 10.) If you present Lisp with a number\
        </p>\
        <code>486</code>\
        <p>the interpreter will respond by printing\
        </p>\
        <code>486</code>"
},
{lesson: 2, 
    text: "<p> Expressions representing numbers may be combined with an expression representing a primitive procedure (such as + or *) to form a compound expression that represents the application of the procedure to those numbers. For example:</p>\
<pre>(+ 137 349)<br />\
486<br />\
(- 1000 334)<br />\
666<br />\
(* 5 99)<br />\
495<br />\
(/ 10 5)<br />\
2<br />\
(+ 2.7 10)<br />\
12.7</code>\
</pre>\
        <p>Expressions such as these, formed by delimiting a list of expressions within parentheses in order to denote procedure application, are called combinations. The leftmost element in the list is called the operator, and the other elements are called operands. The value of a combination is obtained by applying the procedure specified by the operator to the arguments that are the values of the operands.</p>"}
]
$(document).ready(function(){
    var i = 0;
    var render = function() {
        $('.text-padder').html(pages[i]['text']);
        if (i>0) {
            $('.last').show();
        } else {
            $('.last').hide();
        }
        if (i+1 == pages.length) {
            $('.next').hide();
        } else {
            $('.next').show();
        }
    }
    render();
    $('.next').click(function(){
        if (i + 1 < pages.length) {
            i = i + 1;
        }
        render();
    });
    $('.last').click(function(){
        if (i - 1 >= 0) {
            i = i - 1;
        }
        render();
    });
});
