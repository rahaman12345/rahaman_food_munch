let WatchVideoButtonEle = document.getElementById("WatchVideoButton");
let closeVideoButtonEle = document.getElementById("closeVideoButton");
let playingVideoEle = document.getElementById("playingVideo");
let ViewMenuButtonEle = document.getElementById("ViewMenuButton");
let closeMenuButtonEle = document.getElementById("closeMenuButton");
let menuCardEle = document.getElementById("menuCard");
let OrderStatusImageEle = document.getElementById("OrderStatusImage");
let orderNowButtonEle = document.getElementById("orderNowButton");
let orderBackButtonEle = document.getElementById("orderBackButton");

function playVideo() {
    WatchVideoButtonEle.classList.toggle("d-none");
    closeVideoButtonEle.classList.toggle("d-none");
    playingVideoEle.classList.toggle("d-none");
}

function stopVideo() {
    WatchVideoButtonEle.classList.toggle("d-none");
    closeVideoButtonEle.classList.toggle("d-none");
    playingVideoEle.classList.toggle("d-none");
}

function showMenu() {
    ViewMenuButtonEle.classList.add("d-none");
    closeMenuButtonEle.classList.remove("d-none");
    menuCardEle.classList.remove("d-none");
}

function closeMenu() {
    ViewMenuButtonEle.classList.remove("d-none");
    closeMenuButtonEle.classList.add("d-none");
    menuCardEle.classList.add("d-none");
}
/*nonveg items*/
let nonvegStartersImageEle = document.getElementById("nonvegStartersImage");
let nonvegItemsContainerEle = document.getElementById("nonvegItemsContainer");
let backButton1Ele = document.getElementById("backButton1");
let ViewAllButton1Ele = document.getElementById("ViewAllButton1");
let viewMoreButton1Ele = document.getElementById("viewMoreButton1");



let nonvegImage1 = document.getElementById("nonvegImage1");
let nonvegImage2 = document.getElementById("nonvegImage2");
let nonvegImage3 = document.getElementById("nonvegImage3");
let nonvegImage4 = document.getElementById("nonvegImage4");
let nonvegImage5 = document.getElementById("nonvegImage5");
let nonvegImage6 = document.getElementById("nonvegImage6");

function nonvegItems() {
    nonvegStartersImageEle.classList.add("d-none");
    nonvegItemsContainerEle.classList.remove("d-none");
    backButton1Ele.classList.remove("d-none");
    ViewAllButton1Ele.classList.add("d-none");
    viewMoreButton1Ele.classList.add("d-none");

    nonvegImage1.classList.remove("image-view", "d-none");
    nonvegImage2.classList.remove("image-view", "d-none");
    nonvegImage3.classList.remove("image-view", "d-none");
    nonvegImage4.classList.remove("image-view", "d-none");
    nonvegImage5.classList.remove("image-view", "d-none");
    nonvegImage6.classList.remove("image-view", "d-none");
}

function backButton1Function() {
    nonvegStartersImageEle.classList.remove("d-none");
    nonvegItemsContainerEle.classList.add("d-none");
    backButton1Ele.classList.add("d-none");
    ViewAllButton1Ele.classList.remove("d-none");

    nonvegImage1.classList.remove("image-view");
    nonvegImage2.classList.remove("image-view");
    nonvegImage3.classList.remove("image-view");
    nonvegImage4.classList.remove("image-view");
    nonvegImage5.classList.remove("image-view");
    nonvegImage6.classList.remove("image-view");
}


function nonvegImageView1() {
    nonvegImage1.classList.add("image-view");
    nonvegImage2.classList.add("d-none");
    nonvegImage3.classList.add("d-none");
    nonvegImage4.classList.add("d-none");
    nonvegImage5.classList.add("d-none");
    nonvegImage6.classList.add("d-none");

    backButton1Ele.classList.add("d-none");
    viewMoreButton1Ele.classList.remove("d-none");
}

function nonvegImageView2() {
    nonvegImage1.classList.add("d-none");
    nonvegImage2.classList.add("image-view");
    nonvegImage3.classList.add("d-none");
    nonvegImage4.classList.add("d-none");
    nonvegImage5.classList.add("d-none");
    nonvegImage6.classList.add("d-none");

    backButton1Ele.classList.add("d-none");
    viewMoreButton1Ele.classList.remove("d-none");
}

function nonvegImageView3() {
    nonvegImage1.classList.add("d-none");
    nonvegImage2.classList.add("d-none");
    nonvegImage3.classList.add("image-view");
    nonvegImage4.classList.add("d-none");
    nonvegImage5.classList.add("d-none");
    nonvegImage6.classList.add("d-none");

    backButton1Ele.classList.add("d-none");
    viewMoreButton1Ele.classList.remove("d-none");
}

