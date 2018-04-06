// Minify by running: uglifyjs bookmarklet.js --compress --mangle --beautify beautify=false,quote_style=3
// Paste the output in ./components/Bookmarklet/index.js

;(function() {
  var number = document
    .getElementById('content')
    .getElementsByTagName('h2')[0]
    .innerText.split('#')
    .pop()
  var subject = document
    .getElementsByClassName('subject')[0]
    .getElementsByTagName('h3')[0].innerText
  window.open(
    'http://ualibr-cardprint.s3-website-us-west-2.amazonaws.com/?number=' +
      number +
      '&subject=' +
      subject,
    '_blank'
  )
})()
