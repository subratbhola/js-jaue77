const debounce = function (fn, delay) {
    let timer;
    return function() {
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, 300);
    }
};

const doMagic = debounce(printdetails, 300);

function printdetails(city, country) {
    console.log(`${city}, ${country}`);
}
doMagic("berhampur", "India");