function nonvegImageView4() {
    nonvegImage1.classList.add("d-none");
    nonvegImage2.classList.add("d-none");
    nonvegImage3.classList.add("d-none");
    nonvegImage4.classList.add("image-view");
    nonvegImage5.classList.add("d-none");
    nonvegImage6.classList.add("d-none");

    backButton1Ele.classList.add("d-none");
    viewMoreButton1Ele.classList.remove("d-none");
}

function nonvegImageView5() {
    nonvegImage1.classList.add("d-none");
    nonvegImage2.classList.add("d-none");
    nonvegImage3.classList.add("d-none");
    nonvegImage4.classList.add("d-none");
    nonvegImage5.classList.add("image-view");
    nonvegImage6.classList.add("d-none");

    backButton1Ele.classList.add("d-none");
    viewMoreButton1Ele.classList.remove("d-none");
}

function nonvegImageView6() {
    nonvegImage1.classList.add("d-none");
    nonvegImage2.classList.add("d-none");
    nonvegImage3.classList.add("d-none");
    nonvegImage4.classList.add("d-none");
    nonvegImage5.classList.add("d-none");
    nonvegImage6.classList.add("image-view");

    backButton1Ele.classList.add("d-none");
    viewMoreButton1Ele.classList.remove("d-none");
}
/*veg items */


let vegStartersImageEle = document.getElementById("vegStartersImage");
let vegItemsContainerEle = document.getElementById("vegItemsContainer");
let backButton2Ele = document.getElementById("backButton2");
let ViewAllButton2Ele = document.getElementById("ViewAllButton2");
let viewMoreButton2Ele = document.getElementById("viewMoreButton2");



let vegImage1 = document.getElementById("vegImage1");
let vegImage2 = document.getElementById("vegImage2");
let vegImage3 = document.getElementById("vegImage3");
let vegImage4 = document.getElementById("vegImage4");
let vegImage5 = document.getElementById("vegImage5");
let vegImage6 = document.getElementById("vegImage6");

function vegItems() {
    vegStartersImageEle.classList.add("d-none");
    vegItemsContainerEle.classList.remove("d-none");
    backButton2Ele.classList.remove("d-none");
    ViewAllButton2Ele.classList.add("d-none");
    viewMoreButton2Ele.classList.add("d-none");

    vegImage1.classList.remove("d-none", "image-view");
    vegImage2.classList.remove("d-none", "image-view");
    vegImage3.classList.remove("d-none", "image-view");
    vegImage4.classList.remove("d-none", "image-view");
    vegImage5.classList.remove("d-none", "image-view");
    vegImage6.classList.remove("d-none", "image-view");
}

function backButton2Function() {
    vegStartersImageEle.classList.remove("d-none");
    vegItemsContainerEle.classList.add("d-none");
    backButton2Ele.classList.add("d-none");
    ViewAllButton2Ele.classList.remove("d-none");
    vegImage1.classList.remove("image-view");
    vegImage2.classList.remove("image-view");
    vegImage3.classList.remove("image-view");
    vegImage4.classList.remove("image-view");
    vegImage5.classList.remove("image-view");
    vegImage6.classList.remove("image-view");
}

function vegImageView1() {
    vegImage1.classList.add("image-view");
    vegImage2.classList.add("d-none");
    vegImage3.classList.add("d-none");
    vegImage4.classList.add("d-none");
    vegImage5.classList.add("d-none");
    vegImage6.classList.add("d-none");

    backButton2Ele.classList.add("d-none");
    viewMoreButton2Ele.classList.remove("d-none");
}

function vegImageView2() {
    vegImage1.classList.add("d-none");
    vegImage2.classList.add("image-view");
    vegImage3.classList.add("d-none");
    vegImage4.classList.add("d-none");
    vegImage5.classList.add("d-none");
    vegImage6.classList.add("d-none");

    backButton2Ele.classList.add("d-none");
    viewMoreButton2Ele.classList.remove("d-none");
}

function vegImageView3() {
    vegImage1.classList.add("d-none");
    vegImage2.classList.add("d-none");
    vegImage3.classList.add("image-view");
    vegImage4.classList.add("d-none");
    vegImage5.classList.add("d-none");
    vegImage6.classList.add("d-none");

    backButton2Ele.classList.add("d-none");
    viewMoreButton2Ele.classList.remove("d-none");
}

function vegImageView4() {
    vegImage1.classList.add("d-none");
    vegImage2.classList.add("d-none");
    vegImage3.classList.add("d-none");
    vegImage4.classList.add("image-view");
    vegImage5.classList.add("d-none");
    vegImage6.classList.add("d-none");

    backButton2Ele.classList.add("d-none");
    viewMoreButton2Ele.classList.remove("d-none");
}

