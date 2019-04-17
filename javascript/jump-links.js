// Use Case:
// used for jumping links that works with url parameters esp. on unbounce
// NOTE: this code use jQuery so make sure you have jQuery installed in your project
// this example is from Mobile Offerings (NEW) on unbounce, you can match this code to the site to get better understanding

<script>
$(function() {
    var url = window.location.href;
  
    
  if (url.search('#gastroenterology-journal') != -1) {
        $('html, body').animate({
            scrollTop: $('#lp-pom-button-126').offset().top
        }, 500);
    }
  
  
   if (url.search('#clinical') != -1) {
        $('html, body').animate({
            scrollTop: $('#lp-pom-button-127').offset().top
        }, 500);
    }
  
  
     if (url.search('#cellular') != -1) {
        $('html, body').animate({
            scrollTop: $('#lp-pom-button-128').offset().top
        }, 500);
    }
  
    if (url.search('#aga-community') != -1) {
        $('html, body').animate({
            scrollTop: $('#lp-pom-button-129').offset().top
        }, 500);
    }
  
     if (url.search('#aga-clinical') != -1) {
        $('html, body').animate({
            scrollTop: $('#lp-pom-button-130').offset().top
        }, 500);
    }
  
  if (url.search('#aga-meetings') != -1) {
        $('html, body').animate({
            scrollTop: $('#lp-pom-button-131').offset().top
        }, 500);
    }
  
   if (url.search('#new-gastro') != -1) {
        $('html, body').animate({
            scrollTop: $('#lp-pom-button-134').offset().top
        }, 500);
    }
  
    if (url.search('#ddw') != -1) {
        $('html, body').animate({
            scrollTop: $('#lp-pom-button-132').offset().top
        }, 500);
    }
});
</script>