import exercise.CommunicationException;
import exercise.EmailSender;
import exercise.Fetcher;
import exercise.Joke;
import exercise.JokeFetcher;
import static org.junit.Assert.assertEquals;
import org.junit.Test;
import org.junit.runner.RunWith;
import static org.mockito.Matchers.anyString;
import org.mockito.Mock;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import org.mockito.runners.MockitoJUnitRunner;

/**
 *
 * @author Peter
 */
@RunWith(MockitoJUnitRunner.class)
public class FetcherTest {

    @Mock
    private JokeFetcher jokeFetcher;
    @Mock
    private EmailSender emailSender;

    @Test
    public void testJokeFetching() throws CommunicationException {
        when(jokeFetcher.fetchJokeInternal()).thenReturn(new Joke("testJoke", "testReference"));
        Fetcher fetcher = new Fetcher(emailSender, jokeFetcher);
        assertEquals(fetcher.fetchJoke().getJoke(), "testJoke");
    }

    @Test(expected = CommunicationException.class)
    public void testException() throws CommunicationException {
        when(jokeFetcher.fetchJokeInternal()).thenThrow(new CommunicationException());
        Fetcher fetcher = new Fetcher(emailSender, jokeFetcher);
        fetcher.fetchJoke();
        verify(emailSender).sendEmailInternal(anyString());  //not sure this does anything
    }

}
