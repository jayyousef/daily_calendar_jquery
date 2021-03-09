let todaysDate = $('#currentDay');
let currentTime = moment().format
const format = 'hh:mm:ss'

const calendarBoxes = $(".container")



//grabs the current time and formats it
//then uses JQuery to input the text into the empty <p> in the top section
function displayTime() {
    let rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    todaysDate.text(rightNow)
}
//calls the above function every 1000 ms
//there is no setTimeout because I want the function to run as long as the page is open
setInterval(displayTime, 1000);

//this function dynamically creates the columns and rows
function createRows() {
    const clearButton = $('<button>')
    const clearButtonDiv = $('<div>')

    for (let i = 8; i < 18; i++) {

        //what time to enter into each calendarTime
        let plannerTime = moment(i, 'H').format('h a')

        //variables for my new elements

        const calendarDiv = $('<div>')
        const textAreaEl = $('<textarea></textarea>')
        const calendarTime = $("<div>")
        const saveButton = $('<i>')
        // const saveBtn = $('<div>')
        // const submitBtn = $('<div>')
        // const progressBar = $('<div>')
        // const svgEl = $('<svg>')
        // const pathEl = $('<path>')
        const saveDiv = $('<button>')

        //add classes + any necessary attributes

        calendarDiv.addClass("row flex-nowrap p-1.5")

        calendarTime.addClass('col border-top').text(plannerTime)
        textAreaEl.addClass('col-9 bg-success text-center text-justify')
        textAreaEl.attr('placeholder', 'Type your appointment here')
        saveDiv.addClass('col saveBtn center-block bubbly-button')
        saveButton.addClass("far fa-save")
        // saveBtn.addClass('button')
        // submitBtn.addClass('text').text("Save")
        // progressBar.addClass('progress-bar')
        // svgEl.attr(
        //     {
        //         target:'x', title:'0px',
        //         target:'y', title:'0px',
        //         target:'viewBox', title:'0 0 25 30',
        //         target:'style', title:'enable-background:new 0 0 25 30;',                
        //     }
        //     );
        // pathEl.addClass('check st0')
        // pathEl.attr('d','M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2')

        //adding IDs for saving to 
        textAreaEl.attr('id', 'textArea-' + (i - 7))
        calendarTime.attr('id', 'calendarTime-' + (i - 7))
        saveDiv.attr('id', 'saveDiv-' + (i - 7))

        //append all elements to the DOM
        calendarBoxes.append(calendarDiv)
        calendarDiv.append(calendarTime)
        calendarDiv.append(textAreaEl)
        calendarDiv.append(saveDiv)

        saveDiv.append(saveButton)
        // saveDiv.append(saveBtn)
        // saveBtn.append(submitBtn)
        // saveDiv.append(progressBar)
        // saveDiv.append(svgEl)
        // svgEl.append(pathEl)

    }

    clearButtonDiv.addClass('row justify-content-center p-2 m-5')
    clearButton.addClass('clearButton btn btn-danger')
    clearButton.attr('id','clearButton')
    clearButton.text("Clear Calendar")

    calendarBoxes.append(clearButtonDiv)
    clearButtonDiv.append(clearButton)

}

createRows()

//add click event to save the text box when the "save icon" is clicked
// $('#saveDiv-1').on("click", function () {
//     alert("This appointment has been saved!!!")
//     //also save the text to the local storage 
// })

const calendarRow = $('.container') //this keyword will look at THIS element at the top level

$('.saveBtn').on('click', function () {
    //console.log(e.target.id)

    // set localstorage
    //const id = e.target.id;
    //const clickedEl = $("#"+e.target.id)
    const id = $(this).attr("id"); //this looks at the saveBtns , not anything else, not even the i tags
    const hour = id.split('-')[1]
    // console.log(hour)
    const textareaText = $("#textArea-" + hour).val(); //.val() gets and sets a value attribute in textarea



    //if e.target.id == null then e.target.parent().id check if null if not use this
    //console.log(hour);
    //clickedEl.attr('style', '{color: red}');
    localStorage.setItem("hour-" + hour, textareaText);

    // JSON.stringify()

    // test if it works
    // alert(localStorage.getItem('htmltest'));
    // JSON.parse()
});

getItemRows();
//set up a for loop but through what?
function getItemRows() {
    //querySelectorAll() <- javascript
    const rows = $('textarea');
    // console.log(rows);

    const currentHour = parseInt(moment().format('H')); //moment gives back a string 
    // console.log(currentHour);

    for (let i = 0; i < rows.length; i++) {
        let row = $(rows[i]); //without $() it'll be pure JS, now it is jquery!
        //this is not the actual hour we have on the DOM
        const hour = parseInt(row.attr('id').split("-")[1]);
        let storedText = localStorage.getItem("hour-" + hour);
        // console.log(storedText);
        row.val(storedText)
        const actualHour = hour+7; //"1"+7 = "17"

        if (currentHour>actualHour)//this row is in the past
         {
            row.removeClass('bg-success')
            row.addClass('past')
        }
        else if(currentHour==actualHour) {
            row.removeClass('bg-success')
            row.addClass('present')
        }
        else {
            row.removeClass('bg-success')
            row.addClass('future')
        }


    }
}
$('.col.border-top').on('click', function (e) {
    // console.log($(this))
    const borderTop = $(this)
    const clicked = borderTop.text()
    // console.log(clicked);
    //.value or .val() only works for elements with the value attribute, which is textarea, textbox, and form
})


// update colors based on past/present/future
function updateTextareaColor() {
    for (let i = 8; i < 18; i++) {
        let textareaEl = $('#textArea-' + (i - 7));
        var textArea = $('<textarea>');
        if (i == currentHour) {
            $('td').addClass('present');
        } else if (i < currentHour) {
            $('td').addClass('past');
        } else {
            $('td').addClass('future');
        }
    }
}

$('#clearButton').on('click',clearLocalStorage)

function clearLocalStorage(){
    localStorage.clear()
    location.reload();

}


var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }