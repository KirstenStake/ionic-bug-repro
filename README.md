# modal-ionic-bug
Reproducing repo for ionic modal-shadow bug

**Current Behavior**
When settings a --height (or any of the height variables) to an ion-modal, that height gets applied to the class .modal-shadow as well but the positioning is not correct. This results in a section of the shadow preventing click events.

This seems to have only happened recently as was working fine for a long time.

**Expected Behavior**
Setting a different height to the modal other than 100% should have no effect on the modal-shadow placement.

**Steps to Reproduce**
- set --height variable to any % value lower than 100%
- set margin-top: auto; to the shadow root content part
- inspect the .modal-shadow class, you can see that it has the same % applied but the positioning is higher than the modal
