// createform
var form = document.createElement('form');
form.method = 'POST';
form.action = 'http://xxx.com/';

var reqElm = document.createElement('input');
reqElm.name = 'body';
reqElm.value = {
    TableName: "todoTable",
    Item: {
        createdate: 20170501,
        updatedate: 20170501,
        todoid: 7,
        done: true,
        title: "これはformを一時的に生成してpostするサンプルです 未検証"
    }
};
form.appendChild(reqElm);
document.body.appendChild(form);

form.submit();
