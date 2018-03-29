import javax.mail.MessagingException;

/**
 * 测试类
 */
public class Test {
	
    public static void main(String[] args) {
        try {
            MailUtil.send_mail("1402992743@qq.com", String.valueOf(Math.random() * 999));
            System.out.println("邮件发送成功!");
        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}
