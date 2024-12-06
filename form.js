$(document).ready(function() {
    $('#name, #email, #phone, #match, #tickets, #comments').mouseenter(function() {
        $(this).css('background-color', 'lightgreen');
    });
    $('#name, #email, #phone, #match, #tickets, #comments').mouseleave(function() {
        $(this).css('background-color', '');
    });
    $('#name').blur(function() { 
        var value = $('#name').val();
        $('#name').val(value.toUpperCase()); 
    });

    $('h1').mouseenter(function() {
        $('h1').text('Welcome to Ticket booking');
    });
    $('h1').mouseleave(function() {
        $('h1').text('TEST CHAMPIONS');
    });

    $('#p1').click(function() {
        $(this).text('No eatables, drinks, liquids, bottles, cans, tins, bags, lighters, matches and flammable items, illegal or hazardous substances are allowed inside the venue and the seating area (“Prohibited Items”). Ticket holders’ belongings will be searched on entry to the event. If ticket holder elects not to consent to such searches, and/or are found in possession of Prohibited Items, they may be denied entry to the Event without refund or other compensation.');
    });

    $('#p1').dblclick(function() {
        $(this).text('Terms & Conditions');
    });

    $('#cal').click(function(event) {
        event.preventDefault(); // Prevent form submission

        var fname = $('#name').val();
        var eemail = $('#email').val();
        var pphone = $('#phone').val();
        var mmatch = $('#match').val();
        var ttickets = parseInt($('#tickets').val());
        var ccomments = $('#comments').val();

        $("#p2").html(
            "Full Name: " + fname + "<br>" +
            "Email: " + eemail + "<br>" +
            "Phone: " + pphone + "<br>" +
            "Match: " + mmatch + "<br>" +
            "Number of Tickets: " + ttickets + "<br>" +
            "Comments: " + ccomments
        );
    });
});