import java.time.LocalDate;
​
public class Kata {
  public static String getVillianName(LocalDate birthdate) {
    String[] first = { "The Evil","The Vile","The Cruel", "The Trashy","The Despicable", "The Embarrassing", "The Disreputable","The Atrocious", "The Twirling",  "The Orange","The Terrifying", "The Awkward" };
    String[] last = { "Mustache", "Pickle", "Hood Ornament", "Raisin", "Recycling Bin", "Potato", "Tomato", "House Cat", "Teaspoon", "Laundry Basket" };
    int month = birthdate.getMonth().getValue()-1;
    String firstName = first[month];
    int day = birthdate.getDayOfMonth();
    int lasti = day%10;
    String lastName = last[lasti];
    return firstName+" "+lastName;
  }
}