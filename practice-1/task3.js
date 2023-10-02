function printSeasonByMonth(month) {
    const seasons = {
        "DECEMBER": "winter",
        "JANUARY": "winter",
        "FEBRUARY": "winter",
        "MARCH": "spring",
        "APRIL": "spring",
        "MAY": "spring",
        "JUNE": "summer",
        "JULY": "summer",
        "AUGUST": "summer",
        "SEPTEMBER": "autumn",
        "OCTOBER": "autumn",
        "NOVEMBER": "autumn"
    };
    console.log(seasons[month.toUpperCase()]);
}

printSeasonByMonth("SEPTEMBER");
printSeasonByMonth("NOVEMBER");
printSeasonByMonth("JULY");
printSeasonByMonth("APRIL");
