package exercise;

import static com.jayway.restassured.RestAssured.given;

/**
 *
 * @author Peter
 */
public class JokeFetcher {

    public Joke fetchJokeInternal() throws CommunicationException {
        try {
            String joke = given().get("http://api.icndb.com/jokes/random").path("value.joke");
            return new Joke(joke, "http://api.icndb.com/");
        } catch (Exception e) {
            throw new CommunicationException();
        }
    }

}
