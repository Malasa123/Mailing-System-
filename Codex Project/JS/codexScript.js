        shareTool1 = false;
        shareTool2 = false;

        $(function () {
            $("#datepicker1").datepicker();
            $("#datepicker2").datepicker();
            $("#datepicker3").datepicker();
            hideIcons();
            // get all api calls that need
            getIp();
            getLanguage();
            let stopKey = setInterval(function () { getTime() }, 1000);
        });

        $("#share1").click(function () {
            console.log("share 1");
            if (!shareTool1) {
                $("#sharetool1").show();
                $("#share1").css("color", "blue");
                shareTool1 = true;
            } else {
                hideIcons();
            }
        });


        $("#share2").click(function () {
            console.log("share 2");
            if (!shareTool2) {
                $("#sharetool2").show();
                $("#share2").css("color", "blue");
                shareTool2 = true;
            } else {
                hideIcons();
            }
        });

        var hideIcons = () => {
            console.log("Hide !!");
            $("#sharetool2").hide();
            $("#sharetool1").hide();
            shareTool1 = false;
            shareTool2 = false;
            $("#share1").css("color", "black");
            $("#share2").css("color", "black");
        }

        var getIp = () => {
            $.ajax({
                url: "http://ip.jsontest.com",
                dataType: 'jsonp',
                success: function (response) {
                    $("#ip").text(response.ip);
                }
            });
        }

        var getTime = () => {
            $.ajax({
                url: "http://time.jsontest.com/",
                dataType: 'jsonp',
                success: function (response) {
                    $("#time").text(response.time);
                }
            });
        }

        var getLanguage = () => {
            $.ajax({
                url: "http://headers.jsontest.com/",
                dataType: 'jsonp',
                success: function (response) {
                    console.log(response);
                    $("#lang").text(response['Accept-Language'].split(',')[0]);
                }
            });
        }