function vegImageView5() {
    vegImage1.classList.add("d-none");
    vegImage2.classList.add("d-none");
    vegImage3.classList.add("d-none");
    vegImage4.classList.add("d-none");
    vegImage5.classList.add("image-view");
    vegImage6.classList.add("d-none");

    backButton2Ele.classList.add("d-none");
    viewMoreButton2Ele.classList.remove("d-none");
}

function vegImageView6() {
    vegImage1.classList.add("d-none");
    vegImage2.classList.add("d-none");
    vegImage3.classList.add("d-none");
    vegImage4.classList.add("d-none");
    vegImage5.classList.add("d-none");
    vegImage6.classList.add("image-view");

    backButton2Ele.classList.add("d-none");
    viewMoreButton2Ele.classList.remove("d-none");
}
/*soups items */
let soupsImageEle = document.getElementById("soupsImage");
let soupsItemsContainerEle = document.getElementById("soupsItemsContainer");
let backButton3Ele = document.getElementById("backButton3");
let ViewAllButton3Ele = document.getElementById("ViewAllButton3");
let viewMoreButton3Ele = document.getElementById("viewMoreButton3");



let soupsImage1 = document.getElementById("soupsImage1");
let soupsImage2 = document.getElementById("soupsImage2");
let soupsImage3 = document.getElementById("soupsImage3");
let soupsImage4 = document.getElementById("soupsImage4");
let soupsImage5 = document.getElementById("soupsImage5");
let soupsImage6 = document.getElementById("soupsImage6");

function soupsItems() {
    soupsImageEle.classList.add("d-none");
    soupsItemsContainerEle.classList.remove("d-none");
    backButton3Ele.classList.remove("d-none");
    ViewAllButton3Ele.classList.add("d-none");
    viewMoreButton3Ele.classList.add("d-none");

    soupsImage6.classList.remove("image-view", "d-none");
    soupsImage1.classList.remove("image-view", "d-none");
    soupsImage2.classList.remove("image-view", "d-none");
    soupsImage3.classList.remove("image-view", "d-none");
    soupsImage4.classList.remove("image-view", "d-none");
    soupsImage5.classList.remove("image-view", "d-none");
}

function backButton3Function() {
    soupsImageEle.classList.remove("d-none");
    soupsItemsContainerEle.classList.add("d-none");
    backButton3Ele.classList.add("d-none");
    ViewAllButton3Ele.classList.remove("d-none");
    soupsImage1.classList.remove("image-view");
    soupsImage2.classList.remove("image-view");
    soupsImage3.classList.remove("image-view");
    soupsImage4.classList.remove("image-view");
    soupsImage5.classList.remove("image-view");
    soupsImage6.classList.remove("image-view");
}

function soupsImageView1() {
    soupsImage1.classList.add("image-view");
    soupsImage2.classList.add("d-none");
    soupsImage3.classList.add("d-none");
    soupsImage4.classList.add("d-none");
    soupsImage5.classList.add("d-none");
    soupsImage6.classList.add("d-none");

    backButton3Ele.classList.add("d-none");
    viewMoreButton3Ele.classList.remove("d-none");
}

function soupsImageView2() {
    soupsImage1.classList.add("d-none");
    soupsImage2.classList.add("image-view");
    soupsImage3.classList.add("d-none");
    soupsImage4.classList.add("d-none");
    soupsImage5.classList.add("d-none");
    soupsImage6.classList.add("d-none");

    backButton3Ele.classList.add("d-none");
    viewMoreButton3Ele.classList.remove("d-none");
}

function soupsImageView3() {
    soupsImage1.classList.add("d-none");
    soupsImage2.classList.add("d-none");
    soupsImage3.classList.add("image-view");
    soupsImage4.classList.add("d-none");
    soupsImage5.classList.add("d-none");
    soupsImage6.classList.add("d-none");

    backButton3Ele.classList.add("d-none");
    viewMoreButton3Ele.classList.remove("d-none");
}

function soupsImageView4() {
    soupsImage1.classList.add("d-none");
    soupsImage2.classList.add("d-none");
    soupsImage3.classList.add("d-none");
    soupsImage4.classList.add("image-view");
    soupsImage5.classList.add("d-none");
    soupsImage6.classList.add("d-none");

    backButton3Ele.classList.add("d-none");
    viewMoreButton3Ele.classList.remove("d-none");
}

