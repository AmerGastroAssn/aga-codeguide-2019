// Use Case:
// used for jumping links that works with url parameters esp. on unbounce

<script>
  let agaanchorlinks = document.querySelectorAll('a[href^="#"]') ; for (let link
  of agaanchorlinks)
  {link.addEventListener("click", e => {
    let hashval = link.getAttribute("href");
    let target = document.querySelector(hashval);
    target.scrollIntoView({
      behavior: "smooth"
    });
    history.pushState(null, null, hashval);
    e.preventDefault();
  })}
</script>;
