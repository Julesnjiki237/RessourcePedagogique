document.addEventListener("DOMContentLoaded", function() {
    var toggleList = document.querySelectorAll(".toggle-list h3");

    toggleList.forEach(function(item) {
        item.addEventListener("click", function() {
            var list = this.nextElementSibling;
            list.classList.toggle("visible");
            
            // Masquer les autres listes
            toggleList.forEach(function(other) {
                if (other !== item) {
                    other.nextElementSibling.classList.remove("visible");
                }
            });

            
        });
    });
});