function soupsImageView5() {
    soupsImage1.classList.add("d-none");
    soupsImage2.classList.add("d-none");
    soupsImage3.classList.add("d-none");
    soupsImage4.classList.add("d-none");
    soupsImage5.classList.add("image-view");
    soupsImage6.classList.add("d-none");

    backButton3Ele.classList.add("d-none");
    viewMoreButton3Ele.classList.remove("d-none");
}

function soupsImageView6() {
    soupsImage1.classList.add("d-none");
    soupsImage2.classList.add("d-none");
    soupsImage3.classList.add("d-none");
    soupsImage4.classList.add("d-none");
    soupsImage5.classList.add("d-none");
    soupsImage6.classList.add("image-view");

    backButton3Ele.classList.add("d-none");
    viewMoreButton3Ele.classList.remove("d-none");
}
/* fishitems*/
let fishImageEle = document.getElementById("fishImage");
let fishItemsContainerEle = document.getElementById("fishItemsContainer");
let backButton4Ele = document.getElementById("backButton4");
let ViewAllButton4Ele = document.getElementById("ViewAllButton4");
let viewMoreButton4Ele = document.getElementById("viewMoreButton4");



let fishImage1 = document.getElementById("fishImage1");
let fishImage2 = document.getElementById("fishImage2");
let fishImage3 = document.getElementById("fishImage3");
let fishImage4 = document.getElementById("fishImage4");
let fishImage5 = document.getElementById("fishImage5");
let fishImage6 = document.getElementById("fishImage6");

function fishItems() {
    fishImageEle.classList.add("d-none");
    fishItemsContainerEle.classList.remove("d-none");
    backButton4Ele.classList.remove("d-none");
    ViewAllButton4Ele.classList.add("d-none");
    viewMoreButton4Ele.classList.add("d-none");

    fishImage1.classList.remove("image-view", "d-none");
    fishImage2.classList.remove("image-view", "d-none");
    fishImage3.classList.remove("image-view", "d-none");
    fishImage4.classList.remove("image-view", "d-none");
    fishImage5.classList.remove("image-view", "d-none");
    fishImage6.classList.remove("image-view", "d-none");
}

function backButton4Function() {
    fishImageEle.classList.remove("d-none");
    fishItemsContainerEle.classList.add("d-none");
    backButton4Ele.classList.add("d-none");
    ViewAllButton4Ele.classList.remove("d-none");
    fishImage1.classList.remove("image-view");
    fishImage2.classList.remove("image-view");
    fishImage3.classList.remove("image-view");
    fishImage4.classList.remove("image-view");
    fishImage5.classList.remove("image-view");
    fishImage6.classList.remove("image-view");
}

function fishImageView1() {
    fishImage1.classList.add("image-view");
    fishImage2.classList.add("d-none");
    fishImage3.classList.add("d-none");
    fishImage4.classList.add("d-none");
    fishImage5.classList.add("d-none");
    fishImage6.classList.add("d-none");

    backButton4Ele.classList.add("d-none");
    viewMoreButton4Ele.classList.remove("d-none");
}

function fishImageView2() {
    fishImage1.classList.add("d-none");
    fishImage2.classList.add("image-view");
    fishImage3.classList.add("d-none");
    fishImage4.classList.add("d-none");
    fishImage5.classList.add("d-none");
    fishImage6.classList.add("d-none");

    backButton4Ele.classList.add("d-none");
    viewMoreButton4Ele.classList.remove("d-none");
}

function fishImageView3() {
    fishImage1.classList.add("d-none");
    fishImage2.classList.add("d-none");
    fishImage3.classList.add("image-view");
    fishImage4.classList.add("d-none");
    fishImage5.classList.add("d-none");
    fishImage6.classList.add("d-none");

    backButton4Ele.classList.add("d-none");
    viewMoreButton4Ele.classList.remove("d-none");
}

function fishImageView4() {
    fishImage1.classList.add("d-none");
    fishImage2.classList.add("d-none");
    fishImage3.classList.add("d-none");
    fishImage4.classList.add("image-view");
    fishImage5.classList.add("d-none");
    fishImage6.classList.add("d-none");

    backButton4Ele.classList.add("d-none");
    viewMoreButton4Ele.classList.remove("d-none");
}

function fishImageView5() {
    fishImage1.classList.add("d-none");
    fishImage2.classList.add("d-none");
    fishImage3.classList.add("d-none");
    fishImage4.classList.add("d-none");
    fishImage5.classList.add("image-view");
    fishImage6.classList.add("d-none");

    backButton4Ele.classList.add("d-none");
    viewMoreButton4Ele.classList.remove("d-none");
}

