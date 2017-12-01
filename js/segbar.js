(function($) {
    const DEFAULT_WIDTH = "100%";
    const DEFAULT_HEIGHT = "80px";
    const palette = [
        '#cccccc',
        '#aaaaaa',
        '#999999',
        '#666666',

    ];

    $.fn.segbar = function(options = []) {
        $(this).each(function makeSegBar(index, item) {
            //Get data from options array
            let currentOptions = options[index];
            if( !currentOptions.data || (currentOptions.data.length <= 0) ) {
                throw new Error(`No data provided for chart at position ${index}`);
            }
            constructBar(this, currentOptions);
        });
        return this;
    };

    function constructBar(element, options) {
        let percentages = getPercentages(options.data);

        for(let i=0; i<options.data.length; i++)  {
            options.data[i].percent = +percentages[i];
        }
        console.log(options.data);

        element.style.width = options.width ? options.width : DEFAULT_WIDTH;
        element.style.height = options.height ? options.height : DEFAULT_HEIGHT;
        element.classList.add('segbar');
        let colorIt = getNextColor();

        for(let item of options.data) {

            let div = document.createElement('div');
            //Prepare wrapper
            div.style.display = "inline-block";
            div.style.height = "100%";
            div.style.width = `${parseFloat(item.percent*100)}%`;
            div.style.backgroundColor = (item.color) ? item.color : colorIt.next().value;
            div.style.position = "relative";
            div.setAttribute('data-toggle', "popover");
            div.setAttribute('data-trigger', "hover");
            div.setAttribute('title', "Detalle respuestas");
              div.setAttribute('data-content',item.title + ": " + prettifyPercentage(item.percent*100) + "%" + " ("+ item.value + ")");
            div.classList.add(item.title);


            //Percentage span
            let span = document.createElement('span');
            /*span.textContent = `${prettifyPercentage(item.percent*100)} %`;*/
            span.textContent = item.value;
            span.style.color = "white";
            span.style.position = "absolute";
            span.style.bottom = 8;
            span.style.right = 8;
            span.style.fontSize = 12;
            span.classList.add('porcentaje');

            //Title span
            if(item.title && item.title.length > 0) {
                let span = document.createElement('span');
                span.style.position = "absolute";
                span.style.left = 8;
                span.style.top = 8;
                span.style.color = "white";
                span.textContent = item.title;
                span.style.fontSize = "12px";
                span.style.fontWeight = 600;
                span.style.textTransform = "uppercase";
                span.classList.add('titulo');
                div.appendChild(span);
            }

            div.appendChild(span);
            element.appendChild(div);
        }
    }

    function prettifyPercentage(percentage) {
        let pretty = parseFloat(percentage).toFixed(2);
        let v = pretty.split('.');
        let final = 0;
        if(v[1]) {
            let digits = v[1].split('');
            if(digits[0] == 0 && digits[1] == 0) {
                final = parseFloat(`${v[0]}`);
            }
            else {
                final = pretty;
            }
        }
        else {
            final = parseFloat(v[0]);
        }
        return final;
    }

    //Accepts an array of chart data, returns an array of percentages
    function getPercentages(data) {
        let sum = getSum(data);

        return data.map(function (item) {
            return parseFloat(item.value / sum);
        });
    }

    //Accepts an array of chart data, returns the sum of all values
    function getSum(data) {
        return data.reduce(function (sum, item) {
            return sum + item.value;
        }, 0);
    }

    function* getNextColor() {
        let i = 0;
        while(true) {
            yield palette[i];
            i = (i + 1) % palette.length;
        }
    }

}(jQuery));
