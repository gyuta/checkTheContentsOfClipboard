window.onload = function(){
  function display(e){
      e.preventDefault();

      tbody.innerHTML = '';

      var clipboardData = e.clipboardData;
      var types = clipboardData.types;

      types.forEach((item, index) => {
        var content = clipboardData.getData(item);
        var text = '<tr><td>' + item + '</td><td><textarea rows="15" cols="150">' + content + '</textarea></td></tr>'
        tbody.insertAdjacentHTML('beforeend', text);
      });
  }

  var tbody = document.getElementsByTagName('tbody')[0];

  document.addEventListener("paste" , display);
}
