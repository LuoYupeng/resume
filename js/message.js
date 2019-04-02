var APP_ID = '4sAEIQMOAHFjjEs525eqbRHC-9Nh9j0Va';
var APP_KEY = 'mAiD9Kb9q74Uo9EWA8gi1fv9';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

var query = new AV.Query('Message');
query.find()
    .then(
        function (messages) {
            let  array = messages.map((item)=> item.attributes).reverse()

            array.forEach( (item) => {
                let li = document.createElement('li')
                li.innerText= `${item.name}: ${item.content}`
                let messageList = document.querySelector('#messageList')
                messageList.appendChild(li)
            })
        }
    )

let myForm = document.querySelector('#postMessageForm')

myForm.addEventListener('submit',function (e) {
    e.preventDefault()
    let content = myForm.querySelector('input[name=content]').value
    let name = myForm.querySelector('input[name=name]').value
    var Message = AV.Object.extend('Message')
    var message = new Message()
    message.save({
        'name': name,
        'content' : content
    }).then(function (object) {
        let li = document.createElement('li')
        li.innerText= `${object.attributes.name}: ${object.attributes.content}`
        let messageList = document.querySelector('#messageList')
        messageList.prepend(li)
        myForm.querySelector('input[name=content]').value = ''
    })
})








// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//     words: 'Hello World!'
// }).then(function(object) {
//     alert('LeanCloud Rocks!');
// })