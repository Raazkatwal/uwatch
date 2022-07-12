        const arrows = document.querySelectorAll(".arrow");
        const movielists = document.querySelectorAll(".movie-list");
        arrows.forEach((arrow,i) => {
            const itemnum = movielists[i].querySelectorAll("img").length;
            let clickcounter = 0;
            arrow.addEventListener("click",()=>{
                const ratio = Math.floor(window.innerWidth/270);
                clickcounter++;
                if (itemnum - (4+clickcounter) + (5-ratio) >= 0) {
                    movielists[i].style.transform = `translateX(${movielists[i].computedStyleMap().get("transform")[0].x.value-300}px)`
                }else{
                    movielists[i].style.transform = "translateX(0)";
                    clickcounter = 0;
                }
            })
        });
        var toggle = document.getElementById("toggle");
        toggle.onclick = function(){
            document.body.classList.toggle("light-theme");
            if (document.body.classList.contains("light-theme")) {
                ball = document.querySelector(".toggle-ball");
                ball.style.left = "1px";
             }else{
                ball.style.left = "";
             }
        }