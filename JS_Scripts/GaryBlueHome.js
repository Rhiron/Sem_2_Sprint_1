window.onload = function() {
    let PhotoSources = ["../GaryBluesPics/V2Banner1.png", "../GaryBluesPics/V2Banner2.png", "../GaryBluesPics/V2Banner3.png"]
    let ButtonPhotoSources = ["../GaryBluesPics/V2Banner1.png", "../GaryBluesPics/V2Banner2.png", "../GaryBluesPics/V2Banner3.png"]

    const sec = document.getElementById("Banner");
    let buttons = document.getElementsByTagName("button");

    if(sec) {
        const Img = sec.getElementsByTagName("img")[0]; // get the first img element
        if(Img) {
            let i = 0;
            setInterval(() => {
                if(i == 0) {
                    Img.src = PhotoSources[i];
                    i++;
                    buttons[0].style.backgroundColor = "gray";
                    buttons[1].style.backgroundColor = "white";
                    buttons[2].style.backgroundColor = "white";
                }
                else if(i == 1) {
                    Img.src = PhotoSources[i];
                    i++;
                    buttons[0].style.backgroundColor = "white";
                    buttons[1].style.backgroundColor = "gray";
                    buttons[2].style.backgroundColor = "white";
                }
                else if(i == 2) {
                    Img.src = PhotoSources[i];
                    i = 0;
                    buttons[0].style.backgroundColor = "white";
                    buttons[1].style.backgroundColor = "white";
                    buttons[2].style.backgroundColor = "gray";
                }
            }, 5000);


            buttons[0].addEventListener('click', function() {
                Img.src = ButtonPhotoSources[0];
                buttons[0].style.backgroundColor = "gray";
                buttons[1].style.backgroundColor = "white";
                buttons[2].style.backgroundColor = "white";
            });

            buttons[1].addEventListener('click', function() {
                Img.src = ButtonPhotoSources[1];
                buttons[0].style.backgroundColor = "white";
                buttons[1].style.backgroundColor = "gray";
                buttons[2].style.backgroundColor = "white";
            });

            buttons[2].addEventListener('click', function() {
                Img.src = ButtonPhotoSources[2];
                buttons[0].style.backgroundColor = "white";
                buttons[1].style.backgroundColor = "white";
                buttons[2].style.backgroundColor = "gray";
            });

        } else {
            console.log("No img tag found");
        }
    } else {
        console.log("Element with id 'Banner' not found");
    }
}