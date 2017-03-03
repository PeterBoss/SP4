package exercise;

import static com.jayway.restassured.RestAssured.given;

public class Fetcher {

//  private final String mailTo = "admin@jokes.com";
    private final EmailSender sender;
    private final JokeFetcher jokeFetcher;

    public Fetcher(EmailSender sender, JokeFetcher jokeFetcher) {
        this.sender = sender;
        this.jokeFetcher = jokeFetcher;
    }
    
  
  /**
   * Fetch a Chuck Norris joke (not political correct jokes ;-), and returns it encapsulated as a Joke instance
   * IT uses REST assured to Fetch jokes, but don't focus on HOW it does what it do
   * @return The Joke
   * @throws CommunicationException If communication failed (i.e. the external server is not responding)
   */
//  private Joke fetchJokeInternal() throws CommunicationException {
//    try {
//      String joke = given().get("http://api.icndb.com/jokes/random").path("value.joke");
//      return new Joke(joke, "http://api.icndb.com/");
//    } catch (Exception e) {
//      throw new CommunicationException();
//    }
//  }
  
  /**
   * This sends an email to the receiver given in: mailTo. 
   * IMPORTANT if you see the output below, you should interpret is as a REAL EMAIL was sent
   * @param text Text to include in the mail
   */
//  private void sendEmailInternal(String text) {
//    System.out.println("#####################################################################################");
//    System.out.println("This simulates that a REAL EMAIL was sent to: " + mailTo + " with this text:\n" + text);
//    System.out.println("#####################################################################################");
//  }
  
  /**
   * Fetch a Chuck Norris Joke from http://api.icndb.com
   * @return A new Chuck Norris Joke
   * @throws CommunicationException In case of an error with the external call. 
   *                                This will also send an email to admin
   */
  public Joke fetchJoke() throws CommunicationException {
    try {
      return jokeFetcher.fetchJokeInternal();
    } catch (CommunicationException e) {
       sender.sendEmailInternal("There is a problem with the server: http://api.icndb.com/jokes/random");
       throw e; //Rethrow to signal error to the caller
    }
  }
  
  //DO NOT TEST THIS METHOD: It's just meant as a quick manual test, to see the code in action
  public static void main(String[] args) throws CommunicationException {
    Fetcher f = new Fetcher(new EmailSender("admin@jokes.com"), new JokeFetcher());
    System.out.println(f.fetchJoke());
  }
}
