  // Original JavaScript code by Chirp Internet: www.chirp.com.au
  // Please acknowledge use of this code by including this header.

  function rollDie(sides)
  {
    if(!sides) sides = 6;
    with(Math) return 1 + floor(random() * sides);
  }

  function rollDice(number, sides)
  {
    var total = 0;
    while(number-- > 0) total += rollDie(sides);
    return total;
  }