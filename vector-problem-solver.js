var input = "You are going out for a Sunday drive. Unfortunately, closed roads keep you from going where you originally wanted to go. You drive 10 miles east, then 7 miles south, then 2 miles west, and finally 1 mile north. Give a displacement vector, x, (in miles) to represent your journey and determine how far you are from your starting point. The distance from the starting point is";

var regex = /([0-9]+) miles? (south|east|west|north)/gi;
var c1 = 0, c2 = 0, match;
while(match = regex.exec(input)) {
    
    var magnitude = parseInt(match[1]);
    var direction = 1;
    
    if (match[2] == "west" || match[2] == "south") {
        var direction = -1;
    }

    var v = (magnitude * direction);

    if (match[2] == "north" || match[2] == "south") {
        c2 += v;
    } else {
        c1 += v;
    }

}
console.log("[" + c1 + " " + c2 + "]");