function fishImageView6() {
    fishImage1.classList.add("d-none");
    fishImage2.classList.add("d-none");
    fishImage3.classList.add("d-none");
    fishImage4.classList.add("d-none");
    fishImage5.classList.add("d-none");
    fishImage6.classList.add("image-view");

    backButton4Ele.classList.add("d-none");
    viewMoreButton4Ele.classList.remove("d-none");
}
/* mainitems*/
let mainImageEle = document.getElementById("mainImage");
let mainItemsContainerEle = document.getElementById("mainItemsContainer");
let backButton5Ele = document.getElementById("backButton5");
let ViewAllButton5Ele = document.getElementById("ViewAllButton5");
let viewMoreButton5Ele = document.getElementById("viewMoreButton5");



let mainImage1 = document.getElementById("mainImage1");
let mainImage2 = document.getElementById("mainImage2");
let mainImage3 = document.getElementById("mainImage3");
let mainImage4 = document.getElementById("mainImage4");
let mainImage5 = document.getElementById("mainImage5");
let mainImage6 = document.getElementById("mainImage6");

function mainItems() {
    mainImageEle.classList.add("d-none");
    mainItemsContainerEle.classList.remove("d-none");
    backButton5Ele.classList.remove("d-none");
    ViewAllButton5Ele.classList.add("d-none");
    viewMoreButton5Ele.classList.add("d-none");

    mainImage1.classList.remove("image-view", "d-none");
    mainImage2.classList.remove("image-view", "d-none");
    mainImage3.classList.remove("image-view", "d-none");
    mainImage4.classList.remove("image-view", "d-none");
    mainImage5.classList.remove("image-view", "d-none");
    mainImage6.classList.remove("image-view", "d-none");
}

function backButton5Function() {
    mainImageEle.classList.remove("d-none");
    mainItemsContainerEle.classList.add("d-none");
    backButton5Ele.classList.add("d-none");
    ViewAllButton5Ele.classList.remove("d-none");
    mainImage1.classList.remove("image-view");
    mainImage2.classList.remove("image-view");
    mainImage3.classList.remove("image-view");
    mainImage4.classList.remove("image-view");
    mainImage5.classList.remove("image-view");
    mainImage6.classList.remove("image-view");
}

function mainImageView1() {
    mainImage1.classList.add("image-view");
    mainImage2.classList.add("d-none");
    mainImage3.classList.add("d-none");
    mainImage4.classList.add("d-none");
    mainImage5.classList.add("d-none");
    mainImage6.classList.add("d-none");

    backButton5Ele.classList.add("d-none");
    viewMoreButton5Ele.classList.remove("d-none");
}

function mainImageView2() {
    mainImage1.classList.add("d-none");
    mainImage2.classList.add("image-view");
    mainImage3.classList.add("d-none");
    mainImage4.classList.add("d-none");
    mainImage5.classList.add("d-none");
    mainImage6.classList.add("d-none");

    backButton5Ele.classList.add("d-none");
    viewMoreButton5Ele.classList.remove("d-none");
}

function mainImageView3() {
    mainImage1.classList.add("d-none");
    mainImage2.classList.add("d-none");
    mainImage3.classList.add("image-view");
    mainImage4.classList.add("d-none");
    mainImage5.classList.add("d-none");
    mainImage6.classList.add("d-none");

    backButton5Ele.classList.add("d-none");
    viewMoreButton5Ele.classList.remove("d-none");
}

function mainImageView4() {
    mainImage1.classList.add("d-none");
    mainImage2.classList.add("d-none");
    mainImage3.classList.add("d-none");
    mainImage4.classList.add("image-view");
    mainImage5.classList.add("d-none");
    mainImage6.classList.add("d-none");

    backButton5Ele.classList.add("d-none");
    viewMoreButton5Ele.classList.remove("d-none");
}

function mainImageView5() {
    mainImage1.classList.add("d-none");
    mainImage2.classList.add("d-none");
    mainImage3.classList.add("d-none");
    mainImage4.classList.add("d-none");
    mainImage5.classList.add("image-view");
    mainImage6.classList.add("d-none");

    backButton5Ele.classList.add("d-none");
    viewMoreButton5Ele.classList.remove("d-none");
}

function mainImageView6() {
    mainImage1.classList.add("d-none");
    mainImage2.classList.add("d-none");
    mainImage3.classList.add("d-none");
    mainImage4.classList.add("d-none");
    mainImage5.classList.add("d-none");
    mainImage6.classList.add("image-view");

    backButton5Ele.classList.add("d-none");
    viewMoreButton5Ele.classList.remove("d-none");
}
/* noodlesitems*/
let noodlesImageEle = document.getElementById("noodlesImage");
let noodlesItemsContainerEle = document.getElementById("noodlesItemsContainer");
let backButton6Ele = document.getElementById("backButton6");
let ViewAllButton6Ele = document.getElementById("ViewAllButton6");
let viewMoreButton6Ele = document.getElementById("viewMoreButton6");



