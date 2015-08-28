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

        var clickarea = document.getElementById('clickarea' + i);
        clickarea.onclick = function(mouseEvent) {
            var id = mouseEvent.srcElement.id;
            var fingerNumber = parseInt(id.substring('clickarea'.length));
            var fingerId = 'finger' + fingerNumber;
            var fingerElement = document.getElementById(fingerId);

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
        }
    }
});
