let accordions = document.getElementsByClassName('accordion');
let contents = document.getElementsByClassName('content');

for (let i = 0; i < accordions.length; i++) {
    // anonymous function inside the loop to wrap the call to toggleAccordion(contents[i])
    accordions[i].addEventListener('click', function() {
        toggleAccordion(contents[i]);
    });
}

function toggleAccordion(content) {
    content.classList.toggle('active');
}