let noodlesImage1 = document.getElementById("noodlesImage1");
let noodlesImage2 = document.getElementById("noodlesImage2");
let noodlesImage3 = document.getElementById("noodlesImage3");
let noodlesImage4 = document.getElementById("noodlesImage4");
let noodlesImage5 = document.getElementById("noodlesImage5");
let noodlesImage6 = document.getElementById("noodlesImage6");

function noodlesItems() {
    noodlesImageEle.classList.add("d-none");
    noodlesItemsContainerEle.classList.remove("d-none");
    backButton6Ele.classList.remove("d-none");
    ViewAllButton6Ele.classList.add("d-none");
    viewMoreButton6Ele.classList.add("d-none");

    noodlesImage1.classList.remove("image-view", "d-none");
    noodlesImage2.classList.remove("image-view", "d-none");
    noodlesImage3.classList.remove("image-view", "d-none");
    noodlesImage4.classList.remove("image-view", "d-none");
    noodlesImage5.classList.remove("image-view", "d-none");
    noodlesImage6.classList.remove("image-view", "d-none");
}

function backButton6Function() {
    noodlesImageEle.classList.remove("d-none");
    noodlesItemsContainerEle.classList.add("d-none");
    backButton6Ele.classList.add("d-none");
    ViewAllButton6Ele.classList.remove("d-none");
    noodlesImage1.classList.remove("image-view");
    noodlesImage2.classList.remove("image-view");
    noodlesImage3.classList.remove("image-view");
    noodlesImage4.classList.remove("image-view");
    noodlesImage5.classList.remove("image-view");
    noodlesImage6.classList.remove("image-view");
}

function noodlesImageView1() {
    noodlesImage1.classList.add("image-view");
    noodlesImage2.classList.add("d-none");
    noodlesImage3.classList.add("d-none");
    noodlesImage4.classList.add("d-none");
    noodlesImage5.classList.add("d-none");
    noodlesImage6.classList.add("d-none");

    backButton6Ele.classList.add("d-none");
    viewMoreButton6Ele.classList.remove("d-none");
}

function noodlesImageView2() {
    noodlesImage1.classList.add("d-none");
    noodlesImage2.classList.add("image-view");
    noodlesImage3.classList.add("d-none");
    noodlesImage4.classList.add("d-none");
    noodlesImage5.classList.add("d-none");
    noodlesImage6.classList.add("d-none");

    backButton6Ele.classList.add("d-none");
    viewMoreButton6Ele.classList.remove("d-none");
}

function noodlesImageView3() {
    noodlesImage1.classList.add("d-none");
    noodlesImage2.classList.add("d-none");
    noodlesImage3.classList.add("image-view");
    noodlesImage4.classList.add("d-none");
    noodlesImage5.classList.add("d-none");
    noodlesImage6.classList.add("d-none");

    backButton6Ele.classList.add("d-none");
    viewMoreButton6Ele.classList.remove("d-none");
}

function noodlesImageView4() {
    noodlesImage1.classList.add("d-none");
    noodlesImage2.classList.add("d-none");
    noodlesImage3.classList.add("d-none");
    noodlesImage4.classList.add("image-view");
    noodlesImage5.classList.add("d-none");
    noodlesImage6.classList.add("d-none");

    backButton6Ele.classList.add("d-none");
    viewMoreButton6Ele.classList.remove("d-none");
}

function noodlesImageView5() {
    noodlesImage1.classList.add("d-none");
    noodlesImage2.classList.add("d-none");
    noodlesImage3.classList.add("d-none");
    noodlesImage4.classList.add("d-none");
    noodlesImage5.classList.add("image-view");
    noodlesImage6.classList.add("d-none");

    backButton6Ele.classList.add("d-none");
    viewMoreButton6Ele.classList.remove("d-none");
}

function noodlesImageView6() {
    noodlesImage1.classList.add("d-none");
    noodlesImage2.classList.add("d-none");
    noodlesImage3.classList.add("d-none");
    noodlesImage4.classList.add("d-none");
    noodlesImage5.classList.add("d-none");
    noodlesImage6.classList.add("image-view");

    backButton6Ele.classList.add("d-none");
    viewMoreButton6Ele.classList.remove("d-none");
}
/* saladsitems*/
let saladsImageEle = document.getElementById("saladsImage");
let saladsItemsContainerEle = document.getElementById("saladsItemsContainer");
let backButton7Ele = document.getElementById("backButton7");
let ViewAllButton7Ele = document.getElementById("ViewAllButton7");
let viewMoreButton7Ele = document.getElementById("viewMoreButton7");



