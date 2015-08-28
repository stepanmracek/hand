document.addEventListener("DOMContentLoaded", function(event) {

    var selected = 'finger-selected';
    var notSelected = 'finger-not-selected';
    var hasBio = 'finger-has-bio';

    var fingerElements = [];
    var hasBioFingers = {};
    var selectedFinger = undefined;

    for (var i = 1; i <= 10; i++) {
        var finger = document.getElementById('finger' + i);
        fingerElements.push(finger);
        if (i % 3 == 0) {
            hasBioFingers[i] = true;
            finger.classList.add(hasBio);
        } else {
            finger.classList.add(notSelected);
        }

        var getFingerNumber = function(clickarea) {
            var id = clickarea.id;
            return parseInt(id.substring('clickarea'.length));
        };

        var getFingerElement = function(clickarea) {
            var fingerNumber = getFingerNumber(clickarea);
            var fingerId = 'finger' + fingerNumber;
            return document.getElementById(fingerId);
        }

        var clickarea = document.getElementById('clickarea' + i);
        clickarea.onclick = function(mouseEvent) {
            var fingerNumber = getFingerNumber(mouseEvent.srcElement);
            var fingerElement = getFingerElement(mouseEvent.srcElement);

            selectedFinger = fingerNumber;
            fingerElements.forEach(function(f) {
                var fingerNumber = parseInt(f.id.substring('finger'.length));

                if (fingerNumber == selectedFinger) {
                    f.classList.remove(notSelected);
                    f.classList.remove(hasBio);
                    f.classList.add(selected);
                } else {
                    f.classList.remove(selected);
                    if (hasBioFingers[fingerNumber] == true) {
                        f.classList.remove(notSelected);
                        f.classList.add(hasBio);
                    } else {
                        f.classList.remove(hasBio);
                        f.classList.add(notSelected);
                    }
                }
            });
        };

        clickarea.onmouseover = function(mouseEvent) {
            var fingerElement = getFingerElement(mouseEvent.srcElement);
            fingerElement.classList.add('mouse-over');
        };

        clickarea.onmouseout = function(mouseEvent) {
            var fingerElement = getFingerElement(mouseEvent.srcElement);
            fingerElement.classList.remove('mouse-over');
        };
    }
});
