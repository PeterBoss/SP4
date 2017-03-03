package exercise;

/**
 *
 * @author Peter
 */
public class EmailSender {

    private final String mailTo;

    public EmailSender(String mailTo) {
        this.mailTo = mailTo;
    }

    public void sendEmailInternal(String text) {
        System.out.println("#####################################################################################");
        System.out.println("This simulates that a REAL EMAIL was sent to: " + mailTo + " with this text:\n" + text);
        System.out.println("#####################################################################################");
    }

}
