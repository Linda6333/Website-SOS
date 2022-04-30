$(document).ready(function () {


	$('#adoptme1').hover(
        function() {
            $('#adoptme1').attr('src', 'Images/togel1.png')
        },
        function() {
            $('#adoptme1').attr('src', 'Images/australian-shepherd-g5d79c01ef_1920.jpg')
        }
    );

    $('#adoptme2').hover(
        function () {
            $('#adoptme2').attr('src', 'Images/togel2.png')
        },
        function () {
            $('#adoptme2').attr('src', 'Images/cat-gf168344b6_1920.jpg')
        }
    );


    $('#adoptme3').hover(
        function () {
            $('#adoptme3').attr('src', 'Images/togel3.png')
        },
        function () {
            $('#adoptme3').attr('src', 'Images/dogtoadobt.jpg')
        }
    );

    $('#kitenadopt').hover(
        function () {
            $('#kitenadopt').attr('src', 'Images/mizzfulldetails.png')
        },
        function () {
            $('#kitenadopt').attr('src', 'Images/kittenadopt.jpg')
        }
    );

    $('#Baraktoadupt').hover(
        function () {
            $('#Baraktoadupt').attr('src', 'Images/barakadoptfulldetails.png')
        },
        function () {
            $('#Baraktoadupt').attr('src', 'Images/barakadopt.jpg')
        }
    );

    $('#bobadopt').hover(
        function () {
            $('#bobadopt').attr('src', 'Images/bobfulldetails.png')
        },
        function () {
            $('#bobadopt').attr('src', 'Images/bobtoadupt.jpg')
        }
    );

    $("form").submit(function () {
        alert("הטופס נשלח בהצלחה!");
    });


  
});

function initMap() {
    var sosTLV = { lat: 32.1172261, lng: 34.7996552 };
    var soshrzlia = { lat: 32.1791855, lng: 34.8247161 };

    var myMap = new google.maps.Map(document.getElementById("map"),
        {
            center: sosTLV,
            zoom: 15,
            mapTypeId: "roadmap",
        });

    var centerMarker = new google.maps.Marker({
        position: sosTLV,
        map: myMap,
        icon: {
            url: "../images/catsign.png", /* עיצוב האיקון לפי תמונה */
            scaledSize: new google.maps.Size(50, 50), /* גודל האייקון */
        }
    });

    var createdInfowindowtlv = new google.maps.InfoWindow({
        /* יצירת משתנה חלונית מידע בלחיצה על האייקון עם כיתוב מתאים */
        content: "<h5 class='infosign'> SOS תל אביב </h5>"
    });
    centerMarker.addListener("click", function () {
        /* הופעת חלונית המידע בלחיצה */
        createdInfowindowtlv.open(myMap, centerMarker);
    });
  
  
    var soshra = new google.maps.Marker({
        position: soshrzlia, /* מיקום כמו במשתנה הגלובאלי */
        map: myMap,/* על בסיס המפה שנוצרה קודם לכן */
        icon: {
            url: "../images/catdogsign.png", /* עיצוב האיקון לפי תמונה */
            scaledSize: new google.maps.Size(50, 50), /* גודל האייקון */
        }
    });

    var createdInfowindowhra = new google.maps.InfoWindow({
        /* יצירת משתנה חלונית מידע בלחיצה על האייקון עם כיתוב מתאים */
        content: "<h5 class='infosign'> SOS הרצליה </h5>"
    });

    soshra.addListener("click", function () {
        /* הופעת חלונית המידע בלחיצה */
        createdInfowindowhra.open(myMap, soshra)
    });


}
