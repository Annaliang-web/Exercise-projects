//jQuery request and response data

const url = "https://api.nasa.gov/planetary/apod?api_key=3u8dxI7zIDZC0zRUMGZpbhL6ubXkyHwwNRj6YFuJ";

$.get(url,(data)=>{
  console.log(data);
  $(document).ready(()=>{
    $('#apodImage').attr("src", data.url);
    $('#apodTitle').html(data.title);
    $('#apodExplanation').html(data.explanation);
    if('copyright' in data){
      $('#copyright').html('Image Credits: ' + data.copyright);
    }else{
      $('#copyright').html('Image Credits: ' + 'Public Domain');
    }
    $('#apodDate').html(data.date);
  })
});

$(document).ready(()=>{ //materialize css parallax effect
  $('.parallax').parallax();
});