let saladsImage1 = document.getElementById("saladsImage1");
let saladsImage2 = document.getElementById("saladsImage2");
let saladsImage3 = document.getElementById("saladsImage3");
let saladsImage4 = document.getElementById("saladsImage4");
let saladsImage5 = document.getElementById("saladsImage5");
let saladsImage6 = document.getElementById("saladsImage6");

function saladsItems() {
    saladsImageEle.classList.add("d-none");
    saladsItemsContainerEle.classList.remove("d-none");
    backButton7Ele.classList.remove("d-none");
    ViewAllButton7Ele.classList.add("d-none");
    viewMoreButton7Ele.classList.add("d-none");

    saladsImage1.classList.remove("image-view", "d-none");
    saladsImage2.classList.remove("image-view", "d-none");
    saladsImage3.classList.remove("image-view", "d-none");
    saladsImage4.classList.remove("image-view", "d-none");
    saladsImage5.classList.remove("image-view", "d-none");
    saladsImage6.classList.remove("image-view", "d-none");
}

function backButton7Function() {
    saladsImageEle.classList.remove("d-none");
    saladsItemsContainerEle.classList.add("d-none");
    backButton7Ele.classList.add("d-none");
    ViewAllButton7Ele.classList.remove("d-none");
    saladsImage1.classList.remove("image-view");
    saladsImage2.classList.remove("image-view");
    saladsImage3.classList.remove("image-view");
    saladsImage4.classList.remove("image-view");
    saladsImage5.classList.remove("image-view");
    saladsImage6.classList.remove("image-view");
}

function saladsImageView1() {
    saladsImage1.classList.add("image-view");
    saladsImage2.classList.add("d-none");
    saladsImage3.classList.add("d-none");
    saladsImage4.classList.add("d-none");
    saladsImage5.classList.add("d-none");
    saladsImage6.classList.add("d-none");

    backButton7Ele.classList.add("d-none");
    viewMoreButton7Ele.classList.remove("d-none");
}

function saladsImageView2() {
    saladsImage1.classList.add("d-none");
    saladsImage2.classList.add("image-view");
    saladsImage3.classList.add("d-none");
    saladsImage4.classList.add("d-none");
    saladsImage5.classList.add("d-none");
    saladsImage6.classList.add("d-none");

    backButton7Ele.classList.add("d-none");
    viewMoreButton7Ele.classList.remove("d-none");
}

function saladsImageView3() {
    saladsImage1.classList.add("d-none");
    saladsImage2.classList.add("d-none");
    saladsImage3.classList.add("image-view");
    saladsImage4.classList.add("d-none");
    saladsImage5.classList.add("d-none");
    saladsImage6.classList.add("d-none");

    backButton7Ele.classList.add("d-none");
    viewMoreButton7Ele.classList.remove("d-none");
}

function saladsImageView4() {
    saladsImage1.classList.add("d-none");
    saladsImage2.classList.add("d-none");
    saladsImage3.classList.add("d-none");
    saladsImage4.classList.add("image-view");
    saladsImage5.classList.add("d-none");
    saladsImage6.classList.add("d-none");

    backButton7Ele.classList.add("d-none");
    viewMoreButton7Ele.classList.remove("d-none");
}

function saladsImageView5() {
    saladsImage1.classList.add("d-none");
    saladsImage2.classList.add("d-none");
    saladsImage3.classList.add("d-none");
    saladsImage4.classList.add("d-none");
    saladsImage5.classList.add("image-view");
    saladsImage6.classList.add("d-none");

    backButton7Ele.classList.add("d-none");
    viewMoreButton7Ele.classList.remove("d-none");
}

function saladsImageView6() {
    saladsImage1.classList.add("d-none");
    saladsImage2.classList.add("d-none");
    saladsImage3.classList.add("d-none");
    saladsImage4.classList.add("d-none");
    saladsImage5.classList.add("d-none");
    saladsImage6.classList.add("image-view");

    backButton7Ele.classList.add("d-none");
    viewMoreButton7Ele.classList.remove("d-none");
}

/* dessertsitems*/
let dessertsImageEle = document.getElementById("dessertsImage");
let dessertsItemsContainerEle = document.getElementById("dessertsItemsContainer");
let backButton8Ele = document.getElementById("backButton8");
let ViewAllButton8Ele = document.getElementById("ViewAllButton8");
let viewMoreButton8Ele = document.getElementById("viewMoreButton8");



let dessertsImage1 = document.getElementById("dessertsImage1");
let dessertsImage2 = document.getElementById("dessertsImage2");
let dessertsImage3 = document.getElementById("dessertsImage3");
let dessertsImage4 = document.getElementById("dessertsImage4");
let dessertsImage5 = document.getElementById("dessertsImage5");
let dessertsImage6 = document.getElementById("dessertsImage6");

