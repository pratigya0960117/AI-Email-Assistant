import org.springframework.web.client.RestTemplate;
import org.springframework.http.*;

public class GeminiService {

    private static final String API_KEY = "YOUR_GEMINI_API_KEY";

    public static String generate(String prompt, String tone) {
        RestTemplate restTemplate = new RestTemplate();

        String url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + API_KEY;

        String body = """
        {
          "contents": [{
            "parts":[{"text": "Write a %s email for: %s"}]
          }]
        }
        """.formatted(tone, prompt);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<String> entity = new HttpEntity<>(body, headers);

        ResponseEntity<String> response = restTemplate.postForEntity(url, entity, String.class);

        return response.getBody();
    }
}