function dessertsItems() {
    dessertsImageEle.classList.add("d-none");
    dessertsItemsContainerEle.classList.remove("d-none");
    backButton8Ele.classList.remove("d-none");
    ViewAllButton8Ele.classList.add("d-none");
    viewMoreButton8Ele.classList.add("d-none");

    dessertsImage1.classList.remove("image-view", "d-none");
    dessertsImage2.classList.remove("image-view", "d-none");
    dessertsImage3.classList.remove("image-view", "d-none");
    dessertsImage4.classList.remove("image-view", "d-none");
    dessertsImage5.classList.remove("image-view", "d-none");
    dessertsImage6.classList.remove("image-view", "d-none");
}

function backButton8Function() {
    dessertsImageEle.classList.remove("d-none");
    dessertsItemsContainerEle.classList.add("d-none");
    backButton8Ele.classList.add("d-none");
    ViewAllButton8Ele.classList.remove("d-none");
    dessertsImage1.classList.remove("image-view");
    dessertsImage2.classList.remove("image-view");
    dessertsImage3.classList.remove("image-view");
    dessertsImage4.classList.remove("image-view");
    dessertsImage5.classList.remove("image-view");
    dessertsImage6.classList.remove("image-view");
}

function dessertsImageView1() {
    dessertsImage1.classList.add("image-view");
    dessertsImage2.classList.add("d-none");
    dessertsImage3.classList.add("d-none");
    dessertsImage4.classList.add("d-none");
    dessertsImage5.classList.add("d-none");
    dessertsImage6.classList.add("d-none");

    backButton8Ele.classList.add("d-none");
    viewMoreButton8Ele.classList.remove("d-none");
}

function dessertsImageView2() {
    dessertsImage1.classList.add("d-none");
    dessertsImage2.classList.add("image-view");
    dessertsImage3.classList.add("d-none");
    dessertsImage4.classList.add("d-none");
    dessertsImage5.classList.add("d-none");
    dessertsImage6.classList.add("d-none");

    backButton8Ele.classList.add("d-none");
    viewMoreButton8Ele.classList.remove("d-none");
}

function dessertsImageView3() {
    dessertsImage1.classList.add("d-none");
    dessertsImage2.classList.add("d-none");
    dessertsImage3.classList.add("image-view");
    dessertsImage4.classList.add("d-none");
    dessertsImage5.classList.add("d-none");
    dessertsImage6.classList.add("d-none");

    backButton8Ele.classList.add("d-none");
    viewMoreButton8Ele.classList.remove("d-none");
}

function dessertsImageView4() {
    dessertsImage1.classList.add("d-none");
    dessertsImage2.classList.add("d-none");
    dessertsImage3.classList.add("d-none");
    dessertsImage4.classList.add("image-view");
    dessertsImage5.classList.add("d-none");
    dessertsImage6.classList.add("d-none");

    backButton8Ele.classList.add("d-none");
    viewMoreButton8Ele.classList.remove("d-none");
}

function dessertsImageView5() {
    dessertsImage1.classList.add("d-none");
    dessertsImage2.classList.add("d-none");
    dessertsImage3.classList.add("d-none");
    dessertsImage4.classList.add("d-none");
    dessertsImage5.classList.add("image-view");
    dessertsImage6.classList.add("d-none");

    backButton8Ele.classList.add("d-none");
    viewMoreButton8Ele.classList.remove("d-none");
}

function dessertsImageView6() {
    dessertsImage1.classList.add("d-none");
    dessertsImage2.classList.add("d-none");
    dessertsImage3.classList.add("d-none");
    dessertsImage4.classList.add("d-none");
    dessertsImage5.classList.add("d-none");
    dessertsImage6.classList.add("image-view");

    backButton8Ele.classList.add("d-none");
    viewMoreButton8Ele.classList.remove("d-none");
}

function ShowOrderStatus() {
    OrderStatusImageEle.classList.remove("d-none");
    orderNowButtonEle.classList.add("d-none");
    orderBackButtonEle.classList.remove("d-none");
}

function BackOrderStatus() {
    OrderStatusImageEle.classList.add("d-none");
    orderNowButtonEle.classList.remove("d-none");
    orderBackButtonEle.classList.add("d-none");
}

/*https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-veg-starters-img.png
https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-soup-img.png
https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-grilled-seafood-img.png
https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-hyderabadi-biryani-img.png
https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-mushroom-noodles-img.png
https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-gluten-img.png
https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/em-coffee-bourbon-img.png
*/
